import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Jeff',
    age: 42,
    message: '$125,000',
  });

  const handleClick = () => {
    // setPerson({ ...person, message: '$132,000 ' });
    setName('Jeff Graham');
    setAge(43);
    setMessage('$150,000');
  };

  const [name, setName] = useState('Jeff');
  const [age, setAge] = useState(42);
  const [message, setMessage] = useState('$132,000');

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={handleClick}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
