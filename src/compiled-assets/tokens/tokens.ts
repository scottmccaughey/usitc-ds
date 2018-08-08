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
      "hue": 210,
      "sat": 10
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
    "white": "#ffffff",
    "black": "#3a3a3b",
    "gray": "#818386",
    "gray-dark": "#414042",
    "gray-light": "#b3b1b4",
    "gray-lighter": "#e6e7e8",
    "gray-lightest": "#f9f9f9",
    "blue": "#0d7e97",
    "blue-dark": "#004353",
    "blue-light": "#c9e3e8",
    "blue-lighter": "#e4f1f3",
    "red": "#be2a26",
    "red-dark": "#981d20",
    "red-light": "#f0b9b8",
    "red-lighter": "#f7dbdb",
    "green": "#308453",
    "green-dark": "#266942",
    "green-light": "#e8f3e5",
    "green-lighter": "#edf5eb",
    "orange": "#fdb71c",
    "orange-dark": "#835c1b",
    "orange-light": "#fae0af",
    "orange-lighter": "#f3e3c8",
    "teal": "#5c9999",
    "teal-darker": "#447272",
    "theme": {
      "base": {
        "background": "$color-white",
        "background-alt": "$color-gray-lighter",
        "border": "$color-gray",
        "text": "$color-black",
        "link": "$color-blue",
        "hover-background": "$color-blue",
        "hover-text": "$color-white",
        "spinner": "$color-blue"
      },
      "dark": {
        "background": "$color-blue-dark",
        "background-alt": "$color-blue",
        "border": "$color-blue-dark",
        "text": "$color-white",
        "link": "$color-white",
        "hover-background": "$color-white",
        "hover-text": "$color-blue",
        "spinner": "$color-white"
      }
    },
    "state": {
      "error": {
        "background": "$color-red-lighter",
        "border": "$color-red-dark",
        "text": "$color-red-dark",
        "link": "$color-black",
        "hover-background": "$color-white",
        "hover-text": "$color-red-dark"
      },
      "info": {
        "background": "$color-blue-lighter",
        "border": "$color-blue-dark",
        "text": "$color-blue-dark",
        "link": "$color-black",
        "hover-background": "$color-white",
        "hover-text": "$color-blue-dark"
      },
      "success": {
        "background": "$color-green-lighter",
        "border": "$color-green-dark",
        "text": "$color-green-dark",
        "link": "$color-black",
        "hover-background": "$color-white",
        "hover-text": "$color-green-dark"
      },
      "warning": {
        "background": "color(yellow, 95)",
        "border": "color(yellow, 30)",
        "text": "$color-black",
        "link": "$color-black",
        "hover-background": "$color-white",
        "hover-text": "color(yellow, 30)"
      },
      "highlight": {
        "background": "$color-blue",
        "text": "$color-white"
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
      "mono": "Hack, Consolas, Menlo, Monaco, 'Ubuntu Mono', 'Courier New', Courier, monospace, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
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
    "base": "1px solid $color-gray",
    "focus": "0 0 0 $space-xxs $color-blue",
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
      "base": "0 $space-xxs $space-xxs 0 $color-black"
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
      "checkbox-bustout": {
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
      "base": "$color-black",
      "background": "$color-white"
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
    "shadow": "5px 0 10px 0 rgba(0, 0, 0, 0.25)",
    "transition": "left 0.75s ease-in-out",
    "width": "400px"
  }
};