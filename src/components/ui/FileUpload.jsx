import { useState, useCallback, useRef, forwardRef, useImperativeHandle } from 'react';
import { Upload, X, File, CheckCircle, AlertCircle } from 'lucide-react';
import { formatFileSize } from '../../utils/helpers';

const FileUpload = forwardRef(function FileUpload({
  label,
  hint,
  error,
  accept = '*/*',
  multiple = false,
  maxFiles = 5,
  maxSize = 10 * 1024 * 1024, // 10MB
  onFilesChange,
  className = '',
  disabled = false,
  required = false,
  id,
  name,
  onBlur,
}, forwardedRef) {
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);
  const stableIdRef = useRef(id || `file-upload-${Math.random().toString(36).substr(2, 9)}`);
  const uploadId = stableIdRef.current;
  const mergedRef = useCallback(
    (node) => {
      fileInputRef.current = node;
      if (typeof forwardedRef === 'function') forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    },
    [forwardedRef]
  );
  useImperativeHandle(forwardedRef, () => fileInputRef.current, [fileInputRef]);
  const errorId = error ? `${uploadId}-error` : undefined;

  const validateFile = (file) => {
    if (maxSize && file.size > maxSize) {
      return `File "${file.name}" exceeds maximum size of ${formatFileSize(maxSize)}`;
    }
    if (accept !== '*/*') {
      const acceptedTypes = accept.split(',').map(t => t.trim());
      const isValid = acceptedTypes.some(type => {
        if (type.startsWith('.')) {
          return file.name.toLowerCase().endsWith(type.toLowerCase());
        }
        return file.type.match(type.replace('*', '.*'));
      });
      if (!isValid) {
        return `File "${file.name}" is not an accepted file type`;
      }
    }
    return null;
  };

  const handleFiles = useCallback((newFiles) => {
    const validFiles = [];
    const errors = [];

    Array.from(newFiles).forEach(file => {
      const validationError = validateFile(file);
      if (validationError) {
        errors.push(validationError);
      } else {
        validFiles.push(file);
      }
    });

    if (validFiles.length > 0) {
      setFiles(prev => {
        const combined = [...prev, ...validFiles].slice(0, maxFiles);
        onFilesChange?.(combined);
        return combined;
      });
    }

    return { validFiles, errors };
  }, [maxFiles, onFilesChange]);

  const removeFile = (index) => {
    setFiles(prev => {
      const next = prev.filter((_, i) => i !== index);
      onFilesChange?.(next);
      return next;
    });
  };

  const clearFiles = () => {
    setFiles([]);
    onFilesChange?.([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleClick = () => {
    if (!disabled) {
      fileInputRef.current?.click();
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const isAtMax = files.length >= maxFiles;

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={uploadId} className="form-label">
          {label}
          {required && <span className="text-accent-orange ml-1" aria-hidden="true">*</span>}
        </label>
      )}

      <div
        className={`
          relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-200 ease-expo
          ${dragActive
            ? 'border-accent-gold bg-accent-gold/5'
            : isAtMax
            ? 'border-border/30 bg-bg-elevated/30'
            : 'border-border/50 hover:border-accent-gold/50 hover:bg-accent-gold/5'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={handleClick}
        role="button"
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick()}
        aria-label={label || 'File upload'}
      >
        <input
          ref={mergedRef}
          type="file"
          id={uploadId}
          name={name}
          accept={accept}
          multiple={multiple}
          disabled={disabled || isAtMax}
          onChange={handleChange}
          onBlur={onBlur}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          aria-hidden="true"
        />

        <div className="flex flex-col items-center gap-4">
          <div className={`
            w-16 h-16 rounded-2xl flex items-center justify-center mx-auto transition-all duration-200
            ${dragActive ? 'bg-accent-gold/10 text-accent-gold scale-110' : 'bg-bg-elevated text-text-secondary'}
          `}>
            <Upload className="w-8 h-8" aria-hidden="true" />
          </div>

          <div className="space-y-2">
            <p className="font-heading font-medium text-body text-text-primary">
              {dragActive ? 'Drop files here' : isAtMax ? `Maximum ${maxFiles} files reached` : 'Drag & drop files here, or click to browse'}
            </p>
            <p className="text-body-sm text-text-secondary">
              {hint || `Supports: ${accept === '*/*' ? 'All file types' : accept} • Max ${formatFileSize(maxSize)} per file • Max ${maxFiles} file${maxFiles > 1 ? 's' : ''}`}
            </p>
          </div>
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-4 space-y-2" role="list" aria-label="Uploaded files">
          {files.map((file, index) => (
            <div
              key={`${file.name}-${index}-${file.lastModified}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-bg-elevated/50 border border-border/30 animate-in"
              role="listitem"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
                <File className="w-5 h-5 text-accent-gold" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-body-sm text-text-primary truncate">{file.name}</p>
                <p className="text-caption text-text-muted">{formatFileSize(file.size)}</p>
              </div>
              <button
                type="button"
                onClick={() => removeFile(index)}
                disabled={disabled}
                className="p-2 rounded-lg text-text-muted hover:text-accent-orange hover:bg-accent-orange/10 transition-colors disabled:opacity-50"
                aria-label={`Remove ${file.name}`}
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      )}

      {error && (
        <p id={errorId} className="form-error mt-2" role="alert" aria-live="polite">
          <AlertCircle className="w-4 h-4 inline-block mr-1" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
});

export default FileUpload;