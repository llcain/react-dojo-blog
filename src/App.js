
import './App.css';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  // const title = "Welcome to the new blog";
  // const likes = 60;

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <h1>{ title }</h1>
        <p>Liked { likes } times</p>
         */}
         <Home />
         
      </div>
    </div>
  );
}

export default App;
