import React, { useState } from "react";
import { ic_calculator } from "../../../declarations/ic_calculator/index";

function Counter() {
    
    const [hello, setHello] = useState('');
    async function firstStep() {
      
        setHello('...');
        let greeting = await ic_calculator.hello();
        console.log(greeting);
        setHello(greeting);
      
    }
    return (
        <React.Fragment>
        <h1>{ hello }</h1>
        <button onClick={firstStep}>Hello</button>
      </React.Fragment>
    );
  }
  
  export default Counter;
  

