import { useState } from 'react';
import styled from 'styled-components';

const RadioBtn = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('You have submitted:', selectedOption);
  };

  return (
    <RadioBtnContainer>
      <h4>라디오버튼</h4>
      <div className="row mt-5">
        <div className="col-sm-12">
          <form onSubmit={handleFormSubmit}>
            <div className="form-check">
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="option1"
                  checked={selectedOption === 'option1'}
                  onChange={handleOptionChange}
                  className="form-check-input"
                />
                Option 1
              </label>
            </div>
            <div className="form-check">
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="option2"
                  checked={selectedOption === 'option2'}
                  onChange={handleOptionChange}
                  className="form-check-input"
                />
                Option 2
              </label>
            </div>
            <div className="form-check">
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="option3"
                  checked={selectedOption === 'option3'}
                  onChange={handleOptionChange}
                  className="form-check-input"
                />
                Option 3
              </label>
            </div>
            <div className="form-group">
              <button className="btn btn-primary mt-2" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </RadioBtnContainer>
  );
};

const RadioBtnContainer = styled.div`
  text-align: center;
`;

export default RadioBtn;
