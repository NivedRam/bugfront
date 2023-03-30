import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Showbugs.css'


function Showbugs() {

  const [users, setUsers] = useState([])



  const getUsers = async () => {
    const response = await fetch('http://localhost:8080/demo', {
      method: 'GET',
    })
    const data = await response.json();

    setUsers(data);
  }
  // console.log(users);
  useEffect(() => {
    getUsers();
  }, []);




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
      <div>
        <h1> BUGS</h1>
        <br></br>

        <div className="a">
          {
            users.map((item) => {

              return (

                <Link to={`/bugview/${item.bug_id}`}>
                <div  >



                  <Card className="a1 my-4 mx-4" style={{ width: '28rem', display: "flex", flexDirection: "row" }}>
                    {/* <Card.Img variant="top" src="" /> */}
                    <Card.Body >
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        {item.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>



                </div>

                </Link>
              )


            })
          }

        </div>




      </div>
    </>
  );
}

export default Showbugs;