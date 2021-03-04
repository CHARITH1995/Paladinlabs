import React, { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";

const JobList = (jobList) => {
  console.log(jobList)
  return (
    <div>
      {
      jobList['jobList'].map((job, i) => (
        console.log(job.company.name),
        <div key={i}>
          <JobCard
            id={job.id}
            title={job.title}
            name={job.company.name}
            imageUrl = {job.company.logo_url}
          />
        </div>
      ))
      }
    </div>
  );
};

export default JobList;
