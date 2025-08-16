import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { Scale, Globe, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-law-office.jpg";
import germanExpansionImage from "@/assets/german-expansion.jpg";
import decarbonizationImage from "@/assets/decarbonization.jpg";

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-gradient-hero text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(33, 67, 152, 0.8), rgba(34, 139, 34, 0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            {t('home.hero.subtitle')}
          </p>
          <Button size="lg" className="bg-white text-law-navy hover:bg-gray-100">
            {t('home.hero.cta')}
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-law-navy mb-4">
              {t('home.services.title')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Decarbonization Law */}
            <Card className="shadow-card hover:shadow-professional transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img 
                    src={decarbonizationImage} 
                    alt="Decarbonization" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <Leaf className="w-12 h-12 text-eco-green mb-4" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-law-navy mb-4">
                  {t('home.services.decarb.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('home.services.decarb.desc')}
                </p>
              </CardContent>
            </Card>

            {/* German Business Expansion */}
            <Card className="shadow-card hover:shadow-professional transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img 
                    src={germanExpansionImage} 
                    alt="German Business Expansion" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <Globe className="w-12 h-12 text-law-navy mb-4" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-law-navy mb-4">
                  {t('home.services.german.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('home.services.german.desc')}
                </p>
              </CardContent>
            </Card>

            {/* Startup Legal Services */}
            <Card className="shadow-card hover:shadow-professional transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Scale className="w-12 h-12 text-law-gold mb-4" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-law-navy mb-4">
                  {t('home.services.startup.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('home.services.startup.desc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Ready to Navigate Your Legal Challenges?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to discuss how we can support your business objectives.
          </p>
          <Button size="lg" className="bg-white text-law-navy hover:bg-gray-100">
            {t('home.hero.cta')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;