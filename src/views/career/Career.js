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

    useEffect(() => {
        fetchTechnologies().then((data) => {
            setData(data);
        });
    }, []);

    return (
        <div className="px-4 pt-10 md:pb-20 mt:pb-15 lg:md-20 lx:md-20 mx-auto sm:px-6 lg:px-8 xl:px-32 bg-[#ffffff]">
            <div className="flex justify-center items-center bg-[#F8F8F8] rounded-lg border-0">
                <p className="text-black font-[600] text-[60px] p-5">Career</p>
            </div>
            <div className="realative">
                {data ? (
                    data.map((career, index) => (
                        <>
                            <div
                                id={index}
                                className="flex flex-col md:flex-row justify-between items-center my-14 space-y-5 md:space-y-0 "
                            >

                                <div className="flex flex-col text-center md:text-center p-7 border rounded-xl shadow-lg">
                                    <p className="text-black font-[500] text-[24px] md:text-[24px] mb-5">
                                        {career.name}
                                    </p>
                                    <span className="text-black font-[400] max-w-[300px] mb-3">
                                        {career.description}
                                    </span>
                                    <div className="flex sm:justify-center justify-center ">
                                        <img
                                            src={career.image}
                                            alt="career"
                                            className=" rounded-xl max-h-[300px] object-cover"
                                        />
                                    </div>
                                    <div className="flex sm:justify-center justify-center ">
                                        <button className="text-[#000000] w-full font-[500] px-8 py-2 rounded-[8px] bg-[#FFD700] cursor-pointer hover:bg-[#000000] hover:text-white">
                                            Apply
                                        </button>
                                    </div>
                                    <div className="flex sm:justify-center justify-center pt-1">
                                        <button className="text-[#000000] text-[12px] w-full font-[500] px-8 py-2 rounded-[8px] cursor-pointer">
                                            See Details
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
};

export default Career;
