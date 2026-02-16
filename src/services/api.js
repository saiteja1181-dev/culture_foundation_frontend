import axios from 'axios';

// Use your new domain for API
const API_URL = process.env.REACT_APP_API_URL || 'https://api.culturefoundation.org.in/api';
// Or if API is on same domain:
// const API_URL = process.env.REACT_APP_API_URL || 'https://culturefoundation.org.in/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add auth tokens here later if needed
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED') {
      console.error('Request timeout - server not responding');
    } else if (error.response) {
      console.error('API Error:', error.response.data);
    } else if (error.request) {
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

// ============ VOLUNTEERS API ============
export const getVolunteers = () => api.get('/volunteers');
export const getVolunteerById = (id) => api.get(`/volunteers/${id}`);
export const createVolunteer = (volunteerData) => api.post('/volunteers', volunteerData);
export const updateVolunteer = (id, volunteerData) => api.put(`/volunteers/${id}`, volunteerData);
export const deleteVolunteer = (id) => api.delete(`/volunteers/${id}`);

// ============ INQUIRIES API ============
export const sendInquiry = (inquiryData) => api.post('/inquiries', inquiryData);
export const getInquiries = () => api.get('/inquiries');

// ============ GALLERY API ============
export const getGalleryImages = () => api.get('/gallery');
export const uploadImage = (imageData) => api.post('/gallery', imageData);

// ============ NEWSLETTER API ============
export const subscribeNewsletter = (email) => api.post('/newsletter/subscribe', { email });
export const unsubscribeNewsletter = (email) => api.post('/newsletter/unsubscribe', { email });

// ============ ABOUT API ============
export const getAboutInfo = () => api.get('/about');
export const updateAboutInfo = (data) => api.put('/about', data);

// ============ STATISTICS API ============
export const getStatistics = () => api.get('/statistics');

export default api;
