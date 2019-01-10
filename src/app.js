import React, { PureComponent } from 'react'
import SequencerContainer from './containers/sequencerContainer/sequencerContainer'
import './app.css'

export default class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <SequencerContainer />
      </div>
    )
  }
}
