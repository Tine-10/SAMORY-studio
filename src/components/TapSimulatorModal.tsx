import React, { useState } from 'react';
import { X, Smartphone, Wifi, Play, Pause, Volume2, Sparkles, Heart, Film, ArrowRight, RotateCcw } from 'lucide-react';
import { DEMO_MEMORIES } from '../data/products';

interface TapSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectOrder: () => void;
}

export const TapSimulatorModal: React.FC<TapSimulatorModalProps> = ({
  isOpen,
  onClose,
  onSelectOrder,
}) => {
  if (!isOpen) return null;

  const [activePreset, setActivePreset] = useState(0);
  const [tapState, setTapState] = useState<'idle' | 'tapping' | 'unlocked'>('unlocked');
  const [isPlayingMedia, setIsPlayingMedia] = useState(true);

  const memory = DEMO_MEMORIES[activePreset];

  // Synthesize a gentle soft haptic audio chime when tapped using Web Audio API
  const playHapticChime = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
    } catch {
      // Audio context might be restricted, gracefully ignore
    }
  };

  const triggerTapSimulation = () => {
    setTapState('tapping');
    setTimeout(() => {
      playHapticChime();
      setTapState('unlocked');
      setIsPlayingMedia(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#1C332A] text-[#FBF8F3] rounded-3xl shadow-2xl border border-white/10 p-6 sm:p-8 max-h-[95vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Đóng cửa sổ"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C49E65]/20 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MÔ PHỎNG TƯƠNG TÁC THỰC TẾ (DEMO CHO GIẢNG VIÊN)</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Trải Nghiệm Chạm Smartphone Vào Sổ Mnemos
          </h3>
          <p className="text-xs sm:text-sm text-[#DFD6C8]">
            Thử nghiệm trực quan cách chip NFC giấu kín đánh thức không gian số đa phương tiện mà không cần cài đặt bất kỳ phần mềm nào.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="text-xs text-[#C4BEAF] mr-2">Chọn dữ liệu mẫu:</span>
          {DEMO_MEMORIES.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => {
                setActivePreset(idx);
                triggerTapSimulation();
              }}
              className={`text-xs px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activePreset === idx
                  ? 'bg-[#C49E65] text-[#1C332A] font-bold shadow-xs'
                  : 'bg-white/10 text-white/80 hover:bg-white/15'
              }`}
            >
              {idx === 0 ? 'Tình Yêu' : idx === 1 ? 'Tốt Nghiệp' : 'Gia Đình'}
            </button>
          ))}
        </div>

        {/* Simulation Stage: Physical Album & Smartphone */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-black/25 rounded-2xl p-6 sm:p-8 border border-white/10">
          
          {/* Left: Physical Album NFC Hotspot */}
          <div className="md:col-span-6 flex flex-col items-center justify-center space-y-4">
            <div className="relative w-64 h-72 bg-[#F3ECE0] rounded-xl shadow-xl border-2 border-[#D5C4AE] p-4 flex flex-col justify-between text-[#2C2723]">
              
              {/* Linen grain texture cue */}
              <div className="flex items-center justify-between border-b border-[#D5C4AE] pb-2 text-[10px] text-[#7A6A58]">
                <span className="font-serif font-bold">MNEMOS BESPOKE</span>
                <span className="font-mono">RAW LINEN HARDCOVER</span>
              </div>

              {/* NFC Embedded Symbol */}
              <div className="my-auto text-center space-y-3">
                <div className="relative mx-auto w-20 h-20 rounded-full bg-[#1C332A] text-white flex items-center justify-center shadow-md">
                  <Smartphone className="w-8 h-8 stroke-[1.5]" />
                  {tapState === 'tapping' && (
                    <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37] animate-ping" />
                  )}
                </div>
                <div className="space-y-1">
                  <p className="font-serif font-bold text-sm text-[#1C332A]">Điểm Chạm NFC (Tap Point)</p>
                  <p className="text-[11px] text-[#695847]">Vi chip nằm ẩn dưới lớp vải</p>
                </div>
              </div>

              <div className="text-center pt-2 border-t border-[#D5C4AE] text-[10px] text-[#8C7B6A]">
                Tương thích 100% iPhone XS+ & Android NFC
              </div>
            </div>

            <button
              onClick={triggerTapSimulation}
              className="inline-flex items-center gap-2 bg-[#C49E65] hover:bg-[#B38D56] text-[#1C332A] font-bold text-xs py-2.5 px-5 rounded-lg shadow transition-all cursor-pointer active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Mô Phỏng Chạm Lại Điện Thoại</span>
            </button>
          </div>

          {/* Right: Phone Display Result */}
          <div className="md:col-span-6 flex justify-center">
            <div className="w-full max-w-[320px] bg-[#111111] rounded-[36px] p-3.5 shadow-2xl border-3 border-[#444444]">
              
              {/* Dynamic Island */}
              <div className="flex items-center justify-between px-3 pb-2 text-[10px] text-white/50 border-b border-white/10">
                <span className="font-mono">09:41</span>
                <div className="w-16 h-3.5 bg-black rounded-full" />
                <div className="flex items-center gap-1">
                  <Wifi className="w-3 h-3 text-white/80" />
                  <span>5G</span>
                </div>
              </div>

              {/* Screen Content */}
              <div className="mt-2.5 space-y-2.5">
                
                {/* Status toast */}
                <div className="bg-[#2D4A3E] text-white p-2 rounded-lg text-xs flex items-center justify-between border border-emerald-500/30">
                  <span className="text-[11px] font-medium">Đã kết nối Mnemos Memory</span>
                  <span className="text-[9px] bg-emerald-500/40 px-1.5 py-0.5 rounded font-mono">13.56MHz</span>
                </div>

                {/* Media Player Showcase */}
                <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-black">
                  <img
                    src={memory.coverImage}
                    alt={memory.title}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-2.5">
                    <p className="font-serif font-bold text-xs text-white">{memory.title}</p>
                    <p className="text-[10px] text-white/80">{memory.date}</p>
                  </div>
                </div>

                {/* Quote Letter */}
                <div className="bg-white/10 rounded-lg p-2.5 text-xs text-[#DFD6C8] italic leading-relaxed">
                  {memory.quote}
                </div>

                {/* Audio track preview */}
                <div className="bg-white/5 rounded-lg p-2 flex items-center justify-between text-xs">
                  <button
                    onClick={() => setIsPlayingMedia(!isPlayingMedia)}
                    className="w-6 h-6 rounded-full bg-[#D4AF37] text-[#1C332A] flex items-center justify-center shrink-0"
                  >
                    {isPlayingMedia ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
                  </button>
                  <div className="flex-1 min-w-0 mx-2">
                    <p className="text-[11px] font-semibold text-white truncate">{memory.songTitle}</p>
                    <p className="text-[9px] text-white/70">{memory.artist}</p>
                  </div>
                  <span className="text-[9px] font-mono text-white/50">{memory.audioDuration}</span>
                </div>

              </div>

              {/* Bottom bar */}
              <div className="w-24 h-1 bg-white/30 rounded-full mx-auto mt-3" />
            </div>
          </div>

        </div>

        {/* Modal Bottom CTAs */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#C4BEAF]">
            * Bạn có thể tự do tùy chỉnh link video, danh sách phát Spotify và ảnh in khi đặt hàng.
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-semibold transition-colors cursor-pointer"
            >
              Đóng mô phỏng
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectOrder();
              }}
              className="px-5 py-2.5 rounded-lg bg-[#C49E65] hover:bg-[#B38D56] text-[#1C332A] text-xs font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>Đặt làm ngay</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
