import { Card, CardMedia, CardContent, Typography, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom"; // <-- 1. Import the router hook
import type { Movie } from "../mock/movies";

type Props = {
  movie: Movie;
};

export default function MovieCard({ movie }: Props) {
  const navigate = useNavigate(); // <-- 2. Initialize the navigation hook

  return (
    <Card
      sx={{
        transition: "transform .2s",
        "&:hover": { transform: "scale(1.05)" },
        height: "100%", 
        width: "100%",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* 3. Wrap the content in CardActionArea to make the whole card a button */}
      <CardActionArea 
        onClick={() => navigate(`/movie/${movie.id}`)} // <-- 4. The magic click handler!
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "stretch" }}
      >
        <CardMedia
          component="img"
          height="260"
          image={movie.poster}
          alt={movie.title}
          sx={{ objectFit: "cover" }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle1" noWrap>
            {movie.title}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {movie.year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}