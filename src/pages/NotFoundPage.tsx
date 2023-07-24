import React from 'react';
import { AiOutlineExclamation } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Container from '../components/atoms/Container';
import SimpleButton from '../components/atoms/SimpleButton';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const text = '관련 문의는 고객센터로\n연락부탁드립니다';

  return (
    <Container className='-mt-14 flex h-screen flex-col items-center justify-center space-y-4 text-gray-400'>
      <AiOutlineExclamation size={32} />
      <h1>페이지를 찾을 수 없습니다.</h1>
      <p className='whitespace-pre text-center text-sm'>{text}</p>
      <div className='w-16'>
        <SimpleButton
          onClick={() => {
            navigate(-1);
          }}
        >
          이전
        </SimpleButton>
      </div>
    </Container>
  );
};

export default NotFoundPage;
