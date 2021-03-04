import { combineReducers } from 'redux';

import getJobsReducer from './getJobsReducer';


const rootReducer = combineReducers({
    
    getJobs:getJobsReducer,
    
});

export default rootReducer;