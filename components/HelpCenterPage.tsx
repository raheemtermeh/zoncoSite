
import React from 'react';
import { Search, FileText, CreditCard, Laptop, Shield, MessageCircle } from 'lucide-react';

export const HelpCenterPage: React.FC = () => {
    return (
        <div className="pt-24 pb-20 animate-in fade-in duration-500">
            
            {/* Hero Search */}
            <div className="bg-blue-600 py-16 text-center px-4">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6">چطور می‌توانیم کمکتان کنیم؟</h1>
                <div className="max-w-2xl mx-auto relative">
                    <input type="text" placeholder="جستجو در راهنما (مثلاً: نحوه پیگیری سفارش، شرایط استخدام...)" className="w-full py-4 pr-12 pl-4 rounded-2xl shadow-xl focus:outline-none text-slate-800" />
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                
                {/* Categories */}
                <div className="grid md:grid-cols-4 gap-6 mb-16">
                    {[
                        { icon: <CreditCard />, title: 'امور مالی و سهام', count: '۱۲ مقاله' },
                        { icon: <Laptop />, title: 'خدمات فنی و نرم‌افزار', count: '۲۵ مقاله' },
                        { icon: <FileText />, title: 'قوانین و مقررات', count: '۸ مقاله' },
                        { icon: <Shield />, title: 'حریم خصوصی', count: '۵ مقاله' },
                    ].map((cat, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center hover:-translate-y-1 transition-transform cursor-pointer">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                {cat.icon}
                            </div>
                            <h3 className="font-bold text-slate-800 mb-1">{cat.title}</h3>
                            <p className="text-xs text-slate-400">{cat.count}</p>
                        </div>
                    ))}
                </div>

                {/* Popular Articles */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">مقالات پربازدید</h2>
                        <ul className="space-y-4">
                            {[
                                'نحوه دریافت کد بورسی برای خرید سهام زونکو',
                                'شرایط گارانتی محصولات سخت‌افزاری زونکو تک',
                                'راهنمای ثبت نام در پورتال پیمانکاران',
                                'فرآیند بازرسی و کنترل کیفیت پروژه‌های عمرانی',
                                'نحوه محاسبه سود سهام سالیانه'
                            ].map((article, i) => (
                                <li key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors group">
                                    <FileText size={18} className="text-slate-400 group-hover:text-blue-500" />
                                    <span className="text-slate-700 font-medium group-hover:text-blue-600">{article}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">هنوز مشکل دارید؟</h2>
                        <p className="text-slate-600 mb-8">
                            تیم پشتیبانی ما ۲۴/۷ آماده پاسخگویی به شماست. معمولاً در کمتر از ۳۰ دقیقه پاسخ می‌دهیم.
                        </p>
                        <div className="flex gap-4">
                            <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                                <MessageCircle size={20} />
                                چت آنلاین
                            </button>
                            <button className="flex-1 bg-white border border-slate-300 text-slate-700 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors">
                                ثبت تیکت
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
