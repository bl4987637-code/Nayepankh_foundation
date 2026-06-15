import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Utensils, Heart, ChevronRight, X, ShieldAlert, CheckCircle, FlameKindling, Info } from 'lucide-react';
import { Campaign } from '../types';

interface CampaignsSectionProps {
  onDonateCampaign: (campaignTitle: string) => void;
}

export default function CampaignsSection({ onDonateCampaign }: CampaignsSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'education' | 'food' | 'hygiene' | 'clothing'>('all');
  const [activeModalId, setActiveModalId] = useState<string | null>(null);

  const campaigns: Campaign[] = [
    {
      id: 'rasoi',
      title: 'NayePankh Rasoi',
      tagline: 'Feeding hungry souls on railway tracks & slum streets daily.',
      description: 'Provides fresh, daily hot-cooked balanced nutritious meals to families facing absolute extreme food shortages, structural starvation, and underdevelopment on the margins of Kanpur.',
      longDescription: 'Hunger is the first barrier to any progress. When children do not eat, they cannot study; instead, they resort to waste picking, rag begging, or crime. Our NayePankh Rasoi operates daily ground kitchen vans. Volunteers buy high-quality, local, clean grains and cook home-style meals (dal, rice, seasonal vegetables). We distribute these meals straight into slums, railway platforms, and flyovers, maintaining highest dignity and high hygiene quotients.',
      impactGoal: '1,00,000 Nutritious Meals cooked',
      impactAchieved: '52,418 Meals delivered on ground',
      category: 'food',
      image: '🍛',
      raisedPercent: 68
    },
    {
      id: 'shiksha',
      title: 'Project Shiksha',
      tagline: 'Empowering children with books, classes & core values.',
      description: 'Breaks the cycle of generational poverty by providing free educational batches, uniform distributions, free books, notebooks, writing materials, and interactive tutoring workshops.',
      longDescription: 'Traditional schools remain inaccessible or irrelevant to child dwellers on street margins. Project Shiksha brings classrooms straight under trees and into community halls inside slums. We provide customized primary grade literacy courses, physical kits (school bags, geometric notebooks, pencils, custom workbooks), and life skills training. We actively mentor parents, showing them why letting children learn is far more sustainable than sending them out to beg.',
      impactGoal: '10,000 School Kits & Active Tutoring',
      impactAchieved: '5,120 Registered Slum Children educated',
      category: 'education',
      image: '🎒',
      raisedPercent: 78
    },
    {
      id: 'hygiene',
      title: 'Project Hygiene',
      tagline: 'Dignifying menstrual cycles with napkin cards.',
      description: 'Shatters age-old dogmas concerning periods by creating local clinical guidance booths and supplying thousands of eco-friendly sanitary napkins to girls in remote neighborhoods.',
      longDescription: 'In Indian slum communities, menstruation represents a severe biological hazard of deep shame and silent infections. Women are forced to use toxic materials like sand, old rags, paper, or ash, leading to chronic reproductive tracking issues. Project Hygiene supplies reusable menstrual health kits alongside sanitary napkin pads. We hold silent, safe community interactive health circles overseen by female helpers to answer queries and normalize physical periods.',
      impactGoal: '25,000 Hygiene Napkin distributions',
      impactAchieved: '12,874 Menstrual Units distributed',
      category: 'hygiene',
      image: '🌸',
      raisedPercent: 55
    },
    {
      id: 'paridhan',
      title: 'Project Paridhan',
      tagline: 'Defeated dangerous winter chills with blanket circles.',
      description: 'Distributes protective heavy thermal items, custom jackets, thick blankets, and durable clothing items to families forced to sleep directly on cold concrete platforms.',
      longDescription: 'Winters in North India are famously harsh, with temperatures dropping below 4°C in UP. For families sleeping on platforms or plastic-tarp shacks, this represents a matter of survival, especially for newborn babies and the elderly. Project Paridhan coordinates quick winter emergency responses. Our teams drive around Kanpur streets at midnight, gently wrapping heavy blankets around shivering pavement-dwellers.',
      impactGoal: '8,000 Heavy Thermal Blankets',
      impactAchieved: '4,650 Warm Blankets placed on sidewalks',
      category: 'clothing',
      image: '🧣',
      raisedPercent: 82
    }
  ];

  const filteredCampaigns = selectedFilter === 'all' 
    ? campaigns 
    : campaigns.filter(c => c.category === selectedFilter);

  const activeCampaign = campaigns.find(c => c.id === activeModalId);

  return (
    <section id="campaigns" className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3">
            <span className="text-brand-orange uppercase text-xs font-bold font-display tracking-widest bg-orange-50 dark:bg-orange-950/40 px-3 py-1 rounded-full border border-orange-100 dark:border-orange-900/50">Ground Campaigns</span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-neutral-900 dark:text-neutral-50 tracking-tight leading-none">
              Programs We Run <span className="text-brand-orange">Diligently</span>
            </h2>
            <p className="font-sans text-xs md:text-sm text-neutral-550 dark:text-neutral-400">
              Each campaign addresses a critical developmental blind spot with dedicated personnel, checklists, and reports.
            </p>
          </div>

          {/* Filters controls */}
          <div className="flex flex-wrap gap-2 pt-4 md:pt-0">
            {(['all', 'food', 'education', 'hygiene', 'clothing'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-lg font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-brand-orange border-brand-orange text-white'
                    : 'bg-neutral-50 border border-neutral-200/50 text-neutral-600 hover:bg-neutral-100 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800'
                }`}
              >
                {filter === 'all' ? 'Show All' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Campaign Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCampaigns.map((c) => (
            <motion.div
              layout
              key={c.id}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-150 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/30 p-6 sm:p-8 transition-all hover:bg-white dark:hover:bg-neutral-900 hover:shadow-sm"
            >
              <div className="space-y-5">
                {/* Visual icon representation */}
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white dark:bg-neutral-800 shadow-sm text-3xl select-none">
                    {c.image}
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-brand-orange bg-brand-orange/5 px-2.5 py-1 rounded-lg border border-brand-orange/15">
                    {c.category}
                  </span>
                </div>

                {/* Info Text */}
                <div className="space-y-2">
                  <h3 className="font-display text-xl sm:text-2xl font-black text-neutral-950 dark:text-white leading-tight group-hover:text-brand-orange transition-colors">
                    {c.title}
                  </h3>
                  <p className="font-display text-xs italic text-brand-orange font-bold">
                    {c.tagline}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </div>

              {/* Progress and interactions */}
              <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800/50 space-y-4">
                
                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-sans">
                    <span className="text-neutral-450 font-medium">Progress achieved:</span>
                    <span className="font-bold text-[#1A1A1A] dark:text-white">{c.raisedPercent}% of target</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${c.raisedPercent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className="h-full bg-brand-orange" 
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between gap-4 pt-1">
                  <button
                    onClick={() => setActiveModalId(c.id)}
                    className="flex items-center text-xs font-bold text-brand-orange hover:underline gap-1 cursor-pointer"
                  >
                    <span>View Ground Story</span>
                    <ChevronRight className="h-3 w-3" />
                  </button>

                  <button
                    onClick={() => onDonateCampaign(c.title)}
                    className="px-5 py-2.5 rounded-xl bg-[#1A1A1A] hover:bg-gray-800 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 font-display text-xs font-bold transition-all cursor-pointer shadow-sm"
                  >
                    Sponsor This
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Campaign Details Deep-Dive Drawer Modal */}
      <AnimatePresence>
        {activeModalId && activeCampaign && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop cover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalId(null)}
              className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 shadow-2xl z-10 font-sans"
            >
              {/* Header Visual Bar */}
              <div className="relative h-1.5 bg-brand-orange" />

              {/* Close Button */}
              <button
                onClick={() => setActiveModalId(null)}
                className="absolute right-4 top-8 p-1.5 rounded-full border border-neutral-205 text-neutral-500 hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-900 transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Content area */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
                
                {/* Branding Headers */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-orange-50 dark:bg-orange-950/20 text-xl sm:text-2xl flex items-center justify-center shadow-inner">
                    {activeCampaign.image}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-brand-orange bg-brand-orange/5 px-2 py-0.5 rounded-md border border-brand-orange/15">{activeCampaign.category} Campaign</span>
                    <h3 className="font-display text-xl sm:text-2xl font-black text-neutral-900 dark:text-white leading-tight">
                      {activeCampaign.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs md:text-sm font-semibold italic text-brand-orange -mt-2">
                  "{activeCampaign.tagline}"
                </p>

                {/* Ground Reality Block */}
                <div className="space-y-3">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                    <ShieldAlert className="h-4 w-4 text-brand-orange" />
                    <span>The Ground Reality & Issues</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#2D2D2D] dark:text-neutral-300 leading-relaxed bg-[#F9F8F6] dark:bg-neutral-900/60 p-4 rounded-2xl border border-neutral-150 dark:border-neutral-800/80">
                    {activeCampaign.longDescription}
                  </p>
                </div>

                {/* Stat progress metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div className="p-4 rounded-xl border border-neutral-150 dark:border-neutral-800/80 bg-neutral-50 dark:bg-neutral-900/40">
                    <span className="text-[10px] uppercase text-neutral-400 tracking-widest font-bold block">Primary Goal set:</span>
                    <span className="font-display text-sm font-extrabold text-neutral-900 dark:text-neutral-200">
                      {activeCampaign.impactGoal}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl border border-brand-orange/15 bg-brand-orange/5">
                    <span className="text-[10px] uppercase text-brand-orange tracking-widest font-bold block">Impact Registered:</span>
                    <span className="font-display text-sm font-extrabold text-brand-orange flex items-center gap-1.5">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                      {activeCampaign.impactAchieved}
                    </span>
                  </div>

                </div>

                {/* Bottom CTA Actions */}
                <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                    <Info className="h-3.5 w-3.5 text-neutral-400" />
                    <span>Selected support pre-configures your donation container.</span>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => setActiveModalId(null)}
                      className="flex-1 sm:flex-none px-4 py-2 border border-neutral-200 hover:bg-[#F9F8F6] text-neutral-600 dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-900 text-xs font-semibold rounded-xl cursor-pointer"
                    >
                      Dismiss
                    </button>
                    <button
                      onClick={() => {
                        onDonateCampaign(activeCampaign.title);
                        setActiveModalId(null);
                      }}
                      className="flex-1 sm:flex-none group relative overflow-hidden rounded-xl bg-brand-orange px-5 py-2.5 font-display text-xs font-bold text-white shadow-md hover:bg-brand-orange-hover cursor-pointer transition-all duration-200"
                    >
                      Sponsor This Program Now
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
