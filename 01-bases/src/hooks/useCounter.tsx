import { useState } from 'react';

export const useCounter = () => {

    const [count, setCount] = useState<number>(10);

  const increaseBy = (num: number) => {
    // setCount(count + num);

    setCount(Math.max(0, count + num));
  };
    
    return {
        //Properties
        count,
        //Actions
        increaseBy,
    };
};