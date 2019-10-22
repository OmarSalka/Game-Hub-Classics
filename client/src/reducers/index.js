import { combineReducers } from 'redux';
import ticTacToeReducer from './ticTacToeReducer';
import socketRoutingReducer from './socketRoutingReducer';
import chatReducer from './chatReducer';

export default combineReducers({
  ticTacToe: ticTacToeReducer,
  socketRouting: socketRoutingReducer,
  chat: chatReducer
});
