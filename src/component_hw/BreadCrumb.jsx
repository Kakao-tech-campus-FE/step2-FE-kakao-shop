import React, { useState } from 'react'
import { styled } from 'styled-components'

function BreadCrumb() {
  const category = {
    음료: ["탄산", "차", "주스"],
    탄산: ["아이스티", "이온음료", "탄산음료", "에이드", "무알콜음료"],
    차: ["전통차", "녹차", "홍차", "율무차", "보리차"],
    주스: ["과일음료", "비타민음료", "식혜"],
    과일음료: ["사과주스", "감귤주스"]
  }

  const [location, setLocation] = useState(["음료"])

  const handleLocationClick = (e) => {
    setLocation((prev) => {
      const prevState = [...prev]
      while (prevState[prevState.length -1] !== e.target.innerText){
        prevState.pop()
      }
      return prevState;
    })
  }

  const handleCategoryClick = (e) => {
    setLocation((prev) =>  [...prev, e.target.innerText])
  }



  return (
    <>
      <Location>
        {location.map((ele) => (
          <span key={ele} onClick = {handleLocationClick}>
            {ele}
          </span>
        ))}
      </Location>

      <Category>
        {category[location[location.length - 1]] && 
          category[location[location.length -1]].map((ele) => (
            <p key={ele} onClick={handleCategoryClick}>
              {ele}
            </p>
          ))
        }
      </Category>
    </>
  )
}

export default BreadCrumb

const Location = styled.div`
  margin: 10px;
  span {
    cursor: pointer;
    color: #aaa;
    font-size: 15px;
    font-weight: 800;
    margin-left: 5px;
  }
  span:last-child{
    color: black;
  }
  span:not(:first-child)::before{
    content: "> ";
  }

`

const Category = styled.div`
  background-color: rgb(249,249,249);
  border-top: 1px solid rgb(242,242,242);
  margin: 10px;
  padding: 20px 20px 0 20px;
  display: flex;
  width: 780px;
  flex-wrap: wrap;
  font-size: 15px;
  color: rgb(153,153,153);
  p {
    cursor: pointer;
    font-weight: 600;
    height: 40px;
    width: 50%;
  }
`
