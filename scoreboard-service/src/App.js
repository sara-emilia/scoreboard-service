import React from 'react';
import Scores from './components/Scores';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scores: props.scores,
      newName: '',
      newScore: 0
    }
  }

  addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: this.state.newName,
      points: this.state.newScore,
      id: this.state.scores.length + 1
    }

    const scores = this.state.scores.concat(nameObject)

    this.setState ({
      scores,
      newName: '',
      newScore: ''
    })
  }

  handleNoteChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  handleScoreChange = (event) => {
    console.log(event.target.value)
    this.setState({ newScore: event.target.value })
  }

  render() {

    const arrange = this.state.scores.sort(function(a, b)
      {return a.points - b.points});
      arrange.reverse();
    const scoresToShow = arrange.slice(0, 5);

    return (
      <div>
        <h1>Scoreboard</h1>
        <ol>
          {scoresToShow.map(scores => <Scores key={scores.id} scores={scores} />)}
        </ol>
        <form onSubmit={this.addName}>
            name: <input
              className="input"
              type="text" value={this.state.newName}
              onChange={this.handleNoteChange}
              placeholder="name" />
            points: <input
              className="input"
              type="number" value={this.state.newScore}
              onChange={this.handleScoreChange}
              placeholder="points" />
            <button type="submit">Add score</button>
        </form>
      </div>
    )
  }
}

export default App;