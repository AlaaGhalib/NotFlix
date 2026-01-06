import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box sx={{ textAlign: "center", mt: 12 }}>
      <Typography variant="h2" gutterBottom>
        Unlimited movies, TV shows, and more
      </Typography>

      <Button
        component={Link}
        to="/browse"
        variant="contained"
        color="primary"
        size="large"
      >
        Start Watching
      </Button>
    </Box>
  );
}
