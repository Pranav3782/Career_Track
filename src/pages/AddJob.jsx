import { useState } from "react";

function AddJob() {

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");

  const saveJob = () => {

    if (!company || !role) return;

    const job = {
      company,
      role,
      status,
    };

    const old =
      JSON.parse(localStorage.getItem("jobs")) || [];

    old.push(job);

    localStorage.setItem(
      "jobs",
      JSON.stringify(old)
    );

    setCompany("");
    setRole("");
    setStatus("Applied");
  };

  return (
    <div className="max-w-5xl mx-auto">

      <h1 className="text-xl font-semibold mb-4">
        Add Job
      </h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4 max-w-md">

        <input
          className="border p-2 w-full"
          placeholder="Company"
          value={company}
          onChange={(e) =>
            setCompany(e.target.value)
          }
        />

        <input
          className="border p-2 w-full"
          placeholder="Role"
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
        />

        <select
          className="border p-2 w-full"
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Rejected</option>
          <option>Offer</option>
        </select>

        <button
          onClick={saveJob}
          className="bg-black text-white p-2 w-full"
        >
          Save Job
        </button>

      </div>

    </div>
  );
}

export default AddJob;