import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Hero Section */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            {t('hero_title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-primary font-medium">
            {t('hero_subtitle')}
          </p>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('hero_description')}
            </p>
          </div>
        </div>

        {/* Decorative element */}
        <div className="flex justify-center py-8">
          <div className="w-24 h-1 hero-gradient rounded-full animate-pulse" />
        </div>

        {/* CTA Button */}
        <div className="pt-8 animate-slide-up">
          <Link to="/projects">
            <Button 
              size="lg" 
              className="group px-8 py-4 text-lg font-semibold transition-smooth hover:scale-105 hover:shadow-lg bg-primary hover:bg-primary/90"
            >
              {t('my_projects')}
              <ArrowRight className="ml-2 h-5 w-5 transition-smooth group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>
    </div>
  );
};