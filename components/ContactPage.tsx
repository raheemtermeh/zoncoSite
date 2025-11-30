import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
             <h1 className="text-4xl font-extrabold text-slate-900 mb-4">تماس با ما</h1>
             <p className="text-xl text-slate-500">ما همیشه آماده شنیدن صدای شما هستیم.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
             
             {/* Contact Info */}
             <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                   <h3 className="text-xl font-bold mb-6">دفتر مرکزی</h3>
                   <div className="space-y-4">
                      <div className="flex items-start gap-4">
                         <div className="p-2 bg-blue-50 text-blue-600 rounded-lg mt-1"><MapPin size={20} /></div>
                         <div>
                            <p className="font-bold text-slate-800">آدرس</p>
                            <p className="text-slate-600">تهران، خیابان ولیعصر، بالاتر از پارک ساعی، برج زونکو، طبقه ۱۵</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-4">
                         <div className="p-2 bg-blue-50 text-blue-600 rounded-lg mt-1"><Phone size={20} /></div>
                         <div>
                            <p className="font-bold text-slate-800">تلفن</p>
                            <p className="text-slate-600 dir-ltr text-right">۰۲۱ - ۸۸۸۸ ۰۰۰۰</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-4">
                         <div className="p-2 bg-blue-50 text-blue-600 rounded-lg mt-1"><Mail size={20} /></div>
                         <div>
                            <p className="font-bold text-slate-800">ایمیل</p>
                            <p className="text-slate-600">info@zonco-holding.com</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-4">
                         <div className="p-2 bg-blue-50 text-blue-600 rounded-lg mt-1"><Clock size={20} /></div>
                         <div>
                            <p className="font-bold text-slate-800">ساعات کاری</p>
                            <p className="text-slate-600">شنبه تا چهارشنبه: ۸:۰۰ الی ۱۷:۰۰</p>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Map Placeholder */}
                <div className="h-64 bg-slate-200 rounded-3xl overflow-hidden relative">
                   <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                      (نقشه گوگل مپ)
                   </div>
                </div>
             </div>

             {/* Form */}
             <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <h3 className="text-xl font-bold mb-6">ارسال پیام</h3>
                <form className="space-y-4">
                   <div className="grid md:grid-cols-2 gap-4">
                      <div>
                         <label className="block text-sm font-medium text-slate-700 mb-1">نام و نام خانوادگی</label>
                         <input type="text" className="w-full p-3 bg-slate-50 rounded-xl border border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                      </div>
                      <div>
                         <label className="block text-sm font-medium text-slate-700 mb-1">موضوع</label>
                         <select className="w-full p-3 bg-slate-50 rounded-xl border border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                            <option>همکاری</option>
                            <option>فروش</option>
                            <option>پشتیبانی</option>
                            <option>سایر</option>
                         </select>
                      </div>
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">ایمیل / شماره تماس</label>
                      <input type="text" className="w-full p-3 bg-slate-50 rounded-xl border border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">متن پیام</label>
                      <textarea rows={6} className="w-full p-3 bg-slate-50 rounded-xl border border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"></textarea>
                   </div>
                   <button type="button" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                      ارسال پیام
                   </button>
                </form>
             </div>

          </div>
       </div>
    </div>
  );
};
