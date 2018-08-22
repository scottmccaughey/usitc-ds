export const tokens = {
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
      "sat": 20
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
        "link": "color(cyan, 30) !default",
        "hover-background": "color(cyan, 30) !default",
        "hover-text": "color(white) !default",
        "spinner": "color(cyan, 30) !default"
      },
      "dark": {
        "background": "color(cyan, 20) !default",
        "background-alt": "color(cyan, 30) !default",
        "border": "color(cyan, 20) !default",
        "text": "color(white) !default",
        "link": "color(white) !default",
        "hover-background": "color(white) !default",
        "hover-text": "color(cyan, 30) !default",
        "spinner": "color(white) !default"
      }
    },
    "state": {
      "error": {
        "background": "color(red,  95) !default",
        "background-alt": "color(red,  90) !default",
        "border": "color(red,  40) !default",
        "text": "color(grey, 20) !default",
        "link": "color(red,  40) !default",
        "hover-background": "color(red,  40) !default",
        "hover-text": "color(white) !default",
        "spinner": "color(red,  40) !default"
      },
      "info": {
        "background": "color(cyan, 95) !default",
        "background-alt": "color(cyan, 90) !default",
        "border": "color(cyan, 30) !default",
        "text": "color(grey, 20) !default",
        "link": "color(cyan, 30) !default",
        "hover-background": "color(cyan, 30) !default",
        "hover-text": "color(white) !default",
        "spinner": "color(cyan, 30) !default"
      },
      "success": {
        "background": "color(green, 95) !default",
        "background-alt": "color(green, 90) !default",
        "border": "color(green, 30) !default",
        "text": "color(grey,  20) !default",
        "link": "color(green, 30) !default",
        "hover-background": "color(green, 30) !default",
        "hover-text": "color(white) !default",
        "spinner": "color(green, 30) !default"
      },
      "warning": {
        "background": "color(orange, 95) !default",
        "background-alt": "color(orange, 90) !default",
        "border": "color(orange, 50) !default",
        "text": "color(grey,   20) !default",
        "link": "color(orange, 50) !default",
        "hover-background": "color(orange, 50) !default",
        "hover-text": "color(white) !default",
        "spinner": "color(orange, 50) !default"
      }
    }
  },
  "font": {
    "path": "'../node_modules/@usitc/usitc-ds/src/compiled-assets/fonts' !default",
    "family": {
      "files--map": {
        "Montserrat": {
          "light": {
            "weight": 300,
            "style": "normal",
            "stretch": "normal"
          },
          "lightitalic": {
            "weight": 300,
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
      "normal": "300 !default",
      "bold": "700 !default",
      "black": "900 !default"
    },
    "size": {
      "root": "20px !default",
      "base": "1rem !default",
      "scale-ratio": "1.2 !default",
      "xxxxs": "ms(-5)",
      "xxxs": "ms(-4)",
      "xxs": "ms(-3)",
      "xs": "ms(-2)",
      "s": "ms(-1)",
      "m": "ms(0)",
      "l": "ms(1)",
      "xl": "ms(2)",
      "xxl": "ms(3)",
      "xxxl": "ms(4)",
      "xxxxl": "ms(5)",
      "h1": "$font-size-xxl !default",
      "h2": "$font-size-xl !default",
      "h3": "$font-size-l !default",
      "h4": "$font-size-m !default",
      "h5": "$font-size-m !default",
      "h6": "$font-size-m !default"
    }
  },
  "line-height": {
    "base": "1.5 !default",
    "header": "1.25 !default",
    "button": "1 !default",
    "form": "2.5rem !default"
  },
  "max-line-length": "50em !default",
  "space": {
    "xxxs": "$font-size-base / 8 !default",
    "xxs": "$font-size-base / 6 !default",
    "xs": "$font-size-base / 4 !default",
    "s": "$font-size-base / 2 !default",
    "m": "$font-size-base !default",
    "l": "$font-size-base * 2 !default",
    "xl": "$font-size-base * 4 !default",
    "xxl": "$font-size-base * 6 !default",
    "xxxl": "$font-size-base * 8 !default",
    "stack": {
      "xxxs": "0 0 $space-xxxs 0",
      "xxs": "0 0 $space-xxs 0",
      "xs": "0 0 $space-xs 0",
      "s": "0 0 $space-s 0",
      "m": "0 0 $space-m 0",
      "l": "0 0 $space-l 0",
      "xl": "0 0 $space-xl 0",
      "xxl": "0 0 $space-xxl 0",
      "xxxl": "0 0 $space-xxxl 0"
    },
    "inline": {
      "xxxs": "0 $space-xxxs 0 0",
      "xxs": "0 $space-xxs 0 0",
      "xs": "0 $space-xs 0 0",
      "s": "0 $space-s 0 0",
      "m": "0 $space-m 0 0",
      "l": "0 $space-l 0 0",
      "xl": "0 $space-xl 0 0",
      "xxl": "0 $space-xxl 0 0",
      "xxxl": "0 $space-xxxl 0 0"
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
    "xl": "1600px"
  },
  "grid": {
    "columns": "12 !default",
    "gap": {
      "col": "$space-m !default",
      "row": "$space-m !default"
    }
  },
  "transition": {
    "base": "all 0.25s ease-in-out",
    "base-time": "0.25s",
    "base-easing": "ease-in-out",
    "long-time": "0.75s",
    "max": "99rem"
  },
  "shadows": {
    "box": {
      "base": "0 $space-xxs $space-xxs 0 color(black)",
      "focus": "0 0 $space-xs $space-xs color(cyan, 30)"
    }
  },
  "form-control": {
    "default": {
      "left": "-2px",
      "size": "40px",
      "size-inner": "26px",
      "top": "-2px"
    },
    "checkbox": {
      "position": "6px 7px"
    },
    "checkbox-bust": {
      "left": "-2px",
      "margin-top": "-10px",
      "position": "5px 2px",
      "size": "50px",
      "size-inner": "44px",
      "top": "-2px"
    }
  },
  "icon-size": {
    "base": "0.75em",
    "scale-ratio": 1.5,
    "xxxxs": "msi(-5)",
    "xxxs": "msi(-4)",
    "xxs": "msi(-3)",
    "xs": "msi(-2)",
    "s": "msi(-1)",
    "m": "msi(0)",
    "l": "msi(1)",
    "xl": "msi(2)",
    "xxl": "msi(3)",
    "xxxl": "msi(4)",
    "xxxxl": "msi(5)"
  },
  "print": {
    "color": {
      "base": "color(black)",
      "background": "color(white)"
    },
    "font": {
      "size": "12pt",
      "size-results": "5.5pt"
    },
    "page-margin": "1cm"
  },
  "off-canvas": {
    "height": "100vh",
    "shadow": "5px 0 10px 0 color(black, 0, 25)",
    "transition": "left 0.75s ease-in-out",
    "width": "400px"
  }
};