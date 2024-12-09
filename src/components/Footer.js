import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white select-none">
      <div className="max-w-auto mx-6 md:mx-0 lg:mx-36 pt-16 pb-8 sm:px-6 lg:px-8 overflow-hidden">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img
              src="/79d044f63fdef05fea40770eb0fee0d3.png"
              className="h-9 sm:h-12"
              alt="logo"
            />
            <p className=" mt-4 w-60 text-sm text-gray-600">
              At Zfrozen, we're passionate about IT, technology and innovation.
            </p>
            <div className="flex mt-4 sm:mt-8 space-x-2 sm:space-x-4 text-gray-600">
              {/* Facebook */}
              <a
                className="hover:opacity-95 rounded-[6px] bg-[#FFD700] hover:cursor-pointer"
                href="https://web.facebook.com/zfrozenofficial.co"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Facebook</span>
                <img
                  src="/facebook.webp"
                  alt="Facebook"
                  className="w-10 h-10"
                />
              </a>
              {/* Instagram */}
              <a
                className="hover:opacity-95 rounded-[6px] bg-[#FFD700] hover:cursor-pointer"
                href="https://www.instagram.com/zfrozenofficial"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <img
                  src="/instar.webp"
                  alt="Instagram"
                  className="w-10 h-10"
                />
              </a>
              {/* LinkedIn */}
              <a
                className="hover:opacity-95 rounded-[6px] bg-[#FFD700] hover:cursor-pointer"
                href="https://www.linkedin.com/company/zfrozenofficial"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <img
                  src="linkdin.webp"
                  alt="LinkedIn"
                  className="w-10 h-10"
                />
              </a>
              {/* TikTok */}
              <a
                className="hover:opacity-95 rounded-[6px] bg-[#FFD700] hover:cursor-pointer"
                href="https://www.tiktok.com/@zfrozenofficial"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">TikTok</span>
                <img
                  src="/tiktok.webp"
                  alt="TikTok"
                  className="w-10 h-10"
                />
              </a>
              {/* YouTube */}
              <a
                className="hover:opacity-95 rounded-[6px] bg-[#FFD700] hover:cursor-pointer"
                href="https://www.youtube.com/@zfrozen-3d"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">YouTube</span>
                <img
                  src="/youtube.webp"
                  alt="YouTube"
                  className="w-10 h-10"
                />
              </a>
            </div>
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-1 gap-8 lg:col-span-3 sm:grid-cols-3">
              <div>
                <p className="font-[700] text-[24px]">Services</p>
                <img src="/short-bar.webp" className="w-10 md:w-12 lg:w-14 pt-2 pb-3"/>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href>
                    {" "}
                    IoT{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    AI & Machine Learning{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    Mobile App Development{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    Web Development{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    Desktop Applications Development{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    Graphic Design{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    UI/UX{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    3D Modeling & 3D Printing{" "}
                  </a>
                </nav>
              </div>
              <div>
                <p className="font-[700] text-[24px]">Quick Links</p>
                <img src="/short-bar.webp" className="w-10 md:w-12 lg:w-14 pt-2 pb-3"/>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href>
                    {" "}
                    Our Services{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    Portfolio{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    Career{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    About us{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    Contact us{" "}
                  </a>
                </nav>
              </div>
              <div>
                <p className="font-[700] text-[24px]">Subscribe Us</p>
                <img src="/short-bar.webp" className="w-10 md:w-12 lg:w-14 pt-2 pb-3"/>
                <div className="mt-4 text-sm text-gray-500 flex flex-col space-y-2">
                  <p>
                    Stay Updated with the Latest! Subscribe Now for Exclusive Updates and Offers.
                  </p>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="b border-2 border-slate-200 rounded-[6px] p-1 bg-[#E0E0E0] px-4 py-2"
                  />
                  <div className="flex justify-end items-center mt-2">
                    <button className="bg-[#FFD700] text-black rounded-[6px] px-4 py-2">
                      Submit
                    </button>
                  </div>
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
