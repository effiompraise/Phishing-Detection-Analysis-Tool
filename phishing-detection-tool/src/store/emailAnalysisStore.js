// store/emailAnalysisStore.js
import { create } from 'zustand';
import { emailHeaderService } from '../services/emailHeaderService';

const useEmailAnalysisStore = create((set) => ({
  headers: '',
  isLoading: false,
  results: null,
  error: null,
  
  setHeaders: (headers) => set({ headers }),
  
  resetResults: () => set({ results: null, error: null }),
  
  analyzeHeaders: async (headers) => {
    set({ isLoading: true, error: null });
    try {
      const results = await emailHeaderService.analyzeHeaders(headers);
      set({ results, isLoading: false });
      return results;
    } catch (error) {
      set({ 
        error: error.message || 'Failed to analyze email headers', 
        isLoading: false 
      });
      return null;
    }
  },
}));

export default useEmailAnalysisStore;