import { Link } from 'react-router-dom';
import { ShieldCheckIcon, ChartBarIcon, EnvelopeIcon, LinkIcon } from '@heroicons/react/24/outline';

const Dashboard = () => {
    return (
      <div className="w-full h-full p-4">
  
        <div className="mb-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <ShieldCheckIcon className="h-8 w-8 text-cyan-500" />
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Phishing Detection Dashboard
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Real-time Threat Intelligence & Analysis Tools
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <div className="card p-3 text-center">
            <div className="text-cyan-500 mx-auto">
              <ChartBarIcon className="h-6 w-6" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Scans Today</p>
            <div className="text-xl font-bold text-gray-800 dark:text-white">248</div>
          </div>
          
          <div className="card p-3 text-center">
            <div className="text-green-500 mx-auto">
              <ShieldCheckIcon className="h-6 w-6" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Safe Links</p>
            <div className="text-xl font-bold text-gray-800 dark:text-white">92%</div>
          </div>

          <div className="card p-3 text-center">
            <div className="text-red-500 mx-auto">
              <ShieldCheckIcon className="h-6 w-6" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Threats Blocked</p>
            <div className="text-xl font-bold text-gray-800 dark:text-white">1.2k</div>
          </div>

          <div className="card p-3 text-center">
            <div className="text-purple-500 mx-auto">
              <EnvelopeIcon className="h-6 w-6" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Emails Analyzed</p>
            <div className="text-xl font-bold text-gray-800 dark:text-white">864</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div>
            <div className="card p-4">
              <div className="flex items-center gap-3 mb-4">
                <LinkIcon className="h-6 w-6 text-cyan-500" />
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Threat Analysis Toolkit
                </h2>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                  <h3 className="font-medium text-gray-800 dark:text-white mb-2">Quick Actions</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Link 
                      to="/url-analysis" 
                      className="flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="p-2 bg-cyan-100 dark:bg-cyan-900/20 rounded-lg">
                        <LinkIcon className="h-5 w-5 text-cyan-500" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">URL Scanner</span>
                    </Link>
                    
                    <Link 
                      to="/email-analysis" 
                      className="flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                        <EnvelopeIcon className="h-5 w-5 text-purple-500" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Email Analyzer</span>
                    </Link>
                  </div>
                </div>

                <div className="p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                  <h3 className="font-medium text-gray-800 dark:text-white mb-2">Detection Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg">
                      <div className="h-2 w-2 bg-cyan-400 rounded-full" />
                      <span className="text-gray-600 dark:text-gray-400">SPF/DKIM/DMARC Verification</span>
                    </li>
                    <li className="flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg">
                      <div className="h-2 w-2 bg-green-400 rounded-full" />
                      <span className="text-gray-600 dark:text-gray-400">Domain Reputation Analysis</span>
                    </li>
                    <li className="flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg">
                      <div className="h-2 w-2 bg-purple-400 rounded-full" />
                      <span className="text-gray-600 dark:text-gray-400">Content Pattern Matching</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="card p-4">
              <div className="flex items-center gap-3 mb-4">
                <ChartBarIcon className="h-6 w-6 text-cyan-500" />
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Threat Intelligence Feed
                </h2>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-red-50 dark:bg-red-900/10 rounded-lg border-l-4 border-red-400">
                  <h3 className="font-medium text-red-600 dark:text-red-300 mb-1">Active Threat</h3>
                  <p className="text-sm text-red-500 dark:text-red-400">
                    Financial sector seeing ↑ 45% in spoofed domains
                  </p>
                </div>

                <div className="p-3 bg-amber-50 dark:bg-amber-900/10 rounded-lg border-l-4 border-amber-400">
                  <h3 className="font-medium text-amber-600 dark:text-amber-300 mb-1">Emerging Pattern</h3>
                  <p className="text-sm text-amber-500 dark:text-amber-400">
                    New COVID-19 relief scam templates detected
                  </p>
                </div>

                <div className="p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg border-l-4 border-blue-400">
                  <h3 className="font-medium text-blue-600 dark:text-blue-300 mb-1">Security Update</h3>
                  <p className="text-sm text-blue-500 dark:text-blue-400">
                    New DMARC policies being adopted industry-wide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link 
            to="/url-analysis" 
            className="flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
          >
            <LinkIcon className="h-5 w-5" />
            Start URL Scan
          </Link>
          <Link 
            to="/email-analysis" 
            className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
          >
            <EnvelopeIcon className="h-5 w-5" />
            Analyze Email Headers
          </Link>
        </div>
      </div>
    );
};

export default Dashboard;