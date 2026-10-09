import React, { useState } from 'react';
import { Wifi, Smartphone, Layers, ShieldCheck, Play, Pause, Volume2, Sparkles, Heart, Film, Music, Compass } from 'lucide-react';
import { DEMO_MEMORIES } from '../data/products';

export const NfcExperienceSection: React.FC = () => {
  const [activeMemoryIdx, setActiveMemoryIdx] = useState(0);
  const [isTapped, setIsTapped] = useState(true);
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [activeTab, setActiveTab] = useState<'video' | 'voice' | 'letter'>('video');

  const currentMemory = DEMO_MEMORIES[activeMemoryIdx];

  const handleSimulateTap = () => {
    setIsTapped(false);
    setTimeout(() => {
      setIsTapped(true);
      setIsPlayingSound(true);
    }, 400);
  };

  return (
    <section id="trai-nghiem-nfc" className="py-24 bg-[#1C332A] text-[#FBF8F3] relative overflow-hidden">
      {/* Subtle organic craft background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#2E5445]/40 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#C49E65] uppercase">
            <span>Công Nghệ Phygital Tiên Phong</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span>Viên Nang Thời Gian</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FBF8F3] leading-[1.2]">
            Giấu Chip NFC Dưới Lớp Vải Linen — Biến Cuốn Sổ Thành “Viên Nang Thời Gian”
          </h2>

          <p className="text-base sm:text-lg text-[#DFD6C8] leading-relaxed font-light">
            Sổ tay truyền thống chỉ lưu được hình ảnh phẳng. Tại Mnemos, chúng tôi cấy vi chip NFC siêu mỏng tàng hình ngay dưới lớp bìa vải linen, cho phép bạn chỉ cần chạm nhẹ smartphone để đánh thức toàn bộ video, giọng nói và âm thanh kỷ niệm.
          </p>
        </div>

        {/* 2-Column Split: Tech Architecture + Interactive Phone Simulator */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: 4-Layer Engineering Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#FAF6EE] flex items-center gap-2.5">
              <Layers className="w-5 h-5 text-[#C49E65]" />
              Cấu Trúc 4 Lớp Thủ Công & Công Nghệ
            </h3>

            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between text-xs text-[#C49E65] font-mono mb-1">
                  <span>LỚP 01 · BỀ MẶT</span>
                  <span>100% ORGANIC</span>
                </div>
                <h4 className="font-semibold text-white text-base">Vải Linen Thô Dệt Tay Tự Nhiên</h4>
                <p className="text-xs text-[#C7BEAF] mt-1 leading-relaxed">
                  Bề mặt mộc mạc, tạo cảm giác xúc giác ấm áp và sang trọng khi chạm vào. Dập chìm logo và thông điệp cá nhân.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#2D4A3E]/70 border border-[#D4AF37]/40 shadow-inner">
                <div className="flex items-center justify-between text-xs text-[#D4AF37] font-mono mb-1">
                  <span>LỚP 02 · TRÁI TIM CÔNG NGHỆ</span>
                  <span>13.56 MHZ</span>
                </div>
                <h4 className="font-semibold text-white text-base flex items-center gap-2">
                  <span>Vi Chip NFC Siêu Mỏng (0.18mm)</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </h4>
                <p className="text-xs text-[#DFD6C8] mt-1 leading-relaxed">
                  Được giấu khéo léo không để lại vết hằn. Không dùng pin, không cần sạc điện, hoạt động nhờ trường sóng điện từ của điện thoại.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between text-xs text-[#C49E65] font-mono mb-1">
                  <span>LỚP 03 · BẢO VỆ</span>
                  <span>SHIELD CORE</span>
                </div>
                <h4 className="font-semibold text-white text-base">Bìa Cứng Chống Cong Vênh & Ẩm</h4>
                <p className="text-xs text-[#C7BEAF] mt-1 leading-relaxed">
                  Lõi bìa cứng cao cấp chịu lực, giúp bảo vệ an toàn cho chip NFC qua hàng chục năm lưu trữ.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between text-xs text-[#C49E65] font-mono mb-1">
                  <span>LỚP 04 · RUỘT SỔ</span>
                  <span>ARCHIVAL GRADE</span>
                </div>
                <h4 className="font-semibold text-white text-base">Giấy Mỹ Thuật Ngà Voi 320gsm</h4>
                <p className="text-xs text-[#C7BEAF] mt-1 leading-relaxed">
                  Giấy không chứa axit (Acid-free) ngăn ngừa ngả vàng, bám mực tốt cho những dòng chữ viết tay đầy tình cảm.
                </p>
              </div>
            </div>

            {/* Quick stats */}
            <div className="pt-2 grid grid-cols-2 gap-4 text-xs text-[#C4BEAF]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Không cần tải ứng dụng</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Hỗ trợ cả iOS & Android</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive NFC Tap Simulator Device */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Interactive Controller Bar */}
            <div className="w-full max-w-md mb-6 flex items-center justify-between bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/15">
              <span className="text-xs text-[#DFD6C8] font-medium ml-2">Thử nghiệm:</span>
              <div className="flex items-center gap-1.5">
                {DEMO_MEMORIES.map((m, idx) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      setActiveMemoryIdx(idx);
                      setIsPlayingSound(true);
                    }}
                    className={`text-xs px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      activeMemoryIdx === idx
                        ? 'bg-[#FBF8F3] text-[#1C332A] font-semibold shadow-xs'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {idx === 0 ? 'Tình yêu' : idx === 1 ? 'Tốt nghiệp' : 'Gia đình'}
                  </button>
                ))}
              </div>
            </div>

            {/* Virtual Smartphone Mockup */}
            <div className="relative w-full max-w-[360px] bg-[#111111] rounded-[40px] p-4 shadow-2xl border-4 border-[#3D3A37] overflow-hidden">
              
              {/* Dynamic Island / Notch */}
              <div className="flex items-center justify-between px-4 pb-3 text-[10px] text-white/50 border-b border-white/10">
                <span className="font-mono tabular-nums">10:24</span>
                <div className="w-20 h-4 bg-black rounded-full mx-auto" />
                <div className="flex items-center gap-1">
                  <Wifi className="w-3 h-3 text-white/70" />
                  <span className="font-mono">5G</span>
                </div>
              </div>

              {/* Inside Screen Content */}
              <div className="mt-3 space-y-3">
                
                {/* Instant NFC Banner */}
                <div className="bg-[#2D4A3E] text-white rounded-xl p-3 border border-emerald-500/30 flex items-center justify-between animate-in fade-in duration-300">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold">Chạm NFC Thành Công!</p>
                      <p className="text-[10px] text-white/80">Mnemos Phygital Space</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-mono">0.2s</span>
                </div>

                {/* Phygital Web Memory Navigation Tabs */}
                <div className="grid grid-cols-3 gap-1 bg-white/5 p-1 rounded-lg text-[11px] text-center">
                  <button
                    onClick={() => setActiveTab('video')}
                    className={`py-1 rounded font-medium transition-colors cursor-pointer ${
                      activeTab === 'video' ? 'bg-[#FBF8F3] text-[#1C332A]' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    Thước phim
                  </button>
                  <button
                    onClick={() => setActiveTab('voice')}
                    className={`py-1 rounded font-medium transition-colors cursor-pointer ${
                      activeTab === 'voice' ? 'bg-[#FBF8F3] text-[#1C332A]' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    Lời chúc âm
                  </button>
                  <button
                    onClick={() => setActiveTab('letter')}
                    className={`py-1 rounded font-medium transition-colors cursor-pointer ${
                      activeTab === 'letter' ? 'bg-[#FBF8F3] text-[#1C332A]' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    Tâm thư
                  </button>
                </div>

                {/* Tab 1: Video Memory */}
                {activeTab === 'video' && (
                  <div className="space-y-2">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-black">
                      <img
                        src={currentMemory.coverImage}
                        alt="Memory video frame"
                        className="w-full h-full object-cover opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-3">
                        <p className="text-xs font-serif font-bold text-white">{currentMemory.title}</p>
                        <p className="text-[10px] text-white/80">{currentMemory.subtitle}</p>
                      </div>
                      <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-xs text-[9px] px-2 py-0.5 rounded-full text-white/90 font-mono">
                        HD 1080p
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Voice Note Audio */}
                {activeTab === 'voice' && (
                  <div className="bg-white/10 rounded-xl p-3 space-y-2.5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#C49E65] text-[#1C332A] flex items-center justify-center font-bold">
                        <Volume2 className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">Tin Nhắn Thoại Bí Mật</p>
                        <p className="text-[10px] text-[#DFD6C8]">Ghi âm: 24/10/2026</p>
                      </div>
                    </div>

                    {/* Audio Wave Bars Visual */}
                    <div className="h-10 bg-black/40 rounded-lg p-2 flex items-center justify-between gap-1">
                      {[40, 70, 95, 60, 30, 85, 100, 50, 75, 45, 90, 60, 35, 70, 80].map((h, i) => (
                        <span
                          key={i}
                          style={{ height: `${isPlayingSound ? h : 25}%` }}
                          className="w-1.5 bg-[#D4AF37] rounded-full transition-all duration-200"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Tab 3: Heartfelt Letter */}
                {activeTab === 'letter' && (
                  <div className="bg-[#FAF7F0] text-[#2C2723] rounded-xl p-3.5 space-y-2 font-serif">
                    <p className="text-[11px] text-[#847260] uppercase tracking-wider font-sans font-medium">
                      LỜI NHẮN GỬI YÊU THƯƠNG
                    </p>
                    <p className="text-xs italic leading-relaxed text-[#3F362C]">
                      {currentMemory.quote}
                    </p>
                    <p className="text-[10px] text-right text-[#695847] font-sans font-semibold">
                      — Mnemos Bespoke Capsule
                    </p>
                  </div>
                )}

                {/* Bottom Sound Bar */}
                <div className="bg-white/10 rounded-xl p-2.5 flex items-center justify-between gap-3 text-xs">
                  <button
                    onClick={() => setIsPlayingSound(!isPlayingSound)}
                    className="w-8 h-8 rounded-full bg-[#FBF8F3] text-[#1C332A] flex items-center justify-center shrink-0 hover:scale-105 transition-transform cursor-pointer"
                  >
                    {isPlayingSound ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-white truncate">{currentMemory.songTitle}</p>
                    <p className="text-[10px] text-[#DFD6C8]">{currentMemory.artist}</p>
                  </div>
                  <span className="text-[10px] font-mono text-white/60">{currentMemory.audioDuration}</span>
                </div>

              </div>

              {/* Home indicator bar */}
              <div className="w-28 h-1 bg-white/30 rounded-full mx-auto mt-4" />
            </div>

            {/* Tap Action Trigger Button */}
            <div className="mt-6 text-center">
              <button
                onClick={handleSimulateTap}
                className="inline-flex items-center gap-2.5 bg-[#C49E65] hover:bg-[#B38D56] text-[#1C332A] font-semibold text-xs py-3 px-6 rounded-lg transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <Smartphone className="w-4 h-4" />
                <span>Chạm Lại Điện Thoại Vào Bìa Sổ</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
