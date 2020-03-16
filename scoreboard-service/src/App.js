import React from 'react';
import Scores from './components/Scores';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scores: props.scores,
      newName: '',
      newScore: ''
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
    return (
      <div>
        <h1>Scoreboard</h1>
        <ol>
          {this.state.scores.map(scores => <li key={scores.id}>{scores.name} {scores.points}</li>)}
        </ol>
        <form onSubmit={this.addName}>
            name: <input
              class="input"
              type="text" value={this.state.newName}
              onChange={this.handleNoteChange}
              placeholder="name" />
            points: <input
              class="input"
              type="text" value={this.state.newScore}
              onChange={this.handleScoreChange}
              placeholder="points" />
            <button type="submit">Add score</button>
        </form>
      </div>
    )
  }
}

export default App;