import './App.css';
import { useEffect } from 'react';
import Header from './Header.js';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51IojwTSERUzepCsy81mNzRuONiKDkd7t7yvGJIGoZ02crx1WTfr6QRpLY8AIPyiymv05WYLqDX8PTQAM9SkMAF6900ddO9SiE8');

function App() {
  const [{ }, dispatch] = useStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is ..',authUser);

      if(authUser) {
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      } else {
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
    
  }, [])

  return (
    <div className="app">
      <Router>
        
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
          </Route>

          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          
          <Route path='/'>
            <Header />
            <Home />
          </Route>
          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
