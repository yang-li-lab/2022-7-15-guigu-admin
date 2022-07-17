import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Login from './pages/login/login.jsx'
import Admin from './pages/admin/admin.jsx'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/admin" component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}