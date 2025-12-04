import React from 'react';
import { Award, Briefcase, Users, History, Factory, Quote } from 'lucide-react';
import SEO from '../components/SEO.tsx';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <SEO 
        title="About Bhandari Brothers - 56 Years of Legacy in Mandsaur" 
        description="Founded in 1969 by Shantilalji & Laxmilalji Bhandari, we have evolved from bus spares to Mandsaur's leading supplier of tractor parts, bearings, and industrial tools."
      />

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-24 animate-slide-up">
        <span className="inline-block py-1 px-4 rounded-full bg-blue-50 dark:bg-blue-900/30 text-[#00157E] dark:text-blue-300 text-xs font-bold tracking-widest mb-6 uppercase">Since 1969</span>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">The Bhandari Brothers <br/>Legacy</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
            Founded by <strong>Shantilalji & Laxmilalji Bhandari</strong>, we started as the 2nd shop in Mandsaur for bus spares. Over 5 decades, we have evolved into the city's most trusted hub for industrial components, tractor spares, and bearings.
        </p>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-24 animate-slide-up stagger-1">
         <div className="text-center p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4 text-[#115FAD] dark:text-blue-400"><History size={32} /></div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">56+</h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Years of Service</p>
         </div>
         <div className="text-center p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4 text-[#115FAD] dark:text-blue-400"><Users size={32} /></div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">5000+</h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Loyal Clients</p>
         </div>
         <div className="text-center p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4 text-[#115FAD] dark:text-blue-400"><Factory size={32} /></div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">5</h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Major Categories</p>
         </div>
         <div className="text-center p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4 text-[#115FAD] dark:text-blue-400"><Award size={32} /></div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">#1</h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">In Mandsaur City</p>
         </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-6 mb-32">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-16 text-center">Our Evolution</h2>
        
        <div className="relative border-l-2 border-slate-100 dark:border-slate-800 ml-4 md:ml-12 space-y-16 pb-12">
            {/* Timeline Line Gradient Overlay */}
            <div className="absolute top-0 left-[-2px] w-[2px] h-full bg-gradient-to-b from-[#00157E] via-[#115FAD] to-transparent"></div>

            {/* Item 1 */}
            <div className="relative pl-10 md:pl-20 animate-slide-up stagger-2 group">
                <div className="absolute -left-[9px] top-1 w-[18px] h-[18px] rounded-full bg-[#00157E] shadow-[0_0_0_4px_rgba(0,21,126,0.1)] dark:shadow-[0_0_0_4px_rgba(0,21,126,0.3)] group-hover:shadow-[0_0_0_8px_rgba(0,21,126,0.2)] transition-all"></div>
                <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-[#00157E] dark:text-blue-300 text-xs font-bold rounded-full mb-3 shadow-sm">Present Day</span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#00157E] dark:group-hover:text-blue-400 transition-colors">The Industrial Powerhouse</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  We are currently one of the most trusted names in Mandsaur, dealing in <strong>Tractor Spares, Bearings (SKF, NBC, DPI, HBL), Nut Bolts (Local, TVS, Allen, Grub, CSK), Mechanical Tools (Taparia), Tyres & Tubes, and Greasing Equipments</strong>. We continue to serve with the same integrity passed down from our founders.
                </p>
            </div>

            {/* Item 2 */}
            <div className="relative pl-10 md:pl-20 animate-slide-up stagger-3 group">
                <div className="absolute -left-[9px] top-1 w-[18px] h-[18px] rounded-full bg-white dark:bg-slate-900 border-4 border-[#115FAD] group-hover:scale-125 transition-transform"></div>
                <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-full mb-3">Diversification Era</span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#115FAD] dark:group-hover:text-blue-400 transition-colors">Tyres & Oil Expansion</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Expanding our portfolio, we launched a successful Tyre & Tube business featuring reputed brands like <strong>MRF, CEAT, Apollo, and Goodyear</strong>, alongside a thriving Oil business.
                </p>
            </div>

             {/* Item 3 */}
             <div className="relative pl-10 md:pl-20 animate-slide-up stagger-4 group">
                <div className="absolute -left-[9px] top-1 w-[18px] h-[18px] rounded-full bg-white dark:bg-slate-900 border-4 border-slate-300 dark:border-slate-700 group-hover:border-[#115FAD] transition-colors"></div>
                <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-full mb-3">The Growth Years</span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Adapting to Change</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Migrating with changing times, we transitioned our expertise from Bus spares to Truck spares, then Motorcycle spares, Trolley spares, and finally established a stronghold in <strong>Tractor spares</strong>.
                </p>
            </div>

            {/* Item 4 */}
            <div className="relative pl-10 md:pl-20 animate-slide-up stagger-5 group">
                <div className="absolute -left-[9px] top-1 w-[18px] h-[18px] rounded-full bg-slate-200 dark:bg-slate-700"></div>
                <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-full mb-3">1969</span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Inception</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Started by <strong>Shantilalji & Laxmilalji Bhandari</strong> as the 2nd shop in Mandsaur dealing specifically in Bus Spares. This foundation of quality and pioneering spirit laid the groundwork for everything we do today.
                </p>
            </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-6 animate-slide-up stagger-5">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Trusted by Industry Leaders</h2>
           <p className="text-slate-500 dark:text-slate-400">What our long-standing partners say about working with Bhandari Brothers.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 relative group hover:-translate-y-1 transition-transform duration-300">
               <Quote className="absolute top-8 right-8 text-blue-100 dark:text-slate-800 group-hover:text-blue-200 dark:group-hover:text-slate-700 transition-colors" size={48} />
               <div className="relative z-10">
                   <p className="text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed">"Bhandari Brothers has been our reliable partner for tractor spares for over a decade. Their genuine parts ensure our fleet never faces downtime."</p>
                   <div>
                       <h4 className="font-bold text-[#00157E] dark:text-blue-300">Rajesh Kumar</h4>
                       <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Farming Syndicate, Mandsaur</p>
                   </div>
               </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 relative group hover:-translate-y-1 transition-transform duration-300">
               <Quote className="absolute top-8 right-8 text-blue-100 dark:text-slate-800 group-hover:text-blue-200 dark:group-hover:text-slate-700 transition-colors" size={48} />
               <div className="relative z-10">
                   <p className="text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed">"The quality of bearings we source from them is unmatched. Their deep technical knowledge helps us find exactly what we need."</p>
                   <div>
                       <h4 className="font-bold text-[#00157E] dark:text-blue-300">Amit Singh</h4>
                       <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Industrial Maintenance Solutions</p>
                   </div>
               </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 relative group hover:-translate-y-1 transition-transform duration-300">
               <Quote className="absolute top-8 right-8 text-blue-100 dark:text-slate-800 group-hover:text-blue-200 dark:group-hover:text-slate-700 transition-colors" size={48} />
               <div className="relative z-10">
                   <p className="text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed">"Excellent range of nuts and bolts. We find everything we need for our workshop under one roof. Highly recommended."</p>
                   <div>
                       <h4 className="font-bold text-[#00157E] dark:text-blue-300">Suresh Verma</h4>
                       <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Verma Auto Works</p>
                   </div>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;