module.exports = {
  "colors--map": {
    "black": {
      "hue": 0,
      "sat": 0,
      "lum": 0
    },
    "white": {
      "hue": 0,
      "sat": 0,
      "lum": 100
    },
    "grey": {
      "hue": 190,
      "sat": 10
    },
    "red": {
      "hue": 355,
      "sat": 80
    },
    "orange": {
      "hue": 25,
      "sat": 80
    },
    "yellow": {
      "hue": 55,
      "sat": 80
    },
    "green": {
      "hue": 115,
      "sat": 80
    },
    "cyan": {
      "hue": 190,
      "sat": 80
    },
    "blue": {
      "hue": 220,
      "sat": 80
    },
    "purple": {
      "hue": 280,
      "sat": 80
    }
  },
  "color": {
    "theme": {
      "base": {
        "background": "color(white) !default",
        "background-alt": "color(grey, 90) !default",
        "border": "color(grey, 20) !default",
        "text": "color(grey, 20) !default",
        "accent": "color(cyan, 30) !default",
        "link": "color(cyan, 30) !default",
        "hover-background": "transparent !default",
        "hover-text": "color(cyan, 10) !default",
        "spinner": "color(cyan, 30) !default"
      },
      "dark": {
        "background": "color(cyan, 20) !default",
        "background-alt": "color(cyan, 30) !default",
        "border": "color(cyan, 20) !default",
        "text": "color(white) !default",
        "accent": "color(cyan, 80) !default",
        "link": "color(white) !default",
        "hover-background": "transparent !default",
        "hover-text": "color(cyan, 80) !default",
        "spinner": "color(white) !default"
      }
    },
    "state": {
      "error": {
        "background": "color(red, 95) !default",
        "background-alt": "color(red, 90) !default",
        "border": "color(red, 40) !default",
        "text": "color(grey, 20) !default",
        "accent": "color(red, 30) !default",
        "link": "color(red, 40) !default",
        "hover-background": "transparent !default",
        "hover-text": "color(red, 60) !default",
        "spinner": "color(red, 40) !default"
      },
      "info": {
        "background": "color(cyan, 95) !default",
        "background-alt": "color(cyan, 90) !default",
        "border": "color(cyan, 30) !default",
        "text": "color(grey, 20) !default",
        "accent": "color(cyan, 30) !default",
        "link": "color(cyan, 30) !default",
        "hover-background": "transparent !default",
        "hover-text": "color(cyan, 10) !default",
        "spinner": "color(cyan, 30) !default"
      },
      "success": {
        "background": "color(green, 95) !default",
        "background-alt": "color(green, 90) !default",
        "border": "color(green, 20) !default",
        "text": "color(grey, 20) !default",
        "accent": "color(green, 20) !default",
        "link": "color(green, 30) !default",
        "hover-background": "transparent !default",
        "hover-text": "color(green) !default",
        "spinner": "color(green, 30) !default"
      },
      "warning": {
        "background": "color(orange, 95) !default",
        "background-alt": "color(orange, 90) !default",
        "border": "color(orange, 40) !default",
        "text": "color(grey, 20) !default",
        "accent": "color(orange, 30) !default",
        "link": "color(orange, 30) !default",
        "hover-background": "transparent !default",
        "hover-text": "color(orange) !default",
        "spinner": "color(orange) !default"
      }
    }
  },
  "font": {
    "path": "'../node_modules/@usitc/usitc-ds/src/compiled-assets/fonts' !default",
    "family": {
      "files--map": {
        "Montserrat": {
          "regular": {
            "weight": 400,
            "style": "normal",
            "stretch": "normal"
          },
          "italic": {
            "weight": 400,
            "style": "italic",
            "stretch": "normal"
          },
          "bold": {
            "weight": 700,
            "style": "normal",
            "stretch": "normal"
          },
          "bolditalic": {
            "weight": 700,
            "style": "italic",
            "stretch": "normal"
          },
          "black": {
            "weight": 900,
            "style": "normal",
            "stretch": "normal"
          },
          "blackitalic": {
            "weight": 900,
            "style": "italic",
            "stretch": "normal"
          }
        }
      },
      "base": "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif !default",
      "mono": "'Operator Mono', Hack, Consolas, Menlo, Monaco, 'Ubuntu Mono', 'Courier New', Courier, monospace !default"
    },
    "weight": {
      "normal": "400 !default",
      "bold": "700 !default",
      "black": "900 !default"
    },
    "size": {
      "root": "10px !default",
      "base": "1.6rem !default",
      "scale-ratio": "1.2 !default",
      "xxs": "ms($font-size-scale-ratio, $font-size-base, -3)",
      "xs": "ms($font-size-scale-ratio, $font-size-base, -2)",
      "s": "ms($font-size-scale-ratio, $font-size-base, -1)",
      "m": "ms($font-size-scale-ratio, $font-size-base, 0)",
      "l": "ms($font-size-scale-ratio, $font-size-base, 1)",
      "xl": "ms($font-size-scale-ratio, $font-size-base, 2)",
      "xxl": "ms($font-size-scale-ratio, $font-size-base, 3)",
      "xxxl": "ms($font-size-scale-ratio, $font-size-base, 4)",
      "xxxxl": "ms($font-size-scale-ratio, $font-size-base, 5)",
      "h1": "$font-size-xxxxl !default",
      "h2": "$font-size-xxxl !default",
      "h3": "$font-size-xxl !default",
      "h4": "$font-size-xl !default",
      "h5": "$font-size-l !default",
      "h6": "$font-size-m !default"
    }
  },
  "line-height": {
    "base": "1.5 !default",
    "header": "1.25 !default",
    "button": "1 !default",
    "form": "5rem !default"
  },
  "max-line-length": "50em !default",
  "space": {
    "base": "1rem !default",
    "xxs": "$space-base / 3 !default",
    "xs": "$space-base / 2 !default",
    "s": "$space-base !default",
    "m": "$space-base * 2 !default",
    "l": "$space-base * 3 !default",
    "xl": "$space-base * 4 !default",
    "xxl": "$space-base * 6 !default",
    "xxxl": "$space-base * 8 !default",
    "xxxxl": "$space-base * 12 !default",
    "xxxxxl": "$space-base * 16 !default",
    "xxxxxxl": "$space-base * 20 !default",
    "xxxxxxxl": "$space-base * 24 !default",
    "stack": {
      "xxs": "0 0 $space-xxs 0",
      "xs": "0 0 $space-xs 0",
      "s": "0 0 $space-s 0",
      "m": "0 0 $space-m 0",
      "l": "0 0 $space-l 0",
      "xl": "0 0 $space-xl 0",
      "xxl": "0 0 $space-xxl 0",
      "xxxl": "0 0 $space-xxxl 0",
      "xxxxl": "0 0 $space-xxxxl 0",
      "xxxxxl": "0 0 $space-xxxxxl 0",
      "xxxxxxl": "0 0 $space-xxxxxxl 0",
      "xxxxxxxl": "0 0 $space-xxxxxxxl 0"
    },
    "inline": {
      "xxs": "0 $space-xxs 0 0",
      "xs": "0 $space-xs 0 0",
      "s": "0 $space-s 0 0",
      "m": "0 $space-m 0 0",
      "l": "0 $space-l 0 0",
      "xl": "0 $space-xl 0 0",
      "xxl": "0 $space-xxl 0 0",
      "xxxl": "0 $space-xxxl 0 0",
      "xxxxl": "0 $space-xxxxl 0 0",
      "xxxxxl": "0 $space-xxxxxl 0 0",
      "xxxxxxl": "0 $space-xxxxxxl 0 0",
      "xxxxxxxl": "0 $space-xxxxxxxl 0 0"
    }
  },
  "border": {
    "base": "1px solid color(grey) !default",
    "radius": {
      "base": "0 !default",
      "circle": "100% !default"
    }
  },
  "content": {
    "max-width": "1200px !default",
    "header-links": "4 !default"
  },
  "breakpoints--map": {
    "xs": "400px",
    "s": "600px",
    "m": "800px",
    "l": "1200px",
    "xl": "1600px",
    "xxl": "2400px",
    "xxxl": "4800px"
  },
  "grid": {
    "columns": "12 !default",
    "gap": {
      "col": "$space-m !default",
      "row": "$space-m !default"
    }
  },
  "transition": {
    "base": "all 0.25s ease-in-out !default",
    "base-time": "0.25s !default",
    "base-easing": "ease-in-out !default",
    "long-time": "0.75s !default",
    "max": "99rem !default"
  },
  "shadows": {
    "box": {
      "base": "0 $space-xxs $space-xxs 0 color(black) !default",
      "focus": "0 0 $space-xxs $space-xxs color(cyan, 30) !default"
    }
  },
  "form-control": {
    "default": {
      "left": "-2px !default",
      "size": "40px !default",
      "size-inner": "26px !default",
      "top": "-2px !default"
    },
    "checkbox": {
      "position": "6px 7px !default"
    },
    "checkbox-bust": {
      "left": "-2px !default",
      "margin-top": "-10px !default",
      "position": "5px 2px !default",
      "size": "50px !default",
      "size-inner": "44px !default",
      "top": "-2px !default"
    }
  },
  "icon-size": {
    "base": "0.75em !default",
    "scale-ratio": "1.5 !default",
    "s": "ms($icon-size-scale-ratio, $icon-size-base, -1)",
    "m": "ms($icon-size-scale-ratio, $icon-size-base, 0)",
    "l": "ms($icon-size-scale-ratio, $icon-size-base, 1)",
    "xl": "ms($icon-size-scale-ratio, $icon-size-base, 2)",
    "xxl": "ms($icon-size-scale-ratio, $icon-size-base, 3)",
    "xxxl": "ms($icon-size-scale-ratio, $icon-size-base, 4)",
    "xxxxl": "ms($icon-size-scale-ratio, $icon-size-base, 5)"
  },
  "print": {
    "color": {
      "base": "color(black) !default",
      "background": "color(white) !default"
    },
    "font": {
      "size": "12pt !default",
      "size-results": "5.5pt !default"
    },
    "page-margin": "1cm !default"
  },
  "off-canvas": {
    "height": "100vh !default",
    "width": "250px !default",
    "open-at": "xxxl !default",
    "shadow": "5px 0 10px 0 color(black, 0, 25) !default",
    "transition": "left 0.75s ease-in-out !default"
  }
};