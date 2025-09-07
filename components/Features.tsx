

import React from 'react';
import type { Feature } from '../types';
import { topFeatures } from '../constants';
import { ArrowLeftIcon } from './Icons';

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
    <div className="flex items-center gap-4 mb-6">
      <div className="bg-teal-100 p-3 rounded-lg">
        <feature.icon className="w-8 h-8 text-[#005B6E]" />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
    </div>
    <ul className="space-y-4 text-gray-600 list-disc pr-5 flex-grow">
      {feature.points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
    <div className="mt-8 pt-6 border-t border-gray-200">
      <a href="#" className="group text-[#005B6E] font-semibold hover:text-[#01D48F] transition-colors flex justify-between items-center">
        <span>بیشتر بدانید</span>
        <ArrowLeftIcon className="w-6 h-6 transform transition-transform duration-300 group-hover:-translate-x-1" />
      </a>
    </div>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">برخی از نرم افزار های سه نیک</h2>
          <div className="w-24 h-1 bg-[#01D48F] mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topFeatures.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;