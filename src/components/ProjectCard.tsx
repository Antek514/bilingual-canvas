import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageModal } from './ImageModal';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectCardProps {
  title: string;
  description: string;
  mainImage: string;
  smallImages: string[];
  className?: string;
}

export const ProjectCard = ({ title, description, mainImage, smallImages, className = '' }: ProjectCardProps) => {
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
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Left side - Text content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
            
            <Button 
              variant="outline" 
              className="mt-4 transition-smooth hover:scale-105"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              {t('view_project')}
            </Button>
          </div>

          {/* Right side - Images */}
          <div className="space-y-4">
            {/* Main image */}
            <div 
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => openModal(0)}
            >
              <img
                src={mainImage}
                alt={title}
                className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth flex items-center justify-center">
                <ExternalLink className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
            </div>

            {/* Small images */}
            {smallImages.length > 0 && (
              <div className="grid grid-cols-2 gap-3">
                {smallImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer overflow-hidden rounded-lg transform hover:scale-105 transition-smooth"
                    onClick={() => openModal(index + 1)}
                    style={{ 
                      transform: `translateY(${(index + 1) * 4}px) translateX(${(index + 1) * 2}px)`,
                      zIndex: smallImages.length - index 
                    }}
                  >
                    <img
                      src={image}
                      alt={`${title} - Detail ${index + 1}`}
                      className="w-full h-24 object-cover transition-smooth group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth" />
                  </div>
                ))}
              </div>
            )}
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