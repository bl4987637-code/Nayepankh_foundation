import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, Heart, Leaf } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onDonateClick: () => void;
}

export default function Navbar({
  darkMode,
  setDarkMode,
  activeTab,
  setActiveTab,
  onDonateClick
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About Us' },
    { id: 'campaigns', label: 'Our Campaigns' },
    { id: 'impact', label: 'Impact Stories' },
    { id: 'volunteer', label: 'Get Involved' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/90 backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-950/90 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div 
            className="flex cursor-pointer items-center space-x-3" 
            onClick={() => handleNavClick('hero')}
            id="nav-logo"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange shadow-md text-white">
              <div className="w-5 h-5 border-t-2 border-r-2 border-white transform rotate-45 translate-y-0.5 -translate-x-0.5" />
            </div>
            <div>
              <span className="font-display text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 flex items-center">
                NayePankh&nbsp;
                <span className="font-light text-brand-orange">
                  Foundation
                </span>
              </span>
              <p className="text-[9px] font-sans tracking-widest text-[#2D2D2D]/60 dark:text-neutral-400 uppercase -mt-0.5 font-bold">
                Spread Your Wings
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-item-${item.id}`}
                  className={`relative rounded-lg px-4 py-2 font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-brand-orange dark:text-brand-orange font-bold'
                      : 'text-neutral-500 hover:text-brand-orange dark:text-neutral-300 dark:hover:text-brand-orange'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-brand-orange"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Actions: Theme Toggle & Donate */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Dark mode button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              id="theme-toggle-desktop"
              aria-label="Toggle Theme"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-neutral-200 text-neutral-600 bg-neutral-50 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800/80 transition-all duration-200"
            >
              {darkMode ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Quick Donate Button */}
            <button
              onClick={onDonateClick}
              id="donate-btn-nav"
              className="group relative flex items-center justify-center gap-1.5 overflow-hidden rounded-xl bg-brand-orange px-5 py-2.5 font-display text-sm font-bold text-white shadow-md hover:bg-brand-orange-hover active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <Heart className="h-4 w-4 fill-white group-hover:scale-110 transition-transform duration-200" />
              <span>Donate Now</span>
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              id="theme-toggle-mobile"
              aria-label="Toggle Theme"
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-neutral-200 text-neutral-600 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 transition-all duration-200"
            >
              {darkMode ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-btn"
              aria-label="Open Menu"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 transition-all duration-200 cursor-pointer"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 overflow-hidden"
          >
            <div className="space-y-1 px-4 py-3 pb-4">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    id={`mobile-nav-item-${item.id}`}
                    className={`block w-full text-left rounded-lg px-4 py-2.5 font-sans text-base font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-neutral-105 text-brand-orange dark:bg-neutral-900'
                        : 'text-neutral-600 hover:bg-neutral-50 hover:text-brand-orange/90 dark:text-neutral-300'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-col space-y-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onDonateClick();
                  }}
                  id="mobile-donate-action"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-orange hover:bg-brand-orange-hover py-3 font-display font-bold text-sm text-white shadow-md cursor-pointer transition-colors"
                >
                  <Heart className="h-5 w-5 fill-white" />
                  <span>Donate to support poor lives</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
