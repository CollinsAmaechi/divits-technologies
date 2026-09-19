import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, MessageSquare, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { PROJECT_TYPES, BUDGET_RANGES, TIMELINES } from '../../utils/constants';
import { siteConfig } from '../../config/siteConfig';
import { formatWhatsAppLink } from '../../utils/helpers';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Select from '../ui/Select';
import FileUpload from '../ui/FileUpload';
import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';



const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  whatsapp: z.string().min(10, 'Please enter a valid WhatsApp number').optional().or(z.literal('')),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().min(1, 'Please select a budget range'),
  description: z.string().min(50, 'Please provide more details (at least 50 characters)').max(5000),
  deadline: z.string().min(1, 'Please select a timeline'),
  files: z.array(z.instanceof(File)).max(5, 'Maximum 5 files allowed').optional(),
});

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, submitting, success, error
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      projectType: '',
      budget: '',
      deadline: '',
      whatsapp: '',
    },
  });

  const watchedFiles = watch('files');

  const onSubmit = async (data) => {
    setSubmitStatus('submitting');
    setSubmitMessage('');

    try {
      // Prepare form data for submission
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('whatsapp', data.whatsapp || 'Not provided');
      formData.append('projectType', data.projectType);
      formData.append('budget', data.budget);
      formData.append('description', data.description);
      formData.append('deadline', data.deadline);

      if (data.files && data.files.length > 0) {
        data.files.forEach((file, index) => {
          formData.append(`file_${index}`, file);
        });
      }

      // Submit to Formspree or your endpoint
      const response = await fetch(siteConfig.form.endpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your project inquiry has been sent. I\'ll get back to you within 24 hours.');
        reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Something went wrong. Please try again or contact me directly via WhatsApp or email.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-32 overflow-hidden"
      aria-labelledby="contact-title"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
      </div>

      <div className="section-container relative z-10 w-full max-w-full">
        {/* Section Header */}
        <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-caption font-medium mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-accent-gold" aria-hidden="true" />
            Get in Touch
          </motion.span>
          <h2 id="contact-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
            Start Your Project
          </h2>
          <p className="text-body-lg text-text-secondary">
            Tell me about your project idea. I'll review the details and get back to you with thoughts,
            questions, and a rough estimate within 24 hours.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <ScrollReveal distance={30} delay={0.1}>
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="font-heading font-semibold text-heading-lg text-text-primary">
                  Let's Talk
                </h3>
                <p className="text-body text-text-secondary">
                  The best way to start is by filling out the form on the right. I'll review your project
                  details and respond with initial thoughts, clarifying questions, and a rough timeline estimate.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <motion.a
                  href={formatWhatsAppLink(siteConfig.contact.whatsapp.number, siteConfig.contact.whatsapp.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-bg-elevated/50 border border-border/30 hover:border-accent-gold/30 hover:bg-accent-gold/5 transition-all duration-300"
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-accent-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform"
                   
                  >
                    <MessageSquare className="w-6 h-6 text-accent-gold" aria-hidden="true" />
                  </motion.div>
                  <div>
                    <p className="font-heading font-medium text-body text-text-primary">WhatsApp (Fastest)</p>
                    <p className="text-body-sm text-text-secondary">{siteConfig.contact.whatsapp.displayNumber}</p>
                    <p className="text-caption text-text-muted mt-1">Usually replies within {siteConfig.contact.responseTime.toLowerCase()}</p>
                  </div>
                </motion.a>

                <motion.a
                  href={`mailto:${siteConfig.contact.email}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-bg-elevated/50 border border-border/30 hover:border-accent-gold/30 hover:bg-accent-gold/5 transition-all duration-300"
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform"
                  >
                    <Mail className="w-6 h-6 text-accent-gold" aria-hidden="true" />
                  </motion.div>
                  <div>
                    <p className="font-heading font-medium text-body text-text-primary">Email</p>
                    <p className="text-body-sm text-text-secondary">{siteConfig.contact.email}</p>
                    <p className="text-caption text-text-muted mt-1">For detailed project documentation</p>
                  </div>
                </motion.a>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-bg-elevated/50 border border-border/30"
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center"
                  >
                    <MapPin className="w-6 h-6 text-accent-gold" aria-hidden="true" />
                  </motion.div>
                  <div>
                    <p className="font-heading font-medium text-body text-text-primary">Location</p>
                    <p className="text-body-sm text-text-secondary">{siteConfig.business.location.city}, {siteConfig.business.location.country}</p>
                    <p className="text-caption text-text-muted mt-1">{siteConfig.contact.timezone}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-bg-elevated/50 border border-border/30"
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-accent-orange/10 flex items-center justify-center"
                  >
                    <Clock className="w-6 h-6 text-accent-orange" aria-hidden="true" />
                  </motion.div>
                  <div>
                    <p className="font-heading font-medium text-body text-text-primary">Availability</p>
                    <p className="text-body-sm text-text-secondary">{siteConfig.contact.businessHours}</p>
                    <p className="text-caption text-text-muted mt-1">Remote work worldwide</p>
                  </div>
                </motion.div>
              </div>

              {/* WhatsApp Quick Actions */}
              <div className="pt-4 border-t border-border/30">
                <h4 className="font-heading font-medium text-body-sm text-text-secondary mb-4">Quick Start</h4>
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href={formatWhatsAppLink(siteConfig.contact.whatsapp.number, 'Hi! I need a custom ESP32 project for IoT sensor monitoring.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-accent-gold/20 border border-accent-gold/30 text-accent-gold text-body-sm font-medium hover:bg-accent-gold/30 hover:border-accent-gold/50 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 inline mr-1" aria-hidden="true" />
                    ESP32 Sensor Project
                  </motion.a>
                  <motion.a
                    href={formatWhatsAppLink(siteConfig.contact.whatsapp.number, 'Hi! I want to build a smart home automation system with ESP32.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-accent-gold/10 border border-accent-gold/30 text-accent-gold text-body-sm font-medium hover:bg-accent-gold/20 hover:border-accent-gold/50 transition-colors"
                  >
                    <svg className="w-4 h-4 inline mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    Smart Home Automation
                  </motion.a>
                  <motion.a
                    href={formatWhatsAppLink(siteConfig.contact.whatsapp.number, 'Hi! I need help troubleshooting an existing Arduino/ESP32 project.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-accent-gold/10 border border-accent-gold/30 text-accent-gold text-body-sm font-medium hover:bg-accent-gold/20 hover:border-accent-gold/50 transition-colors"
                  >
                    <svg className="w-4 h-4 inline mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    Troubleshooting Help
                  </motion.a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal distance={30} delay={0.2}>
            <GlassCard variant="elevated" padding="xl" border="accent" className="relative overflow-hidden">
              <div className="absolute inset-0" aria-hidden="true">
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-6" noValidate>
                {/* Status Messages */}
                <AnimatePresence mode="wait">
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-accent-gold/20 border border-accent-gold/30 text-accent-gold"
                      role="alert"
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                      <p className="text-body-sm">{submitMessage}</p>
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-accent-orange/20 border border-accent-orange/30 text-accent-orange"
                      role="alert"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                      <p className="text-body-sm">{submitMessage}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Form Fields */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    placeholder="John Doe"
                    error={errors.name?.message}
                    required
                    {...register('name')}
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="john@example.com"
                    error={errors.email?.message}
                    required
                    {...register('email')}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    label="WhatsApp Number"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    error={errors.whatsapp?.message}
                    hint="Optional but recommended for faster communication"
                    {...register('whatsapp')}
                  />
                  <Select
                    label="Project Type"
                    placeholder="Select project type"
                    options={PROJECT_TYPES}
                    error={errors.projectType?.message}
                    required
                    {...register('projectType')}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Select
                    label="Budget Range"
                    placeholder="Select budget"
                    options={BUDGET_RANGES}
                    error={errors.budget?.message}
                    required
                    {...register('budget')}
                  />
                  <Select
                    label="Timeline"
                    placeholder="Select timeline"
                    options={TIMELINES}
                    error={errors.deadline?.message}
                    required
                    {...register('deadline')}
                  />
                </div>

                <Textarea
                  label="Project Description"
                  placeholder="Describe your project in detail: what you want to build, what problem it solves, any specific requirements, hardware you already have, preferred technologies, etc."
                  error={errors.description?.message}
                  required
                  rows={6}
                  showCharCount
                  maxLength={5000}
                  hint="Minimum 50 characters. Include as much detail as possible for an accurate estimate."
                  {...register('description')}
                />

                <FileUpload
                  label="Attach Files (Optional)"
                  hint="Schematics, requirements docs, reference images, existing code (.ino, .cpp, .h), etc. Max 10MB each, 5 files total."
                  accept=".pdf,.png,.jpg,.jpeg,.zip,.rar,.ino,.cpp,.h,.c"
                  multiple
                  maxFiles={5}
                  maxSize={10 * 1024 * 1024}
                  onFilesChange={(files) => setValue('files', files)}
                  error={errors.files?.message}
                  {...register('files')}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  loading={isSubmitting || submitStatus === 'submitting'}
                  disabled={submitStatus === 'submitting'}
                >
                  {isSubmitting || submitStatus === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" aria-hidden="true" />
                      Sent Successfully!
                    </>
                  ) : (
                    <>
                      Send Project Inquiry
                      <Send className="w-5 h-5" aria-hidden="true" />
                    </>
                  )}
                </Button>

                <p className="text-center text-caption text-text-muted">
                  By submitting, you agree to be contacted regarding your project inquiry. Your information is never shared.
                </p>
              </form>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;