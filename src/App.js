import React, { Component } from "react";
import About from "./About";
import Footer from "./Footer";
import Input from "./Input"
import NotFound from "./NotFound";
import { Route, Switch } from "react-router";
const App = ()=>{
   return(
<>
{/* 
    <Route path="/" component={NotFound} />
    <Route path="/about" component={About} /> */}

   <About/>
   <Input/>
   <NotFound/>
</>
  );


        
        
}

export default App;