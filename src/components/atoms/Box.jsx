const Box  = ({ children, className= ""}) => {
  // box 요소의 내용, css 적용위한 className
  // 이때 강의에서 box.css도 import 했는데 , 굳이 왜?
  return (
    <div className= {`box ${className}`}>
      {children}
    </div>
  )
}

export default Box;