import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Programs API
export const getPrograms = () => api.get('/programs');
export const createProgram = (programData) => api.post('/programs', programData);

// Events API
export const getEvents = () => api.get('/events');
export const createEvent = (eventData) => api.post('/events', eventData);

// Donations API - FIXED
export const getDonations = () => api.get('/donations');
export const createDonation = (donationData) => api.post('/donations', donationData);

// Success Stories API
export const getSuccessStories = () => api.get('/success-stories');
export const createSuccessStory = (storyData) => api.post('/success-stories', storyData);

export default api;