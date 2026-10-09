/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProcessSection } from './components/ProcessSection';
import { ProductsSection } from './components/ProductsSection';
import { NfcExperienceSection } from './components/NfcExperienceSection';
import { OrderFormSection } from './components/OrderFormSection';
import { BrandStorySection } from './components/BrandStorySection';
import { FooterSection } from './components/FooterSection';
import { CartDrawer } from './components/CartDrawer';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { TapSimulatorModal } from './components/TapSimulatorModal';
import { QuickViewModal } from './components/QuickViewModal';
import { PRODUCT_PACKAGES } from './data/products';
import { ProductPackage, CartItem, OrderSubmission } from './types';
import { Sparkles, Check, CheckCircle2 } from 'lucide-react';

export default function App() {
  // State management
  const [selectedPackage, setSelectedPackage] = useState<ProductPackage>(
    PRODUCT_PACKAGES.find((p) => p.isBestSeller) || PRODUCT_PACKAGES[1]
  );
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isTapSimulatorOpen, setIsTapSimulatorOpen] = useState(false);
  const [quickViewPkg, setQuickViewPkg] = useState<ProductPackage | null>(null);
  const [completedOrder, setCompletedOrder] = useState<OrderSubmission | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleAddToCart = (pkg: ProductPackage) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === pkg.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === pkg.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product: pkg, quantity: 1 }];
    });
    showToast(`Đã thêm ${pkg.name} vào giỏ hàng`);
  };

  const handleUpdateCartQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackageForCustomizer = (pkg: ProductPackage) => {
    setSelectedPackage(pkg);
    scrollToSection('dat-lam-ngay');
  };

  const handleProceedFromCart = (item?: CartItem) => {
    if (item) {
      setSelectedPackage(item.product);
    }
    scrollToSection('dat-lam-ngay');
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FBF8F3] text-[#2C2723] flex flex-col font-sans selection:bg-[#1C332A] selection:text-[#FBF8F3]">
      
      {/* 1. Header Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectOrderNow={() => scrollToSection('dat-lam-ngay')}
      />

      <main className="flex-1">
        {/* 2. Banner Chính (Hero Section) */}
        <HeroSection
          onExploreClick={() => scrollToSection('bo-suu-tap')}
          onOpenSimulator={() => setIsTapSimulatorOpen(true)}
        />

        {/* 3. Quy Trình 3 Bước */}
        <ProcessSection
          onStartProcess={() => scrollToSection('bo-suu-tap')}
        />

        {/* 4. Sản Phẩm & Bảng Giá (Xếp ngang 3 thẻ) */}
        <ProductsSection
          onSelectPackageForCustomizer={handleSelectPackageForCustomizer}
          onAddToCart={handleAddToCart}
          onQuickView={(pkg) => setQuickViewPkg(pkg)}
        />

        {/* 5. Giới Thiệu Công Nghệ Chạm (NFC Phygital Capsule) */}
        <NfcExperienceSection />

        {/* 6. Form Đặt Hàng / Tải Ảnh (Customizer Demo) */}
        <OrderFormSection
          selectedPackage={selectedPackage}
          onPackageChange={setSelectedPackage}
          onSubmitSuccess={(order) => setCompletedOrder(order)}
        />

        {/* Câu Chuyện Thương Hiệu & Khách Hàng Review */}
        <BrandStorySection />
      </main>

      {/* 7. Chân Trang (Footer) */}
      <FooterSection />

      {/* Floating Interactive Presentation Bar for the Student/Reviewer */}
      <div className="fixed bottom-5 right-5 z-30 flex items-center gap-2">
        <button
          onClick={() => setIsTapSimulatorOpen(true)}
          className="bg-[#1C332A] hover:bg-[#13241D] text-[#FBF8F3] border border-[#C49E65]/50 text-xs font-semibold py-3 px-4 rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 cursor-pointer active:scale-95 group"
          title="Mở bảng mô phỏng chạm NFC để thuyết trình đề án"
        >
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Demo Chạm NFC (Báo Cáo Đề Án)</span>
        </button>
      </div>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={handleProceedFromCart}
      />

      {/* Order Success Popup Modal */}
      <OrderSuccessModal
        order={completedOrder}
        onClose={() => setCompletedOrder(null)}
      />

      {/* Tap Simulator Modal */}
      <TapSimulatorModal
        isOpen={isTapSimulatorOpen}
        onClose={() => setIsTapSimulatorOpen(false)}
        onSelectOrder={() => scrollToSection('dat-lam-ngay')}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        pkg={quickViewPkg}
        onClose={() => setQuickViewPkg(null)}
        onSelectForOrder={handleSelectPackageForCustomizer}
        onAddToCart={handleAddToCart}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 bg-[#1C332A] text-white text-xs font-medium px-4 py-3 rounded-lg shadow-xl border border-[#D4AF37]/40 flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
