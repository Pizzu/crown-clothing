import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';

const CategoryPage = (props) => {
  let category = props.match.params.category;
  return (
  <div>{category}</div>
  );
}

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route path='/shop/:category' component={CategoryPage}/>
      </Switch>
    </div>
  );
}

export default App;
