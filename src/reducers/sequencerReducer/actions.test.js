import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { SequencerType } from '../../constants'
import { getSequencerAction, getNextAction } from './actions'
import * as sequencerGenerator from '../../utils/sequencerGenerator'
import { GET_SEQUENCER_COMPLETE, GET_NEXT_COMPLETE } from './actionTypes'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Get Sequencer Action', () => {
  it('should dispatch get sequencer success', () => {
    const store = mockStore({})
    expect(store.dispatch(getSequencerAction(SequencerType.FACTORIAL)).type).toEqual(GET_SEQUENCER_COMPLETE)
  })

  it('should generate correct sequencer based on requested sequencer name', () => {
    const store = mockStore({})
    expect(
      store.dispatch(getSequencerAction(SequencerType.FACTORIAL)).payload.activatedSequencer instanceof
        sequencerGenerator.factorialSequencer
    ).toBe(true)
    expect(
      store.dispatch(getSequencerAction(SequencerType.FIBONACCI)).payload.activatedSequencer instanceof
        sequencerGenerator.fibonacciSequencer
    ).toBe(true)
    expect(
      store.dispatch(getSequencerAction(SequencerType.PRIME)).payload.activatedSequencer instanceof
        sequencerGenerator.primeSequencer
    ).toBe(true)
  })
})

describe('Get Next Action', () => {
  let seqGen = sequencerGenerator.generator(sequencerGenerator.factorialSequencer)
  const store = mockStore({
    sequencer: {
      activatedSequencer: seqGen,
      value: seqGen.value,
      idx: seqGen.idx,
      sequencerName: SequencerType.FACTORIAL
    }
  })
  it('should dispatch get next success', () => {
    expect(store.dispatch(getNextAction()).type).toEqual(GET_NEXT_COMPLETE)
  })
})
