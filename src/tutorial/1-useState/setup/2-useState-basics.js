import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('Hello World'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  const [text, setText] = useState('random title');

  const handleClick = () => {
    text === 'random title' ? setText('hello world') : setText('random title');
  };

  return (
    <>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default UseStateBasics;
