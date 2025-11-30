import React from 'react';
import { TrendingUp, PieChart, FileText, Download } from 'lucide-react';

export const InvestorsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
           <h1 className="text-4xl font-extrabold text-slate-900 mb-4">امور سهامداران</h1>
           <p className="text-xl text-slate-500">شفافیت مالی و رشد پایدار، تعهد ما به شرکای تجاری است.</p>
        </div>

        {/* Key Figures */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
           {[
             { label: 'سود خالص سالانه', value: '+۴۵٪', desc: 'نسبت به سال گذشته', color: 'text-green-500' },
             { label: 'ارزش دارایی‌ها', value: '۱۲ همت', desc: 'هزار میلیارد تومان', color: 'text-blue-500' },
             { label: 'سود هر سهم (EPS)', value: '۸۵۰', desc: 'ریال', color: 'text-indigo-500' },
             { label: 'نسبت P/E', value: '۶.۵', desc: 'میانگین صنعت: ۸.۲', color: 'text-purple-500' },
           ].map((stat, idx) => (
             <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-lg transition-shadow">
                <div className="text-sm text-slate-500 mb-2">{stat.label}</div>
                <div className={`text-4xl font-black mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-slate-400 bg-slate-50 inline-block px-2 py-1 rounded">{stat.desc}</div>
             </div>
           ))}
        </div>

        {/* Charts Section Placeholder */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
           <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="font-bold text-lg flex items-center gap-2"><TrendingUp className="text-blue-600" /> روند درآمدی</h3>
                 <select className="bg-slate-50 border-none text-sm rounded-lg p-2 outline-none">
                    <option>۱۴۰۳</option>
                    <option>۱۴۰۲</option>
                 </select>
              </div>
              <div className="h-64 flex items-end justify-between gap-2 px-4">
                 {[40, 65, 45, 70, 85, 60, 75, 90, 80, 95, 100, 110].map((h, i) => (
                    <div key={i} className="w-full bg-blue-100 rounded-t-lg relative group">
                       <div className="absolute bottom-0 left-0 w-full bg-blue-600 rounded-t-lg transition-all duration-1000" style={{ height: `${h}%` }}></div>
                       <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded transition-opacity">
                          {h * 10}B
                       </div>
                    </div>
                 ))}
              </div>
              <div className="flex justify-between mt-4 text-xs text-slate-400 px-1">
                 <span>فروردین</span>
                 <span>شهریور</span>
                 <span>اسفند</span>
              </div>
           </div>

           <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="font-bold text-lg flex items-center gap-2"><PieChart className="text-purple-600" /> ترکیب درآمدی</h3>
              </div>
              <div className="flex items-center justify-center h-64 relative">
                 <div className="w-48 h-48 rounded-full border-[16px] border-blue-500 border-r-purple-500 border-b-green-500 border-l-amber-500 rotate-45"></div>
                 <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-3xl font-bold text-slate-800">۱۰۰٪</span>
                    <span className="text-xs text-slate-500">تحقق اهداف</span>
                 </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                 <div className="flex items-center gap-2 text-sm"><span className="w-3 h-3 rounded-full bg-blue-500"></span> فناوری (۳۵٪)</div>
                 <div className="flex items-center gap-2 text-sm"><span className="w-3 h-3 rounded-full bg-purple-500"></span> سرمایه‌گذاری (۲۵٪)</div>
                 <div className="flex items-center gap-2 text-sm"><span className="w-3 h-3 rounded-full bg-green-500"></span> لجستیک (۲۰٪)</div>
                 <div className="flex items-center gap-2 text-sm"><span className="w-3 h-3 rounded-full bg-amber-500"></span> سازه (۲۰٪)</div>
              </div>
           </div>
        </div>

        {/* Documents */}
        <div className="bg-slate-50 rounded-3xl p-8">
           <h3 className="font-bold text-lg mb-6">گزارش‌های قابل دانلود</h3>
           <div className="space-y-4">
              {[
                 'صورت‌های مالی حسابرسی شده سال ۱۴۰۲',
                 'گزارش تفسیری مدیریت - پاییز ۱۴۰۳',
                 'آگهی دعوت به مجمع عمومی عادی سالیانه',
                 'گزارش پایداری و مسئولیت اجتماعی'
              ].map((doc, i) => (
                 <div key={i} className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-red-50 text-red-500 rounded-lg"><FileText size={20} /></div>
                       <span className="font-medium text-slate-700 group-hover:text-blue-600 transition-colors">{doc}</span>
                    </div>
                    <button className="text-slate-400 hover:text-blue-600">
                       <Download size={20} />
                    </button>
                 </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};
