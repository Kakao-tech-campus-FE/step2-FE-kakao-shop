import React from "react";


const BreadCrumb = () => {
  const clickHandler = () => {
    const inp = document.querySelector('#cont')      
    const addLoc = document.querySelector('#list')
    const liEle = document.createElement("li")

    liEle.textContent = inp.value
    liEle.href = '#'
    addLoc.appendChild(liEle)
  }

  return (
    <>
      <div>
        <input id="cont" type='text'/>
        <div className='breadBtn'>
          <button type="button" onClick={clickHandler}>add</button>
          <button>refresh</button>
        </div>
      </div>
      <div>
        <ul id='list'>
          <li href='#'>Home</li>
        </ul>
      </div>
    </>

  )
}


export default BreadCrumb;