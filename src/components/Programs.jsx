// components/Programs.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaBook, 
  FaHeartbeat, 
  FaBriefcase, 
  FaFemale, 
  FaWheelchair, 
  FaUmbrella, 
  FaSeedling, 
  FaFutbol, 
  FaTree,
  FaClock,
  FaUsers,
  FaGraduationCap,
  FaHandsHelping,
  FaCalendarAlt,
  FaMapMarkerAlt,
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

// Static program data from your PDF
const programsData = [
  {
    id: 1,
    title: "High and Quality Education",
    category: "Education",
    icon: FaBook,
    duration: "Ongoing",
    description: "Empowering through knowledge and quality education for underprivileged communities.",
    targetGroup: "School Children",
    startDate: "2019",
    keyFeatures: [
      "Free education support",
      "Learning materials provided",
      "After-school tutoring",
      "Scholarship assistance"
    ]
  },
  {
    id: 2,
    title: "Health Awareness",
    category: "Health",
    icon: FaHeartbeat,
    duration: "Ongoing",
    description: "Conducting awareness classes and rallies on health, education, and employability skills.",
    targetGroup: "Children & Underprivileged Communities",
    startDate: "2019",
    keyFeatures: [
      "Health awareness camps",
      "Hygiene education",
      "Medical checkups",
      "Nutrition guidance"
    ]
  },
  {
    id: 3,
    title: "Employability Skills",
    category: "Skill Development",
    icon: FaBriefcase,
    duration: "45 Days",
    description: "Free computer coaching, spoken English, and retail sector training across five centers.",
    targetGroup: "Youth, Disabled & Women",
    startDate: "2022",
    keyFeatures: [
      "Computer coaching (MS Office)",
      "Spoken English classes",
      "Retail sector training",
      "Placement assistance"
    ]
  },
  {
    id: 4,
    title: "Women Empowerment",
    category: "Women",
    icon: FaFemale,
    duration: "Ongoing",
    description: "Special programs for women's self-reliance, financial independence, and skill development.",
    targetGroup: "Women & Adolescent Girls",
    startDate: "2019",
    keyFeatures: [
      "Self-help groups",
      "Financial literacy",
      "Vocational training",
      "Leadership development"
    ]
  },
  {
    id: 5,
    title: "Person With Disability",
    category: "Disabled",
    icon: FaWheelchair,
    duration: "45 Days",
    description: "Free computer training for persons with disabilities covering MS Office and digital skills.",
    targetGroup: "Persons with Disabilities",
    startDate: "2022",
    keyFeatures: [
      "Accessible training centers",
      "MS Office training",
      "Digital skills",
      "Job placement support"
    ]
  },
  {
    id: 6,
    title: "Disaster Preparedness",
    category: "Disaster",
    icon: FaUmbrella,
    duration: "Ongoing",
    description: "Pandemic awareness, grocery supply, and disaster response training for communities.",
    targetGroup: "Needy & Poor Families",
    startDate: "2021",
    keyFeatures: [
      "Emergency response training",
      "Relief material distribution",
      "Awareness campaigns",
      "Community preparedness"
    ]
  },
  {
    id: 7,
    title: "Agriculture Enhancement",
    category: "Agriculture",
    icon: FaSeedling,
    duration: "Ongoing",
    description: "Get awareness of Non Pesticide Management and sustainable farming practices.",
    targetGroup: "Farmers",
    startDate: "2020",
    keyFeatures: [
      "Non-pesticide management",
      "Sustainable farming",
      "Soil health workshops",
      "Modern techniques"
    ]
  },
  {
    id: 8,
    title: "Games & Sports",
    category: "Sports",
    icon: FaFutbol,
    duration: "Annual Events",
    description: "Tournaments on International Women's Day, Yoga Day, Sports Day, and Children's Day.",
    targetGroup: "Under Aged Boys & Girls",
    startDate: "2021",
    keyFeatures: [
      "Annual sports events",
      "Yoga sessions",
      "Tournament organization",
      "Sports equipment"
    ]
  },
  {
    id: 9,
    title: "Fisher Flock / Tribal",
    category: "Tribal",
    icon: FaTree,
    duration: "Special Activities",
    description: "Special activities for fisher flock and tribal communities for sustainable development.",
    targetGroup: "Tribal Communities",
    startDate: "2019",
    keyFeatures: [
      "Community development",
      "Livelihood support",
      "Cultural preservation",
      "Resource access"
    ]
  }
];

