import React from 'react';
import { Layout } from '../Layout';
import { AdBanner } from '../components/blocks/AdBanner';
import { PickDropForm } from '../components/blocks/PickDropForm';
import { CarCard } from '../components/blocks/CarCard';
import { Button } from '../components/ui/Button';

export const Home: React.FC = () => {
  const popularCars = [
    {
      name: 'Koenigsegg',
      type: 'Sport',
      image: './assets/images/44-15056.png',
      gasoline: '90L',
      transmission: 'Manual',
      people: '2 People',
      price: 99.00,
      isLiked: true,
    },
    {
      name: 'Nissan GT - R',
      type: 'Sport',
      image: './assets/images/44-15085.png',
      gasoline: '80L',
      transmission: 'Manual',
      people: '2 People',
      price: 80.00,
      oldPrice: 100.00,
    },
    {
      name: 'Rolls - Royce',
      type: 'Sport',
      image: './assets/images/44-15113.png',
      gasoline: '70L',
      transmission: 'Manual',
      people: '4 People',
      price: 96.00,
      isLiked: true,
    },
    {
      name: 'Nissan GT - R',
      type: 'Sport',
      image: './assets/images/44-15138.png',
      gasoline: '80L',
      transmission: 'Manual',
      people: '2 People',
      price: 80.00,
      oldPrice: 100.00,
    },
  ];

  const recommendedCars = [
    {
      name: 'All New Rush',
      type: 'SUV',
      image: './assets/images/44-15173.png',
      gasoline: '70L',
      transmission: 'Manual',
      people: '6 People',
      price: 72.00,
      oldPrice: 80.00,
    },
    {
      name: 'CR - V',
      type: 'SUV',
      image: './assets/images/44-15204.png',
      gasoline: '80L',
      transmission: 'Manual',
      people: '6 People',
      price: 80.00,
      isLiked: true,
    },
    {
      name: 'All New Terios',
      type: 'SUV',
      image: './assets/images/44-15232.png',
      gasoline: '90L',
      transmission: 'Manual',
      people: '6 People',
      price: 74.00,
    },
    {
      name: 'CR - V',
      type: 'SUV',
      image: './assets/images/44-15260.png',
      gasoline: '80L',
      transmission: 'Manual',
      people: '6 People',
      price: 80.00,
      isLiked: true,
    },
    {
      name: 'MG ZX Exclusice',
      type: 'Hatchback',
      image: './assets/images/44-15290.png',
      gasoline: '70L',
      transmission: 'Manual',
      people: '4 People',
      price: 76.00,
      oldPrice: 80.00,
      isLiked: true,
    },
    {
      name: 'New MG ZS',
      type: 'SUV',
      image: './assets/images/44-15318.png',
      gasoline: '80L',
      transmission: 'Manual',
      people: '6 People',
      price: 80.00,
    },
    {
      name: 'MG ZX Excite',
      type: 'Hatchback',
      image: './assets/images/44-15344.png',
      gasoline: '90L',
      transmission: 'Manual',
      people: '4 People',
      price: 74.00,
      isLiked: true,
    },
    {
      name: 'New MG ZS',
      type: 'SUV',
      image: './assets/images/44-15374.png',
      gasoline: '80L',
      transmission: 'Manual',
      people: '6 People',
      price: 80.00,
    },
  ];

  return (
    <Layout>
      {/* Ads */}
      <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8\">\n        <AdBanner\n          title=\"The Best Platform for Car Rental\"\n          description=\"Ease of doing a car rental safely and reliably. Of course at a low price.\"\n          bgClass=\"bg-[#54A6FF]\"\n          image=\"./assets/images/44-14930.png\"\n        />\n        <AdBanner\n          title=\"Easy way to rent a car at a low price\"\n          description=\"Providing cheap car rental services and safe and comfortable facilities.\"\n          bgClass=\"bg-[#3563E9]\"\n          image=\"./assets/images/44-14963.png\"\n          variant=\"secondary\"\n        />\n      </div>\n\n      {/* Pick Drop Form */}\n      <div className=\"mb-9\">\n        <PickDropForm />\n      </div>\n\n      {/* Popular Cars */}\n      <div className=\"mb-8\">\n        <div className=\"flex justify-between items-center mb-5 px-5\">\n          <h2 className=\"text-base font-semibold text-secondary-300\">Popular Car</h2>\n          <a href=\"#\" className=\"text-base font-semibold text-primary-500 hover:underline\">View All</a>\n        </div>\n        <div className=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8\">\n          {popularCars.map((car, index) => (\n            <CarCard key={index} {...car} />\n          ))}\n        </div>\n      </div>\n\n      {/* Recommended Cars */}\n      <div className=\"mb-16\">\n        <div className=\"flex justify-between items-center mb-5 px-5\">\n          <h2 className=\"text-base font-semibold text-secondary-300\">Recomendation Car</h2>\n        </div>\n        <div className=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16\">\n          {recommendedCars.map((car, index) => (\n            <CarCard key={index} {...car} />\n          ))}\n        </div>\n        \n        <div className=\"flex justify-center relative\">\n          <Button>Show more car</Button>\n          <div className=\"absolute right-0 top-1/2 -translate-y-1/2 text-sm font-bold text-secondary-300 hidden md:block\">\n            120 Car\n          </div>\n        </div>\n      </div>\n    </Layout>\n  );\n};