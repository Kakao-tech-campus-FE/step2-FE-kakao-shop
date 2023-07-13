import "styles/atoms/skeleton.css";

export default function Skeleton() {
  return (
    <div className={"skeleton-card"}>
      <div className={"skeleton-photo"} />
      <p className={"skeleton-h3"} />
      <p className={"skeleton-p"} />
    </div>
  );
}
