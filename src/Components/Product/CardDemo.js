import React from 'react'
import '../Assets/CSS/CardDemo.css'
import Card from 'react-bootstrap/Card';
import CardOne from '../Assets/Images/Process automation.svg'


const CardDemo = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={CardOne} />
      <Card.Body>
        <Card.Title>Process automation</Card.Title>
        <Card.Text>
          <li>Map existing processes to find areas for automation</li >
          <li>Align automated solutions with business goals</li>
          <li>Automate and optimize business processes</li>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardDemo
