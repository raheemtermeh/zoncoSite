
import React from 'react';
import { Handshake, Building2, Globe } from 'lucide-react';

export const PartnersPage: React.FC = () => {
    return (
        <div className="pt-24 pb-20 animate-in fade-in duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-16">
                    <div className="inline-block p-3 rounded-full bg-cyan-100 text-cyan-600 mb-4">
                        <Handshake size={32} />
                    </div>
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4">شرکای تجاری</h1>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto">
                        ما به قدرت هم‌افزایی ایمان داریم. شبکه شرکای زونکو، بازوی توانمند ما در اجرای پروژه‌های کلان است.
                    </p>
                </div>

                {/* Partners Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
                     {[...Array(12)].map((_, i) => (
                         <div key={i} className="bg-white h-32 rounded-xl flex items-center justify-center shadow-sm border border-slate-100 grayscale hover:grayscale-0 transition-all hover:shadow-lg p-4">
                             <div className="text-center">
                                 <Building2 className="mx-auto mb-2 text-slate-300" />
                                 <span className="font-bold text-slate-400 text-sm">Partner Logo {i+1}</span>
                             </div>
                         </div>
                     ))}
                </div>

                {/* Collaboration Models */}
                <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">مدل‌های همکاری</h2>
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <h3 className="text-xl font-bold mb-4">تامین‌کنندگان</h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-6">
                            ما همواره به دنبال تامین‌کنندگان متعهد برای مواد اولیه، تجهیزات و خدمات فنی هستیم. اولویت ما کیفیت و تحویل به موقع است.
                        </p>
                        <button className="text-blue-400 text-sm font-bold hover:text-white transition-colors">ثبت نام در وندور لیست &larr;</button>
                    </div>

                    <div className="bg-blue-600 text-white p-8 rounded-3xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <h3 className="text-xl font-bold mb-4">جوینت ونچر (JV)</h3>
                        <p className="text-blue-100 text-sm leading-relaxed mb-6">
                            برای پروژه‌های بزرگ مقیاس بین‌المللی، آماده تشکیل کنسرسیوم و مشارکت مدنی با شرکت‌های توانمند داخلی و خارجی هستیم.
                        </p>
                        <button className="text-white text-sm font-bold hover:underline">ارسال پروپوزال همکاری &larr;</button>
                    </div>

                    <div className="bg-white border border-slate-200 p-8 rounded-3xl relative overflow-hidden group shadow-lg">
                        <h3 className="text-xl font-bold mb-4 text-slate-900">نمایندگی فروش</h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                            شبکه فروش زونکو در حال گسترش است. اگر توانایی توزیع محصولات یا خدمات ما را در منطقه خود دارید، به ما بپیوندید.
                        </p>
                        <button className="text-blue-600 text-sm font-bold hover:underline">درخواست نمایندگی &larr;</button>
                    </div>
                </div>

                {/* Contact Form for Partners */}
                <div className="max-w-2xl mx-auto bg-slate-50 p-8 rounded-3xl border border-slate-200">
                    <h3 className="text-center font-bold text-xl mb-6">فرم درخواست همکاری تجاری</h3>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="نام شرکت" className="p-3 rounded-xl border border-slate-300 focus:border-blue-500 outline-none" />
                            <input type="text" placeholder="حوزه فعالیت" className="p-3 rounded-xl border border-slate-300 focus:border-blue-500 outline-none" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="نام رابط" className="p-3 rounded-xl border border-slate-300 focus:border-blue-500 outline-none" />
                            <input type="text" placeholder="شماره تماس" className="p-3 rounded-xl border border-slate-300 focus:border-blue-500 outline-none" />
                        </div>
                        <textarea placeholder="شرح مختصر پیشنهادی همکاری..." rows={4} className="w-full p-3 rounded-xl border border-slate-300 focus:border-blue-500 outline-none"></textarea>
                        <button className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition-colors">ثبت درخواست اولیه</button>
                    </form>
                </div>

            </div>
        </div>
    );
};
