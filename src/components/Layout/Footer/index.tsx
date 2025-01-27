"use client";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pt-6 dark:bg-gray-dark md:pt-20 lg:pt-12 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8 md:flex-row md:justify-between md:space-y-0">
          <div className="text-xl font-semibold">XYLON</div>
          <p>© 2025 Xylon LLC. All rights reserved. Crafting a greener future with blockchain technology.</p>
          <div className="text-sm md:text-base">&copy; 2024 XYLON Labs</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;