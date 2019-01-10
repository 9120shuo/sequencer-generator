import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { number, func, string } from 'prop-types'
import { getSequencerAction, getNextAction } from '../../reducers/sequencerReducer'
import Sequencer from '../../components/sequencer/sequencer'
import { SequencerType } from '../../constants'

export class SequencerContainer extends PureComponent {
  static displayName = 'SequencerContainer'
  static propTypes = {
    value: number,
    idx: number,
    sequencerName: string,
    getSequencerAction: func,
    getNextAction: func
  }

  componentDidMount() {
    this.props.getSequencerAction(SequencerType.FACTORIAL)
  }

  render() {
    const { value, sequencerName, idx } = this.props
    return (
      <div className="ppp">
        <Sequencer
          value={value}
          idx={idx}
          onSequencerClick={this._onSequencerClick}
          onNextClick={this._onNextClick}
          sequencerName={sequencerName}
        />
      </div>
    )
  }

  _onSequencerClick = (activatedSeq) => {
    const { sequencerName } = this.props
    if (sequencerName !== activatedSeq) {
      this.props.getSequencerAction(activatedSeq)
    }
  }

  _onNextClick = () => {
    const { value } = this.props
    if (!isNaN(value)) {
      this.props.getNextAction()
    }
  }
}

const mapStateToProps = ({ sequencer }) => {
  const { value, sequencerName, idx } = sequencer

  return {
    value,
    idx,
    sequencerName
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({ getSequencerAction, getNextAction }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SequencerContainer)
