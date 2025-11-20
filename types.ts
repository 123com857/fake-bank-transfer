export enum TemplateType {
  WECHAT_SUCCESS = 'wechat_success',
  WECHAT_RED_PACKET = 'wechat_red_packet',
  ALIPAY_SUCCESS = 'alipay_success',
  BANK_BOC = 'bank_boc', // China Bank
  BANK_ICBC = 'bank_icbc', // ICBC
  BANK_CMB = 'bank_cmb', // Merchants
  BANK_CCB = 'bank_ccb', // Construction
  BANK_ABC = 'bank_abc', // Agricultural
}

export interface TransactionData {
  amount: string;
  receiver: string;
  senderTail: string; // Last 4 digits
  note: string;
  timestamp: string; // ISO string or formatted string
  transactionId: string;
  batteryLevel: number;
  signalStrength: number; // 1-4
}

export interface BankConfig {
  id: TemplateType;
  name: string;
  color: string;
  icon: React.ReactNode;
  bgStart?: string;
  bgEnd?: string;
}