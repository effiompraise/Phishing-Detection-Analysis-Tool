import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-8 space-y-8 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
            Phishing Detection Dashboard
            <span className="block mt-2 text-lg font-normal text-cyan-600 dark:text-cyan-400">
              Your Cybersecurity Command Center
            </span>
          </h1>
        </div>

        {/* Main Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Welcome Card */}
          <div className="card bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                <span className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-300 px-3 py-1 rounded-full text-sm">
                  New
                </span>
                Welcome to PhishGuard
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Empower your cybersecurity workflow with advanced phishing detection capabilities. 
                Analyze suspicious content and stay ahead of emerging threats.
              </p>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Quick Access Tools:
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700/50 p-2 rounded-lg transition-colors">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    URL Analysis - Deep scan suspicious links
                  </li>
                  <li className="flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700/50 p-2 rounded-lg transition-colors">
                    <div className="h-2 w-2 bg-emerald-400 rounded-full"></div>
                    Email Header Analysis - Forensic header inspection
                  </li>
                  <li className="flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700/50 p-2 rounded-lg transition-colors">
                    <div className="h-2 w-2 bg-purple-400 rounded-full"></div>
                    Visual Content Analysis (Coming Soon)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Trends Card */}
          <div className="card bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Threat Intelligence Feed
              <span className="block text-sm font-normal text-gray-500 dark:text-gray-400 mt-1">
                Updated in real-time from global sources
              </span>
            </h2>
            <div className="space-y-5">
              <div className="p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors group">
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded-lg">
                    <span className="text-red-600 dark:text-red-400 font-semibold text-sm">Alert</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      Brand Impersonation Surge
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Financial sector sees 45% increase in spoofed domains targeting customer credentials.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors group">
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 dark:bg-amber-900/20 p-2 rounded-lg">
                    <span className="text-amber-600 dark:text-amber-400 font-semibold text-sm">Trending</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      COVID-19 Phishing Resurgence
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      New vaccine-themed campaigns exploiting public health concerns detected worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/url-analysis" 
            className="w-full sm:w-auto bg-gradient-to-r from-cyan-400 to-blue-400 hover:opacity-90 text-white font-semibold py-3 px-8 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            Scan URL Now →
          </Link>
          <Link 
            to="/email-analysis"
            className="w-full sm:w-auto bg-gradient-to-r from-purple-400 to-indigo-400 hover:opacity-90 text-white font-semibold py-3 px-8 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            Analyze Email Headers →
          </Link>
        </div>
      </div>
    );
};

export default Dashboard;