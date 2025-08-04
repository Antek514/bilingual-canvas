import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageModal } from './ImageModal';
import { ProjectCarousel } from './ProjectCarousel';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectCardProps {
  title: string;
  description: string;
  mainImage: string;
  smallImages: string[];
  link?: string;
  className?: string;
}

export const ProjectCard = ({ title, description, mainImage, smallImages, link, className = '' }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const { t } = useLanguage();

  const allImages = [mainImage, ...smallImages];

  const openModal = (imageIndex: number) => {
    setModalImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className={`bg-card rounded-2xl p-6 card-shadow hover:hover-shadow transition-smooth ${className}`}>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left side - Text content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{description}</p>
            </div>
            
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                variant="outline" 
                className="transition-smooth hover:scale-105 text-base md:text-lg px-6 py-3"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                {t('view_project')}
              </Button>
            </a>
          </div>

          {/* Right side - Images */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground mb-4">{title}</h4>
              <ProjectCarousel
                images={allImages}
                title={title}
                onImageClick={openModal}
              />
            </div>
          </div>
        </div>
      </div>

      <ImageModal
        images={allImages}
        initialIndex={modalImageIndex}
        title={title}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};