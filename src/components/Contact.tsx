import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin, Twitter } from 'lucide-react';
import 'tailwindcss/tailwind.css';
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setFormStatus('sending');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      
      // Reset success status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    // {
    //   icon: Mail,
    //   label: 'Email',
    //   value: 'alex.johnson@email.com',
    //   link: 'mailto:alex.johnson@email.com'
    // },
    // {
    //   icon: Phone,
    //   label: 'Phone',
    //   value: '+1 (555) 123-4567',
    //   link: 'tel:+15551234567'
    // },
    // {
    //   icon: MapPin,
    //   label: 'Location',
    //   value: 'San Francisco, CA',
    //   link: '#'
    // }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', link: '#' },
    { icon: Linkedin, label: 'LinkedIn', link: '#' },
    { icon: Twitter, label: 'Twitter', link: '#' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your next project or explore opportunities to work together. 
            I'm always excited to take on new challenges and create amazing digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ${
                      errors.name ? 'border-red-500' : 'border-slate-600'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ${
                      errors.email ? 'border-red-500' : 'border-slate-600'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ${
                    errors.subject ? 'border-red-500' : 'border-slate-600'
                  }`}
                  placeholder="Project discussion, collaboration, etc."
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-400 flex items-center">
                    <AlertCircle size={14} className="mr-1" />
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none ${
                    errors.message ? 'border-red-500' : 'border-slate-600'
                  }`}
                  placeholder="Tell me about your project or what you'd like to discuss..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400 flex items-center">
                    <AlertCircle size={14} className="mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                  formStatus === 'sending'
                    ? 'bg-gray-600 cursor-not-allowed'
                    : formStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : formStatus === 'error'
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-2xl hover:shadow-purple-500/25 cursor-pointer transform hover:scale-105'
                }`}
              >
                {formStatus === 'sending' && (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                )}
                {formStatus === 'success' && (
                  <>
                    <CheckCircle size={20} />
                    <span>Message Sent!</span>
                  </>
                )}
                {formStatus === 'error' && (
                  <>
                    <AlertCircle size={20} />
                    <span>Failed to Send</span>
                  </>
                )}
                {formStatus === 'idle' && (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.link}
                      className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.link}
                      className="p-4 bg-slate-700/30 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 cursor-pointer transform hover:scale-110 group"
                    >
                      <Icon size={24} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing</h3>
              <p className="text-gray-300 leading-relaxed">

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;