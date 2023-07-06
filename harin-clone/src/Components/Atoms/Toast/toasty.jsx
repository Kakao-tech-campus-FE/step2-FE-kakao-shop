import React, { useEffect, useState } from "react"

const UpToast = () => {

  return (
    <div className="toasty">This is Toast!!</div>
  )
}

const Toasty = () => {
  const [isClick, setClick] = useState(false)

  const toastState = () => {
    setClick(!isClick)
    }

  useEffect(()=> {
    if (isClick) {
      setTimeout(()=>setClick(!isClick), 1000)
    };
  })


  return (
    <div className="toasty-frame">
      <button type="button" onClick={toastState}>toast</button>
      {isClick && <UpToast />}
    </div>

  )
}


export default Toasty