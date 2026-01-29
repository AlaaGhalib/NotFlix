import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import type { Movie } from "../mock/movies";

type Props = {
  movie: Movie;
};

export default function MovieCard({ movie }: Props) {
  return (
    <Card
      sx={{
        transition: "transform .2s",
        "&:hover": { transform: "scale(1.08)" },
      }}
    >
      <CardMedia
        component="img"
        height="260"
        image={movie.poster}
        alt={movie.title}
      />
      <CardContent>
        <Typography variant="subtitle1" noWrap>
          {movie.title}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {movie.year}
        </Typography>
      </CardContent>
    </Card>
  );
}
