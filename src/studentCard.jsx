import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function StudentCard({username, imgUrl, desc}) {
    return ( 
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imgUrl} />
    <Card.Body>
      <Card.Title>{username}</Card.Title>
      <Card.Text>
        {desc}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card> 
  );
}

export default StudentCard;