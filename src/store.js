import {createContext, useState} from 'react';

const ComponentContext=createContext();

function Provider(){
  const [count,setCount]=useState(5);

  const valueToShare={
    count:count,
    incrementCount:()=>{
      setCount(count+1);
  }
}
  return( <ComponentContext.Provider value={valueToShare}>
         {children}
         </ComponentContext.Provider>
        )
}
export {Provider};
export default ComponentContext;