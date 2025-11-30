import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'چگونه می‌توانم سهام شرکت زونکو را خریداری کنم؟',
      a: 'سهام شرکت‌های تابعه زونکو (نماد "زونکو") در بازار بورس اوراق بهادار تهران قابل معامله است. برای اطلاعات بیشتر به صفحه امور سهامداران مراجعه کنید یا با کارگزاری خود تماس بگیرید.'
    },
    {
      q: 'آیا امکان همکاری با استارتاپ‌ها وجود دارد؟',
      a: 'بله، بازوی سرمایه‌گذاری ما "زونکو اینوست" همواره پذیرای طرح‌های نوآورانه است. می‌توانید از طریق بخش نوآوری یا تماس با ما، پروپوزال خود را ارسال نمایید.'
    },
    {
      q: 'دفاتر زونکو در کدام شهرها و کشورها واقع شده‌اند؟',
      a: 'دفتر مرکزی ما در تهران واقع شده است. همچنین دارای دفاتر فعال در کیش، دبی، استانبول و تورنتو هستیم.'
    },
    {
      q: 'فرآیند استخدام در هلدینگ چقدر زمان می‌برد؟',
      a: 'پس از ارسال رزومه، بررسی اولیه حدود ۳ تا ۵ روز کاری زمان می‌برد. در صورت تایید، برای مصاحبه فنی و عمومی با شما تماس گرفته خواهد شد. کل فرآیند معمولاً ۲ تا ۳ هفته به طول می‌انجامد.'
    },
    {
        q: 'چگونه می‌توانم از اصالت محصولات زونکو تک مطمئن شوم؟',
        a: 'تمامی محصولات نرم‌افزاری و سخت‌افزاری ما دارای گارانتی رسمی و هولوگرام اختصاصی هستند. همچنین می‌توانید سریال محصول را در وب‌سایت بخش پشتیبانی استعلام کنید.'
    }
  ];

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500">
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
             <div className="inline-block p-3 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                <HelpCircle size={32} />
             </div>
             <h1 className="text-4xl font-extrabold text-slate-900 mb-4">سوالات متداول</h1>
             <p className="text-xl text-slate-500">
                پاسخ به پرسش‌های پرتکرار شما
             </p>
          </div>

          <div className="space-y-4">
             {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                   <button 
                      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-6 text-right focus:outline-none"
                   >
                      <span className={`font-bold text-lg ${openIndex === idx ? 'text-blue-600' : 'text-slate-800'}`}>
                         {faq.q}
                      </span>
                      <span className={`p-2 rounded-full transition-colors ${openIndex === idx ? 'bg-blue-100 text-blue-600' : 'bg-slate-50 text-slate-400'}`}>
                         {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                      </span>
                   </button>
                   <div 
                      className={`transition-all duration-300 ease-in-out ${
                         openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                   >
                      <p className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 mt-2">
                         {faq.a}
                      </p>
                   </div>
                </div>
             ))}
          </div>
          
          <div className="mt-12 text-center bg-slate-50 p-8 rounded-3xl border border-slate-200">
             <p className="text-slate-600 mb-4 font-medium">پاسخ سوال خود را پیدا نکردید؟</p>
             <button className="bg-white border border-slate-300 text-slate-700 px-6 py-2 rounded-xl hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all font-bold shadow-sm">
                ارسال تیکت پشتیبانی
             </button>
          </div>

       </div>
    </div>
  );
};