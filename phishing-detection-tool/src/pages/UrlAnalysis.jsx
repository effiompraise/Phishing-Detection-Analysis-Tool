import UrlForm from '../components/url-analyzer/UrlForm';
import UrlResults from '../components/url-analyzer/UrlResults';

const UrlAnalysis = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">URL Analysis</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <UrlForm />
          <div className="card">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">About URL Analysis</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              This tool checks URLs against known phishing databases and analyzes various aspects of the URL to determine potential risk.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Features include:
            </p>
            <ul className="mt-3 space-y-2 ml-5 list-disc text-gray-600 dark:text-gray-400">
              <li>Checking against phishing databases</li>
              <li>Analysis of URL structure and patterns</li>
              <li>Domain age and registration details</li>
              <li>Risk score calculation</li>
            </ul>
          </div>
        </div>
        <UrlResults />
      </div>
    </div>
  );
};

export default UrlAnalysis;