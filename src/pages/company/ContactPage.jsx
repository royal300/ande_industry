import { useState } from 'react';
import PageHero from '../../components/common/PageHero';
import Spinner from '../../components/common/Spinner';

const countries = [
  'Select Country', 'Australia', 'Brazil', 'Canada', 'China', 'France', 'Germany', 'India', 'Indonesia', 'Japan', 'Malaysia', 'Mexico', 'Russia', 'Saudi Arabia', 'South Africa', 'South Korea', 'Turkey', 'United Arab Emirates', 'United Kingdom', 'United States', 'Vietnam'
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', country: 'Select Country', subject: 'General Inquiry', message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required.';
    if (!formData.company.trim()) newErrors.company = 'Company Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email Address is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email Address is invalid.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required.';
    if (formData.country === 'Select Country') newErrors.country = 'Please select a country.';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');
    
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          mobile: formData.phone,
          country: formData.country,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', company: '', email: '', phone: '', country: 'Select Country', subject: 'General Inquiry', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team"
        breadcrumb="Home / Company / Contact"
      />

      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Col: Contact Form (55%) */}
            <div className="w-full lg:w-[55%]">
              <h2 className="font-bold mb-8 text-[#1a1a2a]" style={{ fontFamily: 'Barlow, sans-serif', fontSize: '28px' }}>
                Send Us a Message
              </h2>
              
              {status === 'success' ? (
                <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-[2px] p-10 flex flex-col items-center justify-center text-center h-[500px]">
                  <div className="w-20 h-20 rounded-full bg-[#dcfce7] flex items-center justify-center mb-6 animate-bounce">
                    <svg width="40" height="40" fill="none" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="text-[#166534] font-bold text-[24px] mb-2" style={{ fontFamily: 'Barlow, sans-serif' }}>Thank you!</h3>
                  <p className="text-[#15803d] text-[16px]">We'll be in touch within 24 hours.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-[#1e5fa3] font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-4">
                    <input 
                      type="text" name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-[2px] outline-none focus:outline-[#1e5fa3] focus:outline-[2px] transition-all bg-white ${errors.name ? 'border-red-500' : 'border-[#ccc]'}`}
                    />
                    {errors.name && <p className="text-red-500 text-[12px] mt-1">{errors.name}</p>}
                  </div>

                  <div className="mb-4">
                    <input 
                      type="text" name="company" placeholder="Company Name *" value={formData.company} onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-[2px] outline-none focus:outline-[#1e5fa3] focus:outline-[2px] transition-all bg-white ${errors.company ? 'border-red-500' : 'border-[#ccc]'}`}
                    />
                    {errors.company && <p className="text-red-500 text-[12px] mt-1">{errors.company}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <input 
                        type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-[2px] outline-none focus:outline-[#1e5fa3] focus:outline-[2px] transition-all bg-white ${errors.email ? 'border-red-500' : 'border-[#ccc]'}`}
                      />
                      {errors.email && <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <input 
                        type="tel" name="phone" placeholder="Phone Number *" value={formData.phone} onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-[2px] outline-none focus:outline-[#1e5fa3] focus:outline-[2px] transition-all bg-white ${errors.phone ? 'border-red-500' : 'border-[#ccc]'}`}
                      />
                      {errors.phone && <p className="text-red-500 text-[12px] mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <select 
                        name="country" value={formData.country} onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-[2px] outline-none focus:outline-[#1e5fa3] focus:outline-[2px] transition-all bg-white text-[#333] ${errors.country ? 'border-red-500' : 'border-[#ccc]'}`}
                      >
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                      {errors.country && <p className="text-red-500 text-[12px] mt-1">{errors.country}</p>}
                    </div>
                    <div>
                      <select 
                        name="subject" value={formData.subject} onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#ccc] rounded-[2px] outline-none focus:outline-[#1e5fa3] focus:outline-[2px] transition-all bg-white text-[#333]"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Product Info">Product Info</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Partnership">Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <textarea 
                      name="message" placeholder="Your Message *" rows="5" value={formData.message} onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-[2px] outline-none focus:outline-[#1e5fa3] focus:outline-[2px] transition-all bg-white resize-none ${errors.message ? 'border-red-500' : 'border-[#ccc]'}`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-[12px] mt-1">{errors.message}</p>}
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-xs font-semibold mb-4">
                      Failed to send message. Please try again or contact us directly.
                    </p>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full py-4 text-white uppercase tracking-wider font-semibold rounded-[2px] transition-colors duration-250 flex items-center justify-center min-h-[56px]"
                    style={{ background: status === 'loading' ? '#154f8a' : '#1e5fa3' }}
                    onMouseEnter={(e) => status !== 'loading' && (e.currentTarget.style.background = '#154f8a')}
                    onMouseLeave={(e) => status !== 'loading' && (e.currentTarget.style.background = '#1e5fa3')}
                  >
                    {status === 'loading' ? <Spinner size={24} color="#ffffff" /> : 'Submit Inquiry'}
                  </button>
                </form>
              )}
            </div>

            {/* Right Col: Contact Info (45%) */}
            <div className="w-full lg:w-[45%] space-y-8">
              
              {/* Card 1: Ande Industries Pvt. Ltd. */}
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#1e5fa3] mb-4 flex items-center gap-2" style={{ fontFamily: 'Barlow, sans-serif' }}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  Ande Industries Pvt. Ltd.
                </h3>
                <div className="text-gray-600 text-sm space-y-1 leading-relaxed font-sans">
                  <p className="font-semibold text-gray-800">Kolkata Office</p>
                  <p>Merlin Infinite, DN 51, Unit No.1303,</p>
                  <p>13th Floor, Sector V, Salt Lake,</p>
                  <p>Kolkata 700091, West Bengal, India</p>
                </div>
              </div>

              {/* Card 2: Mother Company */}
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#1e5fa3] mb-4 flex items-center gap-2" style={{ fontFamily: 'Barlow, sans-serif' }}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                  Mother Company
                </h3>
                <div className="text-gray-600 text-sm space-y-4 leading-relaxed font-sans">
                  <div>
                    <p className="font-semibold text-gray-800">Ande Metallurgical Machinery Co. Ltd. (Head Office)</p>
                    <p>Address: Future Square, No. 55 Industrial South Road, High-tech Zone, Jinan, China</p>
                    <p>Tel: +86-531-8894 8601</p>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="font-semibold text-gray-800">Works</p>
                    <p>Address: Chengdong Industrial Park, Jingshi East Road, Zhangqiu, Jinan, China</p>
                    <p>Tel: +86-531-8332 3930</p>
                  </div>
                  <div className="pt-3 border-t border-gray-200 space-y-1">
                    <p>
                      <strong>Website:</strong> <a href="http://www.andeindustries.com" target="_blank" rel="noreferrer" className="text-[#1e5fa3] hover:underline">www.andeindustries.com</a>
                    </p>
                    <p>
                      <strong>Email:</strong> <a href="mailto:huangfan@andeindustries.com" className="text-[#1e5fa3] hover:underline">huangfan@andeindustries.com</a> / <a href="mailto:sales@andeindustries.com" className="text-[#1e5fa3] hover:underline">sales@andeindustries.com</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Key Personnel Contacts */}
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#1e5fa3] mb-4 flex items-center gap-2" style={{ fontFamily: 'Barlow, sans-serif' }}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  Direct Contacts
                </h3>
                <div className="text-gray-600 text-sm space-y-4 leading-relaxed font-sans">
                  <div>
                    <p className="font-semibold text-gray-800">Huang Fan</p>
                    <p>Mobile: 914771157</p>
                    <p>Email: <a href="mailto:huangfan@andeindustries.com" className="text-[#1e5fa3] hover:underline">huangfan@andeindustries.com</a></p>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="font-semibold text-gray-800">Ashok Kumar Sengupta</p>
                    <p>Mobile: 9937294464 / 8319158089</p>
                    <p>Email: <a href="mailto:ashok@andeitpl.com" className="text-[#1e5fa3] hover:underline">ashok@andeitpl.com</a></p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
