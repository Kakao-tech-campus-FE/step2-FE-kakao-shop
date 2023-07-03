import RadioBtn from '../atoms/RadioBtn';
import { useEffect } from "react"

const RadioBtnGroup = ({ style, setMinValue }) => {
  const radioInfo = [
    {value: "1", count: "1"}, 
    {value: "2", count: "2"}, 
    {value: "3", count: "3"}, 
  ]

  const handleRadioBtn = (value) => {
    setMinValue(value)
  }

  return (
    <>
      <h3 style={{marginBottom: '0'}}>최소 작업량 선택</h3>
      <div style={style}>
        {radioInfo.map(info => {
          return <>
            <RadioBtn name={"b"} value={info.value} onChange={() => {
              handleRadioBtn(info.value)
            }}>
              {info.count}
            </RadioBtn>
          </>
        })}
      </div>
    </>
  )
}

export default RadioBtnGroup