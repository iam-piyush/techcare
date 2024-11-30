import React from 'react';
import ScheduleIcon from '../assets/dob.png';
import PhoneIcon from '../assets/phone.png';
import EmergencyIcon from '../assets/phone.png';
import InsuranceIcon from '../assets/Insurance.png';
import Download from "../assets/download.png";

const RightHero = ({ patientData }) => {
    const formattedDOB = new Date(patientData.date_of_birth).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="RightHero">
            <div className="bg-white p-4 rounded-xl">
                <div className="text-center mb-8">
                    <img
                        src={patientData.profile_picture}
                        alt="Patient Profile"
                        className="w-48 h-48 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-lg font-bold">{patientData.name}</h3>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center">
                        <img src={ScheduleIcon} alt="Schedule Icon" className="w-10 h-10 mr-4" />
                        <div>
                            <p className="text-sm">Date of Birth:</p>
                            <p className="">{formattedDOB}</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <img src={PhoneIcon} alt="Phone Icon" className="w-10 h-10 mr-4" />
                        <div>
                            <p className="text-sm">Phone Number:</p>
                            <p className="">{patientData.phone_number}</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <img src={EmergencyIcon} alt="Emergency Icon" className="w-10 h-10 mr-4" />
                        <div>
                            <p className="text-sm">Emergency Contact:</p>
                            <p className="">{patientData.emergency_contact}</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <img src={InsuranceIcon} alt="Insurance Icon" className="w-10 h-10 mr-4" />
                        <div>
                            <p className="text-sm">Insurance:</p>
                            <p className="">{patientData.insurance_type}</p>
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button className="bg-[#01F0D0] py-2 px-6 rounded-full font-semibold">
                            Show All Information
                        </button>
                    </div>
                </div>

            </div>

            <div className="mt-6 bg-white p-4 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Lab Results</h3>
                <ul className="space-y-4">
                    {patientData.lab_results.map((result, index) => (
                        <li key={index} className="flex items-center">
                            <span>{result}</span>
                            <img src={Download} className="ml-auto w-4" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RightHero;
