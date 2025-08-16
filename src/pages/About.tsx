import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle, Award, Globe, Leaf } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 bg-background">
      {/* Header Section */}
      <section className="py-16 bg-gradient-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-heading font-bold text-law-navy mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="shadow-card">
            <CardContent className="p-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t('about.bio')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-law-navy mb-4">
                    Professional Background
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-eco-green mt-1 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Environmental Law & Regulatory Compliance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-eco-green mt-1 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">International Business Transactions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-eco-green mt-1 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Corporate Formation & Governance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-eco-green mt-1 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Clean Energy & Sustainability Law</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-law-navy mb-4">
                    Location & Practice
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Globe className="w-5 h-5 text-law-navy mr-3" />
                      <span className="text-muted-foreground">Based in Bethesda, Maryland</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-law-navy mr-3" />
                      <span className="text-muted-foreground">Licensed to Practice Law</span>
                    </div>
                    <div className="flex items-center">
                      <Leaf className="w-5 h-5 text-eco-green mr-3" />
                      <span className="text-muted-foreground">Sustainability Law Specialist</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-eco-light/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-law-navy mb-4">
              {t('about.expertise.title')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-card hover:shadow-professional transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Leaf className="w-12 h-12 text-eco-green mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-law-navy mb-2">
                  {t('about.expertise.env')}
                </h3>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-professional transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-law-navy mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-law-navy mb-2">
                  {t('about.expertise.corp')}
                </h3>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-professional transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Globe className="w-12 h-12 text-law-navy mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-law-navy mb-2">
                  {t('about.expertise.intl')}
                </h3>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-professional transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-eco-green mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-law-navy mb-2">
                  {t('about.expertise.clean')}
                </h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;