import React, { useState } from "react";

const Swap = () => {
    const [ state , setState ] = useState({
        userList:[]
    })

    const submit = (event) =>{
        event.preventDefault();
        let userList = state.userList;
        console.log("submission prevented",state);
        userList.push({
            name:state.name,
            email:state.email
        })
        setState({
            ...state,
            userList,
            name:"",
            email:""
        })
    }
    return (
        <div className="swap-app">
            <h2>Swap Exaple</h2>
            <form>
                <input type="text"
                // value={state.name} 
                onChange={(e)=>setState({...state,name:e.target.value})}
                />
                <input type="text" 
                // value={state.email} 
                onChange={(e)=>setState({...state,email:e.target.value})}
                />
                <button onClick={submit}>Submit</button>
            </form>
            <hr/>
            <div className="data-table">
                {
                    state.userList ? 
                    <div>
                        
                    </div>
                    :"no"
                }
            </div>
        </div>
    )
}


export default Swap;