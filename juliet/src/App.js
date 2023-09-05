import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Happy endings guaranteed.
        </p>
        <h1>Juliet Kincaid</h1>
        <h2>Novelist</h2>
        <a
          className="Full-site-link"
          href="https://www.julietkincaid.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Main Website
        </a>
      </header>
    </div>
  );
}

export default App;
