import React, { useState, useEffect } from 'react';
import Lens from "../assets/lens.png";
import menuDots from "../assets/menuDots.png";
import axios from 'axios';

function LeftHero() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios
      .get('https://fedskillstest.coalitiontechnologies.workers.dev', {
        headers: {
          Authorization: 'Basic ' + btoa('coalition:skills-test'),
        },
      })
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="LeftHero bg-white p-4 rounded-xl h-[1090px] overflow-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold mr-2">Patients</h2>
        <img src={Lens} alt="lens icon" className="w-4 h-4" />
      </div>

      <div className="mt-8">
        {patients.map((patient) => (
          <div key={patient.name} className="flex items-center mb-6">
            <img
              src={patient.profile_picture}
              alt={patient.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="text-sm font-medium">{patient.name}</h3>
              <p className="text-gray-600 text-xs">{patient.gender}, {patient.age}</p>
            </div>
            <img
              src={menuDots}
              alt="menu dot"
              className="ml-auto rotate-90 h-4 mr-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftHero;
