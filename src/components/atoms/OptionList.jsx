import * as Option from '../../styles/atoms/OptionList';

const OptionList = ({items, onClick}) => {
    const optionList = items.map((item, index) => (
        <Option.OptionItem key={item.id} onClick={() => onClick(item)}>
            <Option.OptionItemId>{index+1}</Option.OptionItemId>.&nbsp;&nbsp;{item.optionName}
            <Option.OptionPrice>
                {item.price} 원
            </Option.OptionPrice>
        </Option.OptionItem>
    ))
    return(
        <Option.Container>
            {optionList}
        </Option.Container>
    );
};

export default OptionList;