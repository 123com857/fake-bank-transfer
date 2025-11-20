import React from 'react';
import { TransactionData } from '../../types';
import { formatMoney } from '../../services/utils';
import StatusBar from '../StatusBar';
import { CheckIcon } from '../Icons';

const WeChatTransfer: React.FC<{ data: TransactionData }> = ({ data }) => {
  return (
    <div className="relative w-full h-full bg-white flex flex-col font-sans overflow-hidden select-none">
      <StatusBar theme="dark" batteryLevel={data.batteryLevel} />
      
      {/* Navigation Bar */}
      <div className="h-12 w-full flex items-center px-4 mb-4">
        <span className="text-black text-lg" onClick={(e) => e.preventDefault()}>关闭</span>
      </div>

      <div className="flex flex-col items-center px-6">
        <div className="w-16 h-16 rounded-full bg-[#2BAD13] flex items-center justify-center mb-6 shadow-sm">
            <CheckIcon className="w-10 h-10 text-white" />
        </div>
        
        <h2 className="text-[#191919] text-[22px] font-medium mb-1">
          支付成功
        </h2>
        
        {/* WeChat doesn't always show amount huge here, but for screenshot fun we emphasize it if it's a "transfer" context, 
            or strictly follow the "Transfer Details" page. This looks like the Result Page. */}
        <div className="mt-8 w-full border-t border-gray-100 pt-8 pb-4">
             <div className="flex justify-between items-start py-3">
                <span className="text-gray-500 text-[15px]">转账金额</span>
                <span className="text-black text-[15px]">¥{formatMoney(data.amount)}</span>
             </div>
             <div className="flex justify-between items-start py-3">
                <span className="text-gray-500 text-[15px]">收款人</span>
                <span className="text-black text-[15px]">{data.receiver}</span>
             </div>
             {data.note && (
                <div className="flex justify-between items-start py-3">
                    <span className="text-gray-500 text-[15px]">转账备注</span>
                    <span className="text-black text-[15px] max-w-[60%] text-right break-words">{data.note}</span>
                </div>
             )}
        </div>

        <div className="absolute bottom-20 w-full px-6">
            <div className="w-full h-[46px] rounded-[6px] bg-white border border-[#d0d0d0] flex items-center justify-center text-[#191919] font-medium text-[17px]">
                完成
            </div>
        </div>
      </div>
    </div>
  );
};

export const WeChatRedPacket: React.FC<{ data: TransactionData }> = ({ data }) => {
    return (
        <div className="relative w-full h-full bg-[#f1f1f1] flex flex-col font-sans overflow-hidden select-none">
            <div className="absolute top-0 left-0 w-full h-[350px] bg-[#d95940] rounded-b-[50%_20px]"></div>
            <div className="relative z-10">
                 <StatusBar theme="light" batteryLevel={data.batteryLevel} />
                 <div className="h-11 flex items-center px-4 justify-between text-[#f5d7cd]">
                    <svg width="12" height="20" viewBox="0 0 12 20" fill="none"><path d="M10 2L2 10L10 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square"/></svg>
                    <span className="font-medium text-[17px]">红包详情</span>
                    <div className="w-4"></div>
                 </div>

                 <div className="flex flex-col items-center mt-8">
                    <div className="w-16 h-16 rounded bg-yellow-100 mb-3 overflow-hidden border-2 border-[#f7dca8]">
                        {/* Avatar Placeholder */}
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 text-xs">
                            头像
                        </div>
                    </div>
                    <h3 className="text-[#fdf1cd] text-lg font-medium mb-1">{data.receiver}的红包</h3>
                    <p className="text-[#f7dca8] text-xs opacity-80">{data.note || "恭喜发财，大吉大利"}</p>
                    
                    <div className="mt-10 flex items-baseline text-[#dfae71]">
                        <span className="text-5xl font-semibold text-[#dfae71]">{formatMoney(data.amount)}</span>
                        <span className="text-sm ml-1">元</span>
                    </div>
                    
                    <div className="mt-2 text-[#f5d7cd] text-xs">
                        已存入零钱，可直接使用
                    </div>
                 </div>
            </div>
            
            <div className="absolute bottom-0 w-full bg-white h-[45%] z-0"></div>
        </div>
    )
}

export default WeChatTransfer;