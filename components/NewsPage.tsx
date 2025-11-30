import React from 'react';
import { Calendar, Tag } from 'lucide-react';
import { NewsItem } from '../types';

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'حضور هلدینگ زونکو در نمایشگاه جیتکس ۲۰۲۴',
    excerpt: 'زونکو تک با رونمایی از سه محصول جدید مبتنی بر هوش مصنوعی، توجه سرمایه‌گذاران بین‌المللی را جلب کرد.',
    date: '۲۵ مهر ۱۴۰۳',
    imageUrl: 'https://picsum.photos/600/400?random=30',
    category: 'رویداد'
  },
  {
    id: '2',
    title: 'آغاز عملیات اجرایی برج دوقلوی زونکو در کیش',
    excerpt: 'این پروژه با زیربنای ۵۰ هزار متر مربع و با رعایت استانداردهای سبز جهانی احداث خواهد شد.',
    date: '۱۰ آبان ۱۴۰۳',
    imageUrl: 'https://picsum.photos/600/400?random=31',
    category: 'عمران'
  },
  {
    id: '3',
    title: 'گزارش عملکرد شش ماهه اول سال ۱۴۰۳ منتشر شد',
    excerpt: 'رشد ۴۵ درصدی سود خالص و توسعه بازارهای صادراتی از مهم‌ترین دستاوردهای این دوره بوده است.',
    date: '۱۵ آبان ۱۴۰۳',
    imageUrl: 'https://picsum.photos/600/400?random=32',
    category: 'مالی'
  },
  {
    id: '4',
    title: 'همکاری استراتژیک زونکو لجستیک با شرکای چینی',
    excerpt: 'امضای تفاهم‌نامه همکاری برای ایجاد کریدور جدید حمل و نقل دریایی.',
    date: '۲۰ آبان ۱۴۰۳',
    imageUrl: 'https://picsum.photos/600/400?random=33',
    category: 'بین‌الملل'
  },
  {
    id: '5',
    title: 'توسعه پلتفرم هوش مصنوعی بومی',
    excerpt: 'واحد تحقیق و توسعه زونکو موفق به طراحی مدل زبانی بزرگ برای زبان فارسی شد.',
    date: '۰۱ آذر ۱۴۰۳',
    imageUrl: 'https://picsum.photos/600/400?random=34',
    category: 'فناوری'
  },
  {
    id: '6',
    title: 'جایزه ملی مسئولیت اجتماعی به زونکو رسید',
    excerpt: 'تقدیر از فعالیت‌های خیریه و ساخت مدارس در مناطق محروم توسط هلدینگ زونکو.',
    date: '۰۵ آذر ۱۴۰۳',
    imageUrl: 'https://picsum.photos/600/400?random=35',
    category: 'اجتماعی'
  }
];

export const NewsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
           <h1 className="text-4xl font-extrabold text-slate-900 mb-4">اخبار و رسانه</h1>
           <p className="text-xl text-slate-500">تازه‌ترین رویدادها و اطلاعیه‌های زونکو</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
             <article key={item.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="relative h-48 overflow-hidden">
                   <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 flex items-center gap-1">
                      <Tag size={12} />
                      {item.category}
                   </div>
                </div>
                <div className="p-6">
                   <div className="flex items-center gap-2 text-slate-400 text-xs mb-3">
                      <Calendar size={14} />
                      {item.date}
                   </div>
                   <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                      {item.title}
                   </h3>
                   <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                      {item.excerpt}
                   </p>
                   <button className="text-blue-600 text-sm font-medium hover:underline">
                      ادامه مطلب
                   </button>
                </div>
             </article>
          ))}
        </div>

        <div className="mt-12 text-center">
            <button className="px-8 py-3 border border-slate-300 rounded-xl text-slate-600 font-medium hover:bg-slate-100 transition-colors">
                مشاهده آرشیو اخبار
            </button>
        </div>

      </div>
    </div>
  );
};
