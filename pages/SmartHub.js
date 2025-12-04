
import AiTools from '../components/AiTools.js';
import { html } from 'htm/react';

const SmartHub = () => {
  return html`
    <div className="min-h-screen pt-28 pb-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Smart Industrial Hub</h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
                Leverage our advanced AI tools to research market trends, locate logistics partners, 
                generate part prototypes, or visualize design modifications instantly.
            </p>
        </div>
        <${AiTools} />
      </div>
    </div>
  `;
};

export default SmartHub;
