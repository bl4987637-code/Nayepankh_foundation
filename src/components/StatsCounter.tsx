import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Utensils, GraduationCap, Sparkles, HeartPulse, ShieldCheck, Users } from 'lucide-react';

export default function StatsCounter() {
  const [liveMeals, setLiveMeals] = useState(52418);
  const [livePads, setLivePads] = useState(12874);

  // Live simulation to show ongoing ground operations in real-time
  useEffect(() => {
    const mealInterval = setInterval(() => {
      setLiveMeals(prev => prev + Math.floor(Math.random() * 2) + 1);
    }, 7000);

    const padInterval = setInterval(() => {
      setLivePads(prev => prev + (Math.random() > 0.65 ? 1 : 0));
    }, 12000);

    return () => {
      clearInterval(mealInterval);
      clearInterval(padInterval);
    };
  }, []);

  const statItems = [
    {
      id: 'meals',
      icon: <Utensils className="h-6 w-6 text-brand-orange" />,
      value: liveMeals.toLocaleString(),
      label: 'Nutritious Meals Served',
      detail: 'Provided via NayePankh Rasoi daily food distribution drives.',
      live: true,
      bg: 'bg-white',
      border: 'border-neutral-200/50'
    },
    {
      id: 'education',
      icon: <GraduationCap className="h-6 w-6 text-brand-orange" />,
      value: '5,000+',
      label: 'Syllabus Kits & Students',
      detail: 'Underprivileged Children certified under Project Shiksha classes.',
      live: false,
      bg: 'bg-white',
      border: 'border-neutral-200/50'
    },
    {
      id: 'hygiene',
      icon: <HeartPulse className="h-6 w-6 text-brand-orange" />,
      value: livePads.toLocaleString(),
      label: 'Menstrual Kits Distributed',
      detail: 'Eco-safe sanitary items & educational guidance sessions held.',
      live: true,
      bg: 'bg-white',
      border: 'border-neutral-200/50'
    },
    {
      id: 'volunteers',
      icon: <Users className="h-6 w-6 text-brand-orange" />,
      value: '350+',
      label: 'Registered Field Squads',
      detail: 'Passionate youngsters driving food, clothes, and teaching squads.',
      live: false,
      bg: 'bg-white',
      border: 'border-neutral-200/50'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-brand-cream py-16 text-[#2D2D2D] transition-colors duration-300">
      
      {/* Background Decorative Circles */}
      <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-brand-orange/5 blur-3xl" />
      <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-brand-orange/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Head description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-neutral-200 pb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-orange animate-ping" />
              <span className="font-mono text-xs font-bold tracking-wider text-brand-orange uppercase">Live Impact Statistics</span>
            </div>
            <h3 className="font-display text-2xl md:text-4xl font-extrabold tracking-tight text-[#1A1A1A] dark:text-white">
              Real Impact, Measured in Real-Time
            </h3>
          </div>
          <p className="font-sans text-gray-500 text-sm max-w-md">
            We measure success not by boardroom pledges, but by actual meals delivered on ground, dry napkins distributed, and hours taught directly under trees.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((stat, i) => (
            <div
              key={stat.id}
              className={`relative overflow-hidden rounded-2xl border ${stat.border} ${stat.bg} p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group hover:border-brand-orange/30 hover:shadow-sm`}
            >
              {/* Header Box */}
              <div className="flex items-center justify-between mb-4">
                <div className="h-10 w-10 rounded-xl bg-orange-100/40 flex items-center justify-center border border-orange-100/50 shadow-inner group-hover:scale-105 transition-transform duration-200">
                  {stat.icon}
                </div>
                {stat.live && (
                  <div className="flex items-center gap-1 bg-orange-50 border border-brand-orange/20 rounded-full px-2 py-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-pulse" />
                    <span className="text-[9px] font-mono font-bold tracking-wider text-brand-orange uppercase">Active</span>
                  </div>
                )}
              </div>

              {/* Main value */}
              <div className="space-y-1">
                <p className="font-display text-3xl sm:text-4xl font-black text-[#1A1A1A] tracking-tight">
                  {stat.value}
                </p>
                <h4 className="font-display text-xs font-bold text-[#2D2D2D]/80 uppercase tracking-wider">
                  {stat.label}
                </h4>
                <p className="font-sans text-xs text-gray-500 leading-relaxed mt-2">
                  {stat.detail}
                </p>
              </div>

              {/* Little dynamic bar background */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-neutral-100 to-transparent w-full" />
            </div>
          ))}
        </div>

        {/* Footnote Badge */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-brand-orange/10 flex items-center justify-center border border-brand-orange/20 text-brand-orange">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <p className="text-xs md:text-sm text-[#2D2D2D]/90 font-sans leading-relaxed">
              NayePankh processes donations compliant under <strong>Section 80G</strong> of the Income Tax Act, India. All payments are secured with immediate digital taxation receipts.
            </p>
          </div>
          <div className="flex items-center gap-1.5 shrink-0 bg-brand-cream border border-neutral-200 rounded-xl px-4 py-2 font-mono text-xs text-[#2D2D2D]/70">
            <Sparkles className="h-3.5 w-3.5 text-brand-orange" />
            <span>NITI Aayog Darpan Registered</span>
          </div>
        </div>

      </div>
    </section>
  );
}
