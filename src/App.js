import './App.css';
import Landing from './Components/landing'
import Search from './Components/searchPage'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
          <Switch>
            <Route path='/' exact component={Landing}></Route>
            <Route path='/search' component={Search}></Route>
          </Switch>
    </div>
    </Router>
  );
}

export default App;
