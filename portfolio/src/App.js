import './App.css';
import { React } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <h1> 
        Ryan's Portfolio
      </h1>
      <h2>
        Bio
      </h2>
      <h2>
        GitHub Projects and Links, use cards
      </h2>
      <div className="cards">
      <div className='c1'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Student Registration</Card.Title>
        <Card.Text>
          Full Stack Website utilizing React & SpringBoot Frameworks
          Backend written in Java, Frontend written in JavaScript
        </Card.Text>
        <Button variant="primary">GitHub Link</Button>
      </Card.Body>
      </Card>
      </div>
      <div className='c2'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Movie Theater App</Card.Title>
        <Card.Text>
          Full Stack Website utilizing React & Springboot Frameworks
          Backend written in Java, Frontend written in JavaScript
        </Card.Text>
        <Button variant="primary">GitHub Link</Button>
      </Card.Body>
      </Card>
      </div>
      <div className='c3'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Find My Mentor</Card.Title>
        <Card.Text>
        Full Stack Website utilizing React & Express
        Backend written in Node.js, Frontend written in JavaScript
        </Card.Text>
        <Button variant="primary">GitHub Link</Button>
      </Card.Body>
      </Card>
      </div>
      <div className='c3'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Digital Twin Capstone Project</Card.Title>
        <Card.Text>
        Full Stack Website utilizing React & Express
        Backend written in Node.js, Frontend written in JavaScript
        </Card.Text>
        <Button variant="primary">GitHub Link</Button>
      </Card.Body>
      </Card>
      </div>
      </div>
    </div>
  );
}

export default App;
