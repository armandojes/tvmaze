import { combineReducers } from 'redux';

//pages reducers
import list from './list/ducks';
import view from './view/ducks';

export default combineReducers({list, view});
