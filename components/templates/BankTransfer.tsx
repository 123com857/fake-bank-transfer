import React from 'react';
import { TransactionData, TemplateType } from '../../types';
import { formatMoney } from '../../services/utils';
import StatusBar from '../StatusBar';
import { ChevronLeftIcon, MoreDotsIcon } from '../Icons';

const getBankTheme = (type: TemplateType) => {
    switch(type) {
        case TemplateType.BANK_ICBC: // Industrial
            return { color: '#C8102E', name: '中国工商银行', logoText: '工' };
        case TemplateType.BANK_BOC: // China
            return { color: '#B71C1C', name: '中国银行', logoText: '中' };
        case TemplateType.BANK_CMB: // Merchants
            return { color: '#C8102E', name: '招商银行', logoText: '招' };
        case TemplateType.BANK_CCB: // Construction
            return { color: '#094F98', name: '中国建设银行', logoText: '建' };
        case TemplateType.BANK_ABC: // Agri
            return { color: '#00917A', name: '中国农业银行', logoText: '农' };
        default:
            return { color: '#C8102E', name: '银行', logoText: '银' };
    }
}

const BankTransfer: React.FC<{ data: TransactionData; type: TemplateType }> = ({ data, type }) => {
  const theme = getBankTheme(type);

  return (
    <div className="relative w-full h-full bg-[#F5F6F7] flex flex-col font-sans overflow-hidden select-none">
      <StatusBar theme="light" batteryLevel={data.batteryLevel} />
      
      {/* Header */}
      <div className="flex items-center justify-between h-11 px-3 bg-white">
         <ChevronLeftIcon />
         <span className="text-[17px] font-medium">转账汇款</span>
         <MoreDotsIcon />
      </div>

      {/* Main Card */}
      <div className="m-4 bg-white rounded-lg shadow-sm p-6 flex flex-col items-center">
         <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold mb-3" style={{ backgroundColor: theme.color }}>
            {theme.logoText}
         </div>
         <span className="text-gray-500 text-sm mb-2">向{data.receiver}转账</span>
         <div className="flex items-baseline gap-1 mb-8">
            <span className="text-2xl font-bold">¥</span>
            <span className="text-4xl font-bold font-roboto">{formatMoney(data.amount)}</span>
         </div>

         <div className="w-full space-y-4">
             <div className="flex justify-between">
                 <span className="text-gray-500 text-sm">收款人</span>
                 <span className="text-gray-800 text-sm">{data.receiver}</span>
             </div>
             <div className="flex justify-between">
                 <span className="text-gray-500 text-sm">收款账号</span>
                 <span className="text-gray-800 text-sm">6222 **** **** {Math.floor(Math.random()*9000+1000)}</span>
             </div>
             <div className="flex justify-between">
                 <span className="text-gray-500 text-sm">付款账号</span>
                 <span className="text-gray-800 text-sm">**** {data.senderTail}</span>
             </div>
             {data.note && (
                 <div className="flex justify-between">
                     <span className="text-gray-500 text-sm">附言</span>
                     <span className="text-gray-800 text-sm">{data.note}</span>
                 </div>
             )}
             <div className="flex justify-between">
                 <span className="text-gray-500 text-sm">交易时间</span>
                 <span className="text-gray-800 text-sm">{data.timestamp}</span>
             </div>
         </div>
      </div>

      <div className="mt-4 px-4 flex items-center gap-2 justify-center text-gray-400 text-xs">
         <div className="w-3 h-3 rounded-full bg-gray-300 flex items-center justify-center text-[8px] text-white">✔</div>
         <span>转账已受理，预计2小时内到账</span>
      </div>
    </div>
  );
};

export default BankTransfer;