import React ,{useEffect, useState} from "react";
import axios from 'axios';
import Table from "react-bootstrap/Table"

const Career=()=>{
    const [data,setData]=useState([]);

    // useEffect(()=>{
    //     handleBackenedData();
    // },[]);

    const handleBackenedData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            setData(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    };

    return (
        <div>
            <h1>List of Posts</h1>
            <button type="submit" onClick={()=>handleBackenedData()}>Fetch Data</button>
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
                    <h1>No records </h1>
                )
            }
        </div>
    )
}
export default Career;