import { motion } from 'framer-motion';
import { Github, ExternalLink, Tag } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/common/ScrollReveal';
import { projects } from '../data/projects';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20 lg:py-32 overflow-hidden"
      aria-labelledby="projects-title"
    >
      <div className="absolute inset-0" aria-hidden="true" />
      <div className="section-container relative z-10">
        <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-caption font-medium mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-accent-gold" aria-hidden="true" />
            Featured Projects
          </motion.span>
          <h2 id="projects-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
            Selected Work
          </h2>
          <p className="text-body-lg text-text-secondary">
            Concept projects demonstrating ESP32, IoT, and embedded systems capabilities. Each project includes
            custom hardware design, firmware development, and system integration.
          </p>
        </ScrollReveal>

        <ScrollReveal distance={30} delay={0.1}>
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <StaggerItem key={project.id} delay={index * 0.1}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  className="group"
                >
                  <GlassCard
                    variant="elevated"
                    hover={true}
                    padding="none"
                    border="accent"
                    className="h-full flex flex-col overflow-hidden"
                    glow={index % 3 === 0}
                    glowColor={index % 3 === 0 ? 'gold' : index % 3 === 1 ? 'amber' : 'yellow'}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-bg-elevated to-bg-secondary" />
                      <div className="absolute inset-0 flex items-center justify-center relative z-10">
                        <svg
                          className="w-32 h-32 text-border-light"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          aria-hidden="true"
                        >
                          <rect x="2" y="3" width="20" height="14" rx="2" />
                          <path d="M8 3v14M16 3v14M2 9h20" />
                          <circle cx="12" cy="10" r="2" />
                        </svg>
                      </div>

                      {project.isConcept && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute top-4 left-4"
                        >
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-orange/20 border border-accent-orange/30 text-accent-orange text-caption font-medium">
                            <Tag className="w-3 h-3" aria-hidden="true" />
                            {project.conceptLabel}
                          </span>
                        </motion.div>
                      )}

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <span className="tag tag-primary">
                          {project.category}
                        </span>
                        <span className="text-caption text-text-muted">{project.year}</span>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="font-heading font-bold text-heading-lg text-text-primary flex-1">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg text-text-muted hover:text-accent-gold hover:bg-accent-gold/10 transition-colors"
                              aria-label="View on GitHub"
                            >
                              <Github className="w-5 h-5" aria-hidden="true" />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="text-body text-text-secondary mb-5 line-clamp-3 flex-1">
                        {project.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-5" aria-label="Technologies used">
                        {project.tags.slice(0, 6).map((tag, tagIndex) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 + tagIndex * 0.03 }}
                            className="tag"
                          >
                            {tag}
                          </motion.span>
                        ))}
                        {project.tags.length > 6 && (
                          <span className="tag">
                            +{project.tags.length - 6} more
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                        <Button
                          variant="primary"
                          size="sm"
                          className="flex-1"
                          as={Link}
                          to={`/order?project=${project.id}`}
                        >
                          Request Similar Project
                        </Button>
                        {project.githubUrl && (
                          <Button
                            variant="ghost"
                            size="sm"
                            leftIcon={<ExternalLink className="w-4 h-4" aria-hidden="true" />}
                            onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                          >
                            Code
                          </Button>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollReveal>

        <ScrollReveal distance={20} delay={0.3} className="mt-16 text-center">
          <p className="text-body-lg text-text-secondary mb-6">
            Have a project idea? Let's discuss how I can bring it to life.
          </p>
          <Button
            variant="primary"
            size="lg"
            as={Link}
            to="/order"
          >
            Request a Project
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
