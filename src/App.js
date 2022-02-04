import './App.css';
import Landing from './Components/landing'
import Search from './Components/searchPage'
import Loading from './Components/loading'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
          <Switch>
            <Route path='/' exact component={Landing}></Route>
            <Route path='/search' component={Search}></Route>
            <Route path='/load' component={Loading}></Route>
          </Switch>
    </div>
    </Router>
  );
}

export default App;
