import { useState } from "react";
import OptionList from "../atoms/OptionList";
import ProductSlice from "../../store/slices/ProductSlice";
import { useMutation } from "react-query";
import Counter from "../atoms/Counter";
import { comma } from "../../utils/convert";
import { addCart } from "../../services/addCart";


const OptionColumn = ({ product }) => {
  const [selectedOptions, setselectedOptions]=useState([ ]);
    
  const handleOnClickOption=(option)=>{

    // const sampleArray= [1,2,3];
    // const findTwo=sampleArray.find((el)=>{
    //   return el ===2;
    // });
    const isOptionSelected=selectedOptions.find(
      (el)=> el.optionId===option.id
    );

    if(isOptionSelected){
      // setselectedOptions((prev)=>
      // prev.map((el)->
      // el.optionId===option.id
      // ?{...el.}))
      return;
    }
      setselectedOptions((prev)=>[
      ...prev,
      {
        optionId: option.id,
        quantity: 1,
        price: option.price,
        name: option.optionName
      }
    ])
  }
  const handleOnChange=(count, optionId)=>{
    setselectedOptions((prev)=>{
    return prev.map((el)=>{
      if(el.optionId===optionId){
        return{
          ...el,
          quantity: count,
        };
      }
      return el;
    });
  });
};
//prototype.methods는 알아야한다.필수.
//Array메서드: 
//find, findIndex
//map, forEach, some, every
//reduce, 
//splice, slice


//장바구니 담기 api 처리
//react-query 사용 post
const{mutate}=useMutation({
  mutationFn: addCart,
});

  return (
    <div className="option-column">
      <h3>옵션 선택</h3>
      {/* // 옵션담기 할수있는영역 */}
      <OptionList 
        options={product.options}
        // 사용자가 선택한 옵션
        onClick={handleOnClickOption}
//장바구니 담기 api = optionId, quantity
        
      /> 
      
      {/* 담긴옵션 표기 */}
      {selectedOptions.map((option)=>(
        <ol key={option.id} className="selected-option-list">  
          <li className="selected-option">
            <Counter
            onIncrease={(count)=>handleOnChang(count, option.id)}
            onDecrease={(count)=>handleOnChange(count, option.id)}
            />
          <span className="name">{option.name}</span>
          <span className="price">{comma(option.price)}원</span>
          </li>
        </ol>
      ))}
<hr />
<div className="total-price">
  <span>
    총 수량:{""}
    {comma(selectedOptions.reduce((acc, cur)=>{
      //acc:이전값 cur:현재선택된 엘리먼트
      return acc+cur.quantity;
    }, 0)
    )}개
  </span>
</div>

{/* ui에서 필요한 정보 = 옵션이름, 가격,수량, 총가격 */}
      <div className="button-group"></div>
      {/* 장바구니 담기 */}
      <Button
      onClick={()=>{
        mutate(
          selectedOptions.map(el=>{
          return{
            optionId:el.id,
            quantity:el.quantity
          }
        }),{
          onSuccess:()=>{
            alert("장바구니에 담겼습니다.")
          },
          onError:()=>{
            alert("장바구니 담기에 실패했습니다.")
          }
        }
        );
      }}
>
</Button>
    </div>
  );
};


export default OptionColumn;