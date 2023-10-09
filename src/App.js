import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  const apiUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8888/api/index'
      : 'https://netlify-apis.netlify.app/api/index';

  useEffect(() => {
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  useEffect(() => {
    const apiUrl =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8888/api/hello'
        : 'https://netlify-apis.netlify.app/api/hello';
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

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
      </header>
    </div>
  );
}

export default App;
