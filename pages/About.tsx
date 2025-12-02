import React from 'react';
import { Award, Briefcase, Users, History, Factory } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Intro */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-24 animate-slide-up">
        <span className="inline-block py-1 px-4 rounded-full bg-blue-50 dark:bg-blue-900/30 text-[#00157E] dark:text-blue-300 text-xs font-bold tracking-widest mb-6 uppercase">Since 2011</span>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">The Bhandari Brothers <br/>Legacy</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
            Located in the heart of Mandsaur City, we have evolved from a specialized tire parts retailer into a comprehensive hub for industrial precision tools and heavy-duty bearings.
        </p>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-24 animate-slide-up stagger-1">
         <div className="text-center p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4 text-[#115FAD] dark:text-blue-400"><History size={32} /></div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">13+</h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Years of Service</p>
         </div>
         <div className="text-center p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4 text-[#115FAD] dark:text-blue-400"><Users size={32} /></div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">2000+</h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Satisfied Clients</p>
         </div>
         <div className="text-center p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4 text-[#115FAD] dark:text-blue-400"><Factory size={32} /></div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">4</h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Major Categories</p>
         </div>
         <div className="text-center p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4 text-[#115FAD] dark:text-blue-400"><Award size={32} /></div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">#1</h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">In Mandsaur City</p>
         </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-16 text-center">Our Evolution</h2>
        
        <div className="relative border-l-2 border-slate-100 dark:border-slate-800 ml-4 md:ml-12 space-y-16 pb-12">
            {/* Timeline Line Gradient Overlay */}
            <div className="absolute top-0 left-[-2px] w-[2px] h-full bg-gradient-to-b from-[#00157E] via-[#115FAD] to-transparent"></div>

            {/* Item 1 */}
            <div className="relative pl-10 md:pl-20 animate-slide-up stagger-2 group">
                <div className="absolute -left-[9px] top-1 w-[18px] h-[18px] rounded-full bg-[#00157E] shadow-[0_0_0_4px_rgba(0,21,126,0.1)] dark:shadow-[0_0_0_4px_rgba(0,21,126,0.3)] group-hover:shadow-[0_0_0_8px_rgba(0,21,126,0.2)] transition-all"></div>
                <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-[#00157E] dark:text-blue-300 text-xs font-bold rounded-full mb-3 shadow-sm">2024 - Present</span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#00157E] dark:group-hover:text-blue-400 transition-colors">Digital Innovation</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">Launching the "Smart Hub" platform to serve our B2B clients better, offering AI-assisted product lookups and an expanded catalog of high-precision bearings and machine tools.</p>
            </div>

            {/* Item 2 */}
            <div className="relative pl-10 md:pl-20 animate-slide-up stagger-3 group">
                <div className="absolute -left-[9px] top-1 w-[18px] h-[18px] rounded-full bg-white dark:bg-slate-900 border-4 border-[#115FAD] group-hover:scale-125 transition-transform"></div>
                <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-full mb-3">2018</span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#115FAD] dark:group-hover:text-blue-400 transition-colors">Tools & Bearings Expansion</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Responding to market demand, Bhandari Brothers significantly expanded inventory to include industrial power tools and specialized ball bearings, becoming a one-stop shop for local industries.</p>
            </div>

             {/* Item 3 */}
             <div className="relative pl-10 md:pl-20 animate-slide-up stagger-4 group">
                <div className="absolute -left-[9px] top-1 w-[18px] h-[18px] rounded-full bg-white dark:bg-slate-900 border-4 border-slate-300 dark:border-slate-700 group-hover:border-[#115FAD] transition-colors"></div>
                <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-full mb-3">2015</span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Agro-Tech Diversification</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Ventured into agricultural spare parts to support the rich farming community of Mandsaur, building trust through reliable products and service.</p>
            </div>

            {/* Item 4 */}
            <div className="relative pl-10 md:pl-20 animate-slide-up stagger-5 group">
                <div className="absolute -left-[9px] top-1 w-[18px] h-[18px] rounded-full bg-slate-200 dark:bg-slate-700"></div>
                <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-full mb-3">2011</span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Inception</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Bhandari Brothers came into existence in Mandsaur City, starting as a focused retailer for tire parts and rubber components. Customer centricity was the core value from Day 1.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;