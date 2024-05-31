import './App.css';
import { ToDoList } from './ToDoList';
import image from './plans.jpg';


function App() {
  return (
    <div className="App">
      <div className='container'>
      <img src={image} width="200px" alt="plans"/>
      <h1>To Do List</h1>
      <ToDoList />
      </div>
    </div>
  );
}

export default App;
