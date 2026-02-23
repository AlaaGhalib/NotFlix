import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, CircularProgress, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { Movie } from "../mock/movies";
import { fetchMovieById } from "../mock/api";

export default function Watch() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoading(true);
      const data = await fetchMovieById(id);
      if (!mounted) return;
      setMovie(data);
      setLoading(false);
    };

    load();
    return () => {
      mounted = false;
      if (videoRef.current) videoRef.current.pause();
    };
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!movie) {
    // fallback: navigate back
    navigate(-1);
    return null;
  }

  return (
    <Box sx={{ position: "fixed", inset: 0, zIndex: 1400, bgcolor: "rgba(0,0,0,0.98)", display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}>
      <IconButton
        onClick={() => {
          if (videoRef.current) videoRef.current.pause();
          navigate(-1);
        }}
        sx={{ position: "absolute", top: 12, right: 12, color: "#fff" }}
        aria-label="close player"
      >
        <CloseIcon />
      </IconButton>

      <video
        ref={videoRef}
        src={"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
        poster={movie.poster}
        controls
        autoPlay
        playsInline
        style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: 6 }}
      />
    </Box>
  );
}
