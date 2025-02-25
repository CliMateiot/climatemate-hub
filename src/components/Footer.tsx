
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-20 pb-10">
      <div className="container">
        {/* Top section with newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-primary text-xl font-bold">Climate</span>
              <span className="bg-primary text-white px-2 py-1 rounded text-sm">hub</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Advanced IoT solutions designed to help businesses monitor, analyze, and optimize 
              their environmental impact, creating a sustainable future.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-300" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-300" aria-label="Twitter">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-300" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-300" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors duration-300">About Us</Link></li>
              <li><Link to="/industries" className="text-muted-foreground hover:text-primary transition-colors duration-300">Industries</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors duration-300">Blog</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <h4 className="font-medium mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-muted-foreground mb-4">Stay updated with the latest in IoT and climate tech</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white"
              />
              <Button className="flex-shrink-0">
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-200 mb-8 mt-10"></div>
        
        {/* Bottom section with copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-2">
          <p className="text-muted-foreground text-sm">
            © {currentYear} ClimateMate. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
