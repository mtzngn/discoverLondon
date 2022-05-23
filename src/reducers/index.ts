import {combineReducers} from 'redux';
import landmarksReducer from './landmarksReducer';

export default combineReducers({
  landmarks: landmarksReducer,
});
