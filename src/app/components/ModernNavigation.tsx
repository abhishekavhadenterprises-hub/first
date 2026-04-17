import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';

interface ModernNavigationProps {
  brandName?: string;
  brandLink?: string;
}

export const ModernNavigation = ({
  brandName = "Brand",
  brandLink = "/",
}: ModernNavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Feature', path: '/about' },
    { name: 'Product', path: '/products' },
    { name: 'Article', path: '/blog' },
    { name: 'Support', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 75) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-[100] w-full h-auto transition-all duration-300 ${
          isScrolled ? 'bg-[#18181F] shadow-lg' : ''
        }`}
      >
        <nav className="max-w-7xl h-16 mx-auto px-6 flex flex-row items-center justify-between gap-4">
          {/* Brand */}
          <Link
            to={brandLink}
            className="font-semibold text-2xl uppercase text-[#F5F5F7] hover:opacity-80 transition-opacity"
          >
            {brandName}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-row items-center gap-8 ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium text-base capitalize transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#F5F5F7]'
                    : 'text-[#B4B4B8] hover:text-[#F5F5F7]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Register Button - Desktop */}
          <div className="hidden md:block ml-8">
            <Link to="/contact">
              <button className="px-5 py-2 bg-[#F5F5F7] text-[#18181F] rounded-full font-medium text-base shadow-md hover:bg-[#E5E5E7] transition-all duration-200">
                Register
              </button>
            </Link>
          </div>

          {/* Burger Menu - Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative z-10 w-6 h-4 flex flex-col justify-between items-start"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-full h-[2px] bg-[#F5F5F7] transition-all duration-250 ${
                isMenuOpen ? 'rotate-[135deg] translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-[70%] h-[2px] bg-[#F5F5F7] transition-all duration-250 ${
                isMenuOpen ? 'opacity-0 -translate-x-4' : ''
              }`}
            />
            <span
              className={`block w-full h-[2px] bg-[#F5F5F7] transition-all duration-250 ${
                isMenuOpen ? 'rotate-[-135deg] -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed left-0 w-full h-auto overflow-hidden bg-[#18181F] shadow-lg transition-all duration-300 ${
            isMenuOpen ? 'top-0 pt-16 pb-16' : 'top-[-100%]'
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={toggleMenu}
                className="font-medium text-base uppercase text-[#F5F5F7] hover:text-[#4A7CFF] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 z-[-2] w-full h-full bg-black opacity-50 transition-all duration-300"
        />
      )}
    </>
  );
};