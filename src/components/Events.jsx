// components/Events.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaChevronLeft, 
  FaChevronRight,
  FaHeart,
  FaSyringe,
  FaShoePrints,
  FaTree,
  FaBook,
  FaLaptop
} from 'react-icons/fa';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  // Sample event data
  const sampleEvents = [
    {
      _id: '1',
      title: 'School Shoe Distribution Program',
      date: '10 February 2026',
      location: 'Pedagantyada, Visakhapatnam',
      description: 'Providing shoes to underprivileged school children to support their education and dignity.',
      image: 'https://i.ibb.co/pvGwKrXW/Shoes-Distribution-for-School-Childrens.jpg',
      icon: FaSyringe,
      category: 'Distribution'
    },
    {
      _id: '2',
      title: 'Plantation Program with Hon’ble MLA',
      date: '5 February 2026',
      location: 'Gangavaram, Visakhapatnam',
      description: 'A tree plantation drive conducted in the presence of the Hon’ble MLA to promote environmental awareness and sustainable development in the community.',
      image: 'https://i.ibb.co/MxRCGYn7/Plantation-Programme-with-MLA.jpg',
      icon: FaShoePrints,
      category: 'Awareness'
    },
    {
      _id: '3',
      title: 'Food Distribution for Daily Labourers',
      date: '28 January 2026',
      location: 'Gajuwaka, Visakhapatnam',
      description: 'Providing food packets to daily wage workers to support them during difficult times and ensure no one goes hungry. This initiative reflects our commitment to community care and social responsibility.',
      image: 'https://i.ibb.co/qYVJX4xB/Food-Packts-Distribution-for-Dailly-Labours.jpg',
      icon: FaSyringe,
      category: 'Distribution'
    },
    {
      _id: '4',
      title: 'National Sports Day Celebration Program',
      date: '15 February 2026',
      location: 'Pedagantyada, Visakhapatnam',
      description: 'On the occasion of National Sports Day, our organization conducted a sports tournament to promote physical fitness, teamwork, and community participation. Prizes were distributed to the winners to encourage sportsmanship and motivate participants to stay active and healthy.',
      image: 'https://i.ibb.co/XkJX9w9j/National-Sports-Day-Prize-Distribution-Programme.jpg',
      icon: FaTree,
      category: 'Sports'
    },
    {
      _id: '5',
      title: 'COVID-19 Vaccination Camp',
      date: '20 February 2026',
      location: 'Gangavaram, Visakhapatnam',
      description: 'During the COVID-19 pandemic, our organization conducted a vaccination camp to support public health and safety. The initiative helped community members access vaccination services easily and contributed to preventing the spread of the virus.',
      image: 'https://i.ibb.co/XxRsnDpD/Vaceinated-Programme.jpg',
      icon: FaLaptop,
      category: 'Vaccination'
    },
    {
      _id: '6',
      title: 'PWD Skilling Program Inauguration',
      date: '20 February 2026',
      location: 'Gangavaram, Visakhapatnam',
      description: 'The skilling program for Persons with Disabilities (PWD) was inaugurated to promote empowerment, independence, and employment opportunities. This initiative aims to help participants develop practical skills and improve their livelihood opportunities.',
      image: 'https://i.ibb.co/PvQP8yNR/PWDSkilling-Programme-Inaguration.jpg',
      icon: FaLaptop,
      category: 'Skill Programm'
    },
    {
      _id: '7',
      title: 'International Yoga Day Celebration',
      date: '20 February 2026',
      location: 'Gangavaram, Visakhapatnam',
      description: 'On the occasion of International Yoga Day, a yoga session was organized to promote physical health, mental well-being, and awareness about the importance of a balanced lifestyle. Participants actively joined the program and practiced yoga together for a healthier community.',
      image: 'https://i.ibb.co/qYT4Qzdq/6-1.jpg',
      icon: FaLaptop,
      category: 'International Yoga Day'
    },{
      _id: '8',
      title: 'Water Filter Donation for PWD School',
      date: '20 February 2026',
      location: 'Gangavaram, Visakhapatnam',
      description: 'A water filter was donated to a school for Persons with Disabilities (PWD) to ensure access to safe and clean drinking water for students and staff. This initiative reflects our commitment to supporting health, hygiene, and better learning environments.',
      image: 'https://i.ibb.co/svdp8dwp/Water-Filter-Donation-for-PWD-College.jpg',
      icon: FaLaptop,
      category: 'Donation'
    },{
      _id: '9',
      title: 'Soap-Making Training Program in Tribal Areas',
      date: '20 February 2026',
      location: 'Gangavaram, Visakhapatnam',
      description: 'A soap-making training program was conducted in tribal areas to promote skill development and self-employment opportunities. The initiative aimed to empower community members by helping them learn simple livelihood skills that can support income generation and improve hygiene awareness.',
      image: 'https://i.ibb.co/gbmQfWth/Whats-App-Image-2026-01-27-at-5-22-07-PM.jpg',
      icon: FaLaptop,
      category: 'Training'
    }


  ];

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setEvents(sampleEvents);
      setLoading(false);
    }, 1000);
  }, []);

  const nextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  if (loading) {
    return (
      <section id="events" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-4"
               style={{ borderTopColor: '#0066B3' }}></div>
        </div>
      </section>
    );
  }

  const currentEvent = events[currentEventIndex];
  const Icon = currentEvent.icon;

  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#1E2A3A' }}>
            Our <span style={{ color: '#0066B3' }}>Events & Activities</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us in our community events, workshops, and awareness programs
          </p>
          <div className="w-20 h-1 mx-auto mt-4" style={{ backgroundColor: '#FF6B35' }}></div>
        </div>

        {/* Main Event Slider */}
        <div className="max-w-5xl mx-auto relative">
          {/* Event Counter */}
          <div className="text-center mb-4 text-sm text-gray-500">
            Event {currentEventIndex + 1} of {events.length}
          </div>

          {/* Event Card */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            {/* Image */}
            <div className="relative h-[400px] md:h-[500px]">
              <img 
                src={currentEvent.image} 
                alt={currentEvent.title}
                className="w-full h-full object-cover"
              />
              
              {/* Dark Overlay for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="px-3 py-1 bg-[#FF6B35] text-white rounded-full text-sm font-medium inline-block">
                    {currentEvent.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold mb-3">
                  {currentEvent.title}
                </h3>

                {/* Description */}
                <p className="text-gray-200 max-w-2xl mb-6">
                  {currentEvent.description}
                </p>

              
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevEvent}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-[#0066B3] hover:bg-[#0052A3] text-white p-3 rounded-full shadow-lg transition-all z-10"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button 
            onClick={nextEvent}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-[#0066B3] hover:bg-[#0052A3] text-white p-3 rounded-full shadow-lg transition-all z-10"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>

        {/* Event Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentEventIndex(index)}
              className={`transition-all rounded-full ${
                index === currentEventIndex 
                  ? 'w-8 h-2 bg-[#FF6B35]' 
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;