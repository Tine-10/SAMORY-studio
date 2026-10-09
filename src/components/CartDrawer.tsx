import React from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: (item?: CartItem) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;

  const totalAmount = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F0] border-l border-[#DED0BD] shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#E7DCCB] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#1C332A]" />
              <h3 className="font-serif text-xl font-bold text-[#1C332A]">
                Giỏ Hàng Kỷ Niệm ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#6E5D4E] hover:text-[#1C332A] hover:bg-[#EFE5D5] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EFE7DA] text-[#8C7A67] mx-auto flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
                </div>
                <div className="space-y-1">
                  <p className="font-serif font-bold text-lg text-[#1C332A]">Giỏ hàng của bạn đang trống</p>
                  <p className="text-xs text-[#705F4F]">
                    Hãy chọn một gói scrapbook để bắt đầu lưu giữ những kỷ niệm quý giá nhất.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-2.5 rounded-lg bg-[#1C332A] text-white text-xs font-semibold cursor-pointer hover:bg-[#14261F] transition-colors"
                >
                  Khám phá bộ sưu tập ngay
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="bg-[#F3ECE0] rounded-xl p-4 border border-[#DACBB8] flex gap-3.5"
                  >
                    {/* Item Thumbnail representation */}
                    <div className="w-16 h-16 rounded-lg bg-[#E2D5C2] border border-[#C5B39D] flex items-center justify-center shrink-0">
                      <span className="font-serif font-bold text-xs text-[#5C4B3B] text-center px-1">
                        {item.product.name.replace('Gói ', '')}
                      </span>
                    </div>

                    {/* Item Info */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-serif font-bold text-sm text-[#1C332A] truncate">
                            {item.product.name}
                          </h4>
                          <p className="text-[11px] text-[#786655]">{item.product.photoCount}</p>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-[#968371] hover:text-red-700 p-1 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Quantity & Price */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-[#CBB9A2] rounded-md bg-white">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="p-1 text-[#665545] hover:text-black cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-mono tabular-nums font-semibold text-[#1C332A]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="p-1 text-[#665545] hover:text-black cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-mono text-xs font-bold text-[#1C332A] tabular-nums">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Drawer Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#E7DCCB] bg-[#F5EFE4] space-y-4">
              <div className="space-y-1.5 text-xs text-[#635343]">
                <div className="flex justify-between">
                  <span>Tạm tính:</span>
                  <span className="font-mono tabular-nums">{formatPrice(totalAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Phí in ấn & đóng gói:</span>
                  <span className="text-emerald-700 font-medium">Miễn phí</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#DFD1BD] font-bold text-base text-[#1C332A]">
                  <span>Tổng thanh toán:</span>
                  <span className="font-mono text-xl tabular-nums">
                    {formatPrice(totalAmount)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onProceedToCheckout(items[0]);
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-[#1C332A] hover:bg-[#12231C] text-[#FBF8F3] font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Tiến hành cá nhân hóa & đặt làm</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
