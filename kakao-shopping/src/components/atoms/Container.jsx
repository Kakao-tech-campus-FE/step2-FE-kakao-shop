const Container = ({className, children}) => { // 클래스명, 내용 텍스트
  return (
    <div className={className}>
      {children}
    </div>
  )
}
export default Container;