import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Box, Button, CircularProgress, Grid, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { Movie as MovieType } from "../mock/movies";
import { fetchMovieById } from "../mock/api"; // <-- Importing your new function

export default function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<MovieType | null>(null);
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const getMovie = async () => {
      setLoading(true);
      const data = await fetchMovieById(id);
      setMovie(data);
      setLoading(false);
    };

    getMovie();
  }, [id]);

  // 1. Show a loading spinner while fetching
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  // 2. Fallback if the movie isn't found
  if (!movie) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>Movie not found!</Typography>
        <Button onClick={() => navigate(-1)} variant="contained">
          Go Back
        </Button>
      </Box>
    );
  }

  // 3. Netflix-like hero + details layout
  const backdrop = (movie as any).backdrop ?? movie.poster;

  return (
    <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
      {/* Video overlay */}
      {playing && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: 1400,
            bgcolor: "rgba(0,0,0,0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <IconButton
            onClick={() => {
              if (videoRef.current) videoRef.current.pause();
              setPlaying(false);
            }}
            sx={{ position: "absolute", top: 12, right: 12, color: "#fff" }}
            aria-label="close player"
          >
            <CloseIcon />
          </IconButton>

          <Box sx={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <video
              ref={videoRef}
              src={"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
              poster={movie.poster}
              controls
              autoPlay
              playsInline
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Box>
        </Box>
      )}

      {/* Hero section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 420, md: 520 },
          backgroundImage: `linear-gradient(to right, rgba(10,10,10,0.85) 20%, rgba(10,10,10,0.35) 50%, rgba(10,10,10,0.0) 100%), url(${backdrop})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end",
          pb: { xs: 4, md: 8 }
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto", px: { xs: 2, md: 4 } }}>
          <Grid container spacing={2} alignItems="flex-end">
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography
                variant="h2"
                component="h1"
                sx={{ fontWeight: 800, letterSpacing: -1, mb: 1 }}
              >
                {movie.title}
              </Typography>

              <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2 }}>
                <Button onClick={() => setPlaying(true)} variant="contained" color="error" size="large" sx={{ px: 4 }}>
                  ▶ Play
                </Button>
                <Button variant="contained" color="secondary" size="large" sx={{ px: 3 }}>
                  + My List
                </Button>
                <Typography variant="body2" color="text.secondary">
                  {movie.year} • {movie.genre ?? "Drama"}
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ maxWidth: 760, color: "rgba(255,255,255,0.9)" }}>
                {movie.description ?? "No description available."}
              </Typography>
            </Grid>
            {/* Poster on the right for larger screens */}
            <Grid size={{ xs: 4, md: 2 }} sx={{ display: { xs: "none", md: "block" } }}>
              <Box
                component="img"
                src={movie.poster}
                alt={movie.title}
                sx={{ width: "100%", borderRadius: 1, boxShadow: 6 }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Details section */}
      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 4 }, py: { xs: 4, md: 6 } }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              component="img"
              src={movie.poster}
              alt={movie.title}
              sx={{ width: "100%", borderRadius: 1, boxShadow: 3 }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 9 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
              More like this
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
              {movie.description ?? "No description available."}
            </Typography>

            <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mt: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Director: {((movie as any).director) ?? "Unknown"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Runtime: {((movie as any).runtime) ?? "—"}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}