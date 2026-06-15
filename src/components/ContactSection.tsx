import { useState, useId, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, ShieldCheck, Landmark, Globe } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('general');
  const [message, setMessage] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [submittedData, setSubmittedData] = useState<{ name: string; email: string; subject: string; phone: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const subjectId = useId();

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setSubmittedData({
        name,
        email,
        subject,
        phone
      });
      setIsSubmitting(false);

      // Clean form fields
      setName('');
      setEmail('');
      setMessage('');
      setPhone('');
    }, 1500);
  };

  const getSubjectTitle = (key: string) => {
    switch (key) {
      case 'general': return 'General NGO Inquiry';
      case 'corporate': return 'Corporate CSR Collaboration';
      case 'event': return 'Field Drive request';
      case 'careers': return 'College Internships';
      default: return 'General Welfare';
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Contact coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-brand-orange uppercase text-xs font-bold font-display tracking-widest bg-orange-50 dark:bg-orange-950/40 px-3 py-1 rounded-full border border-orange-100 dark:border-orange-900/50">Physical Contact</span>
              <h2 className="text-3xl md:text-5xl font-display font-black text-neutral-900 dark:text-neutral-50 tracking-tight leading-none">
                Get in <span className="text-brand-orange">Touch</span>
              </h2>
              <p className="font-sans text-xs md:text-sm text-neutral-505 dark:text-neutral-400">
                Have collaboration requests or want to inspect our community kitchen? Visit our desk or ring our hotline.
              </p>
            </div>

            {/* Core Info list */}
            <div className="space-y-5">
              
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 rounded-xl flex items-center justify-center border border-neutral-200/60 dark:border-neutral-800 text-brand-orange shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-neutral-900 dark:text-white">Registered Headquarters Address</h4>
                  <p className="font-sans text-xs sm:text-sm text-neutral-505 dark:text-neutral-450 mt-0.5 leading-normal">
                    NayePankh Foundation, Kakadeo Sector Block-B,<br />
                    Kanpur, Uttar Pradesh, 208025, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 rounded-xl flex items-center justify-center border border-neutral-200/60 dark:border-neutral-800 text-brand-orange shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-neutral-900 dark:text-white">Ground Help Line hotlines</h4>
                  <p className="font-sans text-xs sm:text-sm text-neutral-500 dark:text-neutral-450 mt-0.5 font-medium">
                    +91 83185 18055 / +91 85749 53521
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 rounded-xl flex items-center justify-center border border-neutral-200/60 dark:border-neutral-800 text-brand-orange shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-neutral-900 dark:text-white">Digital Mail Support</h4>
                  <p className="font-sans text-xs sm:text-sm text-neutral-500 dark:text-neutral-450 mt-0.5 font-bold">
                    helper@nayepankh.com / contact@nayepankh.com
                  </p>
                </div>
              </div>

            </div>

            {/* Official legal credentials list card */}
            <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800/80 space-y-4">
              <h4 className="font-display font-bold text-sm text-neutral-900 dark:text-white flex items-center gap-2">
                <Landmark className="h-4 w-4 text-brand-orange" />
                <span>Legitimacy & Registration Credentials</span>
              </h4>

              <div className="grid grid-cols-2 gap-4 text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                <div>
                  <span className="block font-sans text-[8px] text-neutral-450">CORPORATE REGISTRATION NO</span>
                  <strong className="text-neutral-750 dark:text-neutral-200">U85300UP2021NPL152179</strong>
                </div>
                <div>
                  <span className="block font-sans text-[8px] text-neutral-450">NITI AAYOG DARPAN NO</span>
                  <strong className="text-neutral-750 dark:text-neutral-200">UP/2021/0296752</strong>
                </div>
                <div>
                  <span className="block font-sans text-[8px] text-neutral-450">INDIAN TAX ACT STATUS</span>
                  <strong className="text-neutral-750 dark:text-neutral-200">Section 80G & 12A</strong>
                </div>
                <div>
                  <span className="block font-sans text-[8px] text-neutral-450">AUDITED BY</span>
                  <strong className="text-neutral-750 dark:text-neutral-200">V. Shukla & Associates</strong>
                </div>
              </div>
            </div>

          </div>

          {/* Right Block: Inquiry form */}
          <div className="lg:col-span-7 bg-neutral-50/50 dark:bg-neutral-900/30 border border-neutral-150 dark:border-neutral-800/85 rounded-3xl p-6 sm:p-8 relative">
            
            <h3 className="font-display text-xl sm:text-2xl font-black text-neutral-950 dark:text-neutral-50 mb-6 flex items-center gap-2">
              <Clock className="h-5 w-5 text-brand-orange" />
              <span>Community Desk Support Form</span>
            </h3>

            <form onSubmit={handleInquirySubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.55">
                  <label className="font-mono text-[10px] font-bold text-neutral-400 uppercase block">Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl py-2.5 px-4 font-sans text-sm text-neutral-900 dark:text-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] font-bold text-neutral-400 uppercase block">Email Address:</label>
                  <input
                    type="email"
                    required
                    placeholder="E.g. name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl py-2.5 px-4 font-sans text-sm text-neutral-900 dark:text-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] font-bold text-neutral-400 uppercase block">Phone / Contact:</label>
                  <input
                    type="tel"
                    placeholder="E.g. +91 99999 88888"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl py-2.5 px-4 font-sans text-sm text-neutral-900 dark:text-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor={subjectId} className="font-mono text-[10px] font-bold text-neutral-400 uppercase block">Nature of Inquiry:</label>
                  <select
                    id={subjectId}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl py-2.5 px-4 font-sans text-sm text-neutral-850 dark:text-neutral-200 focus:border-brand-orange"
                  >
                    <option value="general">General NGO Inquiry & Feedback</option>
                    <option value="corporate">Corporate CSR collaborations & Audits</option>
                    <option value="event">Organizing a local Community Drive</option>
                    <option value="careers">Volunteer / Internship Openings</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[10px] font-bold text-neutral-400 uppercase block">Message Description:</label>
                <textarea
                  required
                  placeholder="Detail your queries, collaboration goals, or suggestions for founder Prashant Shukla here..."
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl py-2.5 px-4 font-sans text-sm text-neutral-900 dark:text-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                />
              </div>

              {/* Submit Trigger */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative overflow-hidden rounded-2xl bg-brand-orange py-3.5 font-display font-extrabold text-sm text-white shadow-md active:scale-95 hover:bg-brand-orange-hover transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <span>Verifying and dispatching...</span>
                  </div>
                ) : (
                  <>
                    <Send className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    <span>Send Message to desk</span>
                  </>
                )}
              </button>

            </form>

            {/* Notification alert block upon submission */}
            <AnimatePresence>
              {submittedData && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  className="absolute inset-0 bg-white dark:bg-neutral-950 rounded-3xl p-6 sm:p-8 flex flex-col justify-center items-center text-center space-y-4 border border-neutral-200/50 dark:border-neutral-800"
                >
                  <div className="h-16 w-16 text-emerald-500 bg-emerald-100 rounded-full flex items-center justify-center shadow-inner">
                    <CheckCircle className="h-10 w-10 animate-bounce" />
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-display font-black text-xl text-neutral-950 dark:text-white">Message Dispatched Successfully!</h4>
                    <span className="font-mono text-[10px] text-neutral-400 bg-neutral-100 dark:bg-neutral-850 px-2 py-0.5 rounded uppercase">Type: {getSubjectTitle(submittedData.subject)}</span>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-sm">
                    Thank you <strong className="font-bold text-neutral-900 dark:text-white">{submittedData.name}</strong>. Our ground coordinator based in Kakadeo desk will audit your subject and email a response back to <strong className="font-semibold text-neutral-900 dark:text-white">{submittedData.email}</strong> or ring <strong className="font-semibold text-neutral-900 dark:text-white">{submittedData.phone || 'your number'}</strong> in less than 4 working hours.
                  </p>

                  <button
                    onClick={() => setSubmittedData(null)}
                    className="px-4 py-2 bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-905 dark:hover:bg-neutral-200 text-xs font-bold rounded-xl cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
