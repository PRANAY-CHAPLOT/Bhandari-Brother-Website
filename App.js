
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Products from './pages/Products.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import ScrollToTopButton from './components/ScrollToTopButton.js';
import { html } from 'htm/react';

const App = () => {
  return html`
    <${Router}>
      <div className="flex flex-col min-h-screen">
        <${Navbar} />
        <main className="flex-grow">
          <${Routes}>
            <${Route} path="/" element=${html`<${Home} />`} />
            <${Route} path="/products" element=${html`<${Products} />`} />
            <${Route} path="/about" element=${html`<${About} />`} />
            <${Route} path="/contact" element=${html`<${Contact} />`} />
          <//>
        </main>
        <${Footer} />
        <${ScrollToTopButton} />
      </div>
    <//>
  `;
};

export default App;
