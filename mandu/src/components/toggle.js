import styled from 'styled-components'

const Switch = styled.input`
  appearance: none;
  position: relative;
  border: 1px solid gray;
  border-radius: 1.25em;
  display: inline-flex;
  align-items: center;
  width: 4em;
  height: 2.5em;
  box-sizing: border-box;

  &:checked {
    background-color: ${(props) => props.color ?? "red"};
    border-color: ${(props) => props.color ?? "red"};

  }

  &:before {
    content: "";
    position: absolute;
    left: 0.25em;
    width: 1.7em;
    height: 1.7em;
    border-radius: 50%;
    background-color: gray;
    transition: left 250ms linear;
  }

  //before& checked
  &:checked:before {
    background-color: white;
    left: 1.95em;
  }


`;

function Toggle({color, onChange, on}) {


    return (
        <label className="toggle">
            <Switch role="switch" type="checkbox"
                    color={color}
                    onChange={onChange}
                    checked={on}
            />
            <span>{on ? "on" : "off"}</span>
        </label>

    )
}


export default Toggle;