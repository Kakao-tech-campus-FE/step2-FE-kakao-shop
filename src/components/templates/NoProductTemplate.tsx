import React from 'react';
import { AiOutlineExclamation } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Container from '../atoms/Container';
import SimpleButton from '../atoms/SimpleButton';

const NoProductTemplate = () => {
  const text = '현재 상품이 판매금지 또는 삭제되었거나\n 존재하지 않는 상품입니다.';
  const navigate = useNavigate();

  return (
    <Container className='-mt-14 flex h-screen flex-col items-center justify-center space-y-4 text-gray-400'>
      <AiOutlineExclamation size={32} />
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

export default NoProductTemplate;
