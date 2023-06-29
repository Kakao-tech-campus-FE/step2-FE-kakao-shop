import { useState } from 'react';

const Toggle = ({ title, content }) => {
  const [isCheck, setCheck] = useState(false);

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
          boxSizing: 'border-box',
          backgroundColor: 'gray',
          width: '100%',
          height: '60px',
          color: '#fff',
        }}
      >
        <button
          onClick={() => {
            setCheck((e) => !e);
          }}
        >
          {isCheck ? '▼' : '▶︎'}
        </button>
        <h1 style={{ fontSize: '30px', padding: '10px' }}>{title}</h1>
      </div>
      {isCheck && (
        <p
          style={{
            margin: '0',
            backgroundColor: 'skyblue',
            color: '#fff',
            padding: '10px 50px',
          }}
        >
          {content}
        </p>
      )}
    </>
  );
};

export default Toggle;
