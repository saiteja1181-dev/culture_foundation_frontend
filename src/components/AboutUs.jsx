// components/AboutUs.jsx
import React from 'react';
import { 
  FaBullseye, 
  FaEye, 
  FaHandsHelping, 
  FaUsers, 
  FaAward, 
  FaHeart,
  FaRegBuilding,
  FaRegCalendarAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaBook, 
  FaHeartbeat, 
  FaBriefcase, 
  FaFemale, 
  FaWheelchair, 
  FaUmbrella, 
  FaSeedling, 
  FaFutbol, 
  FaTree,
  FaTrophy,
  FaCheckCircle
} from 'react-icons/fa';

// Blue and Orange color scheme matching your logo
const colors = {
  primary: '#0066B3',      // Deep Blue - main brand color
  secondary: '#FF6B35',     // Orange - accent color
  dark: '#1E2A3A',         // Dark Blue/Navy - for backgrounds
  light: '#FFFFFF',         // White
  gray: '#F5F7FA'          // Light gray for backgrounds
};

const AboutUs = () => {
  // Organization details from your PDF
  const organizationDetails = {
    name: "CULTURE FOUNDATION",
    acronym: "CF",
    registrationNo: "309/2019",
    registrationDate: "13.05.2019",
    registeredAddress: "D. NO:15-3-42/6/4, DARA VEEDHI, GANGAVARAM, PEDAGANTYADA MANDAL, VISAKHAPATNAM DISTRICT, ANDHRAPRADESH STATE, INDIA-530044",
    communicationAddress: "GODDIVANIPALEM, NEAR MPP SCHOOL, PEDAGANTYADA MANDAL, VISAKHAPATNAM DISTRICT, ANDHRAPRADESH STATE, INDIA-530044",
    phone: "+91 9989590068",
    email: "Culturefoundation369@gmail.com",
    website: "http://www.culturefoundation.org/",
    founder: "PERLA APPARAO",
    founderDesignation: "FOUNDER / EXECUTIVE DIRECTOR"
  };

  // Awards from your PDF
  const awards = [
    { title: "UGADHI PURASKAR AWARD", organizer: "VISAKHA SAMACHARAM (PRESS)", year: "2020" },
    { title: "STAR OF THE GAME", organizer: "MAGIC BUS INDIA FOUNDATION", year: "2021" },
    { title: "UGADHI PURASKAR AWARD", organizer: "TRR CHARITABLE TRUST", year: "2022" },
    { title: "TELUGU VELUGU UGADI MAHANANDHI JATHIYA PURASKAR", organizer: "TELUGU VELUGU SAHITHI VEDIKA", year: "2025" }
  ];

  // Programs List
  const programs = [
    "High and Quality Education",
    "Health Awareness",
    "Employability Skills",
    "Women Empowerment",
    "Person With Disability",
    "Disaster Preparedness",
    "Agriculture Enhancement",
    "Games & Sports",
    "Fisher Flock / Tribal"
  ];

  const values = [
    {
      icon: FaHandsHelping,
      title: 'Inclusion',
      description: 'We believe in creating opportunities for everyone, regardless of their abilities or background.'
    },
    {
      icon: FaUsers,
      title: 'Community',
      description: 'Building strong communities through collaborative efforts and shared growth.'
    },
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'Committed to delivering high-quality skill development programs with measurable impact.'
    },
    {
      icon: FaHeart,
      title: 'Compassion',
      description: 'Approaching our work with empathy and understanding for every individual we serve.'
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <span className="text-4xl md:text-5xl font-bold" style={{ color: colors.primary }}>
              CULTURE
            </span>
            <span className="text-2xl md:text-3xl text-neutral-600">FOUNDATION</span>
          </div>
          <p className="text-neutral-600 max-w-3xl mx-auto text-lg">
            A non-profit Voluntary organization registered under AP Societies Reg. Act 2001
          </p>
        </div>

        {/* Organization Info Cards */}
        <div className="flex justify-center gap-4 mb-12">
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3">
            <FaRegBuilding className="text-2xl" style={{ color: colors.primary }} />
            <div>
              <p className="text-xs text-gray-500">Registration No.</p>
              <p className="font-semibold">{organizationDetails.registrationNo}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3">
            <FaRegCalendarAlt className="text-2xl" style={{ color: colors.secondary }} />
            <div>
              <p className="text-xs text-gray-500">Established</p>
              <p className="font-semibold">{organizationDetails.registrationDate}</p>
            </div>
          </div>
        </div>

        {/* Mission & Vision - First Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Mission Card */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg" style={{ backgroundColor: `${colors.primary}15` }}>
                <FaBullseye className="text-2xl" style={{ color: colors.primary }} />
              </div>
              <h3 className="text-2xl font-bold" style={{ color: colors.dark }}>Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To provide accessible skill development programs that create sustainable livelihood 
              opportunities for differently-abled individuals and women from underprivileged communities. 
              We strive to be a catalyst between BPL Communities and public/private entities, identifying 
              community needs and contributing solutions for the needy.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg" style={{ backgroundColor: `${colors.secondary}15` }}>
                <FaEye className="text-2xl" style={{ color: colors.secondary }} />
              </div>
              <h3 className="text-2xl font-bold" style={{ color: colors.dark }}>Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To create an inclusive society where every individual, regardless of their abilities or gender, 
              has equal opportunities for growth, employment, and dignified living. We envision empowered 
              communities through education, health awareness, employability, and sustainable development.
            </p>
          </div>
        </div>

        {/* Programs Section - Second Row */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: colors.dark }}>Our Contributions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {programs.map((program, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="text-sm" style={{ color: colors.primary }} />
                  <span className="text-gray-700">{program}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards Section - Third Row */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6" style={{ color: colors.dark }}>Recognition & Awards</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-5 border-l-4" style={{ borderLeftColor: colors.primary }}>
                <div className="flex items-center gap-2 mb-2">
                  <FaTrophy style={{ color: colors.secondary }} />
                  <span className="text-sm font-semibold" style={{ color: colors.secondary }}>{award.year}</span>
                </div>
                <h4 className="font-bold text-sm mb-1">{award.title}</h4>
                <p className="text-xs text-gray-500">{award.organizer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6" style={{ color: colors.dark }}>Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="text-3xl mb-4" style={{ color: colors.primary }}>
                    <Icon />
                  </div>
                  <h4 className="text-xl font-bold mb-3" style={{ color: colors.dark }}>
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6" style={{ color: colors.dark }}>Contact Information</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-3" style={{ color: colors.primary }}>Address</h4>
              <p className="text-sm text-gray-600">{organizationDetails.communicationAddress}</p>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-3">
                <FaPhone style={{ color: colors.secondary }} />
                <p className="text-sm text-gray-600">{organizationDetails.phone}</p>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <FaEnvelope style={{ color: colors.secondary }} />
                <p className="text-sm text-gray-600">{organizationDetails.email}</p>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <FaGlobe style={{ color: colors.secondary }} />
                <p className="text-sm text-gray-600">{organizationDetails.website}</p>
              </div>
              <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
                <p className="text-sm font-semibold" style={{ color: colors.primary }}>Founder & Executive Director</p>
                <p className="text-lg font-bold" style={{ color: colors.dark }}>{organizationDetails.founder}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;