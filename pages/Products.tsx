import React, { useState, useEffect, useMemo } from 'react';
import { Product } from '../types';
import { Filter, ArrowRight, X, Check, CheckCircle2, MessageSquare, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const allProducts: Product[] = [
    {
        id: 1,
        name: "Tractor Engine Components",
        category: "Tractor Spares",
        brand: "Mahindra",
        price: "Contact for Quote",
        image: "https://images.unsplash.com/photo-1563297121-72464735ce7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Premium-grade engine overhaul kits and individual components designed for peak performance in HMT, Mahindra, Swaraj, and Escorts tractors. Engineered to OEM specifications, these parts ensure maximum durability under heavy load conditions, restoring your agricultural machinery to factory-standard efficiency. Perfect for complete engine restoration and critical repairs.",
        features: [
            "OEM grade durability and precision",
            "Compatible with 35HP to 75HP models",
            "Includes pistons, liners, and ring sets",
            "Heat-treated for high endurance"
        ]
    },
    {
        id: 2,
        name: "Taparia Mechanical Tool Set",
        category: "Tools",
        brand: "Taparia",
        price: "Contact for Quote",
        image: "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "A comprehensive suite of professional-grade hand tools from Taparia and select local artisans. This collection features precision-forged spanners, ergonomic pliers, and high-torque wrenches designed for the rigorous demands of industrial workshops. Crafted for longevity and superior grip, these tools represent the gold standard in mechanical maintenance.",
        features: [
            "Chrome Vanadium Steel construction",
            "Anti-slip grip handles",
            "Rust-resistant coating",
            "Complete set for workshop needs"
        ]
    },
    {
        id: 3,
        name: "Pillow Block & Cylindrical Bearings",
        category: "Bearings",
        brand: "SKF",
        price: "Contact for Quote",
        image: "https://images.unsplash.com/photo-1596522514330-c3d325ee1909?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Industrial-strength Pillow Block, Cylindrical, and Double Row bearings engineered for high-speed and heavy-load applications. Featuring robust cast-iron housings and precision-ground rolling elements, these bearings minimize friction and vibration, ensuring seamless operation in conveyors, agricultural equipment, and heavy manufacturing units.",
        features: [
            "High load-carrying capacity",
            "Self-aligning capabilities",
            "Cast iron housing options",
            "Available in UCP, UCF, and UCFL series"
        ]
    },
    {
        id: 4,
        name: "TVS Socket Head Cap Screws (SHCS)",
        category: "Nut Bolts",
        brand: "TVS",
        price: "Contact for Quote",
        image: "https://images.unsplash.com/photo-1605356877074-a026c6d26733?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "High-tensile precision fasteners from TVS, the industry leader in strength and reliability. Our inventory includes Socket Head Cap Screws (SHCS), Grub screws, and Countersunk (CSK) heads. Manufactured with advanced metallurgy for superior shear strength and fatigue resistance, these fasteners are critical for secure assembly in automotive and industrial engineering.",
        features: [
            "High Tensile Grade 12.9",
            "Precision threading",
            "Corrosion-resistant black oxide finish",
            "Wide range of metric sizes"
        ]
    },
    {
        id: 5,
        name: "Transmission Parts (Powertrac/Ford)",
        category: "Tractor Spares",
        brand: "Powertrac",
        price: "Contact for Quote",
        image: "https://plus.unsplash.com/premium_photo-1664302152996-339892c9089f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "High-performance transmission gears and precision-machined shafts tailored for Powertrac, Ford, Farmtrac, and Massey Ferguson tractors. Treated with advanced carburizing processes for exceptional surface hardness and core toughness, these components ensure smooth gear shifts and optimal power transfer in the most demanding agricultural terrains.",
        features: [
            "Case-hardened steel gears",
            "Precision-machined shafts",
            "Low noise operation",
            "Direct fit replacement"
        ]
    },
    {
        id: 6,
        name: "MRF & Ceat Motorcycle Tubes",
        category: "Tyre Tubes",
        brand: "MRF",
        price: "Contact for Quote",
        image: "https://images.unsplash.com/photo-1578844251758-2f71da64522f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Premium-quality motorcycle tyre tubes from market leaders MRF and Ceat. Formulated with high-grade butyl rubber for superior air retention and heat resistance, these tubes offer exceptional puncture protection and longevity. Ideal for navigating the diverse and challenging road conditions of Mandsaur and beyond.",
        features: [
            "Heat resistant rubber compound",
            "Excellent air retention",
            "Puncture resistant technology",
            "Available for all bike models"
        ]
    },
    {
        id: 7,
        name: "Taper & Angular Contact Bearings",
        category: "Bearings",
        brand: "NBC",
        price: "Contact for Quote",
        image: "https://images.unsplash.com/photo-1536409604068-245cc429cb01?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Precision-engineered Taper and Angular contact bearings designed to handle complex combined radial and axial loads. Sourced from top-tier manufacturers like NBC and SKF, these bearings are essential for automotive wheel hubs, gearboxes, and heavy agricultural machinery, guaranteeing stability and extended service life.",
        features: [
            "Optimized geometry for load distribution",
            "Low friction design",
            "Extended service life",
            "SKF and NBC authorized stock"
        ]
    },
    {
        id: 8,
        name: "Sonalika & Massey Body Parts",
        category: "Tractor Spares",
        brand: "Sonalika",
        price: "Contact for Quote",
        image: "https://images.unsplash.com/photo-1595168171780-87729f273577?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Authentic, factory-spec body panels and fittings for Sonalika and Massey tractors. From heavy-gauge bonnets and fenders to precision grills, our body parts feature corrosion-resistant coatings and exact-match fitment. Restore the aesthetic appeal and structural integrity of your tractor with components built to withstand the elements.",
        features: [
            "OEM color matching",
            "High-grade sheet metal",
            "Includes fenders, bonnets, and grills",
            "Weather-resistant coating"
        ]
    }
];

const Products: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Extract unique categories and brands
  const categories = useMemo(() => Array.from(new Set(allProducts.map(p => p.category))).sort(), []);
  const brands = useMemo(() => Array.from(new Set(allProducts.map(p => p.brand))).sort(), []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProduct]);

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
        return categoryMatch && brandMatch;
    });
  }, [selectedCategories, selectedBrands]);

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => 
        prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
        prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <SEO 
        title="Product Catalog - Tractor Spares, Bearings & Tools | Bhandari Brothers" 
        description="Browse our extensive inventory of HMT/Mahindra tractor parts, Taparia tools, SKF bearings, high-tensile fasteners, and MRF/Ceat tyres in Mandsaur."
      />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12 animate-slide-up flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Product Catalog</h1>
              <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg font-light leading-relaxed">
                Your one-stop shop for Tractor Spares, Industrial Bearings, and High-Tensile Fasteners in Mandsaur.
              </p>
          </div>
          {(selectedCategories.length > 0 || selectedBrands.length > 0) && (
              <button 
                onClick={resetFilters}
                className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              >
                <RotateCcw size={16} /> Reset Filters
              </button>
          )}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar Filters (Desktop) */}
            <div className="hidden lg:block space-y-8 animate-slide-up stagger-1 h-fit sticky top-28">
                <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm transition-colors">
                    <div className="flex items-center gap-2 mb-6 text-slate-900 dark:text-white font-bold">
                        <Filter size={20} className="text-[#115FAD]" /> Filters
                    </div>
                    
                    <div className="mb-8">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Category</h3>
                        <ul className="space-y-2">
                            {categories.map(cat => {
                                const isSelected = selectedCategories.includes(cat);
                                return (
                                    <li 
                                        key={cat}
                                        onClick={() => toggleCategory(cat)}
                                        className={`cursor-pointer text-sm font-medium py-2 px-3 rounded-lg transition-all flex justify-between items-center ${
                                            isSelected
                                            ? 'bg-blue-50 dark:bg-blue-900/30 text-[#00157E] dark:text-blue-300' 
                                            : 'text-slate-600 dark:text-slate-400 hover:text-[#115FAD] dark:hover:text-blue-300 hover:bg-slate-50 dark:hover:bg-slate-900'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${isSelected ? 'bg-[#115FAD] border-[#115FAD]' : 'border-slate-300 dark:border-slate-600'}`}>
                                                {isSelected && <Check size={10} className="text-white" />}
                                            </div>
                                            {cat}
                                        </div>
                                        <span className="text-xs text-slate-400">
                                            {allProducts.filter(p => p.category === cat).length}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Brands</h3>
                        <ul className="space-y-2">
                             {brands.map(brand => {
                                const isSelected = selectedBrands.includes(brand);
                                return (
                                    <li 
                                        key={brand}
                                        onClick={() => toggleBrand(brand)}
                                        className={`cursor-pointer text-sm font-medium py-2 px-3 rounded-lg transition-all flex justify-between items-center ${
                                            isSelected
                                            ? 'bg-blue-50 dark:bg-blue-900/30 text-[#00157E] dark:text-blue-300' 
                                            : 'text-slate-600 dark:text-slate-400 hover:text-[#115FAD] dark:hover:text-blue-300 hover:bg-slate-50 dark:hover:bg-slate-900'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${isSelected ? 'bg-[#115FAD] border-[#115FAD]' : 'border-slate-300 dark:border-slate-600'}`}>
                                                {isSelected && <Check size={10} className="text-white" />}
                                            </div>
                                            {brand}
                                        </div>
                                         <span className="text-xs text-slate-400">
                                            {allProducts.filter(p => p.brand === brand).length}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Mobile Filters */}
            <div className="lg:hidden flex flex-col gap-4 animate-slide-up stagger-1 mb-8">
                {/* Category Pills */}
                <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Categories</h3>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map(cat => (
                            <button 
                                key={cat}
                                onClick={() => toggleCategory(cat)}
                                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border transition-colors flex items-center gap-2 ${
                                    selectedCategories.includes(cat) 
                                    ? 'bg-[#00157E] text-white border-[#00157E]' 
                                    : 'bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800'
                                }`}
                            >
                                {cat}
                                {selectedCategories.includes(cat) && <X size={14} className="opacity-70" />}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Brand Pills */}
                <div>
                     <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Brands</h3>
                     <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {brands.map(brand => (
                            <button 
                                key={brand}
                                onClick={() => toggleBrand(brand)}
                                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border transition-colors flex items-center gap-2 ${
                                    selectedBrands.includes(brand) 
                                    ? 'bg-[#00157E] text-white border-[#00157E]' 
                                    : 'bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800'
                                }`}
                            >
                                {brand}
                                {selectedBrands.includes(brand) && <X size={14} className="opacity-70" />}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="lg:col-span-3">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, idx) => (
                            <div 
                                key={product.id} 
                                className="bg-white dark:bg-slate-950 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 dark:hover:shadow-blue-900/10 transition-all duration-300 group animate-slide-up flex flex-col"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                <div className="relative h-72 mb-6 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10"></div>
                                    <img 
                                        src={product.image} 
                                        alt={`${product.name} - ${product.description}`} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="inline-block py-1 px-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-[#00157E] dark:text-blue-400 text-[10px] font-bold uppercase tracking-wide rounded-md shadow-sm">
                                            {product.brand}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-grow">
                                    <div className="mb-2">
                                        <span className="inline-block py-1 px-2 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wide rounded-md mb-2">{product.category}</span>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#115FAD] dark:group-hover:text-blue-400 transition-colors line-clamp-1">{product.name}</h3>
                                    </div>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">{product.description}</p>
                                    
                                    {product.features && (
                                        <div className="mb-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                                            <ul className="space-y-1">
                                                {product.features.slice(0, 2).map((feature, i) => (
                                                    <li key={i} className="text-xs text-slate-500 dark:text-slate-500 flex items-start gap-2">
                                                        <CheckCircle2 size={12} className="text-green-500 mt-0.5 shrink-0" /> {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <button 
                                        onClick={() => setSelectedProduct(product)}
                                        className="w-full py-4 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:border-[#115FAD] hover:bg-[#115FAD] hover:text-white transition-all flex items-center justify-center gap-2 group/btn mt-auto"
                                    >
                                        View Details <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center text-slate-400 flex flex-col items-center">
                            <Filter size={48} className="mb-4 opacity-20" />
                            <h3 className="text-lg font-semibold text-slate-600 dark:text-slate-300">No products found</h3>
                            <p>Try adjusting your filters or resetting them.</p>
                            <button 
                                onClick={resetFilters}
                                className="mt-6 text-[#115FAD] hover:underline font-medium"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div 
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={() => setSelectedProduct(null)}
            ></div>
            <div className="relative w-full max-w-5xl bg-white dark:bg-slate-950 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-slide-up">
                
                {/* Close Button */}
                <button 
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 z-20 p-2 bg-white/80 dark:bg-slate-900/80 rounded-full hover:bg-white dark:hover:bg-slate-800 transition-colors"
                >
                    <X size={24} className="text-slate-600 dark:text-slate-300" />
                </button>

                {/* Left Side: Image */}
                <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-slate-100 dark:bg-slate-900">
                    <img 
                        src={selectedProduct.image} 
                        alt={selectedProduct.name} 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto custom-scrollbar">
                    <div className="mb-6">
                        <div className="flex gap-2 mb-4">
                             <span className="inline-block py-1 px-3 bg-blue-50 dark:bg-blue-900/20 text-[#00157E] dark:text-blue-300 text-xs font-bold uppercase tracking-wider rounded-full">
                                {selectedProduct.category}
                            </span>
                            <span className="inline-block py-1 px-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider rounded-full">
                                {selectedProduct.brand}
                            </span>
                        </div>
                       
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                            {selectedProduct.name}
                        </h2>
                        <p className="text-lg text-[#115FAD] dark:text-blue-400 font-semibold">
                            {selectedProduct.price}
                        </p>
                    </div>

                    <div className="prose dark:prose-invert mb-8">
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">Overview</h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                            {selectedProduct.description}
                        </p>
                    </div>

                    {selectedProduct.features && (
                        <div className="mb-8">
                             <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Key Specifications</h3>
                             <ul className="space-y-3">
                                {selectedProduct.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm">
                                        <CheckCircle2 size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                             </ul>
                        </div>
                    )}

                    <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex gap-4">
                        <Link 
                            to="/contact" 
                            className="flex-1 bg-[#00157E] text-white py-4 rounded-xl font-bold hover:bg-[#115FAD] transition-all text-center flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-900/20"
                        >
                            Request Quote <MessageSquare size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      )}

    </div>
  );
};

export default Products;