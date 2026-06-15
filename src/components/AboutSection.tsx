import { motion } from 'motion/react';
import { Award, ShieldAlert, HeartHandshake, Eye, Target, Sparkles, Quote } from 'lucide-react';

export default function AboutSection() {
  const coreValues = [
    {
      icon: <Award className="h-6 w-6 text-brand-orange" />,
      title: 'Structural Integrity',
      description: 'NayePankh operates as an officially registered NGO committed to 100% transparency. Every rupee is accounted for and directed straight to ground level works.',
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-brand-orange" />,
      title: 'Empathy First',
      description: 'We do not engage in savior complex charity. We sit with our communities, address their real needs side-by-side, and empower self-reliance.',
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-brand-orange" />,
      title: 'Immediate Action',
      description: 'Whether it is emergency food rations in cold winters, distribution of dry units, or custom healthcare camps, we show up within hours to support.',
    }
  ];

  const milestones = [
    { year: '2019', desc: 'Started in Kanpur as a small youth group distributing spare food to 20 street-dwelling children.' },
    { year: '2021', desc: 'Officially registered as NayePankh Foundation, scaling food distributions (Rasoi) & sanitary pad distributions during hard lockdowns.' },
    { year: '2023', desc: 'Launched full-time Project Shiksha teaching 200+ local slum kids. Expanded field squads to multiple districts in Uttar Pradesh.' },
    { year: '2025', desc: 'Over 50,000+ meals served and 10,000+ women supported with physical menstrual safety card programs.' }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-neutral-900/40 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Text Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-1.5 text-brand-orange font-display text-xs font-bold uppercase tracking-widest">
              <Sparkles className="h-4 w-4" />
              <span>Accredited NGO in India</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
              Shedding Light in Slums, Giving <span className="text-brand-orange">Wings</span> to Dreams.
            </h2>
            
            <p className="text-[#2D2D2D]/90 dark:text-neutral-300 font-sans text-base md:text-lg leading-relaxed">
              NayePankh Foundation is one of the premier non-governmental organizations in Uttar Pradesh, India, dedicated to the absolute upliftment of vulnerable populations residing in urban slums and ignored rural sectors. 
            </p>
            
            <p className="text-gray-600 dark:text-neutral-300 font-sans text-base leading-relaxed">
              Founded under the leadership of <strong className="text-brand-orange font-bold">Prashant Shukla</strong>, our team of hundreds of volunteers stepped out of classrooms and offices to tackle ground problems directly. Rather than intellectualizing poverty, we construct tangible channels for high-quality children education, safe hunger-relief centers, and absolute menstrual hygiene security.
            </p>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-[#F9F8F6] dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-none">
                <div className="flex items-center gap-2 text-brand-orange font-display font-bold mb-2">
                  <Eye className="h-5 w-5" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                  To establish a society where no child is restricted to begging, no woman faces shame due to physical menstruation, and no family sleeps with empty stomachs.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F9F8F6] dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-none">
                <div className="flex items-center gap-2 text-brand-orange font-display font-bold mb-2">
                  <Target className="h-5 w-5" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                  To provide immediate structural relief, clean food, modern school courses, sanitary pads, and support systems to at least 1,00,000+ citizens by 2028.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Graphic Elements & Founder Focus */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Founder Card */}
            <div className="relative overflow-hidden rounded-3xl p-1 bg-brand-cream border border-neutral-200/50 dark:border-neutral-800">
              <div className="rounded-[22px] bg-white dark:bg-neutral-950 p-6 sm:p-8 space-y-6 shadow-sm">
                
                <div className="flex items-center gap-4">
                  {/* Decorative headshot or placeholder */}
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange font-display font-black text-2xl border border-brand-orange/20 shadow-inner">
                    PS
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-emerald-500 border-2 border-white dark:border-neutral-950" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-neutral-950 dark:text-white">Prashant Shukla</h3>
                    <p className="font-sans text-xs text-neutral-500 dark:text-neutral-400 font-medium font-bold">Founder & President, NayePankh</p>
                    <p className="font-sans text-[10px] text-brand-orange bg-brand-orange/5 px-2 py-0.5 rounded-md inline-block mt-1 font-semibold border border-brand-orange/15">Kanpur, Uttar Pradesh</p>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -left-2 -top-4 h-8 w-8 text-neutral-100 dark:text-neutral-900 -z-0 transform -scale-x-100" />
                  <p className="relative z-10 font-sans text-sm italic text-neutral-700 dark:text-neutral-300 leading-relaxed pl-4 border-l-2 border-brand-orange">
                    "We cannot change the entire world in one day, but we can absolutely transform one child's life forever by changing our attitude. NayePankh is not an organization of spectators—it is a platform of action. If we see a hungry family on the Kanpur tracks, we bring them fresh cooked hot food first, then we figure out structural solutions."
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>Registered Section 8 NGO</span>
                  <span>Govt Reg ID: U85300UP2021NPL152179</span>
                </div>
              </div>
            </div>

            {/* Why Support Grid */}
            <div className="bg-[#F9F8F6] dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 space-y-4">
              <h4 className="font-display font-bold text-neutral-[#1A1A1A] dark:text-white text-base uppercase tracking-wider text-xs">Key Milestones & Expansion</h4>
              <div className="flow-root">
                <ul className="-mb-8">
                  {milestones.map((milestone, idx) => (
                    <li key={idx}>
                      <div className="relative pb-8">
                        {idx !== milestones.length - 1 ? (
                          <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-neutral-200 dark:bg-neutral-800" aria-hidden="true" />
                        ) : null}
                        <div className="relative flex space-x-3">
                          <div>
                            <span className="h-8 w-8 rounded-lg bg-orange-100 dark:bg-orange-950/60 flex items-center justify-center font-display font-bold text-xs text-brand-orange border border-brand-orange/30">
                              {milestone.year}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0 pt-1">
                            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-normal">
                              {milestone.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-20">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
            <span className="text-brand-orange uppercase text-xs font-bold font-display tracking-widest bg-orange-50 dark:bg-orange-950/40 px-3 py-1 rounded-full border border-orange-100 dark:border-orange-900/50">Our Operational Pillars</span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-neutral-950 dark:text-white">Why NayePankh is Highly Trusted</h3>
            <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400">We maintain the highest standard of accountability. We focus purely on ground impacts that last.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 md:p-8 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-150 dark:border-neutral-800/80 shadow-sm transition-colors duration-200"
              >
                <div className="h-12 w-12 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 flex items-center justify-center mb-5 shrink-0 shadow-inner">
                  {value.icon}
                </div>
                <h4 className="font-display font-bold text-lg text-neutral-900 dark:text-white mb-2">{value.title}</h4>
                <p className="font-sans text-xs md:text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
