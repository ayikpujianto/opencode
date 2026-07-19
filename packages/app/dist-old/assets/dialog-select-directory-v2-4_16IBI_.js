import{bO as la,bK as aa,bP as ca,bj as ua,aG as lt,az as Nn,aE as Lo,aK as da,bd as ha,bc as Fo,at as fa,aq as xe,e as pa,g as ga,i as ma,c as va,a$ as Le,a7 as ya,b3 as gr,ao as mr,a as Zt,bl as ba,bk as Ia,_ as vr,m as wa,aP as en,aD as xa,bu as yr,bb as Sa,d as _a,bF as Bo,b as Ca,ac as zo,ah as ka,bo as Pa,bh as Ea,af as br,bA as Vt,bi as Ir,aA as Da,ba as Ta,aM as Ma,as as Aa}from"./index-sg3Qc5US.js";const Hn="file-tree-container",wr="data-file-tree-style",Ho="data-file-tree-unsafe-css",Na="data-file-tree-scrollbar-measure",Oo="data-file-tree-scrollbar-gutter-measured",Ra="--trees-scrollbar-gutter-measured",$o="f::",Er="header",on="context-menu",Dr="context-menu-trigger";var qo=`@layer base, theme, unsafe;

@layer base {
  :host {
    /*
      CSS variables use a fallback stack to ensure user and theme colors slot
      in with ease. User colors take precedence over theme colors, which take
      precedence over defaults.

      Fallback order:

      1. --trees-*-override (explicit)
      2. --trees-theme-* (e.g. Shiki/VS Code tokens)
      3. defaults

      Theme variable names mirror Shiki/VS Code theme file JSON tokens.

      // Available CSS Color Overrides
      --trees-fg-override
      --trees-fg-muted-override
      --trees-bg-override
      --trees-bg-muted-override
      --trees-accent-override
      --trees-border-color-override

      --trees-focus-ring-color-override
      --trees-focus-ring-width-override
      --trees-focus-ring-offset-override

      --trees-search-fg-override
      --trees-search-font-weight-override
      --trees-search-bg-override

      --trees-selected-fg-override
      --trees-selected-bg-override
      --trees-selected-focused-border-color-override

      // Git Status Color Overrides
      --trees-status-added-override
      --trees-status-ignored-override
      --trees-status-modified-override
      --trees-status-renamed-override
      --trees-status-untracked-override
      --trees-status-deleted-override
      --trees-git-added-color-override
      --trees-git-ignored-color-override
      --trees-git-modified-color-override
      --trees-git-renamed-color-override
      --trees-git-untracked-color-override
      --trees-git-deleted-color-override

      // Built-in File Icon Color Overrides
      --trees-file-icon-color
      --trees-file-icon-color-astro
      --trees-file-icon-color-babel
      --trees-file-icon-color-bash
      --trees-file-icon-color-biome
      --trees-file-icon-color-bootstrap
      --trees-file-icon-color-browserslist
      --trees-file-icon-color-bun
      --trees-file-icon-color-c
      --trees-file-icon-color-cpp
      --trees-file-icon-color-claude
      --trees-file-icon-color-css
      --trees-file-icon-color-database
      --trees-file-icon-color-default
      --trees-file-icon-color-docker
      --trees-file-icon-color-eslint
      --trees-file-icon-color-git
      --trees-file-icon-color-go
      --trees-file-icon-color-graphql
      --trees-file-icon-color-html
      --trees-file-icon-color-image
      --trees-file-icon-color-javascript
      --trees-file-icon-color-json
      --trees-file-icon-color-markdown
      --trees-file-icon-color-mcp
      --trees-file-icon-color-npm
      --trees-file-icon-color-oxc
      --trees-file-icon-color-postcss
      --trees-file-icon-color-prettier
      --trees-file-icon-color-python
      --trees-file-icon-color-react
      --trees-file-icon-color-ruby
      --trees-file-icon-color-rust
      --trees-file-icon-color-sass
      --trees-file-icon-color-svg
      --trees-file-icon-color-svelte
      --trees-file-icon-color-svgo
      --trees-file-icon-color-swift
      --trees-file-icon-color-table
      --trees-file-icon-color-text
      --trees-file-icon-color-tailwind
      --trees-file-icon-color-terraform
      --trees-file-icon-color-typescript
      --trees-file-icon-color-vite
      --trees-file-icon-color-vscode
      --trees-file-icon-color-vue
      --trees-file-icon-color-wasm
      --trees-file-icon-color-webpack
      --trees-file-icon-color-yml
      --trees-file-icon-color-zig
      --trees-file-icon-color-zip

      // Density
      //
      // A unitless scale factor for padding, gaps, and indentation. Usually
      // set via \`density\` on useFileTree. Individual overrides take precedence.
      //
      //   Compact: 0.8
      //   Default: 1
      //   Relaxed: 1.2
      //
      --trees-density-override

      // Available CSS Layout Overrides
      --trees-gap-override
      --trees-border-radius-override
      --trees-font-family-override
      --trees-font-size-override
      --trees-font-weight-regular-override
      --trees-font-weight-semibold-override
      --trees-level-gap-override
      --trees-item-padding-x-override
      --trees-item-margin-x-override
      --trees-item-row-gap-override
      --trees-icon-width-override
      --trees-icon-nudge-override
      --trees-scrollbar-gutter-override
      --trees-padding-inline-override
    */

    --trees-accent: var(--trees-accent-override, #009fff);
    --trees-fg: var(
      --trees-fg-override,
      var(--trees-theme-sidebar-fg, light-dark(#6c6c71, #adadb1))
    );
    --trees-fg-muted: var(
      --trees-fg-muted-override,
      var(--trees-theme-sidebar-header-fg, light-dark(#84848a, #84848a))
    );
    --trees-bg: var(
      --trees-bg-override,
      var(--trees-theme-sidebar-bg, light-dark(#f8f8f8, #141415))
    );
    /* var(--trees-theme-list-hover-bg, light-dark(#dfebff59, #19283c59)) */
    --trees-bg-muted: var(
      --trees-bg-muted-override,
      var(
        --trees-theme-list-hover-bg,
        light-dark(
          color-mix(
            in lab,
            var(--trees-accent) var(--trees-bg-alpha-light, 8%),
            var(--trees-bg)
          ),
          color-mix(
            in lab,
            var(--trees-accent) var(--trees-bg-alpha-dark, 10%),
            var(--trees-bg)
          )
        )
      )
    );
    --trees-input-bg: var(
      --trees-input-bg-override,
      light-dark(#f8f8f8, #070707)
    );

    --trees-added-light: #16a994;
    --trees-added-dark: #00cab1;
    --trees-ignored-light: #adadb1;
    --trees-ignored-dark: #4a4a4e;
    --trees-modified-light: #1ca1c7;
    --trees-modified-dark: #08c0ef;
    --trees-renamed-light: #d5a910;
    --trees-renamed-dark: #ffd452;
    --trees-untracked-light: #16a994;
    --trees-untracked-dark: #00cab1;
    --trees-deleted-light: #ff2e3f;
    --trees-deleted-dark: #ff6762;

    --trees-border-color: var(
      --trees-border-color-override,
      var(--trees-theme-sidebar-border, light-dark(#eeeeef, #070707))
    );
    --trees-indent-guide-bg: var(
      --trees-indent-guide-bg-override,
      color-mix(in lab, var(--trees-fg-muted) 25%, transparent)
    );
    --trees-density: var(--trees-density-override, 1);
    --trees-border-radius: var(
      --trees-border-radius-override,
      calc(6px * var(--trees-density))
    );

    --trees-font-family: var(--trees-font-family-override, system-ui);
    --trees-font-size: var(--trees-font-size-override, 13px);
    --trees-font-weight-regular: var(--trees-font-weight-regular-override, 400);
    --trees-font-weight-semibold: var(
      --trees-font-weight-semibold-override,
      600
    );

    --trees-focus-ring-color: var(
      --trees-focus-ring-color-override,
      var(--trees-theme-focus-ring, var(--trees-accent))
    );
    --trees-focus-ring-width: var(--trees-focus-ring-width-override, 1px);
    --trees-focus-ring-offset: var(--trees-focus-ring-offset-override, -1px);

    --trees-search-fg: var(
      --trees-search-fg-override,
      var(--trees-theme-input-fg, var(--trees-fg))
    );
    --trees-search-font-weight: var(--trees-search-font-weight-override, 600);
    --trees-search-bg: var(
      --trees-search-bg-override,
      var(--trees-theme-input-bg, var(--trees-input-bg))
    );

    --trees-scrollbar-thumb: var(
      --trees-scrollbar-thumb-override,
      var(
        --trees-theme-scrollbar-thumb,
        color-mix(in lab, var(--trees-fg) 25%, var(--trees-bg))
      )
    );

    --trees-selected-fg: var(
      --trees-selected-fg-override,
      var(--trees-theme-list-active-selection-fg, var(--trees-fg))
    );
    --trees-selected-bg: var(
      --trees-selected-bg-override,
      var(
        --trees-theme-list-active-selection-bg,
        light-dark(
          color-mix(in lab, var(--trees-accent) 12%, var(--trees-bg)),
          color-mix(in lab, var(--trees-accent) 15%, var(--trees-bg))
        )
      )
    );
    --trees-selected-focused-border-color: var(
      --trees-selected-focused-border-color-override,
      var(--trees-theme-focus-ring, var(--trees-accent))
    );

    /* Git status (e.g. from Shiki theme gitDecoration.*) */
    --trees-status-added: var(
      --trees-status-added-override,
      var(
        --trees-theme-git-added-fg,
        light-dark(var(--trees-added-light), var(--trees-added-dark))
      )
    );
    --trees-status-ignored: var(
      --trees-status-ignored-override,
      var(
        --trees-theme-git-ignored-fg,
        light-dark(var(--trees-ignored-light), var(--trees-ignored-dark))
      )
    );
    --trees-status-modified: var(
      --trees-status-modified-override,
      var(
        --trees-theme-git-modified-fg,
        light-dark(var(--trees-modified-light), var(--trees-modified-dark))
      )
    );
    --trees-status-renamed: var(
      --trees-status-renamed-override,
      var(
        --trees-theme-git-renamed-fg,
        light-dark(var(--trees-renamed-light), var(--trees-renamed-dark))
      )
    );
    --trees-status-untracked: var(
      --trees-status-untracked-override,
      var(
        --trees-theme-git-untracked-fg,
        light-dark(var(--trees-untracked-light), var(--trees-untracked-dark))
      )
    );
    --trees-status-deleted: var(
      --trees-status-deleted-override,
      var(
        --trees-theme-git-deleted-fg,
        light-dark(var(--trees-deleted-light), var(--trees-deleted-dark))
      )
    );
    --trees-git-modified-color: var(
      --trees-git-modified-color-override,
      var(--trees-status-modified)
    );
    --trees-git-added-color: var(
      --trees-git-added-color-override,
      var(--trees-status-added)
    );
    --trees-git-ignored-color: var(
      --trees-git-ignored-color-override,
      var(--trees-status-ignored)
    );
    --trees-git-deleted-color: var(
      --trees-git-deleted-color-override,
      var(--trees-status-deleted)
    );
    --trees-git-renamed-color: var(
      --trees-git-renamed-color-override,
      var(--trees-status-renamed)
    );
    --trees-git-untracked-color: var(
      --trees-git-untracked-color-override,
      var(--trees-status-untracked)
    );

    --trees-icon-gray: light-dark(#84848a, #adadb1);
    --trees-icon-red: light-dark(#d52c36, #ff6762);
    --trees-icon-vermilion: light-dark(#ff8c5b, #d5512f);
    --trees-icon-orange: light-dark(#d47628, #ffa359);
    --trees-icon-yellow: light-dark(#d5a910, #ffd452);
    --trees-icon-green: light-dark(#199f43, #5ecc71);
    --trees-icon-teal: light-dark(#17a5af, #64d1db);
    --trees-icon-cyan: light-dark(#1ca1c7, #68cdf2);
    --trees-icon-blue: light-dark(#1a85d4, #69b1ff);
    --trees-icon-indigo: light-dark(#693acf, #9d6afb);
    --trees-icon-purple: light-dark(#a631be, #d568ea);
    --trees-icon-pink: light-dark(#d32a61, #ff678d);
    --trees-icon-mauve: light-dark(#594c5b, #79697b);

    --trees-file-icon-color-default: var(
      --trees-file-icon-color,
      var(--trees-icon-gray)
    );
    --trees-file-icon-color-astro: var(
      --trees-file-icon-color,
      var(--trees-icon-purple)
    );
    --trees-file-icon-color-babel: var(
      --trees-file-icon-color,
      var(--trees-icon-yellow)
    );
    --trees-file-icon-color-bash: var(
      --trees-file-icon-color,
      var(--trees-icon-green)
    );
    --trees-file-icon-color-biome: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-bootstrap: var(
      --trees-file-icon-color,
      var(--trees-icon-indigo)
    );
    --trees-file-icon-color-browserslist: var(
      --trees-file-icon-color,
      var(--trees-icon-yellow)
    );
    --trees-file-icon-color-bun: var(
      --trees-file-icon-color,
      var(--trees-icon-mauve)
    );
    --trees-file-icon-color-c: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-cpp: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-claude: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-css: var(
      --trees-file-icon-color,
      var(--trees-icon-indigo)
    );
    --trees-file-icon-color-database: var(
      --trees-file-icon-color,
      var(--trees-icon-purple)
    );
    --trees-file-icon-color-docker: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-eslint: var(
      --trees-file-icon-color,
      var(--trees-icon-indigo)
    );
    --trees-file-icon-color-git: var(
      --trees-file-icon-vermilion,
      var(--trees-icon-vermilion)
    );
    --trees-file-icon-color-go: var(
      --trees-file-icon-color,
      var(--trees-icon-cyan)
    );
    --trees-file-icon-color-graphql: var(
      --trees-file-icon-color,
      var(--trees-icon-pink)
    );
    --trees-file-icon-color-html: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-image: var(
      --trees-file-icon-color,
      var(--trees-icon-pink)
    );
    --trees-file-icon-color-javascript: var(
      --trees-file-icon-color,
      var(--trees-icon-yellow)
    );
    --trees-file-icon-color-json: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-markdown: var(
      --trees-file-icon-color,
      var(--trees-icon-green)
    );
    --trees-file-icon-color-mcp: var(
      --trees-file-icon-color,
      var(--trees-icon-teal)
    );
    --trees-file-icon-color-npm: var(
      --trees-file-icon-color,
      var(--trees-icon-red)
    );
    --trees-file-icon-color-oxc: var(
      --trees-file-icon-cyan,
      var(--trees-icon-cyan)
    );
    --trees-file-icon-color-postcss: var(
      --trees-file-icon-color,
      var(--trees-icon-red)
    );
    --trees-file-icon-color-prettier: var(
      --trees-file-icon-color,
      var(--trees-icon-teal)
    );
    --trees-file-icon-color-python: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-react: var(
      --trees-file-icon-color,
      var(--trees-icon-cyan)
    );
    --trees-file-icon-color-ruby: var(
      --trees-file-icon-color,
      var(--trees-icon-red)
    );
    --trees-file-icon-color-rust: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-sass: var(
      --trees-file-icon-color,
      var(--trees-icon-pink)
    );
    --trees-file-icon-color-svg: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-svelte: var(
      --trees-file-icon-color,
      var(--trees-icon-red)
    );
    --trees-file-icon-color-svgo: var(
      --trees-file-icon-color,
      var(--trees-icon-green)
    );
    --trees-file-icon-color-swift: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-table: var(
      --trees-file-icon-color,
      var(--trees-icon-teal)
    );
    --trees-file-icon-color-text: var(
      --trees-file-icon-color,
      var(--trees-icon-gray)
    );
    --trees-file-icon-color-tailwind: var(
      --trees-file-icon-color,
      var(--trees-icon-cyan)
    );
    --trees-file-icon-color-terraform: var(
      --trees-file-icon-color,
      var(--trees-icon-indigo)
    );
    --trees-file-icon-color-typescript: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-vite: var(
      --trees-file-icon-color,
      var(--trees-icon-purple)
    );
    --trees-file-icon-color-vscode: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-vue: var(
      --trees-file-icon-color,
      var(--trees-icon-green)
    );
    --trees-file-icon-color-wasm: var(
      --trees-file-icon-color,
      var(--trees-icon-indigo)
    );
    --trees-file-icon-color-webpack: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-yml: var(
      --trees-file-icon-color,
      var(--trees-icon-red)
    );
    --trees-file-icon-color-zig: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-zip: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );

    --trees-level-gap: var(
      --trees-level-gap-override,
      calc(8px * var(--trees-density))
    );
    --trees-item-padding-x: var(
      --trees-item-padding-x-override,
      calc(8px * var(--trees-density))
    );
    --trees-item-margin-x: var(
      --trees-item-margin-x-override,
      calc(2px * var(--trees-density))
    );
    --trees-item-row-gap: var(
      --trees-item-row-gap-override,
      calc(6px * var(--trees-density))
    );
    --trees-icon-width: var(--trees-icon-width-override, 16px);
    --trees-icon-nudge: var(
      --trees-icon-nudge-override,
      calc(1px * var(--trees-density))
    );
    --trees-row-height: var(--trees-item-height, 30px);
    --trees-git-lane-width: var(--trees-git-lane-width-override, 12px);
    --trees-action-lane-width: var(
      --trees-action-lane-width-override,
      calc(var(--trees-icon-width) + 2px)
    );
    /* Keep the floating trigger aligned with the row's action lane. Going in
       from the root's right edge: the scroll container reserves
       \`--trees-padding-inline\` of effective inset on each side (its asymmetric
       padding formula cancels the scrollbar gutter on the right), the row
       sits inside that inset, and its trailing \`--trees-item-padding-x\` is the
       action lane itself. The trigger's own focus-ring margin then trims one
       pixel back so the button's visible right edge lines up with the lane. */
    --trees-context-menu-trigger-inline-offset: calc(
      var(--trees-padding-inline) + var(--trees-item-padding-x) -
        var(--trees-focus-ring-width)
    );

    --trees-scrollbar-gutter: var(--trees-scrollbar-gutter-override, 6px);
    --trees-padding-inline: var(--trees-padding-inline-override, 16px);

    color-scheme: light dark;
    display: flex;
    flex-direction: column;
    font-size: var(--trees-font-size);
    color: var(--trees-fg);
    background-color: var(--trees-bg);
    --truncate-marker-background-color: var(--trees-bg);
    --truncate-marker-background-overlay-color: transparent;
    font-family: var(--trees-font-family);
    font-weight: var(--trees-font-weight-regular);
  }

  :host([data-file-tree-virtualized='true']) {
    height: 100%;
    overflow: hidden;
  }

  [data-file-tree-virtualized-wrapper='true'] {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  [data-file-tree-virtualized-root='true'] {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  [data-file-tree-virtualized-scroll='true'],
  [data-file-tree-scrollbar-measure='true'] {
    --trees-scrollbar-thumb-current: transparent;
    overflow-y: auto;
    scrollbar-gutter: stable;

    &:hover {
      --trees-scrollbar-thumb-current: var(--trees-scrollbar-thumb);
    }

    &::-webkit-scrollbar {
      width: var(--trees-scrollbar-gutter);
      height: var(--trees-scrollbar-gutter);
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--trees-scrollbar-thumb-current);
      border: 1px solid transparent;
      background-clip: content-box;
      border-radius: calc(var(--trees-scrollbar-gutter) / 2);
    }

    &::-webkit-scrollbar-corner {
      background-color: transparent;
    }
  }

  /* These are styles for a temporarily generated element to measure the size
   * of the scrollbar.  It's intended to be somewhat similar in scrollbar style
   * scope to the scrollable tree so \`--trees-scrollbar-gutter-measured\` is an
   * accurate reflection of the size the scrollbar gutter takes up. */
  [data-file-tree-scrollbar-measure='true'] {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    pointer-events: none;
    width: 100px;
    height: 100px;
  }

  @supports (-moz-appearance: none) {
    [data-file-tree-virtualized-scroll='true'],
    [data-file-tree-scrollbar-measure='true'] {
      scrollbar-width: thin;
      scrollbar-color: var(--trees-scrollbar-thumb-current) transparent;
    }
  }

  [data-file-tree-virtualized-scroll='true'] {
    position: relative;
    overflow-y: auto;
    flex: 1 1 0;
    min-height: 0;
    padding-inline: max(
        calc(var(--trees-padding-inline) - var(--trees-item-margin-x)),
        0px
      )
      /* NOTE(amadeus): We can assume that all Webkit based browser gutters
       * will align to the value of '--trees-scrollbar-gutter', however if not, then
       * \`--trees-scrollbar-gutter-measured\` should correct it. Mostly we are
       * hoping to avoid SSR alignment jumps if possible. In non-SSR'd environments
       * \`--trees-scrollbar-gutter-measured\` should always be immediately available.
       */
      max(
        calc(
          var(--trees-padding-inline) - var(--trees-item-margin-x) -
            var(
              --trees-scrollbar-gutter-measured,
              var(--trees-scrollbar-gutter)
            )
        ),
        0px
      );
  }

  @supports (-moz-appearance: none) {
    [data-file-tree-virtualized-scroll='true'] {
      padding-inline: max(
          calc(var(--trees-padding-inline) - var(--trees-item-margin-x)),
          0px
        )
        /* NOTE(amadeus): However on Firefox it can vary a little bit, but most
         * likely the majority of cases will default to a 0px width scrollbar lets
         * inherit that first to avoid SSR jumps. In non-SSR'd environments
         * \`--trees-scrollbar-gutter-measured\` should always be immediately available.
         */
        max(
          calc(
            var(--trees-padding-inline) - var(--trees-item-margin-x) -
              var(--trees-scrollbar-gutter-measured, 0px)
          ),
          0px
        );
    }
  }

  [data-file-tree-sticky-overlay='true'] {
    position: sticky;
    top: 0;
    height: 0;
    z-index: 4;
    overflow: visible;
    pointer-events: none;
  }

  /* The overlay DOM is kept populated even at scrollTop=0 so the browser has
   * the rendered rows on hand the moment scrolling begins — otherwise the
   * compositor paints a scrolled frame before React can mount the overlay,
   * and the topmost sticky folder jumps up by a couple of pixels before it
   * "snaps" into its pinned position. We hide it via CSS whenever the scroll
   * is at the top and no scroll is in progress, so the preview doesn't leak
   * through at rest. \`data-overlay-reveal\` is stamped on the root only when
   * the user initiates a scroll while already at the top — exactly the case
   * where we need the pre-mounted overlay to be visible through the first
   * compositor frame. It is deliberately distinct from the general
   * \`data-is-scrolling\` flag so a scroll that ends at the top (e.g. ArrowUp
   * navigation) re-hides the overlay the instant the scroll lands, rather
   * than waiting for the hover-suppression timer to elapse. */
  [data-file-tree-virtualized-root='true'][data-scroll-at-top='true']:not(
      [data-overlay-reveal]
    )
    [data-file-tree-sticky-overlay='true'] {
    visibility: hidden;
  }

  [data-file-tree-sticky-overlay-content='true'] {
    background-color: var(--trees-bg);
    position: relative;
    pointer-events: none;
  }

  [data-file-tree-virtualized-list='true'] {
    background-color: var(--trees-bg);
    position: relative;
    min-height: 100%;
    width: 100%;
    overflow-anchor: none;

    &[data-is-scrolling] {
      pointer-events: none;
    }
  }

  [data-file-tree-virtualized-sticky-offset='true'] {
    contain: layout size;
  }

  [data-file-tree-virtualized-sticky='true'] {
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    isolation: isolate;
    /* Promote to its own compositor layer so text inside the window is
     * rasterized once and GPU-translated during scroll. Without this, the
     * browser re-paints the window (and its text) at every scroll frame,
     * which produces visible 1px shake / character tearing. */
    will-change: transform;
  }

  [data-file-tree-search-container] {
    display: flex;
    padding: 0;
    padding-inline: var(--trees-padding-inline);
    margin-bottom: var(--trees-item-row-gap);
  }

  [data-file-tree-search-input] {
    --trees-focus-ring-width: 2px;
    font-family: var(--trees-font-family);
    font-size: var(--trees-font-size);
    flex: 1;
    height: var(--trees-row-height);
    /* 1px breathing room so the focus-visible outline isn't clipped when the
     * input sits flush against the top of the scroll container. */
    margin-block: 1px;
    padding-inline: var(--trees-item-padding-x);
    line-height: var(--trees-row-height);
    color: var(--trees-search-fg);
    background-color: var(--trees-search-bg);
    border: 1px solid var(--trees-border-color);
    border-radius: var(--trees-border-radius);
    outline: none;

    &::placeholder {
      color: color-mix(
        in lab,
        var(--trees-search-fg) 65%,
        var(--trees-search-bg)
      );
    }

    &:focus-visible,
    &[data-file-tree-search-input-fake-focus='true'] {
      outline: var(--trees-focus-ring-width) solid var(--trees-focus-ring-color);
      outline-offset: var(--trees-focus-ring-offset);
    }
  }

  /* The wrapper for the tree items */
  [role='tree'] {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--trees-gap-override, 0);
  }

  /* LIST ITEM */
  [data-type='item'] {
    color: inherit;
    font-family: var(--trees-font-family);
    font-size: var(--trees-font-size);
    text-align: start;
    outline: none;
    background-color: var(--trees-bg);
    border: none;
    position: relative;

    padding: 0 var(--trees-item-padding-x);
    margin: 0 var(--trees-item-margin-x);
    cursor: pointer;
    -webkit-user-select: none;
            user-select: none;
    -webkit-touch-callout: none;
    touch-action: manipulation;
    display: flex;
    flex: 0 0 var(--trees-row-height);
    align-items: center;
    height: var(--trees-row-height);
    line-height: var(--trees-row-height);
    gap: var(--trees-item-row-gap);
    border-radius: var(--trees-border-radius);
    /* Row states may be translucent, so markers paint the tree background first
     * and then the state color on top to avoid compositing the same alpha twice. */
    --truncate-marker-background-color: var(--trees-bg);
    --truncate-marker-background-overlay-color: transparent;
    --truncate-marker-block-inset: 0px;

    &:hover,
    &[data-item-context-hover='true'] {
      background-color: var(--trees-bg-muted);
      --truncate-marker-background-overlay-color: var(--trees-bg-muted);
    }

    &[data-item-focused='true'],
    &:focus-visible {
      z-index: 2;

      /* Flattened segment markers sit high enough to cover the row outline unless
       * their painted background is inset by the focus ring width. */
      [data-item-flattened-subitems] {
        --truncate-marker-block-inset: var(--trees-focus-ring-width);
      }

      &::before {
        position: absolute;
        inset: 0;
        content: '';
        display: block;
        border-radius: var(--trees-border-radius);
        outline: var(--trees-focus-ring-width) solid
          var(--trees-focus-ring-color);
        outline-offset: var(--trees-focus-ring-offset);
        pointer-events: none;
      }

      &[data-item-selected='true']::before {
        outline-color: var(--trees-selected-focused-border-color);
      }
    }

    &[data-item-selected='true'] {
      color: var(--trees-selected-fg);
      background-color: var(--trees-selected-bg);
      --truncate-marker-background-overlay-color: var(--trees-selected-bg);
      z-index: 3;

      [data-item-section='icon'] {
        color: var(--trees-selected-fg);
      }
    }

    &[data-item-search-match='true'] {
      font-weight: var(--trees-search-font-weight);
    }
  }

  [data-type='item'][data-file-tree-sticky-row='true'] {
    pointer-events: auto;
  }

  /* Sticky rows opt back into pointer events because the overlay wrapper is
   * inert. During scroll, put them back under the same hover suppression as
   * the virtualized list so translucent hover states and menu triggers do not
   * paint over rows moving beneath the sticky stack. */
  [data-file-tree-virtualized-root='true'][data-is-scrolling]
    [data-type='item'][data-file-tree-sticky-row='true'] {
    pointer-events: none;
  }

  [data-file-tree-virtualized-root='true'][data-is-scrolling]
    [data-type='item'][data-file-tree-sticky-row='true']:hover:not(
      [data-item-selected='true']
    ),
  [data-file-tree-virtualized-root='true'][data-is-scrolling]
    [data-type='item'][data-file-tree-sticky-row='true'][data-item-context-hover='true']:not(
      [data-item-selected='true']
    ) {
    background-color: var(--trees-bg);
    --truncate-marker-background-overlay-color: transparent;
  }

  [data-item-selected='true']:has(+ [data-item-selected='true']) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  [data-item-selected='true'] + [data-item-selected='true'] {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  /* Flattened Directory Parts */
  [data-item-flattened-subitems] {
    display: inline-flex;
    align-items: center;
    gap: 2px;
  }
  [data-item-flattened-subitem]:hover,
  [data-item-flattened-subitem-drag-target='true'] {
    text-decoration: underline;
  }

  /* Icon for each item */
  [data-item-section='icon'] {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--trees-fg-muted);
    fill: currentColor;
    width: var(--trees-icon-width);
  }

  :where([data-item-section='icon'] > [data-icon-token]) {
    color: var(--trees-fg-muted);
  }

  [data-file-tree-colored-icons='true'] {
    [data-icon-token='astro'] {
      color: var(--trees-file-icon-color-astro);
    }
    [data-icon-token='babel'] {
      color: var(--trees-file-icon-color-babel);
    }
    [data-icon-token='bash'] {
      color: var(--trees-file-icon-color-bash);
    }
    [data-icon-token='biome'] {
      color: var(--trees-file-icon-color-biome);
    }
    [data-icon-token='bootstrap'] {
      color: var(--trees-file-icon-color-bootstrap);
    }
    [data-icon-token='browserslist'] {
      color: var(--trees-file-icon-color-browserslist);
    }
    [data-icon-token='bun'] {
      color: var(--trees-file-icon-color-bun);
    }
    [data-icon-token='c'] {
      color: var(--trees-file-icon-color-c);
    }
    [data-icon-token='cpp'] {
      color: var(--trees-file-icon-color-cpp);
    }
    [data-icon-token='claude'] {
      color: var(--trees-file-icon-color-claude);
    }
    [data-icon-token='css'] {
      color: var(--trees-file-icon-color-css);
    }
    [data-icon-token='database'] {
      color: var(--trees-file-icon-color-database);
    }
    [data-icon-token='default'] {
      color: var(--trees-file-icon-color-default);
    }
    [data-icon-token='docker'] {
      color: var(--trees-file-icon-color-docker);
    }
    [data-icon-token='eslint'] {
      color: var(--trees-file-icon-color-eslint);
    }
    [data-icon-token='git'] {
      color: var(--trees-file-icon-color-git);
    }
    [data-icon-token='go'] {
      color: var(--trees-file-icon-color-go);
    }
    [data-icon-token='graphql'] {
      color: var(--trees-file-icon-color-graphql);
    }
    [data-icon-token='html'] {
      color: var(--trees-file-icon-color-html);
    }
    [data-icon-token='image'] {
      color: var(--trees-file-icon-color-image);
    }
    [data-icon-token='javascript'] {
      color: var(--trees-file-icon-color-javascript);
    }
    [data-icon-token='json'] {
      color: var(--trees-file-icon-color-json);
    }
    [data-icon-token='markdown'] {
      color: var(--trees-file-icon-color-markdown);
    }
    [data-icon-token='mcp'] {
      color: var(--trees-file-icon-color-mcp);
    }
    [data-icon-token='npm'] {
      color: var(--trees-file-icon-color-npm);
    }
    [data-icon-token='oxc'] {
      color: var(--trees-file-icon-color-oxc);
    }
    [data-icon-token='postcss'] {
      color: var(--trees-file-icon-color-postcss);
    }
    [data-icon-token='prettier'] {
      color: var(--trees-file-icon-color-prettier);
    }
    [data-icon-token='python'] {
      color: var(--trees-file-icon-color-python);
    }
    [data-icon-token='react'] {
      color: var(--trees-file-icon-color-react);
    }
    [data-icon-token='ruby'] {
      color: var(--trees-file-icon-color-ruby);
    }
    [data-icon-token='rust'] {
      color: var(--trees-file-icon-color-rust);
    }
    [data-icon-token='sass'] {
      color: var(--trees-file-icon-color-sass);
    }
    [data-icon-token='svg'] {
      color: var(--trees-file-icon-color-svg);
    }
    [data-icon-token='svelte'] {
      color: var(--trees-file-icon-color-svelte);
    }
    [data-icon-token='svgo'] {
      color: var(--trees-file-icon-color-svgo);
    }
    [data-icon-token='swift'] {
      color: var(--trees-file-icon-color-swift);
    }
    [data-icon-token='table'] {
      color: var(--trees-file-icon-color-table);
    }
    [data-icon-token='text'] {
      color: var(--trees-file-icon-color-text);
    }
    [data-icon-token='tailwind'] {
      color: var(--trees-file-icon-color-tailwind);
    }
    [data-icon-token='terraform'] {
      color: var(--trees-file-icon-color-terraform);
    }
    [data-icon-token='typescript'] {
      color: var(--trees-file-icon-color-typescript);
    }
    [data-icon-token='vite'] {
      color: var(--trees-file-icon-color-vite);
    }
    [data-icon-token='vscode'] {
      color: var(--trees-file-icon-color-vscode);
    }
    [data-icon-token='vue'] {
      color: var(--trees-file-icon-color-vue);
    }
    [data-icon-token='wasm'] {
      color: var(--trees-file-icon-color-wasm);
    }
    [data-icon-token='webpack'] {
      color: var(--trees-file-icon-color-webpack);
    }
    [data-icon-token='yml'] {
      color: var(--trees-file-icon-color-yml);
    }
    [data-icon-token='zig'] {
      color: var(--trees-file-icon-color-zig);
    }
    [data-icon-token='zip'] {
      color: var(--trees-file-icon-color-zip);
    }
  }

  /* Chevron rotation and visual alignment */
  /* Chevron pointing down */
  [data-icon-name='file-tree-icon-chevron'] {
    &[data-align-capitals='false'] {
      transform: translate(0, var(--trees-icon-nudge));
    }
    &[data-align-capitals='true'] {
      transform: translate(0, 0);
    }
  }

  [data-item-section='content'] {
    flex: 0 1 auto;
    text-align: start;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    /* Breaks middle truncate component to also set this */
    /* white-space: nowrap; */
  }

  [data-item-section='decoration'] {
    flex: 1 1 0;
    min-width: 0;
    display: flex;
    justify-content: flex-end;
    text-align: end;
    overflow: hidden;
    color: var(--trees-fg-muted);
  }

  [data-item-section='decoration'] > span {
    min-width: 0;
    max-width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  [data-item-section='git'],
  [data-item-section='action'] {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  [data-item-section='git'] {
    width: var(--trees-git-lane-width);
  }

  [data-item-section='action'] {
    width: var(--trees-action-lane-width);
    color: var(--trees-fg-muted);
    fill: currentColor;
    pointer-events: none;
  }

  [data-item-section='git'] > span,
  [data-item-section='action'] > span {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  [data-item-action-affordance='decorative'] {
    opacity: 0.85;
  }

  [data-item-rename-input] {
    appearance: none;
    width: 100%;
    min-width: 0;
    height: calc(var(--trees-row-height) - 4px);
    font-family: inherit;
    font-size: inherit;
    /* line-height: calc(var(--trees-row-height) - 8px); */
    color: inherit;
    background-color: transparent;
    border: 0;
    padding-inline: 6px;
    outline: none;
    box-sizing: border-box;
  }

  [data-item-section='content']:has([data-item-rename-input])
    ~ [data-item-section='action'],
  [data-item-section='content']:has([data-item-rename-input])
    ~ [data-item-section='decoration'] {
    display: none;
  }

  /* Chevron pointing right */
  [aria-expanded='false'][data-item-type='folder']
    > [data-item-section='icon']
    > [data-icon-name='file-tree-icon-chevron'] {
    &[data-align-capitals='true'] {
      transform: rotate(-90deg)
        translate(
          calc(var(--trees-icon-nudge) / 2),
          calc(var(--trees-icon-nudge) / 2)
        );
    }
    &[data-align-capitals='false'] {
      transform: rotate(-90deg)
        translate(
          calc(var(--trees-icon-nudge) / 2 * -1),
          calc(var(--trees-icon-nudge) / 2)
        );
    }
  }

  /* LIST IDENTATION */
  /* Spacing container */
  [data-item-section='spacing'] {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: var(--trees-row-height);
    padding-left: calc(calc(var(--trees-icon-width) / 2) - 0.5px);

    &:empty {
      padding-left: 0;
    }
  }

  /* Spacing per level */
  [data-item-section='spacing-item'] {
    transform: translateX(-0.25px);
    display: inline-block;
    border-left: 1px solid var(--trees-indent-guide-bg);
    height: 100%;
    margin-right: calc(var(--trees-level-gap) - 1px);
    opacity: 0;
    transition: opacity 150ms ease;

    & + & {
      margin-left: calc(
        var(--trees-item-row-gap) + calc(var(--trees-icon-width) / 2) - 0.5px
      );
    }
  }

  :host(:hover) [data-item-section='spacing-item'] {
    opacity: 0.75;
  }

  /* Git status indicator */

  /* This is a folder that contains a git change */
  [data-item-contains-git-change='true'] > [data-item-section='git'] {
    color: var(--trees-git-modified-color);
    opacity: 0.5;
    fill: currentColor;
  }

  /* These are files that have a git change */
  [data-item-git-status] {
    &
      > :where([data-item-section='icon'])
      > :where(:not([data-icon-name='file-tree-icon-chevron'])) {
      color: var(--trees-item-git-status-color);
    }
    & > [data-item-section='content'] {
      color: var(--trees-item-git-status-color);
    }
    & > [data-item-section='git'] {
      color: var(--trees-item-git-status-color);
      font-weight: var(--trees-font-weight-semibold);
    }
  }

  [data-item-git-status='added'] {
    --trees-item-git-status-color: var(--trees-git-added-color);
  }

  [data-item-git-status='deleted'] {
    --trees-item-git-status-color: var(--trees-git-deleted-color);
  }

  [data-item-git-status='ignored'] {
    --trees-item-git-status-color: var(--trees-git-ignored-color);

    & > [data-item-section='icon'] {
      opacity: 0.5;
    }
  }

  [data-item-section='git'] [data-icon-name='file-tree-icon-dot'] {
    /* this is a nudge to align the dot with the likely lowercase text. it's slightly
    generalizable, but other fonts are gonna need other nudges i assume */
    transform: translateY(calc(0.65ex - 50%));
  }

  [data-item-git-status='modified'] {
    --trees-item-git-status-color: var(--trees-git-modified-color);
  }

  [data-item-git-status='renamed'] {
    --trees-item-git-status-color: var(--trees-git-renamed-color);
  }

  [data-item-git-status='untracked'] {
    --trees-item-git-status-color: var(--trees-git-untracked-color);
  }

  /* Drag and drop */
  [data-item-drag-target='true'] {
    background-color: var(--trees-selected-bg);
  }

  [data-item-dragging='true'] {
    opacity: 0.5;
  }

  /* Lock icon for locked paths (sibling of content) */
  [data-item-section='lock'] {
    flex: 0 0 auto;
    margin-left: auto;
    display: flex;
    align-items: center;
    color: var(--trees-fg-muted);
  }
  [data-item-section='lock'] svg {
    display: block;
  }

  [data-type='header-slot'] {
    display: block;
    flex: 0 0 auto;
  }

  [data-type='context-menu-wash'] {
    position: absolute;
    inset: 0;
    z-index: 3;
    background-color: transparent;
    touch-action: none;
  }

  [data-type='context-menu-anchor'] {
    position: absolute;
    top: 0;
    right: var(--trees-context-menu-trigger-inline-offset);
    z-index: 4;
    display: none;
    align-items: center;

    &[data-visible='true'] {
      display: flex;
    }
  }

  /* Hide the floating trigger while the scroll container is actively moving.
   * The anchor is positioned against the root, not the scroll content, so its
   * \`top\` follows the row via a React state update — one frame behind the
   * compositor. That delay is visible as the trigger hovering over the wrong
   * row during the first frame of a scroll. The \`data-is-scrolling\` flag on
   * the root is flipped synchronously on \`wheel\`/\`touchmove\`/\`keydown\` before
   * the compositor commits the next paint, so this selector hides the anchor
   * in the same frame the scroll begins. */
  [data-file-tree-virtualized-root='true'][data-is-scrolling]
    [data-type='context-menu-anchor'] {
    display: none;
  }

  [data-type='context-menu-anchor'] > slot[name='context-menu'] {
    display: block;
    width: 0;
    min-width: 0;
    flex: 0 0 0;
    overflow: visible;
  }

  /* Single floating context menu trigger */
  [data-type='context-menu-trigger'] {
    all: unset;
    align-items: center;
    justify-content: center;
    width: var(--trees-action-lane-width);
    color: var(--trees-fg-muted);
    fill: currentColor;
    cursor: pointer;
    font-family: var(--trees-font-family);
    font-size: var(--trees-font-size);
    border-top-right-radius: var(--trees-border-radius);
    border-bottom-right-radius: var(--trees-border-radius);
    margin: var(--trees-focus-ring-width);
    height: calc(var(--trees-row-height) - var(--trees-focus-ring-width) * 2);
    border-width: 0;
    transition: color 120ms ease;

    display: flex;
  }

  [data-type='context-menu-trigger']:hover,
  [data-type='context-menu-trigger'][aria-expanded='true'] {
    color: var(--trees-fg);
  }

  /** @pierre/truncate css here, manually copy pasted for now */
  [data-truncate-container] {
    /* CUSTOM TO TREES, TO SUPPORT THE OUTLINE */
    margin-top: -1px;
    margin-bottom: -1px;

    /* Width of the fade from default marker to text */
    --truncate-internal-marker-fade-width: var(
      --truncate-marker-fade-width,
      2px
    );
    /* Width of the solid color between the fade from the default marker to the text */
    --truncate-internal-marker-gap: var(--truncate-marker-gap, 0px);
    /* Opacity of the marker 'color' property, not of the element itself */
    --truncate-internal-marker-opacity: var(--truncate-marker-opacity, 50%);
    /* Opacity of the marker 'color' property specifically for the middle truncate, not opacity of the element itself */
    --truncate-internal-middle-marker-opacity: var(
      --truncate-middle-marker-opacity,
      80%
    );
    /* Background color of the default marker */
    --truncate-internal-marker-background-color: var(
      --truncate-marker-background-color,
      light-dark(white, black)
    );
    --truncate-internal-marker-background-overlay-color: var(
      --truncate-marker-background-overlay-color,
      transparent
    );
    --truncate-internal-marker-block-inset: var(
      --truncate-marker-block-inset,
      0px
    );
    /* Duration of the fade out animation for the marker */
    --truncate-internal-marker-fade-out-duration: var(
      --truncate-marker-fade-out-duration,
      0ms
    );
    /* Duration of the fade in animation for the marker */
    --truncate-internal-marker-fade-in-duration: var(
      --truncate-marker-fade-in-duration,
      100ms
    );

    /* FADE Variant specifics */
    --truncate-internal-fade-marker-color: var(
      --truncate-fade-marker-color,
      #000
    );
    --truncate-internal-fade-marker-width: var(
      --truncate-fade-marker-width,
      0.2lh
    );

    /*
    In some special cases people might be adding spacing in other ways
    that would benefit from being able to override this, however the container
    query below can't use this and would need to be redeclared with the overridden
    value. It's a bad time, but better than nothing.
    */
    --truncate-internal-single-line-height: 1lh;

    height: var(--truncate-internal-single-line-height);
    min-width: 0;
    overflow: hidden;
  }

  [data-truncate-marker] {
    display: flex;
    position: absolute;
    height: var(--truncate-internal-single-line-height);
    padding-block: var(--truncate-internal-marker-block-inset);
    box-sizing: border-box;
    align-items: center;
    background-clip: content-box;
    z-index: 2;
    color: color-mix(
      in srgb,
      currentColor var(--truncate-internal-marker-opacity),
      transparent
    );

    /* Core trick for hiding the marker until overflow occurs */
    opacity: 0;
    transition: opacity var(--truncate-internal-marker-fade-out-duration)
      ease-in-out;
  }

  @container measure (height > 1lh) {
    [data-truncate-marker] {
      opacity: 1;
      transition: opacity var(--truncate-internal-marker-fade-in-duration)
        ease-in-out;
    }
  }

  [data-truncate-grid] {
    display: grid;
    position: relative;
  }

  [data-truncate-content='visible'] {
    white-space: nowrap;
  }

  [data-truncate-content='overflow'] {
    opacity: 0;
    pointer-events: none;
    -webkit-user-select: none;
            user-select: none;
    word-break: break-all;
    margin-top: calc(-1 * var(--truncate-internal-single-line-height));
  }

  [data-truncate-marker-cell] {
    container: measure / size;
    overflow: visible;
    -webkit-user-select: none;
            user-select: none;
    pointer-events: none;
  }

  [data-truncate-container='truncate'] {
    & [data-truncate-grid] {
      grid-template-columns: minmax(0, max-content) 0;
    }
    & [data-truncate-marker] {
      right: 0;
    }
    & [data-truncate-fade] {
      margin-right: calc(-2 * var(--truncate-internal-fade-marker-width));
    }
  }

  [data-truncate-container='fruncate'] {
    & [data-truncate-grid] {
      grid-template-columns: 0 minmax(0, max-content) auto;
    }
    & [data-truncate-content] {
      direction: rtl;
    }
    & [data-truncate-content] > span {
      unicode-bidi: plaintext;
    }
    & [data-truncate-fade] {
      margin-left: calc(-2 * var(--truncate-internal-fade-marker-width));
    }
  }

  [data-truncate-variant='default'] {
    & [data-truncate-marker] {
      background-color: var(--truncate-internal-marker-background-color);
      background-image: linear-gradient(
        var(--truncate-internal-marker-background-overlay-color),
        var(--truncate-internal-marker-background-overlay-color)
      );
    }
    & [data-truncate-marker]::after,
    & [data-truncate-marker]::before {
      content: '';
      position: absolute;
      width: calc(
        var(--truncate-internal-marker-fade-width) +
          var(--truncate-internal-marker-gap)
      );
      inset-block-start: var(--truncate-internal-marker-block-inset);
      height: max(
        0px,
        calc(
          var(--truncate-internal-single-line-height) -
            var(--truncate-internal-marker-block-inset) * 2
        )
      );
      background-color: var(--truncate-internal-marker-background-color);
      background-image: linear-gradient(
        var(--truncate-internal-marker-background-overlay-color),
        var(--truncate-internal-marker-background-overlay-color)
      );
      mask-image: linear-gradient(
        var(--truncate-internal-fade-dir),
        #000 0%,
        #000 var(--truncate-internal-marker-gap),
        transparent 100%
      );
    }
    & [data-truncate-marker]::after {
      --truncate-internal-fade-dir: to right;
      right: calc(
        -1 *
          (
            var(--truncate-internal-marker-fade-width) +
              var(--truncate-internal-marker-gap)
          )
      );
    }
    & [data-truncate-marker]::before {
      --truncate-internal-fade-dir: to left;
      left: calc(
        -1 *
          (
            var(--truncate-internal-marker-fade-width) +
              var(--truncate-internal-marker-gap)
          )
      );
    }
  }

  [data-truncate-variant='fade'] {
    & [data-truncate-marker] {
      background: transparent;
    }
  }

  [data-truncate-fade] {
    box-shadow:
      0 0 calc(var(--truncate-internal-fade-marker-width) / 2)
        var(--truncate-internal-fade-marker-color),
      0 0 var(--truncate-internal-fade-marker-width)
        var(--truncate-internal-fade-marker-color);
    width: calc(var(--truncate-internal-fade-marker-width) * 2);
    height: calc(
      var(--truncate-internal-single-line-height) -
        (var(--truncate-internal-fade-marker-width) * 2)
    );
    margin: var(--truncate-internal-fade-marker-width) 0;
  }

  [data-truncate-group-container='middle'] {
    & [data-truncate-container] {
      --truncate-marker-opacity: var(--truncate-internal-middle-marker-opacity);
    }

    display: flex;
    min-width: 0;

    & > div {
      min-width: 0;
    }

    & > div[data-truncate-segment-priority='1'] {
      flex: 0 1 max-content;
    }
    & > div[data-truncate-segment-priority='2'] {
      flex: 0 999999 max-content;
    }
  }
}
`;const ss="@layer base, unsafe;";function jo(e){return`${ss}
@layer base {
  ${e}
}`}function Va(e){return`${ss}
@layer unsafe {
  ${e}
}`}const Uo=new WeakMap;function La(e){const t=Uo.get(e);if(t!=null)return t;const n=document.createElement("div");n.setAttribute(Na,"true");const r=document.createElement("div");r.style.position="relative",r.style.height="200%",n.appendChild(r),e.appendChild(n);const o=Math.max(n.offsetWidth-n.clientWidth,0);return n.remove(),Uo.set(e,o),o}function Fa(e,t){if(!e.isConnected)return;const n=La(t);if(n==null)return;const r=t.querySelector(`style[${Oo}]`),o=r instanceof HTMLStyleElement?r:document.createElement("style");r instanceof HTMLStyleElement||(o.setAttribute(Oo,""),t.appendChild(o)),o.textContent=`:host { ${Ra}: ${n}px; }`}let Rn;function Ba(e){if(typeof CSSStyleSheet<"u"&&typeof CSSStyleSheet.prototype.replaceSync=="function"&&"adoptedStyleSheets"in e){Rn==null&&(Rn=new CSSStyleSheet,Rn.replaceSync(jo(qo)));let t=!1;try{e.adoptedStyleSheets=[Rn],t=!0}catch{}if(t){e.querySelector(`style[${wr}]`)?.remove();return}}if(e.querySelector(`style[${wr}]`)==null){const t=document.createElement("style");t.setAttribute(wr,""),t.textContent=jo(qo),e.prepend(t)}}function Tr(e,t){za(e,t),Ba(t),Fa(e,t)}function za(e,t){const n=e.querySelector('template[shadowrootmode="open"], template[data-file-tree-shadowrootmode="open"]');n instanceof HTMLTemplateElement&&(t.childNodes.length>0||(t.appendChild(n.content.cloneNode(!0)),n.hasAttribute("shadowrootmode")&&n.remove()))}if(typeof HTMLElement<"u"&&customElements.get(Hn)==null){class e extends HTMLElement{constructor(){super()}connectedCallback(){const n=this.shadowRoot??this.attachShadow({mode:"open"});Tr(this,n)}}if(customElements.define(Hn,e),typeof document<"u")for(const t of Array.from(document.querySelectorAll(Hn)))t instanceof HTMLElement&&Tr(t,t.shadowRoot??t.attachShadow({mode:"open"}))}const Ha=!0,ls=`<svg data-icon-sprite aria-hidden="true" width="0" height="0">
  <symbol id="file-tree-icon-chevron" viewBox="0 0 16 16">
    <path d="M12.4697 5.46973C12.7626 5.17684 13.2374 5.17684 13.5303 5.46973C13.8232 5.76262 13.8232 6.23738 13.5303 6.53028L8.53028 11.5303C8.23738 11.8232 7.76262 11.8232 7.46973 11.5303L2.46973 6.53028C2.17684 6.23738 2.17684 5.76262 2.46973 5.46973C2.76262 5.17684 3.23738 5.17684 3.53028 5.46973L8 9.93946L12.4697 5.46973Z" fill="currentcolor"/>
  </symbol>
  <symbol id="file-tree-icon-dot" viewBox="0 0 6 6">
    <circle cx="3" cy="3" r="3" />
  </symbol>
  <symbol id="file-tree-icon-file" viewBox="0 0 16 16">
    <path fill="currentColor" d="M8 1v3a3 3 0 0 0 3 3h3v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 12.5v-9A2.5 2.5 0 0 1 4.5 1z" class="bg" opacity=".5"/>
    <path fill="currentColor" d="M9.5 1a.5.5 0 0 1 .354.146l4 4A.5.5 0 0 1 14 5.5V6h-3a2 2 0 0 1-2-2V1z" class="fg"/>
  </symbol>
  <symbol id="file-tree-icon-lock" viewBox="0 0 16 16">
    <path fill="currentcolor" d="M4 5.336V4a4 4 0 1 1 8 0v1.336c1.586.54 2 1.843 2 4.664v1c0 4.118-.883 5-5 5H7c-4.117 0-5-.883-5-5v-1c0-2.821.414-4.124 2-4.664M5.5 4v1.054Q6.166 4.998 7 5h2q.834-.002 1.5.054V4a2.5 2.5 0 0 0-5 0m-2 6v1c0 .995.055 1.692.167 2.193.107.483.246.686.35.79s.307.243.79.35c.5.112 1.198.167 2.193.167h2c.995 0 1.692-.055 2.193-.166.483-.108.686-.247.79-.35.104-.105.243-.308.35-.791.112-.5.167-1.198.167-2.193v-1c0-.995-.055-1.692-.166-2.193-.108-.483-.247-.686-.35-.79-.105-.104-.308-.243-.791-.35C10.693 6.555 9.995 6.5 9 6.5H7c-.995 0-1.692.055-2.193.167-.483.107-.686.246-.79.35s-.243.307-.35.79C3.555 8.307 3.5 9.005 3.5 10" />
  </symbol>
  <symbol id="file-tree-icon-ellipsis" viewBox="0 0 16 16">
    <path d="M5 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M9.5 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M14 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
  </symbol>
</svg>`,Oa=`<symbol id="file-tree-builtin-astro" viewBox="0 0 16 16">
  <path fill="currentColor" d="M6.08 13.92c-.63-.57-.81-1.79-.55-2.67.45.56 1.08.73 1.73.83 1 .15 1.99.1 2.92-.37l.32-.19q.13.38.08.78a2.1 2.1 0 0 1-.9 1.5q-.3.24-.61.43c-.64.44-.81.95-.57 1.69l.02.08a1.7 1.7 0 0 1-.74-.64 2 2 0 0 1-.3-.98q0-.27-.02-.52-.07-.61-.61-.62a.7.7 0 0 0-.75.6z" class="bg" opacity=".6"/>
  <path fill="currentColor" d="M2.5 11.1s1.86-.9 3.72-.9l1.4-4.39c.05-.21.2-.36.38-.36s.33.15.38.36l1.4 4.38c2.2 0 3.72.92 3.72.92l-3.16-8.69q-.13-.4-.45-.42H6.11q-.3.02-.45.42z" class="fg"/>
</symbol>`,$a=`<symbol id="file-tree-builtin-babel" viewBox="0 0 16 16">
  <path fill="currentColor" fill-rule="evenodd" d="M9.49.5q1.92.05 2.66.54 1.27.6 1.35 1.52v.23a4 4 0 0 1-.53 1.9l-1.38 1.24q-.74.38-.72.63c.77.82 1.33 1.29.85 2.42q-.47 1.1-2.04 2.28c-.5.32-1.88 1.35-2.96 1.86-1.64.77-3.1 1.4-4.65 1.89-.51.16-1.5.16-1.5.16L.5 15A76 76 0 0 0 5.76 3.49q-.1-.08-.1-.2.1 0 .32-.35l-.03-.09q-1.17.39-2.38 1.3l-.13.03q0-.1-.21-.16-.46.31-.82.7l-.13-.19.16-.06-.03-.16-.34.29L2 4.5q.36-.48.72-.54l.04-.1V3.8q.16 0 .15-.06l.13-.06a6 6 0 0 0 1.13-.9v-.03H4.1l-.12.07q0-.1-.1-.1l-.15.07-.04-.1q.93-.52 1.63-1.05Q7.89.65 9.5.5M8.46 7.83l-.32.04c-1.31.54-2.31.82-2.91.88a71 71 0 0 0-2.2 4.54h.07q.58-.04 3.04-1.42.13 0 1.66-1.05L9.18 9.7v.03q.45-.2.81-1.3v-.2q-.5-.46-1.53-.4m.28-5.75c-.5.1-.75.19-.72.38l-1.16 2.6q-.17.1-.34.95-.3.48-.25.77v.1l.22.05A15 15 0 0 1 8.86 6c1.1-.71 2.12-1.38 2.8-2.54q.24-.33.21-.54-.02-.33-.4-.54c-.54 0-1.07-.34-1.63-.28l-.94-.03z" clip-rule="evenodd"/>
</symbol>`,qa=`<symbol id="file-tree-builtin-bash" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8 1C2.24 1 1 2.24 1 8s1.24 7 7 7 7-1.24 7-7-1.24-7-7-7" class="bg" opacity=".2"/>
  <path fill="currentColor" d="M11.5 11a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zM7 6.75C7 6.42 6.64 6 6 6s-1 .42-1 .75q-.01.25.22.41.26.21.89.35.74.14 1.28.53c.37.29.61.7.61 1.21 0 .87-.68 1.5-1.5 1.7v.55a.5.5 0 0 1-1 0v-.56c-.82-.18-1.5-.82-1.5-1.69a.5.5 0 0 1 1 0c0 .33.36.75 1 .75s1-.42 1-.75q.01-.25-.22-.41a2 2 0 0 0-.89-.35q-.74-.14-1.28-.53A1.5 1.5 0 0 1 4 6.75c0-.87.68-1.5 1.5-1.7V4.5a.5.5 0 0 1 1 0v.56c.82.18 1.5.82 1.5 1.69a.5.5 0 0 1-1 0" class="fg-stroke"/>
</symbol>`,ja=`<symbol id="file-tree-builtin-biome" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8 2 4.88 7.35a7 7 0 0 1 3.7-.13l1.04.25-.99 4.16-1.05-.25a2.7 2.7 0 0 0-3.07 1.45l-.98-.47a4 4 0 0 1 1.07-1.31 3.8 3.8 0 0 1 3.23-.71l.5-2.08a6 6 0 0 0-5.07 1.12A5.9 5.9 0 0 0 1 14h14z"/>
</symbol>`,Ua=`<symbol id="file-tree-builtin-bootstrap" viewBox="0 0 16 16">
  <path fill="currentColor" fill-rule="evenodd" d="M11.72 1.5A2.5 2.5 0 0 1 14.2 4q.02 1.08.3 2.09c.22.73.56 1.24 1.08 1.45.22.08.4.27.4.5s-.18.43-.4.51q-.76.34-1.08 1.45c-.2.65-.27 1.32-.3 2a2.5 2.5 0 0 1-2.48 2.5H4.25A2.6 2.6 0 0 1 1.7 12c-.04-.85-.1-1.68-.22-2.04C1.26 9.23.92 8.7.4 8.5.18 8.42 0 8.23 0 8s.18-.42.4-.5q.77-.35 1.09-1.46c.1-.36.17-1.19.2-2.04a2.6 2.6 0 0 1 2.56-2.5z" class="bg" clip-rule="evenodd" opacity=".2"/>
  <path fill="currentColor" fill-rule="evenodd" d="M8.47 4.54c1.23 0 2.04.68 2.04 1.73 0 .73-.55 1.39-1.24 1.5v.04c.94.1 1.58.77 1.58 1.7 0 1.2-.9 1.95-2.37 1.95H5.97a.3.3 0 0 1-.2-.08.3.3 0 0 1-.08-.2V4.82a.3.3 0 0 1 .08-.2.3.3 0 0 1 .2-.08zm-1.7 6.04h1.49q1.47-.01 1.49-1.15Q9.74 8.31 8.2 8.3H6.77zm0-5.16v2.06h1.21c.93 0 1.45-.38 1.45-1.06 0-.65-.44-1-1.22-1z" class="fg" clip-rule="evenodd"/>
</symbol>`,Ka=`<symbol id="file-tree-builtin-browserslist" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8.88 6.96c0 3.82 3.72 4.7 5.7 3.74-.23.9-1.04 1.67-2.35 1.93-.02.4.42 1.28.82 1.63-.9.35-1.94-.12-2.51-.48a5 5 0 0 0-.32 1.87c-.68 0-1.57-1-1.8-1.37-.3.18-.85 1.15-.96 1.72a2.4 2.4 0 0 1-.81-.86 2.4 2.4 0 0 1-.3-1.15c-.38.27-1.48.95-1.99 1.18-.25-.58-.15-1.3 0-2.06-.21.12-1.8.27-2.43.12.32-.36.75-1.19.94-1.57A4.5 4.5 0 0 1 .44 10.6c.48-.22.97-.53 1.49-1.06C1.26 9.17.24 8.64 0 7.7a6 6 0 0 0 1.79-.32C1.28 7.08.44 6.15.6 5.01c.42.21 1.3.37 1.73.3a3.4 3.4 0 0 1-.25-2.75 5 5 0 0 0 1.48 1c-.08-.8.3-2.31.8-2.71.2.46.73 1.21 1.08 1.4.09-.61.87-2.06 1.57-2.25 0 .5.27 1.4.5 1.67.51-.54 2.25-1.44 3.64-1.13-.43.45-.75.61-.86.98 1.05 0 2.78.34 4.27 1.93-2.34-.89-5.69.56-5.69 3.5" class="bg" opacity=".5"/>
  <path fill="currentColor" d="M11.21 3.59a4.1 4.1 0 0 0 2.47 2.89c.24-.22.61-.38.95-.19.76.44.2 1.26-.34 1.66l-.07.06a13 13 0 0 1-4.49 1.61l-.3-.43a10.5 10.5 0 0 0 4.13-1.31 1 1 0 0 0 .23-.25.5.5 0 0 0-.21-.69l-.15-.06a4.5 4.5 0 0 1-1.77-1.31 4.5 4.5 0 0 1-.88-1.77q.2-.12.43-.21"/>
  <path fill="currentColor" d="M10.36 5.18a.4.4 0 0 0-.03.38c.09.2.3.3.46.23s.24-.3.15-.5l-.01-.02q.23.13.34.39a.83.83 0 0 1-.43 1.08.8.8 0 0 1-1.08-.43.83.83 0 0 1 .6-1.13"/>
</symbol>`,Wa=`<symbol id="file-tree-builtin-bun" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8 14c3.87 0 7-2.46 7-5.49 0-1.88-1.2-3.53-3.04-4.52q-1.1-.61-1.84-1.07C9.2 2.35 8.64 2 8 2s-1.36.45-2.31 1.03A29 29 0 0 1 4.04 4C2.2 4.98 1 6.63 1 8.51 1 11.54 4.13 14 8 14M7.18 3.88q.3-.66.3-1.37c0-.08.11-.1.13-.01.38 1.57-.53 2.35-1.2 2.61-.08.03-.12-.07-.06-.12a3 3 0 0 0 .83-1.12m1.2-.05a3 3 0 0 0-.45-1.3V2.5c-.04-.07.05-.15.1-.1 1.15 1.2.77 2.3.33 2.87-.05.05-.13 0-.11-.08q.21-.67.13-1.37m1.04-.32a3 3 0 0 0-.94-1.02v-.01c-.06-.05-.01-.16.07-.12 1.51.61 1.61 1.8 1.43 2.5l-.03.03a.07.07 0 0 1-.1-.06 3 3 0 0 0-.43-1.32m-2.97.32c-.36.3-.74.43-1.2.56q-.11 0-.1-.1a3.5 3.5 0 0 0 1.76-1.57s.09-.07.1.04c0 .18-.2.76-.56 1.07m2.89 6.36q-.13.52-.55.88a1.3 1.3 0 0 1-.75.35 1.3 1.3 0 0 1-.77-.35 1.7 1.7 0 0 1-.54-.88.13.13 0 0 1 .15-.15h2.31a.14.14 0 0 1 .15.15M6.15 8.95a1.1 1.1 0 0 1-1.39-.14A1.1 1.1 0 0 1 5.12 7a1.1 1.1 0 0 1 1.2.25 1.1 1.1 0 0 1-.17 1.69m4.96 0a1.1 1.1 0 0 1-1.4-.14 1.1 1.1 0 0 1 .37-1.8 1.1 1.1 0 0 1 1.2.25 1.1 1.1 0 0 1 .24 1.2 1 1 0 0 1-.41.5"/>
</symbol>`,Ga=`<symbol id="file-tree-builtin-c" viewBox="0 0 16 16">
  <path fill="currentColor" fill-rule="evenodd" d="M8 1q.084 0 .166.021.098.023.186.075c1.055.624 4.22 2.486 5.277 3.11.085.05.15.112.209.192h-.002l.028.037a.5.5 0 0 1 .103.21q.031.102.033.21v6.29a.71.71 0 0 1-.347.616l-5.307 3.144a.68.68 0 0 1-.693 0l-5.307-3.144A.72.72 0 0 1 2 11.145V4.832a.71.71 0 0 1 .346-.612l5.288-3.126A.7.7 0 0 1 7.992 1zm2.901 4.349a3.75 3.75 0 1 0 0 5.302l-1.06-1.06a2.25 2.25 0 1 1 0-3.182z" clip-rule="evenodd"/>
</symbol>`,Xa=`<symbol id="file-tree-builtin-claude" viewBox="0 0 16 16">
  <path fill="currentColor" d="M3.75 10.31 6.5 8.77l.04-.14-.04-.07h-.14l-.46-.03-1.57-.04-1.38-.07-1.33-.07-.34-.07L1 7.86l.03-.21.28-.18.4.03.89.07 1.33.08.97.06 1.43.16h.22l.03-.1-.07-.05-.06-.06-1.39-.92-1.48-.98-.79-.57-.42-.28-.2-.28-.1-.6.39-.41.52.04.12.03.52.4 1.12.86L6.2 6.04l.2.17.09-.06.01-.04-.1-.15-.76-1.46-.85-1.46-.37-.6-.1-.36a1 1 0 0 1-.06-.42l.42-.59.25-.07.6.08.22.2.36.84.58 1.3.9 1.77.29.53.14.47.04.14h.1v-.07l.07-1 .14-1.22.14-1.57.04-.45.23-.53.42-.28.36.15.28.41-.04.25-.16 1.08-.36 1.7-.21 1.14h.12l.14-.15.58-.76.97-1.2.42-.5.5-.51.32-.25h.6l.44.66-.2.68-.61.79-.52.65-.74 1-.45.8.04.05h.1l1.68-.36.9-.16 1.06-.18.5.23.05.22-.2.48-1.15.28-1.34.28-2 .46-.04.01.03.04.9.09.4.03h.94l1.77.14.46.28.27.37-.04.28-.72.37-.95-.23-2.24-.53-.76-.18h-.11v.06l.64.63L12 10.86l1.48 1.35.07.34-.18.28-.2-.03-1.29-.98-.5-.42-1.12-.95h-.07v.1l.25.38 1.37 2.05.07.63-.1.2-.36.14-.38-.08-.8-1.12-.85-1.26-.66-1.15-.07.05-.4 4.23-.19.21-.42.17-.35-.28-.2-.42.2-.87.23-1.12.18-.9.17-1.1.1-.36v-.03h-.1l-.84 1.16-1.27 1.72-1 1.07-.24.1-.42-.22.04-.39.22-.32 1.4-1.8.84-1.1.57-.64-.02-.07h-.04l-3.7 2.4-.66.09-.28-.28.03-.42.14-.14 1.12-.77z"/>
</symbol>`,Ya=`<symbol id="file-tree-builtin-cpp" viewBox="0 0 16 16">
  <path fill="currentColor" fill-rule="evenodd" d="M8 1q.084 0 .166.021.098.023.186.075c1.055.624 4.22 2.486 5.277 3.11.085.05.15.112.209.192h-.002l.028.037a.5.5 0 0 1 .103.21q.031.102.033.21v6.29a.71.71 0 0 1-.347.616l-5.307 3.144a.68.68 0 0 1-.693 0l-5.307-3.144A.72.72 0 0 1 2 11.145V4.832a.71.71 0 0 1 .346-.612l5.288-3.126A.7.7 0 0 1 7.992 1zm2.901 4.349a3.75 3.75 0 1 0 0 5.302l-1.06-1.06a2.25 2.25 0 1 1 0-3.182z" clip-rule="evenodd"/>
</symbol>`,Qa=`<symbol id="file-tree-builtin-css" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8 15c-5.76 0-7-1.24-7-7V2a1 1 0 0 1 1-1h6c5.77 0 7 1.24 7 7s-1.24 7-7 7" class="vector" opacity=".2"/>
  <path fill="currentColor" d="M10.1 9.19h.73c.03.49.22.6 1 .6.76 0 .93-.12.93-.68 0-.52-.17-.67-.94-.85-1.38-.3-1.68-.56-1.68-1.47 0-1.05.3-1.29 1.67-1.29 1.29 0 1.57.2 1.6 1.13h-.74c-.01-.34-.17-.42-.85-.42-.77 0-.94.1-.94.58 0 .42.17.55.96.73 1.36.3 1.66.58 1.66 1.59 0 1.14-.31 1.39-1.73 1.39-1.39 0-1.69-.24-1.67-1.31m-3.9 0h.74c.03.49.21.6.99.6.76 0 .93-.12.93-.68 0-.52-.17-.67-.93-.85-1.39-.3-1.69-.56-1.69-1.47 0-1.05.3-1.29 1.67-1.29 1.3 0 1.58.2 1.6 1.13h-.73c-.02-.34-.18-.42-.85-.42-.78 0-.95.1-.95.58 0 .42.17.55.96.73 1.37.3 1.67.58 1.67 1.59 0 1.14-.32 1.39-1.74 1.39-1.38 0-1.68-.24-1.66-1.31m-1.22 0h.75c-.09 1.07-.37 1.31-1.56 1.31-1.37 0-1.68-.45-1.68-2.5 0-1.96.36-2.5 1.68-2.5 1.16 0 1.44.25 1.52 1.35h-.76c-.08-.52-.22-.64-.76-.64-.74 0-.9.33-.9 1.78 0 1.47.16 1.8.9 1.8.58 0 .74-.11.8-.6"/>
</symbol>`,Ja=`<symbol id="file-tree-builtin-database" viewBox="0 0 16 16">
  <path fill="currentColor" d="M14.953 9.733a12.4 12.4 0 0 1-.244 1.936c-.207.933-.532 1.58-.996 2.044s-1.11.789-2.044.996C10.73 14.918 9.533 15 8 15s-2.73-.082-3.669-.291c-.933-.207-1.58-.532-2.044-.996s-.789-1.11-.996-2.044c-.122-.547-.2-1.182-.244-1.92q.23.364.532.667c.64.639 1.482 1.031 2.533 1.265 1.046.232 2.33.315 3.884.315 1.555 0 2.838-.083 3.884-.315 1.051-.234 1.893-.626 2.532-1.265a4 4 0 0 0 .541-.683"/>
  <path fill="currentColor" d="M14.93 5.924c-.046.663-.118 1.24-.23 1.743-.207.932-.532 1.579-.995 2.042s-1.11.789-2.042.996c-.938.209-2.135.291-3.667.291-1.531 0-2.729-.082-3.667-.29-.932-.208-1.579-.534-2.042-.997s-.789-1.11-.996-2.042a12 12 0 0 1-.227-1.683l.016-.188a4 4 0 0 0 .5.62c.638.639 1.48 1.031 2.532 1.265 1.046.232 2.33.315 3.884.315 1.555 0 2.838-.083 3.884-.315 1.051-.234 1.893-.626 2.532-1.265.192-.192.357-.404.506-.633z"/>
  <path fill="currentColor" d="M8 1c1.533 0 2.73.082 3.669.291.933.207 1.58.533 2.044.996.403.404.904.944.91 1.695.004.764-.509 1.318-.918 1.727-.463.463-1.11.789-2.042.996-.938.209-2.135.291-3.667.291-1.531 0-2.729-.082-3.667-.29-.932-.208-1.579-.534-2.042-.997-.406-.406-.915-.953-.915-1.71 0-.758.509-1.305.915-1.712.464-.463 1.11-.789 2.044-.996C5.27 1.082 6.467 1 8 1"/>
</symbol>`,Za=`<symbol id="file-tree-builtin-default" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8 1v3a3 3 0 0 0 3 3h3v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 12.5v-9A2.5 2.5 0 0 1 4.5 1z" class="bg" opacity=".4"/>
  <path fill="currentColor" d="M9.5 1a.5.5 0 0 1 .354.146l4 4A.5.5 0 0 1 14 5.5V6h-3a2 2 0 0 1-2-2V1z" class="fg"/>
</symbol>`,ec=`<symbol id="file-tree-builtin-docker" viewBox="0 0 16 16">
  <path fill="currentColor" d="M15.85 6.54c-.05-.04-.45-.36-1.31-.36q-.34 0-.68.06a2.7 2.7 0 0 0-1.14-1.79l-.23-.14-.15.23a3 3 0 0 0-.4 1q-.24 1.01.26 1.84c-.4.24-1.03.3-1.17.3H.5a.5.5 0 0 0-.5.52q-.01 1.46.46 2.83.55 1.5 1.6 2.18c.79.5 2.08.79 3.54.79q.96 0 1.94-.18a8 8 0 0 0 2.55-.97 7 7 0 0 0 1.73-1.5 10 10 0 0 0 1.7-3.06h.15a2.4 2.4 0 0 0 1.8-.7 2 2 0 0 0 .47-.74l.06-.2z"/>
  <path fill="currentColor" d="M1.48 7.36h1.4a.14.14 0 0 0 .14-.13V5.91q-.01-.12-.13-.14H1.48a.13.13 0 0 0-.13.14v1.32q.02.13.13.13m1.94 0h1.41a.14.14 0 0 0 .13-.13V5.91q-.01-.12-.13-.14h-1.4a.13.13 0 0 0-.13.14v1.32q0 .13.12.13m1.98 0h1.4q.13 0 .14-.13V5.91a.13.13 0 0 0-.14-.14H5.4q-.1.01-.12.14v1.32q0 .13.12.13m1.95 0h1.42q.1 0 .12-.13V5.91q0-.12-.12-.14H7.35q-.1.01-.12.14v1.32q.01.13.12.13M3.42 5.5h1.41c.07 0 .13-.08.13-.15V4.03a.13.13 0 0 0-.13-.14h-1.4q-.12 0-.13.14v1.31q0 .13.12.15m1.98 0h1.4c.08 0 .14-.08.14-.15V4.03q0-.13-.14-.14H5.4q-.1 0-.12.14v1.31q0 .13.12.15m1.95 0h1.42c.06 0 .12-.08.12-.15V4.03q-.01-.13-.12-.14H7.35q-.1 0-.12.14v1.31q.01.13.12.15m0-1.9h1.42q.1-.02.12-.14v-1.3Q8.88 2 8.77 2H7.35q-.1 0-.12.14v1.3q.01.13.12.14m1.97 3.78h1.4a.13.13 0 0 0 .14-.13V5.91q-.01-.12-.13-.14H9.32q-.1.01-.12.14v1.32q.01.13.12.13" opacity=".5"/>
</symbol>`,tc=`<symbol id="file-tree-builtin-eslint" viewBox="0 0 16 16">
  <path fill="currentColor" d="M11.16 6.1 8.12 4.35a.3.3 0 0 0-.24 0L4.84 6.1a.3.3 0 0 0-.12.2v3.5q0 .14.12.22l3.04 1.74q.12.08.24 0l3.04-1.74a.2.2 0 0 0 .13-.22V6.3a.3.3 0 0 0-.13-.2" opacity=".5"/>
  <path fill="currentColor" d="m.1 7.69 3.63-6.3A.8.8 0 0 1 4.37 1h7.26c.26 0 .5.17.64.4l3.63 6.27a.8.8 0 0 1 0 .75l-3.63 6.24a.7.7 0 0 1-.64.34H4.37a.7.7 0 0 1-.64-.34L.1 8.41a.7.7 0 0 1 0-.72m3 3.02q.01.15.14.23l4.63 2.66q.13.06.26 0l4.63-2.66a.3.3 0 0 0 .14-.23V5.4a.3.3 0 0 0-.14-.23L8.13 2.52a.3.3 0 0 0-.26 0L3.24 5.17a.3.3 0 0 0-.14.23z"/>
</symbol>`,nc=`<symbol id="file-tree-builtin-font" viewBox="0 0 16 16">
  <path fill="currentColor" d="M12.3 13c-1.59 0-2.68-.99-2.68-2.5 0-1.43 1-2.34 2.88-2.35h2.16v-.83c0-1.08-.62-1.68-1.73-1.68-1.05 0-1.66.54-1.73 1.36H9.93c.09-1.43 1.06-2.48 3.05-2.48 1.75 0 3.02.95 3.02 2.68v5.66h-1.29v-1.02h-.04c-.41.66-1.16 1.16-2.37 1.16m.36-1.12c1.14 0 2-.72 2-1.74v-.96H12.6c-1.12 0-1.6.54-1.6 1.28 0 .97.8 1.42 1.66 1.42m-11.24.98H0L3.8 2h1.39l3.8 10.86H7.54l-1.08-3.2H2.5zm3.09-9.25h-.04l-1.6 4.95H6.1z"/>
</symbol>`,rc=`<symbol id="file-tree-builtin-git" viewBox="0 0 16 16">
  <path fill="currentColor" d="M14.74 7.38 8.62 1.26a.9.9 0 0 0-1.27 0L6.08 2.53l1.61 1.61a1.07 1.07 0 0 1 1.36 1.37l1.55 1.55a1.07 1.07 0 0 1 1.1 1.77 1.07 1.07 0 0 1-1.74-1.16L8.5 6.22v3.8a1.07 1.07 0 1 1-.89-.02V6.15a1.07 1.07 0 0 1-.58-1.4l-1.58-1.6-4.2 4.2a.9.9 0 0 0 0 1.27l6.12 6.12a.9.9 0 0 0 1.27 0l6.09-6.09a.9.9 0 0 0 0-1.27"/>
</symbol>`,oc=`<symbol id="file-tree-builtin-go" viewBox="0 0 16 16">
  <path fill="currentColor" fill-rule="evenodd" d="M4.41 4.57A3.2 3.2 0 0 1 6.87 5q.74.49 1.08 1.29.08.12-.1.16l-1.55.4c-.14.03-.15.04-.27-.1a1 1 0 0 0-.44-.34 1.6 1.6 0 0 0-1.68.14q-.95.61-.94 1.73c0 .73.52 1.33 1.25 1.43q.95.1 1.58-.6l.25-.34h-1.8c-.19 0-.24-.12-.17-.27.12-.28.34-.76.47-1a.3.3 0 0 1 .24-.14h2.98a4 4 0 0 1 .64-1.19 4 4 0 0 1 2.6-1.52 3.5 3.5 0 0 1 2.64.46q1.13.73 1.31 2.04a3.5 3.5 0 0 1-1.06 3.09q-.93.92-2.23 1.17l-.74.08a3.5 3.5 0 0 1-2.27-.8 3 3 0 0 1-.93-1.42 4 4 0 0 1-.39.61 4 4 0 0 1-2.64 1.56 3.3 3.3 0 0 1-2.5-.6 3 3 0 0 1-1.18-2.03 3.5 3.5 0 0 1 .8-2.67 4 4 0 0 1 2.6-1.58M13.1 7.5a1.53 1.53 0 0 0-1.9-1.21q-1.3.3-1.62 1.59a1.5 1.5 0 0 0 .85 1.72q.77.33 1.52-.05a2 2 0 0 0 1.18-1.74q0-.17-.03-.3" clip-rule="evenodd"/>
</symbol>`,ic=`<symbol id="file-tree-builtin-graphql" viewBox="0 0 16 16">
  <path fill="currentColor" fill-rule="evenodd" d="M8 1a1.25 1.25 0 0 1 1.18 1.65l2.8 1.61q.33-.25.77-.26a1.25 1.25 0 0 1 .48 2.4v3.2a1.25 1.25 0 1 1-1.25 2.13l-2.8 1.62A1.25 1.25 0 0 1 8 15a1.25 1.25 0 0 1-1.18-1.65l-2.8-1.62q-.33.26-.77.27a1.25 1.25 0 0 1-.48-2.4V6.4a1.25 1.25 0 1 1 1.25-2.14l2.8-1.61A1.25 1.25 0 0 1 8 1M4.44 11.14l-.06.13 2.75 1.58a1.25 1.25 0 0 1 1.74 0l2.74-1.58-.05-.13zm3.89-7.68a1.3 1.3 0 0 1-.66 0L4.03 9.77q.37.3.45.78h7.04q.08-.48.45-.78zM4.38 4.73a1.24 1.24 0 0 1-1.02 1.76v3.02l.13.01 3.67-6.35-.03-.02zm4.46-1.56 3.67 6.35.13-.01V6.49a1.25 1.25 0 0 1-1.03-1.76L8.87 3.15z" clip-rule="evenodd"/>
</symbol>`,sc=`<symbol id="file-tree-builtin-html" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8 1C2.24 1 1 2.24 1 8s1.24 7 7 7 7-1.24 7-7-1.24-7-7-7" class="bg" opacity=".2"/>
  <path fill="currentColor" d="M10.48 3.76a.5.5 0 0 1 .4.58L10.6 5.8h1.14a.5.5 0 0 1 0 1h-1.32L10 9.2h1.08a.5.5 0 0 1 0 1H9.8l-.3 1.64a.5.5 0 1 1-.98-.18l.27-1.46H6.4l-.3 1.64a.5.5 0 1 1-.98-.18l.27-1.46H4.25a.5.5 0 0 1 0-1h1.32L6 6.8H4.93a.5.5 0 0 1 0-1H6.2l.3-1.64a.5.5 0 1 1 .98.18L7.2 5.8h2.4l.3-1.64a.5.5 0 0 1 .58-.4M6.58 9.2h2.4l.44-2.4h-2.4z" class="fg"/>
</symbol>`,lc=`<symbol id="file-tree-builtin-image" viewBox="0 0 16 16">
  <path fill="currentColor" d="M12.5 2A2.5 2.5 0 0 1 15 4.5v4.67l-4.05-3.54-4.08 4.08-3-2L1 10.6V4.5A2.5 2.5 0 0 1 3.5 2z" opacity=".3"/>
  <path fill="currentColor" d="M15 10.5v1a2.5 2.5 0 0 1-2.5 2.5h-9a2.5 2.5 0 0 1-2.46-2.04L4 9l3 2 4-4zm-7-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</symbol>`,ac=`<symbol id="file-tree-builtin-javascript" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8 1C2.24 1 1 2.24 1 8s1.24 7 7 7 7-1.24 7-7-1.24-7-7-7" class="bg" opacity=".2"/>
  <path fill="currentColor" d="M8.1 9.64h.95c.04.62.28.76 1.28.76s1.2-.14 1.2-.85c0-.66-.2-.85-1.2-1.07-1.79-.38-2.18-.7-2.18-1.86C8.15 5.3 8.54 5 10.31 5c1.67 0 2.04.26 2.07 1.42h-.95c-.02-.43-.23-.53-1.1-.53-1 0-1.22.14-1.22.74 0 .52.22.7 1.24.92 1.76.38 2.15.73 2.15 2 0 1.44-.4 1.75-2.24 1.75-1.8 0-2.18-.3-2.15-1.66M3.5 9.5h.98c0 .76.15.92.85.92.77 0 .94-.18.94-1.02V5.1h1v4.34c0 1.54-.35 1.87-1.92 1.87-1.55 0-1.89-.32-1.86-1.8"/>
</symbol>`,cc=`<symbol id="file-tree-builtin-json" viewBox="0 0 16 16">
  <path fill="currentColor" d="M13.25 11.5V9.75a.5.5 0 0 1 .36-.48l.55-.15a1.16 1.16 0 0 0 0-2.24l-.55-.15a.5.5 0 0 1-.36-.48V4.5a2.5 2.5 0 0 0-2.5-2.5h-.25a.5.5 0 0 0 0 1h.25a1.5 1.5 0 0 1 1.5 1.5v1.75a1.5 1.5 0 0 0 1.09 1.44l.54.15a.16.16 0 0 1 0 .32l-.54.15a1.5 1.5 0 0 0-1.09 1.44v1.75a1.5 1.5 0 0 1-1.5 1.5h-.25a.5.5 0 0 0 0 1h.25a2.5 2.5 0 0 0 2.5-2.5m-10.5 0V9.75a.5.5 0 0 0-.36-.48l-.55-.15a1.16 1.16 0 0 1 0-2.24l.55-.15a.5.5 0 0 0 .36-.48V4.5A2.5 2.5 0 0 1 5.25 2h.25a.5.5 0 0 1 0 1h-.25a1.5 1.5 0 0 0-1.5 1.5v1.75a1.5 1.5 0 0 1-1.09 1.44l-.54.15a.16.16 0 0 0 0 .32l.54.15a1.5 1.5 0 0 1 1.09 1.45v1.74a1.5 1.5 0 0 0 1.5 1.5h.25a.5.5 0 0 1 0 1h-.25a2.5 2.5 0 0 1-2.5-2.5"/>
</symbol>`,uc=`<symbol id="file-tree-builtin-markdown" viewBox="0 0 16 16">
  <path fill="currentColor" d="M1 12V4h2l2 2.5L7 4h2v8H7V7.5l-2 2-2-2V12zm9-3 3 3.5L16 9h-2V4h-2v5z"/>
</symbol>`,dc=`<symbol id="file-tree-builtin-mcp" viewBox="0 0 16 16">
  <path fill="currentColor" d="M9.26-.04a3 3 0 0 1 2 .82 2.8 2.8 0 0 1 .8 2.35 2.9 2.9 0 0 1 2.41.8l.03.02a2.74 2.74 0 0 1 0 3.94l-5.8 5.69-.04.06-.02.07q0 .04.02.07.01.04.04.06l1.2 1.17a.55.55 0 0 1 0 .79.6.6 0 0 1-.81 0l-1.2-1.17a1.3 1.3 0 0 1 0-1.84L13.7 7.1a1.65 1.65 0 0 0 .37-1.82 2 2 0 0 0-.37-.54l-.03-.03a1.73 1.73 0 0 0-2.4 0L6.47 9.4l-.07.06a.58.58 0 0 1-.92-.18.6.6 0 0 1 .12-.6l4.85-4.76a1.65 1.65 0 0 0 0-2.36 1.73 1.73 0 0 0-2.4 0l-6.43 6.3a.6.6 0 0 1-.8 0 .55.55 0 0 1 0-.8L7.25.79a3 3 0 0 1 2-.82"/>
  <path fill="currentColor" d="M9.26 2.19a.6.6 0 0 1 .52.34.6.6 0 0 1 0 .43l-.12.18L4.9 7.79a1.65 1.65 0 0 0 0 2.36 1.73 1.73 0 0 0 2.4 0l4.75-4.66a.58.58 0 0 1 .93.18.6.6 0 0 1-.12.61l-4.75 4.66a2.9 2.9 0 0 1-4.01 0 2.75 2.75 0 0 1-.62-3.04A3 3 0 0 1 4.1 7l4.74-4.65a.6.6 0 0 1 .4-.16"/>
</symbol>`,hc=`<symbol id="file-tree-builtin-nextjs" viewBox="0 0 16 16">
  <defs>
  <linearGradient id="a" x1="4.522" x2="14" y1="3.943" y2="16" gradientUnits="userSpaceOnUse">
  <stop stop-color="currentColor"/>
  <stop offset="1" stop-color="currentColor" stop-opacity="0"/>
  </linearGradient>
  </defs>
  <path fill="currentColor" d="M3 2h1.522v9.09H3z"/>
  <path fill="url(#a)" d="M4.903 2 15 15.075q-.565.5-1.195.925L4.522 3.943z"/>
  <path fill="currentColor" d="M12.172 2h-1.508v9.094h1.508z"/>
</symbol>`,fc=`<symbol id="file-tree-builtin-npm" viewBox="0 0 16 16">
  <path fill="currentColor" d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" class="vector" opacity=".2"/>
  <path fill="currentColor" d="M10.5 13H13V3H3v10h5V5.5h2.5z"/>
</symbol>`,pc=`<symbol id="file-tree-builtin-oxc" viewBox="0 0 16 16">
  <path fill="currentColor" d="M9.5 1a.5.5 0 0 1 .5.5V3h3.5a.5.5 0 0 1 .38.83L10.5 7.69v1.44q.41.04.95-.16a4 4 0 0 0 .72-.35l.04-.03h.01a.5.5 0 0 1 .67.1l2 2.5a.5.5 0 0 1 0 .62c-.76.96-3.14 2.69-6.89 2.69s-6.13-1.73-6.89-2.69a.5.5 0 0 1 0-.62l2-2.5a.5.5 0 0 1 .67-.1l.05.03.16.09q.22.13.56.26.54.2.95.16V7.69L2.12 3.83A.5.5 0 0 1 2.5 3H6V1.5a.5.5 0 0 1 .5-.5zM7 3.5a.5.5 0 0 1-.5.5H3.6l2.78 3.17a.5.5 0 0 1 .12.33v2a.5.5 0 0 1-.28.45c-.7.35-1.5.15-2.02-.05a5 5 0 0 1-.58-.26l-1.46 1.84c.82.78 2.8 2.02 5.84 2.02s5.02-1.24 5.84-2.02l-1.46-1.83a5 5 0 0 1-.58.26c-.52.2-1.33.39-2.02.04a.5.5 0 0 1-.28-.45v-2a.5.5 0 0 1 .12-.33L12.4 4H9.5a.5.5 0 0 1-.5-.5V2H7z"/>
</symbol>`,gc=`<symbol id="file-tree-builtin-postcss" viewBox="0 0 16 16">
  <path fill="currentColor" d="M14.5 8a6.5 6.5 0 0 0-5.9-6.47l5.42 8.93A7 7 0 0 0 14.5 8M2.88 12A6.5 6.5 0 0 0 8 14.5c2.08 0 3.93-.98 5.12-2.5zm8.62-1h1.68L11.5 8.24zm-1-.55a4 4 0 0 1-.7.55h.7zM8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M5.5 11h.7a4 4 0 0 1-.7-.55zm-2.68 0H4.5V8.24zm3.76-6.2A4 4 0 0 1 8 4.5q.76 0 1.42.3L8 2.46zM1.5 8q0 1.31.48 2.46L7.4 1.53A6.5 6.5 0 0 0 1.5 8m14 0a7.5 7.5 0 0 1-.99 3.72l-.01.03-.02.03A7.5 7.5 0 0 1 8 15.5a7.5 7.5 0 0 1-6.5-3.75l-.01-.03A7.5 7.5 0 1 1 15.5 8"/>
</symbol>`,mc=`<symbol id="file-tree-builtin-prettier" viewBox="0 0 16 16">
  <path fill="currentColor" d="M6 12v1H4.93v-1zm1-2v1H2v-1zm6-4v1h-3V6zm-1-4v1H9V2z"/>
  <path fill="currentColor" d="M11.5 10v1H8v-1zM5 6v1H2V6zm5-2v1H9V4z" opacity=".8"/>
  <path fill="currentColor" d="M6 14v1H2v-1zm-.5-6v1H2V8zM13 4v1h-3V4zM4.93 2v1H2V2z" opacity=".6"/>
  <path fill="currentColor" d="M4.93 12v1H2v-1zM13 8v1H9V8zM5.5 4v1H2V4zM9 2v1H4.93V2z" opacity=".4"/>
</symbol>`,vc=`<symbol id="file-tree-builtin-python" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8.33 8.4H10c1.16 0 1.9-.73 1.9-1.86V5.08q0-.24.25-.24h.74c.75 0 1.33.32 1.66.97q.4.73.41 1.46c.09.9.09 1.78-.24 2.67-.25.73-.75 1.3-1.58 1.46h-4.8c-.08 0-.25 0-.25.08v.4s.17.09.25.09h2.82q.34-.02.33.32v1.06c0 .56-.25.97-.75 1.13-.41.16-.83.33-1.24.4a7 7 0 0 1-2.98-.07 3 3 0 0 1-1.16-.49c-.33-.32-.58-.65-.5-1.14v-2.91c0-1.13.67-1.78 1.82-1.78q.89-.1 1.66-.08m2.32 4.86a.65.65 0 0 0-.66-.65c-.34 0-.67.33-.67.65s.33.57.67.65a.65.65 0 0 0 .66-.65" class="bg" opacity=".8"/>
  <path fill="currentColor" d="M7.67 7.6H6c-1.16 0-1.9.73-1.9 1.86v1.46q0 .24-.25.24h-.74c-.75 0-1.33-.32-1.66-.97a3 3 0 0 1-.41-1.46 6 6 0 0 1 .24-2.67c.25-.73.75-1.3 1.58-1.46h4.8c.08 0 .25 0 .25-.08v-.4s-.17-.09-.25-.09H4.85c-.24 0-.33-.08-.33-.32V2.65c0-.56.25-.97.75-1.13.41-.16.83-.33 1.24-.4a7 7 0 0 1 2.98.07c.41.09.83.25 1.16.49.33.32.58.65.5 1.13v2.92c0 1.14-.67 1.78-1.82 1.78-.58.08-1.16.08-1.66.08M5.35 2.73c0 .33.25.65.66.65.33 0 .66-.32.66-.65 0-.32-.33-.56-.66-.64a.65.65 0 0 0-.66.64" class="fg"/>
</symbol>`,yc=`<symbol id="file-tree-builtin-react" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8 6.65c.73 0 1.31.6 1.31 1.35S8.73 9.35 8 9.35 6.69 8.75 6.69 8 7.27 6.65 8 6.65"/>
  <path fill="currentColor" fill-rule="evenodd" d="M8 2.55c1.3-.99 2.59-1.34 3.5-.8.92.55 1.27 1.87 1.08 3.53C14.06 5.94 15 6.9 15 8s-.94 2.06-2.42 2.72c.19 1.65-.16 2.98-1.08 3.52-.91.55-2.2.2-3.5-.8-1.3 1-2.58 1.35-3.5.8-.91-.54-1.27-1.87-1.08-3.52C1.94 10.06 1 9.1 1 8s.94-2.06 2.42-2.72c-.19-1.66.17-2.98 1.08-3.52s2.2-.2 3.5.8M4.26 11.2c-.08 1.34.28 2.03.68 2.26s1.15.22 2.25-.52l.11-.09a12 12 0 0 1-1.24-1.39 11 11 0 0 1-1.8-.41zm7.47-.15q-.83.27-1.79.41-.6.8-1.24 1.4l.11.08c1.1.74 1.86.76 2.25.52.4-.23.76-.92.68-2.26zm-3.04.54a14 14 0 0 1-1.38 0q.34.38.69.7.35-.32.7-.7M8 5.29q-.76 0-1.47.1A13 13 0 0 0 5.07 8a14 14 0 0 0 1.46 2.62 13 13 0 0 0 2.94 0A13 13 0 0 0 10.93 8a14 14 0 0 0-1.46-2.62A13 13 0 0 0 8 5.3M4.64 9.18q-.15.5-.25.96.44.16.94.27a15 15 0 0 1-.7-1.23m6.73 0a15 15 0 0 1-.7 1.23q.5-.11.95-.27a10 10 0 0 0-.25-.96M3.44 6.26C2.27 6.86 1.87 7.53 1.87 8s.4 1.14 1.57 1.74l.13.07q.18-.88.55-1.81a12 12 0 0 1-.55-1.8q-.07.02-.13.06m8.99-.07A12 12 0 0 1 11.88 8q.36.94.55 1.8l.13-.06c1.17-.6 1.56-1.27 1.56-1.74s-.39-1.14-1.56-1.74zm-7.1-.6q-.5.11-.94.27.1.46.25.96a15 15 0 0 1 .69-1.23m5.34 0a15 15 0 0 1 .7 1.23q.14-.5.24-.96-.44-.15-.94-.27M7.18 3.06c-1.09-.74-1.85-.76-2.24-.52s-.76.92-.69 2.26l.01.15a11 11 0 0 1 1.8-.41q.6-.8 1.24-1.4zm3.88-.52c-.4-.24-1.15-.22-2.25.52l-.12.08q.65.6 1.25 1.4.96.15 1.8.41v-.14c.08-1.35-.28-2.04-.68-2.27M8 3.7a10 10 0 0 0-.7.7 14 14 0 0 1 1.4 0 10 10 0 0 0-.7-.7" clip-rule="evenodd"/>
</symbol>`,bc=`<symbol id="file-tree-builtin-ruby" viewBox="0 0 16 16">
  <path fill="currentColor" fill-rule="evenodd" d="M11.04 2c.48 0 .92.23 1.18.6l2.54 3.65c.37.52.3 1.23-.15 1.69l-5.58 5.64a1.47 1.47 0 0 1-2.06 0L1.39 7.94a1.3 1.3 0 0 1-.15-1.7l2.54-3.63q.2-.3.5-.45.33-.16.68-.16zm.84 2.17a.5.5 0 0 0-.7-.05L8 6.84 4.83 4.12a.5.5 0 0 0-.65.76L6.65 7H3.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H9.35l2.48-2.12a.5.5 0 0 0 .05-.7" clip-rule="evenodd"/>
</symbol>`,Ic=`<symbol id="file-tree-builtin-rust" viewBox="0 0 16 16">
  <path fill="currentColor" fill-rule="evenodd" d="M8 .8a.2.2 0 0 1 .18.1l.38.6.16.02.5-.53.01-.01a.2.2 0 0 1 .33.08l.25.68.16.05.59-.43h.02a.2.2 0 0 1 .3.14l.12.71.15.08.65-.3a.2.2 0 0 1 .2.02.2.2 0 0 1 .1.18l-.03.72.12.1.71-.16a.2.2 0 0 1 .25.25l-.17.7q.06.06.1.13l.73-.03A.2.2 0 0 1 14 4a.2.2 0 0 1 .02.2l-.3.66.08.14.71.12a.2.2 0 0 1 .14.32l-.43.59.05.16.68.25a.2.2 0 0 1 .07.35l-.53.49.01.16.62.38a.2.2 0 0 1 0 .36l-.62.38-.01.16.53.5a.2.2 0 0 1-.07.34l-.68.25-.05.16.43.59a.2.2 0 0 1-.14.32l-.72.12-.07.15.3.65a.2.2 0 0 1-.02.2.2.2 0 0 1-.18.1l-.72-.03-.1.13.16.7a.2.2 0 0 1-.25.25l-.7-.17-.13.1.03.73a.2.2 0 0 1-.1.18.2.2 0 0 1-.2.02l-.66-.3-.14.08-.12.71a.2.2 0 0 1-.32.14l-.59-.43-.16.05-.25.68a.2.2 0 0 1-.34.07l-.5-.53-.16.01-.38.62a.2.2 0 0 1-.36 0l-.38-.62-.16-.01-.5.53a.2.2 0 0 1-.34-.07l-.25-.68-.16-.05-.59.43a.2.2 0 0 1-.32-.14L5 13.78l-.15-.07-.65.3a.2.2 0 0 1-.2-.02.2.2 0 0 1-.1-.18l.03-.72-.13-.1-.7.16a.2.2 0 0 1-.25-.25l.17-.7-.1-.13-.73.03a.2.2 0 0 1-.2-.3l.3-.66-.08-.14-.71-.12a.2.2 0 0 1-.14-.32l.43-.59-.05-.16-.68-.25A.2.2 0 0 1 1 9.22l.53-.5-.02-.16-.6-.38A.2.2 0 0 1 .8 8a.2.2 0 0 1 .1-.18l.6-.38.02-.16-.53-.5a.2.2 0 0 1 .07-.34l.68-.25.05-.16-.43-.59a.2.2 0 0 1 .14-.32L2.2 5l.08-.15L2 4.2a.2.2 0 0 1 .2-.3l.72.03.1-.13-.16-.7a.2.2 0 0 1 .25-.25l.7.16.13-.1-.03-.72A.2.2 0 0 1 4 2a.2.2 0 0 1 .2-.02l.65.3L5 2.2l.12-.71v-.03a.2.2 0 0 1 .32-.1l.59.41.16-.04.25-.68.01-.02A.2.2 0 0 1 6.8.99l.49.53.16-.02.38-.61.02-.02A.2.2 0 0 1 8 .79M6.8 9.45h1.26l.06.01q.03.01.03.05v1.52q0 .07-.09.06h-4.5A5.4 5.4 0 0 0 8 13.42a5.4 5.4 0 0 0 4.45-2.33h-2.42c-.36 0-.68-.5-.77-.75-.08-.22-.2-.91-.25-1.12-.15-.61-.59-.71-.78-.73H6.8zM8 2.58a5.4 5.4 0 0 0-4.07 1.85h5.74l.17.02c.23.03.6.12.96.35.34.23.83.68.83 1.4 0 .66-.55 1.16-1.08 1.5.42.33.7.53.86 1.44.04.17.34.32.62.29.29-.03.62-.16.62-.75v-.24q0-.1.07-.1h.68A5.43 5.43 0 0 0 8 2.59M2.96 6.03a5.4 5.4 0 0 0-.19 3.37h1.66V6.03zM6.8 7.06h1.66c.35 0 .77-.12.77-.47 0-.42-.55-.53-.65-.53H6.8z" clip-rule="evenodd"/>
</symbol>`,wc=`<symbol id="file-tree-builtin-sass" viewBox="0 0 16 16">
  <path fill="currentColor" fill-rule="evenodd" d="M8.08 1.44c2.41-.91 4.96-.37 5.35 1.27.39 1.62-.92 3.56-2.6 4.25a5 5 0 0 1-3.26.35c-.58-.2-.92-.62-1-.85-.03-.09-.09-.24 0-.3.05-.03.08-.02.22.15s.7.6 1.75.48c2.78-.34 4.45-2.64 3.92-3.88-.37-.87-2.5-1.26-5.18.16C4.03 4.81 3.85 6.24 3.82 6.8c-.08 1.5 1.73 2.28 2.7 3.4q.04.03.07.08c.3-.12.7-.19 1.35-.2 1.58-.03 2.47 1.08 2.43 2.08-.03.78-.7 1.1-.82 1.13-.1.01-.14.02-.15-.06q-.03-.06.13-.15c.16-.09.42-.3.48-.72.05-.43-.24-1.44-1.76-1.63a3 3 0 0 0-1.33.08c.27.62.32 1.87-.29 2.83-.63 1-1.8 1.61-2.93 1.27-.37-.1-.93-.92-.45-2.05.46-1.07 2.4-2.12 2.66-2.26-.9-.83-3.08-1.95-3.4-3.65-.08-.49.13-1.65 1.46-2.98a12 12 0 0 1 4.11-2.52m-1.88 9.7c-.01.01-.9.47-1.52 1.17-.59.66-.75 1.48-.43 1.69.3.18 1-.04 1.51-.62a3 3 0 0 0 .5-.9q.2-.64.02-1.39z" clip-rule="evenodd"/>
</symbol>`,xc=`<symbol id="file-tree-builtin-stylelint" viewBox="0 0 16 16">
  <path fill="currentColor" d="M4 3v3.5l1.5-1L7 15 .5 6l1-1.5L0 3l2.5-2h1zm12 0-1.5 1.5 1 1.5L9 15l1.5-9.5 1.5 1V3l.5-2h1zm-8 8.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m0-3a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m0-3a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1"/>
  <path fill="currentColor" d="M6.5 2.5V4l-2 1.5v-4zm5 3L9.5 4V2.5l2-1zM9 4H7V2.5h2z"/>
</symbol>`,Sc=`<symbol id="file-tree-builtin-svelte" viewBox="0 0 16 16">
  <path fill="currentColor" d="m3.98 3.7 3.36-2.08a4.5 4.5 0 0 1 5.9 1.23 4 4 0 0 1 .7 3.02q-.16.75-.58 1.4c.42.77.56 1.66.4 2.52a3.7 3.7 0 0 1-1.57 2.4l-.17.1-3.36 2.09a4.5 4.5 0 0 1-5.9-1.23 4 4 0 0 1-.66-1.44 4 4 0 0 1-.04-1.58 4 4 0 0 1 .58-1.4 4 4 0 0 1-.4-2.52 3.7 3.7 0 0 1 1.57-2.4zl3.36-2.08zm7.87 0a2.7 2.7 0 0 0-1.26-.95 2.7 2.7 0 0 0-1.6-.07 3 3 0 0 0-.52.2l-.16.09-3.36 2.08a2 2 0 0 0-.69.64 2 2 0 0 0-.36.86 2.3 2.3 0 0 0 .42 1.81A2.7 2.7 0 0 0 7.18 9.4q.28-.06.53-.2l.16-.09 1.28-.79.2-.09a.8.8 0 0 1 .87.31.7.7 0 0 1 .13.55.7.7 0 0 1-.24.4l-.08.05-3.36 2.08-.2.09a1 1 0 0 1-.49-.02 1 1 0 0 1-.38-.3 1 1 0 0 1-.13-.37v-.1l.01-.13-.13-.03a4 4 0 0 1-1.1-.5l-.2-.14-.18-.12-.07.18-.08.3a2.3 2.3 0 0 0 .43 1.82q.45.64 1.19.93.73.28 1.51.14l.16-.04q.27-.07.52-.2l.16-.09 3.36-2.08q.4-.25.69-.64.27-.4.36-.86a2.3 2.3 0 0 0-.42-1.82 2.7 2.7 0 0 0-1.27-.95 2.7 2.7 0 0 0-1.6-.08q-.27.07-.52.2l-.16.1-1.28.79-.2.09a1 1 0 0 1-.49-.03 1 1 0 0 1-.38-.29.7.7 0 0 1-.13-.54.7.7 0 0 1 .24-.4l.08-.06L9.33 4.4l.2-.1a.8.8 0 0 1 .87.32 1 1 0 0 1 .13.38v.22l.11.04q.6.18 1.12.5l.2.14.17.12.06-.19.08-.3a2.3 2.3 0 0 0-.42-1.81z"/>
</symbol>`,_c=`<symbol id="file-tree-builtin-svg" viewBox="0 0 16 16">
  <path fill="currentColor" d="M5 7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/>
  <path fill="currentColor" d="M6 1a5 5 0 0 1 4.58 3H7a3 3 0 0 0-3 3v3.58A5 5 0 0 1 6 1" opacity=".5"/>
</symbol>`,Cc=`<symbol id="file-tree-builtin-svgo" viewBox="0 0 16 16">
  <path fill="currentColor" d="M9.43 4.8A.6.6 0 1 1 9.19 6l-.56.96a1.2 1.2 0 0 1 .32 1.58l.7.53a.89.89 0 1 1-.17.22l-.7-.52a1.2 1.2 0 0 1-1.4.25l-.56.87a.75.75 0 1 1-.57-.2 1 1 0 0 1 .32.05l.56-.87a1.2 1.2 0 0 1-.4-1.24l-1.2-.47a.56.56 0 1 1 .1-.28v.02l1.2.47a1.2 1.2 0 0 1 1.56-.55l.56-.97a.6.6 0 0 1-.15-.64.6.6 0 0 1 .63-.4"/>
  <path fill="currentColor" fill-rule="evenodd" d="M9.17 1q.16.63.27 1.26a6 6 0 0 1 1.61.67q.52-.38 1.08-.71l1.65 1.64q-.32.56-.68 1.05.48.78.72 1.67.6.09 1.18.25v2.32q-.55.15-1.11.24a6 6 0 0 1-.7 1.82q.31.44.59.91l-1.65 1.65-.85-.55a6 6 0 0 1-1.9.83q-.08.47-.2.95H6.84q-.12-.46-.2-.93a6 6 0 0 1-1.96-.81q-.39.27-.8.51l-1.65-1.65q.25-.43.53-.84a6 6 0 0 1-.75-1.9L1 9.16V6.83q.54-.14 1.09-.24a6 6 0 0 1 .77-1.74q-.33-.47-.63-.98l1.65-1.65q.54.32 1.03.68a6 6 0 0 1 1.66-.66q.1-.61.26-1.24zM7.96 3.73a4 4 0 0 0-1.74.36 4.5 4.5 0 0 0-2.3 2.3 4.4 4.4 0 0 0-.1 3.29l.03.06a4.4 4.4 0 0 0 2.4 2.47 4.4 4.4 0 0 0 3.48-.02l.03-.02a4.4 4.4 0 0 0 2.3-2.42l.06-.14a4.4 4.4 0 0 0-.2-3.4 4.4 4.4 0 0 0-2.13-2.07L9.47 4a4 4 0 0 0-1.51-.27" clip-rule="evenodd"/>
</symbol>`,kc=`<symbol id="file-tree-builtin-swift" viewBox="0 0 16 16">
  <path fill="currentColor" d="M9.63 1c6.15 4.35 4.16 9.15 4.16 9.15s1.75 2.05 1.04 3.85c0 0-.72-1.26-1.93-1.26-1.17 0-1.85 1.26-4.2 1.26C3.47 14 1 9.46 1 9.46c4.71 3.22 7.93.94 7.93.94C6.8 9.12 2.29 3 2.29 3c3.93 3.47 5.63 4.39 5.63 4.39-1.01-.87-3.86-5.13-3.86-5.13C6.34 4.66 10.86 8 10.86 8c1.28-3.7-1.23-7-1.23-7"/>
</symbol>`,Pc=`<symbol id="file-tree-builtin-table" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8 4a3 3 0 0 0 3 3h3v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 12.5v-9A2.5 2.5 0 0 1 4.5 1H8z" class="bg" opacity=".4"/>
  <path fill="currentColor" d="M11.5 8a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5zM5 12h2.5v-1H5zm3.5 0H11v-1H8.5zM5 10h2.5V9H5zm3.5 0H11V9H8.5zm1-9a.5.5 0 0 1 .354.146l4 4A.5.5 0 0 1 14 5.5V6h-3a2 2 0 0 1-2-2V1z" class="fg"/>
</symbol>`,Ec=`<symbol id="file-tree-builtin-tailwind" viewBox="0 0 16 16">
  <path fill="currentColor" fill-rule="evenodd" d="M8 4Q5.2 4 4.5 6.67q1.05-1.34 2.45-1c.53.12.91.5 1.33.9C8.98 7.23 9.77 8 11.5 8q2.8 0 3.5-2.67-1.05 1.34-2.45 1c-.53-.12-.91-.5-1.33-.9C10.52 4.77 9.73 4 8 4M4.5 8Q1.7 8 1 10.67q1.05-1.34 2.45-1c.53.12.91.5 1.33.9C5.48 11.23 6.26 12 8 12q2.8 0 3.5-2.67-1.05 1.34-2.45 1c-.53-.12-.91-.5-1.33-.9C7.02 8.77 6.24 8 4.5 8" clip-rule="evenodd"/>
</symbol>`,Dc=`<symbol id="file-tree-builtin-terraform" viewBox="0 0 16 16">
  <path fill="currentColor" d="M1 0v5.05l4.35 2.53V2.53zm9.18 5.34L5.83 2.82v5.05l4.35 2.53zm.47 5.06V5.34L15 2.82v5.05zm-.48 5.6-4.35-2.53V8.42l4.35 2.53z"/>
</symbol>`,Tc=`<symbol id="file-tree-builtin-text" viewBox="0 0 16 16">
  <path fill="currentColor" fill-rule="evenodd" d="M8 4a3 3 0 0 0 3 3h3v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 12.5v-9A2.5 2.5 0 0 1 4.5 1H8z" class="bg" clip-rule="evenodd" opacity=".4"/>
  <path fill="currentColor" d="M8.5 11a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm2-2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm-1-8a.5.5 0 0 1 .354.146l4 4A.5.5 0 0 1 14 5.5V6h-3a2 2 0 0 1-2-2V1z"/>
</symbol>`,Mc=`<symbol id="file-tree-builtin-typescript" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8 1C2.24 1 1 2.24 1 8s1.24 7 7 7 7-1.24 7-7-1.24-7-7-7" class="bg" opacity=".2"/>
  <path fill="currentColor" d="M8.1 9.64h.95c.04.62.28.76 1.28.76s1.2-.14 1.2-.85c0-.66-.2-.85-1.2-1.07-1.79-.38-2.18-.7-2.18-1.86C8.15 5.3 8.54 5 10.31 5c1.67 0 2.04.26 2.07 1.42h-.95c-.02-.43-.23-.53-1.1-.53-1 0-1.22.14-1.22.74 0 .52.22.7 1.24.92 1.76.38 2.15.73 2.15 2 0 1.44-.4 1.75-2.24 1.75-1.8 0-2.18-.3-2.15-1.66m-3 1.57V5.99H3.5v-.9h4.21v.9H6.1v5.22z"/>
</symbol>`,Ac=`<symbol id="file-tree-builtin-vite" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8.57 14.87c-.18.26-.55.11-.55-.22v-3.18l-.05-.27-.13-.22-.2-.15-.24-.06H4.29c-.26 0-.4-.32-.26-.55L6.08 7c.3-.46 0-1.1-.5-1.1H1.8c-.25 0-.4-.32-.25-.56l2.65-4.2A.3.3 0 0 1 4.46 1h7.9c.26 0 .4.32.26.55l-2.05 3.23c-.29.46 0 1.1.5 1.1h3.12c.26 0 .4.34.24.57z"/>
</symbol>`,Nc=`<symbol id="file-tree-builtin-vscode" viewBox="0 0 16 16">
  <path fill="currentColor" d="m5.11 9.68-2.4 1.84a.6.6 0 0 1-.75-.04l-.77-.7a.6.6 0 0 1 0-.87L3.28 8zm5.52-8.42a.51.51 0 0 1 .87.36V4.8L7.32 8 5.1 6.32z" opacity=".75"/>
  <path fill="currentColor" d="M11.1 14.99h.03zM1.96 4.52a.6.6 0 0 1 .75-.04l8.8 6.71v3.19a.51.51 0 0 1-.88.36L1.19 6.1a.6.6 0 0 1 0-.87z" opacity=".65"/>
  <path fill="currentColor" d="M11.62 14.91a.9.9 0 0 1-1-.17.51.51 0 0 0 .88-.36V1.62a.51.51 0 0 0-.87-.36.9.9 0 0 1 1-.17l2.87 1.39a.9.9 0 0 1 .5.8v9.44a.9.9 0 0 1-.5.8z"/>
</symbol>`,Rc=`<symbol id="file-tree-builtin-vue" viewBox="0 0 16 16">
  <path fill="currentColor" d="M9.62 2.25 8 5.02 6.38 2.25H1l7 12 7-12z" opacity=".5"/>
  <path fill="currentColor" d="M9.54 2.25 8 4.95l-1.54-2.7H4l4 7 4-7z"/>
</symbol>`,Vc=`<symbol id="file-tree-builtin-wasm" viewBox="0 0 16 16">
  <path fill="currentColor" d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3a2 2 0 1 0 4 0z" class="subtract" opacity=".2"/>
  <path fill="currentColor" d="M4.64 11.4h.02l.8-3.4h.91l.73 3.45L7.88 8h.96l-1.25 5h-.97L5.9 9.6 5.1 13h-1L3 8h.98z"/>
  <path fill="currentColor" fill-rule="evenodd" d="M13 13h-1.02l-.33-1.11H9.9L9.64 13h-.97l1.26-5h1.54zm-2.49-3.77-.42 1.84h1.32l-.49-1.84z" clip-rule="evenodd"/>
</symbol>`,Lc=`<symbol id="file-tree-builtin-webpack" viewBox="0 0 16 16">
  <path fill="currentColor" d="M14.1 11.79 8.26 15v-2.5l3.64-1.94zm.4-.35V4.73l-2.14 1.2v4.3zm-12.6.35L7.74 15v-2.5L4.1 10.56zm-.4-.35V4.73l2.14 1.2v4.3zm.25-7.15 6-3.29v2.42L3.9 5.47l-.03.01zm12.5 0L8.25 1v2.42l3.85 2.05.03.01z" class="bg" opacity=".4"/>
  <path fill="currentColor" d="m7.74 11.93-3.59-1.92v-3.8l3.6 2.02zm.52 0 3.59-1.92v-3.8l-3.6 2.02zM4.4 5.77 8 3.85l3.6 1.93L8 7.8z" class="fg"/>
</symbol>`,Fc=`<symbol id="file-tree-builtin-yml" viewBox="0 0 16 16">
  <path fill="currentColor" d="M7.5 2A1.5 1.5 0 0 1 9 3.5v3A1.5 1.5 0 0 1 7.5 8h-2v2A1.5 1.5 0 0 0 7 11.5v-1A1.5 1.5 0 0 1 8.5 9h5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 7 13.5v-1A2.5 2.5 0 0 1 4.5 10V8h-2A1.5 1.5 0 0 1 1 6.5v-3A1.5 1.5 0 0 1 2.5 2zm1 8a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm-6-7a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
</symbol>`,Bc=`<symbol id="file-tree-builtin-zig" viewBox="0 0 16 16">
  <path fill="currentColor" d="m14.73 1.5-7.29 8.82h4.17l-1.73 2.04H5.76L1.27 14.5l7.3-8.91H4.39l1.73-2.05h4.12z"/>
  <path fill="currentColor" d="M5.21 3.54 3.56 5.6h-.55v4.73h.83L2.1 12.36H1V3.54zm9.79 0v8.82h-4.3l1.74-2.04h.55V5.68h-.83l1.74-2.14z"/>
</symbol>`,zc=[qa,Ga,Ya,Qa,Ja,Za,nc,rc,oc,sc,lc,ac,cc,uc,dc,vc,bc,Ic,kc,Pc,Tc,Mc,`<symbol id="file-tree-builtin-zip" viewBox="0 0 16 16">
  <path fill="currentColor" d="M4.585 2a2 2 0 0 1 1.028.285l1.788 1.072a1 1 0 0 0 .514.143H12A2 2 0 0 1 13.935 5H0V4a2 2 0 0 1 2-2z" class="bg" opacity=".5"/>
  <path fill="currentColor" fill-rule="evenodd" d="M14 12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-1.25h1v-1H0V6h14zM9.9 8.25c-.883 0-1.9.5-1.9.5H7v1h1v1s1.017.5 1.9.5c.884 0 1.6-.672 1.6-1.5s-.716-1.5-1.6-1.5M2 9.75v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1zm-5-1v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1z" class="fg" clip-rule="evenodd"/>
</symbol>`],Hc=[Oa,$a,ja,Ua,Ka,Wa,Xa,ec,tc,ic,hc,fc,pc,gc,mc,yc,wc,xc,Sc,_c,Cc,Ec,Dc,Ac,Nc,Rc,Vc,Lc,Fc,Bc];function as(e,t){return t.length===0?e:e.replace("</svg>",`
  ${t.join(`
  `)}
</svg>`)}const Ko=as(ls,zc),Oc={minimal:ls,standard:Ko,complete:as(Ko,Hc)},$c={".babelrc":"babel",".babelrc.json":"babel",".bash_profile":"bash",".bashrc":"bash",".browserslistrc":"browserslist",".dockerignore":"docker",".eslintignore":"eslint",".eslintrc":"eslint",".eslintrc.cjs":"eslint",".eslintrc.js":"eslint",".eslintrc.json":"eslint",".eslintrc.yaml":"eslint",".eslintrc.yml":"eslint",".gitattributes":"git",".gitignore":"git",".gitkeep":"git",".gitmodules":"git",".oxlintrc.json":"oxc",".postcssrc":"postcss",".postcssrc.json":"postcss",".postcssrc.yaml":"postcss",".postcssrc.yml":"postcss",".prettierignore":"prettier",".prettierrc":"prettier",".prettierrc.cjs":"prettier",".prettierrc.js":"prettier",".prettierrc.json":"prettier",".prettierrc.mjs":"prettier",".prettierrc.toml":"prettier",".prettierrc.yaml":"prettier",".prettierrc.yml":"prettier",".stylelintignore":"stylelint",".stylelintrc":"stylelint",".stylelintrc.cjs":"stylelint",".stylelintrc.js":"stylelint",".stylelintrc.json":"stylelint",".stylelintrc.mjs":"stylelint",".stylelintrc.yaml":"stylelint",".stylelintrc.yml":"stylelint",".terraform.lock.hcl":"terraform",".zprofile":"bash",".zshenv":"bash",".zshrc":"bash","babel.config.cjs":"babel","babel.config.js":"babel","babel.config.json":"babel","babel.config.mjs":"babel","biome.json":"biome","biome.jsonc":"biome","bootstrap.bundle.js":"bootstrap","bootstrap.bundle.min.js":"bootstrap","bootstrap.css":"bootstrap","bootstrap.js":"bootstrap","bootstrap.min.css":"bootstrap","bootstrap.min.js":"bootstrap","bun.lock":"bun","bun.lockb":"bun","bunfig.toml":"bun","claude.md":"claude","compose.yaml":"docker","compose.yml":"docker","docker-compose.override.yml":"docker","docker-compose.yaml":"docker","docker-compose.yml":"docker",dockerfile:"docker","eslint.config.cjs":"eslint","eslint.config.js":"eslint","eslint.config.mjs":"eslint","eslint.config.mts":"eslint","eslint.config.ts":"eslint",gemfile:"ruby","next.config.js":"nextjs","next.config.mjs":"nextjs","next.config.mts":"nextjs","next.config.ts":"nextjs","postcss.config.cjs":"postcss","postcss.config.js":"postcss","postcss.config.mjs":"postcss","postcss.config.ts":"postcss","prettier.config.cjs":"prettier","prettier.config.js":"prettier","prettier.config.mjs":"prettier",rakefile:"ruby","readme.md":"markdown","stylelint.config.cjs":"stylelint","stylelint.config.js":"stylelint","stylelint.config.mjs":"stylelint","svgo.config.cjs":"svgo","svgo.config.js":"svgo","svgo.config.mjs":"svgo","svgo.config.ts":"svgo","tailwind.config.cjs":"tailwind","tailwind.config.js":"tailwind","tailwind.config.mjs":"tailwind","tailwind.config.ts":"tailwind","vite.config.js":"vite","vite.config.mjs":"vite","vite.config.mts":"vite","vite.config.ts":"vite","webpack.config.babel.js":"webpack","webpack.config.cjs":"webpack","webpack.config.js":"webpack","webpack.config.mjs":"webpack","webpack.config.ts":"webpack"},qc={"7z":"zip",astro:"astro",AUTHORS:"text",avif:"image",bash:"bash",bmp:"image",bz2:"zip",c:"c",cc:"cpp",cfg:"text",CHANGELOG:"text",cjs:"javascript","code-workspace":"vscode",conf:"text",CONTRIBUTORS:"text",cpp:"cpp",csh:"bash",css:"css",csv:"table",cts:"typescript",cxx:"cpp",db:"database",editorconfig:"text",env:"text","env.development":"text","env.local":"text","env.production":"text",eot:"font",erb:"ruby",fish:"bash",gemspec:"ruby",gif:"image",go:"go",gql:"graphql",graphql:"graphql",gz:"zip",h:"c",hh:"cpp",hpp:"cpp",htm:"html",html:"html",hxx:"cpp",icns:"image",ico:"image",ini:"text",inl:"cpp",jar:"zip",jpeg:"image",jpg:"image",js:"javascript",json:"json",json5:"json",jsonc:"json",jsonl:"json",jsx:"javascript",ksh:"bash",less:"css",LICENSE:"text",log:"text",markdown:"markdown",mcp:"mcp",md:"markdown",mdx:"markdown","mdx.tsx":"markdown",mjs:"javascript",mm:"cpp",mts:"typescript",ods:"table",otf:"font",png:"image",postcss:"css",py:"python",pyi:"python",pyw:"python",pyx:"python",rake:"ruby",rar:"zip",rb:"ruby",rs:"rust",rst:"text",rtf:"text",sass:"css",scss:"css",sh:"bash",sql:"database",sqlite:"database",sqlite3:"database",styl:"css",svelte:"svelte",svg:"svg",swift:"swift",tar:"zip",tf:"terraform",tfstate:"terraform",tfvars:"terraform",tgz:"zip",tif:"image",tiff:"image",ts:"typescript",tsv:"table",tsx:"typescript",ttf:"font",txt:"text",vue:"vue",war:"zip",wasm:"wasm",wast:"wasm",wat:"wasm",webp:"image",woff:"font",woff2:"font",xhtml:"html",xls:"table",xlsx:"table",xz:"zip",yaml:"yml",yml:"yml",zig:"zig",zip:"zip",zsh:"bash"},jc={jsx:"react",sass:"sass",scss:"sass",tsx:"react"},Wo=new Set(["bash","c","cpp","css","database","default","font","git","go","html","image","javascript","json","markdown","mcp","python","ruby","rust","swift","table","text","typescript","zip"]),Uc=new Set(["complete"]);function Kc(e){return Oc[e==="none"?"minimal":e]}function Wc(e){return`file-tree-builtin-${e}`}function Gc(e){return e!=="none"&&Uc.has(e)}function Xc(e,t,n){if(e==="minimal"||e==="none")return;const r=e==="complete",o=$c[t.toLowerCase()];if(o!=null&&(r||Wo.has(o)))return o;for(const i of n){if(r){const l=jc[i];if(l!=null)return l}const s=qc[i];if(s!=null&&(r||Wo.has(s)))return s}return"default"}function Yc(e){return e.spriteSheet!=null||e.remap!=null||e.byFileName!=null||e.byFileExtension!=null||e.byFileNameContains!=null}function On(e){return e==null?{set:"complete",colored:!0}:typeof e=="string"?{set:e,colored:!0}:{...e,set:e.set??(Yc(e)?"none":"complete"),colored:e.colored??!0}}const Qc=e=>e.trim().toLowerCase(),Jc=e=>e.split("/").at(-1)??e,Zc=e=>{const t=e.toLowerCase().split("."),n=[];for(let r=1;r<t.length;r+=1)n.push(t.slice(r).join("."));return n};function Vn(e,t){return typeof e=="string"?{name:e,remappedFrom:t}:{...e,remappedFrom:t}}function eu(e){const t=On(e),n=t.remap,r=new Map;for(const[l,a]of Object.entries(t.byFileName??{}))r.set(l.toLowerCase(),a);const o=new Map;for(const[l,a]of Object.entries(t.byFileExtension??{}))o.set(Qc(l),a);const i=Object.entries(t.byFileNameContains??{}).map(([l,a])=>[l.toLowerCase(),a]);return{resolveIcon:(l,a)=>{if(l==="file-tree-icon-file"&&a!=null){const d=Jc(a),f=d.toLowerCase(),c=r.get(f);if(c!=null)return Vn(c,l);for(const[v,I]of i)if(f.includes(v))return Vn(I,l);const g=Zc(d);for(const v of g){const I=o.get(v);if(I!=null)return Vn(I,l)}const p=Xc(t.set,d,g);if(p!=null&&t.set!=="none")return{name:Wc(p),remappedFrom:l,token:p}}const h=n?.[l];return h==null?{name:l}:Vn(h,l)}}}const un=5,er=1<<un,cs=er*4,tu=cs;function sn(){return{childIdByNameId:new Map,childIds:[],childPositionById:new Map,childVisibleChunkSums:null,totalChildSubtreeNodeCount:0,totalChildVisibleSubtreeCount:0}}function Go(){return{childIdByNameId:null,childIds:[],childPositionById:null,childVisibleChunkSums:null,totalChildSubtreeNodeCount:0,totalChildVisibleSubtreeCount:0}}function xt(e,t){if(t.childIdByNameId!=null)return t.childIdByNameId;const n=new Map;for(const r of t.childIds){const o=e[r];o!=null&&n.set(o.nameId,r)}return t.childIdByNameId=n,n}function tr(e){if(e.childPositionById!=null)return e.childPositionById;const t=new Map;for(let n=0;n<e.childIds.length;n++){const r=e.childIds[n];r!=null&&t.set(r,n)}return e.childPositionById=t,t}function tn(e,t){e.childPositionById!=null&&e.childPositionById.set(t,e.childIds.length),e.childIds.push(t)}function us(e,t){if(e.childPositionById!=null)for(let n=t;n<e.childIds.length;n++){const r=e.childIds[n];r!=null&&e.childPositionById.set(r,n)}}function Xn(e,t){let n=0,r=0;for(const o of t.childIds){const i=e[o];i!=null&&(n+=i.subtreeNodeCount,r+=i.visibleSubtreeCount)}t.totalChildSubtreeNodeCount=n,t.totalChildVisibleSubtreeCount=r,dn(e,t)}function Xr(e,t,n,r){if(e.totalChildSubtreeNodeCount+=n,e.totalChildVisibleSubtreeCount+=r,e.childVisibleChunkSums==null||r===0)return;const o=tr(e).get(t);if(o===void 0)return;const i=o>>un;e.childVisibleChunkSums[i]+=r}function Mr(e,t,n){const r=t.childVisibleChunkSums;if(r!=null){let i=n,s=0;for(const l of r){if(i<l){const a=ru(e,t,s,i);return{...a,childVisibleIndex:n-a.localVisibleIndex}}i-=l,s+=er}throw new Error(`Visible child index ${String(n)} is out of range`)}let o=n;for(let i=0;i<t.childIds.length;i++){const s=t.childIds[i];if(s==null)continue;const l=e[s];if(l!=null){if(o<l.visibleSubtreeCount)return{childIndex:i,childVisibleIndex:n-o,localVisibleIndex:o};o-=l.visibleSubtreeCount}}throw new Error(`Visible child index ${String(n)} is out of range`)}function nu(e,t,n){let r=0;const o=t.childVisibleChunkSums;let i=0;if(o!=null){const s=n>>un;for(let l=0;l<s;l+=1)r+=o[l]??0;i=s<<un}for(let s=i;s<n;s+=1){const l=t.childIds[s];if(l==null)continue;const a=e[l];a!=null&&(r+=a.visibleSubtreeCount)}return r}function dn(e,t){if(t.childIds.length<cs){t.childVisibleChunkSums=null;return}const n=Math.ceil(t.childIds.length/er),r=new Int32Array(n);for(let o=0;o<t.childIds.length;o++){const i=t.childIds[o];if(i==null)continue;const s=e[i];s!=null&&(r[o>>un]+=s.visibleSubtreeCount)}t.childVisibleChunkSums=r}function ru(e,t,n,r){const o=Math.min(t.childIds.length,n+er);let i=r;for(let s=n;s<o;s++){const l=t.childIds[s];if(l==null)continue;const a=e[l];if(a!=null){if(i<a.visibleSubtreeCount)return{childIndex:s,localVisibleIndex:i};i-=a.visibleSubtreeCount}}throw new Error(`Visible child index ${String(r)} is out of range`)}const ds=0,Xe=1,ft=1,Me=2,hn=4,ou=Me|5,Yr=3,hs=1<<Yr,fs=4;function Be(e,t,n=ds){return e<<fs|n<<Yr|t}function tt(e){return e.depthAndFlags>>>fs}function nr(e){return(e.depthAndFlags&hs)>>Yr}function A(e){return(e.depthAndFlags&hs)!==0}function ps(e){return e.depthAndFlags&ou}function ge(e,t){return(ps(e)&t)!==0}function rr(e,t){e.depthAndFlags|=t}function iu(e,t){e.depthAndFlags=Be(t,ps(e),nr(e))}const gs=Symbol("benchmarkInstrumentation");function su(e,t){return t==null||Object.defineProperty(e,gs,{configurable:!0,enumerable:!1,value:t,writable:!1}),e}function Qr(e){return e==null?null:e[gs]??null}function D(e,t,n){return e==null?n():e.measurePhase(t,n)}function $n(e,t,n){!Number.isFinite(n)||e==null||e.setCounter(t,n)}function Xo(e){return e>=48&&e<=57}function lu(e){const t=[];let n=0,r=0;for(;r<e.length;){for(;r<e.length&&!Xo(e.charCodeAt(r));)r+=1;if(r>=e.length)break;r>n&&t.push(e.slice(n,r));let o=0;for(;r<e.length&&Xo(e.charCodeAt(r));)o=o*10+(e.charCodeAt(r)-48),r+=1;t.push(o),n=r}return(n<e.length||t.length===0)&&t.push(e.slice(n)),t}function yn(e){const t=e.toLowerCase();return{lowerValue:t,tokens:lu(t)}}function au(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const o=e[r],i=t[r];if(o===i)continue;if(typeof o=="number"&&typeof i=="number")return o<i?-1:1;const s=String(o),l=String(i);if(s!==l)return s<l?-1:1}return e.length!==t.length?e.length<t.length?-1:1:0}function Jr(e,t){if(e.tokens.length===1&&t.tokens.length===1&&typeof e.tokens[0]=="string"&&typeof t.tokens[0]=="string")return e.lowerValue===t.lowerValue?0:e.lowerValue<t.lowerValue?-1:1;const n=au(e.tokens,t.tokens);return n!==0?n:e.lowerValue!==t.lowerValue?e.lowerValue<t.lowerValue?-1:1:0}function ms(e,t,n){const r=Jr(n(e),n(t));return r!==0?r:e===t?0:e<t?-1:1}function cu(e,t){return ms(e,t,yn)}function Yn(e,t){return t!==e.segments.length-1||e.isDirectory?Xe:ds}function uu(e,t){const n=Math.min(e.segments.length,t.segments.length);for(let r=0;r<n;r++){const o=e.segments[r],i=t.segments[r];if(o===i)continue;const s=Yn(e,r);return s!==Yn(t,r)?s===Xe?-1:1:cu(o,i)}return e.segments.length!==t.segments.length?e.segments.length<t.segments.length?-1:1:e.isDirectory===t.isDirectory?0:e.isDirectory?-1:1}function du(e,t){return uu(e,t)}function hu(e,t,n){const r=i=>{const s=n.get(i);if(s!=null)return s;const l=yn(i);return n.set(i,l),l},o=Math.min(e.segments.length,t.segments.length);for(let i=0;i<o;i++){const s=e.segments[i],l=t.segments[i];if(s===l)continue;const a=Yn(e,i);return a!==Yn(t,i)?a===Xe?-1:1:ms(s,l,r)}return e.segments.length!==t.segments.length?e.segments.length<t.segments.length?-1:1:e.isDirectory===t.isDirectory?0:e.isDirectory?-1:1}function Ar(e,t){const n=e.sortKeyById[t];if(n!==void 0)return n;const r=e.valueById[t],o=yn(r);return e.sortKeyById[t]=o,o}function vs(e={}){return{flattenEmptyDirectories:e.flattenEmptyDirectories!==!1,sort:e.sort??"default"}}function ys(e){const t=e.length>0&&e.charCodeAt(e.length-1)===47,n=t?e.length-1:e.length,r=[];let o=0;for(let i=0;i<n;i++)e.charCodeAt(i)===47&&(r.push(e.slice(o,i)),o=i+1);return r.push(e.slice(o,n)),{hasTrailingSlash:t,segments:r}}function an(e){const{hasTrailingSlash:t,segments:n}=ys(e);return{basename:n[n.length-1]??"",isDirectory:t,path:e,segments:n}}function Nr(e){if(e.length===0)return{requiresDirectory:!1,segments:[]};const{hasTrailingSlash:t,segments:n}=ys(e);return{requiresDirectory:t,segments:n}}const xr="";function bs(){const e=new Map;return e.set(xr,0),{idByValue:e,valueById:[xr],sortKeyById:[yn(xr)]}}function ut(e,t){const n=e.idByValue.get(t);if(n!==void 0)return n;const r=e.valueById.length;return e.idByValue.set(t,r),e.valueById.push(t),r}function nt(e,t){const n=e.valueById[t];if(n===void 0)throw new Error(`Unknown segment ID: ${String(t)}`);return n}const Zr=Symbol("pathStorePreparedInputKind");function Is(e,t){return e[Zr]=t,e}function Yo(e){return{basename:e.basename,depth:e.segments.length,isDirectory:e.isDirectory,path:e.path,segments:e.segments}}function ws(e,t,n){return n==="default"?du(e,t):n(Yo(e),Yo(t))}function fu(){return{depthAndFlags:Be(0,ft|Me,Xe),nameId:0,parentId:0,subtreeNodeCount:1,visibleSubtreeCount:1}}function pu(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++)if(e[r]!==t[r])return r;return n}function Qo(e){return e.isDirectory?e.segments.length:e.segments.length-1}function gu(e){return Array.isArray(e)&&e.every(t=>t!=null&&typeof t=="object"&&typeof t.path=="string"&&Array.isArray(t.segments)&&typeof t.basename=="string"&&typeof t.isDirectory=="boolean")}function mu(e){return Array.isArray(e)&&e.every(t=>typeof t=="string")}function vu(e,t={}){return eo(e,t).map(n=>n.path)}function yu(e,t={}){const n=eo(e,t);return Is({paths:n.map(r=>r.path),preparedPaths:n},"prepared")}function bu(e){const t=e.length;let n=!1;for(let r=0;r<t;r+=1){const o=e[r];if(o.length>0&&o.charCodeAt(o.length-1)===47){n=!0;break}}return Is({paths:e,presortedPaths:e,presortedPathsContainDirectories:n},"presorted")}function Iu(e){const t=e,n=t.preparedPaths;if(t[Zr]==="prepared"&&n!=null)return n;if(!gu(n))throw new Error("preparedInput must come from PathStore.prepareInput()");return n}function wu(e){const t=e;return t[Zr]==="presorted"&&t.presortedPaths!=null||mu(t.presortedPaths)?t.presortedPaths:null}function xu(e){const t=e;return typeof t.presortedPathsContainDirectories=="boolean"?t.presortedPathsContainDirectories:null}function eo(e,t={}){const n=vs(t),r=Qr(t);$n(r,"workload.inputFiles",e.length);const o=D(r,"store.preparePathEntries.parse",()=>e.map(i=>an(i)));return D(r,"store.preparePathEntries.sort",()=>o.sort((i,s)=>ws(i,s,n.sort))),o}var xs=class{directories=new Map;directoryStack=[0];presortedDirectoryNodeIds=[];initialExpandedPathSet;createdDirectoriesAllExpanded=!1;createdDirectoryCount=0;lastPreparedPath=null;nodes=[fu()];options;instrumentation;segmentSortKeyCache=new Map;segmentTable=bs();hasDeferredDirectoryIndexes=!1;constructor(e={}){this.instrumentation=Qr(e),this.options=vs(e);const t=e.initialExpandedPaths??null;if(t==null||t.length===0)this.initialExpandedPathSet=null;else{const n=new Set,r=t.length;for(let o=0;o<r;o+=1){const i=t[o],s=i.length;n.add(s>0&&i.charCodeAt(s-1)===47?i.slice(0,s-1):i)}this.initialExpandedPathSet=n,this.createdDirectoriesAllExpanded=!0}this.directories.set(0,sn())}appendPaths(e){return D(this.instrumentation,"store.builder.appendPaths.parse",()=>this.appendPreparedPaths(e.map(t=>an(t))))}appendPreparedPaths(e,t=!0){return this.createdDirectoriesAllExpanded=!1,D(this.instrumentation,"store.builder.appendPreparedPaths",()=>{for(const n of e)this.appendPreparedPath(n,t)}),this}appendPresortedPaths(e,t=null){return D(this.instrumentation,"store.builder.appendPresortedPaths",()=>{if(t===!1){this.appendPresortedFilePaths(e);return}this.createdDirectoriesAllExpanded=!1;let n=null,r=0;const o=this.nodes,i=this.segmentTable,s=i.idByValue,l=i.valueById,a=this.directoryStack;let h=0,d="",f=0;for(const c of e){if(n===c)throw new Error(`Duplicate path: "${c}"`);const g=c.length>0&&c.charCodeAt(c.length-1)===47,p=g?c.length-1:c.length;let v=0,I=0;if(n!=null)if(d.length>0&&c.length>d.length&&c.startsWith(d))v=f,I=d.length;else{const y=Math.min(p,n.length);let b=!0;for(let w=0;w<y;w++){const C=c.charCodeAt(w);if(C!==n.charCodeAt(w)){b=!1;break}C===47&&(v++,I=w+1)}b&&g&&y===p&&n.length>p&&n.charCodeAt(p)===47&&(v++,I=p+1)}h=v,r=v;let P=I,S=c.indexOf("/",P);for(;S>=0&&S<p;){const y=a[h];if(y===void 0)throw new Error("Directory stack underflow while building the path store");r++;const b=c.slice(P,S);let w=s.get(b);w===void 0&&(w=l.length,s.set(b,w),l.push(b));const C=o.length;o.push({depthAndFlags:Be(r,0,Xe),nameId:w,parentId:y,subtreeNodeCount:1,visibleSubtreeCount:1}),this.recordCreatedDirectoryPath(c.slice(0,S)),h++,a[h]=C,P=S+1,S=c.indexOf("/",P)}if(g){if(P<p){const b=a[h];if(b===void 0)throw new Error(`Unable to resolve directory parent for "${c}"`);r++;const w=c.slice(P,p);let C=s.get(w);C===void 0&&(C=l.length,s.set(w,C),l.push(w));const F=o.length;o.push({depthAndFlags:Be(r,0,Xe),nameId:C,parentId:b,subtreeNodeCount:1,visibleSubtreeCount:1}),h++,a[h]=F}const y=a[h];if(y===void 0)throw new Error(`Unable to resolve directory node for "${c}"`);this.promoteDirectoryToExplicit(y,c)}else{const y=a[h];if(y===void 0)throw new Error(`Unable to resolve file parent for "${c}"`);const b=c.slice(P);let w=s.get(b);w===void 0&&(w=l.length,s.set(b,w),l.push(b)),o.push({depthAndFlags:Be(r+1,0),nameId:w,parentId:y,subtreeNodeCount:1,visibleSubtreeCount:1})}P!==d.length&&(d=c.substring(0,P),f=r),n=c}a.length=h+1,n!=null&&(this.lastPreparedPath=an(n)),this.hasDeferredDirectoryIndexes=!0}),this}appendPresortedFilePaths(e){let t=null,n=0;const r=this.nodes,o=this.segmentTable,i=o.idByValue,s=o.valueById,l=this.directoryStack;let a=0,h="",d=0;for(const f of e){if(t===f)throw new Error(`Duplicate path: "${f}"`);const c=f.length;let g=0,p=0;if(t!=null)if(h.length>0&&f.length>h.length&&f.startsWith(h))g=d,p=h.length;else{const b=Math.min(c,t.length);for(let w=0;w<b;w++){const C=f.charCodeAt(w);if(C!==t.charCodeAt(w))break;C===47&&(g++,p=w+1)}}a=g,n=g;let v=p,I=f.indexOf("/",v);for(;I>=0;){const b=l[a];if(b===void 0)throw new Error("Directory stack underflow while building the path store");n++;const w=f.slice(v,I);let C=i.get(w);C===void 0&&(C=s.length,i.set(w,C),s.push(w));const F=r.length;r.push({depthAndFlags:Be(n,0,Xe),nameId:C,parentId:b,subtreeNodeCount:1,visibleSubtreeCount:1}),this.recordCreatedDirectoryPath(f.slice(0,I)),this.presortedDirectoryNodeIds.push(F),a++,l[a]=F,v=I+1,I=f.indexOf("/",v)}const P=l[a];if(P===void 0)throw new Error(`Unable to resolve file parent for "${f}"`);const S=f.slice(v);let y=i.get(S);y===void 0&&(y=s.length,i.set(S,y),s.push(S)),r.push({depthAndFlags:Be(n+1,0),nameId:y,parentId:P,subtreeNodeCount:1,visibleSubtreeCount:1}),v!==h.length&&(h=f.substring(0,v),d=n),t=f}l.length=a+1,t!=null&&(this.lastPreparedPath=an(t)),this.hasDeferredDirectoryIndexes=!0}finish(e={}){const t=e.skipSubtreeCountPass===!0;return this.hasDeferredDirectoryIndexes?(D(this.instrumentation,"store.builder.buildDirectoryIndexes",()=>this.buildPresortedFinish(t)),this.hasDeferredDirectoryIndexes=!1):t||D(this.instrumentation,"store.builder.computeSubtreeCounts",()=>this.computeSubtreeCounts(0)),{directories:this.directories,nodes:this.nodes,options:this.options,rootId:0,segmentTable:this.segmentTable,presortedDirectoryNodeIds:this.presortedDirectoryNodeIds.length>0?this.presortedDirectoryNodeIds:null}}didMatchAllInitialExpandedPaths(){return this.createdDirectoriesAllExpanded&&this.initialExpandedPathSet!=null&&this.createdDirectoryCount===this.initialExpandedPathSet.size}appendPreparedPath(e,t){if(this.hasDeferredDirectoryIndexes&&(this.buildDirectoryIndexes(),this.hasDeferredDirectoryIndexes=!1),this.lastPreparedPath!=null){if(e.path===this.lastPreparedPath.path)throw new Error(`Duplicate path: "${e.path}"`);if(t&&(this.options.sort==="default"?hu(this.lastPreparedPath,e,this.segmentSortKeyCache):ws(this.lastPreparedPath,e,this.options.sort))>0)throw new Error(`Builder input must be sorted before appendPaths(): "${e.path}"`)}const n=this.lastPreparedPath,r=Qo(e),o=n==null?0:Qo(n),i=n==null?0:pu(n.segments,e.segments),s=Math.min(i,r,o);this.directoryStack.length=s+1;for(let a=s;a<r;a++){const h=this.directoryStack[this.directoryStack.length-1];if(h===void 0)throw new Error("Directory stack underflow while building the path store");const d=t?this.getOrCreateDirectoryChild(h,e.segments[a]):this.createDirectoryChild(h,e.segments[a]);this.directoryStack.push(d)}if(e.isDirectory){const a=this.directoryStack[this.directoryStack.length-1];if(a===void 0)throw new Error(`Unable to resolve directory node for "${e.path}"`);this.promoteDirectoryToExplicit(a,e.path),this.lastPreparedPath=e;return}const l=this.directoryStack[this.directoryStack.length-1];if(l===void 0)throw new Error(`Unable to resolve file parent for "${e.path}"`);t?this.createFileChild(l,e.basename,e.path):this.createFileChildUnchecked(l,e.basename),this.lastPreparedPath=e}recordCreatedDirectoryPath(e){!this.createdDirectoriesAllExpanded||this.initialExpandedPathSet==null||(this.createdDirectoryCount+=1,this.initialExpandedPathSet.has(e)||(this.createdDirectoriesAllExpanded=!1))}createFileChild(e,t,n){const r=ut(this.segmentTable,t),o=this.getDirectoryIndex(e),i=o.childIdByNameId;if(i!=null&&i.get(r)!==void 0)throw new Error(`Path collides with an existing entry: "${n}"`);const s=this.nodes[e];if(s===void 0)throw new Error(`Unknown parent node ID: ${String(e)}`);const l=this.nodes.length;return this.nodes.push({depthAndFlags:Be(tt(s)+1,0),nameId:r,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1}),i?.set(r,l),tn(o,l),l}createFileChildUnchecked(e,t){const n=ut(this.segmentTable,t),r=this.getDirectoryIndex(e),o=this.nodes[e];if(o===void 0)throw new Error(`Unknown parent node ID: ${String(e)}`);const i=this.nodes.length;return this.nodes.push({depthAndFlags:Be(tt(o)+1,0),nameId:n,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1}),r.childIdByNameId!=null&&r.childIdByNameId.set(n,i),tn(r,i),i}getOrCreateDirectoryChild(e,t){const n=ut(this.segmentTable,t),r=this.getDirectoryIndex(e);if(r.childIdByNameId!=null){const s=r.childIdByNameId.get(n);if(s!==void 0){const l=this.nodes[s];if(l!=null&&!A(l))throw new Error(`Path collides with an existing file while creating directory "${t}"`);return s}}const o=this.nodes[e];if(o===void 0)throw new Error(`Unknown parent node ID: ${String(e)}`);const i=this.nodes.length;return this.nodes.push({depthAndFlags:Be(tt(o)+1,0,Xe),nameId:n,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1}),r.childIdByNameId!=null&&r.childIdByNameId.set(n,i),tn(r,i),this.directories.set(i,sn()),i}createDirectoryChild(e,t){const n=ut(this.segmentTable,t),r=this.getDirectoryIndex(e),o=this.nodes[e];if(o===void 0)throw new Error(`Unknown parent node ID: ${String(e)}`);const i=this.nodes.length;return this.nodes.push({depthAndFlags:Be(tt(o)+1,0,Xe),nameId:n,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1}),r.childIdByNameId!=null&&r.childIdByNameId.set(n,i),tn(r,i),this.directories.set(i,sn()),i}promoteDirectoryToExplicit(e,t){const n=this.nodes[e];if(n===void 0)throw new Error(`Unknown directory node ID: ${String(e)}`);if(!A(n))throw new Error(`Path is not a directory: "${t}"`);if(ge(n,ft))throw new Error(`Duplicate path: "${t}"`);rr(n,ft)}getDirectoryIndex(e){const t=this.directories.get(e);if(t!==void 0)return t;throw new Error(`Unknown directory child index for node ${String(e)}`)}buildPresortedFinish(e){const t=this.nodes,n=this.directories;n.set(0,Go());let r=-1,o=null;for(let i=1;i<t.length;i++){const s=t[i];if(s==null)continue;if(A(s)){const a=Go();n.set(i,a),r=i,o=a}let l;s.parentId===r?l=o:(l=n.get(s.parentId),r=s.parentId,o=l??null),l?.childIds.push(i)}if(!e)for(let i=t.length-1;i>=1;i--){const s=t[i];if(s==null)continue;const l=t[s.parentId];l!=null&&(l.subtreeNodeCount+=s.subtreeNodeCount,l.visibleSubtreeCount+=s.visibleSubtreeCount)}}buildDirectoryIndexes(){const e=this.nodes;for(let t=1;t<e.length;t++){const n=e[t];if(n==null)continue;A(n)&&this.directories.set(t,sn());const r=this.directories.get(n.parentId);r!=null&&(r.childIdByNameId!=null&&r.childIdByNameId.set(n.nameId,t),tn(r,t))}}computeSubtreeCounts(e){const t=this.nodes[e];if(t===void 0)throw new Error(`Unknown node ID: ${String(e)}`);if(!A(t))return t.subtreeNodeCount=1,t.visibleSubtreeCount=1,1;const n=this.getDirectoryIndex(e);let r=1;for(const o of n.childIds)r+=this.computeSubtreeCounts(o);return Xn(this.nodes,n),t.subtreeNodeCount=r,t.visibleSubtreeCount=r,r}};function Su(e,t="closed",n=null){const r=Cu(t);return{activeNodeCount:e.nodes.length-1,collapsedDirectoryIds:new Set,collapseNewDirectoriesByDefault:!1,defaultExpansion:r,directoriesOpenByDefault:r==="open",hasCollapsedDirectoryOverrides:!1,directoryLoadInfoById:new Map,expandedDirectoryIds:new Set,instrumentation:n,listeners:new Map,pathCacheByNodeId:new Map([[e.rootId,{path:"",version:0}]]),pathCacheVersion:0,snapshot:e,transactionStack:[]}}function _u(){return{affectedAncestorIds:new Set,affectedNodeIds:new Set,events:[]}}function Cu(e){if(typeof e!="number")return e;if(!Number.isInteger(e)||e<0)throw new Error(`initialExpansion must be "open", "closed", or a non-negative integer depth. Received: ${String(e)}`);return e}function Ss(e,t){return ge(t,Me)||e.defaultExpansion==="open"?!0:e.defaultExpansion==="closed"?!1:tt(t)<=e.defaultExpansion}function Ce(e,t,n=e.snapshot.nodes[t]){return n==null||!A(n)?!1:e.directoriesOpenByDefault&&!e.hasCollapsedDirectoryOverrides?!0:e.collapsedDirectoryIds.has(t)?!1:e.expandedDirectoryIds.has(t)?!0:Ss(e,n)}function fn(e,t,n,r=e.snapshot.nodes[t]){if(r==null||!A(r))return;const o=Ss(e,r);if(n){if(o){e.collapsedDirectoryIds.delete(t),e.hasCollapsedDirectoryOverrides=e.collapsedDirectoryIds.size>0;return}e.expandedDirectoryIds.add(t);return}if(o){e.collapsedDirectoryIds.add(t),e.hasCollapsedDirectoryOverrides=!0;return}e.expandedDirectoryIds.delete(t)}function _s(e,t){const n=e.directoryLoadInfoById.get(t);if(n!=null)return n;const r={activeAttemptId:null,errorMessage:null,nextAttemptId:1,state:"loaded"};return e.directoryLoadInfoById.set(t,r),r}function pn(e,t){return e.directoryLoadInfoById.get(t)?.state??"loaded"}function ku(e,t){const n=_s(e,t);if(n.state==="loading"&&n.activeAttemptId!=null)return{attemptId:n.activeAttemptId,nodeId:t,reused:!0};const r=n.nextAttemptId;return n.activeAttemptId=r,n.errorMessage=null,n.nextAttemptId+=1,n.state="loading",{attemptId:r,nodeId:t,reused:!1}}function Pu(e,t){const n=_s(e,t);n.activeAttemptId=null,n.errorMessage=null,n.state="unloaded"}function Eu(e,t,n){const r=e.directoryLoadInfoById.get(t);return r==null||r.activeAttemptId!==n?!1:(r.activeAttemptId=null,r.errorMessage=null,r.state="loaded",!0)}function Du(e,t,n){return e.directoryLoadInfoById.get(t)?.activeAttemptId===n}function Tu(e,t,n,r){const o=e.directoryLoadInfoById.get(t);return o==null||o.activeAttemptId!==n?!1:(o.activeAttemptId=null,o.errorMessage=r??null,o.state="error",!0)}function Mu(e,t){e.directoryLoadInfoById.delete(t)}function Au(e,t,n){const r=n,o=e.listeners.get(t);return o!=null?o.add(r):e.listeners.set(t,new Set([r])),()=>{const i=e.listeners.get(t);i!=null&&(i.delete(r),i.size===0&&e.listeners.delete(t))}}function Nu(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!0,operation:"add",path:e.path,projectionChanged:e.projectionChanged,visibleCountDelta:null}}function Ru(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!0,operation:"remove",path:e.path,projectionChanged:e.projectionChanged,recursive:e.recursive,visibleCountDelta:null}}function Vu(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!0,from:e.from,operation:"move",projectionChanged:e.projectionChanged,to:e.to,visibleCountDelta:null}}function Lu(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!1,operation:"expand",path:e.path,projectionChanged:!0,visibleCountDelta:null}}function Fu(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!1,operation:"collapse",path:e.path,projectionChanged:!0,visibleCountDelta:null}}function Bu(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!1,operation:"mark-directory-unloaded",path:e.path,projectionChanged:e.projectionChanged,visibleCountDelta:null}}function zu(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],attemptId:e.attemptId,canonicalChanged:!1,operation:"begin-child-load",path:e.path,projectionChanged:e.projectionChanged,reused:e.reused,visibleCountDelta:null}}function Hu(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],attemptId:e.attemptId,canonicalChanged:e.childEvents.some(t=>t.canonicalChanged),childEvents:e.childEvents,operation:"apply-child-patch",path:e.path,projectionChanged:e.projectionChanged,visibleCountDelta:null}}function Ou(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],attemptId:e.attemptId,canonicalChanged:!1,operation:"complete-child-load",path:e.path,projectionChanged:e.projectionChanged,stale:e.stale,visibleCountDelta:null}}function $u(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],attemptId:e.attemptId,canonicalChanged:!1,errorMessage:e.errorMessage,operation:"fail-child-load",path:e.path,projectionChanged:e.projectionChanged,stale:e.stale,visibleCountDelta:null}}function qu(e){return{activeNodeCountAfter:e.activeNodeCountAfter,activeNodeCountBefore:e.activeNodeCountBefore,affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],cachedPathEntryCountAfter:e.cachedPathEntryCountAfter,cachedPathEntryCountBefore:e.cachedPathEntryCountBefore,canonicalChanged:!1,idsPreserved:e.idsPreserved,loadInfoEntryCountAfter:e.loadInfoEntryCountAfter,loadInfoEntryCountBefore:e.loadInfoEntryCountBefore,mode:e.mode,operation:"cleanup",projectionChanged:e.projectionChanged,reclaimedCachedPathEntryCount:e.reclaimedCachedPathEntryCount,reclaimedLoadInfoEntryCount:e.reclaimedLoadInfoEntryCount,reclaimedNodeSlotCount:e.reclaimedNodeSlotCount,reclaimedSegmentCount:e.reclaimedSegmentCount,segmentCountAfter:e.segmentCountAfter,segmentCountBefore:e.segmentCountBefore,totalNodeSlotCountAfter:e.totalNodeSlotCountAfter,totalNodeSlotCountBefore:e.totalNodeSlotCountBefore,visibleCountDelta:null}}function Te(e,t,n){return{...n,visibleCountDelta:Vr(e)-t}}function ju(e,t){const n=Vr(e),r=_u();e.transactionStack.push(r);try{t()}catch(o){throw Zo(e,r,!1),o}Zo(e,r,!0,Vr(e)-n)}function Ge(e,t){const n=e.instrumentation;if(n==null){Jo(e,t);return}D(n,"store.events.record",()=>Jo(e,t))}function Jo(e,t){const n=e.transactionStack[e.transactionStack.length-1]??null;if(n==null){Rr(e,t);return}n.events.push(t),Wu(n,t)}function Zo(e,t,n,r=null){if(e.transactionStack.pop()!==t)throw new Error("Transaction stack underflow");if(!n)return;const o=e.transactionStack[e.transactionStack.length-1]??null;if(o!=null){const l=e.instrumentation;l==null?ei(o,t):D(l,"store.events.batch.merge",()=>ei(o,t));return}const i=Uu(t,r),s=e.instrumentation;if(s==null){Rr(e,i);return}D(s,"store.events.batch.commit",()=>Rr(e,i))}function Uu(e,t){return{affectedAncestorIds:[...e.affectedAncestorIds],affectedNodeIds:[...e.affectedNodeIds],canonicalChanged:e.events.some(n=>n.canonicalChanged),events:[...e.events],operation:"batch",projectionChanged:e.events.some(n=>n.projectionChanged),visibleCountDelta:t}}function Ku(e,t){for(const n of t.affectedAncestorIds)e.affectedAncestorIds.add(n);for(const n of t.affectedNodeIds)e.affectedNodeIds.add(n)}function ei(e,t){for(const n of t.events)e.events.push(n);Ku(e,t)}function Wu(e,t){for(const n of t.affectedNodeIds)e.affectedNodeIds.add(n);for(const n of t.affectedAncestorIds)e.affectedAncestorIds.add(n)}function Rr(e,t){const n=e.instrumentation;if(n==null){ti(e,t);return}D(n,"store.events.emit",()=>ti(e,t))}function ti(e,t){e.listeners.get(t.operation)?.forEach(n=>n(t)),e.listeners.get("*")?.forEach(n=>n(t))}function Vr(e){return e.snapshot.nodes[e.snapshot.rootId]?.visibleSubtreeCount??0}function Lt(e,t){if(e.snapshot.options.flattenEmptyDirectories!==!0)return null;const n=e.snapshot.nodes[t];if(n==null||!A(n)||ge(n,Me))return null;const r=e.snapshot.directories.get(t);if(r==null||r.childIds.length!==1)return null;const o=r.childIds[0];if(o==null)return null;const i=e.snapshot.nodes[o];return i==null||!A(i)?null:o}function It(e,t){let n=t;for(;;){const r=Lt(e,n);if(r==null)return n;n=r}}function Qn(e,t){const n=[t];let r=t;for(;;){const o=Lt(e,r);if(o==null)return n;n.push(o),r=o}}function Cs(e,t){const n=t==null?e.snapshot.rootId:qe(e,t);return n==null?[]:Xu(e,n)}function ni(e,t){const n=an(t),r=n.isDirectory?n.segments:n.segments.slice(0,-1),o=dt(e,od(e,r)),{createdNodeIds:i,directoryId:s}=Yu(e,r),l=new Set(i);let a=s;if(n.isDirectory){const d=T(e,s);if(ge(d,ft))throw new Error(`Path already exists: "${t}"`);rr(d,ft),e.pathCacheByNodeId.set(s,{path:t,version:e.pathCacheVersion}),l.add(s)}else a=Ju(e,s,n.basename),l.add(a);wt(e,s);const h=dt(e,s);return Nu({affectedAncestorIds:Ye(e,a),affectedNodeIds:[...l],path:t,projectionChanged:Es(o,h)})}function ri(e,t,n){const r=qe(e,t);if(r==null)throw new Error(`Path does not exist: "${t}"`);const o=T(e,r);if(ge(o,Me))throw new Error("The root node cannot be removed");if(A(o)&&re(e,r).childIds.length>0&&n.recursive!==!0)throw new Error(`Cannot remove a non-empty directory without recursive: "${t}"`);const i=o.parentId,s=dt(e,i),l=Ps(e,r);ro(e,i,r,o.nameId),oo(e,i),wt(e,i);const a=dt(e,i);return Ru({affectedAncestorIds:Ye(e,i),affectedNodeIds:l,path:t,projectionChanged:Es(s,a),recursive:n.recursive===!0})}function oi(e,t,n,r){const o=qe(e,t);if(o==null)throw new Error(`Source path does not exist: "${t}"`);const i=T(e,o);if(ge(i,Me))throw new Error("The root node cannot be moved");const s=r.collision??"error",l=nd(e,o,n),a=dt(e,i.parentId),h=dt(e,l.parentId),d=nt(e.snapshot.segmentTable,i.nameId),f=ut(e.snapshot.segmentTable,l.basename);if(l.parentId===i.parentId&&d===l.basename)return null;if(A(i)&&sd(e,o,l.parentId))throw new Error("Cannot move a directory into one of its descendants");const c=xt(e.snapshot.nodes,re(e,l.parentId)).get(f),g=l.existingNodeId??c??null;if(g!=null&&g!==o&&rd(e,g,s,nr(i))==="skip")return null;const p=i.parentId;ro(e,p,o,i.nameId),i.parentId=l.parentId,i.nameId=f,e.pathCacheByNodeId.delete(o),Ts(e,o),no(e,l.parentId,o),oo(e,p),e.pathCacheVersion++,wt(e,p),l.parentId!==p&&wt(e,l.parentId);const v=dt(e,p),I=dt(e,l.parentId);return Vu({affectedAncestorIds:[...new Set([...Ye(e,p),...Ye(e,l.parentId)])],affectedNodeIds:[o],from:t,projectionChanged:Ds([a,h],[v,I]),to:ne(e,o)})}function Gu(e,t){const n=e.pathCacheByNodeId.get(t);return n!=null&&n.version===e.pathCacheVersion?n.path:null}function ii(e,t,n){return e.pathCacheByNodeId.set(t,{path:n,version:e.pathCacheVersion}),n}function ne(e,t){const n=T(e,t),r=Gu(e,t);if(r!=null)return r;if(ge(n,Me))return ii(e,t,"");const o=ne(e,n.parentId),i=nt(e.snapshot.segmentTable,n.nameId),s=o.length===0?i:`${o}${i}`;return ii(e,t,A(n)?`${s}/`:s)}function wt(e,t){const n=e.instrumentation;if(n==null){li(e,t);return}D(n,"store.recomputeCountsUpwardFrom",()=>li(e,t))}function to(e,t){const n=[[t,0]],{nodes:r,directories:o}=e.snapshot;for(;n.length>0;){const i=n[n.length-1],s=i[0],l=r[s];if(l==null||!A(l)){Lr(e,s,l,!0),n.pop();continue}const a=o.get(s);if(a==null||i[1]>=a.childIds.length){Lr(e,s,l,!0),n.pop();continue}const h=a.childIds[i[1]++];n.push([h,0])}}function Ye(e,t){const n=[];let r=t;for(;r!=null;){const o=T(e,r);if(n.push(r),r===e.snapshot.rootId)break;r=o.parentId}return n}function qe(e,t){if(t.length===0)return e.snapshot.rootId;const n=Nr(t);return ks(e,n.segments,n.requiresDirectory)}function ks(e,t,n){let r=e.snapshot.rootId;for(const i of t){const s=e.snapshot.segmentTable.idByValue.get(i);if(s===void 0)return null;const l=re(e,r),a=xt(e.snapshot.nodes,l).get(s);if(a===void 0)return null;r=a}const o=T(e,r);return n&&!A(o)?null:r}function re(e,t){const n=e.snapshot.directories.get(t);if(n===void 0)throw new Error(`Unknown directory child index for node ${String(t)}`);return n}function T(e,t){const n=e.snapshot.nodes[t];if(n===void 0||ge(n,hn))throw new Error(`Unknown node ID: ${String(t)}`);return n}function Xu(e,t){const n=e.snapshot.nodes[t];if(n===void 0||ge(n,hn))return[];if(!A(n))return[ne(e,t)];if(re(e,t).childIds.length===0)return ge(n,ft)&&!ge(n,Me)?[ne(e,t)]:[];const r=[],o=[{childIndex:0,nodeId:t}];for(;o.length>0;){const i=o[o.length-1];if(i==null)break;const s=e.snapshot.nodes[i.nodeId];if(s===void 0||ge(s,hn)){o.pop();continue}if(!A(s)){r.push(ne(e,i.nodeId)),o.pop();continue}const l=re(e,i.nodeId);if(l.childIds.length===0){ge(s,ft)&&!ge(s,Me)&&r.push(ne(e,i.nodeId)),o.pop();continue}const a=l.childIds[i.childIndex];if(a==null){o.pop();continue}i.childIndex++,o.push({childIndex:0,nodeId:a})}return r}function Yu(e,t){const n=[];let r=e.snapshot.rootId;for(const o of t){const i=ut(e.snapshot.segmentTable,o),s=re(e,r),l=xt(e.snapshot.nodes,s).get(i);if(l!==void 0){if(!A(T(e,l)))throw new Error(`Cannot create a directory that collides with an existing file: "${o}"`);r=l;continue}r=Qu(e,r,i),n.push(r)}return{createdNodeIds:n,directoryId:r}}function Qu(e,t,n){const r=T(e,t),o=e.snapshot.nodes.length;return e.snapshot.nodes.push({depthAndFlags:Be(tt(r)+1,0,Xe),nameId:n,parentId:t,subtreeNodeCount:1,visibleSubtreeCount:1}),e.snapshot.directories.set(o,sn()),no(e,t,o),e.collapseNewDirectoriesByDefault&&(e.collapsedDirectoryIds.add(o),e.hasCollapsedDirectoryOverrides=!0),e.activeNodeCount++,o}function Ju(e,t,n){const r=ut(e.snapshot.segmentTable,n),o=re(e,t);if(xt(e.snapshot.nodes,o).has(r))throw new Error(`Path already exists: "${ld(e,t,n)}"`);const i=T(e,t),s=e.snapshot.nodes.length;return e.snapshot.nodes.push({depthAndFlags:Be(tt(i)+1,0),nameId:r,parentId:t,subtreeNodeCount:1,visibleSubtreeCount:1}),no(e,t,s),e.activeNodeCount++,s}function Zu(e,t,n){let r=0,o=t.childIds.length;for(;r<o;){const i=r+o>>>1,s=t.childIds[i];if(s==null){o=i;continue}ed(e,n,s)<0?o=i:r=i+1}return r}function no(e,t,n){const r=re(e,t),o=T(e,n);xt(e.snapshot.nodes,r).set(o.nameId,n),Xr(r,n,o.subtreeNodeCount,o.visibleSubtreeCount);const i=Zu(e,r,n);r.childIds.splice(i,0,n),us(r,i),dn(e.snapshot.nodes,r)}function ro(e,t,n,r){const o=re(e,t),i=tr(o),s=i.get(n)??-1;xt(e.snapshot.nodes,o).delete(r),i.delete(n);const l=e.snapshot.nodes[n];l!=null&&Xr(o,n,-l.subtreeNodeCount,-l.visibleSubtreeCount),s>=0&&(o.childIds.splice(s,1),us(o,s),dn(e.snapshot.nodes,o))}function ed(e,t,n){const r=e.snapshot.options.sort;return r==="default"?td(e,t,n):r(si(e,t),si(e,n))}function td(e,t,n){const r=T(e,t),o=T(e,n),i=A(r);if(i!==A(o))return i?-1:1;const s=Jr(Ar(e.snapshot.segmentTable,r.nameId),Ar(e.snapshot.segmentTable,o.nameId));if(s!==0)return s;const l=nt(e.snapshot.segmentTable,r.nameId),a=nt(e.snapshot.segmentTable,o.nameId);return l!==a?l<a?-1:1:t<n?-1:1}function si(e,t){const n=T(e,t),r=ne(e,t),o=A(n),i=o?r.slice(0,-1):r;return{basename:nt(e.snapshot.segmentTable,n.nameId),depth:tt(n),isDirectory:o,path:r,segments:i.length===0?[]:i.split("/")}}function nd(e,t,n){const r=T(e,t),o=qe(e,n);if(o!=null){const h=T(e,o);if(A(h))return{basename:nt(e.snapshot.segmentTable,r.nameId),existingNodeId:null,parentId:o};const d=Nr(n).segments;return{basename:d[d.length-1]??"",existingNodeId:o,parentId:h.parentId}}const i=Nr(n),s=i.segments[i.segments.length-1]??"",l=i.segments.slice(0,-1),a=l.length===0?e.snapshot.rootId:ks(e,l,!0);if(a==null)throw new Error(`Destination parent does not exist: "${n}"`);return{basename:s,existingNodeId:null,parentId:a}}function rd(e,t,n,r){if(n==="skip")return"skip";if(n==="error")throw new Error(`Destination already exists: "${ne(e,t)}"`);const o=T(e,t);if(nr(o)!==r)throw new Error("replace collision requires the same source and destination kinds");if(A(o)&&re(e,t).childIds.length>0)throw new Error("replace collision does not support non-empty directories");const i=o.parentId,s=o.nameId;return Ps(e,t),ro(e,i,t,s),oo(e,i),wt(e,i),"handled"}function Ps(e,t){const n=[],r=[{nodeId:t,visitedChildren:!1}];for(;r.length>0;){const o=r.pop();if(o==null)break;const i=T(e,o.nodeId);if(o.visitedChildren||!A(i)){A(i)&&e.snapshot.directories.delete(o.nodeId),rr(i,hn),e.pathCacheByNodeId.delete(o.nodeId),e.collapsedDirectoryIds.delete(o.nodeId)&&(e.hasCollapsedDirectoryOverrides=e.collapsedDirectoryIds.size>0),e.expandedDirectoryIds.delete(o.nodeId),Mu(e,o.nodeId),e.activeNodeCount--,n.push(o.nodeId);continue}r.push({nodeId:o.nodeId,visitedChildren:!0});const s=re(e,o.nodeId);for(let l=s.childIds.length-1;l>=0;l--){const a=s.childIds[l];a!=null&&r.push({nodeId:a,visitedChildren:!1})}}return n}function oo(e,t){let n=t;for(;n!=null;){const r=T(e,n);if(!A(r)||ge(r,Me)||re(e,n).childIds.length>0)return;rr(r,ft),n=r.parentId===n?null:r.parentId}}function od(e,t){let n=e.snapshot.rootId;for(const r of t){const o=e.snapshot.segmentTable.idByValue.get(r);if(o==null)break;const i=xt(e.snapshot.nodes,re(e,n)).get(o);if(i==null||!A(T(e,i)))break;n=i}return n}function dt(e,t){const n=id(e,t);if(n==null)return null;const r=It(e,n),o=T(e,r),i=n===r?null:Qn(e,n).map(s=>ne(e,s));return JSON.stringify({flattenedSegmentPaths:i,hasChildren:re(e,r).childIds.length>0,path:ne(e,r),terminalKind:nr(o)})}function Es(e,t){return Ds([e],[t])}function Ds(e,t){for(let n=0;n<e.length;n+=1){const r=e[n],o=t[n];if(r==null||o==null||r!==o)return!0}return!1}function id(e,t){let n=t;for(;n!=null;){const r=T(e,n);if(!A(r)||ge(r,Me))return null;if(!Ce(e,n,r))return n;n=r.parentId}return null}function Ts(e,t){const n=T(e,t);if(iu(n,(t===e.snapshot.rootId?-1:tt(T(e,n.parentId)))+1),!A(n))return;const r=re(e,t);for(const o of r.childIds)Ts(e,o)}function sd(e,t,n){let r=n;for(;r!=null;){if(r===t)return!0;const o=T(e,r);if(r===e.snapshot.rootId)return!1;r=o.parentId}return!1}function Lr(e,t,n=T(e,t),r=!1){const o=e.instrumentation;if(o==null){ai(e,t,n,r);return}D(o,"store.recomputeNodeCounts",()=>ai(e,t,n,r))}function li(e,t){let n=t;for(;n!=null;){const r=T(e,n),o=r.subtreeNodeCount,i=r.visibleSubtreeCount;if(Lr(e,n,r),n===e.snapshot.rootId)return;const s=r.subtreeNodeCount-o,l=r.visibleSubtreeCount-i,a=r.parentId;(s!==0||l!==0)&&Xr(re(e,a),n,s,l),n=a}}function ai(e,t,n,r){if(!A(n)){n.subtreeNodeCount=1,n.visibleSubtreeCount=1;return}const o=re(e,t);if(r){const l=e.instrumentation;l==null?Xn(e.snapshot.nodes,o):D(l,"store.recomputeNodeCounts.rebuildChildAggregates",()=>Xn(e.snapshot.nodes,o))}const i=1+o.totalChildSubtreeNodeCount,s=o.totalChildVisibleSubtreeCount;if(n.subtreeNodeCount=i,ge(n,Me)){n.visibleSubtreeCount=s;return}n.visibleSubtreeCount=Lt(e,t)!=null?s:Ce(e,t,n)?1+s:1}function ld(e,t,n){const r=ne(e,t);return r.length===0?n:`${r}${n}`}function At(e){return e!=null&&!ge(e,hn)}function Jn(e,t){const n=e.snapshot.nodes[t];return!At(n)||!A(n)||ge(n,Me)?null:n}function ad(e){let t=0;for(const[n,r]of e.pathCacheByNodeId)r.version===e.pathCacheVersion&&At(e.snapshot.nodes[n])&&(t+=1);return t}function cd(e){return Math.max(0,e.valueById.length-1)}function ci(e){return{activeNodeCount:e.activeNodeCount,cachedPathEntryCount:ad(e),loadInfoEntryCount:e.directoryLoadInfoById.size,segmentCount:cd(e.snapshot.segmentTable),totalNodeSlotCount:Math.max(0,e.snapshot.nodes.length-1)}}function ud(e,t,n,r){return{activeNodeCountAfter:r.activeNodeCount,activeNodeCountBefore:n.activeNodeCount,cachedPathEntryCountAfter:r.cachedPathEntryCount,cachedPathEntryCountBefore:n.cachedPathEntryCount,idsPreserved:t,loadInfoEntryCountAfter:r.loadInfoEntryCount,loadInfoEntryCountBefore:n.loadInfoEntryCount,mode:e,reclaimedCachedPathEntryCount:n.cachedPathEntryCount-r.cachedPathEntryCount,reclaimedLoadInfoEntryCount:n.loadInfoEntryCount-r.loadInfoEntryCount,reclaimedNodeSlotCount:n.totalNodeSlotCount-r.totalNodeSlotCount,reclaimedSegmentCount:n.segmentCount-r.segmentCount,segmentCountAfter:r.segmentCount,segmentCountBefore:n.segmentCount,totalNodeSlotCountAfter:r.totalNodeSlotCount,totalNodeSlotCountBefore:n.totalNodeSlotCount}}function Ms(e){const t=[],n=[];for(const r of e.collapsedDirectoryIds)Jn(e,r)!=null&&t.push(ne(e,r));for(const r of e.expandedDirectoryIds)Jn(e,r)!=null&&n.push(ne(e,r));return{collapsedPaths:t,expandedPaths:n}}function As(e){const t=[];for(const[n,r]of e.directoryLoadInfoById)Jn(e,n)==null||pn(e,n)==="loaded"||t.push({info:{activeAttemptId:null,errorMessage:r.errorMessage,nextAttemptId:r.nextAttemptId,state:r.state},path:ne(e,n)});return t}function Ns(e,t){e.collapsedDirectoryIds.clear(),e.hasCollapsedDirectoryOverrides=!1,e.expandedDirectoryIds.clear();for(const n of t.expandedPaths){const r=qe(e,n);r!=null&&fn(e,r,!0,T(e,r))}for(const n of t.collapsedPaths){const r=qe(e,n);r!=null&&fn(e,r,!1,T(e,r))}}function Rs(e,t){e.directoryLoadInfoById.clear();for(const n of t){const r=qe(e,n.path);r!=null&&Jn(e,r)!=null&&e.directoryLoadInfoById.set(r,{activeAttemptId:null,errorMessage:n.info.errorMessage,nextAttemptId:n.info.nextAttemptId,state:n.info.state})}}function dd(e){e.pathCacheVersion+=1,e.pathCacheByNodeId.clear(),e.pathCacheByNodeId.set(e.snapshot.rootId,{path:"",version:e.pathCacheVersion})}function hd(e){const t=e.snapshot.segmentTable,n=bs();for(const r of e.snapshot.nodes)if(At(r)){if(ge(r,Me)){r.nameId=0;continue}r.nameId=ut(n,nt(t,r.nameId))}e.snapshot.segmentTable=n}function fd(e){for(const[t,n]of e.snapshot.directories){const r=e.snapshot.nodes[t];if(!At(r)||!A(r)){e.snapshot.directories.delete(t);continue}const o=n.childIds.filter(i=>{const s=e.snapshot.nodes[i];return At(s)&&s.parentId===t});n.childIds=o,n.childIdByNameId=new Map(o.map(i=>[T(e,i).nameId,i])),n.childPositionById=new Map(o.map((i,s)=>[i,s])),Xn(e.snapshot.nodes,n)}}function pd(e){let t=e.snapshot.nodes.length-1;for(;t>e.snapshot.rootId;){const n=e.snapshot.nodes[t];if(At(n))break;t-=1}e.snapshot.nodes.length=t+1}function gd(e){const t=Ms(e),n=As(e);D(e.instrumentation,"store.cleanup.stable.clearPathCaches",()=>dd(e)),D(e.instrumentation,"store.cleanup.stable.rebuildSegmentTable",()=>hd(e)),D(e.instrumentation,"store.cleanup.stable.rebuildDirectoryIndexes",()=>fd(e)),D(e.instrumentation,"store.cleanup.stable.trimTrailingRemovedNodeSlots",()=>pd(e)),D(e.instrumentation,"store.cleanup.stable.restoreExpansionOverrides",()=>Ns(e,t)),D(e.instrumentation,"store.cleanup.stable.restoreDirectoryLoadInfos",()=>Rs(e,n)),D(e.instrumentation,"store.cleanup.stable.recomputeCounts",()=>to(e,e.snapshot.rootId))}function md(e){const t=Ms(e),n=As(e),r=D(e.instrumentation,"store.cleanup.aggressive.listPaths",()=>Cs(e)),o=su({...e.snapshot.options},e.instrumentation),i=D(e.instrumentation,"store.cleanup.aggressive.rebuildSnapshot",()=>{const s=new xs(o);return s.appendPaths(r),s.finish()});e.snapshot=i,e.activeNodeCount=i.nodes.length-1,e.pathCacheByNodeId=new Map([[i.rootId,{path:"",version:0}]]),e.pathCacheVersion=0,D(e.instrumentation,"store.cleanup.aggressive.restoreExpansionOverrides",()=>Ns(e,t)),D(e.instrumentation,"store.cleanup.aggressive.restoreDirectoryLoadInfos",()=>Rs(e,n)),D(e.instrumentation,"store.cleanup.aggressive.recomputeCounts",()=>to(e,e.snapshot.rootId))}function vd(e){for(const t of e.directoryLoadInfoById.values())if(t.state==="loading"&&t.activeAttemptId!=null)return!0;return!1}function yd(e,t){const n=ci(e);t==="stable"?D(e.instrumentation,"store.cleanup.stable",()=>gd(e)):D(e.instrumentation,"store.cleanup.aggressive",()=>md(e));const r=ci(e);return ud(t,t==="stable",n,r)}const bd=64;function Id(e,t){const n=t+2;if(n<=e.length)return e;let r=e.length;for(;r<n;)r*=2;const o=new Int32Array(r);return o.fill(-1),o.set(e),o}function be(e){return T(e,e.snapshot.rootId).visibleSubtreeCount}function Vs(e,t,n,r){const o=T(e,t.terminalNodeId),i=Math.max(1,o.visibleSubtreeCount);return Math.min(r-1,n+i-1)}function wd(e,t,n,r){return{ancestorPaths:r,index:t.index,posInSet:t.posInSet,row:gn(e,t.cursor),setSize:t.setSize,subtreeEndIndex:Vs(e,t.cursor,t.index,n)}}function Ls(e,t,n,r,o,i){const s=re(e,t),{childIndex:l,childVisibleIndex:a,localVisibleIndex:h}=Mr(e.snapshot.nodes,s,n),d=s.childIds[l];if(d==null)throw new Error(`Visible index ${String(n)} is out of range`);return xd(e,d,h,r+a,o+1,l,s.childIds.length,i)}function xd(e,t,n,r,o,i,s,l){if(!A(T(e,t))){if(n===0)return{ancestors:l,cursor:{headNodeId:t,terminalNodeId:t,visibleDepth:o},index:r,posInSet:i,setSize:s};throw new Error(`Visible index ${String(n)} is out of range for file`)}const a=zs(e,t,o);if(n===0)return{ancestors:l,cursor:a,index:r,posInSet:i,setSize:s};const h=T(e,a.terminalNodeId);if(!A(h)||!Ce(e,a.terminalNodeId,h))throw new Error(`Visible index ${String(n)} is out of range for collapsed directory`);return Ls(e,a.terminalNodeId,n-1,r+1,a.visibleDepth,[...l,{cursor:a,index:r,posInSet:i,setSize:s}])}function Sd(e,t){const n=be(e);if(t<0||t>=n)return null;const r=Ls(e,e.snapshot.rootId,t,0,-1,[]),o=r.ancestors.map(s=>ne(e,s.cursor.terminalNodeId));let i=null;return{ancestorPaths:o,get ancestorRows(){if(i!=null)return i;const s=[],l=[];for(const a of r.ancestors){const h=wd(e,a,n,[...l]);s.push(h),l.push(h.row.path)}return i=s,i},index:r.index,posInSet:r.posInSet,row:gn(e,r.cursor),setSize:r.setSize,subtreeEndIndex:Vs(e,r.cursor,r.index,n)}}function _d(e,t,n){const r=e.instrumentation,o=be(e);if(o<=0||n<t)return[];const i=Math.max(0,Math.min(t,o-1)),s=Math.max(i,Math.min(n,o-1));if(r==null){if(i===0)return Md(e,s+1);const f=[];let c=ui(e,i);for(let g=i;g<=s&&c!=null;g++){const p=gn(e,c);f.push(p),c=di(e,c)}return f}const l=[];let a=0,h=0,d=D(r,"store.getVisibleSlice.selectFirstRow",()=>ui(e,i));for(let f=i;f<=s&&d!=null;f++){const c=D(r,"store.getVisibleSlice.materializeRow",()=>gn(e,d));l.push(c),c.isFlattened&&(a++,h+=c.flattenedSegments?.length??0),d=D(r,"store.getVisibleSlice.advanceCursor",()=>di(e,d))}return $n(r,"workload.visibleRowsRead",l.length),$n(r,"workload.flattenedRowsRead",a),$n(r,"workload.flattenedSegmentsRead",h),l}function Fs(e,t=be(e)){const n=e.instrumentation;return n==null?hi(e,t):D(n,"store.getVisibleTreeProjection",()=>hi(e,t))}function Cd(e){return Td(Fs(e))}function kd(e,t){const n=qe(e,t);if(n==null||n===e.snapshot.rootId||A(T(e,n))&&It(e,n)!==n)return null;let r=0,o=n;const{nodes:i,rootId:s}=e.snapshot;for(;o!==s;){const l=T(e,o).parentId,a=re(e,l),h=tr(a).get(o);if(h==null)throw new Error(`Child ${String(o)} was not found in its parent index`);if(r+=nu(i,a,h),l!==s){const d=T(e,l),f=Lt(e,l);if(!Ce(e,l,d)&&f!==o)return null;It(e,l)===l&&(r+=1)}o=l}return r}function Pd(e,t){const n=qe(e,t);if(n==null)throw new Error(`Path does not exist: "${t}"`);const r=T(e,n);if(!A(r))throw new Error(`Path is not a directory: "${t}"`);return Ce(e,n,r)?null:(fn(e,n,!0,r),wt(e,n),Lu({affectedAncestorIds:Ye(e,n),affectedNodeIds:[n],path:t}))}function Ed(e,t){const n=qe(e,t);if(n==null)throw new Error(`Path does not exist: "${t}"`);const r=T(e,n);if(!A(r))throw new Error(`Path is not a directory: "${t}"`);return Ce(e,n,r)?(fn(e,n,!1,r),wt(e,n),Fu({affectedAncestorIds:Ye(e,n),affectedNodeIds:[n],path:t})):null}function ui(e,t){return t<0||t>=be(e)?null:Bs(e,e.snapshot.rootId,t,-1)}function Bs(e,t,n,r){const o=re(e,t),i=e.instrumentation,{childIndex:s,localVisibleIndex:l}=i==null?Mr(e.snapshot.nodes,o,n):D(i,"store.getVisibleSlice.selectChildIndex",()=>Mr(e.snapshot.nodes,o,n)),a=o.childIds[s];if(a!=null)return Fr(e,a,l,r+1);throw new Error(`Visible index ${String(n)} is out of range`)}function Fr(e,t,n,r){if(!A(T(e,t))){if(n===0)return{headNodeId:t,terminalNodeId:t,visibleDepth:r};throw new Error(`Visible index ${String(n)} is out of range for file`)}const o=zs(e,t,r);if(n===0)return o;const i=T(e,o.terminalNodeId);if(!A(i)||!Ce(e,o.terminalNodeId,i))throw new Error(`Visible index ${String(n)} is out of range for collapsed directory`);return Bs(e,o.terminalNodeId,n-1,o.visibleDepth)}function zs(e,t,n){return A(T(e,t))?e.instrumentation==null?{headNodeId:t,terminalNodeId:It(e,t),visibleDepth:n}:{headNodeId:t,terminalNodeId:D(e.instrumentation,"store.getVisibleSlice.flatten.resolveTerminalDirectory",()=>It(e,t)),visibleDepth:n}:{headNodeId:t,terminalNodeId:t,visibleDepth:n}}function Dd(e,t){const n=T(e,t);if(!A(n))return!0;const r=n.parentId;return r===e.snapshot.rootId?!0:Lt(e,r)!==t}function di(e,t){const n=T(e,t.terminalNodeId);if(A(n)){const i=re(e,t.terminalNodeId);if(Ce(e,t.terminalNodeId,n)&&i.childIds.length>0){const s=i.childIds[0];return s==null?null:Fr(e,s,0,t.visibleDepth+1)}}let r=t.terminalNodeId,o=t.visibleDepth;for(;;){const i=T(e,r);if(r===e.snapshot.rootId)return null;const s=i.parentId,l=re(e,s),a=tr(l).get(r)??-1;if(a<0)throw new Error(`Child ${String(r)} was not found in its parent index`);const h=l.childIds[a+1]??null;if(h!=null)return Fr(e,h,0,o);Dd(e,r)&&o--,r=s}}function Td(e){const t=e.paths.length,n=new Array(t);for(let r=0;r<t;r+=1){const o=e.getParentIndex(r);n[r]={index:r,parentPath:o>=0?e.paths[o]??null:null,path:e.paths[r]??"",posInSet:e.posInSetByIndex[r]??0,setSize:e.setSizeByIndex[r]??0}}return{getParentIndex:e.getParentIndex,rows:n,get visibleIndexByPath(){return e.visibleIndexByPath}}}function hi(e,t){const n=new Array(t),r=new Int32Array(t),o=new Int32Array(t),i=new Int32Array(t);let s=new Int32Array(bd);s.fill(-1);let l=0;const{nodes:a,directories:h,segmentTable:d}=e.snapshot,f=[[h.get(e.snapshot.rootId),0,-1,""]],c=e.snapshot.options.flattenEmptyDirectories,g=e.pathCacheByNodeId,p=e.pathCacheVersion,v=d.valueById;for(;f.length>0&&l<t;){const b=f[f.length-1],w=b[0];if(b[1]>=w.childIds.length){f.pop();continue}const C=b[1],F=w.childIds[b[1]++],se=a[F],W=b[2]+1,he=b[3];s=Id(s,W);let j,Z=F;if(A(se))Z=c?It(e,F):F,j=Z===F?`${he}${v[se.nameId]}/`:ne(e,Z);else{const G=g.get(F);j=G!=null&&G.version===p?G.path:`${he}${v[se.nameId]}`}r[l]=s[W],n[l]=j,o[l]=C,i[l]=w.childIds.length,s[W+1]=l,l+=1;const le=a[Z];le!=null&&A(le)&&Ce(e,Z,le)&&f.push([h.get(Z),0,W,j])}l<t&&(n.length=l);const I=r.subarray(0,l),P=o.subarray(0,l),S=i.subarray(0,l);let y=null;return{getParentIndex(b){return b<0||b>=l?-1:I[b]??-1},paths:n,posInSetByIndex:P,setSizeByIndex:S,get visibleIndexByPath(){if(y==null){y=new Map;for(let b=0;b<l;b+=1)y.set(n[b]??"",b)}return y}}}function Md(e,t){const n=new Array(t);let r=0;const{nodes:o,directories:i,segmentTable:s}=e.snapshot,l=[[i.get(e.snapshot.rootId),0,-1]],a=s.valueById,h=e.snapshot.options.flattenEmptyDirectories,d=e.pathCacheByNodeId,f=e.pathCacheVersion;for(;l.length>0&&r<t;){const c=l[l.length-1],g=c[0];if(c[1]>=g.childIds.length){l.pop();continue}const p=g.childIds[c[1]++],v=o[p],I=c[2]+1;if(!A(v)){const b=d.get(p);n[r++]={depth:I,flattenedSegments:void 0,hasChildren:!1,id:p,isExpanded:!1,isFlattened:!1,isLoading:!1,kind:"file",loadState:void 0,name:a[v.nameId],path:b!=null&&b.version===f?b.path:ne(e,p)};continue}const P=h?It(e,p):p,S={headNodeId:p,terminalNodeId:P,visibleDepth:I};n[r++]=gn(e,S);const y=o[P];y!=null&&A(y)&&Ce(e,P,y)&&l.push([i.get(P),0,I])}return r<t&&(n.length=r),n}function gn(e,t){const n=T(e,t.terminalNodeId),r=A(n)?Ad(e,t):null,o=ne(e,t.terminalNodeId),i=nt(e.snapshot.segmentTable,n.nameId),s=A(n)&&re(e,t.terminalNodeId).childIds.length>0,l=t.headNodeId!==t.terminalNodeId,a=e.instrumentation,h=l?a==null?Qn(e,t.headNodeId).map(d=>{const f=T(e,d);return{isTerminal:d===t.terminalNodeId,name:nt(e.snapshot.segmentTable,f.nameId),nodeId:d,path:ne(e,d)}}):D(a,"store.getVisibleSlice.flatten.collectSegments",()=>Qn(e,t.headNodeId).map(d=>{const f=T(e,d);return{isTerminal:d===t.terminalNodeId,name:nt(e.snapshot.segmentTable,f.nameId),nodeId:d,path:ne(e,d)}})):void 0;return{depth:t.visibleDepth,flattenedSegments:h,hasChildren:s,id:t.terminalNodeId,isExpanded:A(n)&&Ce(e,t.terminalNodeId,n),isFlattened:l,isLoading:r==="loading",kind:A(n)?"directory":"file",loadState:r==null||r==="loaded"?void 0:r,name:i,path:o}}function Ad(e,t){if(t.headNodeId===t.terminalNodeId)return pn(e,t.terminalNodeId);const n=Qn(e,t.headNodeId);let r=!1,o=!1;for(const i of n){const s=pn(e,i);if(s==="loading")return"loading";if(s==="error"){o=!0;continue}s==="unloaded"&&(r=!0)}return o?"error":r?"unloaded":"loaded"}function Nd(e){const{directories:t,nodes:n,options:r,rootId:o,presortedDirectoryNodeIds:i}=e.snapshot,s=r.flattenEmptyDirectories===!0,l=g=>{const p=n[g];if(p==null||!A(p))return;const v=t.get(g);if(v==null)throw new Error(`Unknown directory child index for node ${String(g)}`);const I=v.childIds,P=I.length;let S=0,y=0;for(let w=0;w<P;w++){const C=I[w];if(C==null)continue;const F=n[C];S+=F.subtreeNodeCount,y+=F.visibleSubtreeCount}v.totalChildSubtreeNodeCount=S,v.totalChildVisibleSubtreeCount=y,P>=tu&&dn(n,v),p.subtreeNodeCount=1+S;let b;if(s&&P===1){const w=n[I[0]];b=w!=null&&A(w)?y:1+y}else b=1+y;p.visibleSubtreeCount=b};if(i!=null)for(let g=i.length-1;g>=0;g--)l(i[g]);else for(let g=n.length-1;g>=1;g--)l(g);const a=n[o],h=t.get(o);if(a==null||h==null)return;const d=h.childIds;let f=0,c=0;for(let g=0;g<d.length;g++){const p=d[g];if(p==null)continue;const v=n[p];f+=v.subtreeNodeCount,c+=v.visibleSubtreeCount}h.totalChildSubtreeNodeCount=f,h.totalChildVisibleSubtreeCount=c,dn(n,h),a.subtreeNodeCount=1+f,a.visibleSubtreeCount=c}function Rd(e){return e.initialExpansion==="open"&&(e.initialExpandedPaths==null||e.initialExpandedPaths.length===0)}var Hs=class Os{#e;constructor(t={}){const n=Qr(t),r=D(n,"store.builder.create",()=>new xs(t));if(t.preparedInput!=null){const l=wu(t.preparedInput);l!=null?r.appendPresortedPaths(l,xu(t.preparedInput)):r.appendPreparedPaths(Iu(t.preparedInput),!1)}else{const l=t.paths??[];t.presorted===!0?r.appendPaths(l):r.appendPreparedPaths(D(n,"store.preparePathEntries",()=>eo(l,t)))}const o=D(n,"store.builder.finish",()=>r.finish({skipSubtreeCountPass:!0})),i=D(n,"store.state.detectAllDirectoriesExpanded",()=>(t.initialExpansion??"closed")==="closed"&&r.didMatchAllInitialExpandedPaths());this.#e=D(n,"store.state.create",()=>Su(o,i?"open":t.initialExpansion??"closed",n)),i&&(this.#e.collapseNewDirectoriesByDefault=!0);const s=i?this.#e.snapshot.directories.size-1:D(n,"store.state.initializeExpandedPaths",()=>this.initializeExpandedPaths(t.initialExpandedPaths));i||Rd(t)||(t.initialExpansion??"closed")==="closed"&&s===this.#e.snapshot.directories.size-1||(t.initialExpandedPaths?.length??0)>0&&D(n,"store.state.checkAllDirectoriesExpanded",()=>this.hasAllDirectoriesExpanded())?D(n,"store.state.initializeOpenVisibleCounts",()=>Nd(this.#e)):D(n,"store.state.recomputeCounts",()=>to(this.#e,this.#e.snapshot.rootId))}static preparePaths(t,n={}){return vu(t,n)}static prepareInput(t,n={}){return yu(t,n)}static preparePresortedInput(t){return bu(t)}list(t){return D(this.#e.instrumentation,"store.list",()=>Cs(this.#e,t))}add(t){D(this.#e.instrumentation,"store.add",()=>{const n=be(this.#e);Ge(this.#e,Te(this.#e,n,ni(this.#e,t)))})}remove(t,n={}){D(this.#e.instrumentation,"store.remove",()=>{const r=be(this.#e);Ge(this.#e,Te(this.#e,r,ri(this.#e,t,n)))})}move(t,n,r={}){D(this.#e.instrumentation,"store.move",()=>{const o=be(this.#e),i=oi(this.#e,t,n,r);i!=null&&Ge(this.#e,Te(this.#e,o,i))})}batch(t){ju(this.#e,()=>{if(typeof t=="function"){t(this);return}for(const n of t)switch(n.type){case"add":this.add(n.path);break;case"remove":this.remove(n.path,{recursive:n.recursive});break;case"move":this.move(n.from,n.to,{collision:n.collision});break}})}getVisibleCount(){return D(this.#e.instrumentation,"store.getVisibleCount",()=>be(this.#e))}getVisibleSlice(t,n){return D(this.#e.instrumentation,"store.getVisibleSlice",()=>_d(this.#e,t,n))}getVisibleRowContext(t){return D(this.#e.instrumentation,"store.getVisibleRowContext",()=>Sd(this.#e,t))}getVisibleTreeProjection(){return Cd(this.#e)}getVisibleTreeProjectionData(t){return Fs(this.#e,t)}getVisibleIndex(t){return D(this.#e.instrumentation,"store.getVisibleIndex",()=>kd(this.#e,t))}getPathInfo(t){return D(this.#e.instrumentation,"store.getPathInfo",()=>{const n=qe(this.#e,t);if(n==null)return null;const r=T(this.#e,n);return{depth:tt(r),kind:A(r)?"directory":"file",path:ne(this.#e,n)}})}isExpanded(t){return D(this.#e.instrumentation,"store.isExpanded",()=>{const n=this.requireDirectoryNodeId(t),r=T(this.#e,n);return Ce(this.#e,n,r)})}expand(t){D(this.#e.instrumentation,"store.expand",()=>{const n=be(this.#e),r=Pd(this.#e,t);r!=null&&Ge(this.#e,Te(this.#e,n,r))})}collapse(t){D(this.#e.instrumentation,"store.collapse",()=>{const n=be(this.#e),r=Ed(this.#e,t);r!=null&&Ge(this.#e,Te(this.#e,n,r))})}on(t,n){return Au(this.#e,t,n)}getDirectoryLoadState(t){const n=this.requireDirectoryNodeId(t);return pn(this.#e,n)}markDirectoryUnloaded(t){D(this.#e.instrumentation,"store.markDirectoryUnloaded",()=>{const n=this.requireDirectoryNodeId(t);if(re(this.#e,n).childIds.length>0)throw new Error(`Cannot mark a directory with known children as unloaded: "${t}"`);const r=be(this.#e);Pu(this.#e,n),Ge(this.#e,Te(this.#e,r,Bu({affectedAncestorIds:Ye(this.#e,n),affectedNodeIds:[n],path:t,projectionChanged:this.isDirectoryProjectionVisible(n)})))})}beginChildLoad(t){return D(this.#e.instrumentation,"store.beginChildLoad",()=>{const n=this.requireDirectoryNodeId(t),r=be(this.#e),o=ku(this.#e,n);return Ge(this.#e,Te(this.#e,r,zu({affectedAncestorIds:Ye(this.#e,n),affectedNodeIds:[n],attemptId:o.attemptId,path:t,projectionChanged:this.isDirectoryProjectionVisible(n),reused:o.reused}))),o})}applyChildPatch(t,n){return D(this.#e.instrumentation,"store.applyChildPatch",()=>{const r=this.resolveActiveDirectoryNodeId(t.nodeId);if(r==null||pn(this.#e,r)!=="loading"||!Du(this.#e,r,t.attemptId))return!1;const o=ne(this.#e,r);this.validateChildPatch(o,n);const i=be(this.#e),s=[];for(const a of n.operations){Vd(o,a);const h=be(this.#e);switch(a.type){case"add":s.push(Te(this.#e,h,ni(this.#e,a.path)));break;case"remove":s.push(Te(this.#e,h,ri(this.#e,a.path,{recursive:a.recursive})));break;case"move":{const d=oi(this.#e,a.from,a.to,{collision:a.collision});d!=null&&s.push(Te(this.#e,h,d));break}}}const l=s.some(a=>a.projectionChanged)||this.isDirectoryProjectionVisible(r);return Ge(this.#e,Te(this.#e,i,Hu({affectedAncestorIds:Ye(this.#e,r),affectedNodeIds:[r],attemptId:t.attemptId,childEvents:s,path:ne(this.#e,r),projectionChanged:l}))),!0})}completeChildLoad(t){return D(this.#e.instrumentation,"store.completeChildLoad",()=>{const n=this.resolveActiveDirectoryNodeId(t.nodeId);if(n==null)return!1;const r=be(this.#e),o=Eu(this.#e,n,t.attemptId);return Ge(this.#e,Te(this.#e,r,Ou({affectedAncestorIds:Ye(this.#e,n),affectedNodeIds:[n],attemptId:t.attemptId,path:ne(this.#e,n),projectionChanged:this.isDirectoryProjectionVisible(n),stale:!o}))),o})}failChildLoad(t,n){return D(this.#e.instrumentation,"store.failChildLoad",()=>{const r=this.resolveActiveDirectoryNodeId(t.nodeId);if(r==null)return!1;const o=be(this.#e),i=Tu(this.#e,r,t.attemptId,n);return Ge(this.#e,Te(this.#e,o,$u({affectedAncestorIds:Ye(this.#e,r),affectedNodeIds:[r],attemptId:t.attemptId,errorMessage:n,path:ne(this.#e,r),projectionChanged:this.isDirectoryProjectionVisible(r),stale:!i}))),i})}cleanup(t={}){return D(this.#e.instrumentation,"store.cleanup",()=>{if(this.#e.transactionStack.length>0)throw new Error("Cleanup cannot run during an open batch or transaction.");if(vd(this.#e))throw new Error("Cleanup cannot run while directory loads are active.");const n=be(this.#e),r=yd(this.#e,t.mode??"stable");return Ge(this.#e,Te(this.#e,n,qu({...r,affectedAncestorIds:[],affectedNodeIds:[],projectionChanged:r.idsPreserved===!1}))),r})}getNodeCount(){return this.#e.activeNodeCount}initializeExpandedPaths(t){if(t==null||t.length===0)return 0;let n=0;const r=[],o=[];let i=0,s=null;const l=this.#e.snapshot.segmentTable,a=l.valueById,h=this.#e.snapshot.nodes,d=new Map;for(const f of t){s!=null&&f<s&&(s=null,i=0,r.length=0,o.length=0);const c=f.length>0&&f.charCodeAt(f.length-1)===47?f.length-1:f.length;if(c===0){s=f,i=c,r.length=0,o.length=0;continue}let g=0,p=0;if(s!=null){const y=Math.min(c,i);let b=!0;for(let w=0;w<y;w+=1){const C=f.charCodeAt(w);if(C!==s.charCodeAt(w)){b=!1;break}C===47&&(g+=1,p=w+1)}b&&(y===i&&c>y&&f.charCodeAt(y)===47?(g+=1,p=y+1):y===c&&i>y&&s.charCodeAt(y)===47&&(g+=1,p=c+1)),g=Math.min(g,o.length)}let v=g===0?this.#e.snapshot.rootId:o[g-1]??this.#e.snapshot.rootId,I=g,P=!0,S=p;for(;S<=c;){const y=f.indexOf("/",S),b=y===-1||y>c?c:y,w=f.slice(S,b),C=re(this.#e,v).childIds,F=I===g?r[I]??0:0;let se=F,W;const he=d.get(w)??yn(w);d.set(w,he);const j=(Z,le)=>{for(se=Z;se<le;se+=1){const G=C[se],Ae=h[G],K=a[Ae.nameId];if(K===w)return W=G,!0;const $=Jr(Ar(l,Ae.nameId),he);if($>0||$===0&&K>w)return!1}return!1};if(!j(F,C.length)&&F>0&&j(0,F),W===void 0){P=!1;break}if(!A(T(this.#e,W))){P=!1;break}if(r[I]=se,o[I]=W,v=W,I+=1,b===c)break;S=b+1}if(s=f,i=c,r.length=I,o.length=I,!P){s=null,i=0,r.length=0,o.length=0;continue}for(let y=g;y<I;y+=1){const b=o[y];if(b==null)continue;const w=T(this.#e,b);Ce(this.#e,b,w)||(fn(this.#e,b,!0,w),n+=1)}}return n}hasAllDirectoriesExpanded(){for(const t of this.#e.snapshot.directories.keys()){if(t===this.#e.snapshot.rootId)continue;const n=T(this.#e,t);if(!Ce(this.#e,t,n))return!1}return!0}requireDirectoryNodeId(t){const n=qe(this.#e,t);if(n==null)throw new Error(`Path does not exist: "${t}"`);if(!A(T(this.#e,n)))throw new Error(`Path is not a directory: "${t}"`);return n}resolveActiveDirectoryNodeId(t){try{if(!A(T(this.#e,t)))throw new Error(`Node is not a directory: ${String(t)}`);return t}catch{return null}}isDirectoryProjectionVisible(t){let n=t;for(;n!==this.#e.snapshot.rootId;){const r=T(this.#e,n).parentId;if(r!==this.#e.snapshot.rootId){const o=T(this.#e,r),i=Lt(this.#e,r);if(!Ce(this.#e,r,o)&&i!==n)return!1}n=r}return!0}validateChildPatch(t,n){new Os({paths:this.list(t),presorted:!0,sort:this.#e.snapshot.options.sort}).batch(n.operations)}};function Vd(e,t){switch(t.type){case"add":case"remove":if(!t.path.startsWith(e)||t.path===e)throw new Error(`Child patch operation must stay within ${e}: "${t.path}"`);break;case"move":if(!t.from.startsWith(e)||!t.to.startsWith(e)||t.from===e||t.to===e)throw new Error(`Child patch move must stay within ${e}: "${t.from}" -> "${t.to}"`);break}}const Br={compact:{itemHeight:24,factor:.8},default:{itemHeight:30,factor:1},relaxed:{itemHeight:36,factor:1.2}};function Ld(e,t){if(typeof e=="number")return{itemHeight:t??Br.default.itemHeight,factor:e};const n=Br[e??"default"];return{itemHeight:t??n.itemHeight,factor:n.factor}}const $s=Br.default.itemHeight,Fd=10,qs=420,Bd=e=>e.startsWith($o)?e.slice($o.length):e;function zd(e){const t=e.lastIndexOf("/");return t<0?{parentPath:"",baseName:e}:{parentPath:e.slice(0,t),baseName:e.slice(t+1)}}function Hd(e,t){return e===""?t:`${e}/${t}`}function Od({files:e,path:t,isFolder:n,nextBasename:r}){const o=Bd(t),i=r.trim();if(i.length===0)return{error:"Name cannot be empty."};if(i.includes("/"))return{error:'Name cannot include "/".'};const{parentPath:s,baseName:l}=zd(o);if(i===l)return{nextFiles:e,sourcePath:o,destinationPath:o,isFolder:n};const a=Hd(s,i),h=new Array(e.length),d=new Set;if(!n){const p=`${a}/`;let v=!1;for(let I=0;I<e.length;I++){const P=e[I];if(P!==o&&P.startsWith(p))return{error:`"${a}" already exists.`};const S=P===o?a:P;if(d.has(S))return{error:`"${a}" already exists.`};d.add(S),h[I]=S,P===o&&(v=!0)}return v?{nextFiles:h,sourcePath:o,destinationPath:a,isFolder:n}:{error:"Could not find the selected file to rename."}}const f=`${o}/`,c=`${a}/`;let g=0;for(let p=0;p<e.length;p++){const v=e[p],I=v===o||v.startsWith(f);if(!I&&(v===a||v.startsWith(c)))return{error:`"${a}" already exists.`};const P=I?`${a}${v.slice(o.length)}`:v;if(d.has(P))return{error:`"${a}" already exists.`};d.add(P),h[p]=P,I&&g++}return g===0?{error:"Could not find the selected folder to rename."}:{nextFiles:h,sourcePath:o,destinationPath:a,isFolder:n}}function $d(e){return e.endsWith("/")}function qd(e){const t=e.endsWith("/")?e.slice(0,-1):e,n=t.lastIndexOf("/"),r=n<0?t:t.slice(n+1);return e.endsWith("/")?`${r}/`:r}function jd(e){const t=[],n=new Set;for(const o of e)n.has(o)||(n.add(o),t.push(o));const r=new Set;for(const o of t.toSorted((i,s)=>i.length!==s.length?i.length-s.length:i.localeCompare(s))){const i=(o.endsWith("/")?o.slice(0,-1):o).split("/");let s=!1;for(let l=0;l<i.length-1;l+=1){const a=`${i.slice(0,l+1).join("/")}/`;if(r.has(a)){s=!0;break}}s||r.add(o)}return t.filter(o=>r.has(o))}function Ud(e,t){return t.includes(e)?jd(t):[e]}function Kd(e,t){return e===t?!0:e==null||t==null?!1:e.kind===t.kind&&e.directoryPath===t.directoryPath&&e.flattenedSegmentPath===t.flattenedSegmentPath&&e.hoveredPath===t.hoveredPath}function fi(e,t){return{draggedPaths:e,target:t}}function pi(e,t){if(t.kind!=="directory"||t.directoryPath==null)return!1;for(const n of e)if($d(n)&&(t.directoryPath===n||t.directoryPath.startsWith(n)))return!0;return!1}function Wd(e,t){return t.kind==="root"||t.directoryPath==null?qd(e):t.directoryPath}function Gd(e,t){const n=e.map(r=>{const o=Wd(r,t);return o===r?null:{from:r,to:o,type:"move"}}).filter(r=>r!=null);return n.length===0?null:{operations:n,result:{draggedPaths:e,operation:n.length===1?"move":"batch",target:t}}}function Xd(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1)if(e[n]!==t[n])return!1;return!0}function gi(e,t,n){const{paths:r,preparedInput:o}=e;if(o==null){if(r==null)throw new Error("FileTree requires paths or preparedInput");return{paths:r,preparedInput:void 0}}const i=o.paths;if(r==null)return{paths:i,preparedInput:o};if(!Xd(Hs.preparePaths(r,n==null?{}:{sort:n}),i))throw new Error(`FileTree ${t} received paths and preparedInput for different path lists`);return{paths:i,preparedInput:o}}function mi(e){return e.operation==="add"||e.operation==="remove"||e.operation==="move"||e.operation==="batch"}function Yd(e,t,n){if(e===t)return n;const r=t.endsWith("/")?t:`${t}/`;return e.startsWith(r)?`${n.endsWith("/")?n:`${n}/`}${e.slice(r.length)}`:e}function Qd(e,t){if(e===t)return!0;const n=t.endsWith("/")?t:`${t}/`;return e.startsWith(n)}function ln(e,t,n=!1){if(e==null)return null;switch(t.operation){case"add":case"expand":case"collapse":case"mark-directory-unloaded":case"begin-child-load":case"apply-child-patch":case"complete-child-load":case"fail-child-load":case"cleanup":return e;case"remove":return Qd(e,t.path)?n?e:null:e;case"move":return Yd(e,t.from,t.to);case"batch":{let r=e;for(const o of t.events)if(r=ln(r,o,n),r==null)return null;return r}}}function qn(e){return{canonicalChanged:e.canonicalChanged,projectionChanged:e.projectionChanged,visibleCountDelta:e.visibleCountDelta}}function js(e){switch(e.operation){case"add":return{...qn(e),operation:"add",path:e.path};case"remove":return{...qn(e),operation:"remove",path:e.path,recursive:e.recursive};case"move":return{...qn(e),from:e.from,operation:"move",to:e.to}}}function Jd(e){return{...qn(e),events:e.events.filter(t=>t.operation==="add"||t.operation==="remove"||t.operation==="move").map(t=>js(t)),operation:"batch"}}function Zd(e){switch(e.operation){case"add":case"remove":case"move":return js(e);case"batch":return Jd(e);default:return null}}function Sr(e,t){if(e.size!==t.length)return!1;for(const n of t)if(!e.has(n))return!1;return!0}function at(e){const t=e.endsWith("/")?e.slice(0,-1):e;if(t.length===0)return[];const n=t.split("/");return n.slice(0,-1).map((r,o)=>`${n.slice(0,o+1).join("/")}/`)}function _r(e){return at(e).at(-1)??null}function vi(e,t){return t==null?e:e.startsWith(t)?e.slice(t.length):e}function Ln(e){return e.endsWith("/")}const yi=e=>e.toLowerCase();function eh(e){const t=e.endsWith("/")?e.slice(0,-1):e,n=t.lastIndexOf("/");return n<0?t:t.slice(n+1)}function bi(e){return e.endsWith("/")?e.slice(0,-1):e}function Ii(e,t){return t&&!e.endsWith("/")?`${e}/`:e}const th=e=>{const t=e.trim();return t.length===0?"":(t.includes("\\")?t.replaceAll("\\","/"):t).toLowerCase()},Us=Symbol("FILE_TREE_RENAME_VIEW"),nh=512,rh=512;function oh(e){return e==="top"||e==="center"?e:"nearest"}function ih(e,t,n){if(e===0)return-1;if(n!=null){const r=t(n);if(r!=null)return r;const o=at(n);for(let i=o.length-1;i>=0;i-=1){const s=o[i];if(s==null)continue;const l=t(s);if(l!=null)return l}}return 0}function sh(e,t,n){if(e.paths.length===0)return{focusedIndex:-1,getParentIndex:e.getParentIndex,paths:e.paths,posInSetByIndex:e.posInSetByIndex,setSizeByIndex:e.setSizeByIndex};if(t==null)return{focusedIndex:0,getParentIndex:e.getParentIndex,paths:e.paths,posInSetByIndex:e.posInSetByIndex,setSizeByIndex:e.setSizeByIndex};const r=n??(o=>e.visibleIndexByPath.get(o)??null);return{focusedIndex:ih(e.paths.length,r,t),getParentIndex:e.getParentIndex,paths:e.paths,posInSetByIndex:e.posInSetByIndex,setSizeByIndex:e.setSizeByIndex}}var lh=class{#e;#n=new Set;#l=new Map;#a=null;#i=null;#H=new Map;#O=new Map;#m=-1;#r=null;#D=!1;#T=e=>-1;#y=new Map;#b=null;#p=null;#I=null;#w=null;#x=null;#v;#$;#L;#g=[];#q=new Int32Array(0);#d=new Int32Array(0);#j=void 0;#U=!1;#c=null;#h="";#k=!1;#M=new Set;#K=[];#N;#W=null;#s=null;#G=null;#F=null;#S=null;#R=null;#X=null;#ne=0;#_=null;#o=new Set;#Y=0;#t;#re=0;#oe=!1;#f=0;#Q;constructor(e){const{dragAndDrop:t,fileTreeSearchMode:n,initialSearchQuery:r,initialSelectedPaths:o,renaming:i,onSearchChange:s,paths:l,preparedInput:a,...h}=e,d=gi({paths:l,preparedInput:a},"constructor",h.sort);this.#e=h,t!=null&&t!==!1&&(this.#a=t===!0?{}:t),this.#U=i!=null&&i!==!1,i!=null&&i!==!1&&i!==!0&&(this.#j=i.canRename,this.#$=i.onError,this.#v=i.onRename),this.#L=s,this.#N=n??"hide-non-matches",this.#t=this.#se(d.paths,d.preparedInput);const f=o?.map(g=>this.#V(g)).filter(g=>g!=null)??[],c=f.at(-1)??null;f.length>0&&(this.#o=new Set(f),this.#_=c,this.#Y=1),this.#z(c,!1),r!=null&&this.#J(r,!1),this.#Q=this.#_e()}destroy(){this.#Q?.(),this.#Q=null,this.#l.clear(),this.#n.clear(),this.#y.clear(),this.#i=null,this.#ae()}focusFirstItem(){this.#P().length>0&&this.#E(0)}focusLastItem(){this.#f<=0||(this.#A(),this.#E(this.#f-1))}focusNextItem(){this.#Se(1)}focusParentItem(){if(this.#r==null)return;const e=_r(this.#r);if(e==null)return;const t=this.#B(e);t>=0&&this.#E(t)}focusPath(e){const t=this.#t.getPathInfo(e)?.path??null;if(t==null)return;this.#A();const n=this.#B(t);n>=0&&this.#E(n)}scrollToPath(e,t){const n=this.#t.getPathInfo(e)?.path??null;if(n==null)return;this.#A();const r=this.#Be(n);r<0||this.#ce(r)!=null&&(t?.focus!==!1&&this.#E(r,!1),this.#X={id:this.#ne+=1,offset:oh(t?.offset),visibleIndex:r},this.#u())}focusMountedPathFromInput(e){const t=this.#t.getPathInfo(e)?.path??null;if(t==null)return;const n=this.#B(t);n>=0&&this.#E(n)}focusNearestPath(e){const t=this.resolveNearestVisiblePath(e);if(t==null)return null;const n=this.#B(t);return n>=0?(this.#E(n),this.#P()[n]??t):null}focusPreviousItem(){this.#Se(-1)}getFocusedIndex(){return this.#m}getFocusedItem(){return this.#r==null?null:this.#ue(this.#r)}getFocusedPath(){return this.#r}getScrollRequest(){return this.#X}clearScrollRequest(e){this.#X?.id===e&&(this.#X=null)}resolveNearestVisiblePath(e){const t=this.#P();if(this.#f===0)return null;if(e==null)return this.#r??t[0]??null;const n=this.#t.getPathInfo(e)?.path??e,r=this.#B(n);if(r>=0)return t[r]??n;const o=this.#De(n);return o??this.#r??t[0]??null}getSelectedPaths(){return[...this.#o]}getSelectionVersion(){return this.#Y}getVisibleCount(){return this.#f}getVisibleRows(e,t){if(t<e||this.#f===0)return[];const n=Math.max(0,e),r=Math.min(this.#f-1,t);if(r<n)return[];const o=r-n+1;if(this.#S==null&&!this.#D&&r>=this.#g.length&&o<=rh){const i=[];for(let s=n;s<=r;s+=1){const l=this.#t.getVisibleRowContext(s);if(l==null)break;i.push(this.#de(l))}return i}if(!this.#D&&r>=this.#g.length&&this.#A(),this.#S!=null){const i=Array.from({length:r-n+1},(h,d)=>this.#ye(n+d)),s=new Map;let l=i[0]??-1,a=l;for(let h=1;h<=i.length;h+=1){const d=i[h];if(d!=null&&d===a+1){a=d;continue}if(l>=0&&this.#t.getVisibleSlice(l,a).forEach((f,c)=>{s.set(l+c,f)}),d==null){l=-1,a=-1;continue}l=d,a=d}return Array.from({length:r-n+1},(h,d)=>{const f=n+d,c=this.#ye(f),g=s.get(c),p=this.#g[c];if(g==null||p==null)throw new Error(`Missing projection row for filtered visible index ${String(f)}`);return this.#ie(g,f,c,{ancestorPaths:this.#pe(c),path:p})})}return this.#t.getVisibleSlice(n,r).map((i,s)=>{const l=n+s,a=this.#g[l];if(a==null)throw new Error(`Missing projection path for visible index ${String(l)}`);return this.#ie(i,l,l,{ancestorPaths:this.#pe(l),path:a})})}getStickyRowCandidates(e,t){if(this.#S!=null)return null;if(this.#f===0||e<=0||t<=0)return[];const n=[];for(let r=0;r<this.#f;r+=1){const o=e+r*t,i=Math.min(this.#f-1,Math.floor(o/t)),s=this.#he(i,r)??(i>0?this.#he(i-1,r):void 0);if(s==null)break;n.push({row:this.#de(s),subtreeEndIndex:s.subtreeEndIndex})}return n}getItem(e){const t=this.#t.getPathInfo(e);return t==null?null:this.#ue(t.path,t)}resolveMountedDirectoryPathFromInput(e){const t=this.#t.getPathInfo(e);return t?.kind==="directory"?t.path:null}toggleMountedDirectoryFromInput(e){const t=this.resolveMountedDirectoryPathFromInput(e);t!=null&&this.#Ce(t)}selectAllVisiblePaths(){this.#A();const e=[...this.#P()];this.#C(e,this.#r??this.#_)}selectOnlyPath(e){const t=this.#V(e);t!=null&&this.#C([t],t)}selectOnlyMountedPathFromInput(e){this.#C([e],e)}selectPath(e){const t=this.#V(e);t==null||this.#o.has(t)||this.#C([...this.#o,t])}deselectPath(e){const t=this.#V(e);t==null||!this.#o.has(t)||this.#C([...this.#o].filter(n=>n!==t))}toggleFocusedSelection(){this.#r!=null&&this.togglePathSelectionFromInput(this.#r)}togglePathSelection(e){const t=this.#V(e);if(t!=null){if(this.#o.has(t)){this.deselectPath(t);return}this.selectPath(t)}}togglePathSelectionFromInput(e){const t=this.#V(e);if(t!=null){if(this.#o.has(t)){this.#C([...this.#o].filter(n=>n!==t),t);return}this.#C([...this.#o,t],t)}}selectPathRange(e,t){const n=this.#V(e);if(n==null)return;this.#A();const r=this.#_,o=r==null?-1:this.#te(r),i=this.#te(n);if(o===-1||i===-1){const d=t?[...this.#o,n]:[n];this.#C(d,n);return}const[s,l]=o<=i?[o,i]:[i,o],a=this.#P().slice(s,l+1),h=t?[...this.#o,...a]:a;this.#C(h,r)}extendSelectionFromFocused(e){if(this.#r==null)return;const t=this.#m;if(t===-1)return;const n=Math.min(this.#f-1,Math.max(0,t+e));if(n===t)return;!this.#D&&n>=this.#g.length&&this.#A();const r=this.#P(),o=r[t]??null,i=r[n]??null;if(o==null||i==null)return;const s=new Set(this.#o);s.has(o)&&s.has(i)?s.delete(o):s.add(i),this.#C([...s],this.#_??o,!1),this.#E(n)}getDragAndDropConfig(){return this.#a}isDragAndDropEnabled(){return this.#a!=null}getDragSession(){return this.#i==null?null:{draggedPaths:[...this.#i.draggedPaths],primaryPath:this.#i.primaryPath,target:this.#i.target==null?null:{...this.#i.target}}}startDrag(e){if(this.#a==null)return!1;const t=this.#V(e);if(t==null||this.#s!=null&&this.#s.length>0)return!1;const n=this.getSelectedPaths(),r=Ud(t,n);return this.#a.canDrag?.(r)===!1?!1:(n.includes(t)||this.#C([t],t,!1),this.#Z(t),this.#i={draggedPaths:r,primaryPath:t,target:null},this.#u(),!0)}setDragTarget(e){const t=this.#i;if(t==null)return;let n=e;if(n!=null){const r=fi(t.draggedPaths,n);(pi(t.draggedPaths,n)||this.#a?.canDrop?.(r)===!1)&&(n=null)}Kd(t.target,n)||(this.#i={...t,target:n},this.#u())}cancelDrag(){this.#i!=null&&(this.#i=null,this.#u())}completeDrag(){const e=this.#i;if(e==null)return!1;this.#i=null;const t=e.target==null?null:{...e.target};if(t==null)return this.#u(),!1;const n=fi(e.draggedPaths,t);if(pi(e.draggedPaths,t)||this.#a?.canDrop?.(n)===!1)return this.#u(),!1;const r=Gd(e.draggedPaths,t);if(r==null)return this.#u(),!1;try{if(r.operations.length===1){const o=r.operations[0];if(o==null||o.type!=="move")throw new Error("Expected a single move operation for one-item drops");this.#t.move(o.from,o.to,{collision:o.collision})}else this.#Ae(r.operations),this.#t.batch(r.operations)}catch(o){return this.#u(),this.#a?.onDropError?.(o instanceof Error?o.message:String(o),n),!1}return this.#a?.onDropComplete?.(r.result),!0}subscribe(e){return this.#n.add(e),e(),()=>{this.#n.delete(e)}}add(e){this.#t.add(e)}remove(e,t={}){this.#t.remove(e,t)}move(e,t,n={}){this.#t.move(e,t,n)}batch(e){this.#t.batch(e)}onMutation(e,t){const n=e,r=t;let o=this.#l.get(n);return o==null&&(o=new Set,this.#l.set(n,o)),o.add(r),()=>{const i=this.#l.get(n);i?.delete(r),i?.size===0&&this.#l.delete(n)}}setSearch(e){this.#J(e,!0)}openSearch(e=""){this.#J(e,!0)}closeSearch(){this.#J(null,!0)}isSearchOpen(){return this.#s!==null}getSearchValue(){return this.#s??""}getSearchMatchingPaths(){return this.#K}focusNextSearchMatch(){this.#be(1)}focusPreviousSearchMatch(){this.#be(-1)}startRenaming(e=this.#r??"",t={}){if(!this.#U)return!1;const n=this.#t.getPathInfo(e);if(n==null)return!1;const r=n.path,o=Ln(r),i=bi(r);if(this.#j?.({isFolder:o,path:i})===!1)return!1;for(const s of at(r))this.#t.isExpanded(s)||this.#t.expand(s);return this.#C([r],r,!1),this.#s!=null&&(this.#J(null,!1),this.#L?.(this.#s)),this.#Z(r),this.#c=r,this.#h=eh(r),this.#k=t.removeIfCanceled??!1,this.#u(),!0}[Us](){return{cancel:()=>{this.#ke()},commit:()=>{this.#Pe()},getPath:()=>this.#c,getValue:()=>this.#h,isActive:()=>this.#c!=null,setValue:e=>{this.#Ee(e)}}}#ke(){if(this.#c==null)return;const e=this.#c,t=this.#k;if(this.#c=null,this.#h="",this.#k=!1,t){this.remove(e,Ln(e)?{recursive:!0}:void 0);return}this.#Z(e),this.#u()}#Pe(){const e=this.#c;if(e==null)return;if(this.#k&&this.#h.trim().length===0){this.#c=null,this.#h="",this.#k=!1,this.remove(e,Ln(e)?{recursive:!0}:void 0);return}const t=Ln(e),n=Od({files:this.#t.list(),isFolder:t,nextBasename:this.#h,path:bi(e)});if(this.#c=null,this.#h="",this.#k=!1,"error"in n){this.#Z(e),this.#$?.(n.error),this.#u();return}if(n.sourcePath===n.destinationPath){this.#Z(e),this.#u();return}this.#v?.({destinationPath:n.destinationPath,isFolder:n.isFolder,sourcePath:n.sourcePath}),this.move(Ii(n.sourcePath,t),Ii(n.destinationPath,t))}#Ee(e){this.#c==null||this.#h===e||(this.#h=e,this.#u())}resetPaths(e,t={}){const n=this.#t.list().length,r=this.#f,o=gi({paths:e,preparedInput:t.preparedInput},"resetPaths",this.#e.sort),i=this.#se(o.paths,o.preparedInput,t.initialExpandedPaths),s=this.#r,l=this.#c,a=this.getSelectedPaths(),h=this.#_;this.#Q?.(),this.#t=i,this.#y.clear(),this.#ae();const d=a.map(c=>i.getPathInfo(c)?.path??null).filter(c=>c!=null),f=!Sr(this.#o,d);this.#o=new Set(d),f&&(this.#Y+=1),this.#_=h==null?null:i.getPathInfo(h)?.path??null,this.#c=l==null?null:i.getPathInfo(l)?.path??null,this.#c==null&&(this.#h="",this.#k=!1),this.#z(s,s!=null||d.length>0||this.#_!=null),this.#Q=this.#_e(),this.#u(),this.#we({canonicalChanged:!0,operation:"reset",pathCountAfter:o.paths.length,pathCountBefore:n,projectionChanged:!0,usedPreparedInput:t.preparedInput!=null,visibleCountDelta:this.#f-r})}#De(e){this.#A();const t=_r(e),n=vi(e,t);let r=null,o=null;for(const i of this.#P()){if(_r(i)!==t)continue;const s=vi(i,t);if(s<n){r=i;continue}if(s>n){o=i;break}}return r??o}#B(e){const t=this.#te(e);if(t!==-1)return t;const n=at(e);for(let r=n.length-1;r>=0;r-=1){const o=n[r];if(o==null)continue;const i=this.#te(o);if(i!==-1)return i}return this.#P().length>0?0:-1}#ue(e,t){const n=this.#y.get(e);if(n!=null)return n;const r=t??this.#t.getPathInfo(e);if(r==null)return null;const o=r.kind==="directory"?this.#Te(r.path):this.#Me(r.path);return this.#y.set(r.path,o),o}#ie(e,t,n,r){return{ancestorPaths:r.ancestorPaths,depth:e.depth,flattenedSegments:e.flattenedSegments?.map(o=>({isTerminal:o.isTerminal,name:o.name,path:o.path})),hasChildren:e.hasChildren,index:t,isExpanded:e.isExpanded,isFlattened:e.isFlattened,isFocused:r.path===this.#r,isSelected:this.#o.has(r.path),kind:e.kind,level:e.depth,name:e.name,path:r.path,posInSet:r.posInSet??this.#q[n]??0,setSize:r.setSize??this.#d[n]??0}}#de(e){return this.#ie(e.row,e.index,e.index,{ancestorPaths:e.ancestorPaths,path:e.row.path,posInSet:e.posInSet,setSize:e.setSize})}#he(e,t){const n=this.#t.getVisibleRowContext(e);if(n==null)return;const r=n.ancestorRows[t];return r??(t===n.ancestorRows.length&&n.row.kind==="directory"&&n.row.isExpanded?n:void 0)}#fe(e){const t=this.#H.get(e);if(t!=null)return t;const n=this.#T(e),r=n<0?[]:[...this.#fe(n),n];return this.#H.set(e,r),r}#pe(e){const t=this.#O.get(e);if(t!=null)return t;const n=this.#fe(e).map(r=>this.#g[r]??"").filter(r=>r!=="");return this.#O.set(e,n),n}#ge(e){this.#t.collapse(e)}#C(e,t=this.#_,n=!0){const r=[...new Set(e)],o=!Sr(this.#o,r),i=this.#_!==t;!o&&!i||(this.#o=new Set(r),this.#_=t,o&&(this.#Y+=1),n&&this.#u())}#Te(e){return{collapse:()=>{this.#ge(e)},deselect:()=>{this.deselectPath(e)},expand:()=>{this.#xe(e)},focus:()=>{this.focusPath(e)},getPath:()=>e,isDirectory:()=>!0,isExpanded:()=>this.#t.isExpanded(e),isFocused:()=>this.#r===e,isSelected:()=>this.#o.has(e),select:()=>{this.selectPath(e)},toggleSelect:()=>{this.togglePathSelection(e)},toggle:()=>{this.#Ce(e)}}}#Me(e){return{deselect:()=>{this.deselectPath(e)},focus:()=>{this.focusPath(e)},getPath:()=>e,isDirectory:()=>!1,isFocused:()=>this.#r===e,isSelected:()=>this.#o.has(e),select:()=>{this.selectPath(e)},toggleSelect:()=>{this.togglePathSelection(e)}}}#Ae(e){const t=this.#t.list();this.#se(t).batch(e)}#se(e,t,n){return new Hs({...this.#e,paths:e,preparedInput:t??void 0,...n!==void 0?{initialExpandedPaths:n}:{}})}#le(){return this.#w!=null?this.#w:(this.#w=this.#t.list(),this.#w)}#Ne(){if(this.#I!=null)return this.#I;const e=new Set;for(const t of this.#le()){e.add(t);for(const n of at(t))e.add(n)}return this.#I=[...e].sort(),this.#I}#Re(){return this.#x!=null?this.#x:(this.#x=this.#le().map(yi),this.#x)}#ee(){return this.#b!=null?this.#b:(this.#b=this.#Ne().filter(e=>e.endsWith("/")),this.#b)}#Ve(){return this.#p!=null?this.#p:(this.#p=this.#ee().map(yi),this.#p)}#ae(){this.#b=null,this.#p=null,this.#I=null,this.#w=null,this.#x=null}#Le(){return this.#ee().filter(e=>this.#t.isExpanded(e))}#me(e){const t=new Set(this.#W??[]);if(e)for(const n of this.#o)for(const r of at(n))t.add(r);this.#ve(t)}#ve(e){this.#oe=!0;try{for(const t of this.#ee()){const n=e.has(t),r=this.#t.isExpanded(t);n&&!r?this.#t.expand(t):!n&&r&&this.#t.collapse(t)}}finally{this.#oe=!1}}#Fe(){if(this.#s==null||this.#s.length===0){this.#K=[],this.#S=null,this.#R=null,this.#F=null,this.#f=this.#re;return}const e=this.#g;if(this.#K=e.filter(o=>this.#M.has(o)),this.#N!=="hide-non-matches"||this.#M.size===0){this.#S=null,this.#R=null,this.#F=null,this.#f=this.#re;return}const t=[],n=[],r=new Map;for(const[o,i]of e.entries())this.#G?.has(i)===!0&&(r.set(i,n.length),t.push(o),n.push(i));this.#S=t,this.#R=n,this.#F=r,this.#f=n.length}#P(){return this.#R??this.#g}#Be(e){return this.#R!=null?this.#F?.get(e)??-1:this.#t.getVisibleIndex(e)??-1}#ye(e){return this.#S?.[e]??e}#te(e){const t=this.#F?.get(e);return t??this.#t.getVisibleIndex(e)??-1}#be(e){const t=this.#K;if(t.length===0)return;const n=this.#r,r=n==null?-1:t.indexOf(n),o=t[r<0?e>0?0:t.length-1:Math.min(t.length-1,Math.max(0,r+e))];o!=null&&this.focusPath(o)}#J(e,t){const n=e==null?null:th(e),r=this.#s;if(r!==n){if(r==null&&n!=null&&(this.#W=this.#Le()),this.#s=n,n==null)this.#me(!0),this.#W=null,this.#M.clear(),this.#G=null,this.#z(this.#r,!0);else if(n.length===0)this.#me(!1),this.#M.clear(),this.#G=null,this.#z(this.#r,!0);else{const o=this.#Ie();this.#z(o,!0)}t&&(this.#L?.(this.#s),this.#u())}}#Ie(){if(this.#s==null||this.#s.length===0)return this.#M.clear(),this.#r;const e=this.#s,t=this.#le(),n=this.#Re(),r=[],o=new Set;let i=null;for(let d=0;d<t.length;d+=1){if(!n[d].includes(e))continue;const f=t[d];r.push(f),o.add(f),i??=f}const s=this.#ee(),l=this.#Ve();for(let d=0;d<s.length;d+=1){if(!l[d].includes(e))continue;const f=s[d];o.has(f)||(r.push(f),o.add(f),i??=f)}this.#M=o;const a=this.#N==="hide-non-matches"&&r.length>0?new Set:null;this.#G=a;const h=this.#N==="expand-matches"?new Set(this.#W??[]):new Set;for(const d of r){a?.add(d),d.endsWith("/")&&h.add(d);for(const f of at(d))h.add(f),a?.add(f)}return this.#ve(h),i??this.#r}#u(e){for(const t of this.#n)t(e)}#we(e){this.#l.get(e.operation)?.forEach(t=>{t(e)}),this.#l.get("*")?.forEach(t=>{t(e)})}#xe(e){for(const t of at(e))this.#t.isExpanded(t)||this.#t.expand(t);this.#t.isExpanded(e)||this.#t.expand(e)}#Se(e){const t=this.#f;if(t===0)return;const n=this.#m===-1?0:this.#m,r=Math.min(t-1,Math.max(0,n+e));(r!==n||this.#m===-1)&&(!this.#D&&this.#S==null&&r>=this.#g.length&&this.#A(),this.#E(r))}#z(e,t=!0){const n=this.#t.getVisibleCount();this.#re=n;const r=sh(this.#t.getVisibleTreeProjectionData(t?void 0:Math.min(n,nh)),e,t?o=>this.#t.getVisibleIndex(o):void 0);this.#H.clear(),this.#O.clear(),this.#D=r.paths.length>=n,this.#T=r.getParentIndex,this.#g=r.paths,this.#q=r.posInSetByIndex,this.#d=r.setSizeByIndex,this.#Fe(),this.#m=e==null?this.#P().length>0?0:-1:this.#B(e),this.#r=this.#m<0?null:this.#ce(this.#m)}#ce(e){const t=this.#P()[e];return t??(this.#S!=null?null:this.#t.getVisibleRowContext(e)?.row.path??null)}#V(e){return this.#t.getPathInfo(e)?.path??null}#Z(e){if(e==null)return;const t=this.#B(e);t>=0&&this.#E(t,!1)}#E(e,t=!0){const n=this.#ce(e);n!=null&&(this.#m===e&&this.#r===n||(this.#m=e,this.#r=n,t&&this.#u()))}#A(){this.#D||this.#z(this.#r,!0)}#ze(e){const t=ln(this.#c,e);t==null&&this.#c!=null&&(this.#h=""),this.#c=t;const n=ln(this.#r,e,!0),r=[...this.#o].map(l=>ln(l,e)).filter(l=>l!=null).map(l=>this.#t.getPathInfo(l)?.path??null).filter(l=>l!=null),o=ln(this.#_,e),i=o==null?null:this.#t.getPathInfo(o)?.path??null,s=[...new Set(r)];return Sr(this.#o,s)||(this.#o=new Set(s),this.#Y+=1),this.#_=i,n}#_e(){return this.#t.on("*",e=>{if(this.#oe)return;e.canonicalChanged&&(this.#y.clear(),this.#ae()),this.#i!=null&&mi(e)&&(this.#i=null);const t=mi(e)?this.#ze(e):this.#r,n=this.#s!=null&&this.#s.length>0?this.#Ie():this.#s===""?this.#r:t,r=this.#s!=null||e.operation!=="expand"&&e.operation!=="collapse";this.#z(n,r),this.#u(e);const o=Zd(e);o!=null&&this.#we(o)})}#Ce(e){if(this.#t.isExpanded(e)){this.#ge(e);return}this.#xe(e)}};const ah=e=>{if(e==null||e.length===0)return"0";let t=`${e.length}`;for(const n of e)t+=`\0${n.path}\0${n.status}`;return t};function ch(e){const t=e.endsWith("/");let n="",r=-1;for(let o=0;o<=e.length;o+=1){if(!(e[o]==="/"||o===e.length)){r===-1&&(r=o);continue}r!==-1&&(n!==""&&(n+="/"),n+=e.slice(r,o),r=-1)}return n===""?null:{isDirectory:t,path:n}}function uh(e){const t=e.endsWith("/")?e.slice(0,-1):e;if(t.length===0)return[];const n=t.split("/");return n.slice(0,-1).map((r,o)=>`${n.slice(0,o+1).join("/")}/`)}function dh(e,t){return t?`${e}/`:e}function wi(e,t=null){const n=ah(e==null?void 0:[...e]);if(n==="0")return null;if(t?.signature===n)return t;const r=new Map,o=new Set,i=new Set;for(const s of e??[]){const l=ch(s.path);if(l==null)continue;const a=dh(l.path,l.isDirectory);r.set(a,s.status),s.status==="ignored"&&l.isDirectory?i.add(a):l.isDirectory&&i.delete(a);for(const h of uh(l.path))o.add(h)}return{directoriesWithChanges:o,ignoredDirectoryPaths:i,signature:n,statusByPath:r}}var J,Ks,bt,xi,Zn,Ws,Gs,io,zr,Hr,mn={},Xs=[],or=Array.isArray,so=Xs.slice,ht=Object.assign;function lo(e){e&&e.parentNode&&e.remove()}function Or(e,t,n){var r,o,i,s={};for(i in t)i=="key"?r=t[i]:i=="ref"&&typeof e!="function"?o=t[i]:s[i]=t[i];return arguments.length>2&&(s.children=arguments.length>3?so.call(arguments,2):n),jn(e,s,r,o,null)}function jn(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++Ks,__i:-1,__u:0};return o==null&&J.vnode!=null&&J.vnode(i),i}function Ft(e){return e.children}function Un(e,t){this.props=e,this.context=t,this.__g=0}function Nt(e,t){if(t==null)return e.__?Nt(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Nt(e):null}function Ys(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=n.__e;break}return Ys(e)}}function Si(e){(8&e.__g||!(e.__g|=8)||!bt.push(e)||Zn++)&&xi==J.debounceRendering||((xi=J.debounceRendering)||queueMicrotask)(hh)}function hh(){for(var e,t,n,r,o,i,s,l,a=1;bt.length;)bt.length>a&&bt.sort(Ws),e=bt.shift(),a=bt.length,8&e.__g&&(n=void 0,o=(r=(t=e).__v).__e,i=[],s=[],(l=t.__P)&&((n=ht({},r)).__v=r.__v+1,J.vnode&&J.vnode(n),ao(l,n,r,t.__n,l.namespaceURI,32&r.__u?[o]:null,i,o??Nt(r),!!(32&r.__u),s,l.ownerDocument),n.__v=r.__v,n.__.__k[n.__i]=n,Zs(i,n,s),n.__e!=o&&Ys(n)));Zn=0}function Qs(e,t,n,r,o,i,s,l,a,h,d,f){var c,g,p,v,I,P,S,y=r&&r.__k||Xs,b=t.length;for(a=fh(n,t,y,a,b),c=0;c<b;c++)(p=n.__k[c])!=null&&(g=p.__i==-1?mn:y[p.__i]||mn,p.__i=c,P=ao(e,p,g,o,i,s,l,a,h,d,f),v=p.__e,p.ref&&g.ref!=p.ref&&(g.ref&&co(g.ref,null,p),d.push(p.ref,p.__c||v,p)),I==null&&v!=null&&(I=v),(S=!!(4&p.__u))||g.__k===p.__k?a=Js(p,a,e,S):typeof p.type=="function"&&P!==void 0?a=P:v&&(a=v.nextSibling),p.__u&=-7);return n.__e=I,a}function fh(e,t,n,r,o){var i,s,l,a,h,d=n.length,f=d,c=0;for(e.__k=new Array(o),i=0;i<o;i++)(s=t[i])!=null&&typeof s!="boolean"&&typeof s!="function"?(a=i+c,(s=e.__k[i]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?jn(null,s,null,null,null):or(s)?jn(Ft,{children:s},null,null,null):s.constructor==null&&s.__b>0?jn(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=e,s.__b=e.__b+1,l=null,(h=s.__i=ph(s,n,a,f))!=-1&&(f--,(l=n[h])&&(l.__u|=2)),l==null||l.__v==null?(h==-1&&(o>d?c--:o<d&&c++),typeof s.type!="function"&&(s.__u|=4)):h!=a&&(h==a-1?c--:h==a+1?c++:(h>a?c--:c++,s.__u|=4))):e.__k[i]=null;if(f)for(i=0;i<d;i++)(l=n[i])!=null&&(2&l.__u)==0&&(l.__e==r&&(r=Nt(l)),tl(l,l));return r}function Js(e,t,n,r){var o,i;if(typeof e.type=="function"){for(o=e.__k,i=0;o&&i<o.length;i++)o[i]&&(o[i].__=e,t=Js(o[i],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=Nt(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function ph(e,t,n,r){var o,i,s,l=e.key,a=e.type,h=t[n],d=h!=null&&(2&h.__u)==0;if(h===null&&e.key==null||d&&l==h.key&&a==h.type)return n;if(r>(d?1:0)){for(o=n-1,i=n+1;o>=0||i<t.length;)if((h=t[s=o>=0?o--:i++])!=null&&(2&h.__u)==0&&l==h.key&&a==h.type)return s}return-1}function _i(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n??""}function Fn(e,t,n,r,o){var i;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||_i(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||_i(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")i=t!=(t=t.replace(Gs,"$1")),(t=t.slice(2))[0].toLowerCase()!=t[0]&&(t=t.toLowerCase()),e.__l||(e.__l={}),e.__l[t+i]=n,n?r?n.l=r.l:(n.l=io,e.addEventListener(t,i?Hr:zr,i)):e.removeEventListener(t,i?Hr:zr,i);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Ci(e){return function(t){if(this.__l){var n=this.__l[t.type+e];if(t.u==null)t.u=io++;else if(t.u<n.l)return;return n(J.event?J.event(t):t)}}}function ao(e,t,n,r,o,i,s,l,a,h,d){var f,c,g,p,v,I,P,S,y,b,w,C,F,se,W,he,j,Z,le,G,Ae,K=t.type;if(t.constructor!=null)return null;128&n.__u&&(a=!!(32&n.__u),n.__c.__z&&(l=t.__e=n.__e=(i=n.__c.__z)[0],n.__c.__z=null)),(f=J.__b)&&f(t);e:if(typeof K=="function")try{if(S=t.props,y="prototype"in K&&K.prototype.render,b=(f=K.contextType)&&r[f.__c],w=f?b?b.props.value:f.__:r,n.__c?2&(c=t.__c=n.__c).__g&&(c.__g|=1,P=!0):(y?t.__c=c=new K(S,w):(t.__c=c=new Un(S,w),c.constructor=K,c.render=mh),b&&b.sub(c),c.props=S,c.state||(c.state={}),c.context=w,c.__n=r,g=!0,c.__g|=8,c.__h=[],c._sb=[]),y&&c.__s==null&&(c.__s=c.state),y&&K.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=ht({},c.__s)),ht(c.__s,K.getDerivedStateFromProps(S,c.__s))),p=c.props,v=c.state,c.__v=t,g)y&&K.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),y&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(y&&K.getDerivedStateFromProps==null&&S!==p&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(S,w),!(4&c.__g)&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(S,c.__s,w)===!1||t.__v==n.__v){for(t.__v!=n.__v&&(c.props=S,c.state=c.__s,c.__g&=-9),t.__e=n.__e,t.__k=n.__k,t.__k.some(function($){$&&($.__=t)}),C=0;C<c._sb.length;C++)c.__h.push(c._sb[C]);c._sb=[],c.__h.length&&s.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(S,c.__s,w),y&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(p,v,I)})}if(c.context=w,c.props=S,c.__P=e,c.__g&=-5,F=J.__r,se=0,y){for(c.state=c.__s,c.__g&=-9,F&&F(t),f=c.render(c.props,c.state,c.context),W=0;W<c._sb.length;W++)c.__h.push(c._sb[W]);c._sb=[]}else do c.__g&=-9,F&&F(t),f=c.render(c.props,c.state,c.context),c.state=c.__s;while(8&c.__g&&++se<25);c.state=c.__s,c.getChildContext!=null&&(r=ht({},r,c.getChildContext())),y&&!g&&c.getSnapshotBeforeUpdate!=null&&(I=c.getSnapshotBeforeUpdate(p,v)),he=f,f!=null&&f.type===Ft&&f.key==null&&(he=el(f.props.children)),l=Qs(e,or(he)?he:[he],t,n,r,o,i,s,l,a,h,d),t.__u&=-161,c.__h.length&&s.push(c),P&&(c.__g&=-4)}catch($){if(t.__v=null,a||i!=null)if($.then){for(j=0,Z=!1,t.__u|=a?160:128,t.__c.__z=[],le=0;le<i.length;le++)(G=i[le])==null||Z||(G.nodeType==8&&G.data=="$s"?(j>0&&t.__c.__z.push(G),j++,i[le]=null):G.nodeType==8&&G.data=="/$s"?(--j>0&&t.__c.__z.push(G),Z=j===0,l=i[le],i[le]=null):j>0&&(t.__c.__z.push(G),i[le]=null));if(!Z){for(;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;i[i.indexOf(l)]=null,t.__c.__z=[l]}t.__e=l}else{for(Ae=i.length;Ae--;)lo(i[Ae]);$r(t)}else t.__e=n.__e,t.__k=n.__k,$.then||$r(t);J.__e($,t,n)}else l=t.__e=gh(n.__e,t,n,r,o,i,s,a,h,d);return(f=J.diffed)&&f(t),128&t.__u?void 0:l}function $r(e){e&&e.__c&&(e.__c.__g|=4),e&&e.__k&&e.__k.forEach($r)}function Zs(e,t,n){for(var r=0;r<n.length;r++)co(n[r],n[++r],n[++r]);J.__c&&J.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(i){i.call(o)})}catch(i){J.__e(i,o.__v)}})}function el(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:or(e)?e.map(el):ht({},e)}function gh(e,t,n,r,o,i,s,l,a,h){var d,f,c,g,p,v,I,P,S=n.props,y=t.props,b=t.type;if(b=="svg"?o="http://www.w3.org/2000/svg":b=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(d=0;d<i.length;d++)if((p=i[d])&&"setAttribute"in p==!!b&&(b?p.localName==b:p.nodeType==3)){e=p,i[d]=null;break}}if(e==null){if(b==null)return h.createTextNode(y);e=h.createElementNS(o,b,y.is&&y),l&&(J.__m&&J.__m(t,i),l=!1),i=null}if(b==null)S===y||l&&e.data==y||(e.data=y);else{if(i=i&&so.call(e.childNodes),S=n.props||mn,!l&&i!=null)for(S={},d=0;d<e.attributes.length;d++)S[(p=e.attributes[d]).name]=p.value;for(d in S)if(p=S[d],d!="children"){if(d=="dangerouslySetInnerHTML")c=p;else if(!(d in y)){if(d=="value"&&"defaultValue"in y||d=="checked"&&"defaultChecked"in y)continue;Fn(e,d,null,p,o)}}for(d in P=1&n.__u,y)p=y[d],d=="children"?g=p:d=="dangerouslySetInnerHTML"?f=p:d=="value"?v=p:d=="checked"?I=p:l&&typeof p!="function"||S[d]===p&&!P||Fn(e,d,p,S[d],o);if(f)l||c&&(f.__html==c.__html||f.__html==e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(c&&(e.innerHTML=""),Qs(b=="template"?e.content:e,or(g)?g:[g],t,n,r,b=="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,s,i?i[0]:n.__k&&Nt(n,0),l,a,h),i!=null)for(d=i.length;d--;)lo(i[d]);l||(d="value",b=="progress"&&v==null?e.removeAttribute("value"):v==null||v===e[d]&&(b!=="progress"||v)||Fn(e,d,v,S[d],o),d="checked",I!=null&&I!=e[d]&&Fn(e,d,I,S[d],o))}return e}function co(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(o){J.__e(o,n)}}function tl(e,t,n){var r,o;if(J.unmount&&J.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||co(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){J.__e(i,t)}r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&tl(r[o],t,n||typeof e.type!="function");n||lo(e.__e),e.__e&&e.__e.__l&&(e.__e.__l=null),e.__e=e.__c=e.__=null}function mh(e,t,n){return this.constructor(e,n)}function qr(e,t){var n,r,o,i;t==document&&(t=document.documentElement),J.__&&J.__(e,t),r=(n=!!(e&&32&e.__u))?null:t.__k,e=t.__k=Or(Ft,null,[e]),o=[],i=[],ao(t,e,r||mn,mn,t.namespaceURI,r?null:t.firstChild?so.call(t.childNodes):null,o,r?r.__e:t.firstChild,n,i,t.ownerDocument),Zs(o,e,i)}function vh(e,t){e.__u|=32,qr(e,t)}J={__e:function(e,t,n,r){for(var o,i,s;t=t.__;)if((o=t.__c)&&!(1&o.__g)){o.__g|=4;try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(e)),s=8&o.__g),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),s=8&o.__g),s)return void(o.__g|=2)}catch(l){e=l}}throw Zn=0,e}},Ks=0,Un.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=ht({},this.state),typeof e=="function"&&(e=e(ht({},n),this.props)),e&&ht(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Si(this))},Un.prototype.forceUpdate=function(e){this.__v&&(this.__g|=4,e&&this.__h.push(e),Si(this))},Un.prototype.render=Ft,bt=[],Zn=0,Ws=function(e,t){return e.__v.__b-t.__v.__b},Gs=/(PointerCapture)$|Capture$/i,io=0,zr=Ci(!1),Hr=Ci(!0);var yh=0;function E(e,t,n,r,o,i){t||(t={});var s,l,a=t;if("ref"in a&&typeof e!="function")for(l in a={},t)l=="ref"?s=t[l]:a[l]=t[l];var h={type:e,props:a,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--yh,__i:-1,__u:0,__source:o,__self:i};return J.vnode&&J.vnode(h),h}const bh=16,Ih=16,wh={};function cn({name:e,remappedFrom:t,token:n,width:r,height:o,viewBox:i,label:s,alignCapitals:l=!1}){"use no memo";const a=`#${e.replace(/^#/,"")}`,{width:h,height:d,viewBox:f}=wh[e]??{width:bh,height:Ih},c=r??h,g=o??d,p=i??f??`0 0 ${h} ${d}`,v=s!=null?{"aria-label":s,role:"img"}:{"aria-hidden":!0};return E("svg",{"data-icon-name":t??e,"data-icon-token":n,"data-align-capitals":l,...v,viewBox:p,width:c,height:g,children:E("use",{href:a})})}const ki=e=>{if(e.length<2)return[e,""];const t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]},xh=e=>{if(e.length<4)return[e,""];const t=e.lastIndexOf(".")+1,n=e.length-t>10,r=t>=1&&!n?t:Math.ceil(e.length/2);return[e.slice(0,r),e.slice(r)]},Sh=e=>{if(e.length<4)return[e,""];const t=e.lastIndexOf("/")+1,n=e.length-t>25,r=t>=1&&!n?t:Math.ceil(e.length/2);return[e.slice(0,r),e.slice(r)]},_h=(e,{splitIndex:t}={})=>{if(typeof t!="number"){const n=Math.ceil(e.length/2);return[e.slice(0,n),e.slice(n)]}return[e.slice(0,t),e.slice(t)]},Ch=(e,{splitOffset:t}={})=>{if(typeof t!="number"||t<=0||t>=e.length){const r=Math.ceil(e.length/2);return[e.slice(0,r),e.slice(r)]}const n=e.length-t;return[e.slice(0,n),e.slice(n)]},kh=(e,{splitOffset:t}={})=>{if(typeof t!="number"||t<=0||t>=e.length){const r=Math.ceil(e.length/2);return[e.slice(0,r),e.slice(r)]}const n=t;return[e.slice(0,n),e.slice(n)]};function Ph({children:e,marker:t,variant:n="default"}){"use no memo";return E("div",{"aria-hidden":!0,"data-truncate-marker-cell":!0,children:E("div",{"data-truncate-marker":!0,children:typeof t=="function"?t({children:e}):n==="fade"?E("span",{"data-truncate-fade":!0}):t})})}function Eh(e){"use no memo";const{mode:t,children:n}=e;return E("div",{children:[E("div",{"data-truncate-content":"visible",children:t==="fruncate"?E("span",{children:n}):n}),E("div",{"data-truncate-content":"overflow","aria-hidden":!0,children:t==="fruncate"?E("span",{children:n}):n})]})}function nl({children:e,mode:t="truncate",marker:n="…",variant:r="default",...o}){"use no memo";const i=E(Eh,{mode:t,children:e},"content"),s=E(Ph,{marker:n,mode:t,variant:r},"marker");return E("div",{"data-truncate-container":t,"data-truncate-variant":r,...o,children:E("div",{"data-truncate-grid":!0,children:t==="truncate"?[i,s]:[s,i,E("div",{"data-truncate-fill":!0},"fill")]})})}function Kn({children:e,...t}){"use no memo";return E(nl,{mode:"truncate",...t,children:e})}function Cr({children:e,...t}){"use no memo";return E(nl,{mode:"fruncate",...t,children:e})}function Dh({children:e,contents:t,priority:n="end",split:r="center",minimumLength:o=12,className:i,style:s,...l}){"use no memo";let a=null,h=null;if(Array.isArray(t)){if(t.length!==2)return console.error("MiddleTruncate: contents must be an array of two items"),null;a=E(Kn,{...l,children:t[0]}),h=E(Cr,{...l,children:t[1]})}else{if(typeof e!="string")return console.error("MiddleTruncate: children must be a string"),null;if(e.length===0)return E("div",{className:i,style:s});if(e.length<o)return n==="end"?E(Cr,{...l,className:i,style:s,children:e}):E(Kn,{...l,className:i,style:s,children:e});let d=null,f=null,c=null;if(typeof r=="string")r==="center"?d=ki:r==="extension"?d=xh:r==="leaf-path"&&(d=Sh);else if(typeof r=="number")d=_h,f=r;else if(Array.isArray(r)){const[b,w]=r;c=w,b==="last"?d=Ch:b==="first"&&(d=kh)}else typeof r=="function"&&(d=r);d??=ki;const[g,p]=d(e,{priority:n,variant:l.variant,splitIndex:typeof f=="number"?f:void 0,splitOffset:typeof c=="number"?c:void 0}),v=g.length>=p.length,I=n==="equal"&&!v,P=n==="equal"&&v,S={},y={};I&&(S.marker=""),P&&(y.marker=""),a=E(Kn,{...l,...S,children:g}),h=E(Cr,{...l,...y,children:p})}return E("div",{"data-truncate-group-container":"middle",className:i,style:s,children:[E("div",{"data-truncate-segment-priority":n==="start"||n==="equal"?"1":"2",children:a}),E("div",{"data-truncate-segment-priority":n==="end"||n==="equal"?"1":"2",children:h})]})}const jr={endIndex:-1,startIndex:-1};function Th(e,t,n){return Math.min(Math.max(e,t),n)}function Pi(e,t){return e<0||t<e?jr:{endIndex:t,startIndex:e}}function Ur(e){return e.startIndex<0||e.endIndex<e.startIndex}function Mh(e,t){return Ur(e)?0:(e.endIndex-e.startIndex+1)*t}function Ei(e,t,n){if(t<=0)return-1;const r=t*n;return e<=0?0:e>=r?t:Math.floor(e/n)}function Ah(e,t,n){return t<=0||e<=0?-1:e>=t*n?t-1:Math.ceil(e/n)-1}function Nh(e){const t=new Map;return e.forEach((n,r)=>{if(n.kind!=="directory"||!n.isExpanded)return;const o=n.ancestorPaths.length,i=t.get(o);if(i==null){t.set(o,[r]);return}i.push(r)}),t}function Rh(e,t){let n=0,r=e.length-1,o=-1;for(;n<=r;){const i=Math.floor((n+r)/2),s=e[i];if(s==null)break;if(s<=t){o=i,n=i+1;continue}r=i-1}return o}function Vh(e){const t=new Map,n=[];for(let o=0;o<e.length;o+=1){const i=e[o];if(i==null)continue;const s=i.kind==="directory"&&i.isExpanded?[...i.ancestorPaths,i.path]:i.ancestorPaths;let l=0;for(;l<n.length&&l<s.length&&n[l]===s[l];)l+=1;for(let a=n.length-1;a>=l;a-=1){const h=n[a];h!=null&&t.set(h,o-1)}n.length=l;for(let a=l;a<s.length;a+=1){const h=s[a];h!=null&&n.push(h)}}const r=e.length-1;for(const o of n)t.set(o,r);return t}function rl(e,t,n){if(e.length===0||t<=0)return[];const r=Vh(e),o=Nh(e),i=[];for(let s=0;s<e.length;s+=1){const l=o.get(s);if(l==null||l.length===0)break;const a=t+s*n;let h=Rh(l,Math.min(e.length-1,Math.floor(a/n))),d=null;for(;h>=0;){const f=l[h],c=f==null?null:e[f]??null;if(c!=null&&(s===0||c.ancestorPaths[s-1]===i[s-1]?.path)){d=c;break}h-=1}if(d==null)break;i.push(d)}return i.map((s,l)=>{const a=l*n,h=(r.get(s.path)??e.length-1)+1;if(h>=e.length)return{row:s,top:a};const d=h*n-t;return{row:s,top:Math.min(a,d-n)}}).filter(s=>s.top+n>0)}function Lh(e,t){const n=t.totalRowCount??e.length,r=n*t.itemHeight,o=Math.max(0,t.viewportHeight),i=Math.max(0,Math.floor(t.overscan)),s=Math.max(0,r-o),l=Th(t.scrollTop,0,s),a=t.stickyRows??rl(e,l,t.itemHeight),h=a.reduce((C,F)=>Math.max(C,F.top+t.itemHeight),0),d=Math.min(r,l+h),f=Math.max(0,o-h),c=Math.max(0,r-d),g=Ei(l,n,t.itemHeight),p=Ei(d,n,t.itemHeight),v=h<=0||g<0||g>=n?-1:g,I=v===-1?-1:Math.min(n-1,p-1),P=v===-1||I<v?0:I-v+1,S=f<=0||p>=n?jr:Pi(p,Ah(d+f,n,t.itemHeight)),y=I+1,b=Ur(S)?jr:Pi(Math.max(y,S.startIndex-i),Math.min(n-1,S.endIndex+i)),w=Mh(b,t.itemHeight);return{occlusion:{firstOccludedIndex:v,lastOccludedIndex:I,occludedCount:P},physical:{itemHeight:t.itemHeight,maxScrollTop:s,overscan:i,scrollTop:l,totalHeight:r,totalRowCount:n,viewportHeight:o},projected:{contentHeight:c,paneHeight:f,paneTop:d},sticky:{height:h,rows:a},visible:S,window:{endIndex:b.endIndex,height:w,offsetTop:Ur(b)?0:b.startIndex*t.itemHeight,startIndex:b.startIndex}}}const Fh={added:"A",deleted:"D",ignored:null,modified:"M",renamed:"R",untracked:"U"},Bh={added:"Git status: added",deleted:"Git status: deleted",ignored:"Git status: ignored",modified:"Git status: modified",renamed:"Git status: renamed",untracked:"Git status: untracked"},zh="Contains git status items";function ol(e){const{currentScrollTop:t,focusedIndex:n,itemHeight:r,topInset:o=0,viewportHeight:i}=e;if(n<0)return null;const s=Math.max(0,o),l=n*r,a=l+r;if(l<t+s){const h=Math.max(0,l-s);return h===t?null:h}if(a>t+i){const h=a-i;return h===t?null:h}return null}function Hh(e){const{currentScrollTop:t,focusedIndex:n,itemHeight:r,offset:o,topInset:i=0,totalHeight:s,viewportHeight:l}=e;if(o==="nearest")return ol({currentScrollTop:t,focusedIndex:n,itemHeight:r,topInset:i,viewportHeight:l});if(n<0)return null;const a=Math.max(0,i),h=n*r,d=Math.max(0,l-a),f=o==="center"?a+Math.max(0,(d-r)/2):a,c=Math.max(0,s-l),g=Math.max(0,Math.min(h-f,c));return g===t?null:g}function Oh(e){const{currentScrollTop:t,focusedIndex:n,itemHeight:r,targetViewportOffset:o,totalHeight:i,viewportHeight:s}=e;if(n<0)return null;const l=Math.max(0,o),a=n*r,h=a+r,d=t+l,f=t+s;if(a>=d&&h<=f)return null;const c=Math.max(0,i-s),g=Math.max(0,Math.min(a-l,c));return g===t?null:g}function Tt(e){if(e==null||!e.isConnected||e===document.body||e===document.documentElement)return!1;e.focus({preventScroll:!0});const t=e.getRootNode();return t instanceof ShadowRoot?t.activeElement===e:document.activeElement===e}function Bn(e){const t=e.getRootNode();if(t instanceof ShadowRoot){const r=t.activeElement;return r instanceof HTMLElement?r:null}const n=document.activeElement;return n instanceof HTMLElement&&e.contains(n)?n:null}function nn(e,t){if(e==null)return t;const n=e.getBoundingClientRect().height;return n>0?n:e.clientHeight>0?e.clientHeight:t}function Di(e,t){return e!=null&&e>0?e:t}function $h(e){const t=e.borderBoxSize,n=Array.isArray(t)?t[0]:t;return n!=null&&Number.isFinite(n.blockSize)&&n.blockSize>0?n.blockSize:e.contentRect.height>0?e.contentRect.height:null}function Ti(e,t,n,r,o=0){const i=ol({currentScrollTop:e.scrollTop,focusedIndex:t,itemHeight:n,topInset:o,viewportHeight:r});return i==null?!1:(e.scrollTop=i,!0)}function qh(e,t,n,r,o,i,s=0){const l=Hh({currentScrollTop:e.scrollTop,focusedIndex:t,itemHeight:n,offset:i,topInset:s,totalHeight:o,viewportHeight:r});return l==null?!1:(e.scrollTop=l,!0)}function rn(e,t,n,r,o,i){const s=Oh({currentScrollTop:e.scrollTop,focusedIndex:t,itemHeight:n,targetViewportOffset:i,totalHeight:o,viewportHeight:r});return s==null?!1:(e.scrollTop=s,!0)}function Mi(e,t,n,r){return n.end<n.start?null:e<n.start?-t:e>n.end?r:null}function jh(e){const{renamingPath:t,previousRenamingPath:n,hasRenderedInput:r}=e;return t==null?"reset":r?n===t?"ignore":"focus-input":"reveal-canonical"}function Uh({ariaLabel:e,isFlattened:t=!1,ref:n,value:r,onBlur:o,onInput:i}){return E("input",{ref:n,"data-item-rename-input":!0,...t?{"data-item-flattened-rename-input":!0}:{},"aria-label":e,value:r,onBlur:o,onInput:i,onClick:s=>s.stopPropagation(),onMouseDown:s=>s.stopPropagation(),onPointerDown:s=>s.stopPropagation()})}function Kh(e){const{row:t,mode:n,targetPath:r,ariaLabel:o,domId:i,isParked:s,itemHeight:l,features:a,state:h,extraStyle:d}=e,f=n==="sticky",c=t.ancestorPaths.at(-1)??"",g={};return h.isFocusRinged&&(g["data-item-focused"]=!0),t.isSelected&&(g["data-item-selected"]=!0),h.isContextHovered&&(g["data-item-context-hover"]="true"),h.isDragTarget&&(g["data-item-drag-target"]=!0),h.isDragging&&(g["data-item-dragging"]=!0),h.effectiveGitStatus!=null&&(g["data-item-git-status"]=h.effectiveGitStatus),h.containsGitChange&&(g["data-item-contains-git-change"]="true"),{"aria-expanded":!f&&t.kind==="directory"?t.isExpanded:void 0,"aria-haspopup":a.contextMenuEnabled?"menu":void 0,"aria-label":o,"aria-level":f?void 0:t.level+1,"aria-posinset":f?void 0:t.posInSet+1,"aria-selected":f?void 0:t.isSelected?"true":"false","aria-setsize":f?void 0:t.setSize,"data-file-tree-sticky-path":f?r:void 0,"data-file-tree-sticky-row":f?"true":void 0,"data-item-context-menu-button-visibility":a.actionLaneEnabled?a.contextMenuButtonVisibility:void 0,"data-item-context-menu-trigger-mode":a.contextMenuEnabled?a.contextMenuTriggerMode:void 0,"data-item-has-context-menu-action-lane":a.actionLaneEnabled?"true":void 0,"data-item-has-git-lane":a.gitLaneActive?"true":void 0,"data-item-parent-path":c.length>0?c:void 0,"data-item-parked":s?"true":void 0,"data-item-path":r,"data-item-type":t.kind==="directory"?"folder":"file","data-type":"item",id:f?void 0:i,role:f?void 0:"treeitem",style:{minHeight:`${l}px`,...d},tabIndex:!f&&t.isFocused?0:-1,...g}}function Wh(e){const{event:t,mode:n,isSearchOpen:r,isDirectory:o}=e,i=t.ctrlKey||t.metaKey,s=t.shiftKey||i,l=t.shiftKey?{additive:i,kind:"range"}:i?{kind:"toggle"}:{kind:"single"};return{closeSearch:r,revealCanonical:n==="sticky",selection:l,toggleDirectory:!s&&o}}var Rt,ce,kr,Ai,Kr=Object.is,vn=0,il=[],de=J,Ni=de.__b,Ri=de.__r,Vi=de.diffed,Li=de.__c,Fi=de.unmount,Bi=de.__;function ir(e,t){de.__h&&de.__h(ce,e,vn||t),vn=0;var n=ce.__H||(ce.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function et(e){return vn=1,Gh(sl,e)}function Gh(e,t,n){var r=ir(Rt++,2);if(r.t=e,!r.__c&&(r.__=[sl(void 0,t),function(l){var a=r.__N?r.__N[0]:r.__[0],h=r.t(a,l);Kr(a,h)||(r.__N=[h,r.__[1]],r.__c.setState({}))}],r.__c=ce,!ce.__f)){var o=function(l,a,h){if(!r.__c.__H)return!0;var d=r.__c.__H.__.filter(function(c){return!!c.__c});if(d.every(function(c){return!c.__N}))return!i||i.call(this,l,a,h);var f=r.__c.props!==l;return d.forEach(function(c){if(c.__N){var g=c.__[0];c.__=c.__N,c.__N=void 0,Kr(g,c.__[0])||(f=!0)}}),i&&i.call(this,l,a,h)||f};ce.__f=!0;var i=ce.shouldComponentUpdate,s=ce.componentWillUpdate;ce.componentWillUpdate=function(l,a,h){if(4&this.__g){var d=i;i=void 0,o(l,a,h),i=d}s&&s.call(this,l,a,h)},ce.shouldComponentUpdate=o}return r.__N||r.__}function zi(e,t){var n=ir(Rt++,3);!de.__s&&uo(n.__H,t)&&(n.__=e,n.u=t,ce.__H.__h.push(n))}function Fe(e,t){var n=ir(Rt++,4);!de.__s&&uo(n.__H,t)&&(n.__=e,n.u=t,ce.__h.push(n))}function L(e){return vn=5,ct(function(){return{current:e}},[])}function ct(e,t){var n=ir(Rt++,7);return uo(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Se(e,t){return vn=8,ct(function(){return e},t)}function Xh(){for(var e;e=il.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Wn),e.__H.__h.forEach(Wr),e.__H.__h=[]}catch(t){e.__H.__h=[],de.__e(t,e.__v)}}de.__b=function(e){ce=null,Ni&&Ni(e)},de.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Bi&&Bi(e,t)},de.__r=function(e){Ri&&Ri(e),Rt=0;var t=(ce=e.__c).__H;t&&(kr===ce?(t.__h=[],ce.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.forEach(Wn),t.__h.forEach(Wr),t.__h=[],Rt=0)),kr=ce},de.diffed=function(e){Vi&&Vi(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(il.push(t)!==1&&Ai===de.requestAnimationFrame||((Ai=de.requestAnimationFrame)||Yh)(Xh)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),kr=ce=null},de.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Wn),n.__h=n.__h.filter(function(r){return!r.__||Wr(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],de.__e(r,n.__v)}}),Li&&Li(e,t)},de.unmount=function(e){Fi&&Fi(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Wn(r)}catch(o){t=o}}),n.__H=void 0,t&&de.__e(t,n.__v))};var Hi=typeof requestAnimationFrame=="function";function Yh(e){var t,n=function(){clearTimeout(r),Hi&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);Hi&&(t=requestAnimationFrame(n))}function Wn(e){var t=ce,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),ce=t}function Wr(e){var t=ce;e.__c=e.__(),ce=t}function uo(e,t){return!e||e.length!==t.length||t.some(function(n,r){return!Kr(n,e[r])})}function sl(e,t){return typeof t=="function"?t(e):t}function Qh(e,t=null,n=null){"use no memo";const r=e.flattenedSegments;return r==null||r.length===0?t??e.name:E("span",{"data-item-flattened-subitems":!0,children:r.map((o,i)=>{const s=i===r.length-1;return E(Ft,{children:[E("span",{"data-item-flattened-subitem":o.path,"data-item-flattened-subitem-drag-target":n===o.path?"true":void 0,children:s&&t!=null?t:E(Kn,{children:o.name})}),i<r.length-1?" / ":""]},o.path)})})}function Mt(e){return e.isFlattened?e.flattenedSegments?.findLast(t=>t.isTerminal)?.path??e.path:e.path}function Gr(e){const t=e.flattenedSegments;return t==null||t.length===0?e.name:t.map(n=>n.name).join(" / ")}function Oi(e,t,n,r){return e.map((o,i)=>{const s=i*n,l=o.subtreeEndIndex+1;if(l>=r)return{row:o.row,top:s};const a=l*n-t;return{row:o.row,top:Math.min(s,a-n)}}).filter(o=>o.top+n>0)}function Pr({controller:e,itemHeight:t,overscan:n,scrollTop:r,stickyFolders:o,viewportHeight:i}){const s=e.getVisibleCount(),l=o&&s>0?e.getStickyRowCandidates(r,t):[],a=l==null&&o&&s>0?e.getVisibleRows(0,s-1):[],h=Lh(a,{itemHeight:t,overscan:n,scrollTop:r,stickyRows:l==null?void 0:Oi(l,r,t,s),totalRowCount:s,viewportHeight:i}),d=o&&r<=0&&s>0?e.getStickyRowCandidates(1,t):[],f=d!=null&&r<=0?Oi(d,1,t,s):o&&r<=0&&a.length>0?rl(a,1,t):h.sticky.rows;return{overlayHeight:f.reduce((c,g)=>Math.max(c,g.top+t),0),overlayRows:f,snapshot:h,visibleRows:a}}const Jh=400,$i=10,Dt=40,qi=18;function Zh(e,t,n){const r=e,o=document.elementFromPoint?.bind(document)??null,i=r.elementFromPoint?.(t,n)??o?.(t,n)??null;return e instanceof ShadowRoot&&(i==null||!e.contains(i))?ef(e,t,n):i instanceof HTMLElement?i:null}function ef(e,t,n){const r=Array.from(e.querySelectorAll('[data-type="item"], [data-item-flattened-subitem]'));for(let o=r.length-1;o>=0;o--){const i=r[o],s=i.getBoundingClientRect();if(t>=s.left&&t<=s.right&&n>=s.top&&n<=s.bottom)return i}return null}function ji(e){const t=e?.closest?.('[data-type="item"]');if(!(t instanceof HTMLElement))return null;const n=t.dataset.itemPath??null;if(n==null)return null;const r=e?.closest?.("[data-item-flattened-subitem]"),o=r instanceof HTMLElement?r.getAttribute("data-item-flattened-subitem")??null:null;if(o!=null&&o.endsWith("/"))return{directoryPath:o,flattenedSegmentPath:o,hoveredPath:n,kind:"directory"};if(t.dataset.itemType==="folder")return{directoryPath:n,flattenedSegmentPath:null,hoveredPath:n,kind:"directory"};const i=t.dataset.itemParentPath??null;return i==null||i.length===0?{directoryPath:null,flattenedSegmentPath:null,hoveredPath:n,kind:"root"}:{directoryPath:i,flattenedSegmentPath:null,hoveredPath:n,kind:"directory"}}function Ui(e){const t=e.cloneNode(!0);return t.removeAttribute("id"),t.dataset.fileTreeDragPreview="true",t.setAttribute("aria-hidden","true"),t.tabIndex=-1,Object.assign(t.style,{boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",left:"0px",margin:"0",pointerEvents:"none",position:"fixed",top:"0px",willChange:"transform",zIndex:"10000"}),t}function tf(){return navigator.vendor!=="Apple Computer, Inc."}function nf(e,t){const n=e-t.top;if(n<Dt){const o=Math.max(0,n);return-Math.ceil((Dt-o)/Dt*qi)}const r=t.bottom-e;if(r<Dt){const o=Math.max(0,r);return Math.ceil((Dt-o)/Dt*qi)}return 0}function rf(e,t){if(e!=null){const n=Fh[e];return n==null?null:{text:n,title:Bh[e]}}return t?{icon:{name:"file-tree-icon-dot",width:6,height:6},title:zh}:null}function of(e,t,n){if(t==null||t.size===0)return null;const r=[];for(let o=e.length-1;o>=0;o-=1){const i=e[o],s=n.get(i);if(s!=null){for(const l of r)n.set(l,s);return s?"ignored":null}if(t.has(i)){n.set(i,!0);for(const l of r)n.set(l,!0);return"ignored"}r.push(i)}for(const o of r)n.set(o,!1);return null}function Ki(e){return e!=null&&"toggle"in e}function ll(e){return e.code==="Space"||e.key===" "||e.key==="Spacebar"}function sf(e){return e.key.length===1&&/^[\p{L}\p{N}]$/u.test(e.key)&&!e.ctrlKey&&!e.metaKey&&!e.altKey}function lf(e){return e==null?"":`[data-item-section="spacing-item"][data-ancestor-path="${e.replaceAll("\\","\\\\").replaceAll('"','\\"')}"] { opacity: 1; }`}function al(e){return e.shiftKey&&e.key==="F10"||e.key==="ContextMenu"}function af(e,t){return t&&al(e)||(e.ctrlKey||e.metaKey)&&ll(e)?!0:e.key==="ArrowDown"||e.key==="ArrowLeft"||e.key==="ArrowRight"||e.key==="ArrowUp"}const cf=new Set(["ArrowDown","ArrowLeft","ArrowRight","ArrowUp","End","Home","PageDown","PageUp"]);function Wi(e){for(const t of e.composedPath())if(t instanceof HTMLElement&&(t.dataset.fileTreeContextMenuRoot==="true"||t.dataset.type==="context-menu-anchor"||t.dataset.type===Dr||t.getAttribute("slot")===on))return!0;return!1}function uf(e){return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width,x:e.x,y:e.y}}function df(e,t){return{bottom:t,height:0,left:e,right:e,top:t,width:0,x:e,y:t}}function hf(e,t){if(e==null)return t.offsetTop;const n=t.getBoundingClientRect(),r=e.getBoundingClientRect();return n.top-r.top}function Gi(e,t,n){if(n==null){e.delete(t);return}e.set(t,n)}function Xi(e,t,n){if(e==null)return null;const r=t.get(e)??null;if(r!=null)return r;const o=n.get(e)??null;return o?.dataset.itemParked==="true"?null:o}function ff(e){if(e==null)return[];const t=[];for(const n of e.querySelectorAll('button[data-file-tree-sticky-row="true"]')){if(!(n instanceof HTMLElement))continue;const r=n.dataset.fileTreeStickyPath;r!=null&&t.push(r)}return t}function pf(e,t){if(e==null||t==null)return null;for(const n of e.querySelectorAll('button[data-item-focused="true"][data-item-parked="true"]'))if(n instanceof HTMLElement&&n.dataset.itemPath===t)return n;return null}function gf(e,t,n,r,o,i,s){const l=Math.max(0,i-o),a=t?.getBoundingClientRect()??null,h=a==null||n==null?null:n.getBoundingClientRect().top-a.top,d=pf(e,r),f=a==null||d==null?null:d.getBoundingClientRect().top-a.top;return Math.max(0,Math.min(f??Math.max(h??0,l),Math.max(0,s-o)))}function Yi(e,t){return{kind:e.kind,name:Gr(e),path:t}}function mf(e){return e==null?void 0:`${e}__tree`}function cl(e,t,n){if(e!=null)return`${e}__focused-item-${encodeURIComponent(t)}${n?"__parked":""}`}function Qi(e){return e==="file-tree-icon-chevron"||e==="file-tree-icon-dot"||e==="file-tree-icon-file"||e==="file-tree-icon-lock"}function Ji(e,t){if(e==null)return null;if("text"in e)return E("span",{title:e.title,children:e.text});const n=typeof e.icon=="string"?Qi(e.icon)?t(e.icon):{name:e.icon}:Qi(e.icon.name)?(()=>{const r=t(e.icon.name),{name:o,...i}=e.icon;return{...r,...i}})():e.icon;return E("span",{title:e.title,children:E(cn,{...n})})}function Zi(e){e!=null&&Tt(e.querySelector(["button:not([disabled])","[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(", "))??e)}function vf(e,t,{actionLaneEnabled:n=!1,customDecoration:r=null,decorationLaneEnabled:o=!1,dragTargetFlattenedSegmentPath:i=null,gitDecoration:s=null,gitLaneActive:l=!1,renameInput:a=null,showDecorativeActionAffordance:h=!1}={}){const d=Mt(e);return E(Ft,{children:[e.depth>0?E("div",{"data-item-section":"spacing",children:Array.from({length:e.depth}).map((f,c)=>E("div",{"data-item-section":"spacing-item","data-ancestor-path":e.ancestorPaths[c]},c))}):null,E("div",{"data-item-section":"icon",children:e.kind==="directory"?E(cn,{...t("file-tree-icon-chevron")}):E(cn,{...t("file-tree-icon-file",d)})}),E("div",{"data-item-section":"content",children:e.isFlattened?Qh(e,a,i):a??E(Dh,{minimumLength:5,split:"extension",children:e.name})}),o?E("div",{"data-item-section":"decoration",children:r!=null?Ji(r,t):null}):null,l?E("div",{"data-item-section":"git",children:Ji(s,t)}):null,n?E("div",{"data-item-section":"action",children:h?E("span",{"aria-hidden":"true","data-item-action-affordance":"decorative",children:E(cn,{...t("file-tree-icon-ellipsis")})}):null}):null]})}function Gn(e,t,n,r={}){const{controller:o,renameView:i,visualFocusPath:s,contextHoverPath:l,draggedPathSet:a,dragTarget:h,dragAndDropEnabled:d,shouldSuppressContextMenu:f,handleRowDragStart:c,handleRowDragEnd:g,handleRowTouchStart:p,instanceId:v,itemHeight:I,gitStatusByPath:P,ignoredGitDirectories:S,ignoredInheritanceCache:y,directoriesWithGitChanges:b,gitLaneActive:w,contextMenuEnabled:C,contextMenuTriggerMode:F,contextMenuButtonTriggerEnabled:se,contextMenuButtonVisibility:W,contextMenuRightClickEnabled:he,registerRenameInput:j,registerButton:Z,resolveIcon:le,renderDecorationForRow:G,openContextMenuForRow:Ae,onRowClick:K,onKeyDown:$}=e,te=Mt(t),{isParked:_e=!1,mode:je="flow",style:Ne}=r,Re=je==="sticky",ke=P?.get(te)??null??of(t.ancestorPaths,S,y),ot=t.kind==="directory"&&(b?.has(te)??!1),ze=G(t,te),Ue=rf(ke,ot),Pe=C&&se,He=ze!=null||w||Pe,pt=Pe&&W==="always",Ie=i.getPath()===te,_=Ie?i.getValue():"",R=Re||!Ie?null:E(Uh,{ref:j,ariaLabel:`Rename ${Gr(t)}`,isFlattened:t.isFlattened,value:_,onBlur:()=>{i.commit()},onInput:U=>{i.setValue(U.currentTarget.value)}}),q=vf(t,le,{actionLaneEnabled:Pe,customDecoration:ze,decorationLaneEnabled:He,dragTargetFlattenedSegmentPath:h?.flattenedSegmentPath??null,gitDecoration:Ue,gitLaneActive:w,renameInput:R,showDecorativeActionAffordance:pt}),B={...Kh({ariaLabel:Gr(t),domId:t.isFocused?cl(v,te,_e):void 0,extraStyle:Ne,features:{actionLaneEnabled:Pe,contextMenuButtonVisibility:Pe?W:null,contextMenuEnabled:C,contextMenuTriggerMode:C?F:null,gitLaneActive:w},isParked:_e,itemHeight:I,mode:je,row:t,state:{containsGitChange:ot,effectiveGitStatus:ke,isContextHovered:l===te,isDragTarget:h?.kind==="directory"&&h.directoryPath===te,isDragging:a?.has(te)===!0,isFocusRinged:t.isFocused&&s===te},targetPath:te}),key:n,onContextMenu:C||d?U=>{if(f()){U.preventDefault();return}C&&(U.preventDefault(),he&&(o.focusMountedPathFromInput(te),Ae(t,te,{anchorRect:df(U.clientX,U.clientY),source:"right-click"})))}:void 0,onFocus:Re?void 0:()=>{o.focusMountedPathFromInput(te)},onKeyDown:Re?void 0:$,ref:U=>{Z(te,U)}};return!Re&&Ie?E("div",{...B,children:q}):E("button",{...B,type:"button",draggable:d&&!_e,onDragEnd:d&&!_e?g:void 0,onDragStart:d&&!_e?U=>{c(U,t,te)}:void 0,onMouseDown:U=>{if(Re){U.preventDefault();return}o.isSearchOpen()&&U.preventDefault()},onTouchStart:d&&!_e?U=>{p(U,t,te)}:void 0,onClick:U=>{K(U,t,te,je)},children:q})}function yf(e,t,n){return t.end<t.start?[]:e.controller.getVisibleRows(t.start,t.end).filter(r=>!n.has(Mt(r))).map((r,o)=>Gn(e,r,t.start+o))}function es({composition:e,controller:t,gitStatusByPath:n,ignoredGitDirectories:r,directoriesWithGitChanges:o,icons:i,instanceId:s,itemHeight:l=$s,overscan:a=Fd,renamingEnabled:h=!1,renderRowDecoration:d,searchBlurBehavior:f="close",searchEnabled:c=!1,searchFakeFocus:g=!1,slotHost:p,stickyFolders:v=!1,initialViewportHeight:I=qs}){"use no memo";const P=L(null),S=L(null),y=L(!1),b=L(null),w=L(null),C=L(null),F=L(null),se=L(null),W=L(new Map),he=L(new Map),j=L(()=>{}),Z=L(null),le=L(0),G=L(!1),Ae=L(null);Ae.current!==t&&(G.current=!1,Ae.current=t);const K=L(!1),$=L(null),te=L(null),_e=L(!1),je=L(null),Ne=L(null),Re=L(null),ke=L(null),ot=L(null),ze=L(null),Ue=L(null),Pe=L(null),He=L(!1),pt=L(null),Ie=L(null),_=L(null),R=L(null),q=ct(()=>new Map,[]),[,B]=et(0),[U,me]=et(null),[oe,we]=et(null),[Oe,bn]=et(null),[In,gt]=et(null),[ul,dl]=et(0),[X,sr]=et(null),Bt=L(X);Bt.current=X;const wn=L(null),zt=L(null),Ht=L(null),Ot=L(null),fo=L(null),xn=L(!1),hl=()=>{zt.current=null,Ht.current=null,Ot.current=null},lr=(u,m)=>{zt.current=u,Ht.current=null,Ot.current=m==null?null:{path:u,scrollTop:m}},fl=(u,m)=>{zt.current=null,Ht.current={path:u,viewportOffset:m},Ot.current=null},po=L(f==="retain"&&t.isSearchOpen()),[pl,go]=et(g);zi(()=>{g||go(!1)},[g]);const mo=L(!1),ar=Se(()=>{mo.current=!0,go(u=>u&&!1)},[]),[gl,ml]=et(()=>Pr({controller:t,itemHeight:l,overscan:a,scrollTop:0,stickyFolders:v,viewportHeight:I})),[vl,yl]=et(!1);zi(()=>{yl(!0)},[]);const Ee=e?.contextMenu?.enabled===!0||e?.contextMenu?.render!=null||e?.contextMenu?.onOpen!=null||e?.contextMenu?.onClose!=null,St=e?.contextMenu?.triggerMode??(Ee?"right-click":"both"),_t=St==="both"||St==="button",vo=e?.contextMenu?.buttonVisibility??"when-needed",bl=St==="both"||St==="right-click";Fe(()=>{const u=C.current;if(u==null)return;const m=x=>{if(!(x instanceof CustomEvent))return;const k=x.detail?.path??null;fo.current=k,we(k),gt(k==null?null:"pointer")},M=x=>{x instanceof CustomEvent&&(xn.current=x.detail?.disabled===!0)};return u.addEventListener("file-tree-debug-set-context-menu-trigger",m),u.addEventListener("file-tree-debug-set-scroll-suppression",M),()=>{u.removeEventListener("file-tree-debug-set-context-menu-trigger",m),u.removeEventListener("file-tree-debug-set-scroll-suppression",M)}},[]);const Il=Se((u,m)=>{Gi(W.current,u,m)},[]),wl=Se((u,m)=>{Gi(he.current,u,m)},[]),xl=Se(u=>{w.current=u},[]),$t=Se(u=>Xi(u,he.current,W.current),[]),yo=n!=null||r!=null||o!=null,{resolveIcon:bo}=ct(()=>eu(i),[i]),qt=t[Us](),Ct=qt.getPath(),cr=Ct!=null,Qe=t.isSearchOpen(),Sl=t.getSearchValue(),z=t.getFocusedPath(),Y=t.getFocusedIndex(),mt=t.getScrollRequest(),rt=t.isDragAndDropEnabled(),jt=t.getDragSession(),_l=ct(()=>jt==null?null:new Set(jt.draggedPaths),[jt]),Cl=jt?.target??null,Ut=jt?.primaryPath??null,Io=mf(s),{overlayHeight:kl,overlayRows:Pl,snapshot:ve,visibleRows:Sn}=gl,ye=ve.physical.viewportHeight,Ke=ct(()=>({end:ve.window.endIndex,start:ve.window.startIndex}),[ve.window.endIndex,ve.window.startIndex]),Kt=Pl,wo=ve.sticky.rows,vt=ve.physical.totalHeight,kt=ve.sticky.height,_n=ct(()=>new Set(wo.map(u=>Mt(u.row))),[wo]),ur=Y>=0&&Y>=Ke.start&&Y<=Ke.end,El=Se((u,m)=>d?.({item:Yi(u,m),row:u})??null,[d]),xo=Se(u=>Tt(u==null?null:W.current.get(u)??null)?!0:Tt(C.current),[]),Cn=Se(u=>{xo(t.focusNearestPath(u))},[t,xo]),So=L(Cn);So.current=Cn;const Pt=L(!0),dr=L(()=>{}),$e=Se((u=!0)=>{const m=Bt.current;m!=null&&(Pt.current=Pt.current&&u,sr(null),e?.contextMenu?.onClose?.(),Pt.current&&Cn(m.path))},[e?.contextMenu,Cn]);dr.current=$e;const Wt=Se(u=>{const m=u==null?null:hf(C.current,u);bn(M=>M===m?M:m)},[]),_o=Se((u,m,M)=>{const x=t.getItem(m);if(x==null)return;const k=$t(m);if(k?.dataset.fileTreeStickyRow==="true"){const N=F.current;lr(m,N?.scrollTop??null),K.current=!0,me(ie=>ie===m?ie:m)}x.focus(),Wt(k),Pt.current=!0,sr({anchorRect:M?.anchorRect??null,item:Yi(u,m),path:m,source:M?.source??"keyboard"})},[t,$t,Wt]),Dl=Se(u=>{if(h){if(t.isSearchOpen()){const m=F.current,M=nn(m,ye);je.current=Y<0||m==null?null:Math.max(0,Math.min(Y*l-m.scrollTop,Math.max(0,M-l))),_e.current=!0}t.startRenaming(u)!==!1&&(gt("focus"),B(m=>m+1))}},[t,Y,l,h,ye]),kn=Se((u,{restoreTreeFocus:m=!0,targetOffset:M="live-overlay"}={})=>{const x=F.current;if(x==null)return!1;t.focusPath(u);const k=t.getFocusedIndex();if(k<0)return!1;const N=t.getVisibleRows(k,k)[0]??null;if(N==null)return!1;const ie=nn(x,ye),V=t.getVisibleCount()*l,O=M==="sticky-parents"?N.ancestorPaths.length*l:Pr({controller:t,itemHeight:l,overscan:a,scrollTop:x.scrollTop,stickyFolders:v,viewportHeight:ie}).snapshot.sticky.height;return K.current=!0,rn(x,k,l,ie,V,O),j.current(),wn.current=m?u:null,!0},[t,l,a,ye,v]),Tl=()=>y.current===!0||R.current!=null||He.current===!0,Co=u=>typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(()=>{u()}):window.setTimeout(u,16),Ml=u=>{if(u!=null){if(typeof window.cancelAnimationFrame=="function"){window.cancelAnimationFrame(u);return}window.clearTimeout(u)}},it=()=>{ke.current!=null&&(clearTimeout(ke.current),ke.current=null),Re.current=null},Pn=()=>{ze.current?.remove(),ze.current=null},Gt=()=>{Ml(Ne.current),Ne.current=null,ot.current=null},ko=u=>{const m=C.current?.getRootNode();if(m instanceof ShadowRoot){m.append(u);return}document.body.append(u)},Xt=()=>{Pe.current?.(),Pe.current=null,R.current!=null&&(clearTimeout(R.current),R.current=null),He.current=!1,pt.current=null,_.current=null,Ie.current!=null&&(Ie.current.setAttribute("draggable","true"),Ie.current.style.removeProperty("touch-action"),Ie.current=null),Pn(),it(),Gt(),Ue.current=null},En=(u,m)=>{const M=C.current?.getRootNode(),x=ji(Zh(M instanceof ShadowRoot?M:document,u,m));return t.setDragTarget(x),t.getDragSession()?.target??null},hr=u=>{const m=t.getDragAndDropConfig()?.openOnDropDelay??800;if(u==null||u.kind!=="directory"||u.directoryPath==null||m<=0){it();return}const M=t.getItem(u.directoryPath),x=Ki(M)?M:null;if(x==null||x.isExpanded()){it();return}const k=`${u.directoryPath}::${u.flattenedSegmentPath??""}`;Re.current!==k&&(it(),Re.current=k,ke.current=setTimeout(()=>{const N=t.getDragSession()?.target;N?.kind!=="directory"||N.directoryPath!==u.directoryPath||N.flattenedSegmentPath!==u.flattenedSegmentPath||x.expand()},m))},Po=()=>{Ne.current=null;const u=ot.current,m=F.current;if(u==null||m==null||t.getDragSession()==null)return;const M=m.getBoundingClientRect(),x=nf(u.clientY,M);if(x===0)return;const k=Math.max(0,m.scrollHeight-m.clientHeight),N=Math.max(0,Math.min(k,m.scrollTop+x));N!==m.scrollTop&&(m.scrollTop=N,j.current()),hr(En(u.clientX,u.clientY)),Ne.current=Co(Po)},Eo=(u,m)=>{ot.current={clientX:u,clientY:m},Ne.current??=Co(Po)},Al=(u,m,M)=>{const x=u.currentTarget;if(x!=null){if(Xt(),Pn(),it(),Gt(),t.startDrag(M)===!1){u.preventDefault();return}if(Ue.current=m,u.dataTransfer!=null&&(u.dataTransfer.effectAllowed="move",u.dataTransfer.dropEffect="move",u.dataTransfer.setData("text/plain",M),tf())){const k=Ui(x),N=x.getBoundingClientRect();Object.assign(k.style,{height:`${N.height}px`,opacity:"0.85",transform:"translate3d(-9999px, 0px, 0)",width:`${N.width}px`}),ko(k),ze.current=k,u.dataTransfer.setDragImage(k,Math.max(0,u.clientX-N.left),Math.max(0,u.clientY-N.top))}}},Nl=()=>{Pn(),it(),Gt(),Ue.current=null,t.cancelDrag()},Rl=(u,m,M)=>{if(R.current!=null||He.current)return;const x=u.touches[0],k=u.currentTarget;if(x==null||k==null)return;_.current={clientX:x.clientX,clientY:x.clientY},Ie.current=k,k.setAttribute("draggable","false");const N=(O={})=>{const Q=O.restoreNativeDraggable??!He.current;R.current!=null&&(clearTimeout(R.current),R.current=null),document.removeEventListener("touchmove",ie),document.removeEventListener("touchend",V),document.removeEventListener("touchcancel",V),Pe.current===N&&(Pe.current=null),Q&&(k.setAttribute("draggable","true"),Ie.current===k&&(Ie.current=null),_.current=null)},ie=O=>{const Q=O.touches[0],ee=_.current;if(Q==null||ee==null)return;const ue=Q.clientX-ee.clientX,fe=Q.clientY-ee.clientY;ue*ue+fe*fe<=$i*$i||N()},V=()=>{N()};document.addEventListener("touchmove",ie,{passive:!0}),document.addEventListener("touchend",V),document.addEventListener("touchcancel",V),Pe.current=N,R.current=setTimeout(()=>{if(N({restoreNativeDraggable:!1}),t.startDrag(M)===!1){k.setAttribute("draggable","true"),Ie.current===k&&(Ie.current=null),_.current=null;return}He.current=!0,Ie.current=k,k.setAttribute("draggable","false"),k.style.setProperty("touch-action","none"),Ue.current=m;const O=k.getBoundingClientRect(),Q=Ui(k);Object.assign(Q.style,{height:`${O.height}px`,opacity:"0.85",transform:`translate3d(${O.left}px, ${O.top}px, 0)`,width:`${O.width}px`}),ko(Q),ze.current=Q,pt.current={x:x.clientX-O.left,y:x.clientY-O.top};const ee=Je=>{const pe=Je.touches[0];if(pe==null)return;Je.preventDefault();const Ve=pt.current;Ve!=null&&ze.current!=null&&(ze.current.style.transform=`translate3d(${pe.clientX-Ve.x}px, ${pe.clientY-Ve.y}px, 0)`),hr(En(pe.clientX,pe.clientY)),Eo(pe.clientX,pe.clientY)},ue=Je=>{const pe=Je.changedTouches[0];pe!=null&&En(pe.clientX,pe.clientY),t.completeDrag(),Xt()},fe=()=>{t.cancelDrag(),Xt()};Pe.current=()=>{document.removeEventListener("touchmove",ee),document.removeEventListener("touchend",ue),document.removeEventListener("touchcancel",fe)},document.addEventListener("touchmove",ee,{passive:!1}),document.addEventListener("touchend",ue),document.addEventListener("touchcancel",fe)},Jh)},Do=u=>{if(X!=null){if(u.key==="Escape"){$e(),u.preventDefault(),u.stopPropagation();return}cf.has(u.key)&&(u.preventDefault(),u.stopPropagation());return}if(qt.isActive()){if(u.key==="Escape")qt.cancel();else if(u.key==="Enter")qt.commit();else return;gt("focus"),B(ae=>ae+1),u.preventDefault(),u.stopPropagation();return}if(h&&u.key==="F2"){Dl(z??void 0),u.preventDefault(),u.stopPropagation();return}if(Qe){if(u.key==="Escape")_e.current=!1,je.current=null,t.closeSearch();else if(u.key==="Enter"){const ae=t.getFocusedPath();ae!=null&&t.selectOnlyPath(ae);const Ze=F.current,An=nn(Ze,ye);je.current=Y<0||Ze==null?null:Math.max(0,Math.min(Y*l-Ze.scrollTop,Math.max(0,An-l))),_e.current=!0,t.closeSearch()}else if(u.key==="ArrowDown")t.focusNextSearchMatch();else if(u.key==="ArrowUp")t.focusPreviousSearchMatch();else return;gt("focus"),B(ae=>ae+1),u.preventDefault(),u.stopPropagation();return}if(c&&sf(u)){t.openSearch(u.key),B(ae=>ae+1),u.preventDefault(),u.stopPropagation();return}const m=Ee&&al(u),M=af(u,Ee),x=M&&C.current!=null?Bn(C.current):null,k=M?new Set(ff(C.current)):new Set,N=x?.dataset.fileTreeStickyPath??null,ie=x?.dataset.fileTreeStickyRow==="true"&&N!=null;if(ie&&N!==z&&k.has(N)){const ae=F.current;lr(N,ae?.scrollTop??null),t.focusPath(N)}const V=t.getFocusedPath(),O=t.getFocusedIndex(),Q=t.getFocusedItem();if(Q==null)return;const ee=Ki(Q)?Q:null,ue=V!=null&&(_n.has(V)||ie&&N===V&&k.has(V)),fe=u.key==="ArrowDown"||u.key==="ArrowUp"||u.key==="ArrowRight"&&ee!=null&&ee.isExpanded(),Je=u.key==="ArrowLeft"&&ue&&ee!=null&&ee.isExpanded(),pe=F.current;let Ve=!0;if(u.shiftKey&&u.key==="ArrowDown")t.extendSelectionFromFocused(1);else if(u.shiftKey&&u.key==="ArrowUp")t.extendSelectionFromFocused(-1);else if(m&&V!=null&&O>=0){const ae=t.getVisibleRows(O,O)[0]??null,Ze=Xi(V,he.current,W.current);ae==null||Ze==null?Ve=!1:_o(ae,V)}else if((u.ctrlKey||u.metaKey)&&ll(u))t.toggleFocusedSelection();else if((u.ctrlKey||u.metaKey)&&u.key.toLowerCase()==="a")t.selectAllVisiblePaths();else switch(u.key){case"ArrowDown":t.focusNextItem();break;case"ArrowUp":t.focusPreviousItem();break;case"ArrowRight":ee==null||ee.isExpanded()?t.focusNextItem():ee.expand();break;case"ArrowLeft":ee!=null&&ee.isExpanded()?ee.collapse():t.focusParentItem();break;case"Home":t.focusFirstItem();break;case"End":t.focusLastItem();break;default:Ve=!1}if(!Ve)return;gt("focus");const H=t.getFocusedPath(),De=H!=null&&(_n.has(H)||k.has(H)),We=fe&&H!==V,Mn=m&&ie&&N===V&&H===V;if((ue||Mn)&&H!=null&&(We&&De||Mn))lr(H,pe?.scrollTop??null),K.current=!0,me(ae=>ae===H?ae:H);else{const ae=u.key==="ArrowUp"&&ue&&H!==V;H!=null&&(ae||Je&&H===V)?(fl(H,gf(C.current,pe,x,V,l,kt,ye)),K.current=!0,me(Ze=>Ze===H?Ze:H)):hl()}B(ae=>ae+1),u.preventDefault(),u.stopPropagation()};Fe(()=>{if(!(!c||!Qe)){if(po.current){po.current=!1;return}Tt(se.current)}},[Qe,c]),Fe(()=>{const u=w.current;switch(jh({hasRenderedInput:u!=null,previousRenamingPath:te.current,renamingPath:Ct})){case"reset":te.current=null;return;case"reveal-canonical":Ct!=null&&kn(Ct,{restoreTreeFocus:!1,targetOffset:"live-overlay"});return;case"ignore":return;case"focus-input":u!=null&&(wn.current=null,te.current=Ct,Tt(u),u.select());return}},[Ke.end,Ke.start,Ct,kn,_n]),Fe(()=>{const u=C.current;if(u==null)return;let m=null;const M=()=>{m!=null&&(clearTimeout(m),m=null)},x=()=>{const ie=Bn(u)?.dataset.itemPath??null;me(V=>V===ie?V:ie)},k=()=>{M(),K.current=!0,x()},N=ie=>{const V=ie.relatedTarget;if(V==null){M(),m=setTimeout(()=>{if(m=null,Bn(u)!=null){x();return}K.current=!1,me(null)},0);return}if(!(V instanceof Node)||!u.contains(V)){M(),K.current=!1,me(null);return}const O=V instanceof HTMLElement?V.dataset.itemPath??null:null;me(Q=>Q===O?Q:O)};return u.addEventListener("focusin",k),u.addEventListener("focusout",N),()=>{M(),u.removeEventListener("focusin",k),u.removeEventListener("focusout",N)}},[]),Fe(()=>{const u=C.current;u!=null&&(ve.physical.scrollTop<=0?u.dataset.scrollAtTop="true":delete u.dataset.scrollAtTop)},[ve.physical.scrollTop]),Fe(()=>{let u=null;const m=F.current,M=b.current,x=C.current;if(m==null)return;Z.current=nn(m,I);const k=()=>{const H=t.getVisibleCount(),De=Di(Z.current,I),We=Math.max(0,H*l-De);m.scrollTop>We&&(m.scrollTop=We),ml(Pr({controller:t,itemHeight:l,overscan:a,scrollTop:Math.min(m.scrollTop,We),stickyFolders:v,viewportHeight:De}))};if(!G.current){G.current=!0;const H=t.getFocusedIndex();if(H>=0){const De=Di(Z.current,I),We=t.getVisibleRows(H,H)[0]??null;Ti(m,H,l,De,v&&We!=null?Math.max(0,Math.min(We.ancestorPaths.length*l,Math.max(0,De-l))):0)}}j.current=k;let N=!1;const ie=t.subscribe(()=>{N?B(H=>H+1):N=!0,k()}),V=()=>{xn.current!==!0&&(M!=null&&(M.dataset.isScrolling??=""),x!=null&&(x.dataset.isScrolling??=""),y.current=!0,u!=null&&clearTimeout(u),u=setTimeout(()=>{M!=null&&delete M.dataset.isScrolling,x!=null&&delete x.dataset.isScrolling,y.current=!1,dl(H=>H+1),u=null},50))};let O=null;const Q=()=>{x!=null&&delete x.dataset.overlayReveal,O!=null&&(clearTimeout(O),O=null)},ee=()=>{x==null||xn.current===!0||m.scrollTop>0||(x.dataset.overlayReveal="true",O!=null&&clearTimeout(O),O=setTimeout(()=>{Q()},200))},ue=()=>{if(k(),m.scrollTop>0&&Q(),Bt.current!=null&&y.current&&dr.current(),xn.current===!0){y.current=!1;return}we(H=>H==null?H:null),V()},fe=()=>{V(),ee()},Je=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"," ","Spacebar"]),pe=H=>{Je.has(H.key)&&fe()};m.addEventListener("scroll",ue,{passive:!0}),m.addEventListener("wheel",fe,{passive:!0}),m.addEventListener("touchmove",fe,{passive:!0}),m.addEventListener("keydown",pe);const Ve=typeof ResizeObserver<"u"?new ResizeObserver(H=>{Z.current=(H[0]==null?null:$h(H[0]))??nn(m,I),k()}):null;return Ve?.observe(m),()=>{j.current=()=>{},ie(),m.removeEventListener("scroll",ue),m.removeEventListener("wheel",fe),m.removeEventListener("touchmove",fe),m.removeEventListener("keydown",pe),u!=null&&clearTimeout(u),O!=null&&clearTimeout(O),M!=null&&delete M.dataset.isScrolling,x!=null&&(delete x.dataset.isScrolling,delete x.dataset.overlayReveal),y.current=!1,Z.current=null,Ve?.disconnect()}},[t,I,l,a,v]),Fe(()=>{Ee||X==null||$e(!1)},[$e,Ee,X]);const To=ct(()=>X==null?null:`${X.path}::${X.source}`,[X]);Fe(()=>{if(To==null){p?.clearSlotContent(on);return}const u=Bt.current;if(u==null)return;const m=S.current??P.current;if(m==null)return;const M={anchorElement:m,anchorRect:u.anchorRect??uf(m.getBoundingClientRect()),close:k=>{dr.current(k?.restoreFocus??!0)},restoreFocus:()=>{Pt.current&&So.current(Bt.current?.path??null)}},x=e?.contextMenu?.render?.(u.item,M)??null;return p?.setSlotContent(on,x),e?.contextMenu?.onOpen?.(u.item,M),Zi(x),queueMicrotask(()=>{x==null||!x.isConnected||document.activeElement===x&&Zi(x)}),()=>{p?.clearSlotContent(on)}},[To,e?.contextMenu,p]),Fe(()=>{X!=null&&t.getItem(X.path)==null&&$e()},[$e,X,t]),Fe(()=>{if(X==null)return;const u=C.current?.getRootNode(),m=u instanceof ShadowRoot?u.host:C.current,M=k=>{const N=k.target;N instanceof Node&&(Wi(k)||P.current?.contains(N)!==!0&&m?.contains(N)!==!0&&$e())},x=k=>{k.key==="Escape"&&(k.preventDefault(),k.stopPropagation(),$e())};return document.addEventListener("mousedown",M,!0),document.addEventListener("keydown",x,!0),()=>{document.removeEventListener("mousedown",M,!0),document.removeEventListener("keydown",x,!0)}},[$e,X]),Fe(()=>{const u=F.current,m=C.current;if(u==null||m==null){$.current=z;return}const M=z==null?null:W.current.get(z)??null,x=Bn(m),k=x?.dataset.itemPath??null,N=cr&&w.current===x,ie=c&&se.current===x,V=_e.current&&!Qe,O=je.current??0,Q=wn.current,ee=zt.current,ue=Ht.current,fe=Ot.current,Je=x!=null,pe=K.current||Je,Ve=$.current!==z,H=ee!=null&&ee===z&&z!=null;let De=!1,We=!1;if(mt!=null&&mt.id!==le.current){le.current=mt.id;const pr=mt.visibleIndex,Vo=t.getVisibleRows(pr,pr)[0]??null;if(Vo!=null){const sa=v?Math.max(0,Math.min(Vo.ancestorPaths.length*l,Math.max(0,ye-l))):kt;De=!0,We=qh(u,pr,l,ye,vt,mt.offset,sa)}t.clearScrollRequest(mt.id)}const Mn=!De&&V&&rn(u,Y,l,ye,vt,O),ae=!De&&Q!=null&&Q===z&&rn(u,Y,l,ye,vt,kt),Ze=!De&&ue!=null&&ue.path===z&&rn(u,Y,l,ye,vt,ue.viewportOffset),An=!De&&fe!=null&&fe.path===z&&u.scrollTop!==fe.scrollTop;if(An&&(u.scrollTop=fe.scrollTop),(An||We||ae||Ze||Mn||pe&&Ve&&Q!==z&&!H&&Ti(u,Y,l,ye,kt))&&j.current(),De){$.current=z;return}if(!pe){$.current=z;return}if(N){$.current=z;return}if(ie&&!V){$.current=z;return}if(M==null){V&&Y>=0&&(rn(u,Y,l,ye,vt,O),j.current()),$.current=z;return}(Ve||V||Q===z||ee===z||ue?.path===z||fe?.path===z||k==null||k!==z)&&(Tt(M),Q===z&&(wn.current=null),ee===z&&(zt.current=null),ue?.path===z&&(Ht.current=null),fe?.path===z&&(Ot.current=null),_e.current=!1,je.current=null),$.current=z},[t,Y,z,ur,l,cr,Qe,Ke,ye,c,mt,v,kt,vt,Sn]);const Vl=Y>=0&&Y>=ve.visible.startIndex&&Y<=ve.visible.endIndex,Ll=z!=null&&Kt.some(u=>Mt(u.row)===z),Fl=Vl||Ll,Bl=_t&&K.current===!0&&Fl?z:null,zl=In==="pointer"?oe:null,yt=X?.path??fo.current??zl??Bl??oe,Mo=X?.source==="right-click";Fe(()=>{y.current&&X==null||Wt($t(yt))},[X,$t,Ke,ye,ul,Kt,yt,Wt,Sn]);const Hl=Se(u=>{if(y.current||Wi(u))return;const m=u.target;if(!(m instanceof HTMLElement)||m.closest?.(`[data-type="${Dr}"]`)!=null)return;const M=m.closest?.('[data-file-tree-sticky-row="true"]'),x=m.closest?.('[data-type="item"]'),k=M instanceof HTMLElement?M.dataset.fileTreeStickyPath??null:x instanceof HTMLElement?x.dataset.itemPath??null:null;k!=null&&gt(N=>N==="pointer"?N:"pointer"),we(N=>N===k?N:k)},[]),Ol=Se(()=>{we(null)},[]);Fe(()=>{if(!rt)return;const u=()=>{Xt(),t.cancelDrag()};return window.addEventListener("dragend",u),()=>{window.removeEventListener("dragend",u),Xt(),t.cancelDrag()}},[t,rt]);const $l=u=>{if(!rt||t.getDragSession()==null||He.current)return;const m=ji(u.target instanceof HTMLElement?u.target:null);t.setDragTarget(m),hr(t.getDragSession()?.target??null),Eo(u.clientX,u.clientY),u.dataTransfer!=null&&(u.dataTransfer.dropEffect="move"),u.preventDefault()},ql=u=>{if(!rt||t.getDragSession()==null||He.current)return;const m=u.relatedTarget;m instanceof Node&&C.current?.contains(m)===!0||(it(),Gt(),t.setDragTarget(null))},jl=u=>{!rt||t.getDragSession()==null||He.current||(u.preventDefault(),En(u.clientX,u.clientY),t.completeDrag(),Pn(),it(),Gt(),Ue.current=null)},Yt=ve.window.height,Ul=ve.window.offsetTop,Kl=Math.min(0,ye-Yt),Wl=Math.min(0,ye-Yt-kt),Gl=U===z||_e.current,Et=z!=null&&Gl&&!ur&&Y>=0?Sn[Y]??t.getVisibleRows(Y,Y)[0]??null:null,Ao=Et==null?null:Mi(Y,l,Ke,Yt),st=Ue.current,Xl=Ut!=null&&st!=null&&st.path===Ut&&st.index>=Ke.start&&st.index<=Ke.end,Qt=Ut!=null&&st!=null&&st.path===Ut&&!Xl&&st.path!==Et?.path?st:null,No=Qt==null?null:Mi(Qt.index,l,Ke,Yt),Yl=lf((Y>=0?Sn[Y]??t.getVisibleRows(Y,Y)[0]??null:null)?.ancestorPaths.at(-1)??null),Ql=Qe&&z!=null?cl(s,z,!ur):void 0,Jl=X?.path??(Qe?z:U),Zl=X?.path??oe,Jt=$t(yt),fr=Ee&&_t&&!Mo&&!cr&&Jt!=null&&Oe!=null&&yt!=null,ea=Ee&&(fr||X!=null),Dn=X?.anchorRect,Ro=Dn==null&&Jt!=null&&Oe!=null&&(X!=null||fr)?Oe:null,ta=Dn!=null?{left:`${Dn.left}px`,position:"fixed",right:"auto",top:`${Dn.top}px`}:Ro!=null?{top:`${Ro}px`}:void 0,na=Mo?{opacity:"0"}:void 0,ra=Se((u,m,M,x)=>{const k=Wh({event:{ctrlKey:u.ctrlKey,metaKey:u.metaKey,shiftKey:u.shiftKey},isDirectory:m.kind==="directory",isSearchOpen:Qe,mode:x}),N=k.toggleDirectory&&m.kind==="directory",ie=N?t.resolveMountedDirectoryPathFromInput(M):null;if(N&&ie==null)return;const V=ie??M;switch(k.selection.kind){case"range":t.selectPathRange(V,k.selection.additive);break;case"toggle":t.togglePathSelectionFromInput(V);break;case"single":t.selectOnlyMountedPathFromInput(V);break}const O=u.currentTarget instanceof HTMLElement?u.currentTarget:null,Q=m.index>=ve.visible.startIndex&&m.index<=ve.visible.endIndex,ee=x==="flow"&&Q&&O!=null&&O.dataset.itemParked!=="true";t.focusMountedPathFromInput(V),ee&&(K.current=!0,me(ue=>ue===V?ue:V),gt("focus")),N&&t.toggleMountedDirectoryFromInput(V),k.closeSearch&&t.closeSearch(),k.revealCanonical&&kn(V,{targetOffset:"sticky-parents"})},[t,Qe,ve.visible.endIndex,ve.visible.startIndex,kn]),oa=()=>{if(y.current||!_t||yt==null||Jt==null)return;const u=t.getItem(yt);u!=null&&(Wt(Jt),Pt.current=!0,sr({anchorRect:null,item:{kind:u.isDirectory()?"directory":"file",name:Jt.getAttribute("aria-label")??yt,path:u.getPath()},path:u.getPath(),source:"button"}))},Tn={contextHoverPath:Zl,contextMenuButtonTriggerEnabled:_t,contextMenuButtonVisibility:vo,contextMenuEnabled:Ee,contextMenuRightClickEnabled:bl,contextMenuTriggerMode:St,controller:t,directoriesWithGitChanges:o,dragAndDropEnabled:rt,draggedPathSet:_l,dragTarget:Cl,gitLaneActive:yo,gitStatusByPath:n,handleRowDragEnd:Nl,handleRowDragStart:Al,handleRowTouchStart:Rl,ignoredGitDirectories:r,ignoredInheritanceCache:q,instanceId:s,itemHeight:l,onKeyDown:Do,onRowClick:ra,openContextMenuForRow:_o,registerButton:Il,registerRenameInput:xl,renameView:qt,renderDecorationForRow:El,resolveIcon:bo,shouldSuppressContextMenu:Tl,visualFocusPath:Jl},ia={...Tn,registerButton:wl};return E("div",{ref:C,id:Io,"data-file-tree-context-menu-button-visibility":Ee&&_t?vo:void 0,"data-file-tree-context-menu-trigger-mode":Ee?St:void 0,"data-file-tree-has-context-menu-action-lane":Ee&&_t?"true":void 0,"data-file-tree-has-git-lane":yo?"true":void 0,"data-file-tree-virtualized-root":"true",onDragLeave:rt?ql:void 0,onDragOver:rt?$l:void 0,onDrop:rt?jl:void 0,onKeyDown:Do,onPointerLeave:Ee?Ol:void 0,onPointerOver:Ee?Hl:void 0,role:"tree",tabIndex:-1,style:{outline:"none",position:"relative"},children:[E("style",{"data-file-tree-guide-style":"true",dangerouslySetInnerHTML:{__html:Yl}}),E("slot",{name:Er,"data-type":"header-slot"}),c?E("div",{"data-file-tree-search-container":!0,"data-open":Qe?"true":"false",children:E("input",{ref:se,"aria-activedescendant":Ql,"aria-controls":Io,placeholder:"Search…","data-file-tree-search-input":!0,"data-file-tree-search-input-fake-focus":pl?"true":void 0,value:Sl,onBlur:()=>{f==="retain"&&!mo.current||t.closeSearch()},onFocus:ar,onPointerDown:ar,onInput:u=>{ar();const m=u.currentTarget;t.setSearch(m.value)}})}):null,E("div",{ref:F,"data-file-tree-virtualized-scroll":"true",children:[v&&vl&&Kt.length>0?E("div",{"aria-hidden":"true","data-file-tree-sticky-overlay":"true",children:E("div",{"data-file-tree-sticky-overlay-content":"true",style:{height:`${kl}px`},children:Kt.map((u,m)=>Gn(ia,u.row,`sticky:${Mt(u.row)}`,{mode:"sticky",style:{left:"0",position:"absolute",right:"0",top:`${u.top}px`,zIndex:`${Kt.length-m}`}}))})}):null,E("div",{ref:b,"data-file-tree-virtualized-list":"true",style:{height:`${vt}px`},children:[E("div",{"data-file-tree-virtualized-sticky-offset":"true","aria-hidden":"true",style:{height:`${Ul}px`}}),E("div",{"data-file-tree-virtualized-sticky":"true",style:{height:`${Yt}px`,top:`${Kl}px`,bottom:`${Wl}px`},children:[yf(Tn,Ke,_n),Et!=null&&Ao!=null?Gn(Tn,Et,`parked:${Et.path}`,{isParked:!0,style:{left:"0",opacity:"0",pointerEvents:Ut===Et.path?"none":void 0,position:"absolute",right:"0",top:`${Ao}px`}}):null,Qt!=null&&No!=null?Gn(Tn,Qt,`parked-drag:${Qt.path}`,{isParked:!0,style:{left:"0",opacity:"0",pointerEvents:"none",position:"absolute",right:"0",top:`${No}px`}}):null]})]})]}),Ee?E("div",{ref:P,"data-type":"context-menu-anchor","data-visible":ea?"true":"false",style:ta,children:[E("button",{ref:S,type:"button","data-type":Dr,"aria-label":"Options","aria-haspopup":"menu","aria-expanded":X!=null?"true":"false","data-visible":fr?"true":"false",onMouseDown:u=>{u.preventDefault()},onClick:u=>{if(u.preventDefault(),u.stopPropagation(),X!=null){$e();return}oa()},tabIndex:-1,style:na,children:E(cn,{...bo("file-tree-icon-ellipsis")})}),X!=null?E("slot",{name:on}):null]}):null,X!=null?E("div",{"data-type":"context-menu-wash","aria-hidden":"true",onMouseDownCapture:u=>{u.preventDefault(),$e()},onTouchStartCapture:u=>{u.preventDefault(),u.stopPropagation(),$e()},onTouchMoveCapture:u=>{u.preventDefault(),u.stopPropagation()},onWheelCapture:u=>{u.preventDefault(),u.stopPropagation()}}):null]})}const ho={hydrateRoot:(e,t)=>{vh(Or(es,t),e)},renderRoot:(e,t)=>{qr(Or(es,t),e)},unmountRoot:e=>{qr(null,e)}};function zn(e,t){ho.renderRoot(e,t)}function bf(e,t){ho.hydrateRoot(e,t)}function If(e){ho.unmountRoot(e)}var wf=class{#e=new Map;#n=null;clearAll(){for(const e of this.#e.values())e.remove();this.#e.clear()}clearSlotContent(e){const t=this.#l(e);t!=null&&(t.remove(),this.#e.delete(e))}setHost(e){if(this.#n=e,e!=null){this.#i(e);for(const[t,n]of this.#e)this.#a(t,n)}}setSlotContent(e,t){const n=this.#l(e);if(n===t){t!=null&&(this.#e.set(e,t),this.#a(e,t));return}if(n?.remove(),t==null){this.#e.delete(e);return}this.#e.set(e,t),this.#a(e,t)}setSlotHtml(e,t){const n=t?.trim()??"";if(n.length===0){this.setSlotContent(e,null);return}const r=this.#l(e);if(r!=null&&r.innerHTML===n){this.#e.set(e,r),this.#a(e,r);return}const o=document.createElement("div");o.innerHTML=n,this.setSlotContent(e,o)}#l(e){const t=this.#e.get(e)??null;if(t!=null)return t;const n=this.#n;if(n==null)return null;for(const r of Array.from(n.children))if(r instanceof HTMLElement&&r.dataset.fileTreeManagedSlot===e)return r;return null}#a(e,t){t.slot=e,t.dataset.fileTreeManagedSlot=e,this.#n!=null&&t.parentNode!==this.#n&&this.#n.appendChild(t)}#i(e){for(const t of Array.from(e.children)){if(!(t instanceof HTMLElement))continue;const n=t.dataset.fileTreeManagedSlot;n==null||this.#e.has(n)||this.#e.set(n,t)}}};let ts=0;function xf(e){return e!=null&&e.length>0?e:(ts+=1,`pst_ft_${ts}`)}function Sf({initialVisibleRowCount:e,itemHeight:t}){return e==null?qs:Math.max(0,e)*(t??$s)}function ns(e){if(typeof document>"u")return;const t=document.createElement("div");t.innerHTML=e;const n=t.querySelector("svg");return n instanceof SVGElement?n:void 0}function rs(e){return e.querySelector("#file-tree-icon-chevron")instanceof SVGElement&&e.querySelector("#file-tree-icon-file")instanceof SVGElement&&e.querySelector("#file-tree-icon-dot")instanceof SVGElement&&e.querySelector("#file-tree-icon-lock")instanceof SVGElement}function os(e){return Array.from(e.children).filter(t=>t instanceof SVGElement)}var _f=class{static LoadedCustomComponent=Ha;#e;#n;#l;#a;#i;#H;#O;#m;#r;#D;#T=new wf;#y;#b;#p;#I;#w;#x;#v;#$;#L;#g=null;#q=null;#d;#j=!1;#U=!1;constructor(e){const{composition:t,density:n,fileTreeSearchMode:r,gitStatus:o,id:i,initialSearchQuery:s,icons:l,itemHeight:a,onExpansionChange:h,onSearchChange:d,onSelectionChange:f,overscan:c,renderRowDecoration:g,renaming:p,search:v,searchBlurBehavior:I,searchFakeFocus:P,stickyFolders:S,unsafeCSS:y,initialVisibleRowCount:b,...w}=e;this.#e=t,this.#l=xf(i),this.#I=wi(o),this.#w=l,this.#x=y,this.#a=h,this.#i=f,this.#H=g,this.#O=p!=null&&p!==!1,this.#m=I,this.#r=v===!0,this.#D=P===!0,this.#y=Ld(n,a),this.#b={itemHeight:this.#y.itemHeight,overscan:c,stickyFolders:S,initialVisibleRowCount:b},this.#n=new lh({...w,fileTreeSearchMode:r,initialSearchQuery:s,onSearchChange:d,renaming:p}),this.#L=this.#n.getSelectionVersion(),this.#g=this.#i==null?null:this.subscribe(()=>{this.#K()}),this.#q=this.#a==null?null:this.#n.subscribe(C=>{C?.operation!=="expand"&&C?.operation!=="collapse"||this.#a?.({path:C.path,expanded:C.operation==="expand"})})}unmount(){this.#d!=null&&(If(this.#d),delete this.#d.dataset.fileTreeVirtualizedWrapper,this.#d=void 0),this.#T.clearAll(),this.#T.setHost(null),this.#p!=null&&(delete this.#p.dataset.fileTreeVirtualized,this.#ne(this.#p),this.#p=void 0)}cleanUp(){this.unmount(),this.#g?.(),this.#g=null,this.#q?.(),this.#q=null,this.#n.destroy()}getFileTreeContainer(){return this.#p}getItem(e){return this.#n.getItem(e)}getFocusedItem(){return this.#n.getFocusedItem()}getFocusedPath(){return this.#n.getFocusedPath()}getSelectedPaths(){return this.#n.getSelectedPaths()}getComposition(){return this.#e}getItemHeight(){return this.#y.itemHeight}getDensityFactor(){return this.#y.factor}subscribe(e){let t=!1;return this.#n.subscribe(()=>{if(!t){t=!0;return}e()})}focusPath(e){this.#n.focusPath(e)}scrollToPath(e,t){this.#n.scrollToPath(e,t)}focusNearestPath(e){return this.#n.focusNearestPath(e)}add(e){this.#n.add(e)}batch(e){this.#n.batch(e)}move(e,t,n){this.#n.move(e,t,n)}onMutation(e,t){return this.#n.onMutation(e,t)}setSearch(e){this.#n.setSearch(e)}openSearch(e){this.#n.openSearch(e)}closeSearch(){this.#n.closeSearch()}isSearchOpen(){return this.#n.isSearchOpen()}getSearchValue(){return this.#n.getSearchValue()}getSearchMatchingPaths(){return this.#n.getSearchMatchingPaths()}focusNextSearchMatch(){this.#n.focusNextSearchMatch()}focusPreviousSearchMatch(){this.#n.focusPreviousSearchMatch()}startRenaming(e,t){return this.#n.startRenaming(e,t)}remove(e,t){this.#n.remove(e,t)}resetPaths(e,t){this.#n.resetPaths(e,t)}setComposition(e){this.#e=e;const t=this.#k();t!=null&&(this.#N(),zn(t.wrapper,this.#h()))}setGitStatus(e){this.#I=wi(e,this.#I);const t=this.#k();t!=null&&zn(t.wrapper,this.#h())}setIcons(e){this.#w=e;const t=this.#k();t!=null&&(this.#M(t.host,t.wrapper),zn(t.wrapper,this.#h()))}hydrate({fileTreeContainer:e}){const t=this.#R(e),n=this.#S(t);this.#N(),bf(n,this.#h())}render({containerWrapper:e,fileTreeContainer:t}){const n=this.#R(t??this.#p,e),r=this.#S(n);this.#N(),zn(r,this.#h())}#c(){return{initialViewportHeight:Sf({initialVisibleRowCount:this.#b.initialVisibleRowCount,itemHeight:this.#b.itemHeight}),itemHeight:this.#b.itemHeight,overscan:this.#b.overscan,stickyFolders:this.#b.stickyFolders}}#h(){return{composition:this.#e,controller:this.#n,gitStatusByPath:this.#I?.statusByPath,ignoredGitDirectories:this.#I?.ignoredDirectoryPaths,directoriesWithGitChanges:this.#I?.directoriesWithChanges,icons:this.#w,instanceId:this.#l,renamingEnabled:this.#O,renderRowDecoration:this.#H,searchBlurBehavior:this.#m,searchEnabled:this.#r,searchFakeFocus:this.#D,slotHost:this.#T,...this.#c()}}#k(){const e=this.#p,t=this.#d;return e==null||t==null?null:{host:e,wrapper:t}}#M(e,t){const n=e.shadowRoot;n!=null&&(this.#W(n),this.#s(n)),this.#G(t)}#K(){const e=this.#i;if(e==null)return;const t=this.#n.getSelectionVersion();t!==this.#L&&(this.#L=t,e(this.#n.getSelectedPaths()))}#N(){const e=this.#e?.header?.render;if(e!=null){this.#T.setSlotContent(Er,e());return}this.#T.setSlotHtml(Er,this.#e?.header?.html??null)}#W(e){const t=os(e).find(r=>rs(r)),n=ns(Kc(On(this.#w).set));n!=null&&(t!=null&&t.outerHTML===n.outerHTML||(t!=null?t.replaceWith(n):e.prepend(n)))}#s(e){const t=os(e),n=t.find(s=>rs(s)),r=t.filter(s=>s!==n),o=On(this.#w).spriteSheet?.trim()??"";if(o.length===0){for(const s of r)s.remove();return}const i=ns(o);if(i==null){for(const s of r)s.remove();return}if(!(r.length===1&&r[0].outerHTML===i.outerHTML)){for(const s of r)s.remove();e.appendChild(i)}}#G(e){const t=On(this.#w);t.colored&&Gc(t.set)?e.dataset.fileTreeColoredIcons="true":delete e.dataset.fileTreeColoredIcons}#F(e){const t=e.querySelector(`style[${Ho}]`);if(this.#v==null&&t instanceof HTMLStyleElement&&(this.#v=t),this.#x==null||this.#x===""){this.#v?.remove(),this.#v=void 0,this.#$=void 0;return}this.#v?.parentNode===e&&this.#$===this.#x||(this.#v??=document.createElement("style"),this.#v.setAttribute(Ho,""),this.#v.parentNode!==e&&e.appendChild(this.#v),this.#v.textContent=Va(this.#x),this.#$=this.#x)}#S(e){if(this.#d!=null)return this.#d;const t=e.shadowRoot;if(t==null)throw new Error("FileTree requires a shadow root");const n=Array.from(t.children).filter(o=>o instanceof HTMLDivElement&&typeof o.dataset.fileTreeId=="string"&&o.dataset.fileTreeId.length>0),r=n.find(o=>o.dataset.fileTreeId===this.#l)??n[0];return r!=null&&(this.#l=r.dataset.fileTreeId??this.#l),this.#d=r??document.createElement("div"),this.#d.dataset.fileTreeId=this.#l,this.#d.dataset.fileTreeVirtualizedWrapper="true",this.#M(e,this.#d),this.#d.parentNode!==t&&t.appendChild(this.#d),this.#d}#R(e,t){const n=e??this.#p??document.createElement(Hn);t!=null&&n.parentNode!==t&&t.appendChild(n);const r=n.shadowRoot??n.attachShadow({mode:"open"});return Tr(n,r),this.#F(r),n.dataset.fileTreeVirtualized="true",n.style.display="flex",this.#X(n),this.#T.setHost(n),this.#p=n,n}#X(e){e.style.getPropertyValue("--trees-item-height")===""&&(e.style.setProperty("--trees-item-height",`${String(this.#y.itemHeight)}px`),this.#j=!0),e.style.getPropertyValue("--trees-density-override")===""&&(e.style.setProperty("--trees-density-override",String(this.#y.factor)),this.#U=!0)}#ne(e){this.#j&&(e.style.removeProperty("--trees-item-height"),this.#j=!1),this.#U&&(e.style.removeProperty("--trees-density-override"),this.#U=!1)}},Cf=Vt("<div id=directory-picker-v2-suggestions role=listbox class=directory-picker-v2-suggestions>"),kf=Vt("<div class=directory-picker-v2-path><div class=directory-picker-v2-actions>"),is=Vt("<div class=directory-picker-v2-state>"),Pf=Vt("<div class=directory-picker-v2-browser>"),Ef=Vt("<div class=directory-picker-v2-selection>"),Df=Vt("<button role=option>");function Mf(e){const t=la(),{sync:n,sdk:r}=t.ensureServerCtx(e.server),o=aa(),i=ca(),s=ua(e.mode??"directory",e.start),l={file:i.t("dialog.directory.action.selectFile"),directory:i.t("dialog.directory.action.selectFolder")},[a,h]=lt(""),[d,f]=lt(""),[c,g]=lt(""),[p,v]=lt(!1),[I,P]=lt(-1),[S,y]=lt(!1),[b,w]=lt(!1),[C,F]=lt(!1),se=new Map,W=Da(3),he=new Set;let j,Z,le,G=0;const Ae=Nn(()=>!(n.data.path.home||n.data.path.directory)),[K]=Lo(()=>Ae()?!0:void 0,()=>r.client.path.get().then(_=>_.data).catch(()=>{}),{initialValue:void 0}),$=Nn(()=>n.data.path.home||K()?.home||""),te=Nn(()=>e.start||n.data.path.home||n.data.path.directory||K()?.home||K()?.directory),_e=Aa({sdk:r,home:$,base:()=>a()||te()}),[je]=Lo(d,async _=>{const R=mr(_).replace(/\/+$/,""),q=en(a(),_,$()).replace(/\/+$/,"");if(!R||R===q)return{query:_,items:[]};const B=(await _e(_)).map(oe=>({absolute:oe,type:"directory"}));if(!s.includeFiles)return{query:_,items:B.slice(0,5)};const U=await r.client.find.files({directory:a(),query:Ir(a(),_,$()),type:"file",limit:20}).then(oe=>oe.data??[]).catch(()=>[]),me=[...B,...U.map(oe=>({absolute:zo(a(),oe),type:"file"}))];return{query:_,items:Array.from(new Map(me.map(oe=>[oe.absolute,oe])).values()).slice(0,8)}}),Ne=Nn(()=>da(je(),d()));async function Re(_,R,q=!1){const B=_.replace(/\/+$/,"");w(!1);const U=zo(a(),B),me=se.get(B);me&&!q&&W.promote(`${R}:${B}`);const oe=me??W.schedule(`${R}:${B}`,q?"background":"user",()=>br(R,G)?r.client.file.list({directory:U,path:""}).then(Oe=>Oe.data??[]).catch(()=>{}):Promise.resolve(void 0));se.set(B,oe);const we=await oe;if(!br(R,G))return!1;if(!we)return se.delete(B),B||w(!0),!1;if(j?.batch(s.entries(B,we).map(Oe=>({type:"add",path:Oe}))),!q&&ka(he,B))for(const Oe of Pa(B,we))Re(Oe,R,!0);return!0}async function ke(_){const R=s.navigation(Ea(mr(_),$(),a()||te()||$()));if(!R)return;const q=++G;y(!0),F(!1),g(""),v(!1),P(-1),h(R),f(en(R,R,$())),se.clear(),he.clear(),j?.resetPaths([]);const B=await Re("",q);br(q,G)&&(F(B),y(!1))}function ot(){const _=Ne(),R=_[I()]??_[0];if(!R)return;const q=en(R.absolute,d(),$());f(R.type==="directory"&&!q.endsWith("/")?q+"/":q),R.type==="file"&&(g(s.selection(a(),Ir(a(),R.absolute,$()))??""),v(!1),P(-1))}function ze(_){if(_.type==="directory"){ke(_.absolute);return}f(en(_.absolute,d(),$())),g(s.selection(a(),Ir(a(),_.absolute,$()))??""),v(!1),P(-1)}function Ue(_){v(!0),P(R=>Ta(R,_,Ne().length))}function Pe(){const _=Ne();return _[I()]??_[0]}const He={ArrowDown:()=>Ue(1),ArrowUp:()=>Ue(-1),Enter:()=>{const _=Pe();_&&ze(_),_||ke(d())},Tab:ot};function pt(_){const R=He[_.key];R&&(_.key==="Tab"&&_.shiftKey||(_.preventDefault(),R()))}function Ie(){const _=s.result(a(),c(),C());_&&(e.onSelect(e.multiple?[_]:_),o.close())}return ha(()=>{const _=R=>{le?.contains(R.target)||(v(!1),P(-1))};document.addEventListener("pointerdown",_),Fo(()=>document.removeEventListener("pointerdown",_)),j=new _f({paths:[],flattenEmptyDirectories:!1,initialExpansion:"closed",stickyFolders:!0,unsafeCSS:`
        button[data-type="item"] {
          background: transparent !important;
          box-shadow: none !important;
        }
        button[data-type="item"]:hover {
          background: var(--v2-overlay-simple-overlay-hover) !important;
        }
        button[data-type="item"]:focus-visible {
          outline: none !important;
          box-shadow: none !important;
        }
        [data-file-tree-virtualized-scroll] {
          overscroll-behavior: contain;
          scrollbar-width: thin;
        }
      `,onExpansionChange(R){R.expanded&&Re(R.path,G)},onSelectionChange(R){const q=R.at(-1);g(q?s.selection(a(),q)??"":"")}}),Z&&(j.render({containerWrapper:Z}),j.getFileTreeContainer()?.classList.add("directory-picker-v2-tree"))}),fa(()=>{const _=te();!_||a()||ke(_)}),Fo(()=>j?.cleanUp()),xe(Ca,{size:"large",class:"directory-picker-v2",get children(){return[xe(pa,{get children(){return xe(ga,{get children(){return e.title??i.t("command.project.open")}})}}),xe(ma,{}),xe(va,{class:"directory-picker-v2-body pt-4!",get children(){return[(()=>{var _=kf(),R=_.firstChild,q=le;return typeof q=="function"?Bo(q,_):le=_,Le(_,xe(ya,{get value(){return d()},autofocus:!0,autocomplete:"off",spellcheck:!1,class:"!w-full",onInput:B=>{f(mr(B.currentTarget.value)),g(""),v(!0),P(-1)},role:"combobox","aria-autocomplete":"list",get"aria-expanded"(){return p()},"aria-controls":"directory-picker-v2-suggestions",get"aria-activedescendant"(){return gr(()=>I()>=0)()?`directory-picker-v2-suggestion-${I()}`:void 0},onKeyDown:pt}),R),Le(R,xe(Zt,{size:"small",variant:"ghost",onClick:()=>void ke($()),children:"~"}),null),Le(R,xe(Zt,{size:"small",variant:"ghost",onClick:()=>void ke(ba(a())||a()),get children(){return i.t("dialog.directory.root")}}),null),Le(R,xe(Zt,{size:"small",variant:"ghost",onClick:()=>void ke(Ia(a())),get children(){return i.t("dialog.directory.parent")}}),null),Le(_,xe(vr,{get when(){return gr(()=>!!p())()&&Ne().length>0},get children(){var B=Cf();return Le(B,xe(wa,{get each(){return Ne()},children:(U,me)=>(()=>{var oe=Df();return oe.$$click=()=>ze(U),oe.$$pointermove=()=>P(me()),Le(oe,()=>en(U.absolute,d(),$()),null),Le(oe,()=>U.type==="directory"?"/":"",null),xa(we=>{var Oe=`directory-picker-v2-suggestion-${me()}`,bn=me()===I(),In=me()===I()?"":void 0;return Oe!==we.e&&yr(oe,"id",we.e=Oe),bn!==we.t&&yr(oe,"aria-selected",we.t=bn),In!==we.a&&yr(oe,"data-active",we.a=In),we},{e:void 0,t:void 0,a:void 0}),oe})()})),B}}),null),_})(),(()=>{var _=Pf();_.addEventListener("wheel",q=>{const B=j?.getFileTreeContainer()?.shadowRoot?.querySelector("[data-file-tree-virtualized-scroll]");if(!B)return;const U=Sa(B.scrollTop,q.deltaY,B.scrollHeight,B.clientHeight);U!==B.scrollTop&&(q.preventDefault(),B.scrollTop=U,B.dispatchEvent(new Event("scroll")))});var R=Z;return typeof R=="function"?Bo(R,_):Z=_,Le(_,xe(vr,{get when(){return S()},get children(){var q=is();return Le(q,()=>i.t("common.loading")),q}}),null),Le(_,xe(vr,{get when(){return gr(()=>!S())()&&b()},get children(){var q=is();return Le(q,()=>i.t("dialog.directory.readError")),q}}),null),_})(),(()=>{var _=Ef();return Le(_,()=>s.result(a(),c(),C())),_})()]}}),xe(_a,{get children(){return[xe(Zt,{variant:"neutral",onClick:()=>o.close(),get children(){return i.t("common.cancel")}}),xe(Zt,{variant:"contrast",get disabled(){return!s.result(a(),c(),C())},onClick:Ie,get children(){return l[s.action]}})]}})]}})}Ma(["pointermove","click"]);export{Mf as DialogSelectDirectoryV2};
//# sourceMappingURL=dialog-select-directory-v2-4_16IBI_.js.map
