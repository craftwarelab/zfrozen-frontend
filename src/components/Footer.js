import React, { useState } from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  // State to handle email input and toast visibility
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState("");
  
  // Handle email change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email is entered
    if (!email) {
      setShowToast("Please enter an Email!");  // Show error toast
    } else {
      setEmail("");  // Clear email field
      setShowToast("You subscribed to Zfrozen!");  // Show success toast
    }

    // Auto-hide toast message after 3 seconds
    setTimeout(() => {
      setShowToast("");
    }, 3000);
  };

  return (
    <footer className="bg-white select-none">
      <div className="max-w-auto mx-6 md:mx-0 xl:px-40 pt-16 pb-8 sm:px-6 lg:px-8 overflow-hidden">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img
              src="/79d044f63fdef05fea40770eb0fee0d3.png"
              className="h-9 sm:h-12"
              alt="logo"
            />
            <p className="mt-4 w-60 text-sm text-gray-600">
              At Zfrozen, we're passionate about IT, technology and innovation.
            </p>
            <div className="flex mt-4 sm:mt-8 space-x-2 sm:space-x-4 text-gray-600">
              {/* Social media icons */}
              <a className="hover:opacity-95 rounded-[6px] bg-[#FFD700] hover:cursor-pointer" href="https://web.facebook.com/zfrozenofficial.co" target="_blank" rel="noreferrer">
                <span className="sr-only">Facebook</span>
                <img src="/facebook.webp" alt="Facebook" className="w-10 h-10" />
              </a>
              <a className="hover:opacity-95 rounded-[6px] bg-[#FFD700] hover:cursor-pointer" href="https://www.instagram.com/zfrozenofficial" target="_blank" rel="noreferrer">
                <span className="sr-only">Instagram</span>
                <img src="/instar.webp" alt="Instagram" className="w-10 h-10" />
              </a>
              <a className="hover:opacity-95 rounded-[6px] bg-[#FFD700] hover:cursor-pointer" href="https://www.linkedin.com/company/zfrozenofficial" target="_blank" rel="noreferrer">
                <span className="sr-only">LinkedIn</span>
                <img src="linkdin.webp" alt="LinkedIn" className="w-10 h-10" />
              </a>
              <a className="hover:opacity-95 rounded-[6px] bg-[#FFD700] hover:cursor-pointer" href="https://www.tiktok.com/@zfrozenofficial" target="_blank" rel="noreferrer">
                <span className="sr-only">TikTok</span>
                <img src="/tiktok.webp" alt="TikTok" className="w-10 h-10" />
              </a>
              <a className="hover:opacity-95 rounded-[6px] bg-[#FFD700] hover:cursor-pointer" href="https://www.youtube.com/@zfrozen-3d" target="_blank" rel="noreferrer">
                <span className="sr-only">YouTube</span>
                <img src="/youtube.webp" alt="YouTube" className="w-10 h-10" />
              </a>
            </div>
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-1 gap-8 lg:col-span-3 sm:grid-cols-3">
              <div>
                <p className="font-[700] text-[24px]">Services</p>
                <img
                  src="/short-bar.webp"
                  className="w-10 md:w-12 lg:w-14 pt-2 pb-3"
                  alt="short-bar"
                />
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href="/services">
                    Zfrozen Solar
                  </a>
                  <a className="hover:opacity-75" href="/services">
                    IoT
                  </a>
                  <a className="hover:opacity-75" href="/services">
                    AI & Machine Learning
                  </a>
                  <a className="hover:opacity-75" href="/services">
                    Mobile App Development
                  </a>
                  <a className="hover:opacity-75" href="/services">
                    Web Development
                  </a>
                  <a className="hover:opacity-75" href="/services">
                    Desktop Applications Development
                  </a>
                  <a className="hover:opacity-75" href="/services">
                    Graphic Design
                  </a>
                  <a className="hover:opacity-75" href="/services">
                    UI/UX
                  </a>
                  <a className="hover:opacity-75" href="/services">
                    3D Modeling & 3D Printing
                  </a>
                </nav>
              </div>
              <div>
                <p className="font-[700] text-[24px]">Quick Links</p>
                <img
                  src="/short-bar.webp"
                  className="w-10 md:w-12 lg:w-14 pt-2 pb-3"
                  alt="short-bar"
                />
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href="/services">
                    Our Services
                  </a>
                  <a className="hover:opacity-75" href="/portfolio">
                    Portfolio
                  </a>
                  <a className="hover:opacity-75" href="/career">
                    Career
                  </a>
                  <a className="hover:opacity-75" href="/about">
                    About Us
                  </a>
                  <a className="hover:opacity-75" href="/contact">
                    Contact Us
                  </a>
                </nav>
              </div>
              <div>
                <p className="font-[700] text-[24px]">Subscribe Us</p>
                <img
                  src="/short-bar.webp"
                  className="w-10 md:w-12 lg:w-14 pt-2 pb-3"
                  alt="short-bar"
                />
                <div className="mt-4 text-sm text-gray-500 flex flex-col space-y-2">
                  <p>
                    Stay Updated with the Latest! Subscribe Now for Exclusive Updates and Offers.
                  </p>
                  <form onSubmit={handleSubmit} className="flex flex-col">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Email"
                      className="b border-2 border-slate-200 rounded-[6px] p-1 bg-[#E0E0E0] px-4 py-2"
                    />
                    <div className="flex justify-end items-center mt-2">
                      <button type="submit" className="bg-[#FFD700] text-black rounded-[6px] px-4 py-2">
                        Submit
                      </button>
                    </div>
                  </form>

                  {/* Toast Message */}
                  {showToast && (
                    <div className="mt-2 bg-green-500 text-white text-sm px-4 py-2 rounded-md">
                      {showToast}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-6">
          <p className="mt-8 text-xs text-gray-800">© {year} Zfrozen (Pvt) Ltd</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
