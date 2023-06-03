import { NavLink } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
        <NavLink to={`users`}>Users List</NavLink>
        <NavLink to={`add-user`}>Add User</NavLink>
    </div>
  );
}

export default App;
