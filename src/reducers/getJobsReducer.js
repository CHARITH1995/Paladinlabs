import {GET_JOBS , GET_JOBS_FAIL , GET_JOBS_SUCCESS } from "../actions/types";
  
  const INITIAL_STATE = {
  
    jobs:[],
    is_loading: false,
  
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
  
      case GET_JOBS:
        return { ...state, jobs:[], is_loading: true };
      case GET_JOBS_SUCCESS:
        return { ...state, jobs:action.jobsResponse, is_loading: false };
      case GET_JOBS_FAIL:
        return { ...state, jobs:[], is_loading: false, ...INITIAL_STATE };
  
      default:
        return state;
    }
  };
  