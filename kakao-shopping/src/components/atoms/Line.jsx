const Anchor = ({
    isHorizontal=true, // Line의 방향
    className ="", // class
    id ="", // id
    style ={}, // style
}) => {

    const horizontal = isHorizontal ? {width: "1px", minHeight: "100%"} : {width: "100%", height: "1px"}

    return (
            <div className={`bg-dark align-self-stretch flex-shrink-0 flex-grow-0 flex-basis-auto ${isHorizontal ? "mx-3" : "my-3"} ${className}`} id={id} style={{...horizontal, ...style}}>
            </div>
    );
};

export default Anchor;