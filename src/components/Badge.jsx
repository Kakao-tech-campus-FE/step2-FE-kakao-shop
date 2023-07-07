import React from "react"
import styled from "styled-components"

function Badge({children, styleArgument}) {
  return (<>
        <StyeldBadge styleobj = {styleArgument}>{children}</StyeldBadge>
  </>
  )
}

export default Badge


const StyeldBadge = styled.div`
  background-color: ${(props) => {if(props.styleobj === "blue") return "#0064FF"
  else if(props.styleobj === "gray")
  return "#646464"
  else if(props.styleobj === "green")
  return "#46AA46"
  else if(props.styleobj === "red")
  return "#CD2E57"
  else
  return "#FFC800"
}};
  width: 5rem;
  margin: 0.25rem 0.2rem;
  font-size: 1rem;
  color: white;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  overflow: visible;
`