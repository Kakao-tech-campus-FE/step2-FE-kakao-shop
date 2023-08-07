export default function Stars({ starCount }) {
  const count = Math.max(Math.min(Math.round(starCount), 5), 0);
  return (
    <p className="text-left text-3xl">
      <span className="text-blue-500">{"".padEnd(count, "★")}</span>
      <span className="text-gray-300">{"".padEnd(5 - count, "★")}</span>
    </p>
  );
}
