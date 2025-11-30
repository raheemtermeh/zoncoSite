import React from 'react';
import { Leaf, Droplets, Sun, Heart, Recycle, Users } from 'lucide-react';

export const SustainabilityPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
             <div className="inline-block p-3 rounded-full bg-green-100 text-green-600 mb-4">
                <Leaf size={32} />
             </div>
             <h1 className="text-4xl font-extrabold text-slate-900 mb-4">توسعه پایدار و مسئولیت اجتماعی</h1>
             <p className="text-xl text-slate-500 max-w-3xl mx-auto">
                در زونکو، ما معتقدیم که رشد اقتصادی نباید به قیمت آسیب به سیاره ما تمام شود. تعهد ما به آینده‌ای سبز، بخشی جدایی‌ناپذیر از هویت ماست.
             </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
             {[
                { icon: <Sun className="text-amber-500" />, title: 'انرژی پاک', value: '۴۰٪', desc: 'تامین انرژی دفاتر از پنل‌های خورشیدی' },
                { icon: <Recycle className="text-green-500" />, title: 'بازیافت', value: '۹۵٪', desc: 'مدیریت پسماند در پروژه‌های عمرانی' },
                { icon: <Droplets className="text-blue-500" />, title: 'صرفه‌جویی آب', value: '۳۰٪', desc: 'کاهش مصرف آب با سیستم‌های هوشمند' }
             ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:-translate-y-1 transition-transform">
                   <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-6">
                      {item.icon}
                   </div>
                   <div className="text-4xl font-black text-slate-800 mb-2">{item.value}</div>
                   <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                   <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
             ))}
          </div>

          {/* Content Sections */}
          <div className="space-y-20">
             <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2">
                   <img src="https://picsum.photos/800/600?random=88" alt="CSR" className="rounded-3xl shadow-xl w-full" />
                </div>
                <div className="w-full md:w-1/2">
                   <h2 className="text-3xl font-bold mb-6 text-slate-900">مدرسه سازی در مناطق محروم</h2>
                   <p className="text-slate-600 leading-relaxed mb-6">
                      بنیاد خیریه زونکو با هدف ارتقای سطح آموزشی کودکان ایران زمین، تاکنون موفق به ساخت و تجهیز ۱۲ مدرسه در استان‌های سیستان و بلوچستان و هرمزگان شده است. ما متعهدیم تا سال ۱۴۰۵، ۲۰ مدرسه دیگر را به بهره‌برداری برسانیم.
                   </p>
                   <button className="text-green-600 font-bold hover:underline flex items-center gap-2">
                      <Heart size={20} />
                      مشاهده گزارش عملکرد بنیاد
                   </button>
                </div>
             </div>

             <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="w-full md:w-1/2">
                   <img src="https://picsum.photos/800/600?random=89" alt="Green Building" className="rounded-3xl shadow-xl w-full" />
                </div>
                <div className="w-full md:w-1/2">
                   <h2 className="text-3xl font-bold mb-6 text-slate-900">ساختمان‌های سبز</h2>
                   <p className="text-slate-600 leading-relaxed mb-6">
                      تمامی پروژه‌های جدید زونکو سازه با استاندارد LEED طراحی می‌شوند. استفاده از مصالح بومی، سیستم‌های تهویه طبیعی و بام‌های سبز، ردپای کربنی پروژه‌های ما را به حداقل رسانده است.
                   </p>
                   <div className="flex gap-4">
                      <span className="bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-medium">استاندارد LEED</span>
                      <span className="bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-medium">مصالح بازیافتی</span>
                   </div>
                </div>
             </div>
          </div>
          
          {/* CTA */}
          <div className="mt-20 bg-green-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">به جنبش سبز ما بپیوندید</h2>
                <p className="max-w-2xl mx-auto mb-8 text-green-100">
                   اگر ایده یا طرحی برای بهبود محیط زیست دارید، زونکو اینوست آماده حمایت از استارتاپ‌های سبز شماست.
                </p>
                <button className="bg-white text-green-700 px-8 py-3 rounded-xl font-bold hover:bg-green-50 transition-colors">
                   ارسال طرح پیشنهادی
                </button>
             </div>
             <Leaf className="absolute top-10 left-10 text-white/10 w-32 h-32 rotate-45" />
             <Leaf className="absolute bottom-10 right-10 text-white/10 w-48 h-48 -rotate-12" />
          </div>

       </div>
    </div>
  );
};