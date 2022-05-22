import {combineReducers} from 'redux';
import landmarksReducer from './landmarksSlicer';

export default combineReducers({
  landmarks: landmarksReducer,
});
