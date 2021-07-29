import './App.css';
import Landing from './pages/Landing';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Router>
      <Navbar />
                <Switch>
                <Route exact path='/' component={Landing} />
                </Switch>
            </Router>
    </>
  );
}

export default App;
