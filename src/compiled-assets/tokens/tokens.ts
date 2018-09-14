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
      "hue": 215,
      "sat": 10
    },
    "red": {
      "hue": 350,
      "sat": 80
    },
    "orange": {
      "hue": 35,
      "sat": 80
    },
    "yellow": {
      "hue": 65,
      "sat": 80
    },
    "green": {
      "hue": 110,
      "sat": 80
    },
    "cyan": {
      "hue": 185,
      "sat": 80
    },
    "blue": {
      "hue": 215,
      "sat": 80
    },
    "purple": {
      "hue": 275,
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
        "accent": "color(blue, 30) !default",
        "link": "color(blue, 40) !default",
        "hover-background": "transparent !default",
        "hover-text": "color(blue, 60) !default",
        "spinner": "color(blue, 30) !default"
      },
      "dark": {
        "background": "color(blue, 20) !default",
        "background-alt": "color(blue, 30) !default",
        "border": "color(blue, 20) !default",
        "text": "color(white) !default",
        "accent": "color(blue, 80) !default",
        "link": "color(blue, 90) !default",
        "hover-background": "transparent !default",
        "hover-text": "color(white) !default",
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
        "background": "color(blue, 98) !default",
        "background-alt": "color(blue, 95) !default",
        "border": "color(blue) !default",
        "text": "color(grey, 20) !default",
        "accent": "color(blue, 30) !default",
        "link": "color(blue, 40) !default",
        "hover-background": "transparent !default",
        "hover-text": "color(blue, 60) !default",
        "spinner": "color(blue, 30) !default"
      },
      "success": {
        "background": "color(green, 95) !default",
        "background-alt": "color(green, 90) !default",
        "border": "color(green, 30) !default",
        "text": "color(grey, 20) !default",
        "accent": "color(green, 20) !default",
        "link": "color(green, 20) !default",
        "hover-background": "transparent !default",
        "hover-text": "color(green) !default",
        "spinner": "color(green, 30) !default"
      },
      "warning": {
        "background": "color(orange, 95) !default",
        "background-alt": "color(orange, 90) !default",
        "border": "color(orange) !default",
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
        "Raleway": {
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
      "base": "Raleway, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif !default",
      "mono": "'Operator Mono', Hack, Consolas, Menlo, Monaco, 'Ubuntu Mono', 'Courier New', Courier, monospace !default"
    },
    "weight": {
      "normal": "300 !default",
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
      "xxxxxl": "0 0 $space-xxxxxl 0"
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
      "xxxxxl": "0 $space-xxxxxl 0 0"
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
      "focus": "0 0 $space-xxs $space-xxs color(blue, 30)"
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
    "xxxxs": "ms($icon-size-scale-ratio, $icon-size-base, -5)",
    "xxxs": "ms($icon-size-scale-ratio, $icon-size-base, -4)",
    "xxs": "ms($icon-size-scale-ratio, $icon-size-base, -3)",
    "xs": "ms($icon-size-scale-ratio, $icon-size-base, -2)",
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