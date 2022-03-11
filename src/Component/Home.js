import { Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import React, { useEffect, useState } from "react";
import { ListList } from "semantic-ui-react";


// const list_item =  localStorage.getItem("test")?JSON.parse(localStorage.getItem("test")) :[]


const Home = () => {
    // make state here
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");
    // const [data, setdata] = useState([]);
    const [list, setList] = useState([])

    // make event here
    const Send = () => {
        let item = JSON.parse(localStorage.getItem("test"));
        let object = { name, email, status }
        const data = item ? item : []
        data.push(object);
        setList([...data]);
        setName('');
        setEmail('');
        setStatus('');
        localStorage.setItem("test",JSON.stringify(data))
        document.getElementById("myform").reset();

    }


    useEffect(() => {
        let list = JSON.parse(localStorage.getItem("test"))    
        setTimeout(()=>{
            setList(list);
        },1000)
    },[list])

    const Active = (i) => {
        let current_id = list[i];
        current_id.status = 'active' ? 'unactive' : 'active'
        setList(list)
        localStorage.setItem("test",JSON.stringify(list))
        console.log("123", list)
    }
    const UnActive = (i) => {
        let current_id = list[i];
        current_id.status = 'unactive' ? 'active' : 'unactive';
        setList(list);
        
        localStorage.setItem("test",JSON.stringify(list))
        console.log("321", list)
    }
    return (
        <div className="main">
            <h1>Home</h1>
            <div className="clearfix">
                <div className="left-content">
                    <div className="form">
                        <div className="form-inner">
                            <form id="myform">
                                <div className="form-field">
                                    <TextField id="standard-basic"
                                        label="Name"
                                        variant="outlined"
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-field">
                                    <TextField id="standard-basic"
                                        label="Email"
                                        variant="outlined"
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-field">
                                    <select className="select" name="status" id="status"
                                        onChange={(e) => setStatus(e.target.value)}
                                        required
                                    >
                                        <option value="">None</option>
                                        <option value="active">Active</option>
                                        <option value="unactive">UnActive</option>
                                    </select>
                                </div>
                                <div className="form-field">
                                    <Button id="send" variant="contained"
                                        endIcon={<SendIcon />}
                                        onClick={Send}
                                    >
                                        Send
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {
                    list ?

                        <div className="right-content">
                            <div className="table">
                                <table border="1">
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Status</th>
                                    </tr>
                                    <tbody>
                                        {
                                            list.map((item, i) =>
                                                item.status === 'active' ?
                                                    <tr key={i}>
                                                        <td>{i}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.email}</td>
                                                        <td>
                                                          <button className="active"
                                                          onClick={()=>Active(i)}
                                                          >{item.status}</button>  
                                                        </td>

                                                    </tr>
                                                    :
                                                    <tr key={i}>
                                                        <td>{i}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.email}</td>
                                                        <td>
                                                         <button className="dactive"
                                                         onClick={()=>UnActive(i)}
                                                         >{item.status}</button>   
                                                        </td>
                                                    </tr>

                                            )
                                        }
                                        </tbody>
                                </table>










                                {/* {/* <div className="clerfix">
                            <div className="Active">
                                <div className="active-heading">
                                    <h3>Active</h3>
                                    </div>
                                    {
                                        list.filter((element) => {
                                            return element.status === 'active'
                                        }).map((item,i) =>
                                        <div className="card" key={i} onClick={()=> setTimeout(Active(i),2000)}>
                                            <div className="clearfix">
                                            <span className="id">{i}</span>
                                                <span className="sap">{item.name}</span>
                                                <span className="sap1">{item.email}</span>
                                                <span className="sap">
                                                    <button className="active" 
                                                    >{item.status}</button>
                                                </span>
                                            </div>
                                        </div>
                                        )
                                    }
                            </div>
                            <div className="Unactive">
                                <div className="unactive-heading">
                                    <h3>Un-Active</h3>
                                </div>
                                {
                                        list.filter((element) => {
                                            return element.status === 'unactive'
                                        }).map((item,i) =>
                                        <div className="dcard" key={i} onClick={()=> UnActive(i)}>
                                            <div className="clearfix">
                                            <span className="id">{i}</span>
                                                <span className="sap">{item.name}</span>
                                                <span className="sap1">{item.email}</span>
                                                <span className="sap">
                                                    <button className="dactive">{item.status}</button>
                                                </span>
                                            </div>
                                        </div>
                                        )
                                    }
                            </div>
                        </div> */}
                            </div>
                        </div>
                        : <p className="errmsg">No Record Available</p>
                }
            </div>

        </div>
    )
}


export default Home;