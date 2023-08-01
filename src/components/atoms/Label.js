// className(CSS 적용 위한 클래스명)
// props: htmlFor(Input 구분자), children(자식 노드(라벨 글씨))
export default function Label({ className = null, ...props }) {
  return <label className={className} {...props} />;
}
