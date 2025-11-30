import React from 'react';
import { Project } from '../types';
import { Layout, Truck, Briefcase, Cpu } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'زونکو تک',
    description: 'توسعه راهکارهای هوش مصنوعی و نرم‌افزارهای سازمانی مقیاس‌پذیر.',
    category: 'فناوری',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    stats: '۱۵ پروژه فعال'
  },
  {
    id: '2',
    title: 'زونکو سازه',
    description: 'طراحی و اجرای پروژه‌های عمرانی مدرن با رویکرد معماری سبز.',
    category: 'عمران',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    stats: '۱۲۰,۰۰۰ متر زیربنا'
  },
  {
    id: '3',
    title: 'زونکو لجستیک',
    description: 'شبکه حمل و نقل هوشمند بین‌المللی با پوشش سراسری.',
    category: 'حمل و نقل',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    stats: 'پوشش ۳۰ کشور'
  },
  {
    id: '4',
    title: 'زونکو اینوست',
    description: 'سرمایه‌گذاری خطرپذیر بر روی استارتاپ‌های فین‌تک و بلاکچین.',
    category: 'سرمایه‌گذاری',
    imageUrl: 'https://picsum.photos/600/400?random=4',
    stats: '۴۰٪ بازدهی سالانه'
  }
];

const getIcon = (title: string) => {
    if (title.includes('تک')) return <Cpu className="text-blue-500" />;
    if (title.includes('سازه')) return <Layout className="text-amber-500" />;
    if (title.includes('لجستیک')) return <Truck className="text-green-500" />;
    return <Briefcase className="text-purple-500" />;
};

export const Projects: React.FC = () => {
  return (
    <div className="bg-white py-24" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">زیرمجموعه‌ها</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            پروژه‌های ما در یک نگاه
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            تنوع در خدمات، تخصص در اجرا. هلدینگ زونکو در صنایع مختلف ردپای نوآوری بر جای گذاشته است.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <div key={project.id} className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden hover:-translate-y-2">
              <div className="aspect-w-16 aspect-h-9 bg-slate-200 h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-50 px-2 py-1 rounded-md">
                        {project.category}
                    </span>
                    <div className="p-2 bg-slate-50 rounded-full">
                        {getIcon(project.title)}
                    </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 min-h-[60px]">
                  {project.description}
                </p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-800">{project.stats}</span>
                    <button className="text-blue-600 text-sm font-medium hover:underline">جزئیات بیشتر &larr;</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};