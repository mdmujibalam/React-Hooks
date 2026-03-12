//usePrevious custom hook in React allows you to store the previous value of a state 
// or a prop to be accessed in subsequent renders.

import React, {useEffect, useRef} from 'react'

const usePrevious = (value) => {
   const prevRef= useRef();

   useEffect(()=>{
    prevRef.current=value;
   },[value]);

  return prevRef.current;
}

export default usePrevious