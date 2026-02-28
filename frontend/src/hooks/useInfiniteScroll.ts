import { useEffect, useRef } from "react";

export function useInfiniteScroll(
  onLoadMore: () => void,
  isLoading: boolean
) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoading) {
          onLoadMore();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [onLoadMore, isLoading]);

  return ref;
}
