import React, { useState } from 'react';
import { ProductPackage, OrderSubmission } from '../types';
import { PRODUCT_PACKAGES } from '../data/products';
import { Send, Upload, Link as LinkIcon, Music, Check, Sparkles, AlertCircle, FileText, X } from 'lucide-react';

interface OrderFormSectionProps {
  selectedPackage: ProductPackage;
  onPackageChange: (pkg: ProductPackage) => void;
  onSubmitSuccess: (order: OrderSubmission) => void;
}

export const OrderFormSection: React.FC<OrderFormSectionProps> = ({
  selectedPackage,
  onPackageChange,
  onSubmitSuccess,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [occasion, setOccasion] = useState('Tình yêu & Kỷ niệm ngày quen');
  const [driveLink, setDriveLink] = useState('');
  const [mediaLink, setMediaLink] = useState('');
  const [notes, setNotes] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponMessage, setCouponMessage] = useState('');
  
  // Demo photo uploads
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const occasions = [
    'Tình yêu & Kỷ niệm ngày quen',
    'Sinh nhật người thương / bạn thân',
    'Kỷ yếu & Lễ Tốt nghiệp',
    'Kỷ niệm ngày cưới (Wedding Anniversary)',
    'Chuyến đi du lịch đáng nhớ',
    'Gia đình & Tri ân bố mẹ',
  ];

  const handleApplyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    if (code === 'MNEMOS2026' || code === 'GIANGVIEN10' || code === 'FIRSTLOVE') {
      setDiscountPercent(10);
      setCouponMessage('Áp dụng thành công mã ưu đãi Đề án (-10%)');
    } else if (code) {
      setDiscountPercent(0);
      setCouponMessage('Mã giảm giá không hợp lệ (Thử: MNEMOS2026 hoặc GIANGVIEN10)');
    }
  };

  const handlePhotoUploadDemo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const newUrls = files.slice(0, 4).map((f) => URL.createObjectURL(f));
      setUploadedPhotos((prev) => [...prev, ...newUrls].slice(0, 6));
    }
  };

  const removePhoto = (index: number) => {
    setUploadedPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const discountAmount = Math.round((selectedPackage.price * discountPercent) / 100);
  const finalTotal = selectedPackage.price - discountAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !phone.trim()) {
      alert('Vui lòng nhập Họ tên và Số điện thoại để Mnemos liên hệ tư vấn layout!');
      return;
    }

    setIsSubmitting(true);

    const generatedOrderId = 'MNM-' + Math.floor(100000 + Math.random() * 900000);

    const submission: OrderSubmission = {
      orderId: generatedOrderId,
      fullName,
      phone,
      email: email || 'contact@client.vn',
      packageId: selectedPackage.id,
      packageName: selectedPackage.name,
      price: selectedPackage.price,
      discount: discountAmount,
      finalTotal,
      occasion,
      driveLink: driveLink || 'Đã gửi qua Zalo / Tải lên trực tiếp',
      mediaLink: mediaLink || 'Tùy chọn playlist chuẩn bị sau',
      notes: notes || 'Không có ghi chú thêm',
      uploadedPhotoPreviews: uploadedPhotos,
      couponCode: discountPercent > 0 ? couponCode : undefined,
      createdAt: new Date().toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitSuccess(submission);
    }, 700);
  };

  return (
    <section id="dat-lam-ngay" className="py-24 bg-[#F3ECE0]/50 border-t border-[#E7DCCB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#664A38] uppercase">
            CÁ NHÂN HÓA SỔ KỶ NIỆM CỦA BẠN
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C332A]">
            Gửi Tư Liệu & Đặt Làm Ngay
          </h2>
          <p className="text-base text-[#615243] max-w-xl mx-auto">
            Điền thông tin và liên kết ảnh của bạn. Đội ngũ nghệ nhân Mnemos sẽ liên hệ gửi bản phác thảo layout trước khi in ấn và sản xuất.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[#FAF7F0] rounded-2xl p-6 sm:p-10 shadow-lg border border-[#DED0BD]">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Step 1: Chọn gói sản phẩm */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-[#1C332A]">
                1. Chọn Gói Sản Phẩm Quà Tặng
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PRODUCT_PACKAGES.map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => onPackageChange(pkg)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      selectedPackage.id === pkg.id
                        ? 'bg-[#1C332A] text-white border-[#1C332A] shadow-md'
                        : 'bg-white text-[#332A22] border-[#DCCFBE] hover:border-[#1C332A]/50'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <p className="font-serif font-bold text-base leading-snug">
                        {pkg.name.replace('Gói ', '')}
                      </p>
                      {pkg.isBestSeller && (
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                          selectedPackage.id === pkg.id ? 'bg-[#C49E65] text-[#1C332A]' : 'bg-[#1C332A] text-white'
                        }`}>
                          HOT
                        </span>
                      )}
                    </div>
                    <p className={`text-xs mt-1 ${selectedPackage.id === pkg.id ? 'text-[#E2D5C0]' : 'text-[#7A6A59]'}`}>
                      {pkg.photoCount}
                    </p>
                    <p className="font-mono text-sm font-bold mt-2 tabular-nums">
                      {new Intl.NumberFormat('vi-VN').format(pkg.price)}đ
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Thông tin liên hệ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-[#4A3D30] mb-1.5">
                  Họ và Tên của bạn <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Hoàng Minh Đức"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#D5C6B3] text-sm text-[#2C2723] focus:outline-none focus:ring-2 focus:ring-[#1C332A] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3D30] mb-1.5">
                  Số Điện Thoại (Zalo nhận duyệt mẫu) <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ví dụ: 0988 241 096"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#D5C6B3] text-sm text-[#2C2723] focus:outline-none focus:ring-2 focus:ring-[#1C332A] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3D30] mb-1.5">
                  Địa Chỉ Email (Nhận file thiết kế số)
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#D5C6B3] text-sm text-[#2C2723] focus:outline-none focus:ring-2 focus:ring-[#1C332A] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3D30] mb-1.5">
                  Dịp Kỷ Niệm
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#D5C6B3] text-sm text-[#2C2723] focus:outline-none focus:ring-2 focus:ring-[#1C332A] transition-all cursor-pointer"
                >
                  {occasions.map((occ) => (
                    <option key={occ} value={occ}>
                      {occ}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 3: Dán Link Drive / Upload Demo */}
            <div className="space-y-4 pt-4 border-t border-[#E8DECf]">
              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-sm font-semibold text-[#1C332A]">
                  <LinkIcon className="w-4 h-4 text-[#2D4A3E]" />
                  <span>Dán Link Thư Mục Ảnh / Google Drive Của Bạn (Khuyên Dùng)</span>
                </label>
                <p className="text-xs text-[#705F4F]">
                  Tải ảnh gốc lên Drive và dán liên kết tại đây (Hãy mở quyền xem để nghệ nhân tải ảnh chất lượng gốc sắc nét nhất).
                </p>
                <input
                  type="url"
                  placeholder="https://drive.google.com/drive/folders/..."
                  value={driveLink}
                  onChange={(e) => setDriveLink(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#D5C6B3] text-sm text-[#2C2723] focus:outline-none focus:ring-2 focus:ring-[#1C332A] transition-all"
                />
              </div>

              {/* Tùy chọn tải ảnh trực tiếp demo */}
              <div className="bg-[#F3ECE0] rounded-xl p-4 border border-dashed border-[#C5B49F] space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#44372C]">
                    <Upload className="w-4 h-4 text-[#1C332A]" />
                    <span>Hoặc Tải Trực Tiếp Vài Ảnh Mẫu Demo Tại Đây:</span>
                  </div>
                  <label className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white text-[#1C332A] hover:bg-[#EFE7DA] py-1.5 px-3 rounded-md border border-[#C5B49F] transition-colors cursor-pointer shrink-0">
                    <span>Chọn ảnh từ máy</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handlePhotoUploadDemo}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Previews of uploaded demo photos */}
                {uploadedPhotos.length > 0 && (
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 pt-2">
                    {uploadedPhotos.map((url, idx) => (
                      <div key={idx} className="relative group rounded-md overflow-hidden aspect-square border border-white shadow-xs">
                        <img src={url} alt={`Demo preview ${idx}`} className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => removePhoto(idx)}
                          className="absolute top-1 right-1 bg-black/70 text-white rounded-full p-0.5 hover:bg-red-600 transition-colors"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Step 4: Link Video / Nhạc nhúng NFC */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-sm font-semibold text-[#1C332A]">
                  <Music className="w-4 h-4 text-[#2D4A3E]" />
                  <span>Dán Link Video Kỷ Niệm Hoặc Bài Hát Spotify/Youtube Nhúng Vào NFC</span>
                </label>
                <p className="text-xs text-[#705F4F]">
                  Khi chạm điện thoại vào bìa sổ, đường dẫn video/âm thanh này sẽ lập tức tự động mở lên.
                </p>
                <input
                  type="text"
                  placeholder="https://youtu.be/... hoặc link bài hát Spotify"
                  value={mediaLink}
                  onChange={(e) => setMediaLink(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#D5C6B3] text-sm text-[#2C2723] focus:outline-none focus:ring-2 focus:ring-[#1C332A] transition-all"
                />
              </div>

              {/* Ghi chú thêm */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#4A3D30]">
                  Ghi Chú Cho Nghệ Nhân (Khắc tên bìa, ngày kỷ niệm, lời nhắn bí mật...)
                </label>
                <textarea
                  rows={3}
                  placeholder="Ví dụ: Khắc tên 'Tiến & Linh 24.10.2024' bằng chữ nhũ vàng lên bìa sổ; tone màu nhẹ nhàng ấm áp..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#D5C6B3] text-sm text-[#2C2723] focus:outline-none focus:ring-2 focus:ring-[#1C332A] transition-all resize-none"
                />
              </div>
            </div>

            {/* Voucher demo */}
            <div className="pt-4 border-t border-[#E8DECf] flex flex-col sm:flex-row items-center gap-3">
              <div className="flex-1 w-full">
                <input
                  type="text"
                  placeholder="Mã ưu đãi (Thử: MNEMOS2026 hoặc GIANGVIEN10)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#D5C6B3] text-sm text-[#2C2723] uppercase"
                />
              </div>
              <button
                type="button"
                onClick={handleApplyCoupon}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#E8DFC0] hover:bg-[#DDD2AE] text-[#1C332A] text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                Áp Dụng Mã
              </button>
            </div>
            {couponMessage && (
              <p className={`text-xs ${discountPercent > 0 ? 'text-emerald-700 font-medium' : 'text-amber-800'}`}>
                {couponMessage}
              </p>
            )}

            {/* Pricing Summary */}
            <div className="bg-[#EFE5D5] rounded-xl p-5 space-y-2.5 text-sm border border-[#DACBB8]">
              <div className="flex justify-between text-[#615243]">
                <span>Giá gói {selectedPackage.name}:</span>
                <span className="font-mono tabular-nums font-medium">
                  {new Intl.NumberFormat('vi-VN').format(selectedPackage.price)}đ
                </span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-800 font-medium">
                  <span>Ưu đãi áp dụng ({discountPercent}%):</span>
                  <span className="font-mono tabular-nums">
                    -{new Intl.NumberFormat('vi-VN').format(discountAmount)}đ
                  </span>
                </div>
              )}
              <div className="flex justify-between text-[#615243]">
                <span>Phí đóng gói hộp quà & in ấn:</span>
                <span className="text-emerald-700 font-medium">Miễn phí</span>
              </div>
              <div className="flex justify-between text-[#615243]">
                <span>Giao hàng toàn quốc:</span>
                <span className="text-emerald-700 font-medium">Miễn phí vận chuyển</span>
              </div>
              <div className="pt-3 border-t border-[#DFD1BD] flex justify-between items-baseline font-bold text-lg text-[#1C332A]">
                <span>Tổng chi phí dự kiến:</span>
                <span className="font-mono tabular-nums text-2xl text-[#1C332A]">
                  {new Intl.NumberFormat('vi-VN').format(finalTotal)}đ
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-xl bg-[#1C332A] hover:bg-[#12231C] text-[#FBF8F3] font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer active:scale-[0.99] disabled:opacity-75"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Đang xử lý yêu cầu cá nhân hóa...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                  <span>GỬI YÊU CẦU ĐẶT LÀM NGAY</span>
                  <Send className="w-4 h-4 ml-1" />
                </>
              )}
            </button>

            <p className="text-[11px] text-center text-[#736353]">
              * Mnemos Studio bảo mật 100% hình ảnh và tư liệu cá nhân của khách hàng. Không lưu trữ ảnh sau khi hoàn tất giao sản phẩm.
            </p>

          </form>
        </div>

      </div>
    </section>
  );
};
