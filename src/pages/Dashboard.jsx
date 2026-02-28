import { useEffect, useState } from "react";
import StatsCard from "../components/StatsCard";
import JobCard from "../components/JobCard";

function Dashboard() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("jobs")) || [];

    setJobs(data);
  }, []);

  const count = (status) =>
    jobs.filter(
      (j) => j.status === status
    ).length;

  const deleteJob = (index) => {

    const newJobs =
      jobs.filter((_, i) => i !== index);

    setJobs(newJobs);

    localStorage.setItem(
      "jobs",
      JSON.stringify(newJobs)
    );
  };

  const changeStatus = (index, status) => {

    const newJobs = [...jobs];

    newJobs[index].status = status;

    setJobs(newJobs);

    localStorage.setItem(
      "jobs",
      JSON.stringify(newJobs)
    );
  };

  const total = jobs.length;

  return (
    <div className="max-w-5xl mx-auto space-y-6">

      <h1 className="text-xl font-semibold">
        Dashboard
      </h1>

      <div className="bg-white p-4 rounded-xl shadow">

        <p className="text-sm text-gray-500">
          Total Applications
        </p>

        <p className="text-3xl font-bold">
          {total}
        </p>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <StatsCard
          title="Applied"
          count={count("Applied")}
          color="bg-blue-500"
         
        />

        <StatsCard
          title="Interview"
          count={count("Interview")}
          color="bg-yellow-500"
         
        />

        <StatsCard
          title="Rejected"
          count={count("Rejected")}
          color="bg-red-500"
          
        />

        <StatsCard
          title="Offer"
          count={count("Offer")}
          color="bg-green-500"
         
        />

      </div>

      <div className="bg-white p-4 rounded-xl shadow space-y-3">

        <h2 className="font-semibold">
          Recent Applications
        </h2>

        {jobs.slice(-3).map((job, i) => (
          <JobCard
            key={i}
            job={job}
            index={i}
            deleteJob={deleteJob}
            changeStatus={changeStatus}
          />
        ))}

      </div>

    </div>
  );
}

export default Dashboard;