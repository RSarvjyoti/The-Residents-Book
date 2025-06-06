import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import ResidentCard from "./components/ResidentCard";
import ResidentForm from "./components/ResidentForm";
import { API } from "./api";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Inspire from "./pages/Inspire";

function App() {
  const [residents, setResidents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchResidents = async () => {
    try {
      const response = await axios.get(`${API}/get`);
      console.log(response.data);
      setResidents(response.data);
    } catch (error) {
      console.error("Error fetching residents:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResidents();
  }, []);

  const handleSubmitSuccess = (newResident) => {
    setResidents([...residents, newResident]);
  };

  return (
    <div className="min-h-screen w-full bg-[#D7D7D7]">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />

      <header className="shadow-lg fixed top-0 left-1/2 rounded-b-md transform -translate-x-1/2 w-[80%] bg-transparent backdrop-blur-sm z-10">
        <div className="max-w-5xl mx-auto py-4 px-6">
          <nav className="flex justify-center gap-10 items-center">
            <Link
              to="/"
              className="text-black hover:text-black font-medium transition-transform duration-300 hover:scale-110"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-black hover:text-black font-medium transition-transform duration-300 hover:scale-110"
            >
              About
            </Link>
            <button
              onClick={() => setShowForm(true)}
              className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 text-sm font-medium transition-all duration-300 transform hover:scale-105"
            >
              Add Resident
            </button>
            <Link
              to="/donate"
              className="text-black hover:text-black font-medium transition-transform duration-300 hover:scale-110"
            >
              Donate
            </Link>
            <Link
              to="/inspire"
              className="text-black hover:text-black font-medium transition-transform duration-300 hover:scale-110"
            >
              Inspire
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto pt-28 px-4 sm:px-6 lg:px-8 pb-12">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              loading ? (
                <div className="flex items-center justify-center h-[50vh]">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
                </div>
              ) : residents.length === 0 ? (
                <div className="text-center py-12">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    No residents found
                  </h2>
                  <p className="text-gray-700 mt-2">
                    Add a new resident to get started
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {residents.map((resident) => (
                    <ResidentCard
                      key={resident._id}
                      resident={resident}
                      className="transform hover:scale-105 transition-transform duration-300"
                    />
                  ))}
                </div>
              )
            }
          />
          <Route path="/donate" element={<Donate />} />
          <Route path="/inspire" element={<Inspire />} />
        </Routes>
      </main>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 transform transition-all">
            <ResidentForm
              onClose={() => setShowForm(false)}
              onSubmitSuccess={handleSubmitSuccess}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
