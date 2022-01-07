import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import { ProvideAuth } from './context/ProvideAuth';
import Login from './views/Login/Login';
import SignUp from './views/SignUp/SignUp';
export default function App() {
  return (
    <Router>
      <Switch>
        <ProvideAuth>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <SignUp />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </ProvideAuth>
      </Switch>
    </Router>
  );
}
