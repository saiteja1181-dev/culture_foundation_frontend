// components/Footer.jsx
import React from 'react';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
  FaGlobe,
  FaRegBuilding
} from 'react-icons/fa';

const Footer = () => {
  // Updated with original details from PDF
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Programs', href: '#programs' },
    { name: 'Events', href: '#events' },
    
  ];

  // Updated contact info from PDF
  const contactInfo = [
    { icon: FaMapMarkerAlt, text: 'D. NO:15-3-42/6/4, DARA VEEDHI, GANGAVARAM, PEDAGANTYADA MANDAL, VISAKHAPATNAM - 530044' },
    { icon: FaPhone, text: '+91 9989590068' },
    { icon: FaEnvelope, text: 'Culturefoundation369@gmail.com' },
    { icon: FaGlobe, text: 'www.culturefoundation.org' },
    { icon: FaRegBuilding, text: 'Regd. No: 309/2019 dated 13.05.2019' },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white w-full">
      {/* Main Container - Full width with no horizontal padding on parent */}
      <div className="w-full">
        
        {/* Top Section with Colored Background - Full Width */}
        <div className="w-full">
          {/* Content Container - Controls the actual content width with auto margins */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            
            {/* Main Footer Grid - Adjusted for full width usage */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Logo & Description - Spans 4 columns */}
              <div className="lg:col-span-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-white text-primary-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img src='https://i.ibb.co/v64kQWNf/Whats-App-Image-2026-01-23-at-9-34-48-AM.jpg'/>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold leading-tight">
                      <span className="text-white">CULTURE</span>
                      <span className="text-primary-300"> FOUNDATION</span>
                    </h2>
                    <p className="text-sm text-gray-300"></p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed max-w-md">
                  Supporting communities through service initiatives in health, education, environment, and livelihood development since 2019.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="w-9 h-9 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                        aria-label={social.label}
                      >
                        <Icon className="text-sm" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Links - Spans 3 columns */}
              <div className="lg:col-span-3 lg:pl-8">
                <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-primary-300 transition-colors flex items-center group text-sm"
                      >
                        <span className="w-1 h-1 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info - Spans 5 columns */}
              <div className="lg:col-span-5">
                <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
                <ul className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <li key={index} className="flex items-start">
                        <Icon className="text-primary-300 mr-3 mt-1 flex-shrink-0 text-sm" />
                        <span className="text-gray-300 text-sm leading-relaxed">{info.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Full Width with different background */}
        <div className="w-full bg-gray-900 bg-opacity-50">
          {/* Content Container */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            
            {/* Divider */}
            <div className="border-t border-gray-700 mb-8"></div>
            
            {/* Bottom section with proper justification - USING GRID FOR FULL WIDTH CONTROL */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              
              {/* Copyright - Left Column */}
              <div className="lg:text-left">
                <p className="text-gray-400 text-sm">
                  &copy; {new Date().getFullYear()} Culture Foundation. All rights reserved.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Registered under AP Societies Registration Act 2001 
                </p>
              </div>
              
              {/* Links - Middle Column (Centered) */}
              <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
                <button className="text-gray-400 hover:text-white transition-colors text-sm whitespace-nowrap">
                  Privacy Policy
                </button>
                <span className="text-gray-600 hidden lg:inline">•</span>
                <button className="text-gray-400 hover:text-white transition-colors text-sm whitespace-nowrap">
                  Terms of Service
                </button>
                <span className="text-gray-600 hidden lg:inline">•</span>
                <button className="text-gray-400 hover:text-white transition-colors text-sm whitespace-nowrap">
                  FAQ
                </button>
              </div>

              {/* Trust Badges - Right Column */}
              <div className="flex flex-wrap justify-start lg:justify-end items-center gap-3">
                <div className="bg-gray-800 px-3 py-1.5 rounded-lg">
                  <span className="text-xs text-gray-300 whitespace-nowrap">12A & 80G Certified</span>
                </div>
                <div className="bg-gray-800 px-3 py-1.5 rounded-lg">
                  <span className="text-xs text-gray-300 whitespace-nowrap">NGO Darpan: AP/2023/0371123</span>
                </div>
                <div className="bg-gray-800 px-3 py-1.5 rounded-lg">
                  <span className="text-xs text-gray-300 whitespace-nowrap">CSR: CSR00031331</span>
                </div>
                <div className="bg-gray-800 px-3 py-1.5 rounded-lg">
                  <span className="text-xs text-gray-300 whitespace-nowrap">FCRA: Under Process</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;