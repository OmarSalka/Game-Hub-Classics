import { combineReducers } from 'redux';
import ticTacToeReducer from './ticTacToeReducer';
import socketRoutingReducer from './socketRoutingReducer';

export default combineReducers({
  ticTacToe: ticTacToeReducer,
  socketRouting: socketRoutingReducer
});
