import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseby1, increaseby10, decreaseby1, decreaseby10 , increasebyvalue } from '../app/counterSlice';


const Counter = () => {
    const count = useSelector((state) => state.counter);   // Jo "name:counter" bnaye  h vhi h . 
    const dispatch = useDispatch();  // call the dispatch funcction()
    
    return (
        <>
            <h1> Counter Value = {count}  </h1>
            <button onClick={()=> dispatch(increaseby1())}> Increaseby1 </button>
            <button onClick={()=> dispatch(increaseby10())}> Increaseby10 </button>
            <button onClick={()=> dispatch(decreaseby1())}> Decreaseby1 </button>
            <button onClick={()=> dispatch(decreaseby10())}> Deccreaseby10 </button> 
            <button onClick={()=> dispatch(increasebyvalue(ayush))}> Increasebyvalue </button>
            
        </>
    )
}

export default Counter
 
// jjbhi niche se data ko bhejte h toh vo data payload ke under ati h    