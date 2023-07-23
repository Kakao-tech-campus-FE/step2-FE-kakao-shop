const Star = ({count, color}) => {
    return (
        <>
            {new Array(count).fill('').map((_, i) => (
            <span style={{color: color}} key={i}>★</span>
            ))}
        </>
    );
};

export default Star;