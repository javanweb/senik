import React from 'react';
import { SenikLogo, LocationIcon } from './Icons';

const AnalyticsGraph: React.FC = () => (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100 relative">
        <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800 text-sm sm:text-base">Website Analytics</h3>
            <span className="text-lg text-gray-400 font-bold">...</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs text-gray-500 mb-6 pb-4 border-b">
            <div>
                <p className="font-semibold text-base sm:text-lg text-gray-900">1.6K</p>
                <p>Users</p>
                <p className="text-green-500 text-xs mt-1">+3.49%</p>
            </div>
            <div>
                <p className="font-semibold text-base sm:text-lg text-gray-900">8.4K</p>
                <p>Sessions</p>
                <p className="text-red-500 text-xs mt-1">-0.13%</p>
            </div>
             <div>
                <p className="font-semibold text-base sm:text-lg text-gray-900">2.19%</p>
                <p>IM s2s</p>
                <p className="text-green-500 text-xs mt-1">+1.22%</p>
            </div>
             <div>
                <p className="font-semibold text-base sm:text-lg text-gray-900">-0.42%</p>
                <p>Bounce</p>
                <p className="text-red-500 text-xs mt-1">-0.42%</p>
            </div>
        </div>

        {/* Floating Card */}
        <div className="absolute top-24 right-[15%] sm:right-[25%] z-10 flex items-center gap-2 bg-white p-2 rounded-lg shadow-lg border text-xs">
           <LocationIcon className="w-5 h-5 text-blue-500"/>
           <div>
            <p className="font-bold text-gray-900">178,080</p>
            <p className="text-green-500 font-semibold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
                <span>+3.49%</span>
            </p>
           </div>
           <span className="text-gray-400 font-bold ml-2">...</span>
        </div>

        <svg viewBox="0 0 400 150" className="w-full h-auto">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: 'rgba(1,212,143,0.3)'}} />
                    <stop offset="100%" style={{stopColor: 'rgba(1,212,143,0)'}} />
                </linearGradient>
            </defs>
            <path d="M 0 100 Q 50 50, 100 80 T 200 60 T 300 110 T 400 90" stroke="#01D48F" strokeWidth="3" fill="url(#gradient)" strokeLinecap="round"/>
            
            {/* Data points */}
            <circle cx="100" cy="80" r="4" fill="white" stroke="#01D48F" strokeWidth="2"/>
            <circle cx="200" cy="60" r="4" fill="white" stroke="#01D48F" strokeWidth="2"/>
            <circle cx="300" cy="110" r="4" fill="white" stroke="#01D48F" strokeWidth="2"/>
        </svg>

        <div className="flex justify-between text-xs text-gray-500 mt-2 px-2">
            <span>14 Jan</span>
            <span>15 Jan</span>
            <span>16 Jan</span>
            <span>17 Jan</span>
            <span>18 Jan</span>
            <span>20 Jan</span>
        </div>
    </div>
);


const Analytics: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 w-full">
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">چرا سیستم یکپارچه مالی سه نیک؟</h2>
              <p className="text-gray-700 leading-relaxed">
                سه نیک با سال ها تجربه در امور مالی و حسابداری بررسی همه جانبه و عمیقی از خواسته ها و نیازهای بازار کسب کار انجام داده است و تجربه حسابداران و حسابرسان ، مدیران مالی وگردانندگان مشاغل ساده را با دانش مهندسان نرم افزار تلفیق کرده تا به ترکیبی جالب و حرفه ای دست پیدا کند. یکی از نکات مثبت در طراحی سیستم سه نیک این است که طراحان سه نیک علاوه بر دانش برنامه نویسی و نرم افزار دارای تجربه چند ساله در زمینه حسابداری و مشاوره مالی می باشند.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white p-2 rounded-full shadow-md">
                    <SenikLogo className="w-8 h-8 text-[#005B6E]"/>
                  </div>
                <h2 className="text-3xl font-bold text-gray-900">اهداف سیستم یکپارچه سه نیک</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                گروه نرم افزاری سه نیک با تشکیل تیمی تخصصی و متبحر در زمینه های مالی – نرم افزاری و سخت افزاری مفتخر است تا بهترین مشاوره ها در زمینه مکانیزاسیون سیستم های مالی و اداری به شما ارائه نماید. هماهنگی در این حوزه ها(مالی،نرم افزاری،سخت افزاری) برای مشتریان ما این مزیت را به همراه داشته است تا با کمترین هزینه بیشترین خدمات را دریافت نمایند.تیم قدرتمند سه نیک تمامی الزامات و ابزار لازم را برآورد و سپس با موافقت مشتری عملیات اجرا و استقرار سیستم های مالی را در حداقل زمان ممکن مهیا می سازد.
              </p>
                 <a href="#" className="inline-block mt-8 bg-[#005B6E] hover:bg-[#004a5a] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105">
                    بیشتر بدانید
                </a>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <AnalyticsGraph />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;