const Programs = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setPrograms(programsData);
      setLoading(false);
    }, 800);
  }, []);

  const categories = ["All", ...new Set(programsData.map(p => p.category))];

  const filteredPrograms = selectedCategory === "All" 
    ? programs 
    : programs.filter(p => p.category === selectedCategory);

  const getCategoryColor = (category) => {
    const colors = {
      'Education': { bg: '#0066B310', text: '#0066B3', border: '#0066B330' },
      'Health': { bg: '#FF6B3510', text: '#FF6B35', border: '#FF6B3530' },
      'Skill Development': { bg: '#1E2A3A10', text: '#1E2A3A', border: '#1E2A3A30' },
      'Women': { bg: '#E83E8C10', text: '#E83E8C', border: '#E83E8C30' },
      'Disabled': { bg: '#17A2B810', text: '#17A2B8', border: '#17A2B830' },
      'Disaster': { bg: '#DC354510', text: '#DC3545', border: '#DC354530' },
      'Agriculture': { bg: '#28A74510', text: '#28A745', border: '#28A74530' },
      'Sports': { bg: '#FD7E1410', text: '#FD7E14', border: '#FD7E1430' },
      'Tribal': { bg: '#6F42C110', text: '#6F42C1', border: '#6F42C130' }
    };
    return colors[category] || { bg: '#F3F4F6', text: '#4B5563', border: '#E5E7EB' };
  };

  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.primary }}>
            Our Programs
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We offer specialized programs designed to empower communities with industry-relevant 
            skills for sustainable employment and dignified living.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'text-white shadow-md'
                  : 'text-gray-600 bg-white hover:shadow-md'
              }`}
              style={{
                backgroundColor: selectedCategory === category ? colors.primary : 'white',
                border: `1px solid ${selectedCategory === category ? colors.primary : '#E5E7EB'}`
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div 
              className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-t-4 border-gray-200"
              style={{ borderTopColor: colors.primary }}
            />
          </div>
        ) : (
          <div className="space-y-6">
            {filteredPrograms.map((program, index) => {
              const Icon = program.icon;
              const categoryColor = getCategoryColor(program.category);
              
              return (
                <div 
                  key={program.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                  style={{
                    borderLeft: `4px solid ${categoryColor.text}`
                  }}
                >
                  <div className="p-6 md:p-8">
                    {/* Header with Icon and Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                        style={{ 
                          backgroundColor: categoryColor.bg,
                          color: categoryColor.text
                        }}
                      >
                        <Icon />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h2 className="text-2xl font-bold" style={{ color: colors.dark }}>
                            {program.title}
                          </h2>
                          <span 
                            className="px-3 py-1 rounded-full text-xs font-semibold"
                            style={{ 
                              backgroundColor: categoryColor.bg,
                              color: categoryColor.text,
                              border: `1px solid ${categoryColor.border}`
                            }}
                          >
                            {program.category}
                          </span>
                        </div>
                        <p className="text-gray-600">
                          {program.description}
                        </p>
                      </div>
                    </div>

                    {/* Program Details Grid */}
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <FaCalendarAlt className="flex-shrink-0" style={{ color: colors.primary }} />
                        <span className="text-gray-600">Since: <span className="font-medium text-gray-800">{program.startDate}</span></span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <FaClock className="flex-shrink-0" style={{ color: colors.secondary }} />
                        <span className="text-gray-600">Duration: <span className="font-medium text-gray-800">{program.duration}</span></span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <FaUsers className="flex-shrink-0" style={{ color: colors.primary }} />
                        <span className="text-gray-600">Target: <span className="font-medium text-gray-800">{program.targetGroup}</span></span>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h3 className="text-sm font-semibold mb-3" style={{ color: colors.dark }}>
                        Key Features:
                      </h3>
                      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                        {program.keyFeatures.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <FaCheckCircle className="flex-shrink-0 text-xs" style={{ color: colors.secondary }} />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-400">Program ID: CF-{program.id}</span>
                      <div className="flex items-center gap-1">
                        <FaHandsHelping className="text-xs" style={{ color: colors.primary }} />
                        <span className="text-xs font-medium" style={{ color: colors.primary }}>Active Program</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Mission Statement */}
        
      </div>
    </section>
  );
};

export default Programs;