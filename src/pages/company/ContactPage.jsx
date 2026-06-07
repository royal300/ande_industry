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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', company: '', email: '', phone: '', country: 'Select Country', subject: 'General Inquiry', message: '' });
    }, 1500);
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
            <div className="w-full lg:w-[45%] flex flex-col justify-between">
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-[40px] h-[40px] rounded bg-[#e8f0fb] flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" fill="none" stroke="#1e5fa3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <strong className="block text-[#1a1a2a] text-[15px] mb-1">Headquarters Address</strong>
                    <span className="text-[#666] text-[14px]">No.55 Industrial South Road, High-tech Zone,<br/>Jinan, Shandong Province, China</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-[40px] h-[40px] rounded bg-[#e8f0fb] flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" fill="none" stroke="#1e5fa3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <strong className="block text-[#1a1a2a] text-[15px] mb-1">Phone</strong>
                    <span className="text-[#666] text-[14px]">+86-0531-83323931 (Sales)<br/>+86-400-800-1234 (24/7 Support)</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-[40px] h-[40px] rounded bg-[#e8f0fb] flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" fill="none" stroke="#1e5fa3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>
                  </div>
                  <div>
                    <strong className="block text-[#1a1a2a] text-[15px] mb-1">Email</strong>
                    <span className="text-[#666] text-[14px]">info@andeindustries.com<br/>service@andeindustries.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-[40px] h-[40px] rounded bg-[#e8f0fb] flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" fill="none" stroke="#1e5fa3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                  </div>
                  <div>
                    <strong className="block text-[#1a1a2a] text-[15px] mb-1">Business Hours</strong>
                    <span className="text-[#666] text-[14px]">Monday - Friday: 8:30 AM - 5:30 PM (CST)</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-[380px] bg-cover bg-center rounded-[2px] flex flex-col items-center justify-center mb-6 relative overflow-hidden" style={{ backgroundImage: "url('/images/contact_side_1780751584165.webp')" }}>
                 <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 items-center">
                 {['LinkedIn', 'Twitter', 'Facebook', 'YouTube', 'WeChat'].map(s => (
                   <div key={s} className="w-[36px] h-[36px] bg-[#f5f7fa] border border-[#e8e8e8] rounded flex items-center justify-center cursor-pointer transition-colors hover:bg-[#1e5fa3] hover:text-white text-[#666]">
                     <span className="text-[12px] font-bold">{s[0]}</span>
                   </div>
                 ))}
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
