export type Movie = {
  id: string;
  title: string;
  poster: string;
  year: number;
  description?: string;
  genre?: string;
  director?: string;
  runtime?: string | number;
  backdrop?: string;
};

const titles = [
  "Shadow Protocol",
  "Neon City",
  "Last Signal",
  "Red Horizon",
  "Silent Code",
  "Black Ice",
  "Midnight Run",
];

export function generateMovies(page: number, limit = 20): Movie[] {
  return Array.from({ length: limit }).map((_, i) => {
    const id = `${page}-${i}-${crypto.randomUUID()}`;

    return {
      id,
      title: titles[Math.floor(Math.random() * titles.length)],
      poster: `https://picsum.photos/300/450?random=${id}`,
      year: 2000 + Math.floor(Math.random() * 24),
    };
  });
}
