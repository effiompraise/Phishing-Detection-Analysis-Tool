import axios from 'axios';
import { API_ENDPOINTS } from './apiConfig';

// For now, we'll simulate API calls since you'll need to set up proper authentication
export const phishstatsService = {
  checkUrl: async (url) => {
    // In a real implementation, this would call the actual API
    // For now, we'll simulate a response
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demo purposes, we'll return mock data
    // In a real app, you would do something like:
    // const response = await axios.get(`${API_ENDPOINTS.PHISHSTATS}/check?url=${encodeURIComponent(url)}`);
    // return response.data;
    
    // Simulate different responses based on the URL
    if (url.includes('phishing') || url.includes('scam')) {
      return {
        url,
        score: 85,
        risk: 'high',
        detections: [
          { source: 'PhishStats DB', detected: true, details: 'Known phishing URL' },
          { source: 'URL Structure', detected: true, details: 'Suspicious parameters detected' },
          { source: 'Domain Age', detected: true, details: 'Domain registered recently' },
        ],
        lastSeen: new Date().toISOString(),
      };
    } else if (url.includes('suspicious')) {
      return {
        url,
        score: 45,
        risk: 'medium',
        detections: [
          { source: 'PhishStats DB', detected: false, details: 'Not found in database' },
          { source: 'URL Structure', detected: true, details: 'Unusual URL pattern' },
          { source: 'Domain Age', detected: false, details: 'Domain is over 1 year old' },
        ],
        lastSeen: null,
      };
    } else {
      return {
        url,
        score: 10,
        risk: 'low',
        detections: [
          { source: 'PhishStats DB', detected: false, details: 'Not found in database' },
          { source: 'URL Structure', detected: false, details: 'Normal URL pattern' },
          { source: 'Domain Age', detected: false, details: 'Domain is over 2 years old' },
        ],
        lastSeen: null,
      };
    }
  }
};