import React from 'react';
import { AiOutlineExclamation } from 'react-icons/ai';
import Container from '../atoms/Container';
import Button from '../atoms/Button';

const NoProductTemplate = () => {
  const text = '현재 상품이 판매금지 또는 삭제되었거나\n 존재하지 않는 상품입니다.';
  return (
    <Container className='-mt-14 flex h-screen flex-col items-center justify-center space-y-4 text-gray-400'>
      <AiOutlineExclamation size={32} />
      <p className='whitespace-pre text-center text-sm'>{text}</p>
      <div className='w-16'>
        <Button
          onClick={() => {
            // TODO
          }}
        >
          이전
        </Button>
      </div>
    </Container>
  );
};

export default NoProductTemplate;
