import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onSelectOrderNow: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onSelectOrderNow,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FBF8F3]/95 backdrop-blur-md border-b border-[#E7DCCB]/70 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-2xl sm:text-[1.7rem] font-serif font-bold tracking-[0.08em] text-[#1C332A] whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#1C332A] inline-block mb-0.5"></span>
            SAMORY STUDIO
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[14.5px] font-medium text-[#4A4036]">
            <a
              href="#trang-chu"
              className="hover:text-[#1C332A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#1C332A] hover:after:w-full after:transition-all whitespace-nowrap shrink-0"
            >
              Trang chủ
            </a>
            <a
              href="#bo-suu-tap"
              className="hover:text-[#1C332A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#1C332A] hover:after:w-full after:transition-all whitespace-nowrap shrink-0"
            >
              Bộ sưu tập
            </a>
            <a
              href="#trai-nghiem-nfc"
              className="hover:text-[#1C332A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#1C332A] hover:after:w-full after:transition-all whitespace-nowrap shrink-0"
            >
              Trải nghiệm Phygital (NFC)
            </a>
            <a
              href="#ve-chung-toi"
              className="hover:text-[#1C332A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#1C332A] hover:after:w-full after:transition-all whitespace-nowrap shrink-0"
            >
              Về chúng tôi
            </a>
          </nav>

          {/* Zone 3: Primary Action & Cart */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Cart Icon Button */}
            <button
              onClick={onOpenCart}
              aria-label="Xem giỏ hàng"
              className="relative p-2.5 rounded-full text-[#2C2723] hover:text-[#1C332A] hover:bg-[#F3ECE0] transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#1C332A] text-[#FBF8F3] text-[11px] font-semibold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary CTA Button: Deep forest green */}
            <button
              onClick={onSelectOrderNow}
              className="hidden sm:inline-flex items-center justify-center gap-2 bg-[#1C332A] hover:bg-[#14261F] text-[#FBF8F3] text-sm font-semibold tracking-wide py-2.5 px-5 rounded-md shadow-xs hover:shadow-md transition-all active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#E7DCCB]" />
              <span>Đặt làm ngay</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#2C2723] hover:text-[#1C332A] rounded-md cursor-pointer"
              aria-label="Mở menu điều hướng"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBF8F3] border-b border-[#E7DCCB] px-6 py-5 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#4A4036]">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1C332A]"
            >
              Trang chủ
            </a>
            <a
              href="#bo-suu-tap"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1C332A]"
            >
              Bộ sưu tập
            </a>
            <a
              href="#trai-nghiem-nfc"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1C332A]"
            >
              Trải nghiệm Phygital (NFC)
            </a>
            <a
              href="#ve-chung-toi"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1C332A]"
            >
              Về chúng tôi
            </a>
          </nav>
          <div className="pt-3 border-t border-[#E7DCCB]/70">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSelectOrderNow();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#1C332A] text-[#FBF8F3] font-semibold py-3 px-4 rounded-md shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#E7DCCB]" />
              Đặt làm ngay
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
