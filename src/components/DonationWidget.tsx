import { useState, useId, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Receipt, HelpCircle, ArrowRight, Download, Award, ShieldCheck, X, FileBadge } from 'lucide-react';
import { DonationRecord } from '../types';

interface DonationWidgetProps {
  prefilledCause?: string;
}

export default function DonationWidget({ prefilledCause }: DonationWidgetProps) {
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedPreset, setSelectedPreset] = useState<number>(1500);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorName, setDonorName] = useState<string>('');
  const [donorEmail, setDonorEmail] = useState<string>('');
  const [donorPan, setDonorPan] = useState<string>('');
  const [cause, setCause] = useState<string>(prefilledCause || 'NayePankh General Welfare');
  const [activeReceipt, setActiveReceipt] = useState<DonationRecord | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Sync state if prefilledCause changes
  useState(() => {
    if (prefilledCause) {
      setCause(prefilledCause);
    }
  });

  const frequencyId = useId();
  const presetId = useId();
  const causeId = useId();

  const presets = [
    { amount: 500, desc: 'School Kits for 1 Child', detail: 'Provides notebooks, bag, and water bottle under Project Shiksha.' },
    { amount: 1500, desc: 'Feed 3 Families for a Week', detail: 'Delivers high-quality homecooked hot food packets daily.' },
    { amount: 3000, desc: 'Hygiene Kits for 20 Women', detail: 'Provides medical guidance and clean eco-friendly sanitary napkins.' },
    { amount: 5000, desc: 'Adopt a Slum Care Block', detail: 'Full-time blankets, food batches, and medicine supplies.' }
  ];

  const handleAmountSelect = (amount: number) => {
    setSelectedPreset(amount);
    setCustomAmount('');
  };

  const handleCustomChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedPreset(0);
  };

  const getFinalAmount = () => {
    if (selectedPreset > 0) return selectedPreset;
    const val = parseFloat(customAmount);
    return isNaN(val) ? 0 : val;
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!donorName) return;
    const finalAmount = getFinalAmount();
    if (finalAmount <= 0) return;

    setIsSubmitting(true);

    // Simulate safe secure gateway transfer
    setTimeout(() => {
      const uniqueId = `NP-${Date.now().toString().slice(-6)}-${Math.floor(1000 + Math.random() * 9000)}`;
      const record: DonationRecord = {
        donorName,
        amount: finalAmount,
        frequency,
        cause,
        certifiedId: uniqueId,
        timestamp: new Date().toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      };

      setActiveReceipt(record);
      setIsSubmitting(false);

      // Clean form
      setDonorName('');
      setDonorEmail('');
      setDonorPan('');
      setCustomAmount('');
      setSelectedPreset(1500);
    }, 1500);
  };

  return (
    <section id="donate" className="relative py-20 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      
      {/* Visual background details */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-orange/5 blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-brand-blue/5 blur-3xl -z-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Text Block */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-1 bg-brand-orange/10 px-3 py-1 rounded-full text-xs font-semibold text-brand-orange uppercase tracking-wider border border-brand-orange/20">
              <Heart className="h-3 w-3 fill-brand-orange" />
              <span>100% Direct Transparencies</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight leading-tight">
              Fuel the Dreams of <span className="text-brand-orange">NayePankh</span>
            </h2>

            <p className="font-sans text-neutral-600 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
              Your small monetary fuel triggers direct physical works immediately. We post high-resolution ground reports containing photos, names, and purchase ledger details directly to all donors.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-200">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-neutral-900 dark:text-white">Tax Exemption benefits (80G)</h4>
                  <p className="font-sans text-xs text-neutral-400">All citizens of India paying domestic taxes receive a claimable 50% relaxation status on their taxable slab under Govt code Section 80G.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 rounded-full bg-blue-100 dark:bg-blue-950/40 text-brand-blue dark:text-sky-400 flex items-center justify-center shrink-0 border border-blue-200">
                  <Receipt className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-neutral-900 dark:text-white">Digital Certified Honors</h4>
                  <p className="font-sans text-xs text-neutral-400">Receive an official appreciation badge and printable donation legal clearance sheet instantly in your account block upon submission.</p>
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-neutral-800/40 p-4 rounded-r-2xl">
              <p className="font-sans text-xs italic text-neutral-600 dark:text-neutral-300">
                "Knowing exactly that ₹1500 from my budget feeds a family of four for an entire week gave me immense direct purpose. The team sent me high-res photos next Sunday!"
              </p>
              <span className="block font-mono text-[10px] text-neutral-400 uppercase mt-2 font-semibold">— Ritika S., Bangalore (NayePankh Member)</span>
            </div>
          </div>

          {/* Right Donation Form */}
          <div className="lg:col-span-7 bg-white dark:bg-neutral-950 border border-neutral-150 dark:border-neutral-800/80 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="font-display text-xl sm:text-2xl font-black text-neutral-950 dark:text-neutral-50 mb-6 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-brand-orange" />
              <span>Select Support Tiers</span>
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              {/* Frequency Selector */}
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest block">Choose Cadence:</span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFrequency('one-time')}
                    className={`py-3 rounded-xl font-display text-xs font-bold transition-all cursor-pointer ${
                      frequency === 'one-time'
                        ? 'bg-brand-orange text-white shadow-sm'
                        : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-600 dark:bg-neutral-900 dark:hover:bg-neutral-850 dark:text-neutral-300'
                    }`}
                  >
                    One-time Contribution
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('monthly')}
                    className={`py-3 rounded-xl font-display text-xs font-bold transition-all cursor-pointer ${
                      frequency === 'monthly'
                        ? 'bg-brand-orange text-white shadow-sm'
                        : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-600 dark:bg-neutral-900 dark:hover:bg-neutral-850 dark:text-neutral-300'
                    }`}
                  >
                    Monthly (Adopt Regular Student Support)
                  </button>
                </div>
              </div>

              {/* Presets Grid */}
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest block">Sponsor Levels (₹):</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {presets.map((preset) => (
                    <button
                      key={preset.amount}
                      type="button"
                      onClick={() => handleAmountSelect(preset.amount)}
                      className={`p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                        selectedPreset === preset.amount
                          ? 'border-brand-orange bg-brand-orange/5 text-neutral-950 dark:text-white ring-2 ring-brand-orange/40'
                          : 'border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900 text-[#2D2D2D]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display font-extrabold text-lg">₹{preset.amount.toLocaleString()}</span>
                        {selectedPreset === preset.amount && (
                          <span className="h-2 w-2 rounded-full bg-brand-orange animate-ping" />
                        )}
                      </div>
                      <span className="block font-display text-xs font-bold text-neutral-900 dark:text-white mt-1">{preset.desc}</span>
                      <span className="block font-sans text-[10px] text-neutral-400 leading-normal mt-1">{preset.detail}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Input */}
              <div className="space-y-1.5">
                <label className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest block">Or Enter Specific Clean Amount (₹):</label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-neutral-400 font-display font-bold">₹</span>
                  <input
                    type="number"
                    min="100"
                    placeholder="E.g. 10000"
                    value={customAmount}
                    onChange={handleCustomChange}
                    className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl py-3 pl-8 pr-4 font-display font-bold text-neutral-900 dark:text-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                  />
                </div>
              </div>

              {/* Cause Selector */}
              <div className="space-y-1.5">
                <label className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest block">Direct Towards Campaign:</label>
                <select
                  value={cause}
                  onChange={(e) => setCause(e.target.value)}
                  className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl py-3 px-4 font-sans text-sm text-neutral-800 dark:text-neutral-200 focus:border-brand-orange"
                >
                  <option value="NayePankh General Welfare">NayePankh General Welfare & Operational Contingencies</option>
                  <option value="NayePankh Rasoi Food Drives">NayePankh Rasoi (Cooking and Feeding Starving Families)</option>
                  <option value="Project Shiksha Classes">Project Shiksha (Books, School bags & Volunteer Teacher Honorariums)</option>
                  <option value="Project Hygiene Menstrual Integrity">Project Hygiene (Clinical Sanitary napkins & Taboo removal packs)</option>
                  <option value="Project Paridhan Clothes Drive">Project Paridhan (Emergency thermal clothing & Sidewalk blankets)</option>
                </select>
              </div>

              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">Full Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter donor name"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl py-2.5 px-4 font-sans text-sm text-neutral-900 dark:text-white focus:border-brand-orange"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">Email Address:</label>
                  <input
                    type="email"
                    required
                    placeholder="E.g. name@domain.com"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl py-2.5 px-4 font-sans text-sm text-neutral-900 dark:text-white focus:border-brand-orange"
                  />
                </div>
              </div>

              {/* Optional PAN Card */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">PAN Card Number (Optional):</label>
                  <span className="text-[9px] font-medium text-emerald-500 uppercase tracking-wider bg-emerald-500/5 px-1.5 rounded">Eligible for 80G receipt</span>
                </div>
                <input
                  type="text"
                  maxLength={10}
                  placeholder="E.g. ABCDE1234F"
                  value={donorPan}
                  onChange={(e) => setDonorPan(e.target.toUpperCase())}
                  className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl py-2.5 px-4 font-mono text-sm text-neutral-900 dark:text-white uppercase focus:border-brand-orange"
                />
              </div>

              {/* Final Submit Trigger */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative overflow-hidden group rounded-2xl bg-brand-orange py-4 font-display font-extrabold text-sm text-white shadow-lg shadow-orange-500/20 active:scale-95 hover:bg-brand-orange-hover transition-all duration-205 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <span>Establishing Secure Encryption...</span>
                  </div>
                ) : (
                  <>
                    <Heart className="h-4 w-4 fill-white" />
                    <span>Complete Contribution of ₹{getFinalAmount().toLocaleString()}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="text-center font-mono text-[10px] text-neutral-400 max-w-sm mx-auto">
                By completing, you confirm that your domestic banking accounts are verified under Indian RBI regulations.
              </div>
            </form>
          </div>

        </div>
      </div>

      {/* Dynamic Receipt & Honor Certificate Modal */}
      <AnimatePresence>
        {activeReceipt && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveReceipt(null)}
              className="absolute inset-0 bg-neutral-950/85 backdrop-blur-sm"
            />

            {/* Certificate Frame Box */}
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className="relative w-full max-w-3xl overflow-hidden rounded-[2.5rem] bg-amber-50/50 p-1 border border-amber-200 shadow-2xl z-20"
            >
              
              {/* Gold Matte Border Graphic inside */}
              <div className="rounded-[2.2rem] bg-white border-4 border-double border-amber-400 p-8 sm:p-12 space-y-8 relative overflow-hidden dark:bg-neutral-950 dark:border-neutral-800">
                
                {/* Background Watermark wings graphic */}
                <div className="absolute inset-x-0 top-1/4 flex justify-center opacity-3 pointer-events-none select-none text-[35rem] leading-none text-neutral-100 dark:text-neutral-900 font-bold font-sans">
                  NP
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setActiveReceipt(null)}
                  className="absolute right-6 top-6 p-1.5 rounded-full border border-neutral-200 text-neutral-400 hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-500 dark:hover:bg-neutral-900 transition-colors z-20 cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Header Badge */}
                <div className="text-center space-y-2 relative z-10">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-100 border border-amber-300 shadow-inner text-amber-500">
                    <Award className="h-10 w-10 animate-bounce" />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest font-extrabold uppercase text-amber-500 block">NayePankh Foundation Relief Network</span>
                  <p className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                    Certificate of Appreciation
                  </p>
                  <div className="h-1 w-24 bg-amber-300 mx-auto rounded-full" />
                </div>

                {/* Certificate Core Statement */}
                <div className="text-center space-y-6 relative z-10">
                  <p className="font-sans text-xs sm:text-sm text-neutral-500 italic">This honorary testimonial is proudly presented to</p>
                  
                  <h4 className="font-display text-2xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight border-b-2 border-neutral-100 pb-2 max-w-lg mx-auto">
                    {activeReceipt.donorName}
                  </h4>

                  <p className="font-sans text-xs sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-xl mx-auto">
                    In deeply grateful appreciation and high honor of your benevolent contribution of <strong className="font-bold text-neutral-950 dark:text-white">₹{activeReceipt.amount.toLocaleString()}</strong> towards the critical developmental cause <strong className="font-bold text-neutral-950 dark:text-white">"{activeReceipt.cause}"</strong>. Your structural solidarity equips our field squads to provide wings of survival, health, and literacy.
                  </p>
                </div>

                {/* Signatures & Certification details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-10 border-t border-neutral-100 dark:border-neutral-900 relative z-10 text-center items-end">
                  
                  {/* Left Signature column */}
                  <div className="space-y-1">
                    <p className="font-cursive text-amber-600 dark:text-amber-400 font-semibold italic text-lg leading-none">Prashant Shukla</p>
                    <div className="h-0.5 bg-neutral-200 mx-auto w-32" />
                    <span className="block font-mono text-[9px] text-neutral-400 uppercase tracking-widest mt-1">Founder & President</span>
                  </div>

                  {/* Middle Certification Stamp ID */}
                  <div className="p-3 bg-neutral-50 dark:bg-neutral-900 rounded-xl max-w-[200px] mx-auto space-y-1">
                    <span className="block font-mono text-[8px] text-neutral-400 uppercase">Verification Stamp ID:</span>
                    <span className="block font-mono text-[10px] font-bold text-brand-orange tracking-wider">
                      {activeReceipt.certifiedId}
                    </span>
                    <span className="block font-mono text-[8px] text-neutral-400">Date: {activeReceipt.timestamp}</span>
                  </div>

                  {/* Right Print CTA */}
                  <div className="space-y-2">
                    <button
                      onClick={() => window.print()}
                      className="mx-auto flex items-center justify-center gap-1.5 rounded-lg bg-neutral-900 px-4 py-2 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 font-display text-[10px] font-bold tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      <Download className="h-3 w-3" />
                      <span>Print Certificate</span>
                    </button>
                    <span className="block font-sans text-[8px] text-neutral-400">Tax relief invoice dispatch sent to email.</span>
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
