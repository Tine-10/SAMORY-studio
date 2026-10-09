import React from 'react';
import { BookOpen, UploadCloud, Smartphone, ArrowRight, Music2, Image as ImageIcon, QrCode } from 'lucide-react';

interface ProcessSectionProps {
  onStartProcess: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartProcess }) => {
  const steps = [
    {
      number: '01',
      title: 'Chọn mẫu sổ & Layout yêu thích',
      desc: 'Tùy chọn phong cách Accordion ziczac mini hoặc Sổ còng bìa vải Linen dệt tay cao cấp. Chọn màu bìa và số lượng ảnh phù hợp với câu chuyện của bạn.',
      icon: BookOpen,
      highlights: ['Khổ mini bỏ túi hoặc A5 cao cấp', 'Chất liệu vải Linen & giấy mỹ thuật ngà', 'Tùy chọn màu bìa & dập kim tên riêng'],
    },
    {
      number: '02',
      title: 'Gửi ảnh & Link đa phương tiện',
      desc: 'Tải ảnh gốc qua Google Drive hoặc tải trực tiếp tại website. Gửi kèm link video Youtube/TikTok, bản thu âm lời chúc hoặc playlist nhạc Spotify.',
      icon: UploadCloud,
      highlights: ['Ảnh in sắc nét, tráng màng chống phai', 'Nhúng video kỷ niệm dung lượng không giới hạn', 'Tích hợp nhạc nền Spotify / Voice note'],
    },
    {
      number: '03',
      title: 'Chạm NFC/QR - Sống lại từng khoảnh khắc',
      desc: 'Nhận hộp quà hoàn thiện tận tay. Chỉ cần áp nhẹ điện thoại vào biểu tượng chạm trên sổ, toàn bộ video, giai điệu và ảnh số sẽ lập tức bừng sáng.',
      icon: Smartphone,
      highlights: ['Chạm 1 chạm tức thì không cần cài app', 'Tương thích cả iPhone & Android', 'Bảo hành chip NFC & dữ liệu trọn đời'],
    },
  ];

  return (
    <section className="py-20 bg-[#F3ECE0]/60 border-y border-[#E7DCCB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#664A38] uppercase">
            Hành Trình Đơn Giản & Ý Nghĩa
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C332A]">
            Quy Trình 3 Bước Để Có Món Quà Độc Bản
          </h2>
          <p className="text-base text-[#615243]">
            Biến những bức ảnh và thước phim nằm quên trong điện thoại thành tác phẩm nghệ thuật vật lý có thể cầm trên tay.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative bg-[#FBF8F3] rounded-xl p-8 border border-[#E2D5C3] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Step numerical indicator & icon */}
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-[#EADFCF]">
                    <span className="font-serif font-bold text-3xl text-[#1C332A]/25 group-hover:text-[#1C332A] transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#F3ECE0] text-[#1C332A] flex items-center justify-center group-hover:bg-[#1C332A] group-hover:text-[#FBF8F3] transition-all">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-6 space-y-3">
                    <h3 className="font-serif text-xl font-bold text-[#1C332A] group-hover:text-[#234236] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#5C4F42] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Highlights list */}
                <div className="mt-6 pt-5 border-t border-[#EFE5D6] space-y-2 text-xs text-[#705F4F]">
                  {step.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Connecting arrow indicator for desktop (except last) */}
                {idx < 2 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#FBF8F3] border border-[#D5C4AE] flex items-center justify-center text-[#705F4F] shadow-xs">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}

        </div>

        {/* Process bottom prompt */}
        <div className="mt-12 text-center">
          <button
            onClick={onStartProcess}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1C332A] hover:text-[#14261F] py-2 px-4 rounded-md hover:bg-[#EAE0D1] transition-all cursor-pointer underline underline-offset-4"
          >
            <span>Bắt đầu tự tay cá nhân hóa cuốn sổ của bạn ngay</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
