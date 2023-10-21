import React from "react";
import JobList from "../components/JobList";
import { job } from "../models/job";

interface props {
  jobs: job[];
}
function HomePage({ jobs }: props) {
  return (
    <>
      <div>This is job pages</div>
      <JobList jobs={jobs} />
    </>
  );
}

export default HomePage;
