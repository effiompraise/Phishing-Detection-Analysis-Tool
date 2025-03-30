import { create } from 'zustand';
import { phishstatsService } from '../services/phishstatsService';

const useUrlAnalysisStore = create((set) => ({
  url: '',
  isLoading: false,
  results: null,
  error: null,
  
  setUrl: (url) => set({ url }),
  
  resetResults: () => set({ results: null, error: null }),
  
  analyzeUrl: async (url) => {
    set({ isLoading: true, error: null });
    try {
      const results = await phishstatsService.checkUrl(url);
      set({ results, isLoading: false });
      return results;
    } catch (error) {
      set({ 
        error: error.message || 'Failed to analyze URL', 
        isLoading: false 
      });
      return null;
    }
  },
}));

export default useUrlAnalysisStore;