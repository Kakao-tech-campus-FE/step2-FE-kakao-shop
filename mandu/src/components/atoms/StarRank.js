const StarRank = ({rank}) => {
    return (
        <div className="flex items-center">
            {
                Array(5).fill(0).map((_, index) => (
                        <h1 key={"star" + index}
                            className={`text-2xl ${index < rank ? "text-yellow-400" : ""}`}>&#9733;</h1>
                    )
                )
            }
        </div>
    );

};

export default StarRank;