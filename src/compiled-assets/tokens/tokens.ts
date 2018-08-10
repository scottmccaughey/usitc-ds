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
      "hue": 216,
      "sat": 2
    },
    "red": {
      "hue": 2,
      "sat": 67
    },
    "orange": {
      "hue": 23,
      "sat": 100
    },
    "yellow": {
      "hue": 53,
      "sat": 98
    },
    "green": {
      "hue": 145,
      "sat": 47
    },
    "cyan": {
      "hue": 191,
      "sat": 84
    },
    "blue": {
      "hue": 216,
      "sat": 56
    },
    "purple": {
      "hue": 281,
      "sat": 100
    }
  },
  "color": {
    "theme": {
      "base": {
        "background": "color(white)",
        "background-alt": "color(grey, 90)",
        "border": "color(grey, 90)",
        "text": "color(grey, 20)",
        "link": "color(cyan, 30)",
        "hover-background": "color(cyan, 30)",
        "hover-text": "color(white)",
        "spinner": "color(cyan)"
      },
      "dark": {
        "background": "color(cyan, 20)",
        "background-alt": "color(cyan, 30)",
        "border": "color(cyan, 20)",
        "text": "color(white)",
        "link": "color(white)",
        "hover-background": "color(white)",
        "hover-text": "color(cyan, 30)",
        "spinner": "color(white)"
      }
    },
    "state": {
      "error": {
        "background": "color(red, 95)",
        "border": "color(red, 40)",
        "text": "color(grey, 20)",
        "link": "color(red, 40)",
        "hover-background": "color(red, 40)",
        "hover-text": "color(white)"
      },
      "info": {
        "background": "color(cyan, 95)",
        "border": "color(cyan, 30)",
        "text": "color(grey, 20)",
        "link": "color(cyan, 30)",
        "hover-background": "color(cyan, 30)",
        "hover-text": "color(white)"
      },
      "success": {
        "background": "color(green, 95)",
        "border": "color(green, 30)",
        "text": "color(grey, 20)",
        "link": "color(green, 30)",
        "hover-background": "color(green, 30)",
        "hover-text": "color(white)"
      },
      "warning": {
        "background": "color(yellow, 95)",
        "border": "color(orange, 40)",
        "text": "color(grey, 20)",
        "link": "color(orange, 40)",
        "hover-background": "color(orange, 40)",
        "hover-text": "color(white)"
      },
      "highlight": {
        "background": "color(cyan, 30)",
        "text": "color(white)"
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
      "base": "Montserrat, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
      "mono": "'Operator Mono', Hack, Consolas, Menlo, Monaco, 'Ubuntu Mono', 'Courier New', Courier, monospace, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
    },
    "weight": {
      "normal": 300,
      "bold": 700,
      "black": 900
    },
    "size": {
      "root": "20px",
      "base": "1rem",
      "scale-ratio": 1.2,
      "xxxxxxxs": "ms(-8)",
      "xxxxxxs": "ms(-7)",
      "xxxxxs": "ms(-6)",
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
      "xxxxxl": "ms(6)",
      "xxxxxxl": "ms(7)",
      "xxxxxxxl": "ms(8)",
      "h1": "$font-size-xxl",
      "h2": "$font-size-xl",
      "h3": "$font-size-l",
      "h4": "$font-size-m",
      "h5": "$font-size-m",
      "h6": "$font-size-m"
    }
  },
  "line-height": {
    "base": 1.5,
    "header": 1.25,
    "button": 1,
    "form": "2.5rem"
  },
  "max-line-length": "50em",
  "space": {
    "xxs": "$font-size-base / 8",
    "xs": "$font-size-base / 4",
    "s": "$font-size-base / 2",
    "m": "$font-size-base",
    "l": "$font-size-base * 2",
    "xl": "$font-size-base * 4",
    "xxl": "$font-size-base * 8",
    "xxxl": "$font-size-base * 12",
    "stack": {
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
    "base": "1px solid color(grey)",
    "radius": {
      "base": 0,
      "circle": "100%"
    }
  },
  "content": {
    "max-width": "1200px",
    "header-links": 4
  },
  "breakpoints--map": {
    "xs": "400px",
    "s": "600px",
    "m": "800px",
    "l": "1200px",
    "xl": "1600px"
  },
  "grid": {
    "columns": 12,
    "gap": {
      "col": "$space-m",
      "row": "$space-m"
    },
    "item-sizes": [
      {
        "full": 12
      },
      {
        "three-quarters": 9
      },
      {
        "two-thirds": 8
      },
      {
        "half": 6
      },
      {
        "third": 4
      },
      {
        "quarter": 3
      },
      {
        "sixth": 2
      },
      {
        "twelfth": 1
      }
    ]
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
      "base": "0 $space-xxs $space-xxs 0 color(black)"
    }
  },
  "form": {
    "control": {
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
    "read-more": {
      "hr": {
        "margin": "29px 0 30px"
      }
    }
  },
  "icon": {
    "size": {
      "base": "0.75em",
      "scale-ratio": 1.5,
      "xxxxxxxs": "msi(-8)",
      "xxxxxxs": "msi(-7)",
      "xxxxxs": "msi(-6)",
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
      "xxxxl": "msi(5)",
      "xxxxxl": "msi(6)",
      "xxxxxxl": "msi(7)",
      "xxxxxxxl": "msi(8)"
    }
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
    "page": {
      "margin": "1cm"
    }
  },
  "off-canvas": {
    "height": "100vh",
    "shadow": "5px 0 10px 0 color(black, 0, 25)",
    "transition": "left 0.75s ease-in-out",
    "width": "400px"
  }
};