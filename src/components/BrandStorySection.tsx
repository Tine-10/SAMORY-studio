import React from 'react';
import { Heart, Sparkles, Feather } from 'lucide-react';

export const BrandStorySection: React.FC = () => {

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
              Tên gọi <strong>SAMORY</strong> được ghép lại bởi 2 từ "SAVE" và "MEMORY" - có nghĩa là lưu giữ ký ức. Samory có sứ mệnh là nơi lưu giữ những khoảnh khắc trọn vẹn.
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

      </div>
    </section>
  );
};
