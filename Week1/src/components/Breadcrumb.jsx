const Breadcrumb = ({ labelList }) => {
    const separator = ">";

    return(
        <>
            {labelList.map((element, idx) => {
                return(
                    <>
                        <span> {element} </span>
                        {idx < labelList.length - 1 && <span>{separator}</span> }
                    </>
                )
                
            })}
        </>
    )

}

export default Breadcrumb;