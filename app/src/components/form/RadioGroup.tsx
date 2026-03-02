interface Option {
  value: string;
  description?: string;
}

interface Props {
  label: string;
  options: (string | Option)[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export default function RadioGroup({ label, options, value, onChange, required }: Props) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label}
        {required && <span className="text-gold-400 ml-1">*</span>}
      </label>
      <div className="grid gap-2">
        {options.map((opt) => {
          const optValue = typeof opt === 'string' ? opt : opt.value;
          const optDesc = typeof opt === 'string' ? undefined : opt.description;
          const selected = value === optValue;

          return (
            <label
              key={optValue}
              className={`flex items-start gap-3 px-4 py-2.5 rounded-lg border cursor-pointer transition-colors text-sm ${
                selected
                  ? 'border-gold-500 bg-gold-500/10 text-text-primary'
                  : 'border-border bg-bg text-text-secondary hover:border-border-hover'
              }`}
            >
              <input
                type="radio"
                checked={selected}
                onChange={() => onChange(optValue)}
                className="hidden"
              />
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                  selected ? 'border-gold-500' : 'border-text-muted'
                }`}
              >
                {selected && <div className="w-2 h-2 rounded-full bg-gold-500" />}
              </div>
              <div>
                <span className="font-medium">{optValue}</span>
                {optDesc && <p className="text-text-muted text-xs mt-0.5">{optDesc}</p>}
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}
