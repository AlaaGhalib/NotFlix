import { Typography, Box } from "@mui/material";

export default function NotFound() {
  return (
    <Box sx={{ textAlign: "center", mt: 12 }}>
      <Typography variant="h3">404</Typography>
      <Typography>Page not found</Typography>
    </Box>
  );
}
