import { useEffect, useState, useCallback } from "react";
import { Box, Grid, Typography } from "@mui/material"; // Using MUI v6 Grid
import MovieCard from "../components/MovieCard";
import MovieCardSkeleton from "../components/MovieCardSkeleton";
import type { Movie } from "../mock/movies";
import { fetchMovies } from "../mock/api";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

const SKELETON_COUNT = 20;

export default function Browse() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  const loadMore = useCallback(async () => {
    setLoading(true);
    const newMovies = await fetchMovies(page, 20, 1200);
    setMovies((prev) => [...prev, ...newMovies]);
    setPage((p) => p + 1);
    setLoading(false);
    setInitialLoad(false);
  }, [page]);

  useEffect(() => {
    loadMore();
  }, []);

  const loadMoreRef = useInfiniteScroll(loadMore, loading);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
        Browse Movies
      </Typography>

      <Grid container spacing={2}>
        {/* REAL MOVIES */}
        {movies.map((movie) => (
          <Grid 
            key={movie.id} 
            size={{ xs: 6, sm: 4, md: 3, lg: 2, xl: 1.5 }} // This defines the width
          >
            <MovieCard movie={movie} />
          </Grid>
        ))}

        {/* SKELETONS */}
        {(loading || initialLoad) &&
          Array.from({ length: SKELETON_COUNT }).map((_, i) => (
            <Grid 
              key={`skeleton-${i}`} 
              size={{ xs: 6, sm: 4, md: 3, lg: 2, xl: 1.5 }} // Keep this identical to the cards
            >
              <MovieCardSkeleton />
            </Grid>
          ))}
      </Grid>

      <Box ref={loadMoreRef} sx={{ height: 10, mt: 4 }} />
    </Box>
  );
}