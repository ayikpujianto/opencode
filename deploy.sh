#!/usr/bin/env bash
set -euo pipefail

# ─── Configuration ───────────────────────────────────────────────────────────────
NEW_BINARY="/opt/ai-gateway/studio-ai-v3/source/packages/opencode/dist/opencode-linux-x64/bin/opencode"
OPENCODE_BIN="/home/ayikepujianto/.opencode/bin/opencode"
STUDIO_BIN="/opt/ai-gateway/studio-ai-v3/bin/studio-ai"
BACKUP_DIR="/opt/ai-gateway/studio-ai-v3/backups/$(date +%Y%m%d-%H%M%S)"
OPENCODE_SERVICE="opencode-web.service"
STUDIO_SERVICE="studio-ai-v3-staging.service"

# ─── Colors ──────────────────────────────────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

step() { echo -e "\n${YELLOW}▶ $1${NC}"; }
ok()   { echo -e "${GREEN}  ✓ $1${NC}"; }
fail() { echo -e "${RED}  ✗ $1${NC}" >&2; exit 1; }

# ─── Preflight ───────────────────────────────────────────────────────────────────
if [[ $EUID -ne 0 ]]; then
  echo "This script must be run as root (or with sudo)."
  exit 1
fi

if [[ ! -f "$NEW_BINARY" ]]; then
  fail "New binary not found: $NEW_BINARY"
fi

for bin in "$OPENCODE_BIN" "$STUDIO_BIN"; do
  if [[ ! -f "$bin" ]]; then
    fail "Existing binary not found: $bin"
  fi
done

echo "═══════════════════════════════════════════════════════════════"
echo "  Deployment Plan"
echo "═══════════════════════════════════════════════════════════════"
echo "  New binary:   $NEW_BINARY ($(du -h "$NEW_BINARY" | cut -f1))"
echo "  OpenCode bin: $OPENCODE_BIN ($(du -h "$OPENCODE_BIN" | cut -f1))"
echo "  Studio AI:    $STUDIO_BIN ($(du -h "$STUDIO_BIN" | cut -f1))"
echo "  Backup dir:   $BACKUP_DIR"
echo "  Services:     $OPENCODE_SERVICE, $STUDIO_SERVICE"
echo "═══════════════════════════════════════════════════════════════"
echo ""
read -p "Proceed with deployment? [y/N] " confirm
if [[ "$confirm" != "y" && "$confirm" != "Y" ]]; then
  echo "Aborted."
  exit 0
fi

# ─── 1. Stop services ────────────────────────────────────────────────────────────
step "Stopping services..."
systemctl stop "$OPENCODE_SERVICE" 2>/dev/null && ok "$OPENCODE_SERVICE stopped" || ok "$OPENCODE_SERVICE was not running"
systemctl stop "$STUDIO_SERVICE"  2>/dev/null && ok "$STUDIO_SERVICE stopped"  || ok "$STUDIO_SERVICE was not running"
sleep 1

# ─── 2. Backup existing binaries ────────────────────────────────────────────────
step "Backing up existing binaries..."
mkdir -p "$BACKUP_DIR"
cp "$OPENCODE_BIN" "$BACKUP_DIR/opencode"
cp "$STUDIO_BIN"   "$BACKUP_DIR/studio-ai"
ok "Backups saved to $BACKUP_DIR"
ls -lh "$BACKUP_DIR"

# ─── 3. Install new binaries ────────────────────────────────────────────────────
step "Installing new binaries..."
cp "$NEW_BINARY" "$OPENCODE_BIN"
cp "$NEW_BINARY" "$STUDIO_BIN"
ok "Both binaries replaced"

# ─── 4. Restore permissions ─────────────────────────────────────────────────────
step "Restoring permissions..."
chown ayikepujianto:ayikepujianto "$OPENCODE_BIN"
chown ayikepujianto:ayikepujianto "$STUDIO_BIN"
chmod 755 "$OPENCODE_BIN"
chmod 755 "$STUDIO_BIN"
ok "Permissions restored (ayikepujianto:ayikepujianto 755)"

# ─── 5. Restart services ────────────────────────────────────────────────────────
step "Starting services..."
systemctl start "$OPENCODE_SERVICE"
systemctl start "$STUDIO_SERVICE"
sleep 2
ok "Services started"

# ─── 6. Verify versions ────────────────────────────────────────────────────────
step "Verifying binary versions..."
OPENCODE_VER=$("$OPENCODE_BIN" --version 2>/dev/null || echo "FAILED")
STUDIO_VER=$("$STUDIO_BIN" --version 2>/dev/null || echo "FAILED")
ok "OpenCode:  $OPENCODE_VER"
ok "Studio AI: $STUDIO_VER"

# ─── 7. Verify services ────────────────────────────────────────────────────────
step "Verifying services..."
OPENCODE_STATUS=$(systemctl is-active "$OPENCODE_SERVICE" 2>/dev/null || echo "unknown")
STUDIO_STATUS=$(systemctl is-active "$STUDIO_SERVICE" 2>/dev/null || echo "unknown")
ok "$OPENCODE_SERVICE: $OPENCODE_STATUS"
ok "$STUDIO_SERVICE: $STUDIO_STATUS"

# ─── 8. Verify web endpoints ───────────────────────────────────────────────────
step "Verifying web endpoints..."
OPENCODE_HTTP=$(curl -s -o /dev/null -w "%{http_code}" --max-time 5 http://localhost:4096/ 2>/dev/null || echo "000")
STUDIO_HTTP=$(curl -s -o /dev/null -w "%{http_code}" --max-time 5 http://localhost:4196/ 2>/dev/null || echo "000")
ok "OpenCode  :4096 → HTTP $OPENCODE_HTTP"
ok "Studio AI :4196 → HTTP $STUDIO_HTTP"

# ─── Summary ─────────────────────────────────────────────────────────────────────
echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "  Deployment Complete"
echo "═══════════════════════════════════════════════════════════════"
echo "  OpenCode  → $OPENCODE_VER ($OPENCODE_STATUS, HTTP $OPENCODE_HTTP)"
echo "  Studio AI → $STUDIO_VER ($STUDIO_STATUS, HTTP $STUDIO_HTTP)"
echo "  Backup    → $BACKUP_DIR"
echo "═══════════════════════════════════════════════════════════════"
