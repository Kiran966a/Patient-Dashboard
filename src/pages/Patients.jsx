import React, { useEffect, useState } from "react";
import "./Patients.css";

function Patients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    condition: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const mappedPatients = data.map((user) => ({
          id: user.id,
          name: user.name,
          age: Math.floor(Math.random() * 40) + 20,
          condition: ["Diabetes", "Asthma", "Hypertension", "Cardiac"][
            Math.floor(Math.random() * 4)
          ],
          email: user.email,
          phone: user.phone,
        }));
        setPatients(mappedPatients);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch patients:", err);
        setLoading(false);
      });
  }, []);

  const openModal = (patient) => setSelectedPatient(patient);
  const closeModal = () => setSelectedPatient(null);

  const handleAddPatient = (e) => {
    e.preventDefault();
    const id = patients.length + 1;
    setPatients([...patients, { id, ...newPatient }]);
    setNewPatient({ name: "", age: "", condition: "", email: "", phone: "" });
    setShowAddForm(false);
  };

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="patients-container">
      <h1 className="patients-title">Patient Records</h1>

      {loading && (
        <div className="spinner-overlay">
          <div className="spinner"></div>
        </div>
      )}

      <div className="add-btn-container">
        <button className="add-btn" onClick={() => setShowAddForm(true)}>
          + Add New Patient
        </button>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search patients by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="patients-grid">
        {filteredPatients.map((patient) => (
          <div key={patient.id} className="patient-card">
            <h2>{patient.name}</h2>
            <p>Age: {patient.age}</p>
            <p>Condition: {patient.condition}</p>
            <button className="view-btn" onClick={() => openModal(patient)}>
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedPatient && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <h2>{selectedPatient.name}</h2>
            <p>Age: {selectedPatient.age}</p>
            <p>Condition: {selectedPatient.condition}</p>
            <p>Email: {selectedPatient.email}</p>
            <p>Phone: {selectedPatient.phone}</p>
          </div>
        </div>
      )}

      {showAddForm && (
        <div className="modal-overlay" onClick={() => setShowAddForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowAddForm(false)}>
              ×
            </button>
            <h2 className="add-modal-title">Add New Patient</h2>
            <form className="add-modal-form" onSubmit={handleAddPatient}>
              <input
                type="text"
                className="add-modal-input"
                placeholder="Name"
                value={newPatient.name}
                onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
                required
              />
              <input
                type="number"
                className="add-modal-input"
                placeholder="Age"
                value={newPatient.age}
                onChange={(e) => setNewPatient({ ...newPatient, age: e.target.value })}
                required
              />
              <input
                type="text"
                className="add-modal-input"
                placeholder="Condition"
                value={newPatient.condition}
                onChange={(e) =>
                  setNewPatient({ ...newPatient, condition: e.target.value })
                }
                required
              />
              <input
                type="email"
                className="add-modal-input"
                placeholder="Email"
                value={newPatient.email}
                onChange={(e) => setNewPatient({ ...newPatient, email: e.target.value })}
                required
              />
              <input
                type="text"
                className="add-modal-input"
                placeholder="Phone"
                value={newPatient.phone}
                onChange={(e) => setNewPatient({ ...newPatient, phone: e.target.value })}
                required
              />
              <button type="submit" className="add-modal-submit">Add Patient</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Patients;
