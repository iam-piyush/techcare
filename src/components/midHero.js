import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import Arrow from "../assets/arrow.png"
import RespiratoryRate from "../assets/respiratory rate.png";
import Temp from "../assets/temperature.png";
import Heart from "../assets/Heart.png";

ChartJS.register(Title, Tooltip, LineElement, CategoryScale, LinearScale, PointElement);

const MidHero = ({ patientData }) => {
    const systolicValues = patientData.diagnosis_history.map((entry) => entry.blood_pressure.systolic.value);
    const diastolicValues = patientData.diagnosis_history.map((entry) => entry.blood_pressure.diastolic.value);
    const heartRateValues = patientData.diagnosis_history.map((entry) => entry.heart_rate.value);
    const months = patientData.diagnosis_history.map((entry) => `${entry.month} ${entry.year}`);

    const chartData = {
        labels: months,
        datasets: [
            {
                data: systolicValues,
                borderColor: '#C26EB4',
                backgroundColor: '#C26EB4',
                fill: false,
                tension: 0.4,
            },
            {
                data: diastolicValues,
                borderColor: '#7E6CAB',
                backgroundColor: '#7E6CAB',
                fill: false,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
            },
            legend: {
                display: false,
            },
        },
        elements: {
            point: {
                radius: 6,
            },
        },
        scales: {
            x: {
                ticks: {
                    maxRotation: 0,
                    minRotation: 0,
                    font: {
                        size: 12,
                    },
                },
            },
        },
    };

    const renderLevelCircle = (color) => {
        return (
            <div className={`w-4 h-4 border border-white rounded-full ${color} mr-3`} />
        );
    };

    return (
        <div className="MidHero">
            <div className="bg-white p-4 rounded-xl">
                <h2 className="text-xl font-bold mb-4">Diagnosis History</h2>

                <div className="flex justify-between bg-[#F4F0FE] px-4 py-8 rounded-xl">
                    <div className="w-2/3">
                        <Line data={chartData} options={options} />
                    </div>

                    <div className="w-1/3 pl-6 space-y-6">
                        <div className="flex flex-col">
                            <div className='flex items-center'>
                                {renderLevelCircle('bg-[#E66FD2]')}
                                <h3 className="font-normal">Systolic</h3>
                            </div>
                            <div>
                                <div className="text-xl mt-2">{patientData.diagnosis_history[0].blood_pressure.systolic.value}</div>
                                <div className="mt-2">
                                    {patientData.diagnosis_history[0].blood_pressure.systolic.levels === 'Higher than Average' ? (
                                        <div className='flex items-center'>
                                            <img src={Arrow} className='h-2' alt="" />
                                            <span className="ml-2 text-sm">Higher than Average</span>
                                        </div>
                                    ) : (
                                        <div className='flex items-center'>
                                            <img src={Arrow} className="rotate-180 h-2" alt="" />
                                            <span className="ml-2 text-sm">Lower than Average</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="border-t-2 border-gray-300 mt-6 pt-4">
                            <div className="flex flex-col">
                                <div className='flex items-center'>
                                    {renderLevelCircle('bg-[#E66FD2]')}
                                    <h3 className="font-normal">Diastolic</h3>
                                </div>
                                <div>
                                    <div className="text-xl mt-2">{patientData.diagnosis_history[0].blood_pressure.diastolic.value}</div>
                                    <div className="mt-2">
                                        {patientData.diagnosis_history[0].blood_pressure.diastolic.levels === 'Higher than Average' ? (
                                            <div className='flex items-center'>
                                                <img src={Arrow} className='h-2' alt="" />
                                                <span className="ml-2 text-sm">Higher than Average</span>
                                            </div>
                                        ) : (
                                            <div className='flex items-center'>
                                                <img src={Arrow} className="rotate-180 h-2" alt="" />
                                                <span className="ml-2 text-sm">Lower than Average</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-6">
                    <div className="bg-[#E0F3FA] px-4 py-8 rounded-xl">
                        <img src={RespiratoryRate} className="w-20" alt="" />
                        <div className='flex flex-col space-y-2 mt-2'>
                            <h4 className="">Respiratory Rate</h4>
                            <div className="font-semibold text-2xl">{patientData.diagnosis_history[0].respiratory_rate.value} bpm</div>
                            <div>{patientData.diagnosis_history[0].respiratory_rate.levels}</div>
                        </div>
                    </div>

                    <div className="bg-[#FFE6E9] px-4 py-8 rounded-xl">
                        <img src={Temp} className="w-20" alt="" />
                        <div className='flex flex-col space-y-2 mt-2'>
                            <h4 className="">Temperature</h4>
                            <div className="font-semibold text-2xl">{patientData.diagnosis_history[0].temperature.value}<sup>o</sup>F</div>
                            <div className="mt-2">
                                {patientData.diagnosis_history[0].temperature.levels === 'Higher than Average' ? (
                                    <div className='flex items-center'>
                                        <img src={Arrow} className='h-2' alt="" />
                                        <span className="ml-2 text-sm">Higher than Average</span>
                                    </div>
                                ) : (
                                    <div className='flex items-center'>
                                        <img src={Arrow} className="rotate-180 h-2" alt="" />
                                        <span className="ml-2 text-sm">Lower than Average</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#FFE6F1] px-4 py-8 rounded-xl">
                        <img src={Temp} className="w-20" alt="" />
                        <div className='flex flex-col space-y-2 mt-2'>
                            <h4 className="">Heart Rate</h4>
                            <div className="font-semibold text-2xl">{patientData.diagnosis_history[0].heart_rate.value} bpm</div>
                            <div className="mt-2">
                                {patientData.diagnosis_history[0].heart_rate.levels === 'Higher than Average' ? (
                                    <div className='flex items-center'>
                                        <img src={Arrow} className='h-2' alt="" />
                                        <span className="ml-2 text-sm">Higher than Average</span>
                                    </div>
                                ) : (
                                    <div className='flex items-center'>
                                        <img src={Arrow} className="rotate-180 h-2" alt="" />
                                        <span className="ml-2 text-sm">Lower than Average</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-8 bg-white p-4 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Diagnosis List</h3>
                <table className="min-w-full table-auto border-collapse my-8">
                    <thead>
                        <tr className="bg-[#F6F7F8] rounded-full">
                            <th className="px-4 py-2 text-left rounded-l-full">Problem/Diagnosis</th>
                            <th className="px-4 py-2 text-left">Description</th>
                            <th className="px-4 py-2 text-left rounded-r-full">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patientData.diagnostic_list.map((item, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2">{item.name}</td>
                                <td className="px-4 py-2">{item.description}</td>
                                <td className="px-4 py-2">{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MidHero;
