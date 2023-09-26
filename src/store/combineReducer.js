import { combineReducers } from 'redux'
import Mode from './mode/rtlmode'
import { UserReducer } from './user'
import { VideoReducer } from './video'

export default combineReducers({
  mode: Mode,
  user: UserReducer,
  videos: VideoReducer
})