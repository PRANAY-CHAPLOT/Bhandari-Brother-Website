
import { Mail, Phone, MapPin, ArrowRight, ExternalLink, Clock } from 'lucide-react';
import SEO from '../components/SEO.js';
import { html } from 'htm/react';

const Contact = () => {
  const mapLink = "https://share.google/Zvnr8C3xALg4CSsMJ";

  return html`
    <div className="min-h-screen pt-20 bg-white dark:bg-slate-950 flex flex-col transition-colors duration-300">
       <${SEO} 
        title="Contact Bhandari Brothers - Industrial Supply HQ in Mandsaur" 
        description="Visit our headquarters Opposite Balaji Mandir, Bus Stand, Mandsaur. Contact us for inquiries about Tractor Spares, Bearings, and Industrial Tools."
      />

       <div className="flex-grow grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-[#00157E] text-white p-8 md:p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden animate-slide-up">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10">
                    <span className="inline-block py-1 px-3 rounded-md bg-blue-900/50 text-blue-200 text-xs font-bold uppercase tracking-wider mb-6">Contact Us</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">Visit Our <br/>Hub.</h1>
                    
                    <div className="space-y-8">
                        <div className="flex items-start gap-6 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                            <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-[#115FAD] transition-colors backdrop-blur-sm shrink-0">
                                <${MapPin} className="text-white" size=${24} />
                            </div>
                            <div>
                                <p className="text-blue-300 text-sm font-medium mb-1 uppercase tracking-wide">Mandsaur HQ</p>
                                <p className="text-lg md:text-xl font-semibold leading-snug">Opposite Balaji Mandir,<br/> Bus Stand, Mandsaur City - 458002<br/>Madhya Pradesh</p>
                                <a 
                                  href=${mapLink} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="inline-flex items-center gap-2 mt-2 text-blue-300 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5 text-sm"
                                >
                                  Get Directions <${ExternalLink} size=${14} />
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                            <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-[#115FAD] transition-colors backdrop-blur-sm shrink-0">
                                <${Clock} className="text-white" size=${24} />
                            </div>
                            <div>
                                <p className="text-blue-300 text-sm font-medium mb-1 uppercase tracking-wide">Opening Hours</p>
                                <ul className="text-lg font-semibold leading-snug space-y-1">
                                    <li className="flex justify-between w-full gap-8"><span>Mon - Sat:</span> <span>9:00 AM - 10:00 PM</span></li>
                                    <li className="flex justify-between w-full gap-8 text-blue-300"><span>Sunday:</span> <span>Closed</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                            <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-[#115FAD] transition-colors backdrop-blur-sm shrink-0">
                                <${Phone} className="text-white" size=${24} />
                            </div>
                            <div>
                                <p className="text-blue-300 text-sm font-medium mb-1 uppercase tracking-wide">Contact</p>
                                <p className="text-lg md:text-xl font-semibold">+91 141 555 0123</p>
                                <p className="text-blue-200">contact@bhandaribros.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-950 p-8 md:p-12 lg:p-24 flex items-center animate-slide-up stagger-2">
                <form className="w-full max-w-lg space-y-6" onSubmit=${(e) => e.preventDefault()}>
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Send us a Message</h2>
                        <p className="text-slate-500 dark:text-slate-400 mb-8">Have a specific part requirement? We respond within 24 hours.</p>
                    </div>
                    <div className="group">
                        <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 group-focus-within:text-[#115FAD] dark:group-focus-within:text-blue-400 transition-colors">Full Name</label>
                        <input type="text" className="w-full p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-[#115FAD] focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-all placeholder:text-slate-400 dark:text-white font-medium" placeholder="Your Name" />
                    </div>
                    <div className="group">
                        <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 group-focus-within:text-[#115FAD] dark:group-focus-within:text-blue-400 transition-colors">Phone Number</label>
                        <input type="tel" className="w-full p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-[#115FAD] focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-all placeholder:text-slate-400 dark:text-white font-medium" placeholder="+91 98765 43210" />
                    </div>
                    <div className="group">
                        <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 group-focus-within:text-[#115FAD] dark:group-focus-within:text-blue-400 transition-colors">Requirement</label>
                        <textarea className="w-full p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-[#115FAD] focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-all h-32 placeholder:text-slate-400 dark:text-white font-medium resize-none" placeholder="Details about the tools or bearings you need..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#00157E] text-white font-bold py-4 rounded-xl hover:bg-[#115FAD] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                        Send Message <${ArrowRight} size=${20} />
                    </button>
                </form>
            </div>
       </div>

       <div className="w-full h-[500px] relative animate-slide-up stagger-3">
          <div className="absolute top-6 right-6 z-10 hidden md:block">
             <a 
               href=${mapLink} 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-white dark:bg-slate-900 text-[#00157E] dark:text-white px-6 py-3 rounded-full font-bold shadow-xl hover:bg-blue-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2 hover:scale-105"
             >
               Open in Google Maps <${ExternalLink} size=${18} />
             </a>
          </div>
          <iframe 
            title="Bhandari Brothers Location Mandsaur"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7286.05736306958!2d75.06216379357913!3d24.065294499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39642ea88a23fb27%3A0x8918a75da119c9e1!2sBhandari%20Brothers!5e0!3m2!1sen!2sin!4v1764590725811!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style=${{border:0}} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 filter"
          ></iframe>
       </div>
    </div>
  `;
};

export default Contact;
