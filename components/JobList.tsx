import React from "react";
import { job } from "../models/job";

interface props {
  jobs: job[];
}
const JobList = ({ jobs }: props) => {
  return (
    <>
      {jobs?.map((a) => (
        <div>{a.name}</div>
      ))}
    </>
  );
};

export default JobList;
