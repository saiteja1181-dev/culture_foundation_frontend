import axios from 'axios';

// Use environment variable for API URL, with fallback for development
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // Add timeout for better error handling
  timeout: 10000,
});

// Request interceptor for logging (optional, helps with debugging)
api.interceptors.request.use(
  (config) => {
    // You can add auth tokens here later if needed
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    if (error.code === 'ECONNABORTED') {
      console.error('Request timeout - server not responding');
    } else if (error.response) {
      // Server responded with error status
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      // Request was made but no response
      console.error('No response from server. Is the backend running?');
    }
    return Promise.reject(error);
  }
);

// ============ PROGRAMS API ============
export const getPrograms = () => api.get('/programs');
export const getProgramById = (id) => api.get(`/programs/${id}`);
export const createProgram = (programData) => api.post('/programs', programData);
export const updateProgram = (id, programData) => api.put(`/programs/${id}`, programData);
export const deleteProgram = (id) => api.delete(`/programs/${id}`);

// ============ EVENTS API ============
export const getEvents = () => api.get('/events');
export const getEventById = (id) => api.get(`/events/${id}`);
export const createEvent = (eventData) => api.post('/events', eventData);
export const updateEvent = (id, eventData) => api.put(`/events/${id}`, eventData);
export const deleteEvent = (id) => api.delete(`/events/${id}`);
export const getUpcomingEvents = () => api.get('/events/upcoming');

// ============ VOLUNTEERS API (Replaces Donations) ============
export const getVolunteers = () => api.get('/volunteers');
export const getVolunteerById = (id) => api.get(`/volunteers/${id}`);
export const createVolunteer = (volunteerData) => api.post('/volunteers', volunteerData);
export const updateVolunteer = (id, volunteerData) => api.put(`/volunteers/${id}`, volunteerData);
export const deleteVolunteer = (id) => api.delete(`/volunteers/${id}`);

// ============ INQUIRIES/CONTACT API (Replaces Success Stories) ============
export const sendInquiry = (inquiryData) => api.post('/inquiries', inquiryData);
export const getInquiries = () => api.get('/inquiries'); // For admin use

// ============ GALLERY API (Optional - if you have gallery) ============
export const getGalleryImages = () => api.get('/gallery');
export const uploadImage = (imageData) => api.post('/gallery', imageData);

// ============ NEWSLETTER API ============
export const subscribeNewsletter = (email) => api.post('/newsletter/subscribe', { email });
export const unsubscribeNewsletter = (email) => api.post('/newsletter/unsubscribe', { email });

// ============ ABOUT/US INFO API ============
export const getAboutInfo = () => api.get('/about');
export const updateAboutInfo = (data) => api.put('/about', data);

// ============ STATISTICS API ============
export const getStatistics = () => api.get('/statistics');

export default api;
