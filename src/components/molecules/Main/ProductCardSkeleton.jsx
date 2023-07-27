import React from "react";
import Skeleton from "react-loading-skeleton";
import Container from "../../atoms/Container";
import "react-loading-skeleton/dist/skeleton.css";

export default function ProductCardSkeleton() {
  return (
    <Container className="mx-auto w-full">
      <Skeleton className="mb-3 h-40 rounded-lg" />
      <Skeleton className="mb-1 h-5" />
      <Skeleton className="h-7" />
    </Container>
  );
}
