import logo from './logo.svg';
import './App.css';
import { Todo } from './components/Todo/Todo';

function App() {
  return (
    <div className="App ">
      <img src={logo} className="App-logo" alt="logo" />
      <Todo />
    </div>
  );
}

export default App;
