
import React from 'react';
import { Scale, Heart, Users, Lock, Eye } from 'lucide-react';

export const EthicsPage: React.FC = () => {
    return (
        <div className="pt-24 pb-20 animate-in fade-in duration-500">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-justify leading-loose">
                
                <div className="text-center mb-16">
                    <div className="inline-block p-3 rounded-full bg-slate-100 text-slate-600 mb-4">
                        <Scale size={32} />
                    </div>
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4">منشور اخلاقی و رفتار سازمانی</h1>
                    <p className="text-xl text-slate-500">
                        اصولی که هویت ما را تعریف می‌کنند و راهنمای ما در تصمیم‌گیری‌ها هستند.
                    </p>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <Heart className="text-red-500" />
                        ۱. احترام به کرامت انسانی
                    </h2>
                    <p className="text-slate-600 mb-8">
                        ما در زونکو متعهدیم که با تمامی ذی‌نفعان، اعم از کارکنان، مشتریان، شرکا و رقبا، با نهایت احترام، انصاف و صداقت رفتار کنیم. هرگونه تبعیض بر اساس نژاد، مذهب، جنسیت یا قومیت در خانواده زونکو جایی ندارد. محیط کار ما باید فضای امنی برای رشد و شکوفایی همه باشد.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <Lock className="text-blue-500" />
                        ۲. حفظ محرمانگی و امانت‌داری
                    </h2>
                    <p className="text-slate-600 mb-8">
                        اطلاعات مشتریان و اسرار تجاری شرکت، امانتی است در دستان ما. ما از پیشرفته‌ترین استانداردها برای حفاظت از داده‌ها استفاده می‌کنیم و هرگز منافع کوتاه‌مدت را به اعتماد بلندمدت ترجیح نمی‌دهیم.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <Eye className="text-green-500" />
                        ۳. شفافیت مالی
                    </h2>
                    <p className="text-slate-600 mb-8">
                        ما به شفافیت کامل در گزارش‌دهی مالی و عملیاتی معتقدیم. تمامی فعالیت‌های اقتصادی زونکو مطابق با قوانین ملی و استانداردهای بین‌المللی حسابداری انجام می‌شود و هیچ نقطه‌ی تاریکی در تعاملات مالی ما وجود ندارد.
                    </p>

                     <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <Users className="text-purple-500" />
                        ۴. تضاد منافع
                    </h2>
                    <p className="text-slate-600 mb-8">
                        کارکنان زونکو موظفند از هرگونه موقعیتی که در آن منافع شخصی با منافع شرکت در تضاد باشد، پرهیز کنند. تصمیم‌گیری‌های ما تنها بر اساس شایستگی و صلاح شرکت اتخاذ می‌شود، نه روابط شخصی.
                    </p>
                </div>

                <div className="bg-slate-50 p-8 rounded-2xl border-r-4 border-blue-600">
                    <h3 className="font-bold text-lg mb-2">گزارش تخلفات (سوت‌زنی)</h3>
                    <p className="text-slate-600 text-sm mb-4">
                        اگر شاهد رفتاری مغایر با این منشور بودید، می‌توانید به صورت کاملاً ناشناس از طریق سامانه نظارت گزارش دهید.
                    </p>
                    <button className="bg-white border border-slate-300 px-4 py-2 rounded-lg text-sm font-bold hover:text-blue-600 transition-colors">
                        ورود به سامانه گزارش‌دهی
                    </button>
                </div>

            </div>
        </div>
    );
};
