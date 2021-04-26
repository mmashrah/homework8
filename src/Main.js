import React, { Component } from "react";
import {
    Route,  
    NavLink,  
    HashRouter } from "react-router-dom"; 
import Football from "./Football"; 
import Soccer from "./Soccer"; 
import Baseball from "./Baseball";

class Main extends Component { 
    render() { 
        return ( 
            <HashRouter>
                <div> 
                    <h1>Sports</h1>

                    <ul className="header">
                        <li><NavLink exact to="/">Soccer</NavLink></li>
                        <li><NavLink to="/football">Football</NavLink></li>
                        <li><NavLink to="/baseball">Baseball</NavLink></li>
                    </ul>

                    <div className="content">
                        <Route exact path="/" component={Soccer}/>
                        <Route path="/football" component={Football}/>
                        <Route path="/baseball" component={Baseball}/>
                    </div> 
                </div> 
            </HashRouter> 
        );

    }

}

export default Main;
