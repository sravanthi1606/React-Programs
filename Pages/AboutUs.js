
import React ,{useState} from "react";
import axios from 'axios';
import Table from "react-bootstrap/Table";

const About=()=>{
    const [data,setData]=useState([]);
    const [postId,setPostid]=useState('');
    const[errorMsg,setErrorMsg]=useState('');

    const handleBackenedData=(event)=>{
        event.preventDefault();
        if(postId)
        {
            axios.get(`https://jsonplaceholder.typicode.com/posts`,{
                params:{_limit:postId,}
            }).then((response)=>{
                setData([response.data]);
                setErrorMsg("");
            }).catch((error)=>{
                console.log(error);
            })
        }
        else{
            setErrorMsg("Please enter a value");
            setData([]);
        }
    };

    return (
        <div>
            <h1>Get first ten record data </h1>
            <h1>List of Posts</h1>
            <form>
                <input 
                    type="text" 
                    name="postId" 
                    id="postId" 
                    value={postId} 
                    onChange={(event)=>setPostid(event.target.value)}>
                </input>
                <button type="submit" onClick={handleBackenedData}>Fetch Data</button>
            </form>
             {
                data?.length !==0 ? 
                (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>UserID</th>
                                <th>title</th>
                                <th>Body</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(({id,userId,title,body})=>(
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{userId}</td>
                                        <td>{title}</td>
                                        <td>{body}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                ) 
                : (
                    <h1>{errorMsg} </h1>
                )
            }
        </div>
    )
}
export default About;