import React from 'react';

const Scores = ({ scores }) => {
    return (
        <li>{scores.name}{scores.points}</li> 
    )
}

export default Scores;