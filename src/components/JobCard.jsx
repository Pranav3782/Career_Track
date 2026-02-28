function getColor(status) {
  if (status === "Applied") return "text-blue-500";
  if (status === "Interview") return "text-yellow-500";
  if (status === "Rejected") return "text-red-500";
  if (status === "Offer") return "text-green-500";
}

function JobCard({
  job,
  index,
  deleteJob,
  changeStatus,
}) {
  return (
    <div className="border rounded-lg p-4 flex justify-between items-center bg-white shadow-sm">

      <div>

        <p className="font-semibold">
          {job.company}
        </p>

        <p className="text-sm text-gray-600">
          {job.role}
        </p>

        <p
          className={`text-sm ${getColor(
            job.status
          )}`}
        >
          {job.status}
        </p>

      </div>

      <div className="flex gap-2 items-center">

        <select
          value={job.status}
          onChange={(e) =>
            changeStatus(index, e.target.value)
          }
          className="border rounded-md px-2 py-1 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Rejected</option>
          <option>Offer</option>
        </select>

        <button
          onClick={() => deleteJob(index)}
          className="px-2 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default JobCard;