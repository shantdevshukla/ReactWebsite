import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Contactus from './components/pages/ContactUs';
import Services from './components/pages/Services';
import Company from './components/pages/Company';

function App() {
  return (
<>
  <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/company' exact component={Company} />
          <Route path='/services' exact component={Services} />
          <Route path='/contactus' exact component={Contactus} />
        </Switch>
  </Router>
</>
  );
}

export default App;
