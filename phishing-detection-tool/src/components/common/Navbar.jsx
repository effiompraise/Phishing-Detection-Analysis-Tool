import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#383857] dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-white hover:text-[#8FA3E3]">
            PhishGuard
          </Link>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <NavLink 
                to="/" 
                className={({isActive}) => 
                  isActive 
                    ? "text-[#8BE9FD] font-medium" 
                    : "text-white hover:text-[#8FA3E3]"
                }
                end
              >
                Dashboard
              </NavLink>
              <NavLink 
                to="/url-analysis" 
                className={({isActive}) => 
                  isActive 
                    ? "text-[#8BE9FD] font-medium" 
                    : "text-white hover:text-[#8FA3E3]"
                }
              >
                URL Analysis
              </NavLink>
              <NavLink 
                to="/email-analysis" 
                className={({isActive}) => 
                  isActive 
                    ? "text-[#8BE9FD] font-medium" 
                    : "text-white hover:text-[#8FA3E3]"
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