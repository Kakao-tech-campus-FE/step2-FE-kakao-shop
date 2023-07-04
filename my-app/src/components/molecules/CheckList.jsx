import { useEffect, useState } from 'react';
import CheckBox from '../atoms/CheckBox';

const CheckList = ({style, setCount, setChecked }) => {
  const [dailyList, setDailyList] = useState([
    {id: "1", label: "카테캠 과제하기", checked: false}, 
    {id: "2", label: "코딩테스트 공부", checked: false},
    {id: "3", label: "특강 참석하기", checked: false},
    {id: "4", label: "책 읽기", checked: false},
  ])

  const handleCheckBoxChange = (id) => {
    setDailyList(prev => {
      return prev.map(checkbox => {
        if (checkbox.id === id) {
          return {...checkbox, checked: !checkbox.checked}
        }
        return checkbox
      })
    })
  }
  useEffect(() => {
    const checkedList = dailyList.filter(item => {
      return item.checked === true 
    })
    setChecked(checkedList.map(list => {return list.label}))
    setCount(checkedList.length)
  }, [dailyList])

  const selectAll = () => {
    const allChecked = dailyList.every(checkbox => checkbox.checked)

    setDailyList(prev => {
      return prev.map(checkbox => {
        return {...checkbox, checked: !allChecked}
      })
    })
  }

  return (
    <>
      <h3 style={{margin: '0'}}>CheckList</h3>
      <div style={style}>
        {dailyList.map(checkbox => {
          return <CheckBox 
            key={checkbox.id} 
            label={checkbox.label} 
            checked={checkbox.checked} 
            onChange={() => handleCheckBoxChange(checkbox.id)}
          />
        })}
      </div>
      <button onClick={selectAll}>전체 선택</button>
    </>
  )
}

export default CheckList