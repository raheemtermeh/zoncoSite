
import React from 'react';
import { Award, ShieldCheck, CheckCircle } from 'lucide-react';

export const CertificatesPage: React.FC = () => {
    return (
        <div className="pt-24 pb-20 animate-in fade-in duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-16">
                    <div className="inline-block p-3 rounded-full bg-amber-100 text-amber-600 mb-4">
                        <Award size={32} />
                    </div>
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4">گواهینامه‌ها و افتخارات</h1>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto">
                        تعهد ما به کیفیت و تعالی سازمانی توسط معتبرترین نهادهای نظارتی تایید شده است.
                    </p>
                </div>

                {/* ISO Grid */}
                <h2 className="text-2xl font-bold text-slate-900 mb-8 border-r-4 border-amber-500 pr-4">استانداردهای بین‌المللی (ISO)</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {[
                        { title: 'ISO 9001', desc: 'سیستم مدیریت کیفیت', color: 'border-blue-500' },
                        { title: 'ISO 14001', desc: 'مدیریت محیط زیست', color: 'border-green-500' },
                        { title: 'ISO 45001', desc: 'ایمنی و بهداشت شغلی', color: 'border-red-500' },
                        { title: 'ISO 27001', desc: 'امنیت اطلاعات', color: 'border-purple-500' },
                    ].map((iso, idx) => (
                        <div key={idx} className={`bg-white p-8 rounded-2xl shadow-sm border-t-4 ${iso.color} text-center group hover:-translate-y-1 transition-transform`}>
                            <ShieldCheck className="w-12 h-12 mx-auto text-slate-300 mb-4 group-hover:text-slate-600 transition-colors" />
                            <h3 className="text-2xl font-black text-slate-800 mb-2">{iso.title}</h3>
                            <p className="text-slate-500 font-medium">{iso.desc}</p>
                            <p className="text-xs text-slate-400 mt-4">معتبر تا ۱۴۰۵</p>
                        </div>
                    ))}
                </div>

                {/* Awards List */}
                <h2 className="text-2xl font-bold text-slate-900 mb-8 border-r-4 border-amber-500 pr-4">جوایز و تندیس‌ها</h2>
                <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-lg">
                    {[
                        { year: '۱۴۰۲', title: 'صادرکننده نمونه ملی', org: 'وزارت صنعت، معدن و تجارت', desc: 'به پاس رشد ۳۰۰ درصدی صادرات خدمات فنی مهندسی.' },
                        { year: '۱۴۰۱', title: 'تندیس زرین رعایت حقوق مصرف‌کنندگان', org: 'سازمان حمایت', desc: 'برای پنجمین سال متوالی.' },
                        { year: '۱۴۰۰', title: 'کارآفرین برتر در حوزه اقتصاد دیجیتال', org: 'معاونت علمی ریاست جمهوری', desc: 'بخاطر توسعه پلتفرم‌های هوشمند لجستیک.' },
                        { year: '۱۳۹۹', title: 'جایزه ملی مسئولیت اجتماعی (CSR)', org: 'کنگره مسئولیت اجتماعی', desc: 'ساخت مدارس در مناطق کم‌برخوردار.' },
                    ].map((award, idx) => (
                        <div key={idx} className="p-8 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors flex flex-col md:flex-row gap-6 items-start">
                             <div className="bg-amber-100 text-amber-800 font-black text-xl px-4 py-3 rounded-xl min-w-[80px] text-center">
                                 {award.year}
                             </div>
                             <div>
                                 <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                                     {award.title}
                                     <CheckCircle size={18} className="text-green-500" />
                                 </h3>
                                 <p className="text-sm font-bold text-slate-500 mb-2">{award.org}</p>
                                 <p className="text-slate-600 leading-relaxed">{award.desc}</p>
                             </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};
