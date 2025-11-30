import React from 'react';
import { Cpu, Brain, Rocket, Code, Microscope, Database } from 'lucide-react';

export const InnovationPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
             <div className="inline-block p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Rocket size={32} />
             </div>
             <h1 className="text-4xl font-extrabold text-slate-900 mb-4">مرکز نوآوری زونکو</h1>
             <p className="text-xl text-slate-500 max-w-3xl mx-auto">
                جایی که آینده خلق می‌شود. ما در لبه دانش حرکت می‌کنیم تا راهکارهای فردا را امروز بسازیم.
             </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
             <div className="lg:col-span-2 bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden min-h-[400px] flex flex-col justify-center">
                <div className="relative z-10">
                   <h2 className="text-3xl font-bold mb-6">آزمایشگاه هوش مصنوعی</h2>
                   <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
                      تیم تحقیقاتی ما بر روی توسعه مدل‌های زبانی بزرگ (LLM) بومی و سیستم‌های بینایی ماشین برای کاربردهای صنعتی تمرکز دارد. دستیار هوشمند زونکو تنها یکی از خروجی‌های این مرکز است.
                   </p>
                   <div className="flex gap-4">
                      <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                         <Brain size={20} className="text-pink-400" />
                         <span>یادگیری عمیق</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                         <Database size={20} className="text-blue-400" />
                         <span>کلان داده</span>
                      </div>
                   </div>
                </div>
                <div className="absolute right-0 top-0 w-full h-full opacity-30">
                   <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900"></div>
                   <img src="https://picsum.photos/800/600?random=95" alt="AI Lab" className="w-full h-full object-cover" />
                </div>
             </div>

             <div className="bg-blue-600 rounded-3xl p-10 text-white flex flex-col justify-between">
                <div>
                   <Code size={40} className="mb-6 text-blue-200" />
                   <h3 className="text-2xl font-bold mb-4">بلاکچین و فین‌تک</h3>
                   <p className="text-blue-100 leading-relaxed">
                      توسعه پلتفرم‌های تبادل دارایی دیجیتال و قراردادهای هوشمند برای شفافیت در زنجیره تامین.
                   </p>
                </div>
                <button className="mt-8 bg-white/20 hover:bg-white/30 text-white py-3 rounded-xl font-medium transition-colors">
                   پروژه‌های فعال
                </button>
             </div>
          </div>

          {/* Areas of Focus */}
          <div className="mb-16">
             <h2 className="text-2xl font-bold mb-8 text-slate-900">حوزه‌های تمرکز تحقیقاتی</h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                   { title: 'اینترنت اشیا (IoT)', icon: <Cpu />, desc: 'هوشمندسازی ساختمان‌ها و خطوط تولید.' },
                   { title: 'بیوتکنولوژی', icon: <Microscope />, desc: 'تصفیه آب و پسماند با روش‌های نوین.' },
                   { title: 'رایانش ابری', icon: <Database />, desc: 'زیرساخت‌های مقیاس‌پذیر توزیع شده.' },
                   { title: 'رباتیک', icon: <BotIcon />, desc: 'اتوماسیون انبارداری و لجستیک.' },
                ].map((area, idx) => (
                   <div key={idx} className="border border-slate-200 p-6 rounded-2xl hover:border-blue-400 hover:shadow-lg transition-all group">
                      <div className="w-12 h-12 bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                         {area.icon}
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-slate-800">{area.title}</h3>
                      <p className="text-sm text-slate-500">{area.desc}</p>
                   </div>
                ))}
             </div>
          </div>

       </div>
    </div>
  );
};

const BotIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>
);