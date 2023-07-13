export default function ProductCardSkeleton() {
  return (
    <div className="flex h-80 w-80 animate-pulse flex-col rounded-lg border border-stone-300 p-3">
      <div className="mb-4 h-40 w-full rounded-lg bg-stone-200" />
      <div className="flex grow flex-col justify-between">
        <div className="h-8 rounded-lg bg-stone-200" />
        <div className="h-6 rounded-lg bg-stone-200" />
        <div className="h-8 w-32 self-end rounded-lg bg-stone-200" />
      </div>
    </div>
  );
}
