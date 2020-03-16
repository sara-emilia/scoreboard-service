import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const scores = [
    {
        name: '',
        points: '',
        id: 1
    },
    {
        name: '',
        points: '',
        id: 2
    },
    {
        name: '',
        points: '',
        id: 3
    },
    {
        name: '',
        points: '',
        id: 4
    },
    {
        name: '',
        points: '',
        id: 5
    }
]

ReactDOM.render(
    <App scores={scores} />,
    document.getElementById('root'));