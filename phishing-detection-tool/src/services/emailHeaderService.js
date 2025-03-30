import axios from 'axios';
import { API_ENDPOINTS } from './apiConfig';

export const emailHeaderService = {
  analyzeHeaders: async (headers) => {
    try {
      
     //const response = await axios.post(`${API_ENDPOINTS.EMAILREP}/analyze`, { headers });
      
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      
      const results = parseEmailHeaders(headers);
      
      return results;
    } catch (error) {
      console.error('Failed to analyze email headers:', error);
      throw new Error('Failed to analyze email headers');
    }
  }
};

function parseEmailHeaders(headers) {
  
  const headerLines = headers.split('\n').filter(line => line.trim());
  const parsedHeaders = {};
  let currentHeader = '';
  
  
  headerLines.forEach(line => {
    if (line.match(/^[A-Za-z-]+:/)) {
      const [key, value] = line.split(':', 2);
      currentHeader = key.trim().toLowerCase();
      parsedHeaders[currentHeader] = value.trim();
    } else if (currentHeader) {
      
      parsedHeaders[currentHeader] += ' ' + line.trim();
    }
  });
  
  
  const authResults = parsedHeaders['authentication-results'] || '';
  const spfResult = authResults.includes('spf=pass') ? 'pass' : 
                    authResults.includes('spf=fail') ? 'fail' : 'neutral';
  const dkimResult = authResults.includes('dkim=pass') ? 'pass' : 
                     authResults.includes('dkim=fail') ? 'fail' : 'neutral';
  const dmarcResult = authResults.includes('dmarc=pass') ? 'pass' : 
                      authResults.includes('dmarc=fail') ? 'fail' : 'neutral';
  
  
  const from = parsedHeaders['from'] || '';
  const returnPath = parsedHeaders['return-path'] || '';
  const spoofingDetected = from && returnPath && 
                          !returnPath.includes(from.split('@')[1]);
  
  
  const senderDomain = from.includes('@') ? from.split('@')[1].replace('>', '') : '';
  
  
  let riskScore = 0;
  riskScore += spfResult === 'fail' ? 30 : spfResult === 'neutral' ? 15 : 0;
  riskScore += dkimResult === 'fail' ? 30 : dkimResult === 'neutral' ? 15 : 0;
  riskScore += dmarcResult === 'fail' ? 30 : dmarcResult === 'neutral' ? 15 : 0;
  riskScore += spoofingDetected ? 40 : 0;
  
  
  riskScore = Math.min(riskScore, 100);
  
  
  const riskLevel = riskScore > 70 ? 'high' : 
                   riskScore > 30 ? 'medium' : 'low';
  
  return {
    from: parsedHeaders['from'] || 'Unknown',
    subject: parsedHeaders['subject'] || 'No Subject',
    date: parsedHeaders['date'] || 'Unknown',
    receivedChain: extractReceivedChain(headerLines),
    authentication: {
      spf: { result: spfResult },
      dkim: { result: dkimResult },
      dmarc: { result: dmarcResult }
    },
    spoofingDetected,
    senderDomain,
    riskScore,
    riskLevel,
    rawHeaders: headers
  };
}

function extractReceivedChain(headerLines) {
  return headerLines
    .filter(line => line.startsWith('Received:'))
    .map(line => line.replace('Received:', '').trim());
}