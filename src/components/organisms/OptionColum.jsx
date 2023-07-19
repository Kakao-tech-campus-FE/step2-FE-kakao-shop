import { useState } from "react";
import OptionList from "../atoms/OptionList";
import { comma } from "../../utils/convert";
import Counter from "../atoms/Counter";
import { useMutation } from "react-query";
import Button from "../atoms/Button";
import { addCart } from "../../services/cart";
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const queryClient = new QueryClient();

const OptionColum = ({ product }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    
    const handleOnClickOption = (option) => {
        
        const isOptionSelected = selectedOptions.find(
            (el) => el.optionId === option.id
        );
        if (isOptionSelected) {
            return
        }
        //prototype.methods 는 필수
       
        setSelectedOptions((prev) => [
            ...prev, //그냥넣어주면 그 전에것들이 삭제되므로
            {
                optionId: option.id,
                quantity: 1,
                price: option.price,
                name: option.optionName,

            }
        ])
    }
    const handleOnChange = (count, option) => {
        setSelectedOptions((prev)=>{
            return prev.map((el)=>{
                if(el.optionId === option.optionId){
                    return {
                        ...el,
                        quantity:count,
                    };
                }
                return el
            })
        })
        //df
    }

    /*장바구니 담기 api 요청*/
    const {mutate}=useMutation({
        mutationFn: addCart,
    })
    
    // mutate({
    //     optionId:option.id,
    //     quantity:count,
    // })
    
    //console.log(product)
    return (
        // <QueryClientProvider client={queryClient}>
            <div>
            <h3>옵션선택</h3>
            <OptionList
                options={product.options}
                //사용자가 선택한 옵션
                onClick={handleOnClickOption}
            >
            </OptionList>
             {/* 담긴 옵션 표기하기 */}
                
             {selectedOptions.map((option) =>(
                <ol key={option.id}>
                    <li >
                        <Counter
                            value={option.quantity} 
                            //리렌더링이슈로 날려줌
                            //근데 없애면 안나타남...
                            onIncrease={(count) => handleOnChange(count,option)}
                            onDecrease={(count) => handleOnChange(count, option)}
                        >
                        </Counter>
                        <span>{option.name}</span>
                        <span>{comma(option.price)}원</span>
                       
                    </li>
                    </ol>
                )
                )} 
           
            <hr/>
            <button
                onClick={() => {
                    
                    mutate(
                        selectedOptions.map((el) => {
                            return {
                                optionId:el.id,
                                quantity:el.quantity,
                            };
                        }),//payload
                        {
                            onSuccess: () => {
                                alert('장바구니에 담김.')
                            },
                            onError: () => {
                                alert('장바구니에 담기 실패.')
                            }
                        }
                    );
                }}
            >장바구니에 담기
            </button>
            <button>구매하기</button>
            
            <span>
                총수량:{''}
                {
                    selectedOptions.reduce((acc, cur) => {
                        return acc + cur.quantity;
                    }, 0)
                }개
            </span>
            <span>
                총상품금액:{'' }
                {
                   comma( selectedOptions.reduce((acc, cur) => {
                        return acc + cur.quantity * cur.price;
                    }, 0))
                }원
            </span>
        </div >
        // </QueryClientProvider>
        
    );
};

export default OptionColum;