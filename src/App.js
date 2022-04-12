import React from 'react';
import Login from './Login';
import Admin from './components/Admin';
import Admin1 from './Admin1';
import { Switch } from '@material-ui/core';
import { BrowserRouter as Router, Route } from "react-router-dom"; 

const App = () => {
  return (
    
  <div>     
       <Admin1/>
       {/* <Admin/>
       <Login/>    */}
 </div>  
    
  );
};

export default App;
