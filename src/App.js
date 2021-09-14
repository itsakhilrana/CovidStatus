import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

//Components
import HomeScreen from './screens/HomeScreen';
import FourOFourScreen from './screens/FourOFourScreen';
import NavBarComp from './components/NavBarComp';

function App() {
  return (
    <Router>
    <div className="App w-full h-screen px-10 bg-gray-500">
      <NavBarComp/>
      
          
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route component={FourOFourScreen} />
          </Switch>

         
        
    </div>
    </Router>
  );
}

export default App;
