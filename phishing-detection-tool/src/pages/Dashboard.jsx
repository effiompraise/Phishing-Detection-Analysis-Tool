const Dashboard = () => {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Phishing Detection Dashboard</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Welcome to PhishGuard</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              This tool helps cybersecurity professionals analyze and detect potential phishing threats.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Use the navigation to access different analysis tools:
            </p>
            <ul className="mt-3 space-y-2 ml-5 list-disc text-gray-600 dark:text-gray-400">
              <li>URL Analysis - Check suspicious links</li>
              <li>Email Header Analysis - Analyses email headers for suspicious emails</li>
              <li>Visual Content Analysis (Coming Soon)</li>
            </ul>
          </div>
          
          <div className="card">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Recent Phishing Trends</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Stay updated with the latest phishing techniques and campaigns.
            </p>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <h3 className="font-medium text-gray-800 dark:text-white">Brand Impersonation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Financial institutions remain the most impersonated brands in phishing attacks.
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <h3 className="font-medium text-gray-800 dark:text-white">COVID-19 Themes</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Attackers continue to exploit pandemic-related concerns in their campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="inline-flex space-x-2 w-full justify-center">
          <a href="url-analysis">
  <button class="bg-[#8BE9FD] mt-5 hover:bg-[#8FA3E3] text-gray-800 font-bold py-2 px-4 rounded">
    Scan url
  </button>
  </a>
  <a href="email-analysis">
  <button class="bg-[#8BE9FD] mt-5 hover:bg-[#8FA3E3] text-gray-800 font-bold py-2 px-4 rounded">
    Scan email
  </button>
  </a>
</div>
      </div>
    );
  };
  
  export default Dashboard;