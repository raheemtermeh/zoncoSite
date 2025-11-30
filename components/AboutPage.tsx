import React from 'react';
import { Target, Eye, Award, Clock } from 'lucide-react';
import { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  { id: '1', name: 'دکتر آرش پارسا', role: 'مدیرعامل و بنیان‌گذار', imageUrl: 'https://picsum.photos/400/400?random=10' },
  { id: '2', name: 'مهندس سارا راد', role: 'رئیس هیئت مدیره', imageUrl: 'https://picsum.photos/400/400?random=11' },
  { id: '3', name: 'علی محمدی', role: 'مدیر ارشد فناوری', imageUrl: 'https://picsum.photos/400/400?random=12' },
  { id: '4', name: 'زهرا کاظمی', role: 'مدیر ارشد مالی', imageUrl: 'https://picsum.photos/400/400?random=13' },
];

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">داستان زونکو</h1>
          <p className="text-xl text-slate-400 max-w-2xl">مسیر رشد ما، از یک استارتاپ کوچک تا یک هلدینگ بین‌المللی.</p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
           <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                 <Target size={28} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-slate-900">ماموریت ما</h2>
              <p className="text-slate-600 leading-relaxed">
                 توسعه زیرساخت‌های نوین و ارائه راهکارهای خلاقانه که زندگی انسان‌ها را ساده‌تر، هوشمندتر و پایدارتر کند. ما متعهد به خلق ارزش برای تمامی ذی‌نفعان خود هستیم.
              </p>
           </div>
           <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 text-indigo-600">
                 <Eye size={28} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-slate-900">چشم‌انداز ما</h2>
              <p className="text-slate-600 leading-relaxed">
                 تبدیل شدن به بزرگترین قطب نوآوری در خاورمیانه تا سال ۱۴۰۵ و حضور موثر در بازارهای جهانی به عنوان پیشگام در فناوری و توسعه پایدار.
              </p>
           </div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
           <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">مسیر پیشرفت</h2>
           <div className="relative border-r-2 border-slate-200 mr-4 md:mr-0 md:mx-auto md:w-2/3 space-y-12">
              {[
                 { year: '۱۳۹۰', title: 'تاسیس زونکو', desc: 'شروع فعالیت با یک تیم ۵ نفره در حوزه نرم‌افزار.' },
                 { year: '۱۳۹۴', title: 'ورود به صنعت ساختمان', desc: 'تاسیس زونکو سازه و شروع پروژه‌های کلان.' },
                 { year: '۱۳۹۷', title: 'گسترش بین‌المللی', desc: 'افتتاح دفاتر دبی و استانبول.' },
                 { year: '۱۴۰۲', title: 'تحول دیجیتال', desc: 'راه‌اندازی بازوی سرمایه‌گذاری خطرپذیر زونکو اینوست.' }
              ].map((item, idx) => (
                 <div key={idx} className="relative pr-8 md:pr-12">
                    <div className="absolute top-0 -right-[9px] w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm"></div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                       <span className="text-blue-600 font-bold text-lg block mb-1">{item.year}</span>
                       <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                       <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* Team */}
        <div>
           <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">تیم رهبری</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                 <div key={member.id} className="text-center group">
                    <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-100 shadow-xl group-hover:border-blue-100 transition-colors">
                       <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                    <p className="text-sm text-blue-600 font-medium">{member.role}</p>
                 </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};
