import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { STORE_CONFIG } from '../config';
import { PRODUCT_IMAGES } from '../productImages';
import { OrderFormData, SubmittedOrder } from '../types';
import { OrderSuccessModal } from './OrderSuccessModal';
import { 
  ShoppingBag, 
  Truck, 
  ShieldCheck, 
  Sparkles, 
  User, 
  Phone, 
  MapPin, 
  Building2, 
  CheckCircle,
  AlertCircle,
  Loader2,
  Lock,
  Tag,
  Layers,
  Flame,
  Check
} from 'lucide-react';

export const OrderSection: React.FC = () => {
  const [formData, setFormData] = useState<OrderFormData>({
    fullName: '',
    phoneNumber: '',
    deliveryAddress: '',
    state: 'Lagos',
    quantity: 1,
    productName: STORE_CONFIG.productName,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof OrderFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedOrder, setSubmittedOrder] = useState<SubmittedOrder | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const calculateTotal = (qty: number) => {
    return STORE_CONFIG.calculateTotalPrice(qty);
  };

  const handleSelectPackage = (qty: number) => {
    setFormData(prev => ({ ...prev, quantity: qty }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof OrderFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Please enter a valid full name';
    }

    const cleanPhone = formData.phoneNumber.replace(/\s+/g, '');
    if (!cleanPhone) {
      newErrors.phoneNumber = 'Please enter your active phone number';
    } else if (cleanPhone.length < 10) {
      newErrors.phoneNumber = 'Please enter a valid Nigerian phone number';
    }

    if (!formData.deliveryAddress.trim()) {
      newErrors.deliveryAddress = 'Please enter your street / delivery address';
    } else if (formData.deliveryAddress.trim().length < 5) {
      newErrors.deliveryAddress = 'Please provide a detailed address for delivery';
    }

    if (!formData.state.trim()) {
      newErrors.state = 'Please select your state';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const orderId = 'MFP-' + Math.floor(100000 + Math.random() * 900000);
    const totalAmount = calculateTotal(formData.quantity);
    const resolvedProduct = formData.productName || STORE_CONFIG.productName;

    const fullOrder: SubmittedOrder = {
      ...formData,
      productName: resolvedProduct,
      id: orderId,
      createdAt: new Date().toISOString(),
      totalAmount: totalAmount,
      whatsAppLink: `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${STORE_CONFIG.generateWhatsAppMessage({
        fullName: formData.fullName,
        phone: formData.phoneNumber,
        address: formData.deliveryAddress,
        state: formData.state,
        quantity: formData.quantity,
        totalAmount: totalAmount,
        productName: resolvedProduct,
      })}`
    };

    // If a Google Sheets webhook is configured in STORE_CONFIG, send JSON data
    if (STORE_CONFIG.orderWebhookUrl && STORE_CONFIG.orderWebhookUrl.startsWith('http')) {
      try {
        await fetch(STORE_CONFIG.orderWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            orderId: fullOrder.id,
            timestamp: fullOrder.createdAt,
            product: resolvedProduct,
            productName: resolvedProduct,
            fullName: fullOrder.fullName,
            phoneNumber: fullOrder.phoneNumber,
            deliveryAddress: fullOrder.deliveryAddress,
            state: fullOrder.state,
            quantity: fullOrder.quantity,
            totalPriceNaira: fullOrder.totalAmount,
            bonus: STORE_CONFIG.bonusText,
            source: 'Peculiar Stores Landing Page Lead Form',
          }),
          mode: 'no-cors', // standard for Google Apps Script Web App endpoints
        });
      } catch (err) {
        console.warn('Webhook logging note:', err);
      }
    }

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#EA580C', '#F97316', '#FBBF24', '#16A34A'],
      });
    } catch {
      // safe fallback
    }

    setIsSubmitting(false);
    setSubmittedOrder(fullOrder);
    setIsModalOpen(true);
  };

  return (
    <section id="order-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-20">
      
      {/* Top Banner: Offer Presentation */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-300 text-orange-950 text-xs font-black uppercase tracking-wider mb-4">
          <Sparkles className="w-4 h-4 text-orange-600" />
          <span>OFFICIAL ORDER & INSTANT CONFIRMATION</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          💰 GET YOUR MANUAL HAND FRUIT PRESS TODAY
        </h2>

        {/* Pricing Cards: 1 Unit for ₦25k & BUY 2 FOR ₦45K */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
          {/* 1 Unit */}
          <div className="p-5 rounded-2xl bg-white border-2 border-orange-200 shadow-sm relative flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-black uppercase text-orange-600 tracking-wider block">
                Standard Single Unit
              </span>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                1 Unit — ₦25,000
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Perfect for standard home and kitchen use.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5" /> FREE Nationwide Delivery
              </span>
            </div>
          </div>

          {/* 2 Units - Highlighted Promo */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-600 to-amber-600 text-white shadow-xl shadow-orange-500/20 relative flex flex-col justify-between overflow-hidden border-2 border-orange-500">
            <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-amber-300 text-slate-900 text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-xs">
              <Flame className="w-3 h-3 fill-current text-orange-600" />
              <span>SAVE ₦5,000</span>
            </div>
            <div>
              <span className="text-[11px] font-black uppercase text-orange-200 tracking-wider block">
                🔥 Hot Deal
              </span>
              <div className="text-2xl sm:text-3xl font-black text-white mt-1">
                Buy 2 for ₦45,000
              </div>
              <p className="text-xs text-orange-100 mt-1">
                ₦22,500 each instead of ₦50,000! Ideal for home + gift or business.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold text-amber-200">
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5" /> FREE Nationwide Delivery
              </span>
              <span className="underline">Most Popular</span>
            </div>
          </div>
        </div>

        {/* Guarantee Copy */}
        <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
          Your press comes ready to use, so you can start enjoying fresh juice without batteries, fuel, or electricity.
        </p>
      </div>

      {/* Main Order Card with Form */}
      <div className="rounded-3xl bg-white border-2 border-orange-200/90 shadow-elevated-card p-6 sm:p-10 lg:p-12 relative overflow-hidden">
        
        {/* Background Subtle Accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

        {/* CTA Callout Header */}
        <div className="border-b border-orange-100 pb-6 mb-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center sm:justify-start gap-2 uppercase">
                <span>🍊 LEAD ORDER FORM</span>
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                Fill the order details below. Your order will be logged to Google Sheets and instantly confirmed on WhatsApp:
              </p>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shrink-0 self-center sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>WhatsApp: {STORE_CONFIG.whatsappDisplayNumber}</span>
            </div>
          </div>
        </div>

        {/* The Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* 1. Product Name (Explicit on Lead Form) */}
          <div className="space-y-1.5">
            <label htmlFor="productName" className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-orange-600" />
              <span>Product Name</span>
            </label>
            <div className="relative">
              <input
                id="productName"
                type="text"
                readOnly
                value={formData.productName || STORE_CONFIG.productName}
                className="w-full px-4 py-3.5 rounded-xl border border-orange-200 bg-orange-50/50 text-slate-900 text-sm font-bold focus:outline-none cursor-default"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded-md bg-orange-500 text-white text-[10px] font-black uppercase tracking-wider">
                Heavy-Duty Manual Press
              </div>
            </div>
          </div>

          {/* 2. Quantity (QTY) & Package Selection with 2 for ₦45k */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-orange-600" />
                <span>Quantity (QTY) & Package Selection *</span>
              </span>
              <span className="text-[11px] font-extrabold text-orange-600">
                ⚡ Buy 2 for ₦45,000 (Save ₦5,000)
              </span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {STORE_CONFIG.pricingTiers.map(tier => {
                const isSelected = formData.quantity === tier.quantity;
                return (
                  <button
                    key={tier.quantity}
                    type="button"
                    onClick={() => handleSelectPackage(tier.quantity)}
                    className={`p-4 rounded-2xl border-2 text-left transition-all relative flex flex-col justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-orange-500 text-white border-orange-600 shadow-lg shadow-orange-500/25 scale-[1.02]'
                        : 'bg-slate-50/70 text-slate-800 border-slate-200 hover:border-orange-300 hover:bg-orange-50/30'
                    }`}
                  >
                    {tier.savings && (
                      <span className={`absolute -top-2.5 right-3 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider shadow-xs ${
                        isSelected ? 'bg-amber-300 text-slate-900' : 'bg-emerald-600 text-white'
                      }`}>
                        {tier.savings}
                      </span>
                    )}
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold uppercase tracking-wider opacity-90">
                          {tier.label}
                        </span>
                        {isSelected && (
                          <span className="w-4 h-4 rounded-full bg-white text-orange-600 flex items-center justify-center text-[10px] font-black">
                            ✓
                          </span>
                        )}
                      </div>
                      <div className="text-xl sm:text-2xl font-black mt-1">
                        ₦{tier.price.toLocaleString()}
                      </div>
                      <div className={`text-[11px] font-semibold mt-0.5 ${isSelected ? 'text-orange-100' : 'text-slate-500'}`}>
                        {tier.unitNote}
                      </div>
                    </div>

                    <div className={`mt-3 pt-2 text-[10px] font-bold border-t flex items-center justify-between ${
                      isSelected ? 'border-white/20 text-white/90' : 'border-slate-200/80 text-slate-500'
                    }`}>
                      <span>{tier.badge.replace('🔥 ', '')}</span>
                      <span>{isSelected ? 'Selected' : 'Click to select'}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
            
            {/* Field 1: Full Name */}
            <div className="space-y-1.5">
              <label htmlFor="fullName" className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-orange-600" />
                <span>Full Name *</span>
              </label>
              <input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Chukwuma Emmanuel"
                className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                  errors.fullName ? 'border-red-400 ring-1 ring-red-300' : 'border-slate-200 hover:border-orange-300'
                }`}
              />
              {errors.fullName && (
                <p className="text-xs font-medium text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.fullName}
                </p>
              )}
            </div>

            {/* Field 2: Phone Number */}
            <div className="space-y-1.5">
              <label htmlFor="phoneNumber" className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-orange-600" />
                <span>Phone Number (Call/WhatsApp) *</span>
              </label>
              <input
                id="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                placeholder="e.g. 08012345678"
                className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                  errors.phoneNumber ? 'border-red-400 ring-1 ring-red-300' : 'border-slate-200 hover:border-orange-300'
                }`}
              />
              {errors.phoneNumber && (
                <p className="text-xs font-medium text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.phoneNumber}
                </p>
              )}
            </div>

            {/* Field 3: State Selection */}
            <div className="space-y-1.5 sm:col-span-2">
              <label htmlFor="state" className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-orange-600" />
                <span>State (Delivery Location) *</span>
              </label>
              <select
                id="state"
                value={formData.state}
                onChange={e => setFormData({ ...formData, state: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 hover:border-orange-300 transition-all cursor-pointer"
              >
                {STORE_CONFIG.nigerianStates.map(st => (
                  <option key={st} value={st}>
                    {st} State {st.includes('FCT') ? '' : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 4: Delivery Address */}
            <div className="space-y-1.5 sm:col-span-2">
              <label htmlFor="deliveryAddress" className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange-600" />
                <span>Delivery Address (Street, House No, Landmark) *</span>
              </label>
              <textarea
                id="deliveryAddress"
                rows={2}
                value={formData.deliveryAddress}
                onChange={e => setFormData({ ...formData, deliveryAddress: e.target.value })}
                placeholder="e.g. 14 Admiralty Way, Lekki Phase 1 / Suite 4 Grand Plaza, Ikeja"
                className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none ${
                  errors.deliveryAddress ? 'border-red-400 ring-1 ring-red-300' : 'border-slate-200 hover:border-orange-300'
                }`}
              />
              {errors.deliveryAddress && (
                <p className="text-xs font-medium text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.deliveryAddress}
                </p>
              )}
            </div>

          </div>

          {/* Pricing Summary Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-orange-50/80 border border-orange-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 w-full sm:w-auto">
              <img
                src={PRODUCT_IMAGES.hero}
                alt="Manual Hand Fruit Press"
                className="w-14 h-14 rounded-xl object-cover border border-orange-300 shrink-0 shadow-xs"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Order Summary ({formData.quantity} unit{formData.quantity > 1 ? 's' : ''})
                </div>
                <div className="text-sm font-bold text-slate-800">
                  {formData.productName || STORE_CONFIG.productName}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-orange-200">
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold flex items-center gap-1">
                <Truck className="w-3.5 h-3.5" /> FREE DELIVERY
              </span>
              <div className="text-right">
                <span className="text-2xl sm:text-3xl font-black text-orange-700">
                  {STORE_CONFIG.currencySymbol}{calculateTotal(formData.quantity).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Guarantee Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600 font-medium pt-2">
            <span className="flex items-center gap-1 text-emerald-700 font-bold">
              <Truck className="w-4 h-4" /> Free Nationwide Delivery Included
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1 text-slate-700">
              <ShieldCheck className="w-4 h-4 text-orange-600" /> Inspected Before Dispatch
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1 text-slate-700">
              <Lock className="w-3.5 h-3.5 text-slate-500" /> Direct to {STORE_CONFIG.businessName}
            </span>
          </div>

          {/* Centered Submit Button */}
          <div className="pt-2 flex flex-col items-center justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto min-w-[280px] sm:min-w-[400px] flex items-center justify-center gap-3 px-8 py-4 sm:py-5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white text-base sm:text-lg font-black tracking-wide shadow-button-glow transition-all duration-200 active:scale-95 disabled:opacity-75 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Logging Order & Opening WhatsApp...</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5" />
                  <span>SUBMIT ORDER NOW — ₦{calculateTotal(formData.quantity).toLocaleString()}</span>
                </>
              )}
            </button>

            {/* Final sentence */}
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-3 text-center">
              ✨ After submitting, your order is recorded on Google Sheets and forwarded to WhatsApp for prompt delivery confirmation.
            </p>

            {/* Peculiar Stores Direct Assistance */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500">
              <span className="font-bold text-slate-700">{STORE_CONFIG.businessName} Helpline:</span>
              <a href={STORE_CONFIG.supportCallUrl} className="font-semibold text-orange-600 hover:underline">
                📞 Call {STORE_CONFIG.supportCallLine}
              </a>
              <span className="text-slate-300">•</span>
              <a href={STORE_CONFIG.whatsappDirectUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-600 hover:underline">
                💬 WhatsApp {STORE_CONFIG.whatsappDisplayNumber}
              </a>
            </div>
          </div>

        </form>

      </div>

      {/* Success Modal */}
      <OrderSuccessModal
        isOpen={isModalOpen}
        order={submittedOrder}
        onClose={() => setIsModalOpen(false)}
      />

    </section>
  );
};
