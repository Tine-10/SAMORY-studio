import React from 'react';
import { ProductPackage } from '../types';
import { PRODUCT_PACKAGES } from '../data/products';
import { Check, Sparkles, ArrowRight, ShoppingBag, Eye } from 'lucide-react';

interface ProductsSectionProps {
  onSelectPackageForCustomizer: (pkg: ProductPackage) => void;
  onAddToCart: (pkg: ProductPackage) => void;
  onQuickView: (pkg: ProductPackage) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectPackageForCustomizer,
  onAddToCart,
  onQuickView,
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
  };

  return (
    <section id="bo-suu-tap" className="py-24 bg-[#FBF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E7DCCB]">
          <div className="space-y-3 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#664A38] uppercase">
              BỘ SƯU TẬP & BẢNG GIÁ CHÍNH THỨC
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C332A]">
              Chọn Gói Scrapbook Phù Hợp Cho Ký Ức Của Bạn
            </h2>
            <p className="text-base text-[#615243]">
              Mỗi sản phẩm đều được hoàn thiện từ chất liệu tự nhiên bền bỉ, tích hợp công nghệ chạm thông minh lưu giữ trọn vẹn cảm xúc.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-[#6F5D4C]">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#2D4A3E]" />
              Miễn phí in & cắt ảnh theo chuẩn
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#2D4A3E]" />
              Bảo hành chip trọn đời
            </span>
          </div>
        </div>

        {/* 3 Cards Horizontal Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRODUCT_PACKAGES.map((pkg) => {
            const isBestSeller = pkg.isBestSeller;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  isBestSeller
                    ? 'bg-[#FDFBF7] border-2 border-[#1C332A] shadow-xl lg:-translate-y-2'
                    : 'bg-[#FAF5EC] border border-[#DECDB8] shadow-sm hover:shadow-md'
                }`}
              >
                {/* Best Seller Ribbon Tag */}
                {isBestSeller && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1C332A] text-[#FBF8F3] text-[11px] font-semibold tracking-wider uppercase py-1 px-4 rounded-full shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                    <span>LỰA CHỌN PHỔ BIẾN NHẤT</span>
                  </div>
                )}

                {/* Card Top: Visual Mockup Showcase */}
                <div>
                  <div className="p-6 pb-0">
                    {/* Visual Graphic Representation */}
                    <div className="relative w-full h-56 rounded-xl overflow-hidden bg-gradient-to-b from-[#EFE6D7] to-[#E2D5C0] border border-[#D8C7B0] flex items-center justify-center group">
                      
                      {/* Interactive Visual Graphic specific to each package */}
                      {pkg.id === 'pocket-kit' && (
                        <div className="relative w-full h-full flex items-center justify-center p-4">
                          {/* Accordion visual representation */}
                          <div className="flex items-center space-x-1 transform -rotate-1 group-hover:rotate-0 transition-transform">
                            {[1, 2, 3, 4].map((panel) => (
                              <div
                                key={panel}
                                className="w-16 h-28 bg-[#FBF8F3] border border-[#CDBEAA] shadow-sm rounded-xs p-1 flex flex-col justify-between"
                              >
                                <div className="w-full h-16 bg-[#DDD0BF] rounded-xs flex items-center justify-center text-[10px] text-[#7A6A58] font-serif">
                                  Ảnh {panel}
                                </div>
                                <div className="h-1 bg-[#C89B7B]/50 rounded-full" />
                                <span className="text-[8px] text-center text-[#8C7B6A] font-mono">10x14cm</span>
                              </div>
                            ))}
                          </div>
                          <div className="absolute bottom-2.5 right-3 bg-[#1C332A]/85 text-white text-[10px] px-2 py-0.5 rounded font-mono">
                            Accordion Mini · 8-10 Ảnh
                          </div>
                        </div>
                      )}

                      {pkg.id === 'complete-studio' && (
                        <div className="relative w-full h-full flex items-center justify-center p-4">
                          {/* Binder Linen Album representation */}
                          <div className="w-48 h-36 bg-[#EBE0D0] border-2 border-[#BFAFA0] rounded-lg shadow-md p-3 relative transform group-hover:scale-105 transition-transform">
                            {/* Binder rings */}
                            <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-around py-3">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#8E7966] border border-[#6F5B49]" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#8E7966] border border-[#6F5B49]" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#8E7966] border border-[#6F5B49]" />
                            </div>
                            <div className="ml-5 bg-[#FAF6EE] h-full rounded p-2 flex flex-col justify-between border border-[#DFD4C4]">
                              <div className="flex justify-between items-center text-[10px] text-[#695847] font-serif">
                                <span>MNEMOS ALBUM</span>
                                <span className="bg-[#2D4A3E] text-white px-1.5 py-0.2 rounded text-[8px] font-mono">CHIP NFC ⚡</span>
                              </div>
                              <div className="w-full h-14 bg-[#D7C9B5] rounded-xs flex items-center justify-center text-[11px] text-[#554636] font-serif italic">
                                Polaroid + Lời Tự Sự
                              </div>
                              <div className="flex justify-between items-center text-[9px] text-[#7A6B5C]">
                                <span>18-20 ảnh</span>
                                <span>Set phụ kiện kèm</span>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-2.5 right-3 bg-[#1C332A] text-[#FBF8F3] text-[10px] px-2.5 py-0.5 rounded-md font-semibold">
                            Bìa Linen + Chip NFC
                          </div>
                        </div>
                      )}

                      {pkg.id === 'all-in-one-custom' && (
                        <div className="relative w-full h-full flex items-center justify-center p-4">
                          {/* Luxury Magnetic Gift Box representation */}
                          <div className="w-52 h-36 bg-[#1C332A] rounded-xl shadow-lg p-3 text-[#FBF8F3] relative transform group-hover:scale-105 transition-transform flex flex-col justify-between border border-[#2B493D]">
                            {/* Silk Ribbon */}
                            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-6 bg-[#C49E65]/40 border-x border-[#C49E65]/60" />
                            <div className="relative z-10 flex justify-between items-start">
                              <span className="text-[10px] tracking-widest text-[#E7DCCB] font-serif uppercase">
                                LUXURY BOX
                              </span>
                              <span className="w-5 h-5 rounded-full bg-[#C49E65] text-[#1C332A] flex items-center justify-center text-[9px] font-bold">
                                ★
                              </span>
                            </div>
                            <div className="relative z-10 text-center py-2">
                              <p className="font-serif text-sm font-semibold tracking-wide text-[#FAF7F0]">
                                All-in-One Bespoke
                              </p>
                              <p className="text-[10px] text-[#D8CEBC] mt-0.5">Nghệ nhân thực hiện từ A-Z</p>
                            </div>
                            <div className="relative z-10 flex justify-between text-[9px] text-[#CFC2B0]">
                              <span>Hộp nam châm</span>
                              <span>Thiệp viết tay</span>
                            </div>
                          </div>
                          <div className="absolute bottom-2.5 right-3 bg-[#8C6D1F] text-white text-[10px] px-2.5 py-0.5 rounded-md font-semibold">
                            Trọn Gói Sang Trọng
                          </div>
                        </div>
                      )}

                      {/* Quick view overlay button */}
                      <button
                        onClick={() => onQuickView(pkg)}
                        className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1.5 cursor-pointer"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Xem chi tiết thông số</span>
                      </button>
                    </div>

                    {/* Product Name & Tagline */}
                    <div className="mt-5 space-y-1">
                      <h3 className="font-serif text-2xl font-bold text-[#1C332A]">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-[#736353] font-medium">
                        {pkg.tagline}
                      </p>
                    </div>

                    {/* Price Lockup */}
                    <div className="mt-4 pb-4 border-b border-[#E7DCCB] flex items-baseline gap-2.5">
                      <span className="text-2xl font-bold font-mono tabular-nums text-[#1C332A]">
                        {formatPrice(pkg.price)}
                      </span>
                      {pkg.originalPrice && (
                        <span className="text-sm font-mono line-through text-[#998776]">
                          {formatPrice(pkg.originalPrice)}
                        </span>
                      )}
                      <span className="text-xs text-[#2D4A3E] font-medium ml-auto">
                        Đã gồm VAT & in ấn
                      </span>
                    </div>

                    {/* Product Specification bullets */}
                    <div className="mt-5 space-y-2.5 text-xs text-[#524538]">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#2D4A3E] shrink-0 mt-0.5" />
                        <span><strong>Quy cách:</strong> {pkg.coverType}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#2D4A3E] shrink-0 mt-0.5" />
                        <span><strong>Số lượng ảnh:</strong> {pkg.photoCount}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#2D4A3E] shrink-0 mt-0.5" />
                        <span><strong>Công nghệ:</strong> {pkg.nfcFeature}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#2D4A3E] shrink-0 mt-0.5" />
                        <span><strong>Phụ kiện:</strong> {pkg.accessories.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Bottom: Action Buttons */}
                <div className="p-6 pt-5 space-y-2.5 border-t border-[#E8DECf] mt-6">
                  {/* Primary CTA: Order Now / Customize */}
                  <button
                    onClick={() => onSelectPackageForCustomizer(pkg)}
                    className={`w-full py-3.5 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      isBestSeller
                        ? 'bg-[#1C332A] hover:bg-[#13241D] text-[#FBF8F3] shadow-md hover:shadow-lg active:scale-[0.99]'
                        : 'bg-[#2D4A3E] hover:bg-[#20372E] text-[#FBF8F3] shadow-xs active:scale-[0.99]'
                    }`}
                  >
                    <span>Đặt hàng ngay</span>
                    <ArrowRight className="w-4 h-4 text-[#E7DCCB]" />
                  </button>

                  {/* Secondary CTA: Quick Add to Cart */}
                  <button
                    onClick={() => onAddToCart(pkg)}
                    className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-[#4F4133] hover:text-[#1C332A] bg-transparent hover:bg-[#EFE5D5] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Thêm vào giỏ hàng</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
