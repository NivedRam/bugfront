import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import './View.css'

function View() {


  const [form, setForm] = useState({})
  const [users, setUsers] = useState([])

  const handleform = (e) => {

    console.log(e.target.value, e.target.name);
    setForm({
      ...form,    
      [e.target.name]: e.target.value
    })


  }

  const handleSubmit= async (e)=>{
    e.preventDefault();
    const response = await fetch('http://localhost:8080/demo',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'content-Type':'application/json'
      }
    })
    const data=await response.json();

    console.log(data);
    alert("Bug Added Successfully")

    // window.location.reload(false)


  }
  const getUsers= async()=>{
    const response=await fetch('http://localhost:8080/demo',{
      method:'GET',
    })
    const data=await response.json();

    setUsers(data); 
  }
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div> <Navbar bg="dark" variant="dark" >
    <Container>
      <Navbar.Brand href="#home">Bugg Tracker</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
 
              <Link to={`show-view/`} >
                 <Nav.Link href="#features">Show All Buggs
                 </Nav.Link>
              </Link>
       

      </Nav>
    </Container>
  </Navbar>

  <div className='addbug'>
    <h1 className='bugghead'>Add Buggs</h1>
  {/* <Container>

  <Form onSubmit={handleSubmit}>
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Bug ID</Form.Label>
    <Form.Control type="Text" placeholder="Enter Bug Id"  onChange={handleform}/>

    
    
  </Form.Group>
  <Form.Group className="mb-3"  controlId="formBasicEmail">
    <Form.Label>Bug Name</Form.Label>
    <Form.Control type="Text" placeholder="Enter Bug Id"  onChange={handleform} />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Description</Form.Label>
    <Form.Control type="Text" placeholder="Enter Bug Id"  onChange={handleform} />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Due Date</Form.Label>
    <Form.Control type="text" placeholder="Enter Bug Id"  onChange={handleform} />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Project Name</Form.Label>
    <Form.Control type="Text" placeholder="Enter Bug Id"   onChange={handleform}/>
    
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>File URL</Form.Label>
    <Form.Control type="Text" placeholder="Enter Bug Id"  onChange={handleform} />
    
  </Form.Group>
  


 
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Accept T&C" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Add Bug
  </Button>
</Form>







</Container> */}



<form onSubmit={handleSubmit} classsnam>
        {/* <p >{JSON.stringify(form)}</p> */}
      
      
        <input type="number" placeholder='bug_id' name='bug_id' onChange={handleform}></input>
       
        <input type="text" placeholder='title' name='title' onChange={handleform}></input>
        
        <input type="text" placeholder='description' name='description' onChange={handleform}></input>
      
        <input type="text" placeholder='due_date' name='due_date' onChange={handleform}></input>
    
        <input type="text" name='project'placeholder='project' onChange={handleform}></input>
       
        <input type="text" name='reporter' placeholder='reporter' onChange={handleform}></input>
       
        <input type="text" name='fileUrl'placeholder='fileUrl' onChange={handleform}></input>
        <button type="submit"> submit</button>
        

      </form>








</div>

</div>
  )
}

export default View