import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const images = [
      { src: 'https://picsum.photos/600/400?random=101', title: 'دفتر مرکزی تهران', size: 'col-span-1' },
      { src: 'https://picsum.photos/600/800?random=102', title: 'برج دوقلوی کیش', size: 'col-span-1 row-span-2' },
      { src: 'https://picsum.photos/600/400?random=103', title: 'تیم فنی زونکو تک', size: 'col-span-1' },
      { src: 'https://picsum.photos/600/400?random=104', title: 'بازدید مدیرعامل', size: 'col-span-1' },
      { src: 'https://picsum.photos/600/400?random=105', title: 'انبار لجستیک', size: 'col-span-1' },
      { src: 'https://picsum.photos/600/800?random=106', title: 'نمایشگاه دبی', size: 'col-span-1 row-span-2' },
      { src: 'https://picsum.photos/600/400?random=107', title: 'جلسه هیئت مدیره', size: 'col-span-1' },
  ];

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
             <div className="inline-block p-3 rounded-full bg-pink-100 text-pink-600 mb-4">
                <ImageIcon size={32} />
             </div>
             <h1 className="text-4xl font-extrabold text-slate-900 mb-4">گالری تصاویر</h1>
             <p className="text-xl text-slate-500">
                روایتی تصویری از فعالیت‌ها و دستاوردهای خانواده بزرگ زونکو
             </p>
          </div>
        
          <div className="grid md:grid-cols-3 gap-6 auto-rows-[200px]">
             {images.map((img, idx) => (
                <div key={idx} className={`relative group rounded-3xl overflow-hidden cursor-pointer ${img.size}`}>
                   <img src={img.src} alt={img.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                         {img.title}
                      </span>
                   </div>
                </div>
             ))}
          </div>

       </div>
    </div>
  );
};