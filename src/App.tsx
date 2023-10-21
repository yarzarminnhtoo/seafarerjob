import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Button from "../components/Button";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import { job } from "../models/job";
import JobList from "../components/JobList";
const testjobs: job[] = [
  {
    name: "Engine Officer",
    company_name: "Maritine Bay",
    location: "Yangon",
    type: "Remote",
  },
  {
    name: "Deck Officer",
    company_name: "Maritine Bay",
    location: "Yangon",
    type: "Remote",
  },
];
//testing comment
function App() {
  const [jobs, setJobs] = useState<job[]>([]);

  return (
    <>
      <div className="container">
        <div className="col-md-10">
          <Button
            caption="hello"
            css="primary"
            onClicked={() => {
              setJobs(testjobs);
            }}
          />
          {<AboutPage />}
          {<HomePage jobs={jobs} />}
        </div>
      </div>
    </>
  );
}

export default App;
