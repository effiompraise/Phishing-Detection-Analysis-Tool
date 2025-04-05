import EmailForm from '../components/email-analyzer/EmailForm';
import EmailResults from '../components/email-analyzer/EmailResults';
import { EnvelopeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const EmailAnalysis = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <EnvelopeIcon className="h-8 w-8 text-cyan-500" />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Email Header Analysis
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Forensic examination of email headers to detect spoofing attempts, verify authentication protocols,
          and identify potential phishing indicators.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <MagnifyingGlassIcon className="h-6 w-6 text-purple-500" />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Header Inspection
              </h2>
            </div>
            <EmailForm />
          </div>

          <div className="card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <EnvelopeIcon className="h-6 w-6 text-cyan-500" />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                What We Analyze
              </h2>
            </div>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 bg-green-400 rounded-full" />
                SPF/DKIM/DMARC authentication results
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 bg-cyan-400 rounded-full" />
                Header integrity checks
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 bg-purple-400 rounded-full" />
                Suspicious routing patterns
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 bg-red-400 rounded-full" />
                Spoofing and impersonation attempts
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <EmailResults />
        </div>
      </div>
    </div>
  );
};

export default EmailAnalysis;