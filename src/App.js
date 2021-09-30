import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hey! I'm Euge.
        </h1>
        <p className="subtitle">Website creation is in progress, watch this space...</p>
        <div className="buttons">
        <a
          className="App-btn"
          href="https://www.linkedin.com/in/eugelito/"
          target="_blank"
          rel="noopener noreferrer"
        ><i className="fab fa-linkedin-in"></i>
          LinkedIn
        </a>
        <a
          className="App-btn"
          href="mailto:eugelito@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
        ><i className="fas fa-envelope"></i>
          Email
        </a>
        </div>
      </header>
    </div>
  );
}

export default App;
