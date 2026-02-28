import { useEffect, useState, useCallback } from "react";
import { Box, Typography, Button } from "@mui/material";
import MovieCard from "../components/MovieCard";
import MovieCardSkeleton from "../components/MovieCardSkeleton";
import type { Movie } from "../mock/movies";
import { fetchMovies } from "../mock/api";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";


export default function Browse() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(async () => {
    setLoading(true);
    const newMovies = await fetchMovies(page, 20, 1200);
    setMovies((prev) => [...prev, ...newMovies]);
    setPage((p) => p + 1);
    setLoading(false);
  }, [page]);

  useEffect(() => {
    loadMore();
  }, []);

  const loadMoreRef = useInfiniteScroll(loadMore, loading);

  // Netflix-like browse: hero + horizontal rows
  const hero = movies[0];

  const rowTitles = [
    "Trending Now",
    "New Releases",
    "Because you watched",
    "Top Picks",
    "Recently Added",
    "Critically Acclaimed",
  ];

  // build rows of 12 cards after the hero
  const rows = [] as typeof movies[];
  const remaining = movies.slice(1);
  for (let i = 0; i < Math.ceil(remaining.length / 12); i++) {
    rows.push(remaining.slice(i * 12, i * 12 + 12));
  }

  const SKELETON_ROWS = 3;
  const SKELETON_PER_ROW = 8;

  return (
    <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
      {hero && (
        <Box
          sx={{
            position: "relative",
            height: { xs: 360, md: 520 },
            backgroundImage: `linear-gradient(to right, rgba(10,10,10,0.9) 15%, rgba(10,10,10,0.45) 45%, rgba(10,10,10,0.0) 100%), url(${hero.backdrop ?? hero.poster})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "flex-end",
            pb: { xs: 3, md: 8 },
          }}
        >
          <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto", px: { xs: 2, md: 4 } }}>
            <Typography variant="h3" sx={{ fontWeight: 900, mb: 1 }}>
              {hero.title}
            </Typography>

            <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2 }}>
              <Button variant="contained" color="error" size="large" sx={{ px: 4 }}>
                ▶ Play
              </Button>
              <Button variant="contained" color="secondary" size="large" sx={{ px: 3 }}>
                + My List
              </Button>
              <Typography variant="body2" color="text.secondary">
                {hero.year} • {hero.genre ?? "Drama"}
              </Typography>
            </Box>

            <Typography variant="body1" sx={{ maxWidth: 760, color: "rgba(255,255,255,0.9)" }}>
              {hero.description ?? "No description available."}
            </Typography>
          </Box>
        </Box>
      )}

      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 4 }, py: { xs: 3, md: 6 } }}>
        {/* If no movies yet, show skeleton hero + skeleton rows */}
        {movies.length === 0 && loading && (
          <Box sx={{ mb: 4 }}>
            <Box sx={{ height: { xs: 220, md: 360 }, bgcolor: "#111", borderRadius: 1, mb: 3 }} />
            {Array.from({ length: SKELETON_ROWS }).map((_, r) => (
              <Box key={`srow-${r}`} sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  Loading...
                </Typography>
                <Box sx={{ display: "flex", gap: 2, overflowX: "auto", pb: 1 }}>
                  {Array.from({ length: SKELETON_PER_ROW }).map((__, i) => (
                    <Box key={i} sx={{ minWidth: 160, width: 160 }}>
                      <MovieCardSkeleton />
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        )}

        {rows.map((row, idx) => (
          <Box key={idx} sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              {rowTitles[idx % rowTitles.length]}
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                overflowX: "auto",
                pb: 1,
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {row.length > 0
                ? (
                    <>
                      {row.map((movie) => (
                        <Box key={movie.id} sx={{ minWidth: 160, width: 160 }}>
                          <MovieCard movie={movie} />
                        </Box>
                      ))}
                      {loading &&
                        Array.from({ length: 3 }).map((_, i) => (
                          <Box key={`load-skel-${i}`} sx={{ minWidth: 160, width: 160 }}>
                            <MovieCardSkeleton />
                          </Box>
                        ))}
                    </>
                  )
                : Array.from({ length: 6 }).map((_, i) => (
                    <Box key={i} sx={{ minWidth: 160, width: 160 }}>
                      <MovieCardSkeleton />
                    </Box>
                  ))}
            </Box>
          </Box>
        ))}

        <Box ref={loadMoreRef} sx={{ height: 10, mt: 4 }} />
      </Box>
    </Box>
  );
}