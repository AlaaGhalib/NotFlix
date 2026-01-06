import { Button, Paper, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export default function App() {
  return (
    <Paper sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 8 }}>
      <Typography variant="h5" gutterBottom>
        MUI Theme Ready 🚀
      </Typography>

      <Button variant="contained" startIcon={<HomeIcon />}>
        Get Started
      </Button>
    </Paper>
  );
}
