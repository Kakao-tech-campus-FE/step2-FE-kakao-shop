// props: children
export default function Box({ className = "", ...props }) {
  return <div className={className} {...props} />;
}
