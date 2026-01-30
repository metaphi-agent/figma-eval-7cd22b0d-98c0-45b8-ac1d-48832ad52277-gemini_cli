import React from 'react';
import { Button } from '../ui/Button';

interface AdBannerProps {
  title: string;
  description: string;
  buttonText?: string;
  bgClass: string;
  image: string;
  variant?: 'primary' | 'secondary';
}

export const AdBanner: React.FC<AdBannerProps> = ({
  title,
  description,
  buttonText = 'Rental Car',
  bgClass,
  image,
  variant = 'primary',
}) => {
  return (
    <div className={`relative p-6 rounded-[10px] overflow-hidden ${bgClass} text-white w-full h-[360px]`}>
      <div className="relative z-10 w-full md:w-1/2">
        <h2 className="text-[32px] font-semibold leading-[150%] tracking-[-0.96px] mb-4">
          {title}
        </h2>
        <p className="text-base font-medium leading-[150%] tracking-[-0.32px] mb-5 opacity-80 max-w-[284px]">
          {description}
        </p>
        <Button 
          variant={variant === 'secondary' ? 'secondary' : 'primary'}
          className={variant === 'secondary' ? '!bg-[#54A6FF] hover:!bg-blue-400' : '!bg-[#3563E9] hover:!bg-blue-700'}
        >
          {buttonText}
        </Button>
      </div>
      
      <img 
        src={image} 
        alt="Car" 
        className="absolute bottom-0 right-0 md:right-10 max-w-[60%] md:max-w-[45%] object-contain"
        loading="lazy"
      />
    </div>
  );
};