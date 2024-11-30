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
    <div className="px-4 py-20 mx-auto sm:px-6 lg:px-8 xl:px-32 bg-[#1F2232]">
      <div className="flex justify-center items-center">
        <p className="text-white font-[600] text-[60px] text-center">
          Let&rsquo;s Get In Touch
          <br /> to talk about{" "}
          <span className="text-[#FFD700]">your project</span>
        </p>
      </div>
      <div className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <div className="md:col-span-2 bg-white rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-4 border border-gray-600 rounded-lg"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
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
              <button className="w-full p-4 text-white bg-[#FFD700] rounded-lg">
                Send Message
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg p-8">
            <div className="space-y-6">
              {/* Call Section */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center rounded-full">
                  <FaPhoneAlt className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Call Anytime</h3>
                  <p className="text-gray-600">+94 77 117 30 22</p>
                  <p className="text-gray-600">+94 77 117 30 21</p>
                </div>
              </div>

              {/* Email Section */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center rounded-full">
                  <FaEnvelope className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Send Email</h3>
                  <p className="text-gray-600">zfrozen.dev@gmail.com</p>
                  <p className="text-gray-600">hello@zfrozen.com</p>
                </div>
              </div>

              {/* Address Section */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center rounded-full">
                  <FaMapMarkerAlt className="text-white text-lg" />
                </div>
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
                  <FaLinkedin className="text-white" />
                </a>
                <a
                  href
                  className="w-10 h-10 bg-yellow-400 flex items-center justify-center rounded-full hover:bg-yellow-500"
                >
                  <FaInstagram className="text-white" />
                </a>
                <a
                  href
                  className="w-10 h-10 bg-yellow-400 flex items-center justify-center rounded-full hover:bg-yellow-500"
                >
                  <FaFacebookF className="text-white" />
                </a>
                <a
                 href
                  className="w-10 h-10 bg-yellow-400 flex items-center justify-center rounded-full hover:bg-yellow-500"
                >
                  <FaTwitter className="text-white" />
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
