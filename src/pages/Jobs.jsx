import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";

function Jobs() {

  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] =
    useState("All");

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("jobs")) || [];

    setJobs(data);
  }, []);

  const update = (newJobs) => {
    setJobs(newJobs);

    localStorage.setItem(
      "jobs",
      JSON.stringify(newJobs)
    );
  };

  const deleteJob = (i) => {
    const newJobs =
      jobs.filter((_, index) => index !== i);

    update(newJobs);
  };

  const changeStatus = (i, status) => {

    const newJobs = [...jobs];

    newJobs[i].status = status;

    update(newJobs);
  };

  const filtered =
    filter === "All"
      ? jobs
      : jobs.filter(
          (j) => j.status === filter
        );

  return (
    <div className="max-w-5xl mx-auto space-y-4">

      <h1 className="text-xl font-semibold">
        Applications
      </h1>

      <select
        value={filter}
        onChange={(e) =>
          setFilter(e.target.value)
        }
        className="border p-2"
      >
        <option>All</option>
        <option>Applied</option>
        <option>Interview</option>
        <option>Rejected</option>
        <option>Offer</option>
      </select>

      {filtered.map((job, i) => (
        <JobCard
          key={i}
          job={job}
          index={i}
          deleteJob={deleteJob}
          changeStatus={changeStatus}
        />
      ))}

    </div>
  );
}

export default Jobs;