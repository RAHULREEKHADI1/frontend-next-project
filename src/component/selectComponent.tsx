import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Option {
  label: string;
  value: string | number;
}

interface CustomSelectProps {
  label: string;
  options: Option[];
  value: string | number;
  onChange: (value: string) => void;
  required?: boolean;
  className?:string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  options,
  value,
  onChange,
  required = false,
  className
}) => {
  return (
    <div className={twMerge("flex flex-col gap-2 w-full max-w-3xl",className)}>
      <label className="text-white font-semibold text-md">
        {label}{required && '*'}
      </label>
      <div className="relative group">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-[#858585] text-white appearance-none px-6 h-16 border-3 border-[#B4D4E4] focus:outline-none cursor-pointer font-semibold"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-[#1a1d24]">
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none px-2">
          <div className="bg-[#E5E4E4] rounded-full w-4.5 h-4.5 flex items-center justify-center">
            <img src="/downArrow.svg" alt="down_arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;