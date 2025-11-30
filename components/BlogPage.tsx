
import React from 'react';
import { Calendar, User, Tag, ArrowLeft, Search } from 'lucide-react';
import { BlogPost } from '../types';

const posts: BlogPost[] = [
    {
        id: '1',
        title: 'تاثیر هوش مصنوعی بر آینده صنعت ساختمان',
        excerpt: 'چگونه یادگیری ماشین و طراحی مولد (Generative Design) در حال تغییر چهره معماری شهری هستند؟',
        author: 'مهندس رضایی',
        date: '۱۲ آذر ۱۴۰۳',
        tags: ['تکنولوژی', 'عمران', 'AI'],
        image: 'https://picsum.photos/800/600?random=401',
        content: ''
    },
    {
        id: '2',
        title: 'راهنمای سرمایه‌گذاری در صندوق‌های جسورانه',
        excerpt: 'بررسی ریسک‌ها و پاداش‌های ورود به اکوسیستم استارتاپی برای سرمایه‌گذاران سنتی.',
        author: 'دکتر پارسا',
        date: '۰۵ آذر ۱۴۰۳',
        tags: ['مالی', 'سرمایه‌گذاری'],
        image: 'https://picsum.photos/800/600?random=402',
        content: ''
    },
    {
        id: '3',
        title: 'مدیریت زنجیره تامین سبز: چالش‌ها و راهکارها',
        excerpt: 'کاهش ردپای کربنی در لجستیک بین‌الملل نیازمند تغییرات بنیادین در زیرساخت‌هاست.',
        author: 'تیم لجستیک',
        date: '۲۸ آبان ۱۴۰۳',
        tags: ['لجستیک', 'پایداری'],
        image: 'https://picsum.photos/800/600?random=403',
        content: ''
    },
];

export const BlogPage: React.FC = () => {
    return (
        <div className="pt-24 pb-20 animate-in fade-in duration-500 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header with Search */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 pb-8 border-b border-slate-200">
                    <div>
                        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">وبلاگ تخصصی زونکو</h1>
                        <p className="text-xl text-slate-500">تحلیل‌های عمیق، مقالات فنی و دیدگاه‌های مدیریتی</p>
                    </div>
                    <div className="mt-6 md:mt-0 w-full md:w-auto relative">
                        <input type="text" placeholder="جستجو در مقالات..." className="w-full md:w-80 pr-10 pl-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white" />
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {posts.map((post) => (
                            <article key={post.id} className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group cursor-pointer">
                                <div className="h-64 rounded-2xl overflow-hidden mb-6">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                                    <span className="flex items-center gap-1"><Calendar size={16} /> {post.date}</span>
                                    <span className="flex items-center gap-1"><User size={16} /> {post.author}</span>
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{post.title}</h2>
                                <p className="text-slate-600 leading-relaxed mb-6">{post.excerpt}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2">
                                        {post.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium">#{tag}</span>
                                        ))}
                                    </div>
                                    <button className="flex items-center gap-1 text-blue-600 font-bold hover:gap-2 transition-all">
                                        مطالعه کامل <ArrowLeft size={18} />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="font-bold text-lg mb-4 text-slate-900">دسته‌بندی‌ها</h3>
                            <ul className="space-y-2 text-slate-600">
                                {['تکنولوژی و هوش مصنوعی', 'مدیریت و رهبری', 'اقتصاد و سرمایه‌گذاری', 'معماری و شهرسازی', 'لجستیک و زنجیره تامین'].map((cat, i) => (
                                    <li key={i} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
                                        <span>{cat}</span>
                                        <span className="text-xs bg-slate-100 px-2 py-1 rounded-full">{(i+1)*3}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-blue-600 p-8 rounded-2xl text-white text-center">
                            <h3 className="font-bold text-xl mb-4">نویسنده مهمان شوید</h3>
                            <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                                اگر متخصص هستید و مایلید دانش خود را با جامعه زونکو به اشتراک بگذارید، مقاله خود را ارسال کنید.
                            </p>
                            <button className="w-full py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors">
                                ارسال مقاله
                            </button>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
};
