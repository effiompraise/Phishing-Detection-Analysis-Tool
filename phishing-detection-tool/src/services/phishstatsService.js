import axios from 'axios';
import { API_ENDPOINTS } from './apiConfig';

export const phishstatsService = {
  checkUrl: async (url) => {
    
    //const response = await axios.get(`${API_ENDPOINTS.PHISHSTATS}/some-endpoint`, {
      // params: { url }
     //});
    
    
    console.log(`Using mock service. Would connect to: ${API_ENDPOINTS.PHISHSTATS}`);
    
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    
    const domain = extractDomain(url);
    const urlHash = simpleHash(url);
    
    
    const suspiciousTLDs = ['.xyz', '.tk', '.top', '.gq', '.ml'];
    const suspiciousKeywords = ['login', 'signin', 'account', 'verify', 'secure', 'update', 'confirm'];
    
    
    if (url.includes('phishing') || url.includes('scam')) {
      return {
        url,
        score: 85 + (urlHash % 15), 
        risk: 'high',
        detections: [
          { source: 'PhishStats DB', detected: true, details: 'Known phishing URL' },
          { source: 'URL Structure', detected: true, details: 'Suspicious parameters detected' },
          { source: 'Domain Age', detected: true, details: `Domain registered recently (${(urlHash % 30) + 1} days ago)` },
        ],
        lastSeen: new Date(Date.now() - (urlHash % 10) * 86400000).toISOString(),
      };
    } 
    
    else if (suspiciousTLDs.some(tld => domain.endsWith(tld)) || 
             suspiciousKeywords.some(keyword => domain.includes(keyword))) {
      return {
        url,
        score: 35 + (urlHash % 30), 
        risk: 'medium',
        detections: [
          { source: 'PhishStats DB', detected: false, details: 'Not found in database' },
          { source: 'URL Structure', detected: true, details: suspiciousTLDs.some(tld => domain.endsWith(tld)) ? 
                                                              'Suspicious TLD detected' : 'Suspicious keywords in domain' },
          { source: 'Domain Age', detected: (urlHash % 3 === 0), details: (urlHash % 3 === 0) ? 
                                                                'Domain registered recently' : 'Domain is over 1 year old' },
        ],
        lastSeen: null,
      };
    } 
    
    else if (url.includes('suspicious') || url.split('?').length > 2 || countSubdomains(domain) > 2) {
      return {
        url,
        score: 40 + (urlHash % 25), 
        risk: 'medium',
        detections: [
          { source: 'PhishStats DB', detected: false, details: 'Not found in database' },
          { source: 'URL Structure', detected: true, details: 'Unusual URL pattern' },
          { source: 'Domain Age', detected: false, details: 'Domain is over 1 year old' },
        ],
        lastSeen: (urlHash % 5 === 0) ? new Date(Date.now() - (urlHash % 60) * 86400000).toISOString() : null,
      };
    } 
   
    else {
      
      const randomFactor = urlHash % 100;
      
      if (randomFactor < 10) {
        
        return {
          url,
          score: 20 + (urlHash % 15),
          risk: 'low',
          detections: [
            { source: 'PhishStats DB', detected: false, details: 'Not found in database' },
            { source: 'URL Structure', detected: true, details: 'Some unusual patterns detected' },
            { source: 'Domain Age', detected: false, details: 'Domain is well established' },
          ],
          lastSeen: null,
        };
      } else {
        
        return {
          url,
          score: 5 + (urlHash % 15),
          risk: 'low',
          detections: [
            { source: 'PhishStats DB', detected: false, details: 'Not found in database' },
            { source: 'URL Structure', detected: false, details: 'Normal URL pattern' },
            { source: 'Domain Age', detected: false, details: `Domain registered ${1 + (urlHash % 10)} years ago` },
          ],
          lastSeen: null,
        };
      }
    }
  }
};


function extractDomain(url) {
  try {
    
    const domain = url.replace(/^(https?:\/\/)?(www\.)?/i, '').split('/')[0];
    return domain;
  } catch (error) {
    return url; 
  }
}

function countSubdomains(domain) {
  
  const parts = domain.split('.');
  return parts.length > 2 ? parts.length - 2 : 0;
}

function simpleHash(str) {
  
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash = hash & hash; 
  }
  return Math.abs(hash);
}