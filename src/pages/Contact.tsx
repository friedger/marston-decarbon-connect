import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24 bg-background">
      {/* Header Section */}
      <section className="py-12 sm:py-16 bg-gradient-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-law-navy mb-6 leading-tight">
            {t('contact.title')}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading text-law-navy">
                    {t('contact.office')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-law-navy mb-2">
                      {t('contact.attorney')}
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-eco-green mr-3" />
                        <div>
                          <p className="font-medium">Law Office of Brett E. Marston</p>
                          <p className="text-muted-foreground">{t('contact.address')}</p>
                          <p className="text-muted-foreground">United States</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-law-navy mr-3" />
                        <div>
                          <p className="font-medium">{t('contact.phone')}</p>
                          <p className="text-muted-foreground">+1 (301) 555-0123</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-law-navy mr-3" />
                        <div>
                          <p className="font-medium">{t('contact.email')}</p>
                          <p className="text-muted-foreground">brett@marstonlaw.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-eco-green mr-3" />
                        <div>
                          <p className="font-medium">Business Hours</p>
                          <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                          <p className="text-muted-foreground">German Hours: 3:00 PM - 12:00 AM CET</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Specializations */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl font-heading text-law-navy">
                    Key Practice Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Environmental Compliance & Regulatory Affairs</li>
                    <li>• Decarbonization Strategy & Implementation</li>
                    <li>• German-US Business Expansion</li>
                    <li>• Corporate Formation & Governance</li>
                    <li>• Clean Energy Project Development</li>
                    <li>• International Business Transactions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-law-navy">
                  {t('contact.form.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-law-navy">
                      {t('contact.form.name')}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-law-navy">
                      {t('contact.form.email')}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium text-law-navy">
                      {t('contact.form.subject')}
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-law-navy">
                      {t('contact.form.message')}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-law-navy hover:bg-law-navy/90"
                  >
                    {t('contact.form.send')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;