import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">

      <LoadUsers></LoadUsers>

      <MyComponent brand="Apple" price="4000"></MyComponent>
      <MyComponent brand="Microsoft" price="10000"></MyComponent>
      <MyComponent brand="Google" price="0"></MyComponent>
    </div>
  );
}

function LoadUsers(){
  const [users, setUsers] = useState([])

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))

  }, [])

  return (
    <div>
      <h1>Users Loaded: {users.length}</h1>
      {
        users.map(user => <User name={user.name} phone={user.phone}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div className="user">
      <h2>Name: {props.name}</h2>
      <p>Call me baby!!! {props.phone}</p>
    </div>
  )
}

function MyComponent(props){
  const [points, setPoints] = useState(1)
  const myStyle = {
    backgroundColor: 'lightblue',
    border: '3px solid blue',
    borderRadius: '10px',
    margin: '10px',
    padding: '5px'
  }

  const handleAddPoints = () => {
    const newPoints = points * 2;
      setPoints(newPoints);  }

  return(
    <div style={myStyle}>
      <h1> Hello React!!!!  ({props.brand})</h1>
      <p>Price: {props.price} points: {points}</p>
      <button onClick={handleAddPoints}>Add Points</button>
      <p style={{color: 'maroon', fontWeight: 'bold'}}>I can write my own component</p>
    </div>
  )
}

export default App;
