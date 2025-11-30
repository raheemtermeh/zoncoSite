import React from 'react';
import { Briefcase, MapPin, Clock, Heart, Users, Zap } from 'lucide-react';
import { JobPosition } from '../types';

const jobs: JobPosition[] = [
  { id: '1', title: 'توسعه‌دهنده ارشد فرانت‌اند', department: 'زونکو تک', location: 'تهران', type: 'تمام وقت' },
  { id: '2', title: 'مدیر پروژه عمرانی', department: 'زونکو سازه', location: 'کیش', type: 'تمام وقت' },
  { id: '3', title: 'کارشناس بازرگانی خارجی', department: 'زونکو لجستیک', location: 'استانبول', type: 'تمام وقت' },
  { id: '4', title: 'تحلیلگر بازار سرمایه', department: 'زونکو اینوست', location: 'تهران', type: 'پاره وقت' },
];

export const CareersPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">به تیم زونکو بپیوندید</h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">ما به دنبال افراد خلاق و بلندپرواز هستیم. جایی که رویاهای شما فرصت شکوفایی پیدا می‌کنند.</p>
         </div>

         {/* Culture Grid */}
         <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
               { icon: <Heart className="text-red-500" />, title: 'تعادل کار و زندگی', desc: 'اهمیت به سلامت روان و آسایش کارکنان اولویت ماست.' },
               { icon: <Zap className="text-yellow-500" />, title: 'مسیر رشد شفاف', desc: 'برنامه‌های آموزشی و ارتقای شغلی منظم.' },
               { icon: <Users className="text-blue-500" />, title: 'محیط پویا', desc: 'همکاری با برترین متخصصان صنعت در محیطی دوستانه.' }
            ].map((item, idx) => (
               <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                     {item.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
               </div>
            ))}
         </div>

         {/* Job Listings */}
         <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
            <div className="p-8 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
               <h2 className="text-2xl font-bold text-slate-800">فرصت‌های شغلی باز</h2>
               <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">{jobs.length} موقعیت</span>
            </div>
            
            <div className="divide-y divide-slate-100">
               {jobs.map((job) => (
                  <div key={job.id} className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-slate-50 transition-colors group">
                     <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                           <span className="flex items-center gap-1"><Briefcase size={16} /> {job.department}</span>
                           <span className="flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
                           <span className="flex items-center gap-1"><Clock size={16} /> {job.type}</span>
                        </div>
                     </div>
                     <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all">
                        ارسال رزومه
                     </button>
                  </div>
               ))}
            </div>
         </div>
         
         <div className="mt-12 bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">تخصص شما در لیست نیست؟</h3>
            <p className="text-slate-400 mb-8">رزومه خود را برای ما ارسال کنید تا در بانک اطلاعاتی ما ثبت شود.</p>
            <button className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
               ارسال رزومه عمومی
            </button>
         </div>

      </div>
    </div>
  );
};
