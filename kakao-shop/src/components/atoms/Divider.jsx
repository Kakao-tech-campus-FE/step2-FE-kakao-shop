export default function Divider({ type = "horizontal", size }) {
  const typeObj = {
    horizontal: "w-full h-0.5",
    vertical: "w-0.5 h-4",
  };

  return (
    <div
      className={`inline-block self-center bg-gray-200 ${typeObj[type]}`}
    ></div>
  );
}
