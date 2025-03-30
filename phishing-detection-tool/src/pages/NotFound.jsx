import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center flex-col py-12">
      <h1 className="text-6xl font-bold text-cyber-accent">404</h1>
      <h2 className="text-2xl font-medium text-gray-800 dark:text-white mt-4">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary">
        Return to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;