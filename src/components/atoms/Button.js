// props: children
export default function Button({ className = "", onClick, ...props }) {
  const handleButtonClick = (event) => {
    event.preventDefault();
    onClick(event);
  };

  return (
    <button className={className} onClick={handleButtonClick} {...props} />
  );
}
