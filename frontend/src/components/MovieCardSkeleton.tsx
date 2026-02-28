import { Card, CardContent, Skeleton, Box } from "@mui/material";

export default function MovieCardSkeleton() {
  return (
    <Card
      sx={{
        width: "100%",      // fill the Grid column
        flexGrow: 1,        // important for flex container
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Poster area */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "2 / 3", // Netflix poster ratio
        }}
      >
        <Skeleton
          variant="rectangular"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </Box>

      {/* Text area */}
      <CardContent sx={{ p: 1 }}>
        <Skeleton width="90%" height={18} />
        <Skeleton width="60%" height={14} />
      </CardContent>
    </Card>
  );
}
