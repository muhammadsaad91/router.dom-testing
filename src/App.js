import React from "react";
import About from "./About";
import Footer from "./Footer";
import Input from "./Input"
import NotFound from "./NotFound";
import { Switch, Route } from "react-router-dom";
const App = ()=>{
   return (
      <div>
    
  
          <Switch>
            <Route  exact path="/" component={Footer} />
            <Route  path="/a" component={Input} />
            <Route path="/ab" component={About} />
            <Route component={NotFound} />

          </Switch>
      </div>
    );
  }
        
        


export default App;