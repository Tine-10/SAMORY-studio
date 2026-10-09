import React from 'react';
import { ProductPackage } from '../types';
import { X, Check, ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';

interface QuickViewModalProps {
  pkg: ProductPackage | null;
  onClose: () => void;
  onSelectForOrder: (pkg: ProductPackage) => void;
  onAddToCart: (pkg: ProductPackage) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  pkg,
  onClose,
  onSelectForOrder,
  onAddToCart,
}) => {
  if (!pkg) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF7F0] rounded-2xl shadow-2xl border border-[#DED0BD] p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Đóng"
          className="absolute top-5 right-5 p-1.5 rounded-full text-[#7A6A59] hover:text-[#1C332A] hover:bg-[#EFE5D5] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-widest text-[#664A38] uppercase">
              CHI TIẾT ẤN PHẨM MNEMOS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C332A]">
              {pkg.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#736353]">
              {pkg.tagline}
            </p>
          </div>

          {/* Pricing */}
          <div className="flex items-baseline gap-3 pb-4 border-b border-[#E7DCCB]">
            <span className="text-3xl font-bold font-mono text-[#1C332A] tabular-nums">
              {formatPrice(pkg.price)}
            </span>
            {pkg.originalPrice && (
              <span className="text-sm font-mono line-through text-[#998776]">
                {formatPrice(pkg.originalPrice)}
              </span>
            )}
            <span className="text-xs text-emerald-800 font-semibold ml-auto">
              Bao gồm VAT, in ảnh & gói quà
            </span>
          </div>

          {/* Detailed Description */}
          <p className="text-sm text-[#524436] leading-relaxed">
            {pkg.description}
          </p>

          {/* Detailed Specifications Table */}
          <div className="bg-[#F3ECE0] rounded-xl p-4 sm:p-5 border border-[#DACBB8] space-y-2.5 text-xs sm:text-sm">
            <div className="grid grid-cols-3 gap-2 py-1 border-b border-[#E0D2C0]">
              <span className="text-[#736252] font-medium">Quy cách bìa:</span>
              <span className="col-span-2 text-[#2C2723] font-semibold">{pkg.coverType}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-1 border-b border-[#E0D2C0]">
              <span className="text-[#736252] font-medium">Kích thước:</span>
              <span className="col-span-2 text-[#2C2723] font-mono">{pkg.dimensions}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-1 border-b border-[#E0D2C0]">
              <span className="text-[#736252] font-medium">Số lượng ảnh in:</span>
              <span className="col-span-2 text-[#2C2723]">{pkg.photoCount}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-1 border-b border-[#E0D2C0]">
              <span className="text-[#736252] font-medium">Công nghệ chạm:</span>
              <span className="col-span-2 text-[#1C332A] font-semibold">{pkg.nfcFeature}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-1 border-b border-[#E0D2C0]">
              <span className="text-[#736252] font-medium">Phụ kiện đi kèm:</span>
              <span className="col-span-2 text-[#2C2723]">{pkg.accessories.join(', ')}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-1">
              <span className="text-[#736252] font-medium">Phù hợp cho dịp:</span>
              <span className="col-span-2 text-[#2C2723] italic">{pkg.idealFor}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => {
                onClose();
                onSelectForOrder(pkg);
              }}
              className="flex-1 py-3.5 px-4 rounded-xl bg-[#1C332A] hover:bg-[#12231C] text-[#FBF8F3] font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Đặt làm gói này ngay</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
            <button
              onClick={() => {
                onClose();
                onAddToCart(pkg);
              }}
              className="py-3.5 px-5 rounded-xl bg-[#F3ECE0] hover:bg-[#EAE0D1] text-[#1C332A] font-semibold text-xs border border-[#DACBB8] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Thêm vào giỏ</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
