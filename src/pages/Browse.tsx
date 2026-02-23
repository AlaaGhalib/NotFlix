import { useEffect, useState, useCallback } from "react";
import { Box, Grid, Typography } from "@mui/material";
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

    // fake API fetch with latency
    const newMovies = await fetchMovies(page, 20, 1200);
    setMovies((prev) => [...prev, ...newMovies]);
    setPage((p) => p + 1);
    setLoading(false);
    setInitialLoad(false);
  }, [page]);

  useEffect(() => {
    loadMore(); // initial load
  }, []);

  const loadMoreRef = useInfiniteScroll(loadMore, loading);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Browse Movies
      </Typography>

      <Grid container spacing={2}>
        {/* REAL MOVIES */}
        {movies.map((movie) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4, lg: 1}}
            key={movie.id}
            sx={{ display: "flex" }} // ensures MovieCard fills the column
          >
            <MovieCard movie={movie} />
          </Grid>
        ))}

        {/* SKELETONS */}
        {(loading || initialLoad) &&
          Array.from({ length: SKELETON_COUNT }).map((_, i) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 1}} // <-- ADD BREAKPOINTS (must match real movies)
              key={`skeleton-${i}`}
              sx={{ display: "flex" }} // ensures Skeleton fills the column
            >
              <MovieCardSkeleton />
            </Grid>
          ))}
      </Grid>

      {/* Infinite scroll trigger */}
      <Box ref={loadMoreRef} sx={{ height: 1 }} />
    </Box>
  );
}
