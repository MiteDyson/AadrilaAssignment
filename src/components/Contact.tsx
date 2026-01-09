import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiry: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      inquiry: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <div className="flex-grow relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 pb-0">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Contact Us
              </h1>
              
              <p className="text-lg bg-gradient-to-r from-orange-600 to-blue-700 bg-clip-text text-transparent inline-block mb-12 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
              </p>
              
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-orange-500" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold text-gray-900 underline">U.S. Office</span>
                  </div>
                  <div className="ml-7">
                    <p className="text-gray-900 font-medium">Aadriia Technologies INC,</p>
                    <p className="text-gray-700">8 The Green, Ste R, in the City of Dover County of Kent Zip Code 19901.</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-orange-500" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold text-gray-900 underline">India Office</span>
                  </div>
                  <div className="ml-7">
                    <p className="text-gray-900 font-medium">Aadriia Technologies Private Limited,</p>
                    <p className="text-gray-700">Unit 707, Lotus Trade Centre, Sahakar Nagar, New Link Road, Near D.N.Nagar, Andheri West, Mumbai, Maharashtra 400053.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative z-10 lg:mb-[-120px]">
              <form 
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8"
              >
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    placeholder="Full Name"
                  />
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    placeholder="Email"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    placeholder="Phone Number"
                  />
                  <input 
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    placeholder="Company Name"
                  />
                </div>
                
                <div className="mb-4">
                  <input 
                    type="text"
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    placeholder="Inquiry Type"
                  />
                </div>
                
                <div className="mb-6">
                  <textarea 
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400 resize-none"
                    placeholder="Message"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-[#3e6fb4] text-white font-medium py-4 px-6 rounded-full"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#3e6fb4] w-full text-white py-8 px-6 lg:px-12 pt-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-white text-sm mb-8">
            © 2025 by Aadriia Technologies Private Limited CIN U74999UP2017PTC094688
          </p>
          <p className="text-gray-300 text-sm">
            Registered Address: B-1, 127/K, Sector-K Aliganj, Lucknow, <br/> Uttar Pradesh, India, 226024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;