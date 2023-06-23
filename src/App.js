
import './App.css';

function App() {
  const title = "Welcome to the new blog";
  const likes = 60;

  return (
    <div className="App">
      <div class="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
      </div>
    </div>
  );
}

export default App;
