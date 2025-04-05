import UrlForm from '../components/url-analyzer/UrlForm';
import UrlResults from '../components/url-analyzer/UrlResults';
import { LinkIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const UrlAnalysis = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <LinkIcon className="h-8 w-8 text-cyan-500" />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            URL Threat Analysis
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Comprehensive scanning of URLs to detect phishing attempts, malicious content,
          and suspicious domain patterns.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheckIcon className="h-6 w-6 text-purple-500" />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Scan Parameters
              </h2>
            </div>
            <UrlForm />
          </div>

          <div className="card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <LinkIcon className="h-6 w-6 text-cyan-500" />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Analysis Features
              </h2>
            </div>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 bg-green-400 rounded-full" />
                Phishing database cross-check
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 bg-cyan-400 rounded-full" />
                Domain registration analysis
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 bg-purple-400 rounded-full" />
                URL structure decomposition
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 bg-red-400 rounded-full" />
                Real-time threat detection
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <UrlResults />
        </div>
      </div>
    </div>
  );
};

export default UrlAnalysis;