import React from 'react';
import { Calendar, MapPin, Clock, ArrowLeft } from 'lucide-react';

export const EventsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
             <h1 className="text-4xl font-extrabold text-slate-900 mb-4">تقویم رویدادها</h1>
             <p className="text-xl text-slate-500">با ما در نمایشگاه‌ها و همایش‌های داخلی و بین‌المللی دیدار کنید.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
             
             {/* Upcoming Event (Featured) */}
             <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-2/5 h-64 md:h-auto relative">
                   <img src="https://picsum.photos/600/800?random=100" alt="Event" className="absolute inset-0 w-full h-full object-cover" />
                   <div className="absolute top-4 right-4 bg-blue-600 text-white p-3 rounded-xl text-center min-w-[70px]">
                      <div className="text-2xl font-bold">۱۵</div>
                      <div className="text-xs">آذر</div>
                   </div>
                </div>
                <div className="p-8 md:w-3/5 flex flex-col justify-center">
                   <span className="text-blue-600 font-bold text-sm mb-2 uppercase tracking-wide">رویداد پیش‌رو</span>
                   <h2 className="text-2xl font-bold text-slate-900 mb-4">همایش ملی شهر هوشمند</h2>
                   <p className="text-slate-500 mb-6 leading-relaxed">
                      زونکو به عنوان حامی الماس در این رویداد حضور دارد و از آخرین دستاوردهای خود در حوزه مدیریت شهری هوشمند رونمایی خواهد کرد.
                   </p>
                   <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3 text-slate-600">
                         <MapPin size={18} className="text-slate-400" />
                         تهران، مرکز همایش‌های برج میلاد
                      </div>
                      <div className="flex items-center gap-3 text-slate-600">
                         <Clock size={18} className="text-slate-400" />
                         ۰۹:۰۰ الی ۱۷:۰۰
                      </div>
                   </div>
                   <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-medium w-fit hover:bg-blue-600 transition-colors">
                      ثبت نام و دریافت کارت دعوت
                   </button>
                </div>
             </div>

             {/* Past Events List */}
             <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">رویدادهای اخیر</h3>
                <div className="space-y-6">
                   {[
                      { title: 'نمایشگاه جیتکس دبی', date: '۲۵ مهر ۱۴۰۳', loc: 'مرکز تجارت جهانی دبی' },
                      { title: 'مجمع عمومی سالیانه', date: '۳۰ تیر ۱۴۰۳', loc: 'هتل اسپیناس پالاس' },
                      { title: 'جشنواره نوآوری شریف', date: '۱۵ اردیبهشت ۱۴۰۳', loc: 'دانشگاه شریف' }
                   ].map((evt, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                         <div className="text-sm text-slate-400 mb-1">{evt.date}</div>
                         <h4 className="font-bold text-slate-800 mb-2">{evt.title}</h4>
                         <div className="flex items-center gap-1 text-xs text-slate-500">
                            <MapPin size={12} /> {evt.loc}
                         </div>
                      </div>
                   ))}
                </div>
                <button className="mt-8 w-full py-3 text-center text-blue-600 font-bold text-sm hover:bg-blue-50 rounded-xl transition-colors">
                   مشاهده آرشیو کامل
                </button>
             </div>

          </div>
       </div>
    </div>
  );
};