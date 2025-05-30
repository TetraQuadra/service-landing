import React, { useState, useRef, useEffect } from 'react';

interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    value: string;
    onChange: (value: string) => void;
    options: Option[];
    placeholder?: string;
    name?: string;
    required?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ value, onChange, options, placeholder, name, required }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (optionValue: string) => {
        onChange(optionValue);
        setOpen(false);
    };

    const selectedLabel = options.find(opt => opt.value === value)?.label;

    return (
        <div ref={ref} className="relative w-full font-['Orbitron']">
            <button
                type="button"
                className="w-full border-[2px] border-[#ADADAD] p-3 text-left focus:outline-none text-white flex justify-between items-center"
                onClick={() => setOpen(o => !o)}
                aria-haspopup="listbox"
                aria-expanded={open}
                tabIndex={0}
            >
                <span className={value ? '' : 'text-[#ADADAD]'}>
                    {selectedLabel || placeholder || 'Select...'}
                </span>
                <svg className={`ml-2 transition-transform ${open ? 'rotate-180' : ''}`} width="20" height="20" viewBox="0 0 20 20"><path d="M5 8l5 5 5-5" stroke="#222" strokeWidth="2" fill="none" /></svg>
            </button>
            {open && (
                <ul className="absolute z-10 mt-2 w-full bg-white border-[2px] border-[#ADADAD] max-h-80 overflow-auto">
                    {options.map((option, idx) => (
                        <React.Fragment key={option.value}>
                            {idx !== 0 && <div className="h-[1px] w-full bg-[#ADADAD]" />}
                            <li
                                className={`px-4 py-3 cursor-pointer text-black text-[20px] hover:bg-[#F0F0F0] ${value === option.value ? 'bg-[#cecece]' : ''}`}
                                onClick={() => handleSelect(option.value)}
                                role="option"
                                aria-selected={value === option.value}
                                tabIndex={0}
                            >
                                {option.label}
                            </li>
                        </React.Fragment>
                    ))}
                </ul>
            )}
            {required && (
                <input type="hidden" name={name} value={value} required />
            )}
        </div>
    );
};

export default CustomSelect; 