import React, { useState } from 'react';
import { Product } from '../types';
import { Filter, ArrowRight } from 'lucide-react';

const allProducts: Product[] = [
    {
        id: 1,
        name: "Ultra-Precision Ball Bearing",
        category: "Bearings",
        price: "Contact for Quote",
        image: "https://images.unsplash.com/photo-1533236326620-e2b83445852f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "High-speed ceramic hybrid bearing for industrial turbines."
    },
    {
        id: 2,
        name: "Hydraulic Steel Cylinder",
        category: "Steel Components",
        price: "Contact for Quote",
        image: "https://images.unsplash.com/photo-1565514020125-9980658ae975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Reinforced steel cylinders for heavy earthmovers."
    },
    {
        id: 3,
        name: "Smart Irrigation Valve",
        category: "Agro Tools",
        price: "Contact for Quote",
        image: "https://images.unsplash.com/photo-1622262740263-6c8f94119d55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "IoT enabled irrigation control valve."
    },
    {
        id: 4,
        name: "Forged Gear Shaft",
        category: "Steel Components",
        price: "Contact for Quote",
        image: "https://images.unsplash.com/photo-1605356877074-a026c6d26733?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Heat-treated alloy steel for maximum torque transmission."
    },
    {
        id: 5,
        name: "Precision Roller Chain",
        category: "Bearings",
        price: "Contact for Quote",
        image: "https://images.unsplash.com/photo-1536409604068-245cc429cb01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Heavy-duty roller chain for conveyor systems."
    },
    {
        id: 6,
        name: "Tungsten Carbide Plough",
        category: "Agro Tools",
        price: "Contact for Quote",
        image: "https://images.unsplash.com/photo-1595168171780-87729f273577?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Wear-resistant plough tip for rocky terrain."
    }
];

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  const categories = ["All", "Bearings", "Steel Components", "Agro Tools"];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Product Catalog</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg font-light leading-relaxed">
            Browse our inventory of premium industrial components. Each part is rigorously tested to meet global Sanyo Special Steel standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar Filters */}
            <div className="hidden lg:block space-y-8 animate-slide-up stagger-1 h-fit sticky top-28">
                <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm transition-colors">
                    <div className="flex items-center gap-2 mb-6 text-slate-900 dark:text-white font-bold">
                        <Filter size={20} className="text-[#115FAD]" /> Filters
                    </div>
                    
                    <div className="mb-8">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Category</h3>
                        <ul className="space-y-2">
                            {categories.map(cat => (
                                <li 
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`cursor-pointer text-sm font-medium py-2 px-3 rounded-lg transition-all ${
                                        activeCategory === cat 
                                        ? 'bg-blue-50 dark:bg-blue-900/30 text-[#00157E] dark:text-blue-300' 
                                        : 'text-slate-600 dark:text-slate-400 hover:text-[#115FAD] dark:hover:text-blue-300 hover:bg-slate-50 dark:hover:bg-slate-900'
                                    }`}
                                >
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Material</h3>
                        <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
                            <li className="flex items-center gap-3 cursor-pointer group">
                                <div className="w-4 h-4 rounded border border-slate-300 dark:border-slate-700 group-hover:border-[#115FAD] transition-colors"></div> Stainless Steel
                            </li>
                            <li className="flex items-center gap-3 cursor-pointer group">
                                <div className="w-4 h-4 rounded border border-slate-300 dark:border-slate-700 group-hover:border-[#115FAD] transition-colors"></div> High-Carbon
                            </li>
                            <li className="flex items-center gap-3 cursor-pointer group">
                                <div className="w-4 h-4 rounded border border-slate-300 dark:border-slate-700 group-hover:border-[#115FAD] transition-colors"></div> Ceramic
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Mobile Filter Row */}
            <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 scrollbar-hide animate-slide-up stagger-1">
                {categories.map(cat => (
                    <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                             activeCategory === cat 
                             ? 'bg-[#00157E] text-white border-[#00157E]' 
                             : 'bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProducts.map((product, idx) => (
                    <div 
                        key={product.id} 
                        className="bg-white dark:bg-slate-950 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 dark:hover:shadow-blue-900/10 transition-all duration-300 group animate-slide-up"
                        style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                    >
                        <div className="relative h-64 mb-6 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10"></div>
                             <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="flex flex-col h-[160px]">
                            <div className="mb-2">
                                <span className="inline-block py-1 px-2 bg-slate-50 dark:bg-slate-900 text-[#115FAD] dark:text-blue-400 text-[10px] font-bold uppercase tracking-wide rounded-md mb-2">{product.category}</span>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#115FAD] dark:group-hover:text-blue-400 transition-colors line-clamp-1">{product.name}</h3>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed">{product.description}</p>
                            <button className="w-full py-4 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:border-[#115FAD] hover:bg-[#115FAD] hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                                View Details <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Products;