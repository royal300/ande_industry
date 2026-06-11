import { useState, useEffect } from 'react';

export default function EnquiryFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, loading, success, error
  const [isShaking, setIsShaking] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Interval logic for shake and tooltip show
  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger shake animation
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 800);

      // Trigger tooltip show
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 4000);
    }, 10000); // run every 10 seconds

    // Initial run after 3 seconds
    const initialTimeout = setTimeout(() => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 800);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 4000);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.mobile.trim())) {
      newErrors.mobile = 'Enter a valid mobile number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitStatus('loading');

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.mobile,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', mobile: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    }
  };

  return (
    <>
      {/* CSS Keyframe Injector */}
      <style>{`
        @keyframes custom-shake {
          0%, 100% { transform: rotate(0deg); }
          12.5% { transform: rotate(-10deg); }
          25% { transform: rotate(10deg); }
          37.5% { transform: rotate(-8deg); }
          50% { transform: rotate(8deg); }
          62.5% { transform: rotate(-4deg); }
          75% { transform: rotate(4deg); }
          87.5% { transform: rotate(-2deg); }
        }
        .enquiry-shake {
          animation: custom-shake 0.8s ease-in-out;
        }
        .pulse-glowing::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid #1e5fa3;
          animation: pulse-ring-anim 2s infinite;
          pointer-events: none;
        }
        @keyframes pulse-ring-anim {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.15); opacity: 0.4; }
          100% { transform: scale(1.3); opacity: 0; }
        }
      `}</style>

      {/* Floating Button Container */}
      <div className="fixed bottom-24 right-8 z-50 flex items-center select-none font-sans">
        
        {/* Tooltip Label */}
        <div 
          className={`mr-3 py-2 px-4 bg-white text-[#1e5fa3] border border-[#e8e8e8] font-bold text-sm rounded-lg shadow-lg flex items-center transition-all duration-300 transform origin-right ${
            showTooltip && !isOpen
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 translate-x-4 scale-95 pointer-events-none'
          }`}
          style={{ fontFamily: 'Barlow, sans-serif' }}
        >
          <span className="flex h-2 w-2 relative mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1e5fa3]"></span>
          </span>
          Enquiry Us
        </div>

        {/* Floating Round Action Button */}
        <button
          onClick={() => setIsOpen(true)}
          className={`w-[56px] h-[56px] rounded-full flex items-center justify-center text-white shadow-2xl relative transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none ${
            isShaking ? 'enquiry-shake' : ''
          } ${!isOpen ? 'pulse-glowing' : ''}`}
          style={{ background: '#1e5fa3' }}
          aria-label="Open Enquiry Form"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 transition-all duration-300 animate-fadeIn">
          
          {/* Modal Container */}
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden relative border border-gray-100 flex flex-col transform transition-all scale-100 font-sans">
            
            {/* Modal Header */}
            <div className="bg-[#0d1b2a] text-white p-5 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold tracking-wide" style={{ fontFamily: 'Barlow, sans-serif' }}>Quick Enquiry</h3>
                <p className="text-xs text-gray-300 mt-1">Submit your details and we will contact you shortly.</p>
              </div>
              <button 
                onClick={() => { setIsOpen(false); setSubmitStatus('idle'); }}
                className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
                aria-label="Close modal"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {submitStatus === 'success' ? (
                <div className="py-8 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 text-green-600">
                    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Barlow, sans-serif' }}>Enquiry Submitted!</h4>
                  <p className="text-sm text-gray-600 mt-2">Thank you for reaching out. We have received your query and will reply shortly.</p>

                  <button
                    onClick={() => { setIsOpen(false); setSubmitStatus('idle'); }}
                    className="mt-6 px-6 py-2 bg-[#1e5fa3] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors duration-200 hover:bg-[#154f8a]"
                    style={{ fontFamily: 'Barlow, sans-serif' }}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                      </div>
                      <input 
                        type="text" 
                        name="name" 
                        placeholder="Your full name"
                        value={formData.name} 
                        onChange={handleChange}
                        className={`w-full pl-9 pr-3 py-2.5 border rounded outline-none focus:border-[#1e5fa3] focus:ring-1 focus:ring-[#1e5fa3] transition-colors text-sm ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-[11px] mt-0.5">{errors.name}</p>}
                  </div>

                  {/* Mobile Input */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Mobile</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      </div>
                      <input 
                        type="tel" 
                        name="mobile" 
                        placeholder="e.g. +91 9999999999"
                        value={formData.mobile} 
                        onChange={handleChange}
                        className={`w-full pl-9 pr-3 py-2.5 border rounded outline-none focus:border-[#1e5fa3] focus:ring-1 focus:ring-[#1e5fa3] transition-colors text-sm ${errors.mobile ? 'border-red-500' : 'border-gray-300'}`}
                      />
                    </div>
                    {errors.mobile && <p className="text-red-500 text-[11px] mt-0.5">{errors.mobile}</p>}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </div>
                      <input 
                        type="email" 
                        name="email" 
                        placeholder="e.g. name@example.com"
                        value={formData.email} 
                        onChange={handleChange}
                        className={`w-full pl-9 pr-3 py-2.5 border rounded outline-none focus:border-[#1e5fa3] focus:ring-1 focus:ring-[#1e5fa3] transition-colors text-sm ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-[11px] mt-0.5">{errors.email}</p>}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Message</label>
                    <div className="relative">
                      <textarea 
                        name="message" 
                        placeholder="Tell us what you are looking for..."
                        rows="3"
                        value={formData.message} 
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded outline-none focus:border-[#1e5fa3] focus:ring-1 focus:ring-[#1e5fa3] transition-colors text-sm resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                      ></textarea>
                    </div>
                    {errors.message && <p className="text-red-500 text-[11px] mt-0.5">{errors.message}</p>}
                  </div>

                  {/* Submission Error Info */}
                  {submitStatus === 'error' && (
                    <p className="text-red-500 text-xs font-semibold">
                      Failed to send enquiry. Please try again or contact us directly.
                    </p>
                  )}

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={submitStatus === 'loading'}
                    className="w-full py-3 bg-[#1e5fa3] text-white uppercase tracking-wider font-semibold rounded text-sm transition-colors duration-250 flex items-center justify-center min-h-[44px] hover:bg-[#154f8a]"
                    style={{ fontFamily: 'Barlow, sans-serif' }}
                  >
                    {submitStatus === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : 'Submit Enquiry'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
}
