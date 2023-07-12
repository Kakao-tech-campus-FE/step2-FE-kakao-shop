import { useState } from 'react';

// 비슷한 로직으로 작동하는 기능을 모아서 하나의 커스텀 훅으로 만든다!
// 얘는 회원가입란에서 각 입력란의 값을 받아 처리하는 기능
const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    // onChange에 대한 일관된 로직을 다룸(일종의 관습)
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        // console.log(`name : ${name} + value : ${value}`)

        // set함수는 이전값을 가져와서 사용하는 것이 정확성이 높다.
        setValue((prev) => ({ ...prev, [name]: value })); 
    };

    // 커스텀 훅에서 return 되는 요소들이 많을 경우, 객체로 리턴하여 받아쓰는것이 편하다
    // 배열로 전달하는데 쓰지 않는 요소가 있을 경우 받아쓸 때 [a, b, _(low-dash), d] 이렇게 써야한다는 단점이 있다.
    return [ value, handleOnChange ];
};

export default useInput; 