import Container from '../atoms/Container'
import InputGroup from '../molecules/InputGroup'
import Button from '../atoms/Button'
import useInput from '../../hooks/useInput'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/user'
import Title from '../atoms/Title'
import { useDispatch, useSelector } from 'react-redux'
import { setEmail } from '../../store/slices/userSlice'

const LoginForm = () => {
  // 모든 reducer함수를 호출하려면 먼저 dispatch
  const dispatch = useDispatch()
  // 데이터 가져올 때
  // state 모든 state를 다담고 있는 최상위 state
  const email = useSelector(state => state.user.email)
  const { value, handleOnChange } = useInput({
    email: '',
    password: '',
  })
  const navigate = useNavigate()
  const loginReq = () => {
    login({
      email: value.email,
      password: value.password,
    })
      .then(res => {
        dispatch(
          setEmail({
            user: value.email,
          }),
        )
        const item = {
          value: res.headers.authorization,
          expiration: Date.now() + 600000,
        }
        localStorage.setItem('user', JSON.stringify(item))
        alert('로그인 성공!')
        navigate('/')
      })
      .catch(err => {
        console.log(err.request.response)
        alert(err.request.response)
      })
  }
  return (
    <Container>
      <Title>로그인</Title>
      {/*데이터 가져오기*/}
      <span>{email}</span>
      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="이메일(아이디) 입력해주세요"
        label="이메일"
        value={value.email}
        onChange={handleOnChange}
      />
      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="**********"
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />
      <Button
        onClick={() => {
          loginReq()
        }}
      >
        로그인
      </Button>
    </Container>
  )
}

export default LoginForm
// api 로그인요청
//   try{
//   loginReq();
//   console.log('로그인 완료')
// }
//   catch (error) {
//     console.error(error.response.data.error.message)
//     }

// const loginReq = () => {
//   // loginRequest();
//   // login({
//   //   email :value.email,
//   //   password : value.password,
//   // })
//   //   .then((res) => {
//   //     console.log(res);
//   //     //여기서 setEmail에 들어가는 값: payload가 된다.
//   //     // payload는 obj를 받는다.
//   //     dispatch(
//   //       setEmail({
//   //       email: value.email,
//   //       })
//   //     );
//   //   })
//   //   .catch((err)=> {
//   //     console.log('err', err);
//   //   });
// };
