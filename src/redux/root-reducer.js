import { combineReducers } from 'redux';

import ClassReducer from './class/reducers';

const rootReducer = combineReducers({
    users: ClassReducer,

});

export default rootReducer;
  