import { ProjectCard } from '@/components/ProjectCard';
import { useLanguage } from '@/contexts/LanguageContext';
import discordMain from '@/assets/discord-main.jpg';
import discordSmall1 from '@/assets/discord-small1.jpg';
import discordSmall2 from '@/assets/discord-small2.jpg';
import discordSmall3 from '@/assets/discord-small3.jpg';
import project2Main from '@/assets/project2-main.jpg';
import project2Small1 from '@/assets/project2-small1.jpg';
import project2Small2 from '@/assets/project2-small2.jpg';
import project3Main from '@/assets/project3-main.jpg';
import project3Small1 from '@/assets/project3-small1.jpg';
import project3Small2 from '@/assets/project3-small2.jpg';

export const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('discord_server'),
      description: 'A comprehensive Discord server management system with advanced moderation tools, custom commands, and real-time analytics. Built with modern web technologies for seamless user experience.',
      mainImage: discordMain,
      smallImages: [discordSmall1, discordSmall2, discordSmall3],
      link: 'https://google.com',
    },
    {
      title: t('web_application'),
      description: 'Modern web application dashboard featuring responsive design, data visualization, and intuitive user interface. Optimized for performance and accessibility across all devices.',
      mainImage: project2Main,
      smallImages: [project2Small1, project2Small2],
      link: 'https://google.com',
    },
    {
      title: t('mobile_app'),
      description: 'Cross-platform mobile portfolio application showcasing responsive design principles and modern development practices. Features smooth animations and intuitive navigation.',
      mainImage: project3Main,
      smallImages: [project3Small1, project3Small2],
      link: 'https://google.com',
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('projects_title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('projects_subtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                mainImage={project.mainImage}
                smallImages={project.smallImages}
                link={project.link}
              />
            </div>
          ))}
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/3 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
};