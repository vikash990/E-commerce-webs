import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';


import Header from './components/header.js';
import Login from './components/login.js';
import Logout from './components/logout.js';
import Profile from './components/profile.js';
import Home from './components/home.js';
import Footer from './components/footer.js';

import './App.css';

class App extends Component {
 

  render() {
    return (
      <Router>
      <div >
       <Header/>
       <Route path="/" exact strict component ={Home}/>
       <Route path="/login" exact strict component ={Login}/>
       <Route path="/logout" exact strict component ={Logout}/>
       <Route path="/profile" exact strict component ={Profile}/> 
       <Footer/>
      
        </div>
      </Router>
    );
  }
}

export default App;


