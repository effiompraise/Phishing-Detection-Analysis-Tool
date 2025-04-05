import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-[#8FA3E3] focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-3 w-3" />
              ) : (
                <Bars3Icon className="h-3 w-3" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-2">
            <div className="px-2 pt-2">
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({isActive}) => 
                  isActive 
                    ? "block text-[#8BE9FD] font-medium px-3 py-2" 
                    : "block text-white hover:text-[#8FA3E3] px-3 py-2"
                }
                end
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/url-analysis"
                onClick={() => setIsOpen(false)}
                className={({isActive}) => 
                  isActive 
                    ? "block text-[#8BE9FD] font-medium px-3 py-2" 
                    : "block text-white hover:text-[#8FA3E3] px-3 py-2"
                }
              >
                URL Analysis
              </NavLink>
              <NavLink
                to="/email-analysis"
                onClick={() => setIsOpen(false)}
                className={({isActive}) => 
                  isActive 
                    ? "block text-[#8BE9FD] font-medium px-3 py-2" 
                    : "block text-white hover:text-[#8FA3E3] px-3 py-2"
                }
              >
                Email Analysis
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;