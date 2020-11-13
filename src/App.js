import React from 'react';
import Main from "./Components/Main/Main";
import Wallet from "./Components/Wallet/Wallet";

import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {

 

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/wallet" component={Wallet} />
      </Switch>
    </Router>
   
  );
}

export default App;
