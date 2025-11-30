
import React from 'react';
import { Hero } from './Hero';
import { Projects } from './Projects';
import { ArrowLeft, Leaf, Lightbulb, Globe2, Quote, BookOpen, Award, Mail, ChevronLeft } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const latestNews = [
    { title: 'حضور هلدینگ زونکو در نمایشگاه جیتکس ۲۰۲۴', date: '۲۵ مهر ۱۴۰۳', category: 'رویداد' },
    { title: 'آغاز عملیات اجرایی برج دوقلوی زونکو در کیش', date: '۱۰ آبان ۱۴۰۳', category: 'عمران' },
    { title: 'گزارش عملکرد شش ماهه اول سال ۱۴۰۳ منتشر شد', date: '۱۵ آبان ۱۴۰۳', category: 'مالی' },
];

const partners = [
    "شرکت ملی نفت", "بانک تجارت", "فولاد مبارکه", "مپنا", "دیجی‌کالا", "همراه اول"
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero onCtaClick={() => onNavigate('subsidiaries')} />
      
      {/* 1. Introduction Stats Block */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-8 md:p-16 text-white text-center shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6">درباره زونکو</h2>
                  <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
                      هلدینگ زونکو از سال ۱۳۹۰ با هدف ایجاد تحول در صنایع زیربنایی کشور تاسیس شد. ما با به‌کارگیری نخبگان جوان و تکنولوژی‌های روز دنیا، مسیری نو در عرصه‌های فناوری، عمران و تجارت ترسیم کرده‌ایم.
                  </p>
                  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/10 pt-8">
                     <div>
                        <div className="text-3xl font-bold text-blue-400">۱۲</div>
                        <div className="text-sm text-slate-300">سال تجربه</div>
                     </div>
                     <div>
                        <div className="text-3xl font-bold text-blue-400">۲۴</div>
                        <div className="text-sm text-slate-300">شرکت تابعه</div>
                     </div>
                     <div>
                        <div className="text-3xl font-bold text-blue-400">۵۰۰+</div>
                        <div className="text-sm text-slate-300">پرسنل</div>
                     </div>
                     <div>
                        <div className="text-3xl font-bold text-blue-400">۸</div>
                        <div className="text-sm text-slate-300">دفتر جهانی</div>
                     </div>
                  </div>
              </div>
           </div>
        </div>
      </section>

      {/* 2. Message from CEO (NEW) */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="grid md:grid-cols-2 gap-16 items-center">
                 <div className="relative">
                     <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl"></div>
                     <img src="https://picsum.photos/600/700?random=200" alt="CEO" className="rounded-2xl shadow-2xl w-full relative z-10" />
                     <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 border-r-4 border-blue-600">
                         <p className="font-black text-xl text-slate-900">دکتر آرش پارسا</p>
                         <p className="text-slate-500 text-sm">مدیرعامل و بنیان‌گذار</p>
                     </div>
                 </div>
                 <div>
                     <Quote className="text-blue-200 w-16 h-16 mb-6" />
                     <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
                         ما تنها سازه نمی‌سازیم، <br/>
                         <span className="text-blue-600">ما آینده را مهندسی می‌کنیم.</span>
                     </h2>
                     <p className="text-lg text-slate-600 leading-relaxed mb-6">
                         "در دنیایی که تغییر تنها ثابت آن است، ایستادن به معنای عقب‌گرد است. استراتژی ما در زونکو، حرکت بر لبه تکنولوژی و تلفیق خرد سنتی با ابزارهای مدرن است. ما متعهدیم که نه تنها برای سهامداران خود، بلکه برای جامعه و محیط زیست ارزش‌آفرین باشیم."
                     </p>
                     <p className="text-lg text-slate-600 leading-relaxed mb-8">
                         "امروز زونکو فراتر از یک هلدینگ اقتصادی است؛ ما یک اکوسیستم پویا برای رشد ایده‌های جسورانه هستیم."
                     </p>
                     <button onClick={() => onNavigate('about')} className="flex items-center gap-2 text-blue-700 font-bold hover:gap-3 transition-all">
                         ادامه پیام مدیرعامل <ArrowLeft size={20} />
                     </button>
                 </div>
             </div>
         </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-slate-900 mb-4">محورهای استراتژیک</h2>
               <p className="text-slate-500 max-w-2xl mx-auto">ما بر روی سه اصل کلیدی برای خلق آینده‌ای پایدار و هوشمند تمرکز کرده‌ایم.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                   { icon: <Lightbulb size={32} />, title: 'نوآوری و فناوری', desc: 'سرمایه‌گذاری بر روی لبه تکنولوژی و هوش مصنوعی.', link: 'innovation' },
                   { icon: <Leaf size={32} />, title: 'توسعه پایدار', desc: 'تعهد به محیط زیست و مسئولیت‌های اجتماعی.', link: 'sustainability' },
                   { icon: <Globe2 size={32} />, title: 'حضور جهانی', desc: 'گسترش مرزهای تجارت به بازارهای بین‌المللی.', link: 'subsidiaries' }
                ].map((item, idx) => (
                   <div key={idx} onClick={() => onNavigate(item.link)} className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer group">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                         {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                      <span className="text-blue-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                         بیشتر بدانید <ArrowLeft size={16} />
                      </span>
                   </div>
                ))}
            </div>
         </div>
      </section>

      {/* 3. Global Presence Map (NEW) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                  <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">بدون مرز</span>
                  <h2 className="text-4xl font-extrabold mt-2">حضور فعال در ۴ قاره جهان</h2>
              </div>
              
              <div className="relative w-full aspect-[16/9] bg-slate-800/50 rounded-3xl border border-white/10 p-4 md:p-12 overflow-hidden group">
                  {/* Abstract Map Representation */}
                  <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center bg-no-repeat"></div>
                  
                  {/* Hotspots */}
                  {[
                      { top: '40%', right: '35%', label: 'تهران (مرکزی)' },
                      { top: '45%', right: '40%', label: 'دبی' },
                      { top: '35%', right: '45%', label: 'استانبول' },
                      { top: '30%', right: '15%', label: 'شانگهای' },
                      { top: '25%', right: '80%', label: 'تورنتو' },
                      { top: '60%', right: '70%', label: 'سائوپائولو' },
                  ].map((spot, i) => (
                      <div key={i} className="absolute flex flex-col items-center group/spot cursor-pointer transition-all duration-500 hover:scale-110" style={{ top: spot.top, right: spot.right }}>
                          <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping absolute"></div>
                          <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white relative z-10"></div>
                          <div className="mt-2 bg-black/80 text-xs px-2 py-1 rounded backdrop-blur-sm opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap">
                              {spot.label}
                          </div>
                      </div>
                  ))}
                  
                  <div className="absolute bottom-8 right-8 max-w-xs">
                      <h3 className="text-xl font-bold mb-2">شبکه لجستیک جهانی</h3>
                      <p className="text-sm text-slate-400">با بیش از ۵۰ شریک تجاری و ۸ دفتر اختصاصی، ما پل ارتباطی شما با بازارهای جهانی هستیم.</p>
                      <button onClick={() => onNavigate('contact')} className="mt-4 text-blue-400 text-sm font-bold flex items-center gap-2 hover:text-white transition-colors">
                          مشاهده لیست دفاتر <ChevronLeft size={16} />
                      </button>
                  </div>
              </div>
          </div>
      </section>

      <Projects />

      {/* 4. Academy Teaser (NEW) */}
      <section className="py-24 bg-gradient-to-r from-indigo-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                  <div className="lg:w-1/2">
                      <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-indigo-600 font-bold text-sm mb-6">
                          <BookOpen size={18} />
                          آکادمی زونکو
                      </div>
                      <h2 className="text-4xl font-extrabold text-slate-900 mb-6">یادگیری مهارت‌های آینده، امروز</h2>
                      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                          آکادمی زونکو با هدف تربیت نیروی متخصص برای اکوسیستم نوآوری کشور، دوره‌های تخصصی در حوزه‌های هوش مصنوعی، مدیریت پروژه پیشرفته و بازارهای مالی بین‌المللی برگزار می‌کند.
                      </p>
                      <ul className="space-y-4 mb-8">
                          {['مدارک معتبر بین‌المللی', 'اساتید تراز اول صنعت', 'فرصت استخدام در شرکت‌های گروه'].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 font-medium text-slate-700">
                                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><ChevronLeft size={14} className="rotate-180" /></div>
                                  {item}
                              </li>
                          ))}
                      </ul>
                      <button onClick={() => onNavigate('academy')} className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-shadow shadow-lg shadow-indigo-600/30">
                          ورود به آکادمی آموزشی
                      </button>
                  </div>
                  <div className="lg:w-1/2 relative">
                      <div className="grid grid-cols-2 gap-4">
                          <img src="https://picsum.photos/300/400?random=210" className="rounded-2xl shadow-lg mt-8" alt="Class" />
                          <img src="https://picsum.photos/300/400?random=211" className="rounded-2xl shadow-lg mb-8" alt="Workshop" />
                      </div>
                      {/* Floating Badge */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl flex flex-col items-center text-center w-32">
                          <span className="text-3xl font-black text-indigo-600">+۵۰۰۰</span>
                          <span className="text-xs font-bold text-slate-500">دانش‌آموخته</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Latest News Preview */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex justify-between items-end mb-12">
                <div>
                   <h2 className="text-3xl font-bold text-slate-900 mb-2">آخرین اخبار</h2>
                   <p className="text-slate-500">تازه ترین اتفاقات هلدینگ زونکو</p>
                </div>
                <button onClick={() => onNavigate('news')} className="hidden md:flex text-blue-600 font-bold items-center gap-2 hover:gap-3 transition-all">
                   مشاهده آرشیو <ArrowLeft size={20} />
                </button>
             </div>
             <div className="grid md:grid-cols-3 gap-8">
                {latestNews.map((news, idx) => (
                   <div key={idx} className="group cursor-pointer" onClick={() => onNavigate('news')}>
                      <div className="bg-slate-100 rounded-2xl h-48 mb-4 overflow-hidden relative">
                         <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>
                         <img src={`https://picsum.photos/600/400?random=${30+idx}`} alt="" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                         <span className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-800">
                             {news.category}
                         </span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-xs mb-2">
                          <span>{news.date}</span>
                      </div>
                      <h3 className="font-bold text-lg text-slate-800 group-hover:text-blue-600 transition-colors leading-snug">
                          {news.title}
                      </h3>
                   </div>
                ))}
             </div>
          </div>
      </section>

      {/* 5. Awards Strip (NEW) */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
                  <div className="text-center md:text-right">
                      <p className="text-sm font-bold text-slate-500 uppercase mb-1">افتخارات ما</p>
                      <h3 className="text-xl font-bold text-slate-800">تضمین کیفیت و استاندارد جهانی</h3>
                  </div>
                  <div className="flex gap-6 items-center opacity-70 grayscale hover:grayscale-0 transition-all">
                      {/* Fake ISO Logos using text styling for demo */}
                      <div className="border-2 border-slate-400 p-2 rounded text-slate-600 font-bold text-xs text-center w-16 h-16 flex items-center justify-center">ISO 9001</div>
                      <div className="border-2 border-slate-400 p-2 rounded text-slate-600 font-bold text-xs text-center w-16 h-16 flex items-center justify-center">ISO 14001</div>
                      <div className="border-2 border-slate-400 p-2 rounded text-slate-600 font-bold text-xs text-center w-16 h-16 flex items-center justify-center">HSE-MS</div>
                      <div className="border-2 border-slate-400 p-2 rounded text-slate-600 font-bold text-xs text-center w-16 h-16 flex items-center justify-center">EFQM</div>
                  </div>
                  <button onClick={() => onNavigate('certificates')} className="text-blue-600 font-bold text-sm hover:underline">مشاهده همه گواهینامه‌ها</button>
              </div>
          </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">مورد اعتماد برترین‌ها</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {partners.map((p, i) => (
                   <span key={i} className="text-xl font-black text-slate-300 hover:text-blue-600 cursor-default select-none transition-colors">{p}</span>
                ))}
            </div>
         </div>
      </section>

      {/* 6. Newsletter (NEW) */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
         <div className="absolute inset-0 bg-blue-600/10"></div>
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
             <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                 <Mail size={32} />
             </div>
             <h2 className="text-3xl font-bold text-white mb-4">عضویت در خبرنامه زونکو</h2>
             <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                 آخرین تحلیل‌های اقتصادی، اخبار پروژه‌ها و فرصت‌های سرمایه‌گذاری را مستقیماً در ایمیل خود دریافت کنید.
             </p>
             <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                 <input type="email" placeholder="آدرس ایمیل شما" className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:bg-white/20 transition-all text-center sm:text-right" />
                 <button className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20">
                     عضویت رایگان
                 </button>
             </form>
             <p className="text-xs text-slate-500 mt-4">ما به حریم خصوصی شما احترام می‌گذاریم و اسپم ارسال نمی‌کنیم.</p>
         </div>
      </section>
    </>
  );
};
