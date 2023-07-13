const Box = ({children,  // 내용 텍스트
              className, // 클래스 이름
            }) => { 
  return (
    <div className={className}>
      {children}
    </div>
  )
}
export default Box;