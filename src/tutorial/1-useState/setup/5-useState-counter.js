import React, { useState } from 'react';

const UseStateCounter = () => {
  let [value, setValue] = useState(0);

  const handleDecrease = () => {
    setValue(value - 1);
  };

  const handleReset = () => {
    setValue(0);
  };

  const handleIncrease = () => {
    setValue(value + 1);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>Regular Counter</h2>
        <h3>{value}</h3>
        <button className='btn' onClick={handleDecrease}>
          Decrease
        </button>
        <button className='btn' onClick={handleReset}>
          Reset
        </button>
        <button className='btn' onClick={handleIncrease}>
          Increase
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>More Complex Counter</h2>
        <h3>{value}</h3>

        <button className='btn' onClick={complexIncrease}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
