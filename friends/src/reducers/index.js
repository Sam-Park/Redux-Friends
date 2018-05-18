import { combineReducers } from 'redux';
import friendsReducer from './FriendsReducer';

const rootReducer = combineReducers({
  friends: friendsReducer
});

export default rootReducer;