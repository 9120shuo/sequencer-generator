import { SequencerType } from '../../constants'
import * as sequencerGenerator from '../../utils/sequencerGenerator'
import { GET_SEQUENCER_COMPLETE, GET_NEXT_COMPLETE } from './actionTypes'
import { sequencerReducer } from './reducer'

const initialState = {
  activatedSequencer: null,
  value: 0,
  idx: 0,
  sequencerName: ''
}

let seqGen = sequencerGenerator.generator(sequencerGenerator.factorialSequencer)

const getSequencerSucceedState = {
  activatedSequencer: seqGen,
  value: seqGen.value,
  idx: seqGen.idx,
  sequencerName: SequencerType.FACTORIAL
}

const getNextSucceedState = {
  activatedSequencer: seqGen,
  value: seqGen.value + 1,
  idx: seqGen.idx + 1,
  sequencerName: SequencerType.FACTORIAL
}

describe('Sequencer Reducer', () => {
  it('returns the initial state', () => {
    expect(sequencerReducer(undefined, {})).toEqual(initialState)
  })

  it('handles get sequencer succeed state', () => {
    expect(sequencerReducer(initialState, { type: GET_SEQUENCER_COMPLETE, payload: getSequencerSucceedState })).toEqual(
      {
        ...initialState,
        ...getSequencerSucceedState
      }
    )
  })

  it('handles get next succeed state', () => {
    expect(
      sequencerReducer(getSequencerSucceedState, {
        type: GET_NEXT_COMPLETE,
        payload: { value: getNextSucceedState.value, idx: getNextSucceedState.idx }
      })
    ).toEqual({
      ...initialState,
      ...getNextSucceedState
    })
  })
})
