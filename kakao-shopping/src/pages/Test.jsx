import './Test.css';
import Toggle from '../components/Toggle/Toggle'
import Toast from '../components/Toast/Toast'

const Test = () =>  {
  return (
    <div className="test">
      Hello World!
      <br/>
      <Toggle>
         이건 토글 입니다.
      </Toggle>
      <Toast>

      </Toast>
    </div>
  );
}

export default Test;
