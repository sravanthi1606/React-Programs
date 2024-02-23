import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Form,Table, Button } from "react-bootstrap";

const Career = () => {
    const [data, setData] = useState([]);
    const [title,setTitle]=useState('');
    const [author,setAuthor]=useState('');

    useEffect(() => {
        handleBackenedData();
    }, []);

    const handleBackenedData = () => {
        axios.get("http://localhost:3001/posts").then((response) => {
            setData(response.data);
        }).catch((error) => {
            console.log(error);
        })
    };
    const handleNewPost = (event) => {
        event.preventDefault();
        const formData = {
            "title": title,
            "author": author
        }
        axios.post("http://localhost:3001/posts", formData)
            .then((response) => {
                console.log(response);
                handleBackenedData();
                setTitle('');
                setAuthor('');
            })
            .catch((error) => console.log(error))
    }

    const handleDelete=(id)=>{
        axios.delete(`http://localhost:3001/posts/${id}`)
        .then((response) => {
            console.log(response);
            handleBackenedData();
            setTitle('');
            setAuthor('');
        })
        .catch((error) => console.log(error))
    }

    return (
        <div>
            <Form onSubmit={handleNewPost}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="enter author" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Add New Post
                </Button>
            </Form>

            {
                data?.length !== 0 ?
                    (
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>title</th>
                                    <th>Author</th>
                                    <th colSpan={2}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(({ id, title, author }) => (
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{title}</td>
                                            <td>{author}</td>
                                            <td><Button variant="warning" onClick={() => alert('edit')}>Edit</Button></td>
                                            <td><Button variant="danger" onClick={() => handleDelete(id)}>Delete</Button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    )
                    : (
                        <h1>No Records </h1>
                    )
            }
        </div>
    )
}
export default Career;