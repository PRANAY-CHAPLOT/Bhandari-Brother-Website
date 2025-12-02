import React from 'react';
import { ArrowRight, Settings, Sprout, Hammer, ShieldCheck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 overflow-x-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
             <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/20 rounded-full blur-3xl opacity-60"></div>
             <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-gradient-to-tr from-slate-100 to-transparent dark:from-slate-800/20 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-[#00157E] dark:text-blue-300 text-xs font-bold tracking-widest mb-8 uppercase shadow-sm">
              Since 2011 • Mandsaur, MP
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1] mb-8 tracking-tight">
              Industrial Parts <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00157E] to-[#115FAD] dark:from-blue-400 dark:to-blue-200">Reimagined.</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-lg leading-relaxed font-light">
              From tire components to precision bearings and agro-tech. The most trusted supplier in Mandsaur City, now powered by modern technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <Link to="/products" className="bg-[#00157E] text-white px-8 py-4 rounded-full font-medium hover:bg-[#001040] dark:hover:bg-blue-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-center flex items-center justify-center gap-2">
                 Explore Catalog <ArrowRight size={18} />
               </Link>
               <Link to="/contact" className="group bg-white dark:bg-slate-900 text-[#00157E] dark:text-blue-300 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-full font-medium hover:border-[#00157E] hover:bg-blue-50 dark:hover:bg-slate-800 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                 <MapPin size={18} />
                 <span>Visit Store</span>
               </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-slate-400 dark:text-slate-500 text-sm font-medium">
               <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-[#115FAD] dark:text-blue-400"/> Quality Assured
               </div>
               <div className="flex items-center gap-2">
                  <Settings size={18} className="text-[#115FAD] dark:text-blue-400"/> Wide Inventory
               </div>
            </div>
          </div>
          
          <div className="relative animate-slide-up stagger-2 hidden lg:block">
             {/* Floating Product Image */}
             <div className="relative z-10 group perspective-1000">
                <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-700 ease-out"></div>
                <img 
                    src="https://images.unsplash.com/photo-1563297121-72464735ce7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                    alt="Precision Bearing" 
                    className="relative rounded-[2.5rem] shadow-2xl w-full object-cover h-[500px] border-[6px] border-white dark:border-slate-800 transform group-hover:scale-[1.01] group-hover:-rotate-1 transition-transform duration-700 ease-out"
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-8 -left-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white dark:border-slate-700 flex items-center gap-4 animate-bounce duration-[4000ms]">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl text-green-700 dark:text-green-400">
                        <Sprout size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Agro Tech</p>
                        <p className="text-slate-800 dark:text-white font-bold">Updated Stock</p>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Categories Bento Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Products</h2>
            <p className="text-slate-500 dark:text-slate-400">From our roots in tire parts, we've grown into a complete industrial supply solution.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Bearings */}
            <div className="bg-white dark:bg-slate-950 rounded-3xl p-8 hover:shadow-xl hover:shadow-blue-900/10 dark:hover:shadow-blue-900/20 transition-all duration-300 group cursor-pointer border border-slate-100 dark:border-slate-800 animate-slide-up stagger-1 flex flex-col h-full hover:-translate-y-1">
               <div className="bg-blue-50 dark:bg-blue-900/20 w-14 h-14 rounded-2xl flex items-center justify-center text-[#00157E] dark:text-blue-300 mb-8 group-hover:scale-110 group-hover:bg-[#00157E] group-hover:text-white transition-all duration-300">
                 <Settings size={28} />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#115FAD] dark:group-hover:text-blue-400 transition-colors">Precision Bearings</h3>
               <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">Our newest expansion. High-load capacity bearings for industrial motors and automotive applications.</p>
               <div className="mt-auto rounded-2xl overflow-hidden h-48 relative">
                 <div className="absolute inset-0 bg-[#00157E]/0 group-hover:bg-[#00157E]/10 transition-colors z-10"></div>
                 <img src="https://images.unsplash.com/photo-1596522514330-c3d325ee1909?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" alt="Bearings" />
               </div>
            </div>

            {/* Card 2: Agro */}
            <div className="bg-white dark:bg-slate-950 rounded-3xl p-8 hover:shadow-xl hover:shadow-green-900/10 dark:hover:shadow-green-900/20 transition-all duration-300 group cursor-pointer border border-slate-100 dark:border-slate-800 md:col-span-2 relative overflow-hidden animate-slide-up stagger-2 min-h-[400px] hover:-translate-y-1">
               <div className="relative z-10 max-w-md">
                   <div className="bg-green-50 dark:bg-green-900/20 w-14 h-14 rounded-2xl flex items-center justify-center text-green-700 dark:text-green-400 mb-8 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                     <Sprout size={28} />
                   </div>
                   <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">Agro-Equipment & Parts</h3>
                   <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">Supporting Mandsaur's farmers with durable plow tips, seeders, and harvester components.</p>
                   <Link to="/products" className="inline-flex items-center text-green-700 dark:text-green-400 font-medium text-sm group-hover:underline">View Agricultural Tools <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform"/></Link>
               </div>
               <div className="absolute right-0 top-0 w-1/2 h-full hidden md:block">
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent dark:from-slate-950 dark:via-slate-950/20 z-10"></div>
                  <img src="https://images.unsplash.com/photo-1625246333195-58197bd47d26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" alt="Agro" />
               </div>
            </div>

             {/* Card 3: Steel/Tools */}
            <div className="bg-[#00157E] rounded-3xl p-8 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 group cursor-pointer border border-blue-900 md:col-span-3 flex flex-col md:flex-row items-center gap-12 animate-slide-up stagger-3 hover:-translate-y-1">
               <div className="flex-1 text-white">
                   <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-8 backdrop-blur-sm group-hover:bg-white group-hover:text-[#00157E] transition-all duration-300">
                     <Hammer size={28} />
                   </div>
                   <h3 className="text-2xl font-bold mb-3">Tools & Tire Components</h3>
                   <p className="text-blue-200 text-sm leading-relaxed mb-6 max-w-lg">Where we started. We continue to stock the finest quality tire parts, valves, and industrial hand tools for workshops.</p>
                   <Link to="/products" className="inline-block bg-white text-[#00157E] px-6 py-3 rounded-xl font-medium text-sm hover:bg-blue-50 transition-colors shadow-lg">
                     Browse Components
                   </Link>
               </div>
               <div className="flex-1 h-64 w-full rounded-2xl overflow-hidden border border-white/10 relative">
                    <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90" alt="Steel" />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;