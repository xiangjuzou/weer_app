import './App.css';
import Navbar from'./Navbar';
import Weer from './Weer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/">
            <Weer />
          </Route>

        </Switch>
        </div>
    </div>
  </Router>
  );
}

export default App;
