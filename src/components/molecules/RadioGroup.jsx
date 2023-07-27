import React from 'react'
import RadioItem from './RadioItem'

const RadioGroup = ( { itemList, state, onChange } ) => {
	/* itemList = [ { id: id, label: lable }, ... ] */
	return (
		<>
			{itemList.map((item) => (
				<RadioItem 
					id={item.id} checked={state === item.id} 
					onChange={onChange} label={item.label}
				/>
			))}
		</>
  )
}

export default RadioGroup