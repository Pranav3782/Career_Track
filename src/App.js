import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import Jobs from "./pages/Jobs";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <div className="p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddJob />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;