import React from 'react';
import { MapPin, Phone, Mail, Instagram, Music2, Facebook, Heart, Shield, Sparkles } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="bg-[#14261F] text-[#E5DDD2] pt-16 pb-12 border-t border-[#234236]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2B4B3E]">
          
          {/* Brand & Manifesto */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif text-2xl font-bold tracking-wider text-[#FAF7F0] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
              MNEMOS STUDIO
            </h3>
            <p className="text-xs sm:text-sm text-[#C2B7A8] leading-relaxed max-w-sm">
              Thương hiệu quà tặng scrapbook thủ công cá nhân hóa kết hợp công nghệ chạm thông minh (NFC & QR). Giữ trọn từng khoảnh khắc, giọng nói và video của riêng bạn.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Mnemos TikTok"
                className="w-9 h-9 rounded-full bg-[#234236] hover:bg-[#D4AF37] hover:text-[#14261F] transition-colors flex items-center justify-center text-white"
              >
                <Music2 className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Mnemos Instagram"
                className="w-9 h-9 rounded-full bg-[#234236] hover:bg-[#D4AF37] hover:text-[#14261F] transition-colors flex items-center justify-center text-white"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Mnemos Facebook"
                className="w-9 h-9 rounded-full bg-[#234236] hover:bg-[#D4AF37] hover:text-[#14261F] transition-colors flex items-center justify-center text-white"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Info (TP.HCM) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-base text-[#FAF7F0] tracking-wide">
              Thông Tin Liên Hệ & Workshop
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#C2B7A8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  <strong>Showroom & Workshop:</strong> 42/8 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>
                  <strong>Hotline / Zalo tư vấn:</strong> 0988 241 096 (Hỗ trợ 24/7)
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>
                  <strong>Email:</strong> contact@mnemos-studio.vn
                </span>
              </div>
            </div>
          </div>

          {/* Policies & Commitment */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-base text-[#FAF7F0] tracking-wide">
              Cam Kết Thương Hiệu
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#C2B7A8]">
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bảo hành vi chip NFC trọn đời</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Duyệt mẫu layout thiết kế trước khi in</span>
              </li>
              <li className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% chế tác thủ công tỉ mỉ từng chi tiết</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 ml-1.5 mr-0.5" />
                <span>Đóng gói hộp quà bảo vệ chống sốc 3 lớp</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E9283]">
          <p>
            © 2026 <strong>MNEMOS STUDIO</strong>. Lưu giữ ký ức vật lý, kết nối không gian số. Tất cả quyền được bảo lưu.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Thiết kế cho đề án sáng tạo & thương mại điện tử</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
