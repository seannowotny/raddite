// @flow

import * as React from 'react';
import { useState } from 'react';

export const Counter = (): React.Node =>
{
   const [count, setCount] = useState(0);

   const makeCrementer = (amount: number) => 
   () => {
      setCount(count + amount);
   };

   const increment = makeCrementer(1);
   const decrement = makeCrementer(-1);

   return (
      <div>
         <p>Current Count: {count}</p>
         <button className="increment" onClick={increment}>Increment</button>
         <button className="decrement" onClick={decrement}>Decrement</button>
      </div>
   )
}
