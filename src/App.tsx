/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Landmark, Send, Award, ArrowUpRight, ShieldCheck, Leaf, Sparkles, ChevronRight, MessageSquareCode, Volume2 } from 'lucide-react';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import StatsCounter from './components/StatsCounter';
import CampaignsSection from './components/CampaignsSection';
import DonationWidget from './components/DonationWidget';
import VolunteerForm from './components/VolunteerForm';
import FAQStories from './components/FAQStories';
import ContactSection from './components/ContactSection';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('about');
  const [prefilledCause, setPrefilledCause] = useState<string>('');

  // Sponsoring a campaign auto-scrolls to the donation widget with prefilled data
  const handleDonateCampaign = (campaignTitle: string) => {
    setPrefilledCause(`Project Campaign Support: ${campaignTitle}`);
    const element = document.getElementById('donate');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Immediate donate trigger on Navbar
  const handleNavbarDonate = () => {
    setPrefilledCause('NayePankh General Welfare');
    const element = document.getElementById('donate');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Dark Mode side effects
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Sync active nav item on scroll positions
  useEffect(() => {
    const sections = ['about', 'campaigns', 'impact', 'volunteer', 'faq', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-cream font-sans text-[#2D2D2D] dark:bg-neutral-950 dark:text-neutral-200 transition-colors duration-300">
      
      {/* Navbar Assembly */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        onDonateClick={handleNavbarDonate}
      />

      {/* Hero Header Area */}
      <header id="hero" className="relative overflow-hidden bg-brand-cream dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900/40 py-16 lg:py-24 transition-colors duration-300">
        
        {/* Subtle Background Radial Shapes */}
        <div className="absolute top-1/4 left-1/10 h-72 w-72 rounded-full bg-brand-orange/5 blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-1/10 h-96 w-96 rounded-full bg-brand-orange/5 blur-3xl -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Block: Bold display text */}
            <div className="lg:col-span-7 space-y-6 lg:pr-6 text-center lg:text-left">
              
              {/* Highlight badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100/80 px-4 py-1 text-[11px] font-bold text-brand-orange uppercase tracking-widest dark:bg-orange-950/40">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Let's change underprivileged lives together</span>
              </div>

              {/* Major Display head */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#1A1A1A] dark:text-white leading-tight tracking-tight">
                Empowering Lives with <br/>
                <span className="text-brand-orange">New Wings</span> of Pride.
              </h1>

              {/* Sub descriptor */}
              <p className="font-sans text-gray-600 dark:text-neutral-350 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                NayePankh Foundation is a registered Section 8 NGO based in Kanpur, India. We do not just run charity programs—we provide structural children education, fresh homecooked meals, winter survival systems, and complete female period dignity directly to families on slum margins.
              </p>

              {/* Quick hooks with anchors */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={() => {
                    const el = document.getElementById('donate');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto h-14 flex items-center justify-center gap-2 rounded-xl bg-brand-orange hover:bg-brand-orange-hover px-8 font-display font-bold text-sm text-white shadow-md active:scale-95 transition-all cursor-pointer"
                >
                  <Heart className="h-4.5 w-4.5 fill-white" />
                  <span>Sponsor a poor child</span>
                  <ChevronRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('volunteer');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto h-14 flex items-center justify-center gap-2 rounded-xl border-2 border-neutral-200 bg-white hover:bg-gray-50 text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900 dark:text-neutral-200 px-8 font-display font-bold text-sm transition-all cursor-pointer"
                >
                  <span>Become a Volunteer</span>
                  <ArrowUpRight className="h-4 w-4 text-neutral-400" />
                </button>
              </div>

              {/* Quick micro ratings */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-neutral-250/50 dark:border-neutral-900/80 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <span className="block font-display text-lg sm:text-xl font-bold text-neutral-950 dark:text-white">80G Benefit</span>
                  <span className="block font-sans text-[10px] text-neutral-400 uppercase">Tax Free returns</span>
                </div>
                <div className="text-center lg:text-left border-l border-neutral-200 dark:border-neutral-800 pl-4">
                  <span className="block font-display text-lg sm:text-xl font-bold text-neutral-950 dark:text-white">100% Audit</span>
                  <span className="block font-sans text-[10px] text-neutral-400 uppercase">Clear Ledgers</span>
                </div>
                <div className="text-center lg:text-left border-l border-neutral-200 dark:border-neutral-800 pl-4">
                  <span className="block font-display text-lg sm:text-xl font-bold text-neutral-950 dark:text-white">Section 8</span>
                  <span className="block font-sans text-[10px] text-neutral-400 uppercase">Govt registered</span>
                </div>
              </div>

            </div>

            {/* Right Block: Interactive Interactive Badge illustration card */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-brand-orange/10 rounded-3xl filter blur-2xl transform rotate-3 scale-95 opacity-50" />
              
              <div className="relative rounded-3xl border border-neutral-200/80 bg-white dark:border-neutral-800 dark:bg-neutral-950 p-6 sm:p-8 shadow-sm space-y-6">
                
                {/* Brand header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="h-6 w-6 rounded-full bg-brand-orange text-white flex items-center justify-center text-[10px] font-black">
                      ✓
                    </div>
                    <span className="font-display font-black text-xs text-neutral-900 dark:text-neutral-200">NayePankh Operations</span>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
                </div>

                {/* Major Campaign Showcase */}
                <div className="space-y-4">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block font-bold">Featured Ground Work</span>
                  
                  <div className="rounded-2xl bg-neutral-50 dark:bg-neutral-900/70 p-4 border border-neutral-150 dark:border-neutral-800/80">
                    <h3 className="font-display font-black text-base text-neutral-900 dark:text-white flex items-center gap-2">
                      <span className="text-xl">🎒</span>
                      <span>Project Shiksha Classrooms</span>
                    </h3>
                    <p className="font-sans text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mt-2">
                       Currently holding outdoor syllabus workshops under raw slum clusters for over 200+ kids who previously begged on platform streets.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-neutral-50 dark:bg-neutral-900/70 p-4 border border-neutral-150 dark:border-neutral-800/80">
                    <h3 className="font-display font-black text-base text-neutral-900 dark:text-white flex items-center gap-2">
                      <span className="text-xl">🍲</span>
                      <span>Daily NayePankh Rasoi Kitchen</span>
                    </h3>
                    <p className="font-sans text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mt-2">
                       Delivering freshly prepared hot grain diet buckets to flyover locations. Over 50,000+ meals cooked on ground since inception.
                    </p>
                  </div>
                </div>

                {/* Decorative CTA */}
                <div className="border-t border-neutral-100 dark:border-neutral-800 pt-4 flex items-center justify-between text-xs text-neutral-400">
                  <span className="font-mono">Led by Prashant Shukla</span>
                  <div className="flex items-center gap-1 font-semibold text-brand-orange dark:text-sky-400 cursor-pointer" onClick={() => {
                    const el = document.getElementById('campaigns');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    <span>Explore campaigns</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </header>

      {/* About Us section */}
      <AboutSection />

      {/* Real-time numerical stats dashboard counters */}
      <StatsCounter />

      {/* Ground Campaigns Section */}
      <CampaignsSection onDonateCampaign={handleDonateCampaign} />

      {/* Secure Interactive Donation Container form */}
      <DonationWidget prefilledCause={prefilledCause} />

      {/* Interactive Volunteer Squad pass portal */}
      <VolunteerForm />

      {/* FAQs and Success Diaries */}
      <FAQStories />

      {/* Physical contacts and inquiry desks */}
      <ContactSection />

      {/* Elegant structural page footer */}
      <footer className="bg-neutral-950 text-neutral-450 text-xs py-16 border-t border-neutral-900 font-sans transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-neutral-400">
            
            {/* Column 1 Logo */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange text-white font-display text-sm font-bold">
                  <div className="w-5 h-5 border-t-2 border-r-2 border-white transform rotate-45 translate-y-0.5 -translate-x-0.5" />
                </div>
                <span className="font-display font-bold text-lg text-white">NayePankh <span className="font-light text-brand-orange">Foundation</span></span>
              </div>
              <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                NayePankh Foundation ("New Wings") represents one of the premier registered youth-driven non-profit organizations headquartered in Kanpur, India. Dedicated to structural poverty alleviation, primary slum children literacy, and pure women menstrual hygiene protection.
              </p>
              <div className="flex items-center gap-1.5 text-[10px] text-brand-orange bg-brand-orange/5 p-2.5 rounded-xl inline-block border border-brand-orange/15">
                <Landmark className="h-3.5 w-3.5" />
                <span>MCA Govt Registered Section 8 NGO</span>
              </div>
            </div>

            {/* Column 2 Navigation Links */}
            <div className="md:col-span-3 space-y-4 pl-0 md:pl-8">
              <h4 className="font-display font-extrabold text-[#FF6B6B] uppercase text-[11px] tracking-widest">Ground Work</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-brand-orange transition-colors">Our Story & Board</a></li>
                <li><a href="#campaigns" className="hover:text-brand-orange transition-colors">Project Shiksha Classes</a></li>
                <li><a href="#campaigns" className="hover:text-brand-orange transition-colors">NayePankh Cooking Kitchen</a></li>
                <li><a href="#campaigns" className="hover:text-brand-orange transition-colors">Project Period Hygiene</a></li>
                <li><a href="#volunteer" className="hover:text-brand-orange transition-colors">Field Squad Openings</a></li>
              </ul>
            </div>

            {/* Column 3 Audits & Exemption parameters */}
            <div className="md:col-span-5 space-y-4">
              <h4 className="font-display font-extrabold text-[#FF6B6B] uppercase text-[11px] tracking-widest">Fiscal Credentials & Exemption</h4>
              <p className="font-sans text-xs text-neutral-400 leading-normal">
                Contributions made within domestic Indian parameters are claimable for 50% income-tax relaxations under section <strong>80G</strong> of the Indian Tax Act. Original printable tax-invoice sheets and appreciation cards are generated instantly upon gateway verification.
              </p>
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-neutral-500 bg-neutral-900 p-4 rounded-2xl border border-neutral-850">
                <div>
                  <span className="block font-sans text-[8px] text-neutral-450 uppercase">AUDIT REGISTRATION NO</span>
                  <span className="text-neutral-300">NP-85300-MCA</span>
                </div>
                <div>
                  <span className="block font-sans text-[8px] text-neutral-450 uppercase">CSR REGISTRATION NO</span>
                  <span className="text-neutral-300">CSR-00021-VOL</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright line and tags */}
          <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-550">
            <div>
              &copy; {new Date().getFullYear()} NayePankh Foundation. Registered Section 8 Non-Profit Organization, Kanpur, UP, India. Let's Spread Wings Together.
            </div>
            
            <div className="flex items-center gap-1 font-mono text-[9px] text-brand-orange">
              <Leaf className="h-3 w-3 text-emerald-500" />
              <span>Shedding light in the dark, giving wings to dream</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

