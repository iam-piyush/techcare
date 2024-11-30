import React, { useState, useEffect } from 'react';
import LeftHero from './leftHero';
import MidHero from './midHero';
import RightHero from './rightHero';
import axios from 'axios';

function Hero() {
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    axios
      .get('https://fedskillstest.coalitiontechnologies.workers.dev', {
        headers: {
          Authorization: 'Basic ' + btoa('coalition:skills-test'),
        },
      })
      .then((response) => {
        const data = response.data[0];
        setPatientData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!patientData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Hero mx-4 flex space-x-6">
      <div className="w-1/4">
        <LeftHero />
      </div>

      <div className="w-1/2">
        <MidHero patientData={patientData} />
      </div>

      <div className="w-1/4">
        <RightHero patientData={patientData} />
      </div>
    </div>
  );
}

export default Hero;
