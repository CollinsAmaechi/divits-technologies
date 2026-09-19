import { siteConfig } from '../config/siteConfig';

export function formatWhatsAppLink(number, message = '') {
  const cleanNumber = number.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message || siteConfig.contact.whatsapp.message);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

export function formatEmailLink(email, subject = '', body = '') {
  const params = new URLSearchParams();
  if (subject) params.append('subject', subject);
  if (body) params.append('body', body);
  return `mailto:${email}${params.toString() ? `?${params.toString()}` : ''}`;
}

export function formatPhoneLink(phone) {
  const cleanPhone = phone.replace(/[^0-9+]/g, '');
  return `tel:${cleanPhone}`;
}

export function getProjectTypeLabel(value) {
  const types = {
    'esp32': 'ESP32 Development',
    'arduino': 'Arduino Development',
    'iot': 'IoT System',
    'smart-home': 'Smart Home Automation',
    'sensor': 'Sensor/Monitoring System',
    'power-control': 'Relay/Power Control',
    'embedded': 'Embedded Programming',
    'wifi-bluetooth': 'Wi-Fi/Bluetooth Project',
    'pcb': 'PCB/Electronics Prototyping',
    'custom': 'Custom Hardware Project',
    'troubleshooting': 'Troubleshooting/Debugging',
    'other': 'Other',
  };
  return types[value] || value;
}

export function getBudgetLabel(value) {
  const budgets = {
    'under-500': 'Under $500',
    '500-1000': '$500 - $1,000',
    '1000-2500': '$1,000 - $2,500',
    '2500-5000': '$2,500 - $5,000',
    '5000-10000': '$5,000 - $10,000',
    '10000+': '$10,000+',
    'discuss': 'Let\'s discuss',
  };
  return budgets[value] || value;
}

export function getTimelineLabel(value) {
  const timelines = {
    'asap': 'ASAP',
    '1-2-weeks': '1-2 weeks',
    '1-month': '1 month',
    '2-3-months': '2-3 months',
    '3-6-months': '3-6 months',
    '6+months': '6+ months',
    'flexible': 'Flexible',
  };
  return timelines[value] || value;
}

export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function truncate(str, length = 100) {
  if (str.length <= length) return str;
  return str.slice(0, length).trim() + '...';
}

export function generateId(prefix = 'id') {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

export function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export function getInitials(name) {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function scrollToSection(sectionId, offset = 80) {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    });
  }
}

export function copyToClipboard(text) {
  return navigator.clipboard.writeText(text);
}

export function getContrastColor(hexColor) {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#ffffff';
}