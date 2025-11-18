import React, { useState } from "react";

const DoctorDashboard = () => {
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "John Doe",
      age: 35,
      phone: "123-456-7890",
      symptoms: ["Fever", "Cough", "Headache"],
      advice: "",
      status: "Pending",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      phone: "987-654-3210",
      symptoms: ["Sore throat", "Fatigue"],
      advice: "",
      status: "Pending",
    },
    {
      id: 3,
      name: "Bob Johnson",
      age: 42,
      phone: "555-123-4567",
      symptoms: ["Chest pain", "Shortness of breath"],
      advice: "",
      status: "Pending",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [expandedPatient, setExpandedPatient] = useState(null);

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.symptoms.some((symptom) =>
        symptom.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const handleAdviceChange = (id, advice) => {
    setPatients(
      patients.map((p) => (p.id === id ? { ...p, advice } : p))
    );
  };

  const markAsAdvised = (id) => {
    setPatients(
      patients.map((p) =>
        p.id === id ? { ...p, status: "Advised" } : p
      )
    );
  };

  const toggleExpand = (id) => {
    setExpandedPatient(expandedPatient === id ? null : id);
  };

  const totalPatients = patients.length;
  const pendingPatients = patients.filter(
    (p) => p.status === "Pending"
  ).length;

  return (
    <div className="font-sans flex min-h-screen">
      {/* Main Content */}
      <div className="flex-1 p-5">
        {/* Header */}
        <header className="bg-blue-600 text-white p-4 text-center mb-5 rounded">
          <h1 className="text-xl font-bold">Doctor's Appointment Dashboard</h1>
          <p>Connect with patients and provide advice easily.</p>
        </header>

        {/* Summary */}
        <div className="mb-5 flex justify-between flex-wrap text-gray-700 font-medium">
          <div>Total Patients: {totalPatients}</div>
          <div>Pending Appointments: {pendingPatients}</div>
        </div>

        {/* Search Box */}
        <input
          type="text"
          placeholder="Search by name or symptoms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded mb-5 outline-none focus:ring-2 focus:ring-blue-600"
        />

        {/* Patient Table (Desktop) */}
        <div className="overflow-x-auto hidden md:block">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3">Name</th>
                <th className="border p-3">Age</th>
                <th className="border p-3">Phone</th>
                <th className="border p-3">Symptoms</th>
                <th className="border p-3">Status</th>
                <th className="border p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient) => (
                <React.Fragment key={patient.id}>
                  <tr
                    onClick={() => toggleExpand(patient.id)}
                    className="cursor-pointer hover:bg-gray-50"
                  >
                    <td className="border p-3">{patient.name}</td>
                    <td className="border p-3">{patient.age}</td>
                    <td className="border p-3">{patient.phone}</td>
                    <td className="border p-3">
                      {patient.symptoms.join(", ")}
                    </td>
                    <td
                      className={`border p-3 ${
                        patient.status === "Advised"
                          ? "text-blue-600"
                          : "text-orange-500"
                      }`}
                    >
                      {patient.status}
                    </td>
                    <td className="border p-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          markAsAdvised(patient.id);
                        }}
                        className="px-3 py-1 bg-blue-800 text-white rounded hover:bg-blue-800"
                      >
                        Mark Advised
                      </button>
                    </td>
                  </tr>

                  {expandedPatient === patient.id && (
                    <tr>
                      <td
                        colSpan="6"
                        className="border p-4 bg-gray-50"
                      >
                        <h4 className="font-semibold mb-2">
                          Details & Advice
                        </h4>
                        <p className="mb-2 font-medium">
                          Symptoms:
                        </p>
                        <div className="mb-3 flex flex-wrap gap-2">
                          {patient.symptoms.map((s) => (
                            <span
                              key={s}
                              className="bg-gray-200 text-sm px-2 py-1 rounded"
                            >
                              {s}
                            </span>
                          ))}
                        </div>

                        <textarea
                          placeholder="Add your advice or notes here..."
                          value={patient.advice}
                          onChange={(e) =>
                            handleAdviceChange(
                              patient.id,
                              e.target.value
                            )
                          }
                          className="w-full h-24 border p-2 rounded outline-none focus:ring-2 focus:ring-blue-800"
                        />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden">
          {filteredPatients.map((patient) => (
            <div
              key={patient.id}
              className="border rounded-lg p-4 mb-4 bg-white shadow-sm"
            >
              <div onClick={() => toggleExpand(patient.id)}>
                <h4 className="font-semibold">
                  {patient.name} (Age: {patient.age})
                </h4>
                <p className="text-gray-700">Phone: {patient.phone}</p>
                <p className="text-gray-700">
                  Symptoms: {patient.symptoms.join(", ")}
                </p>
                <p
                  className={`font-medium ${
                    patient.status === "Advised"
                      ? "text-green-600"
                      : "text-orange-500"
                  }`}
                >
                  Status: {patient.status}
                </p>
              </div>

              <button
                onClick={() => markAsAdvised(patient.id)}
                className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Mark Advised
              </button>

              {expandedPatient === patient.id && (
                <div className="mt-3 p-3 bg-gray-50 rounded">
                  <h5 className="font-semibold mb-2">
                    Details & Advice
                  </h5>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {patient.symptoms.map((s) => (
                      <span
                        key={s}
                        className="bg-gray-200 text-sm px-2 py-1 rounded"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <textarea
                    placeholder="Add your advice or notes here..."
                    value={patient.advice}
                    onChange={(e) =>
                      handleAdviceChange(
                        patient.id,
                        e.target.value
                      )
                    }
                    className="w-full h-24 border p-2 rounded outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
