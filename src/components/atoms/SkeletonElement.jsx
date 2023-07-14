import "../../styles/atoms/skeletonElement.css"
const SkeletonElement = ({ type }) => {
    const classes = `skeleton ${type}`
    return (
        <div className={classes}></div>
    )
}

export default SkeletonElement;