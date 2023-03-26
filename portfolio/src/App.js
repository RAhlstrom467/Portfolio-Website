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
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Project One</Card.Title>
        <Card.Text>
          Bio of the project
        </Card.Text>
        <Button variant="primary">GitHub Link</Button>
      </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Project One</Card.Title>
        <Card.Text>
          Bio of the project
        </Card.Text>
        <Button variant="primary">GitHub Link</Button>
      </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Project One</Card.Title>
        <Card.Text>
          Bio of the project
        </Card.Text>
        <Button variant="primary">GitHub Link</Button>
      </Card.Body>
      </Card>
      </div>
    </div>
  );
}

export default App;
