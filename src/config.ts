/**
 * ============================================================================
 * 🛠️ STORE & FUNNEL CONFIGURATION SETTINGS
 * ============================================================================
 * 
 * All settings, phone numbers, endpoints, and credentials for this landing page
 * are configured here in ONE place.
 * 
 * You do not need to hunt through code files to change prices, phone numbers,
 * or where customer orders are sent.
 */

export const STORE_CONFIG = {
  /**
   * 🏪 BUSINESS DETAILS
   */
  businessName: 'Peculiar Stores',
  businessLogoUrl: 'https://i.ibb.co/27QcVZr6/Logo-4.png',
  businessLogoPageUrl: 'https://ibb.co/7J5rMkDz',
  supportCallLine: '08068515242',
  supportCallUrl: 'tel:08068515242',

  /**
   * 📱 WHATSAPP PHONE NUMBER
   * The Nigerian phone number where customer orders are sent for confirmation.
   * Default: '08068515242'
   * Note: The international WhatsApp format is '2348068515242' (without the leading 0).
   */
  whatsappNumber: '2348068515242',
  whatsappDisplayNumber: '08068515242',
  whatsappDirectUrl: 'https://wa.me/2348068515242',

  /**
   * 📊 GOOGLE SPREADSHEET / WEBHOOK URL
   * Where order data is sent via HTTP POST as JSON upon customer form submission.
   * 
   * How to get this:
   * 1. Create a Google Sheet.
   * 2. Set up a free Google Apps Script web app or webhook service (e.g. Zapier, Make, SheetDB).
   * 3. Paste your Webhook / Web App URL below between the quotes.
   * 
   * (If left blank or placeholder, orders will still smoothly redirect to WhatsApp without breaking).
   */
  orderWebhookUrl: 'https://script.google.com/macros/s/AKfycbxdp5q2Vud-U6GxvpDfTpkqPEmc6aotTJE7FFLuAte2q7Sx0QRnYBaIg8jbpv-Pmt1K/exec',

  /**
   * 💰 PRODUCT PRICING & OFFER
   * Base prices: 1 unit for ₦25,000 | 2 units for ₦45,000 (Save ₦5,000)
   */
  productName: 'Manual Hand Fruit Press',
  unitPriceNaira: 25000,
  twoUnitsPriceNaira: 45000,
  currencySymbol: '₦',
  bonusText: 'FREE DELIVERY NATIONWIDE',

  pricingTiers: [
    {
      quantity: 1,
      label: '1 Unit',
      price: 25000,
      savings: null,
      popular: false,
      badge: 'Single Press',
      unitNote: '₦25,000 / unit'
    },
    {
      quantity: 2,
      label: '2 Units',
      price: 45000,
      savings: 'SAVE ₦5,000',
      popular: true,
      badge: '🔥 BEST DEAL • BUY 2 FOR ₦45,000',
      unitNote: '₦22,500 / unit'
    },
    {
      quantity: 3,
      label: '3 Units',
      price: 65000,
      savings: 'SAVE ₦10,000',
      popular: false,
      badge: 'Family / Commercial Pack',
      unitNote: '₦21,666 / unit'
    }
  ],

  calculateTotalPrice: (quantity: number): number => {
    if (quantity === 1) return 25000;
    if (quantity === 2) return 45000;
    if (quantity === 3) return 65000;
    // For 4+, calculate base 2 units (45,000) + additional units at 20,000 each
    return 45000 + (quantity - 2) * 20000;
  },

  /**
   * 📦 NIGERIAN STATES LIST
   * Complete list of all 36 States + FCT for frictionless delivery address selection.
   */
  nigerianStates: [
    'Abia', 'Abuja (FCT)', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa',
    'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti',
    'Enugu', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina',
    'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun',
    'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba',
    'Yobe', 'Zamfara'
  ],

  /**
   * 💬 WHATSAPP ORDER MESSAGE BUILDER
   * Formats the order into an easy-to-read structured message for direct WhatsApp chat.
   */
  generateWhatsAppMessage: (order: {
    fullName: string;
    phone: string;
    address: string;
    state: string;
    quantity: number;
    totalAmount: number;
    productName?: string;
  }) => {
    const product = order.productName || STORE_CONFIG.productName;
    const dealNote = order.quantity === 2 ? ' (🔥 Buy 2 for ₦45k Combo Deal Applied)' : '';
    return encodeURIComponent(
      `Hello Peculiar Stores! I want to confirm my order for the ${product}.\n\n` +
      `📦 *ORDER DETAILS:*\n` +
      `• *Product:* ${product}\n` +
      `• *Quantity:* ${order.quantity} unit(s)${dealNote}\n` +
      `• *Customer Name:* ${order.fullName}\n` +
      `• *Phone Number:* ${order.phone}\n` +
      `• *Delivery Address:* ${order.address}\n` +
      `• *State:* ${order.state}\n` +
      `• *Total Price:* ₦${order.totalAmount.toLocaleString()} (FREE Nationwide Delivery)\n\n` +
      `Please confirm my delivery details and send dispatch arrangements. Thank you!`
    );
  }
};
