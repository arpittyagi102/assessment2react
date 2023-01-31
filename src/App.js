import React, { useState } from 'react';
import { Button, Label } from 'semantic-ui-react';
import "./Components/CounterSemanticUI.css"

function Counter() {
    const [count, setCount] = useState(0);    
    const [buttonClass, setButtonClass] = useState("primary");
    const Decreasingfun = () =>{
        if(count <= 0){
            setCount(0)
            setButtonClass("secondary")   
        }
        else{
            setCount(count - 1)
            setButtonClass("primary")  
        }
    }
    const Increasingfun = () =>{
        setCount(count + 1)
        setButtonClass("primary")  
    }
return (
    <div className='main' style={{height:'200px',alignContent:'center'}}>
        <h3>A Counter Application Using useState()</h3>
        <div className='Card' style={{width:'400px',margin:'auto'}}>
            <Label className='Count'size="huge">Count </Label>
            <Label className='CountNumber'size="huge">{count}</Label>
            <Button.Group>
                <Button className="increment" onClick={Increasingfun}> Increment </Button>
                <Button className={buttonClass} onClick={Decreasingfun}>Decrement </Button>
            </Button.Group>
        </div>
    </div>
  );    
}

export default Counter;