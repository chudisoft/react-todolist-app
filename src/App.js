import logo from './logo.svg';
import './App.css';
import './styles/app.css';
import 'fontawesome-free/css/all.css';
import TodoApp from './components/TodoApp';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <TodoApp />
      </header>
    </div>
  );
}

export default App;
