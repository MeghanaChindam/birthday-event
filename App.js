import React from 'react'
import Register from './Register'
import Login from './Login'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <h1>Birthday Party Online Booking System</h1>
      <BrowserRouter> 
            <Switch>
                 
                 <Route path="/register" component={Register} />
                 <Route path="/login" component={Login} />
            </Switch> 
      </BrowserRouter>
    </div>
  )
}

export default App

