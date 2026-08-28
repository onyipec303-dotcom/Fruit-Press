export interface OrderFormData {
  fullName: string;
  phoneNumber: string;
  deliveryAddress: string;
  state: string;
  quantity: number;
  productName?: string;
}

export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface SubmittedOrder extends OrderFormData {
  id: string;
  createdAt: string;
  totalAmount: number;
  whatsAppLink: string;
  productName: string;
}

export type FruitOption = 'orange' | 'lemon' | 'lime';
