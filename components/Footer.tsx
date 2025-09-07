import React from 'react';
import { SenikLogo, YouTubeIcon, InstagramIcon, TelegramIcon, WhatsAppIcon, AparatIcon } from './Icons';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: YouTubeIcon, href: '#' },
    { icon: AparatIcon, href: '#' },
    { icon: TelegramIcon, href: '#' },
    { icon: WhatsAppIcon, href: '#' },
    { icon: InstagramIcon, href: '#' },
  ];

  return (
    <footer className="bg-[#005B6E] text-white">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <SenikLogo className="h-12 w-auto" />
              <div>
                <h3 className="text-2xl font-bold">سه نیک</h3>
                <p className="text-sm text-gray-200">سیستم یکپارچه مالی سه نیک</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              امید است ک از تجربه و تخصصمان برای یافتن بهترین نتیجه بهره بگیریم
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">فهرست ها</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-200 hover:text-[#01D48F] transition-colors">صفحه اصلی</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#01D48F] transition-colors">محصولات</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#01D48F] transition-colors">خدمات پشتیبانی</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#01D48F] transition-colors">آموزش</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#01D48F] transition-colors">آموزشگاه سینتا</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#01D48F] transition-colors">درباره ما</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#01D48F] transition-colors">تماس با ما</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">تماس با ما</h4>
            <div className="space-y-4 text-gray-200">
                <p>شماره همراه: 09925063800</p>
                <p>ایمیل: Senikesystem@gmail.com</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="bg-white/10 hover:bg-[#01D48F] p-3 rounded-full transition-colors group">
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-gray-300 text-sm">
          <p>تمامی حقوق مالکیت معنوی این سایت برای شرکت آما پردازش فرتاک یزد محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;