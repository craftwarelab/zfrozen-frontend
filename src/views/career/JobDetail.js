import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const JobDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract job data safely
  const selectedJob = location.state?.selectedJob;

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ SAFETY CHECK
  if (!selectedJob || selectedJob.id === "1") {
    return (
      <div className="flex flex-col justify-center items-center h-[70vh] text-center">
        <p className="text-gray-700 text-xl font-semibold mb-4">
          🚫 No job details found.
        </p>
        <button
          onClick={() => navigate("/career")}
          className="text-black bg-white font-[500] px-8 py-2 rounded-[8px] border border-black cursor-pointer hover:bg-black hover:text-white"
        >
          Back to Careers
        </button>
      </div>
    );
  }

  // ✅ Continue rendering only if job is valid
  return (
    <div className="px-4 pt-10 md:pb-20 mt:pb-15 lg:md-20 lx:md-20 mx-auto sm:px-6 lg:px-8 xl:px-32 bg-[#ffffff]">
      {/* HEADER */}
      <div className="flex justify-center items-center bg-[#F8F8F8] rounded-lg border-0">
        <p className="text-black font-[600] p-5 sm:text-[60px] text-[40px]">
          {selectedJob.name}
        </p>
      </div>

      {/* CONTENT */}
      <div className="relative">
        <div className="flex flex-col-reverse md:flex-row text-left p-7 border rounded-xl shadow-lg mt-7 mb-14">
          <div className="flex-grow pr-8">
            <div className="mt-8">
              <h2 className="font-[500] text-[20px] mb-2">Role Overview</h2>
              <span className="text-black font-bold mb-3">
                {selectedJob.description}
              </span>
              <p className="text-black font-[400] mb-5">
                {selectedJob.roleOverview}
              </p>

              <h2 className="font-[500] text-[20px] mb-2">
                Key Responsibilities:
              </h2>
              <ul className="text-black font-[400] mb-5 list-none pl-0">
                {selectedJob.keyResponsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h2 className="font-[500] text-[20px] mb-2">
                Qualifications We’re Looking For:
              </h2>
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

              <ul className="text-black font-[400] mb-5 list-none pl-0">
                {selectedJob.apply.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className="flex sm:justify-left justify-left">
                <a
                  href={`mailto:contact@zfrozen.com?subject=Application for Career - ${selectedJob.name}&body=I am interested in applying for this ${selectedJob.name} position.`}
                  className="text-[#000000] w-[300] font-[500] px-8 py-2 rounded-[8px] bg-[#FFD700] cursor-pointer hover:bg-[#000000] hover:text-white text-center"
                >
                  Apply
                </a>
                <button
                  onClick={() => navigate("/career")}
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
      </div>
    </div>
  );
};

export default JobDetail;
