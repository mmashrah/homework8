import React, { Component } from "react";
import footbalimg from './footballimg.jpeg';

class Football extends Component {

    render() { 
        return ( 
        <div> 
            <h2>Football</h2> 
            <img src={footbalimg} title="Football Field" alt="Football Field" width="200" length="200"/>
            <p className="isource">Image Source: <a href="https://www.gettyimages.com/detail/news-photo/an-nfl-football-with-logo-before-the-game-between-the-news-photo/1188526707?utm_medium=organic&utm_source=google&utm_campaign=iptcurl">gettyimages</a> </p>
            <p>American football, referred to simply as football in the United States and Canada and also known as gridiron, is a team sport played by two teams of eleven players on a rectangular field with goalposts at each end. The offense, the team with possession of the oval-shaped football, attempts to advance down the field by running with the ball or passing it, while the defense, the team without possession of the ball, aims to stop the offense's advance and to take control of the ball for themselves. The offense must advance at least ten yards in four downs or plays; if they fail, they turn over the football to the defense, but if they succeed, they are given a new set of four downs to continue the drive. Points are scored primarily by advancing the ball into the opposing team's end zone for a touchdown or kicking the ball through the opponent's goalposts for a field goal. The team with the most points at the end of a game wins.</p>
            <p className="source">Source: <a href ="https://en.wikipedia.org/wiki/American_football">Wikipedia</a></p>
        </div> 
        );

    }

}

export default Football;