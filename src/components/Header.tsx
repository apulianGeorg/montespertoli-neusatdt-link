import { Link, useLocation } from "react-router-dom";
import { Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/verein", label: "Verein" },
    { path: "/aktuelles", label: "Aktuelles" },
    { path: "/beitritt", label: "Beitritt" },
  ];
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="Freunde von Montespertoli e.V." 
              className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-base font-medium transition-all duration-300 hover:text-primary group ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
            
            {/* Instagram Link */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </nav>
          
          {/* Mobile Menu - simplified for now */}
          <div className="md:hidden flex items-center gap-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
