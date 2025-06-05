import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import ResidentCard from './components/ResidentCard';
import ResidentForm from './components/ResidentForm';
import { API } from './api';

function App() {
  const [residents, setResidents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchResidents = async () => {
    try {
      const response = await axios.get(`${API}/get`);
      setResidents(response.data);
    } catch (error) {
      console.error('Error fetching residents:', error);
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
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Residents Book</h1>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Add Resident
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {residents.map((resident) => (
              <ResidentCard key={resident._id} resident={resident} />
            ))}
          </div>
        )}
      </main>

      {showForm && (
        <ResidentForm
          onClose={() => setShowForm(false)}
          onSubmitSuccess={handleSubmitSuccess}
        />
      )}
    </div>
  );
}

export default App;