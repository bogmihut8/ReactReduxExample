import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './../Home'
import Blog from './../Blog'
import Projects from './../Projects'
import Technologies from './../Technologies'
import Contact from './../Contact'
import BlogPost from './../blog/BlogPost'
const Router = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/blog' component={Blog}/>
    <Route path='/projects' component={Projects}/>
    <Route path='/technologies' component={Technologies}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/post/:blogPost' component={BlogPost}/>
  
  </Switch>
)
export default Router