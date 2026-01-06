import { createTheme } from "@mui/material/styles";

export const notflixTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#E50914", // Netflix red
    },
    background: {
      default: "#000000",
      paper: "#141414",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B3B3B3",
    },
  },

  shape: {
    borderRadius: 4, // Netflix cards are sharp
  },

  typography: {
    fontFamily: [
      "Netflix Sans",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),

    h1: {
      fontWeight: 900,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 800,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },

    body1: {
      color: "#E5E5E5",
    },

    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#000",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(6px)",
          boxShadow: "none",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          padding: "8px 18px",
          fontSize: "0.9rem",
        },
        containedPrimary: {
          backgroundColor: "#E50914",
          "&:hover": {
            backgroundColor: "#F40612",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#141414",
          boxShadow: "none",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.08)",
            zIndex: 2,
          },
        },
      },
    },

    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: "#222",
        },
      },
    },
  },
});
