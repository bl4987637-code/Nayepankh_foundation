import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Plus, Minus, Star, HeartHandshake, HelpCircle } from 'lucide-react';
import { ImpactStory, FAQItem } from '../types';

export default function FAQStories() {
  const [activeStoryIdx, setActiveStoryIdx] = useState<number>(0);
  const [openedFaqId, setOpenedFaqId] = useState<string | null>('faq-1');

  const stories: ImpactStory[] = [
    {
      id: 'story-1',
      name: 'Raju Kumar',
      age: 9,
      location: 'Kalyanpur Slums, Kanpur',
      title: 'From Platform Beggar to Classroom Class-Monitor',
      story: 'Before Project Shiksha arrived, Raju spent his days scavenger rummaging plastic cups and begging passengers on Kanpur platforms to buy food. His parents represent landless laborers who had no means to pay for private school blocks. Our volunteers integrated Raju into the local tree-classroom. Within 12 months, Raju has mastered primary devanagari letters, can solve basic fractions, and proudly acts as our student class president.',
      program: 'Project Shiksha',
      quote: 'Now I can read road signs and calculate change! My teachers told me I can become a computer analyst.',
      avatar: '👦'
    },
    {
      id: 'story-2',
      name: 'Saraswati Devi',
      age: 34,
      location: 'Rawatpur Slums',
      title: 'Dignifying a Mother during Winter shortfalls',
      story: 'Saraswati, mother of three, operates a small vegetable cart, but when cold winter climates hit, the market footfall collapsed, leaving them under severe debt with empty stoves. The NayePankh Rasoi food van arrived directly, supplying daily nutrition packets for three weeks alongside Project Paridhan distributing heavy wool blankets for her children. This immediate support buffer let her bypass predatory lenders.',
      program: 'NayePankh Rasoi',
      quote: 'The team did not just throw food packets at us. They sat, asked how our children were doing, and gave us warm clothes with immense respect.',
      avatar: '👩'
    },
    {
      id: 'story-3',
      name: 'Priya Mishra',
      age: 15,
      location: 'Kakadeo Slum Sector',
      title: 'Breaking Period Shames with Sanitary Protection',
      story: 'Priya often missed school classes for 5-6 consecutive days every month due to biological shames and severe sanitary shortfalls. She depended on dangerous old cloths which caused recurrent skin discomforts. Under Project Hygiene initiatives, Priyanka received free annual eco-friendly napkin card packs and joined hygienic health camps. She now has consistent school presence.',
      program: 'Project Hygiene',
      quote: 'Earlier, girls in my area had to hide during their periods. Under NayePankh circles, we realized it is a normal science. I never miss classes now.',
      avatar: '👧'
    }
  ];

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Is NayePankh Foundation officially registered under the Government?',
      answer: 'Yes, NayePankh Foundation is a registered Section 8 Non-Profit organization under the Ministry of Corporate Affairs (MCA), Government of India (Corporate Identification Number: U85300UP2021NPL152179). We are also registered with NGO Darpan, NITI Aayog.'
    },
    {
      id: 'faq-2',
      question: 'Where is NayePankh Foundation located and headquartered?',
      answer: 'Our central administrative operations and community kitchen are headquartered in Kanpur, Uttar Pradesh, India. However, our volunteer field squads operate extensively across multiple cities and rural sectors in Northern India.'
    },
    {
      id: 'faq-3',
      question: 'How do my contributions translate to actual spending audits?',
      answer: 'We maintain a 100% strict transparency ledger. Over 92% of all received donations go directly into buying raw kitchen supplies, packing materials, medical sanitary napkins, school bags, writing books, and winter blankets. The remaining 8% is used of fuel logistics and website utilities. No funds are spent on flashy executive marketing.'
    },
    {
      id: 'faq-4',
      question: 'Do I get instant tax exemption certificates under section 80G?',
      answer: 'Absolutely. NayePankh is registered under Section 12A and Section 80G of the Income Tax Act. Indian domestic taxpayers receive a 50% tax relaxation. Upon completed transaction, your digital tax invoice and certificate generate immediately in print-ready files.'
    },
    {
      id: 'faq-5',
      question: 'Are international cards or non-Indian passport holders allowed to donate?',
      answer: "We welcome direct moral mentorship from anywhere in the world. However, under Indian Foreign Contribution Regulation Act (FCRA) parameters, only Indian citizens or individuals carrying valid Indian passports are permitted to donate directly in rupees. Foreign observers can contribute valuable time, write digital letters, or advocate on our social portals!"
    }
  ];

  const handleNextStory = () => {
    setActiveStoryIdx((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const handlePrevStory = () => {
    setActiveStoryIdx((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const toggleFaq = (id: string) => {
    setOpenedFaqId(openedFaqId === id ? null : id);
  };

  const currentStory = stories[activeStoryIdx];

  return (
    <section className="py-20 md:py-28 bg-brand-cream dark:bg-neutral-900/10 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Impact stories Carousel */}
          <div id="impact" className="lg:col-span-6 space-y-6 lg:sticky lg:top-24">
            <div className="space-y-2">
              <span className="text-brand-orange uppercase text-xs font-bold font-display tracking-widest bg-orange-50 dark:bg-orange-950/20 px-3 py-1 rounded-full border border-orange-100 dark:border-pink-900/30">Ground Diaries</span>
              <h2 className="text-3xl md:text-5xl font-display font-black text-neutral-905 dark:text-neutral-50 tracking-tight leading-none">
                Stories of <span className="text-brand-orange">Survival</span> & Pride
              </h2>
              <p className="font-sans text-xs md:text-sm text-neutral-505 dark:text-neutral-400">
                Witness real physical changes across Kanpur slums. Hover, scroll, and click to read detailed profiles.
              </p>
            </div>

            {/* Testimonial Core Card */}
            <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-neutral-950 border border-neutral-150 dark:border-neutral-800/80 p-6 sm:p-8 shadow-md">
              <span className="absolute right-6 top-6 text-6xl text-neutral-100 dark:text-neutral-900 pointer-events-none select-none font-serif">
                “
              </span>

              {/* Card slider container */}
              <div className="space-y-5">
                
                {/* Avatar Initial layout */}
                <div className="flex items-center gap-3">
                  <div className="h-14 w-14 rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-3xl flex items-center justify-center border border-neutral-200/50 dark:border-neutral-800">
                    {currentStory.avatar}
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-base text-neutral-900 dark:text-white flex items-center gap-1.5">
                      {currentStory.name}
                      <span className="text-xs font-sans font-medium text-neutral-450 dark:text-neutral-500">(Age {currentStory.age})</span>
                    </h4>
                    <p className="text-xs font-mono font-medium text-brand-orange">{currentStory.location}</p>
                    <span className="inline-block text-[9px] font-mono font-bold uppercase text-brand-orange bg-orange-500/5 border border-brand-orange/15 px-2 mt-1 rounded-md">
                      Benefit: {currentStory.program}
                    </span>
                  </div>
                </div>

                {/* Story Statement */}
                <div className="space-y-3">
                  <h5 className="font-display font-extrabold text-sm sm:text-base text-neutral-950 dark:text-white leading-tight">
                    "{currentStory.title}"
                  </h5>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {currentStory.story}
                  </p>
                </div>

                {/* Highlight Quote box */}
                <div className="p-4 bg-orange-500/[0.03] border-l-4 border-brand-orange rounded-r-xl">
                  <p className="font-sans text-xs italic text-neutral-700 dark:text-neutral-300">
                    "{currentStory.quote}"
                  </p>
                </div>

              </div>

              {/* Carousel Controls */}
              <div className="mt-8 pt-4 border-t border-neutral-100 dark:border-neutral-900 flex items-center justify-between">
                <span className="font-mono text-[10px] text-neutral-400">
                  Profile {activeStoryIdx + 1} of {stories.length}
                </span>

                <div className="flex gap-2">
                  <button
                    onClick={handlePrevStory}
                    className="p-1.5 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-neutral-600 dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-900 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={handleNextStory}
                    className="p-1.5 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-neutral-600 dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-900 transition-colors cursor-pointer"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Block: accordions for FAQs */}
          <div id="faq" className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-brand-orange uppercase text-xs font-bold font-display tracking-widest bg-orange-55 dark:bg-orange-950/20 px-3 py-1 rounded-full border border-orange-100 dark:border-blue-900/30">Answering Doubts</span>
              <h3 className="text-2xl md:text-4xl font-display font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight leading-none">
                Frequently Asked <span className="text-brand-orange">Queries</span>
              </h3>
              <p className="font-sans text-xs sm:text-sm text-neutral-505 dark:text-neutral-400">
                Have specific concerns about donor protocols or tax structures? Review our verified guidelines below.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {faqs.map((faq) => {
                const isOpen = openedFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl border border-neutral-150 dark:border-neutral-800 bg-white dark:bg-neutral-950 overflow-hidden transition-colors duration-250"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-neutral-900 hover:text-brand-orange dark:text-white dark:hover:text-orange-400 transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <Minus className="h-4 w-4 text-brand-orange shrink-0" />
                      ) : (
                        <Plus className="h-4 w-4 text-brand-orange shrink-0" />
                      )}
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm font-sans text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-neutral-100 dark:border-neutral-900">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
