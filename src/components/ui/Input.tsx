import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ icon, rightIcon, className = '', ...props }) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      {icon && (
        <div className="absolute left-4 text-secondary-400">
          {icon}
        </div>
      )}
      <input
        className={`w-full bg-white border border-[#C3D4E9] rounded-full py-3 text-secondary-500 placeholder-secondary-400 focus:outline-none focus:border-primary-500 transition-colors ${icon ? 'pl-12' : 'pl-4'} ${rightIcon ? 'pr-12' : 'pr-4'}`}
        {...props}
      />
      {rightIcon && (
        <div className="absolute right-4 text-secondary-400">
          {rightIcon}
        </div>
      )}
    </div>
  );
};