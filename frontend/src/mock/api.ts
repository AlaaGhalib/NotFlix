import { generateMovies } from "./movies";
import type { Movie } from "./movies";

export function fetchMovies(
  page: number,
  limit = 20,
  delay = 1000
): Promise<Movie[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateMovies(page, limit));
    }, delay);
  });
}

// Add this new function to handle the individual movie page
export function fetchMovieById(
  id: string | undefined, 
  delay = 800
): Promise<Movie | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!id) {
        resolve(null);
        return;
      }
      
      // Generate 1 random movie, but override its ID to match the URL
      const [generatedMovie] = generateMovies(1, 1);
      const movieToReturn: Movie = {
        ...generatedMovie,
        id: id, 
      };
      
      resolve(movieToReturn);
    }, delay);
  });
}