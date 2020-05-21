import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

const ShopPage = (props) => {
  let category = props.match.params.category;
  return (
  <div>{category}</div>
  );
}

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop/:category' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
