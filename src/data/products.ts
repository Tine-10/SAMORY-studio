import { ProductPackage, TapMemory } from '../types';

export const PRODUCT_PACKAGES: ProductPackage[] = [
  {
    id: 'pocket-kit',
    name: 'Gói POCKET KIT',
    tagline: 'Gọn nhẹ · Bỏ túi · Kỷ niệm mini',
    price: 249000,
    originalPrice: 290000,
    isBestSeller: false,
    imageAlt: 'Sổ gập accordion mini Pocket Kit với 8-10 ảnh vintage và sticker',
    badge: 'Tiện lợi & Bỏ túi',
    coverType: 'Bìa cứng gập Accordion giấy mỹ thuật định lượng 320gsm',
    dimensions: '10 x 14.5 cm (Nhỏ gọn mang theo)',
    photoCount: '8 – 10 ảnh in tráng màng bảo vệ',
    nfcFeature: 'Mã QR nghệ thuật khắc chìm liên kết thư viện số đa phương tiện',
    accessories: [
      'Set 2 tấm sticker vintage ép kim độc quyền',
      'Dây thừng gai & kẹp gỗ phong cách retro',
      'Bao bì túi craft thắt nơ tối giản'
    ],
    description: 'Thiết kế gập ziczac kéo dài như một cuộn phim thu nhỏ. Phù hợp cho những chuyến đi du lịch ngắn ngày, kỷ niệm 100 ngày yêu hoặc món quà bất ngờ bỏ túi áo.',
    idealFor: 'Quà tặng bạn thân, kỷ niệm chuyến đi, món quà nhỏ xinh bất ngờ'
  },
  {
    id: 'complete-studio',
    name: 'Gói COMPLETE STUDIO',
    tagline: 'Bìa Linen · Chip NFC · Trọn bộ tự tay sáng tạo',
    price: 499000,
    originalPrice: 580000,
    isBestSeller: true,
    imageAlt: 'Sổ còng bìa vải Linen cao cấp nhúng chip NFC siêu mỏng tàng hình',
    badge: 'BEST SELLER',
    coverType: 'Bìa còng cứng bọc vải Linen thô mộc cao cấp, dập chìm logo Mnemos',
    dimensions: '18.5 x 22 cm (Khổ A5 mở rộng, dễ thay/thêm trang)',
    photoCount: '18 – 20 ảnh polaroid & vuông chất lượng cao chống phai màu',
    nfcFeature: 'Tích hợp chip thông minh NFC 13.56MHz tàng hình dưới bìa + QR mã hóa dự phòng',
    accessories: [
      '20 góc dán ảnh vintage giả da phong cách cổ điển',
      'Bút nhũ gel metallic ánh kim viết nhật ký ký ức',
      'Set 4 tấm sticker chủ đề hoa lá & tem thư cổ điển',
      'Hộp craft cứng cáp chống sốc bảo quản sổ'
    ],
    description: 'Sản phẩm được yêu thích nhất tại Mnemos Studio. Bạn tự tay dán ảnh, viết lời tự sự và gắn nhãn theo cảm xúc riêng, kết hợp công nghệ chạm NFC hiện đại để sống lại âm thanh và video.',
    idealFor: 'Kỷ niệm tình yêu 1 năm+, sinh nhật bạn bè, kỷ yếu và lưu bút trưởng thành'
  },
  {
    id: 'all-in-one-custom',
    name: 'Gói ALL-IN-ONE CUSTOM',
    tagline: 'Nghệ nhân thực hiện từ A-Z · Hộp quà nam châm sang trọng',
    price: 690000,
    originalPrice: 850000,
    isBestSeller: false,
    imageAlt: 'Hộp quà nắp nam châm thắt ruy băng lụa cao cấp gói All-in-One Custom',
    badge: 'Chuyên gia hoàn thiện A-Z',
    coverType: 'Bìa vải Linen dệt tay cao cấp cá nhân hóa tên & ngày kỷ niệm bằng chữ mạ vàng',
    dimensions: '20 x 24 cm (Tặng kèm hộp quà nam châm sang trọng)',
    photoCount: '25 – 30 ảnh chọn lọc, biên tập và chỉnh màu sắc mỹ thuật',
    nfcFeature: 'Chip NFC cao cấp không giới hạn dung lượng video/playlist nhạc + Web kỷ niệm riêng',
    accessories: [
      'Đội ngũ nghệ nhân Mnemos thiết kế layout & dán thủ công 100% từ A-Z',
      'Hộp quà nắp nam châm tone Forest Green/Beige thắt ruy băng lụa',
      'Nhánh hoa khô tự nhiên cao cấp & sáp niêm phong thủ công (Wax Seal)',
      'Thiệp chúc mừng viết tay theo thông điệp bạn yêu cầu',
      'Túi xách quà tặng sang trọng tiện mang tặng'
    ],
    description: 'Giải pháp hoàn hảo nếu bạn bận rộn nhưng muốn một món quà kỳ công, hoàn mỹ đến từng milimet. Đội ngũ Mnemos nhận tư liệu và thổi hồn thành tác phẩm nghệ thuật độc bản.',
    idealFor: 'Cầu hôn, kỷ niệm ngày cưới, quà tặng đối tác hay người đặc biệt nhất'
  }
];

export const DEMO_MEMORIES: TapMemory[] = [
  {
    id: 'love-anniversary',
    title: 'Kỷ Niệm 2 Năm Bên Nhau',
    subtitle: 'Hành trình từ quán cafe góc phố nhỏ đến chuyến tàu Đà Lạt',
    date: '24.10.2024 — 24.10.2026',
    coverImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    songTitle: 'Until I Found You',
    artist: 'Stephen Sanchez',
    audioDuration: '02:57',
    quote: '“Cảm ơn vì đã luôn là nơi bình yên nhất để em trở về sau những bộn bề.”',
    tags: ['Tình yêu', 'Đà Lạt', 'Couple', '2 Năm']
  },
  {
    id: 'graduation-day',
    title: 'Ngày Chúng Ta Tốt Nghiệp',
    subtitle: 'Nụ cười, nước mắt và những cái ôm trước khi bước ra biển lớn',
    date: '15.06.2026',
    coverImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    songTitle: 'Những Năm Tháng Rực Rỡ',
    artist: 'Vũ Cát Tường',
    audioDuration: '03:42',
    quote: '“Mong chúng mình sau này đều trở thành phiên bản hạnh phúc nhất.”',
    tags: ['Tốt nghiệp', 'Kỷ yếu', 'Thanh xuân', 'Đại học']
  },
  {
    id: 'family-moments',
    title: 'Mái Ấm & Bữa Cơm Mẹ Nấu',
    subtitle: 'Những khoảnh khắc dung dị nhưng ấm áp suốt cả đời',
    date: 'Tết Sum Vầy 2026',
    coverImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80',
    songTitle: 'Đi Về Nhà',
    artist: 'Đen x JustaTee',
    audioDuration: '03:15',
    quote: '“Hạnh phúc lớn nhất không phải đi thật xa, mà là luôn có nơi để quay về.”',
    tags: ['Gia đình', 'Tết', 'Yêu thương', 'Kỷ niệm']
  }
];
