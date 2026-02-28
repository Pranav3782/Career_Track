import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="border-b bg-white">

      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">

        <h1 className="font-semibold text-lg">
          CareerTrack
        </h1>

        <div className="flex gap-4 text-sm">

          <Link to="/">Dashboard</Link>

          <Link to="/add">Add Job</Link>

          <Link to="/jobs">Applications</Link>

        </div>

      </div>

    </div>
  );
}

export default Navbar;