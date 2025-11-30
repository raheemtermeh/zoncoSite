import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-600 rounded-br-lg rounded-tl-lg"></div>
                ZONCO
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              هلدینگ زونکو با نگاهی به آینده و تکیه بر دانش روز، در تلاش است تا کیفیت زندگی را از طریق نوآوری در صنایع مختلف ارتقا دهد.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">دسترسی سریع</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">درباره ما</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">پروژه‌ها</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">اخبار و مقالات</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">فرصت‌های شغلی</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">تماس با ما</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-500" />
                تهران، خیابان ولیعصر، برج زونکو
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-blue-500" />
                ۰۲۱-۸۸۸۸۰۰۰۰
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-blue-500" />
                info@zonco-holding.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">شبکه‌های اجتماعی</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-pink-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-sky-500 transition-colors"><Twitter size={20} /></a>
            </div>
            <div className="mt-6">
                <p className="text-xs text-slate-500">© ۱۴۰۳ تمامی حقوق محفوظ است.</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};