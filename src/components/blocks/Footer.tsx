import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-12 border-t border-[#C3D4E9]/40">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-0 mb-12">
          <div className="max-w-[292px]">
            <div className="text-[32px] font-bold text-primary-500 tracking-[-0.96px] mb-4">
              MORENT
            </div>
            <p className="text-secondary-400 leading-6 font-medium">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16">
            <div>
              <h3 className="text-xl font-semibold text-secondary-500 mb-6">About</h3>
              <ul className="flex flex-col gap-4 text-secondary-400 font-medium">
                <li><a href="#" className="hover:text-primary-500">How it works</a></li>
                <li><a href="#" className="hover:text-primary-500">Featured</a></li>
                <li><a href="#" className="hover:text-primary-500">Partnership</a></li>
                <li><a href="#" className="hover:text-primary-500">Bussiness Relation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary-500 mb-6">Community</h3>
              <ul className="flex flex-col gap-4 text-secondary-400 font-medium">
                <li><a href="#" className="hover:text-primary-500">Events</a></li>
                <li><a href="#" className="hover:text-primary-500">Blog</a></li>
                <li><a href="#" className="hover:text-primary-500">Podcast</a></li>
                <li><a href="#" className="hover:text-primary-500">Invite a friend</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary-500 mb-6">Socials</h3>
              <ul className="flex flex-col gap-4 text-secondary-400 font-medium">
                <li><a href="#" className="hover:text-primary-500">Discord</a></li>
                <li><a href="#" className="hover:text-primary-500">Instagram</a></li>
                <li><a href="#" className="hover:text-primary-500">Twitter</a></li>
                <li><a href="#" className="hover:text-primary-500">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#C3D4E9]/40 pt-9 flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-0 font-semibold text-base">
          <div className="text-secondary-500">
            ©2022 MORENT. All rights reserved
          </div>
          <div className="flex gap-16 text-secondary-500">
            <a href="#" className="hover:text-primary-500">Privacy & Policy</a>
            <a href="#" className="hover:text-primary-500">Terms & Condition</a>
          </div>
        </div>
      </div>
    </footer>
  );
};