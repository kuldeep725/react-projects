import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Company from "./Company";
import Job from "./Job";
import Loading from "./Loading";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const jobs = await response.json();
      console.log(jobs);
      setLoading(false);
      setJobs(jobs);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading)
    return (
      <main>
        <Loading />
      </main>
    );

  return (
    <main>
      <div className="section">
        <div className="title">
          <h2>experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {jobs.length && jobs.map((job, index) => {
                return (
                  <Company
                    key={index}
                    company={job.company}
                    active={value}
                    index={index}
                    setCompany={setValue}
                  />
                );
              })}
          </div>
          {jobs.length && <Job {...jobs[value]} />}
        </div>
      </div>
    </main>
  );
}

export default App;
