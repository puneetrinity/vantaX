import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface BaseProps {
  label: string;
  required?: boolean;
  error?: string;
}

type InputProps = BaseProps & { textarea?: false } & InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = BaseProps & { textarea: true } & TextareaHTMLAttributes<HTMLTextAreaElement>;

type Props = InputProps | TextareaProps;

export default function FormField(props: Props) {
  const { label, required, error, textarea, ...rest } = props;

  const baseClass =
    'w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30';

  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">
        {label}
        {required && <span className="text-gold-400 ml-1">*</span>}
      </label>
      {textarea ? (
        <textarea className={`${baseClass} min-h-[100px] resize-y`} {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)} />
      ) : (
        <input className={baseClass} {...(rest as InputHTMLAttributes<HTMLInputElement>)} />
      )}
      {error && <p className="text-pink text-xs mt-1">{error}</p>}
    </div>
  );
}
