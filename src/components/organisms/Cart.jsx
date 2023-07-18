import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../atoms/SubmitButton';
import CheckGroup from '../molecules/CheckGroup';
import CheckContainer from '../atoms/checklist/CheckContainer';


const initProducts = [
    {
      name: '상품1',
      isChecked: true,
      quantity: 1,
    },
    {
      name: '상품2',
      isChecked: true,
      quantity: 1,
    },
    {
      name: '상품3',
      isChecked: true,
      quantity: 1,
    },
  ];


const Cart = () => {

  const navigate = useNavigate()
  const [products, setProducts] = useState(initProducts);
  const [buylist, setBuylist] = useState([])


  return (
    <CheckContainer>

        {
          products.map((item, i)=>(
            <CheckGroup
              state={ products }
              setState={ setProducts }
              checklist={ buylist }
              setChecklist={ setBuylist }
              index={ i }
              key={ i }
              >
              <div> {products[i].name} </div>
            </CheckGroup>
          ))
        }
        
      <SubmitButton 
        disabled={(buylist.length ? false : true)}
        onClick={()=>{navigate("/signup")}}
        > 
        주문하기 
      </SubmitButton>

      
      <p>{JSON.stringify(products)}</p>
    </CheckContainer>
  )
}

export default Cart