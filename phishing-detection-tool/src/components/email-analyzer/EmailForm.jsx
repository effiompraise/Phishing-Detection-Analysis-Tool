import { useState } from 'react';
import useEmailAnalysisStore from '../../store/emailAnalysisStore';

const EmailForm = () => {
  const [emailHeaders, setEmailHeaders] = useState('');
  const { analyzeHeaders, isLoading } = useEmailAnalysisStore();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailHeaders.trim()) return;
    
    analyzeHeaders(emailHeaders);
  };
  
  return (
    <div className="card mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Email Header Analysis</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="emailHeaders" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Paste Email Headers
          </label>
          <textarea
            id="emailHeaders"
            value={emailHeaders}
            onChange={(e) => setEmailHeaders(e.target.value)}
            placeholder="Paste raw email headers here..."
            className="input-field min-h-[150px] md:min-h-[200px]"
            required
          />
        </div>
        <div className="text-xs text-gray-600 dark:text-gray-400 mb-4">
          <p>To find email headers:</p>
          <ul className="list-disc pl-5 mt-1">
            <li>Gmail: Open email &gt; Click three dots &gt; "Show original"</li>
            <li>Outlook: Open email &gt; Click three dots &gt; "View &gt; View message source"</li>
          </ul>
        </div>
        <button
          type="submit"
          className="bg-cyan-300 hover:bg-blue-300"
          disabled={isLoading}
        >
          {isLoading ? 'Analyzing...' : 'Analyze Headers'}
        </button>
      </form>
    </div>
  );
};

export default EmailForm;