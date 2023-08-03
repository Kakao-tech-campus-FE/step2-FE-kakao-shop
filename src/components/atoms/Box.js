// className(CSS 적용 위한 클래스명)
// props: children(자식노드)
export default function Box({ className = null, ...props }) {
  return <div className={className} {...props} />;
}
