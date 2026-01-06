import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";

export default function Movie() {
  const { id } = useParams();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Movie ID: {id}</Typography>
    </Box>
  );
}
