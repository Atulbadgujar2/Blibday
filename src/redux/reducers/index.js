import { combineReducers } from 'redux';
import commonReducer from './commonReducer';

const rootReducers = combineReducers({
  commonReducer: commonReducer,
});

export default rootReducers;