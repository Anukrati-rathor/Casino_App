import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";

const AddForm =()=> {
  
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const handle = () => {
        localStorage.setItem('Email', email);
        localStorage.setItem('Password', pwd);
     };

     const remove = () => {
        localStorage.removeItem('Name');
        localStorage.removeItem('Password');
     };


    return (
      <Container>
        <Form id="insertForm" method="post">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>EMAIL</Form.Label>
            <Form.Control
              type="email"
              value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group><br />

          <Form.Group controlId="formBasicPassword">
            <Form.Label>PASSWORD</Form.Label>
            <Form.Control
              type="password"
              value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            />
          </Form.Group><br />
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group><br />
          <Button variant="primary" onClick={handle}>Login</Button>
        </Form>
        {/* {localStorage.getItem('Email') && (
            <div>
               Name: <p>{localStorage.getItem('Email')}</p>
            </div>
         )}
         {localStorage.getItem('Password') && (
            <div>
               Password: <p>{localStorage.getItem('Password')}</p>
            </div>
         )} */}
      </Container>
    );
  
}
export default AddForm
