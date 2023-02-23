import React, { Component } from "react";
import './App.css';
import BoardSetup from "./integrations/BoardSetup"
import Sidebar from "./integrations/sidebar"

class App extends Component {
  render(){
    return(
      <div className="row">
        <div className="column">
          <BoardSetup />
        </div>
        <div className="column">
          <Sidebar/>
        </div>
      </div>
    );
  }
}

export default App;
