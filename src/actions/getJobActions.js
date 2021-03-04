import { GET_JOBS , GET_JOBS_FAIL , GET_JOBS_SUCCESS } from "./types";
import API from "../config/api";
import * as URL from "../config/url";

export const getJobs = () => { 
    return async (dispatch) => {
        dispatch({ type: GET_JOBS }); 
        try {
            const rawResponse = await API.get(URL.JOBS_GET,null,false);
            const responseData = await API.processResponse(rawResponse);
            
            if (rawResponse.status == 200) {
                getJobsSuccess(dispatch, responseData);
            } else {
                getJobsFailed(dispatch);
            }
          } catch (err) {
            getJobsFailed(dispatch);
          }
    }
  }

const getJobsSuccess = (dispatch,response) => {
  dispatch({
    type:GET_JOBS_SUCCESS ,
    jobsResponse:response.body.results
  });
};

const getJobsFailed = (dispatch, exception) => {
  dispatch({
    type: GET_JOBS_FAIL,
  });
};
