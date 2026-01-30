import React from 'react';
import { Button } from '../ui/Button';

const SelectGroup = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div className="flex-1 border-r border-[#C3D4E9]/40 last:border-0 px-4 first:pl-0">
    <div className="text-base font-bold text-secondary-500 mb-2">{label}</div>
    <div className="flex items-center justify-between cursor-pointer">
      <span className="text-xs text-secondary-300">{placeholder}</span>
      <img src="./assets/icons/1-70.png" alt="arrow" className="w-3 h-3" /> 
      {/* 1-70 was arrow down, I didn't export it. I'll use a simple unicode char or just leave it blank for now if not available. */}
    </div>
  </div>
);

export const PickDropForm: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 relative">
      {/* Pick Up */}
      <div className="bg-white p-6 rounded-[10px] w-full lg:w-[582px]">
        <div className="flex items-center gap-2 mb-6">
          <input type="radio" checked readOnly className="w-4 h-4 text-primary-500" />
          <span className="text-base font-semibold text-secondary-500">Pick - Up</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <label className="block text-base font-bold text-secondary-500 mb-2">Locations</label>
            <div className="relative">
              <select className="w-full text-xs text-secondary-300 bg-transparent outline-none appearance-none py-2 pr-4">
                <option>Select your city</option>
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                 <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
            </div>
          </div>
          <div className="w-[1px] h-10 bg-[#C3D4E9]/40 hidden sm:block self-center"></div>
          <div className="flex-1">
            <label className="block text-base font-bold text-secondary-500 mb-2">Date</label>
            <div className="relative">
              <select className="w-full text-xs text-secondary-300 bg-transparent outline-none appearance-none py-2 pr-4">
                <option>Select your date</option>
              </select>
               <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                 <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
            </div>
          </div>
          <div className="w-[1px] h-10 bg-[#C3D4E9]/40 hidden sm:block self-center"></div>
          <div className="flex-1">
            <label className="block text-base font-bold text-secondary-500 mb-2">Time</label>
            <div className="relative">
              <select className="w-full text-xs text-secondary-300 bg-transparent outline-none appearance-none py-2 pr-4">
                <option>Select your time</option>
              </select>
               <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                 <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Switch Button */}
      <button className="bg-primary-500 p-4 rounded-[10px] shadow-lg shadow-primary-500/30 z-10 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
        <img src="./assets/icons/9-4642.png" alt="Swap" className="w-6 h-6 invert brightness-0" />
      </button>

      {/* Drop Off */}
      <div className="bg-white p-6 rounded-[10px] w-full lg:w-[582px]">
        <div className="flex items-center gap-2 mb-6">
          <input type="radio" checked readOnly className="w-4 h-4 text-primary-500" />
          <span className="text-base font-semibold text-secondary-500">Drop - Off</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <label className="block text-base font-bold text-secondary-500 mb-2">Locations</label>
            <div className="relative">
              <select className="w-full text-xs text-secondary-300 bg-transparent outline-none appearance-none py-2 pr-4">
                <option>Select your city</option>
              </select>
               <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                 <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
            </div>
          </div>
          <div className="w-[1px] h-10 bg-[#C3D4E9]/40 hidden sm:block self-center"></div>
          <div className="flex-1">
            <label className="block text-base font-bold text-secondary-500 mb-2">Date</label>
            <div className="relative">
              <select className="w-full text-xs text-secondary-300 bg-transparent outline-none appearance-none py-2 pr-4">
                <option>Select your date</option>
              </select>
               <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                 <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
            </div>
          </div>
          <div className="w-[1px] h-10 bg-[#C3D4E9]/40 hidden sm:block self-center"></div>
          <div className="flex-1">
            <label className="block text-base font-bold text-secondary-500 mb-2">Time</label>
            <div className="relative">
              <select className="w-full text-xs text-secondary-300 bg-transparent outline-none appearance-none py-2 pr-4">
                <option>Select your time</option>
              </select>
               <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                 <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};