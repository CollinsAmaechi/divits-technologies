import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import React from 'react';
import {
  Mail,
  MessageSquare,
  Clock,
  Upload,
  CheckCircle,
  AlertCircle,
  Loader2,
  ChevronDown,
  X,
  FileText,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { siteConfig } from '../config/siteConfig';
import { formatWhatsAppLink } from '../utils/helpers';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Select from '../components/ui/Select';
import FileUpload from '../components/ui/FileUpload';
import Button from '../components/ui/Button';
import GlassCard from '../components/ui/GlassCard';
import { Link, useSearchParams } from 'react-router-dom';

const orderSchema = z.object({
  service: z.string().min(1, 'Please select a service'),
  description: z.string().min(50, 'Please describe your project (at least 50 characters)').max(5000),
  budget: z.string().min(1, 'Please enter your proposed budget'),
  deadline: z.string().min(1, 'Please select a deadline'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  whatsapp: z.string().min(10, 'Please enter a valid WhatsApp/phone number').optional().or(z.literal('')),
  files: z.array(z.instanceof(File)).max(5, 'Maximum 5 files allowed').optional(),
});

const DEADLINE_OPTIONS = [
  { value: '', label: 'Select a deadline' },
  { value: 'no-deadline', label: 'No specific deadline' },
  { value: '1-week', label: 'Within 1 week' },
  { value: '1-2-weeks', label: '1-2 weeks' },
  { value: '2-4-weeks', label: '2-4 weeks' },
  { value: '1-2-months', label: '1-2 months' },
  { value: 'custom', label: 'Custom' },
];

const Order = () => {
  const [currentStep, setCurrentStep] = useState(1); // 1: details, 2: review, 3: success
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [searchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      service: '',
      description: '',
      budget: '',
      deadline: '',
      name: '',
      email: '',
      whatsapp: '',
      files: [],
    },
  });

  const watchedFiles = watch('files');
  const watchedService = watch('service');
  const watchedBudget = watch('budget');
  const watchedDeadline = watch('deadline');
  const watchedName = watch('name');
  const watchedEmail = watch('email');
  const watchedWhatsapp = watch('whatsapp');
  const watchedDescription = watch('description');
  const watchedServiceParam = watch('service');

  // Determine pillar context for visual indicator
  const pillarContext = searchParams.get('pillar');
  const pillarLabels = {
    assist: { label: 'DIVITS Assist', color: 'amber' },
    build: { label: 'DIVITS Build', color: 'orange' },
    iot: { label: 'DIVITS IoT', color: 'iot' },
    home: { label: 'DIVITS Home', color: 'home' },
  };
  const activePillar = pillarContext ? pillarLabels[pillarContext] : null;

  const selectedServiceData = services.find((s) => s.id === watchedService);

  // Pre-selection: read service/project/pillar from URL query params on mount only
  const hasPreSelected = useRef(false);
  useEffect(() => {
    if (hasPreSelected.current) return;
    hasPreSelected.current = true;

    const serviceParam = searchParams.get('service');
    const projectParam = searchParams.get('project');
    const pillarParam = searchParams.get('pillar');

    // Pillar pre-selection maps to the first service in that pillar
    const pillarServiceMap = {
      assist: { serviceId: 'esp32-development', label: 'DIVITS Assist' },
      build: { serviceId: 'custom-hardware', label: 'DIVITS Build' },
      iot: { serviceId: 'iot-systems', label: 'DIVITS IoT' },
      home: { serviceId: 'smart-home-automation', label: 'DIVITS Home' },
    };

    if (pillarParam && pillarServiceMap[pillarParam]) {
      const pillarInfo = pillarServiceMap[pillarParam];
      const matchingService = services.find((s) => s.id === pillarInfo.serviceId);
      if (matchingService) {
        setValue('service', matchingService.id, { shouldValidate: false });
        setValue('description', `I need help with ${pillarInfo.label}. ${matchingService.description}`, { shouldValidate: false });
      }
    }

    // Handle service pre-selection (takes priority if both pillar and service params present)
    if (serviceParam) {
      const matchingService = services.find((s) => s.id === serviceParam);
      if (matchingService && !pillarParam) {
        setValue('service', matchingService.id, { shouldValidate: false });
        setValue('description', matchingService.description, { shouldValidate: false });
      }
    }

    // Handle project pre-selection
    if (projectParam) {
      const matchingProject = projects.find((p) => p.id === projectParam);

      if (matchingProject) {
        const projectServiceMap = {
          'iot-power-distribution': 'iot-systems',
          'esp32-sensor-system': 'sensor-monitoring',
          'smart-automation-controller': 'custom-hardware',
        };

        const matchingServiceId = projectServiceMap[matchingProject.id];

        if (matchingServiceId) {
          setValue('service', matchingServiceId, { shouldValidate: false });
        }

        const projectDescription = [
          `I want a project similar to "${matchingProject.title}".`,
          '',
          matchingProject.fullDescription,
          '',
          'Key features:',
          ...matchingProject.features.map((feature) => `- ${feature}`),
          '',
          'Technologies:',
          matchingProject.technologies.join(', '),
        ].join('\n');

        setValue('description', projectDescription, {
          shouldValidate: false,
        });
      }
    }
  }, []);

  const onSubmit = async (data) => {
    setSubmitStatus('submitting');
    setSubmitMessage('');

    try {
      const formData = new FormData();
      formData.append('service', data.service);
      formData.append('description', data.description);
      formData.append('budget', data.budget);
      formData.append('deadline', data.deadline);
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('whatsapp', data.whatsapp || 'Not provided');
      formData.append('project', data.service);

      // Upload attachments to Cloudinary first
      if (data.files && data.files.length > 0) {
        const uploadedFiles = [];

        for (const file of data.files) {
          const uploadData = new FormData();
          uploadData.append('file', file);
          uploadData.append('upload_preset', 'divits_orders');

          const uploadResponse = await fetch(
            'https://api.cloudinary.com/v1_1/yiaine0j/auto/upload',
            {
              method: 'POST',
              body: uploadData,
            }
          );

          if (!uploadResponse.ok) {
            const uploadError = await uploadResponse.json().catch(() => ({}));
            throw new Error(
              uploadError?.error?.message || `File upload failed (${uploadResponse.status})`
            );
          }

          const uploaded = await uploadResponse.json();

          uploadedFiles.push({
            name: file.name,
            url: uploaded.secure_url,
          });
        }

        formData.append(
          'attachments',
          uploadedFiles
            .map(file => `${file.name}: ${file.url}`)
            .join('\n')
        );
      }

      const response = await fetch(siteConfig.form.endpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Your project request has been received! I will review it and contact you within 24 hours to discuss the details and final price.');
        setCurrentStep(3);
        reset();
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Formspree error:', errorData);
        throw new Error(
          errorData?.errors?.map(e => e.message || e.code).join(', ') ||
          `Submission failed (${response.status})`
        );
      }
    } catch (error) {
      console.error('Order submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage(error.message || 'Something went wrong. Please try again or contact me directly via WhatsApp or email.');
    }
  };

  const getBudgetLabel = (value) => {
    const labels = {
      'under-500': 'Under ₦50,000',
      '500-1000': '₦50,000 - ₦100,000',
      '1000-2500': '₦100,000 - ₦250,000',
      '2500-5000': '₦250,000 - ₦500,000',
      '5000-10000': '₦500,000 - ₦1,000,000',
      '10000+': '₦1,000,000+',
      'discuss': "Let's discuss",
    };
    return labels[value] || value;
  };

  const getDeadlineLabel = (value) => {
    const labels = {
      'no-deadline': 'No specific deadline',
      '1-week': 'Within 1 week',
      '1-2-weeks': '1-2 weeks',
      '2-4-weeks': '2-4 weeks',
      '1-2-months': '1-2 months',
      'custom': 'Custom',
    };
    return labels[value] || value;
  };

  return (
    <section
      id="order"
      className="relative py-20 lg:py-32 overflow-hidden"
      aria-labelledby="order-title"
    >
      <div className="absolute inset-0" aria-hidden="true" />
      <div className="section-container relative z-10">
        <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-caption font-medium mb-4 border ${
              activePillar
                ? `bg-accent-${activePillar.color}/10 border-accent-${activePillar.color}/20 text-accent-${activePillar.color}`
                : 'bg-accent-gold/10 border-accent-gold/20 text-accent-gold'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${activePillar ? `bg-accent-${activePillar.color}` : 'bg-accent-gold'}`} aria-hidden="true" />
            {activePillar ? activePillar.label : 'Custom Project Request'}
          </motion.span>
          <h2 id="order-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
            {activePillar ? `${activePillar.label} — Project Request` : 'Custom Project Request'}
          </h2>
          <p className="text-body-lg text-text-secondary">
            {activePillar
              ? `You are requesting help through ${activePillar.label}. Tell us about your project and I'll review the requirements, then get back to you.`
              : 'Tell me about your project and I\'ll review the requirements, then get back to you with a detailed plan and a fair price estimate.'}
          </p>
        </ScrollReveal>

        {/* Status Messages */}
        <AnimatePresence mode="wait">
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto mb-8"
            >
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-accent-gold/10 border border-accent-gold/30 text-accent-gold">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-heading font-bold text-heading-lg text-text-primary">Project Request Received!</h3>
                  <p className="text-body text-text-secondary mt-2">
                    {submitMessage}
                  </p>
                  <a
                    href={formatWhatsAppLink(siteConfig.contact.whatsapp.number, `Hi! I've just submitted a project request. Service: ${watch('service')}, Budget: ${watch('budget')}, Deadline: ${watch('deadline')}. Please review and contact me.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-accent-gold/20 border border-accent-gold/40 text-accent-gold text-body font-medium hover:bg-accent-gold/30 transition-colors"
                  >
                    <MessageSquare className="w-5 h-5" aria-hidden="true" />
                    Send Request via WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto mb-8"
            >
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-accent-orange/10 border border-accent-orange/30 text-accent-orange">
                <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-heading font-bold text-heading-lg text-text-primary">Something Went Wrong</h3>
                  <p className="text-body text-text-secondary mt-2">
                    {submitMessage}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step Progress */}
        <AnimatePresence>
          {currentStep < 3 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="max-w-2xl mx-auto mb-8"
            >
              <div className="flex items-center gap-3">
                {[1, 2].map((step) => (
                  <React.Fragment key={step}>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-body-sm transition-all duration-300 ${
                        currentStep >= step
                          ? 'bg-accent-gold text-bg-primary'
                          : 'bg-bg-elevated border border-border/50 text-text-muted'
                      }`}
                    >
                      {step}
                    </div>
                    {step === 1 && (
                      <span className={`text-caption font-medium ${currentStep >= 2 ? 'text-accent-gold' : 'text-text-muted'}`}>
                        Project Details
                      </span>
                    )}
                  </React.Fragment>
                ))}
                <div className="flex-1 h-px bg-border/30" aria-hidden="true" />
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-body-sm bg-bg-elevated border border-border/50 text-text-muted">
                  2
                </div>
                <span className="text-caption font-medium text-text-muted">Review</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form */}
          <ScrollReveal distance={30} delay={0.1}>
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard variant="elevated" padding="xl" border="accent" className="relative overflow-hidden">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                      {/* Service Selection */}
                      <Select
                        label="Choose a Service"
                        placeholder="Select the service you need"
                        options={[
                          { value: '', label: 'Select a service' },
                          ...services.map((s) => ({ value: s.id, label: s.title })),
                        ]}
                        error={errors.service?.message}
                        required
                        {...register('service')}
                      />

                      {/* Selected service info */}
                      <AnimatePresence>
                        {selectedServiceData && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="p-4 rounded-xl bg-accent-gold/5 border border-accent-gold/20"
                          >
                            <p className="text-caption text-accent-gold font-medium mb-1">
                              Selected: {selectedServiceData.title}
                            </p>
                            <p className="text-body-sm text-text-secondary">
                              {selectedServiceData.description.slice(0, 100)}...
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Project Description */}
                      <Textarea
                        label="Describe Your Project"
                        placeholder="Tell me what you want to build, fix, design, or develop. Explain your requirements, desired features, any existing hardware or code, preferred technologies, and anything else that will help me understand your vision."
                        error={errors.description?.message}
                        required
                        rows={6}
                        showWordCount
                        maxLength={5000}
                        hint="Minimum 50 characters. The more detail you provide, the more accurate my estimate will be."
                        {...register('description')}
                      />

                      {/* Budget */}
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="form-label">
                            Your Proposed Budget <span className="text-accent-orange" aria-hidden="true">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. ₦50,000"
                            className={`form-input ${errors.budget ? 'border-accent-orange/50 focus:border-accent-orange focus:ring-accent-orange/20' : ''}`}
                            aria-invalid={errors.budget ? 'true' : 'false'}
                            aria-required="true"
                            {...register('budget')}
                          />
                          {errors.budget && (
                            <p className="form-error" role="alert">{errors.budget.message}</p>
                          )}
                          <p className="mt-1.5 text-body-sm text-text-muted">
                            This is NOT a payment. It is your suggested budget for me to review and discuss.
                          </p>
                        </div>

                        <Select
                          label="Expected Deadline"
                          placeholder="Select a deadline"
                          options={DEADLINE_OPTIONS}
                          error={errors.deadline?.message}
                          required
                          {...register('deadline')}
                        />
                      </div>

                      {/* Contact Info */}
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
                          label="WhatsApp / Phone"
                          type="tel"
                          placeholder="+234 801 234 5678"
                          error={errors.whatsapp?.message}
                          hint="Optional but recommended for faster communication"
                          {...register('whatsapp')}
                        />
                        <div>
                          <label className="form-label">
                            Attach Files <span className="text-text-muted">(Optional)</span>
                          </label>
                          <FileUpload
                            label=""
                            hint="Code, schematics, diagrams, PDFs, requirements, images. Max 10MB each, 5 files total."
                            accept=".pdf,.png,.jpg,.jpeg,.zip,.rar,.ino,.cpp,.h,.c"
                            multiple
                            maxFiles={5}
                            maxSize={10 * 1024 * 1024}
                            onFilesChange={(files) => setValue('files', files)}
                            error={errors.files?.message}
                            {...register('files')}
                          />
                        </div>
                      </div>

                      {/* Submit */}
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
                            Submitting...
                          </>
                        ) : (
                          <>
                            Review Your Request
                            <ChevronDown className="w-5 h-5 rotate-90" aria-hidden="true" />
                          </>
                        )}
                      </Button>

                      <p className="text-center text-caption text-text-muted">
                        By submitting, you agree to be contacted regarding your project inquiry. Your information is never shared.
                      </p>
                    </form>
                  </GlassCard>
                </motion.div>
              )}

              {/* Review Step */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard variant="elevated" padding="xl" border="accent" className="relative overflow-hidden">
                    <h3 className="font-heading font-bold text-heading-lg text-text-primary mb-6">
                      Review Your Request
                    </h3>

                    <div className="space-y-4">
                      {[
                        {
                          label: 'Service',
                          value: selectedServiceData?.title || watch('service'),
                        },
                        {
                          label: 'Project Description',
                          value: watch('description'),
                        },
                        {
                          label: 'Proposed Budget (not a payment)',
                          value: `₦${watch('budget')}`,
                        },
                        {
                          label: 'Deadline',
                          value: getDeadlineLabel(watch('deadline')),
                        },
                        {
                          label: 'Name',
                          value: watch('name'),
                        },
                        {
                          label: 'Email',
                          value: watch('email'),
                        },
                        {
                          label: 'WhatsApp / Phone',
                          value: watch('whatsapp') || 'Not provided',
                        },
                      ].map((item, index) => (
                        <div key={item.label} className="p-4 rounded-xl bg-bg-elevated/50 border border-border/30">
                          <p className="text-caption font-medium text-accent-gold mb-1">{item.label}</p>
                          <p className="text-body text-text-secondary">{item.value}</p>
                        </div>
                      ))}

                      {/* Files Summary */}
                      <div className="p-4 rounded-xl bg-bg-elevated/50 border border-border/30">
                        <p className="text-caption font-medium text-accent-gold mb-2">Attached Files</p>
                        {watchedFiles && watchedFiles.length > 0 ? (
                          <div className="space-y-2">
                            {watchedFiles.map((file, index) => (
                              <div key={index} className="flex items-center gap-2 text-body-sm text-text-secondary">
                                <FileText className="w-4 h-4 text-accent-gold flex-shrink-0" aria-hidden="true" />
                                {file.name}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-body-sm text-text-muted">No files attached</p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 mt-8">
                      <Button
                        variant="primary"
                        size="lg"
                        className="w-full"
                        onClick={async () => {
                          setSubmitStatus('submitting');
                          try {
                            const service = selectedServiceData?.title || watch('service');
                            const description = watch('description');
                            const budget = watch('budget');
                            const deadline = getDeadlineLabel(watch('deadline'));
                            const name = watch('name');
                            const email = watch('email');
                            const whatsapp = watch('whatsapp') || 'Not provided';

                            const formData = new FormData();
                            formData.append('service', service);
                            formData.append('description', description);
                            formData.append('budget', budget);
                            formData.append('deadline', deadline);
                            formData.append('name', name);
                            formData.append('email', email);
                            formData.append('whatsapp', whatsapp);
                            formData.append('project', service);
                            if (watchedFiles && watchedFiles.length > 0) {
                              watchedFiles.forEach((file, index) => {
                                formData.append(`file_${index}`, file);
                              });
                            }

                            const response = await fetch(siteConfig.form.endpoint, {
                              method: 'POST',
                              body: formData,
                              headers: { Accept: 'application/json' },
                            });

                            if (response.ok) {
                              setSubmitStatus('success');
                              setSubmitMessage('Your project request has been received! I will review it and contact you within 24 hours to discuss the details and final price.');
                              setCurrentStep(3);
                              reset();
                            } else {
                              throw new Error('Submission failed');
                            }
                          } catch (error) {
                            setSubmitStatus('error');
                            setSubmitMessage('Something went wrong. Please try again or contact me directly via WhatsApp or email.');
                          }
                        }}
                        loading={submitStatus === 'submitting'}
                        disabled={submitStatus === 'submitting'}
                      >
                        {submitStatus === 'submitting' ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <MessageSquare className="w-5 h-5" aria-hidden="true" />
                            Send Project Request
                          </>
                        )}
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full"
                        onClick={() => setCurrentStep(1)}
                      >
                        <ChevronDown className="w-4 h-4 rotate-180" aria-hidden="true" />
                        Back to Edit
                      </Button>
                    </div>
                  </GlassCard>
                </motion.div>
              )}
            </AnimatePresence>
          </ScrollReveal>

          {/* Sidebar Info */}
          <ScrollReveal distance={30} delay={0.3}>
            <div className="space-y-6">
              <GlassCard variant="elevated" padding="lg" border="accent">
                <h3 className="font-heading font-bold text-heading-md text-text-primary mb-4">
                  What Happens Next
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      step: '1',
                      title: 'You Submit',
                      desc: 'Fill out the form with your project details, budget, and deadline.',
                    },
                    {
                      step: '2',
                      title: 'I Review',
                      desc: 'I carefully review your requirements and assess the scope.',
                    },
                    {
                      step: '3',
                      title: 'I Contact You',
                      desc: 'Within 24 hours, I reach out with questions, clarifications, and a fair price estimate.',
                    },
                    {
                      step: '4',
                      title: 'We Discuss',
                      desc: 'We talk through the plan, timeline, and budget until we are aligned.',
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="font-heading font-bold text-accent-gold text-body-sm">
                          {item.step}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-body text-text-primary mb-1">
                          {item.title}
                        </h4>
                        <p className="text-body-sm text-text-secondary">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard variant="elevated" padding="lg" border="accent">
                <h3 className="font-heading font-bold text-heading-md text-text-primary mb-4">
                  Important Note About Budget
                </h3>
                <p className="text-body text-text-secondary leading-relaxed">
                  The proposed budget you enter is NOT a payment and does NOT commit you to anything.
                  It simply gives me an idea of your expectations so I can provide a fair and realistic
                  estimate. After reviewing your project, I will contact you with a detailed breakdown
                  before any work begins.
                </p>
              </GlassCard>

              <GlassCard variant="elevated" padding="lg" border="accent">
                <h3 className="font-heading font-bold text-heading-md text-text-primary mb-4">
                  Need to Chat First?
                </h3>
                <p className="text-body text-text-secondary mb-4">
                  Prefer to discuss your project before filling out the form? I am available via
                  WhatsApp and email.
                </p>
                <a
                  href={formatWhatsAppLink(siteConfig.contact.whatsapp.number, siteConfig.contact.whatsapp.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-accent-gold/10 border border-accent-gold/20 text-accent-gold hover:bg-accent-gold/20 transition-colors"
                >
                  <MessageSquare className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-heading font-medium text-body-sm">Chat on WhatsApp</p>
                    <p className="text-caption text-text-secondary">{siteConfig.contact.whatsapp.displayNumber}</p>
                  </div>
                </a>
              </GlassCard>

              <div className="text-center">
                <Link
                  to="/"
                  className="btn-ghost inline-flex items-center gap-2 text-sm"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M3 12l9-9 9 9" />
                    <path d="M9 21V12h6v9" />
                  </svg>
                  Back to Home
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Order;
