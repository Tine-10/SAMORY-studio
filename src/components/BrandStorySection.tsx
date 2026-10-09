import React from 'react';
import { Heart, Sparkles, Feather, ShieldCheck, Star, Quote } from 'lucide-react';

export const BrandStorySection: React.FC = () => {
  const testimonials = [
    {
      name: 'Nguyễn Thùy Linh & Hoàng Nam',
      role: 'Kỷ niệm 3 năm quen nhau · Hà Nội',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      comment: '“Lúc bạn trai mình chạm điện thoại vào bìa sổ và bài hát của hai đứa vang lên kèm video chuyến đi Quy Nhơn, mình đã xúc động phát khóc. Sổ rất thơm mùi giấy mộc và vải dệt tay.”',
      stars: 5,
    },
    {
      name: 'Trần Minh Thư',
      role: 'Quà tốt nghiệp tặng bạn thân · TP.HCM',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
      comment: '“Mình chọn gói All-in-One Custom vì khá bận. Team làm tỉ mỉ ngoài sức tưởng tượng, từng nhánh hoa khô, nét chữ tay và hộp nam châm siêu xịn xò. Giảng viên và bạn bè ai cũng hỏi xin link đặt.”',
      stars: 5,
    },
    {
      name: 'Đặng Tuấn Anh',
      role: 'Quà cầu hôn bí mật · Đà Nẵng',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      comment: '“Công nghệ NFC cực nhạy, không cần tải app gì cả, đưa iPhone vào là nhận ngay video clip cầu hôn 4K mình đã chuẩn bị. Đây thực sự là món quà ý nghĩa nhất cuộc đời mình.”',
      stars: 5,
    },
  ];

  return (
    <section id="ve-chung-toi" className="py-24 bg-[#FBF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Philosophy Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#664A38] uppercase">
              <span>CÂU CHUYỆN THƯƠNG HIỆU</span>
              <span aria-hidden="true" className="text-[#C4B5A5]">·</span>
              <span>TRIẾT LÝ THỦ CÔNG</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C332A] leading-tight">
              Ký Ức Đáng Giá Hơn Những Tệp Ảnh Vô Tri Trong Đám Mây
            </h2>

            <p className="text-base text-[#524436] leading-relaxed">
              Tên gọi <strong>MNEMOS</strong> bắt nguồn từ <em>Mnemosyne</em> — nữ thần ký ức. Trong kỷ nguyên số, chúng ta chụp hàng ngàn bức ảnh mỗi năm nhưng hiếm khi xem lại trọn vẹn một lần.
            </p>

            <p className="text-base text-[#524436] leading-relaxed">
              Chúng tôi tin rằng ký ức cần một <strong>thực thể vật lý</strong>: cảm giác ngón tay chạm vào thớ vải linen mộc, mùi thơm của giấy mỹ thuật, nét mực nhũ viết tay. Và khi kết hợp cùng <strong>công nghệ chạm NFC</strong>, cuốn sổ trở thành chiếc chìa khóa mở ra không gian đa giác quan — nơi nụ cười, giọng nói và giai điệu sống dậy nguyên vẹn.
            </p>

            {/* 3 Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="p-4 rounded-xl bg-[#FAF5EC] border border-[#E5DACB]">
                <Feather className="w-5 h-5 text-[#1C332A] mb-2" />
                <h4 className="font-serif font-bold text-sm text-[#1C332A]">Thủ Công Tận Tâm</h4>
                <p className="text-xs text-[#736353] mt-1">Mỗi cuốn sổ là một tác phẩm duy nhất, không sản xuất hàng loạt công nghiệp.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF5EC] border border-[#E5DACB]">
                <Sparkles className="w-5 h-5 text-[#1C332A] mb-2" />
                <h4 className="font-serif font-bold text-sm text-[#1C332A]">Công Nghệ Vô Hình</h4>
                <p className="text-xs text-[#736353] mt-1">NFC giấu kín tinh tế, không làm mất đi vẻ đẹp cổ điển của chất liệu thô mộc.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF5EC] border border-[#E5DACB]">
                <Heart className="w-5 h-5 text-[#1C332A] mb-2" />
                <h4 className="font-serif font-bold text-sm text-[#1C332A]">Cảm Xúc Chữa Lành</h4>
                <p className="text-xs text-[#736353] mt-1">Món quà xoa dịu tâm hồn và gắn kết những mối quan hệ trân quý nhất.</p>
              </div>
            </div>
          </div>

          {/* Right Image/Mood Frame */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl p-6 bg-[#F3ECE0] border border-[#DACBB8] shadow-lg">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#DDD0BF] relative">
                <img
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80"
                  alt="Nghệ nhân Mnemos làm việc thủ công"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="font-mono text-xs text-[#D4AF37]">SAIGON WORKSHOP · 2026</span>
                  <p className="font-serif text-xl font-bold mt-1">
                    “Từng trang giấy là một nhịp đập của ký ức.”
                  </p>
                </div>
              </div>

              {/* Founder quote signature */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#6B5A4B]">
                <span>Thiết kế & hoàn thiện thủ công tại TP. Hồ Chí Minh</span>
                <span className="font-serif font-semibold text-[#1C332A]">Mnemos Artisan Team</span>
              </div>
            </div>
          </div>

        </div>

        {/* Testimonials Review Strip */}
        <div className="mt-24 pt-16 border-t border-[#E7DCCB]">
          <div className="text-center space-y-2 mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#664A38] uppercase">
              CẢM NHẬN KHÁCH HÀNG
            </p>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C332A]">
              Những Khoảnh Khắc Chạm Đến Trái Tim
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#FAF5EC] rounded-xl p-6 border border-[#E5DACB] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#D4AF37] mb-3">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#4E4134] leading-relaxed italic">
                    {t.comment}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EADECE] flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#D5C6B3]"
                  />
                  <div>
                    <h5 className="font-serif font-bold text-sm text-[#1C332A]">{t.name}</h5>
                    <p className="text-[11px] text-[#7A6B5C]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
