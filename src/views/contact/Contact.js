import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    // contact page
    <div className="px-4 pt-10 md:py-20 lg:md-20 lx:md-20 mx-auto sm:px-6 lg:px-8 xl:px-32 bg-[#1F2232]">
      <div className="flex justify-center items-center">
        <p className="text-white font-[600] text-[30px] md:text-[50px] lg:text-[90px] text-center">
          " Let&rsquo;s Get In Touch
          <br /> to talk about{" "}
          <span className="text-[#FFD700]">your project</span>
        </p>
      </div>
      <div className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-4 ">
          <div className="md:col-span-2 bg-white rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 border border-gray-600 rounded-lg"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full p-4 border border-gray-600 rounded-lg"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 border border-gray-600 rounded-lg"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-4 border border-gray-600 rounded-lg"
                />
              </div>
            </div>
            <div className="mt-4">
              <textarea
                rows="6"
                placeholder="Message"
                className="w-full p-4 border border-gray-600 rounded-lg"
              ></textarea>
            </div>
            <div className="mt-4">
              <button className="w-full p-4 text-black bg-[#FFD700] rounded-lg">
                Send Message
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg p-8">
            <div className="space-y-6">
              {/* Call Section */}
              <div className="flex items-center space-x-4">
                <img
                  src="/call.webp"
                  alt="Call"
                  className="w-10 h-10"
                />
                <div>
                  <h3 className="text-lg font-bold">Call Anytime</h3>
                  <p className="text-gray-600">+94 77 117 30 22</p>
                </div>
              </div>

              {/* Email Section */}
              <div className="flex items-center space-x-4">
                <img
                  src="/mail.webp"
                  alt="Email"
                  className="w-10 h-10"
                />
                <div>
                  <h3 className="text-lg font-bold">Send Email</h3>
                  <p className="text-gray-600">zfrozen.dev@gmail.com</p>
                </div>
              </div>

              {/* Address Section */}
              <div className="flex items-center space-x-4">
                <img
                  src="/location.webp"
                  alt="Location"
                  className="w-10 h-10"
                />
                <div>
                  <h3 className="text-lg font-bold">Visit Us</h3>
                  <p className="text-gray-600">Umagiliya PL. 378/2B/4,</p>
                  <p className="text-gray-600">Polhena, Kelaniya, SL</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8 text-center">
              <h3 className="text-lg font-bold mb-4">Follow us</h3>
              <div className="flex justify-center space-x-6">
                <a
                  href
                  className="w-10 h-10 bg-yellow-400 flex items-center justify-center rounded-full hover:bg-yellow-500"
                >
                  <img
                    src="/facebook.webp"
                    alt="Facebook"
                    className="w-10 h-10"
                  />
                </a>
                <a
                  href
                  className="w-10 h-10 bg-yellow-400 flex items-center justify-center rounded-full hover:bg-yellow-500"
                >
                  <img
                    src="/instar.webp"
                    alt="Instagram"
                    className="w-10 h-10"
                  />
                </a>
                <a
                  href
                  className="w-10 h-10 bg-yellow-400 flex items-center justify-center rounded-full hover:bg-yellow-500"
                >
                  <img
                    src="linkdin.webp"
                    alt="LinkedIn"
                    className="w-10 h-10"
                  />
                </a>
                <a
                  href
                  className="w-10 h-10 bg-yellow-400 flex items-center justify-center rounded-full hover:bg-yellow-500"
                >
                  <img
                    src="/tiktok.webp"
                    alt="TikTok"
                    className="w-10 h-10"
                  />
                </a>
                <a
                  href
                  className="w-10 h-10 bg-yellow-400 flex items-center justify-center rounded-full hover:bg-yellow-500"
                >
                  <img
                    src="/youtube.webp"
                    alt="YouTube"
                    className="w-10 h-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
