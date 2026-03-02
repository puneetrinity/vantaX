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
    'w-full bg-bg border border-border px-4 py-3 text-[13px] text-text-primary placeholder-text-muted outline-none transition-colors focus:border-purple-500 focus:bg-purple-500/5';

  return (
    <div>
      <label className="block text-[13px] font-medium mb-1.5">
        {label}
        {required && <span className="text-gold-500 ml-1">*</span>}
      </label>
      {textarea ? (
        <textarea className={`${baseClass} min-h-[100px] resize-y`} {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)} />
      ) : (
        <input className={baseClass} {...(rest as InputHTMLAttributes<HTMLInputElement>)} />
      )}
      {error && <p className="text-pink text-[12px] mt-1">{error}</p>}
    </div>
  );
}
