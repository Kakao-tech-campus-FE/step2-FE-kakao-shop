// props: id, name, type, onChange, placeholder, value
export default function Input({ className = "", ...props }) {
  return <input className={className} {...props} />;
}
