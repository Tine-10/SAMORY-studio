export interface ProductPackage {
  id: 'pocket-kit' | 'complete-studio' | 'all-in-one-custom';
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  isBestSeller?: boolean;
  imageAlt: string;
  badge?: string;
  coverType: string;
  dimensions: string;
  photoCount: string;
  nfcFeature: string;
  accessories: string[];
  description: string;
  idealFor: string;
}

export interface CartItem {
  product: ProductPackage;
  quantity: number;
  customName?: string;
  occasion?: string;
}

export interface OrderSubmission {
  orderId: string;
  fullName: string;
  phone: string;
  email: string;
  packageId: ProductPackage['id'];
  packageName: string;
  price: number;
  discount: number;
  finalTotal: number;
  occasion: string;
  driveLink: string;
  mediaLink: string;
  notes: string;
  uploadedPhotoPreviews: string[];
  couponCode?: string;
  createdAt: string;
}

export interface TapMemory {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  coverImage: string;
  videoUrl?: string;
  songTitle: string;
  artist: string;
  audioDuration: string;
  quote: string;
  tags: string[];
}
