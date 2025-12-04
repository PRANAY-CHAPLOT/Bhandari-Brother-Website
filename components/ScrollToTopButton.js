
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { html } from 'htm/react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return html`
    <button
      onClick=${scrollToTop}
      className=${`fixed bottom-8 right-8 z-30 p-3 rounded-full bg-[#00157E] dark:bg-blue-600 text-white shadow-lg hover:shadow-xl hover:bg-[#115FAD] dark:hover:bg-blue-500 transition-all duration-300 transform border border-white/10 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
      aria-label="Back to top"
      title="Back to top"
    >
      <${ArrowUp} size=${24} strokeWidth=${2.5} />
    </button>
  `;
};

export default ScrollToTopButton;
