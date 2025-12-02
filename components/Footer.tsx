import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#00157E] dark:bg-slate-950 text-white pt-20 pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-blue-800 pb-12 transition-colors duration-300">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-white">Bhandari Brothers</h3>
            <p className="text-blue-200 max-w-md leading-relaxed transition-colors duration-300">
              Pioneering precision in industrial supply and agro-tech. We deliver world-class engineering components with a commitment to quality and innovation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-6 text-blue-100 transition-colors duration-300">Quick Links</h4>
            <ul className="space-y-4 text-blue-300 transition-colors duration-300">
              <li><a href="#" className="hover:text-white transition">Agro Equipment</a></li>
              <li><a href="#" className="hover:text-white transition">Precision Bearings</a></li>
              <li><a href="#" className="hover:text-white transition">Steel Components</a></li>
              <li><a href="#" className="hover:text-white transition">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-6 text-blue-100 transition-colors duration-300">Contact</h4>
            <ul className="space-y-4 text-blue-300 transition-colors duration-300">
              <li>Mandsaur, Madhya Pradesh</li>
              <li>+91 141 555 0123</li>
              <li>contact@bhandaribros.com</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-blue-400 text-sm transition-colors duration-300">
          <p>&copy; {new Date().getFullYear()} Bhandari Brothers. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition"><Facebook size={20}/></a>
             <a href="#" className="hover:text-white transition"><Twitter size={20}/></a>
             <a href="#" className="hover:text-white transition"><Linkedin size={20}/></a>
             <a href="#" className="hover:text-white transition"><Instagram size={20}/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;