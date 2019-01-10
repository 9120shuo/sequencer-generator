import { sequencerReducer } from './sequencerReducer'
import { combineReducers } from 'redux'

export default combineReducers({
  sequencer: sequencerReducer
})
