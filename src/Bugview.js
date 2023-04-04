import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

// import { useState } from 'react';
// import { useEffect } from 'react';
function Bugview() {

    const [bugdata, setBugdata] = useState([])
    const par = useParams()
    const ids = par.bugid

    const getbug = async () => {
        const response = await fetch(`http://localhost:8080/getbug/${ids}`, {
            method: 'GET',
        })
        const data = await response.json();

        setBugdata(data);
    }
    useEffect(() => {
        getbug();
    }, []);


    const deletebug =async (ids) => {



        fetch(`http://localhost:8080/deletebug/${ids}`, {
            method: 'DELETE'
        })



        // window.location('/')
    }
    return (
        <>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Bugg Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={`/`}>
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>

     
              <Nav.Link href="#features">Show All Buggs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


            {/* <div className='bugdata'>
                <h1>{bugdata.title}</h1>
                <h3>{bugdata.bug_id}</h3>
                <h4>{bugdata.description}</h4>
                <h3>{bugdata.due_date}</h3>
                <h3>{bugdata.project}</h3>
                <h3>{bugdata.reporter}</h3>
                <h3>{bugdata.fileUrl}</h3>

            </div>
             <button>Delete</button>
            <button>Update</button> */}

            
            <Card className="a1 my-4 mx-4" style={{ width: '28rem', display: "flex", flexDirection: "row",alignItems:'center' }}>
                    <Card.Body >
                      <Card.Title>Bug Name:{bugdata.title}</Card.Title>
                      <Card.Text>
                       Bug Id: {bugdata.bug_id}
                      </Card.Text>
                      <Card.Text>
                        Description:{bugdata.description}
                      </Card.Text>
                      <Card.Text>
                       Due Date: {bugdata.due_date}
                      </Card.Text>
                      <Card.Text>
                       Project Name: {bugdata.project}
                      </Card.Text>
                      <Card.Text>
                      Reporter  {bugdata.reporter}
                      </Card.Text>
                      <Card.Text>
                       File URL: {bugdata.fileUrl}
                      </Card.Text>
                      <Card.Text>
                       Priority: {bugdata.priority}
                      </Card.Text>
               <button >Delete</button>
               <button>Update</button> 
                    </Card.Body>
                  </Card>

        </>
    )









    // return (




    // )




}
export default Bugview