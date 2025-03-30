import useEmailAnalysisStore from '../../store/emailAnalysisStore';

const EmailResults = () => {
  const { results, isLoading, error } = useEmailAnalysisStore();
  
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
  
  const getRiskBadge = (risk) => {
    switch (risk) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-200';
    }
  };
  
  const getAuthResultBadge = (result) => {
    switch (result) {
      case 'pass': return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200';
      case 'fail': return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200';
      default: return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200';
    }
  };
  
  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Email Analysis Results</h2>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-700 dark:text-gray-300 font-medium">Risk Score:</span>
          <span className={`px-2 py-1 rounded text-sm font-medium ${getRiskBadge(results.riskLevel)}`}>
            {results.riskScore}/100 - {results.riskLevel.toUpperCase()} RISK
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div 
            className={`h-2.5 rounded-full ${
              results.riskLevel === 'high' ? 'bg-red-500' : 
              results.riskLevel === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
            }`} 
            style={{ width: `${results.riskScore}%` }}
          ></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 className="font-medium text-gray-800 dark:text-white mb-2">Sender Information</h3>
          <div className="space-y-2">
            <p className="text-gray-700 dark:text-gray-300"><span className="font-medium">From:</span> {results.from}</p>
            <p className="text-gray-700 dark:text-gray-300"><span className="font-medium">Domain:</span> {results.senderDomain}</p>
            <p className="text-gray-700 dark:text-gray-300"><span className="font-medium">Subject:</span> {results.subject}</p>
            <p className="text-gray-700 dark:text-gray-300"><span className="font-medium">Date:</span> {results.date}</p>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 className="font-medium text-gray-800 dark:text-white mb-2">Authentication Results</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">SPF:</span>
              <span className={`px-2 py-0.5 rounded text-xs ${getAuthResultBadge(results.authentication.spf.result)}`}>
                {results.authentication.spf.result.toUpperCase()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">DKIM:</span>
              <span className={`px-2 py-0.5 rounded text-xs ${getAuthResultBadge(results.authentication.dkim.result)}`}>
                {results.authentication.dkim.result.toUpperCase()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">DMARC:</span>
              <span className={`px-2 py-0.5 rounded text-xs ${getAuthResultBadge(results.authentication.dmarc.result)}`}>
                {results.authentication.dmarc.result.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {results.spoofingDetected && (
        <div className="mb-6 p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 rounded-r-lg">
          <h3 className="text-lg font-medium text-red-800 dark:text-red-200">Warning: Potential Spoofing Detected</h3>
          <p className="mt-2 text-red-700 dark:text-red-300">
            The sender address may be spoofed. The return path does not match the sender domain.
          </p>
        </div>
      )}
      
      <div className="mb-4">
        <h3 className="font-medium text-gray-800 dark:text-white mb-2">Email Path</h3>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 max-h-40 overflow-y-auto">
          {results.receivedChain.length > 0 ? (
            <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              {results.receivedChain.map((hop, index) => (
                <li key={index}>{hop}</li>
              ))}
            </ol>
          ) : (
            <p className="text-gray-500 dark:text-gray-400 italic">No received chain available</p>
          )}
        </div>
      </div>
      
      <div className="text-sm text-gray-600 dark:text-gray-400">
        <p className="font-medium">Recommendations:</p>
        <ul className="list-disc pl-5 mt-1">
          {results.riskLevel === 'high' && (
            <li className="text-red-600 dark:text-red-400">This email shows strong indicators of being malicious. Do not interact with it.</li>
          )}
          {results.authentication.spf.result !== 'pass' && (
            <li>SPF authentication failed, which may indicate the sender is not authorized to use this domain.</li>
          )}
          {results.authentication.dkim.result !== 'pass' && (
            <li>DKIM signature is invalid or missing, which suggests the email may have been tampered with.</li>
          )}
          {results.authentication.dmarc.result !== 'pass' && (
            <li>DMARC verification failed, which means the sender's domain has protective policies that this email violates.</li>
          )}
          {results.spoofingDetected && (
            <li>The sender address appears to be spoofed. Be extremely cautious.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default EmailResults;