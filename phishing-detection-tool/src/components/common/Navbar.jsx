import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#383857] dark:bg-gray-900 shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className="text-xl font-bold text-white hover:text-[#8FA3E3]"
            >
              PhishGuard
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive 
                    ? 'text-[#8BE9FD] bg-opacity-25 bg-gray-700' 
                    : 'text-white hover:bg-gray-700 hover:text-[#8FA3E3]'
                }`
              }
              end
            >
              Dashboard
            </NavLink>
            <NavLink 
              to="/url-analysis" 
              className={({isActive}) => 
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive 
                    ? 'text-[#8BE9FD] bg-opacity-25 bg-gray-700' 
                    : 'text-white hover:bg-gray-700 hover:text-[#8FA3E3]'
                }`
              }
            >
              URL Analysis
            </NavLink>
            <NavLink 
              to="/email-analysis" 
              className={({isActive}) => 
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive 
                    ? 'text-[#8BE9FD] bg-opacity-25 bg-gray-700' 
                    : 'text-white hover:bg-gray-700 hover:text-[#8FA3E3]'
                }`
              }
            >
              Email Analysis
            </NavLink>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#383857] hover:text-[#8FA3E3] hover:bg-cyan-300 focus:outline-none"
              aria-label="Main menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={({isActive}) => 
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive 
                      ? 'text-[#8BE9FD] bg-opacity-25 bg-gray-700' 
                      : 'text-white hover:bg-gray-700 hover:text-[#8FA3E3]'
                  }`
                }
                end
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/url-analysis"
                onClick={() => setIsMenuOpen(false)}
                className={({isActive}) => 
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive 
                      ? 'text-[#8BE9FD] bg-opacity-25 bg-gray-700' 
                      : 'text-white hover:bg-gray-700 hover:text-[#8FA3E3]'
                  }`
                }
              >
                URL Analysis
              </NavLink>
              <NavLink
                to="/email-analysis"
                onClick={() => setIsMenuOpen(false)}
                className={({isActive}) => 
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive 
                      ? 'text-[#8BE9FD] bg-opacity-25 bg-gray-700' 
                      : 'text-white hover:bg-gray-700 hover:text-[#8FA3E3]'
                  }`
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