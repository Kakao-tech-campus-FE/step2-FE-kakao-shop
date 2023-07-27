import React, { useState } from 'react';
import Button from '../atoms/Button';
import { set } from 'lodash';

export default function PageButton({ page, setPage }) {
  const [activePage, setActivePage] = useState(0);
  const pageArray = Array(page).fill(0);
  return (
    <div className='flex justify-center'>
      {pageArray.map((_, index) => (
        <Button
          key={index}
          active={activePage === index}
          onClick={() => {
            setPage(index);
            setActivePage(index);
          }}
        >
          {index + 1}
        </Button>
      ))}
    </div>
  );
}
