import React, { useState, useRef, useMemo, useEffect } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Switch,Route,Routes,Router,Link} from "react-router-dom";
import AppRouter from "./AppRouter";
import Navbar from "./UI/Navbar/Navbar";

function App() {
  
    return(
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <AppRouter/>
            </div>
        </BrowserRouter>
    )
}

export default App;
