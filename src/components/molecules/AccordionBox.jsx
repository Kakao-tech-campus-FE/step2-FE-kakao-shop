import React, { useState } from 'react'
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const AccordionBox = ( { fixed, initialOpen, title, titleStyle, children } ) => {

  const handler = () => {
    if (fixed) {return}
    setOpen(prev => !prev)
  }
  const [open, setOpen] = useState(initialOpen)

  return (
    <AccordionContainer>
        <TitleBox title={true}
          onClick={handler} 
          titleStyle={titleStyle}
        >
          
          <div className='flex items-center w-full'>
            { title }
            { !fixed && 
              ( open 
                ? <RiArrowUpSLine className='ml-auto w-5 h-5'/> 
                : <RiArrowDownSLine className='ml-auto w-5 h-5'/>
              ) 
            }
          </div>
        </TitleBox>
        
        { open ? <ContentBox> {children} </ContentBox> : null }
        
    </AccordionContainer>
  )
}

export default AccordionBox


const AccordionContainer = (props) => {
  return (
    <section className={`
      flex-col 
      border border-solid border-gray-200 
      mb-3 
    `}>
      {props.children}
    </section>
  )
}

const TitleBox = (props) => {
  return (
    <div 
      className={`
        flex items-center
        font-semibold text-[1rem] border-b-2 border-solid border-gray-200 
        px-4 py-2 
        ${props.titleStyle}
      `}
      onClick={props.onClick}
    >
        {props.children}
    </div>
  )
}

const ContentBox = (props) => {
  return (
    <div className='
      flex flex-col w-full p-4 gap-2
      '>
        {props.children}
    </div>
  )
}
