import React from 'react';
import { Switch, Route } from 'react-router';
import Header from './components/header';
import 'reset-css';
import './global.css';

//pages
import List from './pages/list';
import View from './pages/view';


function App (props){
  return (
    <div name="aplication">
    <Header />
      <Switch>
        <Route path="/" exact component={List} />
        <Route path="/view/:id" exact component={View} />
      </Switch>
    </div>
  )
}

export default App;
