import React from 'react';
import { ArrowLeft, Cpu, Truck, Layout, Briefcase } from 'lucide-react';

const subsidiaries = [
  {
    id: 'tech',
    title: 'زونکو تک',
    icon: <Cpu className="w-8 h-8" />,
    color: 'bg-blue-600',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    image: 'https://picsum.photos/800/600?random=20',
    desc: 'بازوی فناوری اطلاعات هلدینگ، متمرکز بر هوش مصنوعی، بلاکچین و توسعه پلتفرم‌های ابری.',
    features: ['توسعه نرم‌افزار', 'هوش مصنوعی', 'امنیت سایبری']
  },
  {
    id: 'build',
    title: 'زونکو سازه',
    icon: <Layout className="w-8 h-8" />,
    color: 'bg-amber-500',
    lightColor: 'bg-amber-50',
    textColor: 'text-amber-500',
    image: 'https://picsum.photos/800/600?random=21',
    desc: 'پیشرو در صنعت ساختمان با رویکرد معماری سبز و استفاده از مصالح نوین و پایدار.',
    features: ['انبوه‌سازی', 'معماری داخلی', 'مدیریت پیمان']
  },
  {
    id: 'logistics',
    title: 'زونکو لجستیک',
    icon: <Truck className="w-8 h-8" />,
    color: 'bg-green-600',
    lightColor: 'bg-green-50',
    textColor: 'text-green-600',
    image: 'https://picsum.photos/800/600?random=22',
    desc: 'شبکه گسترده حمل و نقل دریایی، هوایی و زمینی با قابلیت رهگیری لحظه‌ای مرسولات.',
    features: ['حمل بین‌المللی', 'انبارداری هوشمند', 'ترخیص کالا']
  },
  {
    id: 'invest',
    title: 'زونکو اینوست',
    icon: <Briefcase className="w-8 h-8" />,
    color: 'bg-purple-600',
    lightColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    image: 'https://picsum.photos/800/600?random=23',
    desc: 'مدیریت دارایی و سرمایه‌گذاری خطرپذیر بر روی استارتاپ‌های مستعد رشد در منطقه.',
    features: ['تامین مالی', 'مشاوره اقتصادی', 'پورتفولیو گردانی']
  }
];

export const SubsidiariesPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h1 className="text-4xl font-extrabold text-slate-900 mb-4">شرکت‌های زیرمجموعه</h1>
           <p className="text-xl text-slate-500">خانواده بزرگ زونکو در صنایع مختلف</p>
        </div>

        <div className="space-y-20">
          {subsidiaries.map((sub, idx) => (
            <div key={sub.id} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                 <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
                    <img src={sub.image} alt={sub.title} className="w-full h-80 lg:h-96 object-cover transform transition-transform duration-700 group-hover:scale-105" />
                    <div className={`absolute inset-0 opacity-20 group-hover:opacity-10 transition-opacity ${sub.color}`}></div>
                 </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                 <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${sub.lightColor} ${sub.textColor}`}>
                    {sub.icon}
                 </div>
                 <h2 className="text-3xl font-bold text-slate-900 mb-4">{sub.title}</h2>
                 <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    {sub.desc}
                 </p>
                 <div className="flex flex-wrap gap-3 mb-8">
                    {sub.features.map((feat, i) => (
                       <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium border border-slate-200">
                          {feat}
                       </span>
                    ))}
                 </div>
                 <button className={`inline-flex items-center text-sm font-bold ${sub.textColor} hover:underline`}>
                    مشاهده وب‌سایت اختصاصی
                    <ArrowLeft size={16} className="mr-2" />
                 </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
