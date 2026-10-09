import React, { useState } from 'react';
import { ArrowRight, Smartphone, Wifi, Play, Volume2, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onOpenSimulator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onOpenSimulator,
}) => {
  const [activeTabMemory, setActiveTabMemory] = useState<number>(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const memories = [
    {
      title: 'Our 2nd Anniversary',
      date: '24.10.2024 · Dalat Trip',
      song: 'Until I Found You — Stephen Sanchez',
      quote: '“Ngày trời nhiều mây nhất, nhưng mắt anh sáng nhất.”',
      img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80',
    },
    {
      title: 'Khoảnh Khắc Tốt Nghiệp',
      date: '15.06.2026 · HUST Campus',
      song: 'Những Năm Tháng Rực Rỡ — Vũ Cát Tường',
      quote: '“Tạm biệt giảng đường, chào một tương lai thật rực rỡ nhé!”',
      img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=700&q=80',
    },
    {
      title: 'Mái Ấm Gia Đình',
      date: 'Tết Sum Vầy 2026',
      song: 'Đi Về Nhà — Đen x JustaTee',
      quote: '“Nơi bình yên nhất trên đời luôn là mâm cơm của mẹ.”',
      img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=700&q=80',
    },
  ];

  const current = memories[activeTabMemory];

  return (
    <section id="trang-chu" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Background ambient craft glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[480px] bg-[#EEDFC8]/40 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-6 space-y-7">
            {/* Unboxed refined kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#664A38] uppercase">
              <span>Boutique Phygital Gifts</span>
              <span aria-hidden="true" className="text-[#C4B5A5]">·</span>
              <span>Kỷ Niệm Cá Nhân Hóa</span>
              <span aria-hidden="true" className="text-[#C4B5A5]">·</span>
              <span className="text-[#2D4A3E]">Công Nghệ Chạm 1-Tap</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-serif font-bold tracking-tight text-[#1C332A] leading-[1.18] text-balance">
              SAMORY STUDIO — LƯU GIỮ KÝ ỨC
            </h1>

            {/* Sub-headline prose */}
            <p className="text-base sm:text-lg text-[#55493D] leading-relaxed max-w-xl font-normal">
              Hộp kỷ niệm & Scrapbook cá nhân hóa tích hợp công nghệ chạm thông minh (NFC/QR) — Giữ trọn từng khoảnh khắc, âm thanh và video của riêng bạn.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-3 bg-[#1C332A] hover:bg-[#14261F] text-[#FBF8F3] text-sm font-semibold tracking-wider uppercase py-4 px-8 rounded-md shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer group"
              >
                <span>KHÁM PHÁ NGAY</span>
                <ArrowRight className="w-4 h-4 text-[#E7DCCB] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenSimulator}
                className="inline-flex items-center justify-center gap-2.5 bg-[#F3ECE0] hover:bg-[#EBE0D0] text-[#1C332A] text-sm font-semibold py-4 px-6 rounded-md border border-[#DED0BD] transition-all cursor-pointer group"
              >
                <Smartphone className="w-4 h-4 text-[#2D4A3E]" />
                <span>Trải nghiệm chạm thử (Demo NFC)</span>
              </button>
            </div>

            {/* Craftsmanship & Trust Markers */}
            <div className="pt-6 border-t border-[#E7DCCB]/80 grid grid-cols-3 gap-4 text-xs text-[#55493D]">
              <div>
                <p className="font-serif font-bold text-lg text-[#1C332A]">100% Thủ Công</p>
                <p className="text-[#786959] mt-0.5">Vải Linen & Giấy mỹ thuật ngà</p>
              </div>
              <div>
                <p className="font-serif font-bold text-lg text-[#1C332A]">Chip Tàng Hình</p>
                <p className="text-[#786959] mt-0.5">NFC 13.56MHz không cần pin</p>
              </div>
              <div>
                <p className="font-serif font-bold text-lg text-[#1C332A]">Bảo Hành Trọn Đời</p>
                <p className="text-[#786959] mt-0.5">Dữ liệu đám mây an toàn vĩnh viễn</p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Phygital Composition */}
          <div className="lg:col-span-6 relative">
            
            {/* The Physical Table & Scrapbook Showcase Container */}
            <div className="relative mx-auto max-w-[540px] rounded-2xl bg-gradient-to-b from-[#F3ECE0] to-[#E7DCCB] p-5 sm:p-7 shadow-2xl border border-[#DED0BD] overflow-hidden">
              
              {/* Decorative studio craft items around */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-[#2D4A3E]/10 rounded-full blur-xl pointer-events-none" />
              
              {/* Top metadata pill replacement - unboxed header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#D8C9B5] text-xs text-[#705F4F]">
                <span className="font-serif font-semibold text-[#1C332A] tracking-wider uppercase">
                  MNEMOS CRAFT TABLE · STUDIO EDITION
                </span>
                <span className="font-mono text-[11px] tabular-nums text-[#8B7764]">PHYGITAL V.26</span>
              </div>

              {/* The Physical Scrapbook Book Mockup */}
              <div className="mt-4 relative bg-[#F7F3EB] rounded-xl p-5 sm:p-6 shadow-md border border-[#D5C4AE]">
                
                {/* Book Spine & Fabric Texture Indicators */}
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-[#3A291E]/20 rounded-l-xl border-r border-[#C7B59F]" />
                
                {/* Physical Album Cover Layer */}
                <div className="pl-3 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-[#8A7865] font-medium">Bìa Vải Linen Dệt Tay</p>
                      <h4 className="font-serif text-xl font-bold text-[#1C332A]">Kỷ Niệm Của Chúng Mình</h4>
                    </div>
                    {/* Golden Foil Stamp */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4AF37]/30 to-[#F7E7A9]/60 border border-[#D4AF37] flex items-center justify-center shadow-xs">
                      <Sparkles className="w-4 h-4 text-[#8C6D1F]" />
                    </div>
                  </div>

                  {/* Physical Polaroid pinned onto page */}
                  <div className="grid grid-cols-2 gap-3 items-center">
                    <div className="bg-white p-2.5 pb-5 rounded shadow-sm border border-[#E0D4C3] transform -rotate-2 hover:rotate-0 transition-transform">
                      {/* Washi tape sticker */}
                      <div className="w-10 h-3 bg-[#C89B7B]/70 mx-auto -mt-4 mb-1.5 opacity-80" />
                      <img
                        src={current.img}
                        alt="Kỷ niệm in trên ảnh polaroid"
                        className="w-full aspect-[4/3] object-cover rounded-xs"
                      />
                      <p className="text-[11px] font-serif text-center mt-2 text-[#4A3E31] italic">
                        {current.date}
                      </p>
                    </div>

                    <div className="space-y-2 text-xs text-[#554636]">
                      <p className="font-medium text-[#1C332A] text-sm">“Chạm điện thoại tại đây”</p>
                      <p className="text-[12px] leading-relaxed text-[#6E5D4E]">
                        Phía dưới lớp vải dệt là vi chip NFC siêu mỏng. Khi điện thoại tiếp xúc, video và âm thanh sống động lập tức mở ra.
                      </p>
                      
                      {/* Active NFC Target Area */}
                      <div className="p-2.5 rounded-lg bg-[#EFE7DA] border border-dashed border-[#B5A18B] flex items-center gap-2 text-[11px]">
                        <div className="w-3 h-3 rounded-full bg-[#1C332A] animate-ping opacity-75" />
                        <span className="font-mono text-[#1C332A] font-semibold">NFC TAP POINT ACTIVE</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overlaid Interactive Smartphone Simulator Mockup */}
                <div className="mt-5 relative z-10 bg-[#1A1A1A] text-white rounded-2xl p-3 sm:p-4 shadow-2xl border-2 border-[#333333] transform sm:translate-y-2 sm:rotate-1 hover:rotate-0 transition-all">
                  
                  {/* Phone Speaker & Dynamic Island */}
                  <div className="flex items-center justify-between px-2 pb-2 border-b border-white/10 text-[10px] text-white/60">
                    <span className="font-mono tabular-nums">09:41</span>
                    <div className="w-16 h-3 bg-black rounded-full mx-auto" />
                    <div className="flex items-center gap-1">
                      <Wifi className="w-3 h-3" />
                      <span className="text-[9px]">NFC OK</span>
                    </div>
                  </div>

                  {/* Phone Screen: Live Memory Player */}
                  <div className="mt-2 space-y-2.5">
                    {/* Notification banner on tap */}
                    <div className="flex items-center justify-between bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/15 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-[#2D4A3E] flex items-center justify-center">
                          <Smartphone className="w-3.5 h-3.5 text-[#FBF8F3]" />
                        </div>
                        <div>
                          <p className="font-semibold text-[11px] leading-none text-white">Mnemos Phygital Cloud</p>
                          <p className="text-[10px] text-white/70">Kỷ niệm đã được mở qua NFC</p>
                        </div>
                      </div>
                      <span className="text-[10px] bg-emerald-500/30 text-emerald-300 px-1.5 py-0.5 rounded font-mono">Đã kết nối</span>
                    </div>

                    {/* Memory Video Card */}
                    <div className="relative rounded-lg overflow-hidden group">
                      <img
                        src={current.img}
                        alt="Memory preview"
                        className="w-full h-32 object-cover brightness-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-2.5">
                        <p className="text-xs font-semibold text-white">{current.title}</p>
                        <p className="text-[11px] text-white/80 italic mt-0.5">{current.quote}</p>
                      </div>
                    </div>

                    {/* Audio Track Player */}
                    <div className="bg-white/5 rounded-lg p-2 flex items-center justify-between gap-3 text-xs">
                      <button
                        onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                        className="w-7 h-7 rounded-full bg-[#E7DCCB] text-[#1C332A] flex items-center justify-center shrink-0 hover:scale-105 transition-transform cursor-pointer"
                        aria-label="Phát âm thanh demo"
                      >
                        {isPlayingAudio ? <Volume2 className="w-3.5 h-3.5 animate-pulse" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                      </button>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-medium text-white/90 truncate">{current.song}</p>
                        {/* Audio Wave Bars */}
                        <div className="flex items-center gap-1 mt-1">
                          <span className={`w-1 h-2 bg-emerald-400 rounded-full ${isPlayingAudio ? 'animate-bounce' : ''}`} />
                          <span className={`w-1 h-3.5 bg-emerald-400 rounded-full ${isPlayingAudio ? 'animate-bounce [animation-delay:0.15s]' : ''}`} />
                          <span className={`w-1 h-1.5 bg-emerald-400 rounded-full ${isPlayingAudio ? 'animate-bounce [animation-delay:0.3s]' : ''}`} />
                          <span className={`w-1 h-3 bg-emerald-400 rounded-full ${isPlayingAudio ? 'animate-bounce [animation-delay:0.2s]' : ''}`} />
                          <span className="text-[9px] font-mono text-white/50 ml-2">01:42 / 03:15</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              {/* Memory switcher tabs */}
              <div className="mt-4 pt-3 border-t border-[#D8C9B5] flex items-center justify-between">
                <span className="text-xs text-[#6F5D4C] font-medium">Chọn kỷ niệm mẫu:</span>
                <div className="flex items-center gap-1.5">
                  {memories.map((m, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTabMemory(idx)}
                      className={`text-xs px-2.5 py-1 rounded transition-colors cursor-pointer ${
                        activeTabMemory === idx
                          ? 'bg-[#1C332A] text-white font-medium shadow-xs'
                          : 'bg-[#E5D8C5] text-[#554636] hover:bg-[#DCD0BC]'
                      }`}
                    >
                      {idx === 0 ? 'Tình yêu' : idx === 1 ? 'Tốt nghiệp' : 'Gia đình'}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
