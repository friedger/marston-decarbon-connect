import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" onClick={closeMenu} className="font-heading font-bold text-lg sm:text-xl text-law-navy">
              <span className="hidden sm:inline">Law Office of Brett E. Marston</span>
              <span className="sm:hidden">B.E. Marston Law</span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={cn(
                  "font-medium transition-colors hover:text-law-navy",
                  isActive("/") ? "text-law-navy" : "text-muted-foreground"
                )}
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/about"
                className={cn(
                  "font-medium transition-colors hover:text-law-navy",
                  isActive("/about") ? "text-law-navy" : "text-muted-foreground"
                )}
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/contact"
                className={cn(
                  "font-medium transition-colors hover:text-law-navy",
                  isActive("/contact") ? "text-law-navy" : "text-muted-foreground"
                )}
              >
                {t('nav.contact')}
              </Link>
            </div>

            {/* Desktop Language Toggle */}
            <div className="hidden md:flex items-center space-x-2">
              <Button
                variant={language === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('en')}
                className="px-3 py-1 text-sm"
              >
                EN
              </Button>
              <Button
                variant={language === 'de' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('de')}
                className="px-3 py-1 text-sm"
              >
                DE
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Language Toggle */}
              <div className="flex items-center space-x-1">
                <Button
                  variant={language === 'en' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setLanguage('en')}
                  className="px-2 py-1 text-xs"
                >
                  EN
                </Button>
                <Button
                  variant={language === 'de' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setLanguage('de')}
                  className="px-2 py-1 text-xs"
                >
                  DE
                </Button>
              </div>
              <Button variant="ghost" size="sm" onClick={toggleMenu}>
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={closeMenu}></div>
          <div className="fixed top-0 right-0 h-full w-64 bg-card shadow-professional transform transition-transform duration-300 ease-in-out">
            <div className="pt-20 px-6">
              <div className="space-y-6">
                <Link
                  to="/"
                  onClick={closeMenu}
                  className={cn(
                    "block font-medium text-lg transition-colors hover:text-law-navy",
                    isActive("/") ? "text-law-navy" : "text-muted-foreground"
                  )}
                >
                  {t('nav.home')}
                </Link>
                <Link
                  to="/about"
                  onClick={closeMenu}
                  className={cn(
                    "block font-medium text-lg transition-colors hover:text-law-navy",
                    isActive("/about") ? "text-law-navy" : "text-muted-foreground"
                  )}
                >
                  {t('nav.about')}
                </Link>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className={cn(
                    "block font-medium text-lg transition-colors hover:text-law-navy",
                    isActive("/contact") ? "text-law-navy" : "text-muted-foreground"
                  )}
                >
                  {t('nav.contact')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;