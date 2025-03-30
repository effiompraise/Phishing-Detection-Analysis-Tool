import { useState } from 'react';
import useUrlAnalysisStore from '../../store/urlAnalysisStore';

const UrlForm = () => {
  const [inputUrl, setInputUrl] = useState('');
  const { analyzeUrl, isLoading } = useUrlAnalysisStore();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;
    
    analyzeUrl(inputUrl);
  };
  
  return (
    <div className="card mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">URL Analysis</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="url" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Enter URL to analyze
          </label>
          <input
            type="text"
            id="url"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="https://example.com"
            className="input-field"
            required
          />
        </div>
        <button
          type="submit"
          className="btn-primary"
          disabled={isLoading}
        >
          {isLoading ? 'Analyzing...' : 'Analyze URL'}
        </button>
      </form>
    </div>
  );
};

export default UrlForm;