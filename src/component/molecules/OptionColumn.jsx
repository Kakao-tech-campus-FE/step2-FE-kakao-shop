import OptionList from "../atoms/OptionList"

const OptionColumn = ({product}) => {
    return <div className="option-column">
        <h3>옵션 선택</h3>
        <OptionList />
        <hr />
        <div className="total-price">

        </div>
    </div>

}

export default OptionColumn