import { Mail, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const Contact = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Mail,
      label: t('email_me'),
      value: 'hello@example.com',
      href: 'mailto:hello@example.com',
      variant: 'outline' as const,
    },
    {
      icon: Phone,
      label: t('call_me'),
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      variant: 'outline' as const,
    },
    {
      icon: MessageCircle,
      label: 'Discord: .cyjan.',
      value: 'Discord',
      href: '#',
      variant: 'default' as const,
      className: 'bg-[hsl(var(--discord-blue))] hover:bg-[hsl(var(--discord-blue))]/90 text-white',
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center space-y-12 animate-fade-in">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            {t('contact_title')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('contact_subtitle')}
          </p>
        </div>

        {/* Contact Methods */}
        <div className="space-y-6">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            
            return (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <a
                  href={method.href}
                  className="block group"
                  target={method.href.startsWith('mailto:') || method.href.startsWith('tel:') ? '_self' : '_blank'}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <Button
                    variant={method.variant}
                    size="lg"
                    className={`w-full max-w-md h-16 text-lg font-semibold transition-smooth hover:scale-105 hover:shadow-lg group-hover:shadow-lg ${
                      method.className || ''
                    }`}
                  >
                    <IconComponent className="h-6 w-6 mr-3" />
                    <div className="flex flex-col items-start">
                      <span className="text-sm opacity-80">{method.label}</span>
                      <span>{method.value}</span>
                    </div>
                  </Button>
                </a>
              </div>
            );
          })}
        </div>

        {/* Decorative element */}
        <div className="flex justify-center pt-8">
          <div className="w-24 h-1 hero-gradient rounded-full animate-pulse" />
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>
    </div>
  );
};