import React, { PureComponent } from 'react'
import { number, func, string } from 'prop-types'
import './sequencer.css'
import { SequencerType } from '../../constants'

export default class Sequencer extends PureComponent {
  static displayName = 'Sequencer'
  static propTypes = {
    value: number,
    idx: number,
    sequencerName: string,
    onSequencerClick: func,
    onNextClick: func
  }

  render() {
    const { onSequencerClick, onNextClick, value, sequencerName, idx } = this.props

    return (
      <div>
        <button
          className={`btn sequencerBtn ${sequencerName === SequencerType.FACTORIAL ? 'activedBtn' : ''}`}
          onClick={() => onSequencerClick(SequencerType.FACTORIAL)}
        >
          {SequencerType.FACTORIAL}
        </button>

        <button
          className={`btn sequencerBtn ${sequencerName === SequencerType.FIBONACCI ? 'activedBtn' : ''}`}
          onClick={() => onSequencerClick(SequencerType.FIBONACCI)}
        >
          {SequencerType.FIBONACCI}
        </button>

        <button
          className={`btn sequencerBtn ${sequencerName === SequencerType.PRIME ? 'activedBtn' : ''}`}
          onClick={() => onSequencerClick(SequencerType.PRIME)}
        >
          {SequencerType.PRIME}
        </button>

        <div className="spanWrapper">
          <span>
            The <span className="infoSpan">{sequencerName}</span> is currently activated
            {sequencerName === SequencerType.PRIME ? '. At element ' : ' for f(n). When n='}
            <span className="infoSpan">{idx}</span>, the value in Sequence is
            <span className="infoSpan"> {isNaN(value) ? 'too large to display' : value}</span>.
          </span>
        </div>
        <button className={`btn nextBtn ${isNaN(value) ? 'disabledBtn' : ''}`} onClick={onNextClick}>
          Move to next index =>
        </button>
      </div>
    )
  }
}
