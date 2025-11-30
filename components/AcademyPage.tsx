
import React from 'react';
import { BookOpen, Award, Users, PlayCircle, Clock, Star } from 'lucide-react';
import { Course } from '../types';

const courses: Course[] = [
    { id: '1', title: 'دوره جامع مدیریت پروژه چابک (Agile)', instructor: 'دکتر علوی', duration: '۴۰ ساعت', level: 'پیشرفته', image: 'https://picsum.photos/600/400?random=301' },
    { id: '2', title: 'مبانی هوش مصنوعی برای مدیران', instructor: 'مهندس پرتوی', duration: '۲۰ ساعت', level: 'مقدماتی', image: 'https://picsum.photos/600/400?random=302' },
    { id: '3', title: 'تحلیل تکنیکال بازارهای مالی', instructor: 'خانم دکتر صادقی', duration: '۶۰ ساعت', level: 'متوسط', image: 'https://picsum.photos/600/400?random=303' },
    { id: '4', title: 'اصول معماری پایدار و سبز', instructor: 'مهندس راد', duration: '۳۵ ساعت', level: 'تخصصی', image: 'https://picsum.photos/600/400?random=304' },
];

export const AcademyPage: React.FC = () => {
    return (
        <div className="pt-24 pb-20 animate-in fade-in duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block p-3 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                        <BookOpen size={32} />
                    </div>
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4">آکادمی زونکو</h1>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto">
                        مرکز تخصصی آموزش و توسعه مهارت‌های فردی و سازمانی. با مدرک معتبر و قابلیت جذب در شرکت‌های هلدینگ.
                    </p>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {[
                        { icon: <Award className="text-yellow-500" />, title: 'مدرک بین‌المللی', desc: 'ارائه گواهینامه پایان دوره قابل ترجمه.' },
                        { icon: <Users className="text-blue-500" />, title: 'اساتید خبره', desc: 'تدریس توسط مدیران ارشد صنعت و دانشگاه.' },
                        { icon: <PlayCircle className="text-green-500" />, title: 'آنلاین و حضوری', desc: 'دسترسی به محتوا از سراسر جهان.' }
                    ].map((feat, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center">
                            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                {feat.icon}
                            </div>
                            <h3 className="font-bold text-lg mb-2">{feat.title}</h3>
                            <p className="text-slate-500 text-sm">{feat.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Courses Grid */}
                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                    <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
                    دوره‌های آموزشی فعال
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((course) => (
                        <div key={course.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer">
                            <div className="relative h-48">
                                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-lg text-xs font-bold text-indigo-700">
                                    {course.level}
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-slate-800 mb-3 h-14 line-clamp-2 leading-snug">{course.title}</h3>
                                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                                    <span className="flex items-center gap-1"><Users size={14} /> {course.instructor}</span>
                                    <span className="flex items-center gap-1"><Clock size={14} /> {course.duration}</span>
                                </div>
                                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                                    <div className="flex text-yellow-400">
                                        <Star size={14} fill="currentColor" />
                                        <Star size={14} fill="currentColor" />
                                        <Star size={14} fill="currentColor" />
                                        <Star size={14} fill="currentColor" />
                                        <Star size={14} />
                                    </div>
                                    <button className="text-indigo-600 font-bold text-sm">ثبت نام</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-slate-900 rounded-3xl p-10 text-white text-center">
                    <h2 className="text-2xl font-bold mb-4">به آموزش سازمانی نیاز دارید؟</h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        ما بسته‌های آموزشی اختصاصی برای ارتقای مهارت کارکنان سازمان‌ها طراحی می‌کنیم.
                    </p>
                    <button className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                        درخواست مشاوره آموزشی
                    </button>
                </div>
            </div>
        </div>
    );
};
