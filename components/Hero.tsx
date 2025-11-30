import React from 'react';
import { ArrowLeft, TrendingUp, ShieldCheck, Users } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <div className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-right">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 ml-2 animate-pulse"></span>
              پیشگام در نوآوری و توسعه
            </div>
            
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-tight mb-6">
              <span className="block xl:inline">آینده را با زونکو</span>{' '}
              <span className="block text-blue-600 mt-2">امروز بسازید</span>
            </h1>
            
            <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 leading-relaxed">
              هلدینگ بین‌المللی زونکو، مجموعه‌ای از شرکت‌های پیشرو در حوزه‌های فناوری، عمران و تجارت. ما با تکیه بر دانش روز، مرزهای غیرممکن را جابجا می‌کنیم.
            </p>
            
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-right lg:mx-0">
              <button 
                onClick={onCtaClick}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-1"
              >
                مشاهده پروژه‌ها
                <ArrowLeft className="mr-2" size={20} />
              </button>
              <button className="mt-3 sm:mt-0 sm:mr-3 inline-flex items-center justify-center px-8 py-3 border border-slate-200 text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 md:py-4 md:text-lg transition-all">
                درباره ما
              </button>
            </div>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-md overflow-hidden group">
               <img 
                 className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                 src="https://picsum.photos/800/1000?grayscale" 
                 alt="Zonco HQ" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <div className="grid grid-cols-3 gap-4 text-white border-t border-white/20 pt-4">
                     <div className="text-center">
                        <div className="flex justify-center mb-1"><TrendingUp size={20} /></div>
                        <div className="font-bold text-lg">+۲۰۰٪</div>
                        <div className="text-xs text-slate-300">رشد سالانه</div>
                     </div>
                     <div className="text-center border-r border-l border-white/20">
                        <div className="flex justify-center mb-1"><Users size={20} /></div>
                        <div className="font-bold text-lg">۵۰+</div>
                        <div className="text-xs text-slate-300">متخصص</div>
                     </div>
                     <div className="text-center">
                        <div className="flex justify-center mb-1"><ShieldCheck size={20} /></div>
                        <div className="font-bold text-lg">۱۰۰٪</div>
                        <div className="text-xs text-slate-300">رضایت مشتری</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};