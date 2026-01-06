import { generateMovies } from "./movies";
import type {Movie} from "./movies";
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
