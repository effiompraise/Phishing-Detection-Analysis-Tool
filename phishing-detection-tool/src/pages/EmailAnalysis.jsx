// pages/EmailAnalysis.jsx
import EmailForm from '../components/email-analyzer/EmailForm';
import EmailResults from '../components/email-analyzer/EmailResults';

const EmailAnalysis = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
    <div className="flex flex-row min-h-screen justify-center items-center">
      <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Email Header Analysis</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Analyze email headers to detect spoofing, phishing attempts, and verify sender authenticity.
      </p>
      
      <div class="grid h-screen place-items-center">
        <div>
          <EmailForm />
        </div>
        <div>
          <EmailResults />
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default EmailAnalysis;