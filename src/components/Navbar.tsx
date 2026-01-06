import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            color: "red",
            textDecoration: "none",
            fontWeight: 900,
            letterSpacing: 1,
          }}
        >
          NOTFLIX
        </Typography>

        <Box sx={{ ml: 4, display: "flex", gap: 2 }}>
          <Link to="/browse">Browse</Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
