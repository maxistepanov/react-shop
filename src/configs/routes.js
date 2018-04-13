import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from "../components/Home";
import About from "../components/About";
import Message from "../components/Message";


export default () => (
    <Switch>
      <Route exact path='/' component={Message}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/about' component={About}/>
    </Switch>
)

