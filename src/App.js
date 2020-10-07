import React,{Component} from 'react';
//import {Card} from './components/News/news-card';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navigation';
import Home from './components/Pages/Home';
import selectcompany from './components/Pages/selectcompany';
import selectmarket from './components/Pages/selectmarket';
import analysis from './components/Pages/analysis';


class App extends Component {

  render()
  {
    return(
      <div>
        <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/selectmarket' exact component={selectmarket} />
          <Route path='/selectcompany' component={selectcompany} />
          <Route path='/analysis' component={analysis} />
        </Switch>
      </Router>
    </>
      </div>
    )
  }
}

export default App;
