import React from 'react';
import { PlayIcon, ClockIcon, SenikLogo } from './Icons';

const SoftwareUI: React.FC = () => {
  return (
    <div dir="ltr" className="bg-[#f0f0f0] h-full flex flex-col text-[8px] md:text-[10px] text-gray-800 select-none">
      {/* Title bar */}
      <div className="bg-[#e0e0e0] px-2 py-1 flex justify-between items-center border-b border-gray-300">
        <span className="text-gray-600 font-sans">Senik Integrated System</span>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        </div>
      </div>
      {/* Menu bar */}
      <div className="bg-white px-2 py-1 flex flex-row-reverse gap-x-4 text-xs border-b border-gray-300 shadow-sm" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
        <span>پرونده</span>
        <span>اطلاعات پایه</span>
        <span>سیستم</span>
        <span>گزارشات</span>
        <span>عملیات</span>
        <span>سایر</span>
        <span>خروج</span>
      </div>

      <div className="flex-grow flex flex-row-reverse overflow-hidden">
        {/* Right Sidebar (in RTL) */}
        <div className="w-1/3 border-l border-gray-300 p-2 bg-white flex flex-col items-center">
            <ClockIcon className="w-12 h-12 md:w-16 md:h-16 text-gray-700" />
            <div className="text-right w-full mt-2 text-[9px] md:text-[11px] space-y-1 font-medium" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                <p>امروز: چهارشنبه ۲۲ تیر ۱۴۰۱</p>
                <p>کاربر: supervisor</p>
                <p>سال مالی: ۱۴۰۱</p>
                <p>انبار: انبار مرکزی</p>
                <p>صندوق: ۰۱</p>
                <p>پ.ک: ۰۱</p>
                <p>شعبه: ۰۱</p>
                <p className="pt-1 border-t border-gray-200 mt-1">آخرین دوره مالیاتی سالیانه بسته شده</p>
                <p className="text-gray-500 text-[8px] pt-1">توسعه بهینه سازان ماندگار سابق</p>
            </div>
        </div>
        {/* Main Content */}
        <div className="w-2/3 flex flex-col justify-center items-center p-4">
            <SenikLogo className="w-10 h-10 md:w-12 md:h-12 text-[#005B6E]" />
            <h2 className="text-sm md:text-base font-bold text-[#005B6E] mt-2 text-center" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>سیستم های یکپارچه مالی سه نیک</h2>
            <p className="text-xs text-gray-500 mt-1 font-sans tracking-widest">S E N I K</p>
        </div>
      </div>
      {/* Status Bar */}
      <div className="bg-gray-200 border-t border-gray-300 px-2 py-1 text-xs flex justify-between">
          <span>آماده</span>
          <div className="w-1/3 bg-gray-300 h-2 rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full w-[75%]"></div>
          </div>
      </div>
    </div>
  );
};

const LaptopShowcase: React.FC = () => {
    return (
        <div className="w-full max-w-xl lg:max-w-2xl mx-auto">
            <div className="relative mx-auto border-gray-200 bg-gray-200 border-[12px] rounded-t-2xl h-[250px] md:h-[350px]">
                <div className="rounded-lg overflow-hidden h-full bg-white">
                    <SoftwareUI />
                </div>
            </div>
            <div className="relative mx-auto bg-gray-200/80 rounded-b-2xl h-[24px]">
                 <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-md w-[80px] h-[8px] bg-gray-300"></div>
            </div>
        </div>
    );
};


const Hero: React.FC = () => {
  return (
    <section className="relative hero-gradient text-white pt-24 pb-40 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="lg:w-[45%] text-center lg:text-right lg:pr-8">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 animate-fade-in-down" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
              گروه نرم افزاری سه نیک
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-200 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              این نام نیک است که می ماند
            </p>
            <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              امید است ک از تجربه و تخصصمان برای یافتن بهترین نتیجه بهره بگیریم
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a
                href="#features"
                className="bg-gradient-to-b from-green-400 to-green-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-green-500/50"
              >
                همین الان شروع کنید
              </a>
              <a
                href="#contact"
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/20 flex items-center justify-center gap-2"
              >
                <PlayIcon className="w-6 h-6" />
                <span>پخش ویدئو</span>
              </a>
            </div>
          </div>
          
          <div className="lg:w-[55%] flex justify-center mt-12 lg:mt-0">
            <LaptopShowcase />
          </div>

        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]" style={{ transform: 'translateY(1px)' }}>
          <svg preserveAspectRatio="none" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="block w-[calc(100%)] h-[120px]">
              <path d="M0 31.2543C288 -31.2543 576 93.7628 864 80.0107C1152 66.2586 1440 -1.25427 1440 47.4984V120H0V31.2543Z" className="fill-current text-white"></path>
          </svg>
      </div>

    </section>
  );
};

export default Hero;