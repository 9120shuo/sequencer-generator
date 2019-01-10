import { GET_SEQUENCER_COMPLETE, GET_NEXT_COMPLETE } from './actionTypes'

const initialState = {
  activatedSequencer: null,
  value: 0,
  idx: 0,
  sequencerName: ''
}

export const sequencerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SEQUENCER_COMPLETE:
      return {
        ...state,
        activatedSequencer: payload.activatedSequencer,
        value: payload.value,
        idx: payload.idx,
        sequencerName: payload.sequencerName
      }
    case GET_NEXT_COMPLETE:
      return {
        ...state,
        value: payload.value,
        idx: payload.idx
      }
    default:
      return state
  }
}
