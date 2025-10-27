import { Link, useLocation } from "react-router-dom";
import { Instagram, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { path: "/", label: t("Home", "Home") },
    { path: "/verein", label: t("Verein", "Associazione") },
    { path: "/aktuelles", label: t("Aktuelles", "Notizie") },
    { path: "/beitritt", label: t("Beitritt", "Adesione") },
  ];
  
  const vereinSubLinks = [
    { path: "/montespertoli", label: "Montespertoli" },
    { path: "/neustadt", label: "Neustadt a.d. Aisch" },
    { path: "/aktivitaeten", label: t("Aktivitäten", "Attività") },
    { path: "/historie", label: t("Historie", "Storia") },
    { path: "/sponsoren", label: t("Sponsoren", "Sponsor") },
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
          
          {/* Language & Menu */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-2 bg-muted/50 rounded-full p-1">
              <button
                onClick={() => setLanguage("de")}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  language === "de"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                DE
              </button>
              <button
                onClick={() => setLanguage("it")}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  language === "it"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                IT
              </button>
            </div>
            
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menü öffnen</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>{t("Navigation", "Navigazione")}</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <div key={link.path}>
                      <Link
                        to={link.path}
                        onClick={() => link.path !== "/verein" && setIsOpen(false)}
                        className={`text-lg font-medium transition-colors hover:text-primary py-2 block ${
                          isActive(link.path)
                            ? "text-primary border-l-4 border-primary pl-4"
                            : "text-foreground/80 pl-4"
                        }`}
                      >
                        {link.label}
                      </Link>
                      
                      {/* Untermenü für Verein */}
                      {link.path === "/verein" && (
                        <div className="ml-8 mt-3 space-y-3 border-l-2 border-border/50 pl-4">
                          {vereinSubLinks.map((subLink) => (
                            <Link
                              key={subLink.path}
                              to={subLink.path}
                              onClick={() => setIsOpen(false)}
                              className={`text-base transition-colors hover:text-primary block ${
                                isActive(subLink.path)
                                  ? "text-primary font-medium"
                                  : "text-foreground/60"
                              }`}
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
