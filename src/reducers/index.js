import {combineReducers} from 'redux';

import peopleReducer from './people-reducer';

const rootReducer = combineReducers({
    peopleData: peopleReducer
});

export default rootReducer;