import useUrlAnalysisStore from '../../store/urlAnalysisStore';

const UrlResults = () => {
  const { results, isLoading, error } = useUrlAnalysisStore();
  
  if (isLoading) {
    return (
      <div className="card animate-pulse">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-3"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-3"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-3"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="card border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20">
        <h3 className="text-lg font-medium text-red-800 dark:text-red-200">Analysis Error</h3>
        <p className="mt-2 text-red-700 dark:text-red-300">{error}</p>
      </div>
    );
  }
  
  if (!results) {
    return null;
  }
  
  const getRiskColor = (risk) => {
    switch (risk) {
      case 'high': return 'risk-high';
      case 'medium': return 'risk-medium';
      case 'low': return 'risk-low';
      default: return 'cyber-accent';
    }
  };
  
  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Analysis Results</h2>
      <div className="mb-4">
        <p className="text-gray-600 dark:text-gray-400 break-all">
          <span className="font-medium">URL:</span> {results.url}
        </p>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-700 dark:text-gray-300 font-medium">Risk Score:</span>
          <span className={`font-bold text-${getRiskColor(results.risk)}`}>
            {results.score}/100
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div 
            className={`bg-${getRiskColor(results.risk)} h-2.5 rounded-full`} 
            style={{ width: `${results.score}%` }}
          ></div>
        </div>
        <p className="mt-1 text-right text-sm font-medium text-gray-600 dark:text-gray-400">
          {results.risk === 'high' ? 'High Risk' : results.risk === 'medium' ? 'Medium Risk' : 'Low Risk'}
        </p>
      </div>
      
      <div className="mb-4">
        <h3 className="font-medium text-gray-800 dark:text-white mb-2">Detection Details</h3>
        <div className="space-y-3">
          {results.detections.map((detection, index) => (
            <div 
              key={index} 
              className={`p-3 rounded-md ${detection.detected 
                ? 'bg-red-50 dark:bg-red-900/20 border-l-4 border-risk-high' 
                : 'bg-green-50 dark:bg-green-900/20 border-l-4 border-risk-low'}`}
            >
              <div className="flex justify-between">
                <span className="font-medium">{detection.source}</span>
                <span className={detection.detected ? 'text-risk-high' : 'text-risk-low'}>
                  {detection.detected ? 'Detected' : 'Clean'}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{detection.details}</p>
            </div>
          ))}
        </div>
      </div>
      
      {results.lastSeen && (
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium">Last seen in database:</span> {new Date(results.lastSeen).toLocaleString()}
        </div>
      )}
    </div>
  );
};

export default UrlResults;