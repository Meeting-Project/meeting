import React from 'react'
import Login from './Component/Login/Login'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
class App extends React.Component {
  render() {
    return (

      <div>
        <Router>

          <Switch>
            <Route path='/login' exact component={Login}></Route>
            <Redirect from="/" to="login" />
          </Switch>
        </Router>
      </div>


    )
  }
}
export default App
