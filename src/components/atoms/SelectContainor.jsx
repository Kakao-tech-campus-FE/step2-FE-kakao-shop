import React from 'react'
import { styled } from 'styled-components'

function SelectContainor({select, children, contentstyle, style}) {
  return (
    <SelecterContainor select={select} contentstyle={contentstyle} style={style}>{children}</SelecterContainor>
  )
}

export default SelectContainor

const SelecterContainor = styled.div`
  margin: 0px;
  padding: 0px;
  display: block;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  &::${(props)=>
    props.select
  }{
    position: ${(props)=>props.contentstyle.position};
    right: ${(props)=>props.contentstyle.right};
    top: ${(props)=>props.contentstyle.top};
    width: ${(props)=>props.contentstyle.width};
    height: ${(props)=>props.contentstyle.height};
    background-color: ${(props)=>props.contentstyle.backgroundColor || 'rgba(34, 34, 34, .2)'};
    content: '${(props)=>{return props.contentstyle.content || ``}}';
  }
`