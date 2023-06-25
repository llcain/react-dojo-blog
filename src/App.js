
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  // const title = "Welcome to the new blog";
  // const likes = 60;

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <h1>{ title }</h1>
          <p>Liked { likes } times</p>
           */}
             <Switch>
              <Route path="/">
                <Home />
              </Route>
             </Switch>
         
        </div>
      </div>
    </Router>
  );
}

export default App;
