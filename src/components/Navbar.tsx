
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Industries', path: '/industries' },
    { name: 'Blog', path: '/blog' },
    { name: 'Privacy Policy', path: '/privacy' }
    // Contact removed as per request
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight"
          onClick={closeMenu}
        >
          <img
            src="/lovable-uploads/f6e9df1e-74fb-4d4b-828a-e52460ccd8e3.png"
            alt="Cliamte-IoT logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-sm font-medium transition-colors duration-300 ${
                isActive(link.path)
                  ? 'text-primary font-semibold after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-full after:bg-primary'
                  : 'text-foreground/80 hover:text-primary link-underline'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button size="sm" className="ml-4">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-white pt-24 md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container flex flex-col space-y-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg font-medium ${
                isActive(link.path) ? 'text-primary font-semibold' : 'text-foreground/80'
              }`}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          <Button className="mt-6 w-full">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

