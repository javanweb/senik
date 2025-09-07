import React from 'react';
import { VisaIcon, WifiIcon, SignalIcon, BatteryIcon } from './Icons';

const PhoneMockup: React.FC = () => (
  <div className="relative w-80 h-[36rem] bg-gray-900 rounded-[3.5rem] p-3 border-4 border-gray-700 shadow-2xl">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-2xl z-20 flex justify-center items-center">
        <div className="w-12 h-2 bg-gray-700 rounded-full"></div>
    </div>
    <div className="w-full h-full bg-gray-800 rounded-[3rem] overflow-hidden">
      {/* Phone Screen Content */}
      <div className="h-full w-full bg-gray-100 flex flex-col">
        {/* Status Bar */}
        <div className="flex justify-between items-center px-6 pt-4 text-gray-800">
          <span className="text-sm font-bold">9:41 AM</span>
          <div className="flex items-center gap-2">
            <SignalIcon className="w-4 h-4" />
            <WifiIcon className="w-4 h-4" />
            <BatteryIcon className="w-5 h-5" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow p-4">
          {/* VISA Card */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 bg-yellow-400/80 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
              </div>
              <VisaIcon className="w-16 h-auto" />
            </div>
            <div className="mt-8 text-2xl font-mono tracking-widest text-left">
              <span>5412</span>
              <span className="ml-2">7512</span>
              <span className="ml-2">3412</span>
              <span>3456</span>
            </div>
            <div className="flex justify-between items-end mt-4 text-xs">
              <div>
                <p className="opacity-70">Card Holder</p>
                <p className="font-bold">Lee M. Cardholder</p>
              </div>
              <div>
                <p className="opacity-70">Expires</p>
                <p className="font-bold">12/23</p>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="mt-6 bg-white rounded-2xl p-4 shadow">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-sm text-gray-500">Downloads</p>
                    <p className="text-2xl font-bold text-gray-900">299,674</p>
                </div>
                <div className="bg-blue-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" /></svg>
                </div>
            </div>
             <svg viewBox="0 0 100 30" className="w-full h-auto mt-2">
                <path d="M 0 25 Q 10 5, 20 15 T 40 10 T 60 20 T 80 15 T 100 5" stroke="#3B82F6" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">درباره سه نیک</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              مهندس محمدصادق پاکزاد از سال ۱۳۷۳ در عرصه نرم افزار های حسابداری شروع ب فعالیت کردند و نرم افزار حسابداری امین و آریا را تحت سیستم عامل DOS طراحی و تولید کردند.شرکت آما پردازش ایساتیس نیز در سال 1387 به منظور فعالیت در زمینه تولید نرم افزارهای مالی توسط مهندس محمدصادق پاکزاد تاسیس گردید و راه پر فراز و نشیب رشد و پیشرفت در این عرصه را به منظور کسب تجربه و خدمت به پیشرفت تکنولوژی در کشور با همراهی مدیران و متخصصین علوم فناوری اطلاعات و حسابداری پیموده است. در سال 1401به علت بعضی تغییرات در هیئت مدیره شرکت نام شرکت به آما پردازش فرتاک تغییر کرد و با همان رویکرد روبه جلو ب کار خود ادامه میدهد.
            </p>
            <a href="#" className="inline-block bg-[#01D48F] hover:bg-[#00b377] text-gray-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105">
                بیشتر بدانید
            </a>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center mt-12 lg:mt-0">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;