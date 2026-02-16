import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaUserGraduate, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { getSuccessStories } from '../services/api';
import { toast } from 'react-toastify';

const SuccessStories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeStory, setActiveStory] = useState(0);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      setLoading(true);
      const response = await getSuccessStories();
      setStories(response.data);
    } catch (error) {
      toast.error('Failed to load success stories');
      console.error('Error fetching stories:', error);
    } finally {
      setLoading(false);
    }
  };

  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section id="stories" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Success Stories That Inspire
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Real stories of transformation from our program participants
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
          </div>
        ) : stories.length > 0 ? (
          <div className="max-w-6xl mx-auto">
            {/* Main Story Display */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Story Content */}
                <div className="p-8 md:p-12">
                  <div className="mb-6">
                    <FaQuoteLeft className="text-4xl text-primary-300 mb-4" />
                    <p className="text-lg md:text-xl text-gray-700 italic mb-8">
                      "{stories[activeStory].story}"
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {stories[activeStory].name}
                      </h3>
                      <div className="flex items-center text-gray-600 mt-1">
                        <FaUserGraduate className="mr-2" />
                        <span>{stories[activeStory].role}</span>
                      </div>
                    </div>

                    <div className="bg-primary-50 rounded-lg p-4">
                      <h4 className="font-semibold text-primary-700 mb-1">Program Completed</h4>
                      <p className="text-gray-700">{stories[activeStory].program}</p>
                    </div>

                    {stories[activeStory].location && (
                      <div className="flex items-center text-gray-600">
                        <FaMapMarkerAlt className="mr-2" />
                        <span>{stories[activeStory].location}</span>
                      </div>
                    )}

                    {/* Rating Stars */}
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar key={star} className="text-yellow-400 mr-1" />
                      ))}
                      <span className="ml-2 text-gray-600">5.0 Rating</span>
                    </div>
                  </div>
                </div>

                {/* Story Image */}
                <div className="bg-gradient-to-br from-primary-500 to-primary-700 relative min-h-[400px]">
                  {stories[activeStory].image ? (
                    <img 
                      src={stories[activeStory].image}
                      alt={stories[activeStory].name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                          <FaUserGraduate className="text-white text-5xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {stories[activeStory].name}
                        </h3>
                        <p className="text-white/80 mt-2">
                          {stories[activeStory].role}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center mt-8 space-x-6">
              <button
                onClick={prevStory}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
                aria-label="Previous story"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Story Dots */}
              <div className="flex space-x-2">
                {stories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStory(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeStory 
                        ? 'bg-primary-500 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to story ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextStory}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
                aria-label="Next story"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* All Stories Grid */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                More Inspiring Stories
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stories.slice(0, 3).map((story, index) => (
                  index !== activeStory && (
                    <div 
                      key={story._id}
                      onClick={() => setActiveStory(index)}
                      className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all cursor-pointer border border-gray-100 hover:border-primary-200 group"
                    >
                      <div className="flex items-start mb-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary-200 transition-colors">
                          <FaUserGraduate className="text-primary-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 group-hover:text-primary-600">
                            {story.name}
                          </h4>
                          <p className="text-sm text-gray-600">{story.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 line-clamp-3">
                        "{story.story.substring(0, 120)}..."
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <span className="text-sm font-medium text-primary-600">
                          {story.program}
                        </span>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl shadow-md">
            <FaUserGraduate className="text-5xl text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Success Stories Yet</h3>
            <p className="text-gray-500 mb-6">
              Be the first to share your success story!
            </p>
            <button className="px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors">
              Share Your Story
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SuccessStories;