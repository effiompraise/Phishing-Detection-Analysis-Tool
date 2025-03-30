import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-cyber-accent">
            PhishGuard
          </Link>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <NavLink 
                to="/" 
                className={({isActive}) => 
                  isActive 
                    ? "text-cyber-accent font-medium" 
                    : "text-gray-700 dark:text-gray-300 hover:text-cyber-accent"
                }
                end
              >
                Dashboard
              </NavLink>
              <NavLink 
                to="/url-analysis" 
                className={({isActive}) => 
                  isActive 
                    ? "text-cyber-accent font-medium" 
                    : "text-gray-700 dark:text-gray-300 hover:text-cyber-accent"
                }
              >
                URL Analysis
              </NavLink>
              <NavLink 
                to="/email-analysis" 
                className={({isActive}) => 
                  isActive 
                    ? "text-cyber-accent font-medium" 
                    : "text-gray-700 dark:text-gray-300 hover:text-cyber-accent"
                }
              >
                Email Analysis
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;