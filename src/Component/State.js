import React, { useEffect, useRef, useState } from 'react'


const State = () =>{
    const [state,setState] = useState("javascript language");
    const [ color, setColor ] = useState("navy");
    const inputRef = useRef(null);
    const center = {
        textAlign:"center"
    }
    useEffect(()=>{
        document.body.style.backgroundColor=color;
    },[color])
    const changetext = () =>{
            setState("React Tutorial")
    }
    const changecolor = () =>{
        console.warn("click");
        setColor('white')
    } 
    const cleardata = () =>{
        console.log(12313,inputRef.current.value)
        inputRef.current.value = ""
        inputRef.current.focus();
    }
return(
    <div style={center}>
        <h2 onClick={changetext}>welcome to <i>{state}</i> click me to change</h2>
        <button onClick={changecolor}>change color</button>

        <hr/>

        <input type="text"
        ref={inputRef}
        />
        <button onClick={cleardata}>clear</button>
    </div>
)

}

export default State;