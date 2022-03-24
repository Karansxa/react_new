import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

const users = [
  {id:1, name: 'Karan'},
  {id:2, name: 'Paresh'},
];
const Hello = ({users}) => {
  return(
    <div>
      {users.map((user) => (
        <div>Hello {user.name}</div>
      ))}
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Hello users={users}/>
      <button style={{fontSize:30}} onClick={() => {console.log('Hello')}}>Click Me</button>
      <button style={{fontSize:30}} onClick={() => {console.log('Hello'); console.log('Hello')}}>Click Me</button>
      <select style={{fontSize: 20}}>
        <option>Male</option>
        <option>Female</option>
      </select>
      <div>{count}</div>
    </div>
  );
}

export default App;
