import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-sm border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-heading font-bold text-xl text-law-navy">
            Law Office of Brett E. Marston
          </Link>

          {/* Navigation Links */}
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

          {/* Language Toggle */}
          <div className="flex items-center space-x-2">
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
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;