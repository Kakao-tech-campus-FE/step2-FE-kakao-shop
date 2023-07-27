import React, { useEffect, useState } from "react"

const UpToast = ({contents}) => {
  return (
    <div className="toasty">{contents}</div>
  )
}

const Toasty = ({ obs, className, contents }) => {
  const [isChange, setChange] = useState(false)

  useEffect(()=> {
    if (isChange) {
      setTimeout(()=>setChange(!isChange), 1000)
    };
  }, [ obs ])


  return (
    <div className="toasty-frame">
      {isClick && <UpToast contents={contents} />}
    </div>

  )
}


export default Toasty