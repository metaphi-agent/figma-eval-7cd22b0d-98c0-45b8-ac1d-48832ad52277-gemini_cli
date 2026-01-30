import React from 'react';
import { Input } from '../ui/Input';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-[#C3D4E9]/40 py-8">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        <div className="flex items-center justify-between w-full md:w-auto gap-8 lg:gap-16">
          <div className="text-[32px] font-bold text-primary-500 tracking-[-0.96px]">
            MORENT
          </div>
          <div className="hidden md:block w-[492px]">
            <Input
              placeholder="Search something here"
              icon={<img src="./assets/icons/9-4655.png" alt="Search" className="w-6 h-6" />}
              rightIcon={<img src="./assets/icons/9-3334.png" alt="Filter" className="w-6 h-6" />}
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button className="p-2.5 rounded-full border border-[#C3D4E9]/40 hover:bg-gray-50 hidden md:block">
            <img src="./assets/icons/1-75.png" alt="Favorites" className="w-6 h-6" />
          </button>
          <button className="p-2.5 rounded-full border border-[#C3D4E9]/40 hover:bg-gray-50 hidden md:block">
            <img src="./assets/icons/9-4648.png" alt="Notifications" className="w-6 h-6" />
          </button>
          <button className="p-2.5 rounded-full border border-[#C3D4E9]/40 hover:bg-gray-50 hidden md:block">
            <img src="./assets/icons/9-1589.png" alt="Settings" className="w-6 h-6" />
          </button>
          <button className="w-11 h-11 rounded-full overflow-hidden border border-[#C3D4E9]/40">
            <img src="./assets/icons/1-85.png" alt="Profile" className="w-full h-full object-cover" />
          </button>
        </div>
      </div>
      {/* Mobile Search */}
      <div className="md:hidden px-6 mt-6">
        <Input
          placeholder="Search something here"
          icon={<img src="./assets/icons/9-4655.png" alt="Search" className="w-6 h-6" />}
          rightIcon={<img src="./assets/icons/9-3334.png" alt="Filter" className="w-6 h-6" />}
        />
      </div>
    </header>
  );
};