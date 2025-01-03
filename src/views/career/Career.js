import React, { useState, useEffect } from "react";
import career from "./Career.json";

const fetchTechnologies = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(career);
        }, 2000);
    });
};

const Career = () => {
    const [data, setData] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        fetchTechnologies().then((data) => {
            setData(data);
        });
    }, []);

    return (
        <div className="px-4 pt-10 md:pb-20 mt:pb-15 lg:md-20 lx:md-20 mx-auto sm:px-6 lg:px-8 xl:px-32 bg-[#ffffff]">
            {/* Title changes dynamically */}
            <div className="flex justify-center items-center bg-[#F8F8F8] rounded-lg border-0">
                <p className="text-black font-[600] text-[60px] p-5">
                    {selectedJob ? selectedJob.name : "Career"}
                </p>
            </div>

            <div className="relative">
                {selectedJob ? (
                    // Displaying the selected job details
                    <div className="flex flex-col md:flex-row text-left p-7 border rounded-xl shadow-lg my-14">
                        <div className="flex-grow pr-8">
                            <div className="mt-8">
                                <h2 className="font-[500] text-[20px] mb-2">Role Overview</h2>
                                <span className="text-black font-bold mb-3">{selectedJob.description}</span>
                                <p className="text-black font-[400] mb-5">{selectedJob.roleOverview}</p>

                                <h2 className="font-[500] text-[20px] mb-2">Key Responsibilities:</h2>
                                <ul className="text-black font-[400] mb-5 list-none pl-0">
                                    {selectedJob.keyResponsibilities.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>

                                <h2 className="font-[500] text-[20px] mb-2">Qualifications We’re Looking For:</h2>
                                <ul className="text-black font-[400] mb-5 list-none pl-0">
                                    {selectedJob.qualifications.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>

                                <h2 className="font-[500] text-[20px] mb-2">Why Join Us?</h2>
                                <ul className="text-black font-[400] mb-5 list-none pl-0">
                                    {selectedJob.whyJoinUs.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                                <div className="flex sm:justify-left justify-left">
                                    <a
                                        href="mailto:zfrozensolar@gmail.com?subject=Application for Career&body=I am interested in applying for this Solar Technician Trainees position."
                                        className="text-[#000000] w-[300] font-[500] px-8 py-2 rounded-[8px] bg-[#FFD700] cursor-pointer hover:bg-[#000000] hover:text-white text-center"
                                    >
                                        Apply
                                    </a>
                                    {/* Back button with setSelectedJob(null) to go back to the list */}
                                    <button
                                        onClick={() => setSelectedJob(null)}
                                        className="text-black bg-white w-[300] ml-2 font-[500] px-8 py-2 rounded-[8px] border border-black cursor-pointer"
                                    >
                                        Back
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <img
                                src={selectedJob.image}
                                alt="career"
                                className="rounded-xl max-h-[500px] object-cover"
                            />
                        </div>
                    </div>

                ) : (
                    // Show the career list
                    data.map((career, index) => (
                        <div
                            key={index}
                            id={index}
                            className="flex flex-col md:flex-row justify-between items-center my-14 space-y-5 md:space-y-0"
                        >
                            <div className="flex flex-col text-center md:text-center p-7 border rounded-xl shadow-lg">
                                <p className="text-black font-[500] text-[24px] mb-5">{career.name}</p>
                                <span className="text-black font-[400] max-w-[300px] mb-3">{career.description}</span>
                                <div className="flex sm:justify-center justify-center">
                                    <img
                                        src={career.image}
                                        alt="career"
                                        className="rounded-xl max-h-[300px] object-cover"
                                    />
                                </div>
                                <div className="flex sm:justify-center justify-center">
                                    <a
                                        href="mailto:zfrozensolar@gmail.com?subject=Application for Career&body=I am interested in applying for this Solar Technician Trainees position."
                                        className="text-[#000000] w-full font-[500] px-8 py-2 rounded-[8px] bg-[#FFD700] cursor-pointer hover:bg-[#000000] hover:text-white text-center"
                                    >
                                        Apply
                                    </a>
                                </div>
                                <div className="flex sm:justify-center justify-center pt-1">
                                    <button
                                        onClick={() => setSelectedJob(career)} // When clicked, it sets the selected job
                                        className="text-[#000000] text-[12px] w-full font-[500] px-8 py-2 rounded-[8px] cursor-pointer"
                                    >
                                        See Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Career;
