// props: children
export default function Container({ className = "", ...props }) {
  return <div className={className} {...props} />;
}
