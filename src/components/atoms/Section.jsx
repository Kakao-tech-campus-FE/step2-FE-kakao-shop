import React from 'react'

const Section = (props) => {
  return (
    <section className='
        flex flex-col items-stretch w-[95%] max-w-[900px] mx-auto
    '>
        {props.children}
    </section>
  )
}

export default Section