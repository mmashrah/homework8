import React, { Component } from "react";
import baseballimg from './baseballimg.jpeg';

class Baseball extends Component {

    render() { 
        return ( 
            <div> 
                <h2>Baseball</h2> 
                <img src={baseballimg} title="Baseball Field" alt="Baseball Field" width="200" length="200"/>
                <p className="isource">Image Source: <a href="http://wesleyanargus.com/2019/10/04/time-for-crying-in-baseball-the-slow-death-of-americas-pastime/">cbssports.com</a> </p>
                <p>Baseball is a bat-and-ball game played between two opposing teams who take turns batting and fielding. The game proceeds when a player on the fielding team, called the pitcher, throws a ball which a player on the batting team tries to hit with a bat. The objective of the offensive team (batting team) is to hit the ball into the field of play, allowing its players to run the bases, having them advance counter-clockwise around four bases to score what are called "runs". The objective of the defensive team (fielding team) is to prevent batters from becoming runners, and to prevent runners' advance around the bases.[2] A run is scored when a runner legally advances around the bases in order and touches home plate (the place where the player started as a batter). The team that scores the most runs by the end of the game is the winner.</p>
                <p className="source">Source: <a href ="https://en.wikipedia.org/wiki/Baseball">Wikipedia</a></p>
            </div> 
        );

    }

}

export default Baseball;