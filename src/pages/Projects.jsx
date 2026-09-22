import { motion } from 'framer-motion';
import { ScrollReveal, StaggerItem } from '../components/common/ScrollReveal';
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

        {/* Hero Section with featured image */}
        <ScrollReveal distance={40} className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-caption font-medium mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-accent-gold" aria-hidden="true" />
            Projects
          </motion.span>
          <h2 id="projects-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
            Concept / Demo Projects
          </h2>
          <p className="text-body-lg text-text-secondary">
            These are demonstration projects built to prove concepts and explore technology.
            Each demonstrates capabilities in ESP32, IoT, and embedded systems development.
          </p>
        </ScrollReveal>

        {/* FEATURED: Large projects-hero.jpg */}
        <ScrollReveal distance={50} className="mb-16">
          <div className="relative rounded-3xl overflow-hidden border border-accent-gold/20 shadow-lg shadow-accent-gold/10">
            <img
              src="/images/divits/projects-hero.jpg"
              alt="Featured project showcase"
              className="w-full h-[50vh] lg:h-[60vh] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/40 to-bg-primary/10" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-gold/20 border border-accent-gold/30 text-accent-gold text-caption font-medium mb-4">
                  Featured Project
                </span>
                <h3 className="font-heading font-bold text-display-lg text-text-primary mb-2">
                  IoT Controlled Power Distribution Box
                </h3>
                <p className="text-body text-text-secondary mb-4">
                  ESP32-based remote control system for lighting and electrical sockets using relays — 8-channel relay control, real-time power monitoring, MQTT integration.
                </p>
                <div className="flex items-center gap-3">
                  <span className="tag tag-primary">IoT & Automation</span>
                  <span className="text-caption text-text-muted">2024 · 6 weeks</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Split: Large text + projects-pcb.jpg */}
        <ScrollReveal distance={40} className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-accent-orange/20 shadow-lg shadow-accent-orange/10">
                <img
                  src="/images/divits/projects-pcb.jpg"
                  alt="PCB design and hardware"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-orange/10 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-orange/20 border border-accent-orange/30 text-accent-orange text-caption font-medium">
                    PCB Design
                  </span>
                </div>
              </div>
            </div>
            <ScrollReveal distance={30} className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-orange/10 border border-accent-orange/20 text-accent-orange text-caption font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-accent-orange" aria-hidden="true" />
                Hardware Engineering
              </span>
              <h2 className="font-heading font-bold text-display-lg text-text-primary mb-4">
                Precision at the bench
              </h2>
              <p className="text-body-lg text-text-secondary mb-6 leading-relaxed">
                From schematic capture through PCB layout to fabrication coordination,
                every board is engineered for reliability. We design, verify, and bring
                your hardware to life.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Schematic capture and component selection',
                  '2-6 layer PCB layout and fabrication',
                  'BOM management and assembly coordination',
                  'Bring-up testing and validation',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-orange mt-2 flex-shrink-0" aria-hidden="true" />
                    <span className="text-body text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
              <Button variant="primary" as={Link} to="/order?project=smart-automation-controller">
                Request a Hardware Build
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Button>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        {/* Two supporting project cards */}
        <ScrollReveal distance={30} className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {[
              {
                id: 'esp32-sensor-system',
                title: 'ESP32 Sensor System',
                desc: 'A modular environmental monitoring platform supporting up to 16 sensor nodes via ESP-NOW mesh network. Temperature, humidity, soil moisture, light, and CO2 levels with Grafana dashboards.',
                category: 'Sensor & Monitoring',
                tags: ['ESP32', 'ESP-NOW', 'Mesh Network', 'Grafana'],
                year: '2024',
                image: '/images/divits/projects-robotics.jpg',
              },
              {
                id: 'smart-automation-controller',
                title: 'Smart Automation Controller',
                desc: 'A versatile automation controller as a drop-in replacement for commercial PLCs. 12 digital inputs, 8 outputs, 4 analog inputs, Modbus RTU, Ethernet, Wi-Fi, and IEC 61131-3 runtime.',
                category: 'Industrial Automation',
                tags: ['ESP32', 'Modbus', 'CAN Bus', 'IEC 61131-3'],
                year: '2024',
                image: '/images/divits/Projects.jpg',
              },
            ].map((project, index) => (
              <StaggerItem key={project.id} delay={index * 0.1}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  className="group"
                >
                  <GlassCard
                    variant="elevated"
                    hover
                    padding="none"
                    border="accent"
                    className="h-full flex flex-col overflow-hidden"
                  >
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent" aria-hidden="true" />
                      <div className="absolute top-4 left-4">
                        <span className="tag tag-primary">{project.category}</span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span className="text-caption text-text-muted">{project.year}</span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-heading font-bold text-heading-lg text-text-primary mb-2">
                        {project.title}
                      </h3>
                      <p className="text-body text-text-secondary mb-4 text-sm leading-relaxed flex-1 line-clamp-3">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-5" aria-label="Technologies">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                      <Button variant="primary" size="sm" className="w-full mt-auto" as={Link} to={`/order?project=${project.id}`}>
                        Request Similar Project
                      </Button>
                    </div>
                  </GlassCard>
                </motion.article>
              </StaggerItem>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal distance={30} className="mt-16 text-center">
          <div className="relative p-8 lg:p-16 rounded-3xl bg-gradient-to-br from-accent-gold/5 via-bg-elevated/50 to-bg-card/50 border border-accent-gold/20 backdrop-blur-xl">
            <h2 className="font-heading font-bold text-display-md text-text-primary mb-4">
              Have a project idea?
            </h2>
            <p className="text-body-lg text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              These are demonstration projects built to prove concepts and explore technology.
              Want to build something of your own? Let us help.
            </p>
            <Button variant="primary" size="lg" as={Link} to="/order">
              Request a Project
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
