import { forwardRef, useState, useEffect } from 'react';

const Textarea = forwardRef(({
  label,
  error,
  hint,
  className = '',
  id,
  required = false,
  disabled = false,
  showCharCount = false,
  showWordCount = false,
  maxLength,
  rows = 4,
  ...props
}, ref) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  const errorId = error ? `${textareaId}-error` : undefined;
  const hintId = hint ? `${textareaId}-hint` : undefined;
  const describedBy = [errorId, hintId].filter(Boolean).join(' ') || undefined;
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    if (props.value !== undefined) {
      setCharCount(props.value.length);
      const words = props.value.trim() ? props.value.trim().split(/\s+/).length : 0;
      setWordCount(words);
    }
  }, [props.value]);

  const handleChange = (e) => {
    const value = e.target.value;
    setCharCount(value.length);
    const words = value.trim() ? value.trim().split(/\s+/).filter(Boolean).length : 0;
    setWordCount(words);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={textareaId} className="form-label">
          {label}
          {required && <span className="text-accent-orange ml-1" aria-hidden="true">*</span>}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        rows={rows}
        maxLength={maxLength}
        className={`form-input resize-y min-h-[100px] ${error ? 'border-accent-orange/50 focus:border-accent-orange focus:ring-accent-orange/20' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
        disabled={disabled}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={describedBy}
        aria-required={required}
        onChange={handleChange}
        {...props}
      />
      {(showCharCount || showWordCount || maxLength) && (
        <div className="flex justify-between mt-1.5">
          {!error && hint && (
            <p id={hintId} className="text-body-sm text-text-muted">
              {hint}
            </p>
          )}
          {showWordCount ? (
            <p className={`text-caption ${wordCount > (maxLength || Infinity) * 0.9 ? 'text-accent-orange' : 'text-text-muted'}`}>
              {wordCount} word{wordCount !== 1 && 's'}{maxLength && ` / ${maxLength}`}
            </p>
          ) : (
            <p className={`text-caption ${charCount > (maxLength || Infinity) * 0.9 ? 'text-accent-orange' : 'text-text-muted'}`}>
              {charCount}{maxLength && ` / ${maxLength}`}
            </p>
          )}
        </div>
      )}
      {error && !showCharCount && !maxLength && (
        <p id={errorId} className="form-error" role="alert" aria-live="polite">
          {error}
        </p>
      )}
      {error && (showCharCount || maxLength) && (
        <p id={errorId} className="form-error" role="alert" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;