
import Home from './Home';
import Navbar from './Navbar';
import Create from './Create';
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
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
             </Switch>
         
        </div>
      </div>
    </Router>
  );
}

export default App;
