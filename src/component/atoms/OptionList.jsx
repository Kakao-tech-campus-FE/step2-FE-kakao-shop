import {comma} from '../../utils/convert';

const OptionList = ({options, list, onClick}) => {
  return (
    <ol className="option-list">
      {options.map((option, index) => (
        <li key={option.id} className='option' onClick={() => onClick(option)}>
          <span className='name'>
            {index + 1}. {option.optionName}
          </span>
          <span className='price'>{comma(option.price)}원</span>
        </li>
      ))}
    </ol>//순서가 있으면 <ol>이 좋다.
  );
};

export default OptionList;