import React, { memo } from 'react';

const ChildComponent = ({ number, setNumber }) => {
  console.log('child Componet');

  const onClickhandler = (number) => {
    setNumber(number);
  };
  return (
    <div>
      <button onClick={onClickhandler}>Child Up</button>
      <div>child Component: {number}</div>
    </div>
  );
};

export default memo(ChildComponent);
