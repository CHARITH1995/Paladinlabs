import React, { useEffect, useState, useCallback } from "react";
import "./HomeStyle.css";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "react-bootstrap";

import JobList from "../../components/JobList/JobList";
import allActions from "../../actions/index";



const Homepage = () => {
  const dispatch = useDispatch();
  const [list , setList] = useState([]);

  const getAllJobs = useCallback(
    () => dispatch(allActions.getJobsAction.getJobs()),
    [dispatch]
  );




  const jobList = useSelector((state) => {
    return state.getJobs.jobs;
  });


  const Shuffle = () =>{
    let i = jobList.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = jobList[i];
      jobList[i] = jobList[j];
      jobList[j] = temp;
    }
    setList(list.concat(jobList))
  }



  useEffect(() => {
    getAllJobs();
  }, [getAllJobs]);

  return (
    <div>
      <div className="container">
          <h2 className = "center">Job List</h2>
          <Button title = "Shuffle" onClick = {Shuffle} color="primary" size="lg" block >Shuffle</Button>
          <p/>
          <JobList jobList={jobList} />
      </div>
    </div>
  );
};

export default Homepage;
