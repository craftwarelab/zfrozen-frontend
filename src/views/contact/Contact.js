import React, { useState } from 'react';

const Contact = () => {
  // State for the form fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const waMessage = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
    const waUrl = `https://wa.me/94771173022?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, '_blank');

    // Clear the form fields after submission
    setName('');
    setPhone('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    // contact page
    <div className="px-4 pt-10 md:py-20 lg:md-20 lx:md-20 mx-auto sm:px-6 lg:px-8 xl:px-32 bg-[#1F2232]">
      <div className="flex justify-center items-center">
        <p className="text-white font-[600] text-[30px] md:text-[50px] lg:text-[50px] text-center">
          "Let&rsquo;s Get In Touch
          <br /> to talk about{" "}
          <span className="text-[#FFD700]">your project</span>
        </p>
      </div>
      <div className="py-12 px-2 md:px-0 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 ">
          <div className="md:col-span-1 bg-white rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-gray-600 rounded-lg"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 border border-gray-600 rounded-lg"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-600 rounded-lg"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-2 border border-gray-600 rounded-lg"
                />
              </div>
            </div>
            <div className="mt-4">
              <textarea
                rows="3"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border border-gray-600 rounded-lg"
              ></textarea>
            </div>
            <div className="mt-4">
              <button
                onClick={handleSubmit}
                className="w-full h-12 p-3 text-black bg-[#FFD700] rounded-lg"
              >
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
                  <a href="https://wa.me/94771173022" className="text-gray-600">
                    +94 77 117 30 22
                  </a>
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
                  <a href="mailto:zfrozen.dev@gmail.com" className="text-gray-600">
                    zfrozen.dev@gmail.com
                  </a>
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
              <div className="flex justify-center space-x-3">
                <a
                  href="https://web.facebook.com/zfrozenofficial.co"
                  className="w-10 h-10 bg-yellow-400 flex items-center justify-center rounded-full hover:bg-yellow-500"
                >
                  <img
                    src="/facebook.webp"
                    alt="Facebook"
                    className="w-10 h-10"
                  />
                </a>
                <a
                  href="https://www.instagram.com/zfrozenofficial"
                  className="w-10 h-10 bg-yellow-400 flex items-center justify-center rounded-full hover:bg-yellow-500"
                >
                  <img
                    src="/instar.webp"
                    alt="Instagram"
                    className="w-10 h-10"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/zfrozenofficial"
                  className="w-10 h-10 bg-yellow-400 flex items-center justify-center rounded-full hover:bg-yellow-500"
                >
                  <img
                    src="linkdin.webp"
                    alt="LinkedIn"
                    className="w-10 h-10"
                  />
                </a>
                <a
                  href="https://www.tiktok.com/@zfrozenofficial"
                  className="w-10 h-10 bg-yellow-400 flex items-center justify-center rounded-full hover:bg-yellow-500"
                >
                  <img
                    src="/tiktok.webp"
                    alt="TikTok"
                    className="w-10 h-10"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@zfrozen-3d"
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
