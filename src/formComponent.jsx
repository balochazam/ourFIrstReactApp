import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormComp() {
    return ( 
        <Form>
      <Form.Group className="mb-3 m-5" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 m-5" controlId="formBasicPassword">
        <Form.Label>Last</Form.Label>
        <Form.Control type="text" placeholder="Password" />
      </Form.Group>
      <Button className="m-5" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
     );
}

export default FormComp;