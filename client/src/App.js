import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const getTest = () => {
    axios.get("http://localhost:8800/api/test").then(
      res => {
        console.log(res);
        alert(res.data.message);
      }
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick = {getTest}>Get</button>
      </header>
    </div>
  );
}

export default App;
