import React from 'react';
import { OrderSubmission } from '../types';
import { CheckCircle2, X, Download, MessageSquare, Sparkles, Clock, Package, Share2 } from 'lucide-react';

interface OrderSuccessModalProps {
  order: OrderSubmission | null;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ order, onClose }) => {
  if (!order) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#FAF7F0] rounded-2xl shadow-2xl border border-[#DED0BD] p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Đóng cửa sổ"
          className="absolute top-5 right-5 p-1.5 rounded-full text-[#7A6A59] hover:text-[#1C332A] hover:bg-[#EFE5D5] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon & Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-full bg-[#1C332A] text-[#FBF8F3] mx-auto flex items-center justify-center shadow-md">
            <CheckCircle2 className="w-8 h-8 stroke-[1.8]" />
          </div>
          <p className="text-xs font-semibold tracking-widest text-[#C49E65] uppercase">
            XÁC NHẬN ĐƠN HÀNG THÀNH CÔNG
          </p>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C332A]">
            Cảm Ơn Bạn Đã Gửi Ký Ức Đến Mnemos!
          </h3>
          <p className="text-xs sm:text-sm text-[#6E5D4E]">
            Mã đơn hàng của bạn: <strong className="font-mono text-[#1C332A]">{order.orderId}</strong>
          </p>
        </div>

        {/* Order Receipt Box */}
        <div className="mt-6 bg-[#F3ECE0] rounded-xl p-4 sm:p-5 border border-[#DACBB8] space-y-3 text-xs sm:text-sm">
          <div className="flex justify-between items-center pb-2.5 border-b border-[#DFD1BD]">
            <span className="text-[#6B5A4B]">Gói sản phẩm:</span>
            <span className="font-serif font-bold text-base text-[#1C332A]">{order.packageName}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[#6B5A4B]">Khách hàng:</span>
            <span className="font-medium text-[#2C2723]">{order.fullName}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[#6B5A4B]">Số điện thoại Zalo:</span>
            <span className="font-mono font-medium text-[#2C2723]">{order.phone}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[#6B5A4B]">Dịp kỷ niệm:</span>
            <span className="text-[#2C2723]">{order.occasion}</span>
          </div>

          {order.driveLink && (
            <div className="flex justify-between items-center">
              <span className="text-[#6B5A4B]">Link Drive tư liệu:</span>
              <span className="text-[#1C332A] font-medium truncate max-w-[200px]">
                {order.driveLink}
              </span>
            </div>
          )}

          {order.mediaLink && (
            <div className="flex justify-between items-center">
              <span className="text-[#6B5A4B]">Link Media nhúng NFC:</span>
              <span className="text-[#1C332A] font-medium truncate max-w-[200px]">
                {order.mediaLink}
              </span>
            </div>
          )}

          <div className="pt-2.5 border-t border-[#DFD1BD] flex justify-between items-baseline font-bold text-base text-[#1C332A]">
            <span>Tổng thanh toán dự kiến:</span>
            <span className="font-mono text-xl tabular-nums">
              {new Intl.NumberFormat('vi-VN').format(order.finalTotal)}đ
            </span>
          </div>
        </div>

        {/* Next Steps Timeline */}
        <div className="mt-6 space-y-3">
          <h4 className="text-xs font-semibold text-[#1C332A] uppercase tracking-wider flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#2D4A3E]" />
            <span>Quy Trình Tiếp Theo Của Mnemos Studio:</span>
          </h4>
          <div className="space-y-2 text-xs text-[#5E5043]">
            <div className="flex items-start gap-2">
              <span className="w-4 h-4 rounded-full bg-[#1C332A] text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">1</span>
              <span><strong>Trong 30 phút:</strong> Nghệ nhân sẽ nhắn tin Zalo số <em>{order.phone}</em> để nhận thêm ảnh gốc & trao đổi bố cục bìa.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-4 h-4 rounded-full bg-[#1C332A] text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">2</span>
              <span><strong>Duyệt layout:</strong> Bạn sẽ được xem trước bản vẽ kỹ thuật số của cuốn sổ và duyệt chỉnh sửa thoải mái.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-4 h-4 rounded-full bg-[#1C332A] text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">3</span>
              <span><strong>Sản xuất & giao hàng:</strong> Hoàn thiện thủ công từ 2-3 ngày, đóng hộp chống sốc và giao tận nhà.</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl bg-[#1C332A] hover:bg-[#12231C] text-[#FBF8F3] text-sm font-semibold transition-colors cursor-pointer"
          >
            Đã hiểu & Hoàn tất
          </button>
          
          <button
            onClick={handlePrint}
            className="py-3 px-4 rounded-xl bg-[#F3ECE0] hover:bg-[#EAE0D1] text-[#1C332A] text-sm font-semibold border border-[#D5C6B3] transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Lưu đơn hàng</span>
          </button>
        </div>

      </div>
    </div>
  );
};
