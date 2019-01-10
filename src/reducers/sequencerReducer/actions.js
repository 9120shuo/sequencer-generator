import { GET_SEQUENCER_COMPLETE, GET_NEXT_COMPLETE } from './actionTypes'
import { SequencerType } from '../../constants'
import * as sequencerGenerator from '../../utils/sequencerGenerator'

export const getSequencerAction = (activatedSequencerName) => {
  let seqGen
  if (activatedSequencerName === SequencerType.FIBONACCI) {
    seqGen = sequencerGenerator.generator(sequencerGenerator.fibonacciSequencer)
  } else if (activatedSequencerName === SequencerType.PRIME) {
    seqGen = sequencerGenerator.generator(sequencerGenerator.primeSequencer)
  } else {
    seqGen = sequencerGenerator.generator(sequencerGenerator.factorialSequencer)
  }

  let data = {
    activatedSequencer: seqGen,
    value: seqGen.value,
    idx: seqGen.idx,
    sequencerName: activatedSequencerName
  }
  return (dispatch) =>
    dispatch({
      type: GET_SEQUENCER_COMPLETE,
      payload: data
    })
}

export const getNextAction = () => {
  return (dispatch, getState) => {
    let { sequencer } = getState()
    sequencer.activatedSequencer.next()
    let data = {
      value: sequencer.activatedSequencer.value,
      idx: sequencer.activatedSequencer.idx
    }
    return dispatch({
      type: GET_NEXT_COMPLETE,
      payload: data
    })
  }
}
