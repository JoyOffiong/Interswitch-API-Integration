import React from "react";
import {
    BrowserRouter as Router,
    Route, Routes
} from 'react-router-dom';

import "./App.css";
import FirstPage from "./components/FirstPage";
import HostedFields from "./components/HostedFields";

function App() {
  return (
    <Router>
    <div className="App ">
        <Routes>
        <Route path="/" element={<FirstPage/>}></Route>   
    <Route path="/hostedFields" element={<HostedFields/>}></Route>
        </Routes>
    
    
    </div>
    </Router>
  );
}

export default App;
