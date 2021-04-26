import React, { Component } from "react";
import soccerimg from './soccerimg.jpeg';

class Soccer extends Component {

    render() { 
        return ( 
            <div> 
                <h2>Soccer</h2> 
                <img src={soccerimg} title="Soccer Field" alt="Soccer Field" width="200" length="200"/>
                <p className="isource">Image Source: <a href="https://www.bostonherald.com/2019/11/23/unbeaten-south-hadley-girls-finally-capture-first-soccer-title-top-stoneham-3-0-in-d3-final/">bostonherald.com</a> </p>
                <p>Association football, more commonly known as simply football or soccer,[a] is a team sport played by all genders with a spherical ball between two teams of 11 players. It is played by approximately 250 million players in over 200 countries and dependencies, making it the world's most popular sport. The game is played on a rectangular field called a pitch with a goal at each end. The object of the game is to outscore the opposition by moving the ball beyond the goal line into the opposing goal. The team with the higher number of goals wins the game.</p>
                <p className="source">Source: <a href ="https://en.wikipedia.org/wiki/Association_football">Wikipedia</a></p>
            </div> 
        );
    }

}

export default Soccer;