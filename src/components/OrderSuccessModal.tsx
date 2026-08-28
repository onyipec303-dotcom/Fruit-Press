import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STORE_CONFIG } from '../config';
import { SubmittedOrder } from '../types';
import { CheckCircle2, MessageCircle, Truck, Package, Phone, MapPin, Sparkles, X } from 'lucide-react';

interface OrderSuccessModalProps {
  order: SubmittedOrder | null;
  isOpen: boolean;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ order, isOpen, onClose }) => {
  if (!isOpen || !order) return null;

  const handleContinueWhatsApp = () => {
    window.open(order.whatsAppLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-sm">
        
        {/* Modal Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Content Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-lg rounded-3xl bg-white border-2 border-orange-200 p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Success Header Animation */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <span className="text-xs font-black tracking-widest text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full">
              ORDER RECEIVED
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              Thank You, {order.fullName.split(' ')[0]}!
            </h3>

            <p className="text-slate-600 text-sm mt-1">
              Your order details have been recorded with <strong>{STORE_CONFIG.businessName}</strong>. One final step: confirm your order on WhatsApp.
            </p>
          </div>

          {/* Order Summary Receipt Box */}
          <div className="rounded-2xl bg-orange-50/70 border border-orange-200/80 p-4 sm:p-5 space-y-3 mb-6">
            <div className="flex items-center justify-between text-xs text-slate-500 font-bold border-b border-orange-200/60 pb-2">
              <span>STORE & ORDER REF</span>
              <span className="font-mono text-slate-800">{STORE_CONFIG.businessName} • {order.id}</span>
            </div>

            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                  <Package className="w-4 h-4 text-orange-600" /> Product:
                </span>
                <span className="font-bold text-slate-900 text-right">
                  {order.productName || STORE_CONFIG.productName}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                  <Package className="w-4 h-4 text-orange-600" /> Quantity:
                </span>
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <span>{order.quantity} Unit{order.quantity > 1 ? 's' : ''}</span>
                  {order.quantity === 2 && (
                    <span className="text-[10px] bg-amber-300 text-slate-900 font-black px-2 py-0.5 rounded-full">
                      BUY 2 DEAL
                    </span>
                  )}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                  <Phone className="w-4 h-4 text-orange-600" /> Phone:
                </span>
                <span className="font-semibold text-slate-800">{order.phoneNumber}</span>
              </div>

              <div className="flex items-start justify-between">
                <span className="flex items-center gap-1.5 text-slate-600 font-medium shrink-0">
                  <MapPin className="w-4 h-4 text-orange-600" /> Delivery:
                </span>
                <span className="font-semibold text-slate-800 text-right max-w-[240px] text-xs sm:text-sm">
                  {order.deliveryAddress}, {order.state} State
                </span>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-orange-200/60">
                <span className="font-bold text-slate-900">Total Amount:</span>
                <span className="text-lg font-black text-orange-700">
                  {STORE_CONFIG.currencySymbol}{order.totalAmount.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100/60 py-1.5 rounded-lg">
                <Truck className="w-4 h-4" />
                <span>FREE DELIVERY NATIONWIDE INCLUDED</span>
              </div>
            </div>
          </div>

          {/* Primary Action: Direct WhatsApp Redirect Button */}
          <div className="space-y-3">
            <button
              onClick={handleContinueWhatsApp}
              type="button"
              className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              <span>Continue on WhatsApp ({STORE_CONFIG.whatsappDisplayNumber})</span>
            </button>

            <p className="text-center text-xs text-slate-500 leading-normal">
              Clicking above opens WhatsApp with your pre-filled order. The seller will confirm your delivery schedule and payment arrangements directly.
            </p>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};
