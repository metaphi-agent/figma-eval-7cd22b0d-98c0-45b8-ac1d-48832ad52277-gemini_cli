import React from 'react';
import { Button } from '../ui/Button';

interface CarCardProps {
  name: string;
  type: string;
  image: string;
  gasoline: string;
  transmission: string;
  people: string;
  price: number;
  oldPrice?: number;
  isLiked?: boolean;
}

export const CarCard: React.FC<CarCardProps> = ({
  name,
  type,
  image,
  gasoline,
  transmission,
  people,
  price,
  oldPrice,
  isLiked = false,
}) => {
  return (
    <div className="bg-white p-6 rounded-[10px] w-full flex flex-col justify-between">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-xl font-bold text-secondary-500 leading-[150%]">{name}</h3>
          <p className="text-sm font-bold text-secondary-300 leading-[150%]">{type}</p>
        </div>
        <button className="text-secondary-300">
          <img 
            src={isLiked ? "./assets/icons/1-75.png" : "./assets/icons/1-93.png"} 
            alt="Like" 
            className="w-6 h-6" 
          />
        </button>
      </div>

      {/* Image */}
      <div className="mb-14 relative h-[120px] flex items-center justify-center">
        <img 
          src={image} 
          alt={name} 
          className="max-w-full max-h-full object-contain" 
          loading="lazy"
        />
        <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-white to-transparent opacity-50" />
      </div>

      {/* Specs */}
      <div className="flex justify-between items-center mb-6 text-secondary-300 text-sm font-medium w-full">
        <div className="flex items-center gap-1.5">
          <img src="./assets/icons/1-80.png" alt="Gas" className="w-6 h-6" />
          <span>{gasoline}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <img src="./assets/icons/9-4642.png" alt="Transmission" className="w-6 h-6" />
          <span>{transmission}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <img src="./assets/icons/1-85.png" alt="People" className="w-6 h-6" />
          <span>{people}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center w-full">
        <div>
          <div className="text-xl font-bold text-secondary-500">
            ${price.toFixed(2)}/ <span className="text-sm text-secondary-300 font-bold">day</span>
          </div>
          {oldPrice && (
            <div className="text-sm font-bold text-secondary-300 line-through">
              ${oldPrice.toFixed(2)}
            </div>
          )}
        </div>
        <Button size="sm">Rent Now</Button>
      </div>
    </div>
  );
};