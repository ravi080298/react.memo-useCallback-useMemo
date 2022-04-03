import React, { useState, useCallback, useMemo } from 'react';
import './style.css';
import ChildComponent from './ChildComponent';

const arr = [1, 2, 3, 4, 6, 99, 100, 18, 1000];

export default function ParentApp() {
  const [localeState, setLocaleState] = useState(0);
  const [childState, setChildState] = useState(0);

  const increment = () => setLocaleState(localeState + 1);
  const childIncrement = (number) => setChildState(number + 1);

  const memoizedCallback = useCallback(
    (state) => {
      // console.log(state);
      childIncrement(state);
    },
    [childState]
  );

  const memoziedUseMemo = useMemo(() => getLargest(), []);

  function getLargest() {
    console.log('get largest number');
    return Math.max(...arr);
  }

  return (
    <div>
      <ChildComponent number={childState} setNumber={memoizedCallback} />
      <div>Parent componet: {localeState}</div>
      <button onClick={increment}>up</button>
      <h1>{memoziedUseMemo}</h1>
    </div>
  );
}
