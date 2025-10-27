import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        fetchTechnologies().then((data) => {
            const filteredData = data.filter((job) => job.id !== "1"); // hide id = 1
            setData(filteredData);
            setLoading(false);
        });
    }, []);

    return (
        <div className="px-4 pt-10 md:pb-20 mt:pb-15 lg:md-20 lx:md-20 mx-auto sm:px-6 lg:px-8 xl:px-32 bg-[#ffffff]">
            <div className="flex justify-center items-center bg-[#F8F8F8] rounded-lg border-0">
                <p className="text-black font-[600] p-5 sm:text-[60px] text-[40px] md:text-[60px] lg:text-[60px] xl:text-[60px]">
                    {selectedJob ? selectedJob.name : "Career"}
                </p>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-[51.8vh]">
                    <div className="w-10 h-10 border-4 border-gray-300 border-t-[#000000] rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="relative">
                    {selectedJob ? (
                        <div className="flex flex-col md:flex-row text-left p-7 border rounded-xl shadow-lg mt-7 mb-14">
                            <div className="flex-grow pr-8">
                                <h2 className="font-[500] text-[20px] mb-2">Role Overview</h2>
                                <p className="text-black font-[400] mb-5">{selectedJob.roleOverview}</p>
                                <button
                                    onClick={() => setSelectedJob(null)}
                                    className="text-black bg-white w-[300] ml-2 font-[500] px-8 py-2 rounded-[8px] border border-black cursor-pointer"
                                >
                                    Back
                                </button>
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
                        data.map((career, index) => (
                            <div key={index} className="flex flex-col md:flex-row justify-between items-center mt-7 mb-14">
                                <div className="flex flex-col text-center p-7 border rounded-xl shadow-lg" onClick={() => navigate("/job-detail", { state: { selectedJob: career } })}>
                                    <p className="text-black font-[500] text-[24px] mb-5">{career.name}</p>
                                    <img src={career.image} alt="career" className="rounded-xl max-h-[300px] object-cover" />
                                    <button
                                        onClick={() => navigate("/job-detail", { state: { selectedJob: career } })}
                                        className="text-[#000000] mt-4 w-full font-[500] px-8 py-2 rounded-[8px] bg-[#FFD700] cursor-pointer hover:bg-[#000000] hover:text-white"
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default Career;