export default function Divider({ type = "horizontal" }) {
  const typeObj = {
    horizontal: "w-full h-px",
    vertical: "w-px h-full",
  };

  return <div className={`bg-gray-200 ${typeObj[type]}`}></div>;
}
