// props: children, htmlFor
export default function Label({ className = "", ...props }) {
  return <label className={className} {...props} />;
}
