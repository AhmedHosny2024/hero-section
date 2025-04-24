import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import EditableText from './EditableText';
import { getRandomImage, getRandomHeadline, getRandomSubheadline } from '../utils/contentGenerator';

const HeroSection: React.FC = () => {
  const [headline, setHeadline] = useState('Elevate Your Digital Experience');
  const [subheadline, setSubheadline] = useState('Transform your ideas into reality with our cutting-edge platform designed for innovators and creators.');
  const [ctaText, setCtaText] = useState('Get Started');
  const [image, setImage] = useState(getRandomImage());
  const [isRegenerating, setIsRegenerating] = useState(false);

  const handleRegenerate = () => {
    setIsRegenerating(true);
    // Simulate an API call or processing time
    setTimeout(() => {
      setHeadline(getRandomHeadline());
      setSubheadline(getRandomSubheadline());
      setImage(getRandomImage());
      setIsRegenerating(false);
    }, 800);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 bg-purple-100 rounded-full opacity-70 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <EditableText
                value={headline}
                onChange={setHeadline}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                multiline
              />
              
              <EditableText
                value={subheadline}
                onChange={setSubheadline}
                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                multiline
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                <EditableText
                  value={ctaText}
                  onChange={setCtaText}
                  className="focus:outline-none bg-blue-600 hover:bg-blue-700 text-white"
                />
              </button>
              
              <button 
                onClick={handleRegenerate}
                disabled={isRegenerating}
                className="group flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 hover:border-gray-400 rounded-lg transition-all bg-white text-gray-700 font-medium"
              >
                <RefreshCw 
                  className={`w-4 h-4 ${isRegenerating ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} 
                />
                Regenerate with AI
              </button>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className={`rounded-xl overflow-hidden shadow-xl transform transition-all duration-700 ${isRegenerating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}`}>
              <img 
                src={image} 
                alt="Hero visual" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;