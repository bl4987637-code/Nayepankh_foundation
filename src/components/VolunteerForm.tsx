import { useState, useId, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Info, Sparkles, Send, Download, CheckCircle, FileDigit, Calendar, Sliders, QrCode, ShieldAlert, Award, X } from 'lucide-react';
import { VolunteerRecord } from '../types';

export default function VolunteerForm() {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [interest, setInterest] = useState<string>('teaching');
  const [hobbies, setHobbies] = useState<string>('');
  const [activeBadge, setActiveBadge] = useState<VolunteerRecord | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const squadId = useId();

  const handleApply = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;

    setIsSubmitting(true);

    // Simulate database registration
    setTimeout(() => {
      const generatedPass = `NP-VOL-${Math.floor(100000 + Math.random() * 900000)}`;
      const record: VolunteerRecord = {
        fullName,
        email,
        phone,
        interest,
        hobbies,
        badgeId: generatedPass,
        joinedDate: new Date().toLocaleDateString('en-IN', {
          month: 'long',
          year: 'numeric'
        })
      };

      setActiveBadge(record);
      setIsSubmitting(false);

      // Clean inputs
      setFullName('');
      setEmail('');
      setPhone('');
      setHobbies('');
    }, 1500);
  };

  const getInterestTitle = (key: string) => {
    switch (key) {
      case 'teaching': return 'Project Shiksha (Teaching)';
      case 'feeding': return 'Rasoi Kitchen (Feeding Squad)';
      case 'hygiene': return 'Project Hygiene (Health Squad)';
      case 'clothing': return 'Project Paridhan (Clothing drives)';
      case 'creative': return 'Social Media, Photos & Creative';
      default: return 'General Operations';
    }
  };

  const getInterestColor = (key: string) => {
    switch (key) {
      case 'teaching': return 'border-orange-500 text-brand-orange bg-brand-orange/5';
      case 'feeding': return 'border-orange-500 text-brand-orange bg-brand-orange/5';
      case 'hygiene': return 'border-orange-500 text-brand-orange bg-brand-orange/5';
      case 'clothing': return 'border-orange-500 text-brand-orange bg-brand-orange/5';
      case 'creative': return 'border-orange-500 text-brand-orange bg-brand-orange/5';
      default: return 'border-neutral-500 text-neutral-500 bg-neutral-500/5';
    }
  };

  return (
    <section id="volunteer" className="py-20 md:py-28 bg-white dark:bg-neutral-900/40 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-brand-orange uppercase text-xs font-bold font-display tracking-widest bg-orange-50 dark:bg-orange-950/40 px-3 py-1 rounded-full border border-orange-100 dark:border-orange-900/50">Become an NP Ambassador</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-neutral-905 dark:text-neutral-50 tracking-tight leading-none">
            Spread Your <span className="text-brand-orange">Wings</span> with Us
          </h2>
          <p className="font-sans text-xs md:text-sm text-neutral-505 dark:text-neutral-400 max-w-md mx-auto">
            You do not need deep wallets to join our crusade of love. Give your spare hours, hobbies, or digital energy to change a child's environment directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Information / Benefits */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-black text-xl sm:text-2xl text-neutral-900 dark:text-white leading-snug">
              Why Join NayePankh's Ground Force?
            </h3>
            
            <p className="font-sans text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              We started with a single hand-held meal basket in the outskirts of Kanpur, and scaled to a squad of hundreds of students. By joining us, you don't do desk administrative routines; you step right onto the dirt tracks to hand over notebooks, share food, listen to mothers description of periods, and teach math.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 bg-orange-100 dark:bg-orange-950/40 text-brand-orange rounded-xl flex items-center justify-center shrink-0 border border-orange-200">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-neutral-900 dark:text-white">Ground Level Leadership</h4>
                  <p className="font-sans text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">Manage feeding distribution tracks, teach Project Shiksha clusters, or drive micro-hygiene circles independently.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 bg-orange-100 dark:bg-orange-950/40 text-brand-orange rounded-xl flex items-center justify-center shrink-0 border border-orange-200">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-neutral-900 dark:text-white">Certified NGO Accreditation</h4>
                  <p className="font-sans text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">Earn verified Letter of Recommendation credentials signed by the central board for college credits or business portfolios.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-orange-50/50 dark:bg-neutral-800/40 border-l-4 border-brand-orange rounded-r-2xl text-xs flex gap-2.5">
              <Info className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
              <p className="text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                <strong>Next Onboarding:</strong> Onboarding orientation happens virtually every Saturday evening. Register below to receive your immediate pass instantly.
              </p>
            </div>
          </div>

          {/* Right Block: Register Form */}
          <div className="lg:col-span-7 bg-white dark:bg-neutral-950 border border-neutral-150 dark:border-neutral-800/80 rounded-3xl p-6 sm:p-8 shadow-lg">
            <h4 className="font-display font-black text-lg text-neutral-900 dark:text-neutral-50 mb-6 flex items-center gap-2">
              <Users className="h-5 w-5 text-brand-orange" />
              <span>Ground Guard Registration Portal</span>
            </h4>

            <form onSubmit={handleApply} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] font-bold text-neutral-400 uppercase block">Full Legal Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl py-2.5 px-4 font-sans text-sm text-neutral-900 dark:text-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] font-bold text-neutral-400 uppercase block">Personal Email:</label>
                  <input
                    type="email"
                    required
                    placeholder="E.g. name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl py-2.5 px-4 font-sans text-sm text-neutral-900 dark:text-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] font-bold text-neutral-400 uppercase block">Phone / WhatsApp Number:</label>
                  <input
                    type="tel"
                    required
                    placeholder="E.g. +91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl py-2.5 px-4 font-sans text-sm text-neutral-900 dark:text-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor={squadId} className="font-mono text-[10px] font-bold text-neutral-400 uppercase block">Preferred Field Squad:</label>
                  <select
                    id={squadId}
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl py-2.5 px-4 font-sans text-sm text-neutral-800 dark:text-neutral-200 focus:border-brand-orange"
                  >
                    <option value="teaching">Teaching Squad (Project Shiksha)</option>
                    <option value="feeding">Feeding Kitchen (NayePankh Rasoi)</option>
                    <option value="hygiene">Women Hygiene Support Circles</option>
                    <option value="clothing">Street Winter Blanket Distribution</option>
                    <option value="creative">Content, Social Media & Ground Photos</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[10px] font-bold text-neutral-400 uppercase block">Core Skills or Hobbies (Optional):</label>
                <textarea
                  placeholder="E.g. Teaching elementary mathematics, videography, speaking fluent Hindi, organizing events"
                  value={hobbies}
                  rows={2}
                  onChange={(e) => setHobbies(e.target.value)}
                  className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl py-2.5 px-4 font-sans text-sm text-neutral-900 dark:text-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                />
              </div>

              {/* Submit Trigger Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative overflow-hidden rounded-2xl bg-[#1A1A1A] hover:bg-gray-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 py-3.5 font-display font-extrabold text-sm text-white shadow-md active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <span>Engaging volunteer databases...</span>
                  </div>
                ) : (
                  <>
                    <Send className="h-4 w-4 group-hover:translate-x-0.5 transition-transform text-white dark:text-neutral-950" />
                    <span>Generate Instant NGO Field Pass</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>

      {/* Volunteer Pass Badge Graphic Modal */}
      <AnimatePresence>
        {activeBadge && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveBadge(null)}
              className="absolute inset-0 bg-neutral-950/85 backdrop-blur-sm"
            />

            {/* Simulated Badge container */}
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className="relative w-full max-w-[420px] rounded-[2rem] overflow-hidden bg-neutral-950 p-0.5 shadow-2xl z-20 border border-neutral-850"
            >
              
              {/* Core Badge body */}
              <div className="rounded-[1.9rem] bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 p-6 sm:p-8 space-y-6 relative overflow-hidden text-white font-sans text-center">
                
                {/* Glowing status lamp details */}
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-brand-orange to-transparent" />

                {/* Close Trigger icon */}
                <button
                  onClick={() => setActiveBadge(null)}
                  className="absolute right-4 top-4 p-1 rounded-full border border-neutral-800 text-neutral-550 hover:bg-neutral-800 focus:outline-none cursor-pointer"
                >
                  <X className="h-3.5 w-3.5" />
                </button>

                {/* Badge Header Brand */}
                <div className="space-y-1">
                  <span className="font-mono text-[9px] font-bold tracking-widest text-neutral-500 uppercase">Official Ground Pass</span>
                  <div className="flex items-center justify-center gap-1">
                    <div className="h-5 w-5 rounded-full bg-gradient-to-br from-brand-orange to-brand-orange flex items-center justify-center text-[10px] font-black">N</div>
                    <span className="font-display font-black text-sm tracking-tight">NayePankh Foundation</span>
                  </div>
                </div>

                {/* Badge Photo / Center Profile Layout */}
                <div className="flex flex-col items-center space-y-3 pt-2">
                  <div className="relative">
                    {/* Simulated avatar card */}
                    <div className="h-20 w-20 rounded-2xl bg-neutral-850 border-2 border-brand-orange flex items-center justify-center font-display font-black text-2xl text-brand-orange shadow-inner">
                      {activeBadge.fullName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                    </div>
                    {/* Tiny green online active badge dot */}
                    <div className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-neutral-950 animate-pulse" />
                  </div>

                  <div>
                    <h5 className="font-display font-bold text-lg text-white tracking-tight">{activeBadge.fullName}</h5>
                    <span className={`inline-block font-mono text-[9px] font-bold uppercase border px-2.5 py-0.5 rounded-full mt-1 ${getInterestColor(activeBadge.interest)}`}>
                      Squad: {getInterestTitle(activeBadge.interest)}
                    </span>
                  </div>
                </div>

                {/* Badge ID QR Block */}
                <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-850/80 grid grid-cols-12 gap-4 items-center">
                  
                  {/* Left Metadata list */}
                  <div className="col-span-8 text-left space-y-2">
                    <div className="space-y-0.5">
                      <span className="block font-mono text-[8px] text-neutral-500 uppercase">Pass Identification ID:</span>
                      <span className="block font-mono text-xs font-bold text-neutral-200">{activeBadge.badgeId}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 border-t border-neutral-850/50 pt-2">
                      <div>
                        <span className="block font-mono text-[7px] text-neutral-500 uppercase">Onboard Date</span>
                        <span className="block font-mono text-[9px] text-neutral-300 font-semibold">{activeBadge.joinedDate}</span>
                      </div>
                      <div>
                        <span className="block font-mono text-[7px] text-neutral-500 uppercase">Active Status</span>
                        <span className="block font-mono text-[9px] text-emerald-400 font-semibold text-brand-orange">APPROVED</span>
                      </div>
                    </div>
                  </div>

                  {/* Right QR block layout representation */}
                  <div className="col-span-4 flex justify-center border-l border-neutral-800/80 pl-2">
                    <div className="h-14 w-14 bg-white rounded-lg p-1 relative flex items-center justify-center">
                      <QrCode className="h-12 w-12 text-black" />
                      <div className="absolute h-3.5 w-3.5 bg-neutral-900 text-white flex items-center justify-center rounded-sm text-[6px] font-black">N</div>
                    </div>
                  </div>

                </div>

                {/* Welcome footnote */}
                <div className="space-y-2 pt-2 border-t border-neutral-850/50">
                  <p className="font-sans text-[10px] text-neutral-400 leading-normal italic">
                    "Welcome to the ground force. Our volunteer coordinators will reach out on WhatsApp within 24 hours with group invites."
                  </p>
                  
                  <button
                    onClick={() => window.print()}
                    className="mx-auto flex items-center justify-center gap-1 rounded-lg bg-neutral-800 px-3 py-1.5 hover:bg-neutral-750 text-neutral-300 text-[10px] font-bold uppercase transition-colors cursor-pointer border border-neutral-750"
                  >
                    <Download className="h-3 w-3" />
                    <span>Download Wallet Pass</span>
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
