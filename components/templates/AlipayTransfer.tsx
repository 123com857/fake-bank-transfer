import React from 'react';
import { TransactionData } from '../../types';
import { formatMoney } from '../../services/utils';
import StatusBar from '../StatusBar';
import { CheckIcon, ChevronLeftIcon } from '../Icons';

const AlipayTransfer: React.FC<{ data: TransactionData }> = ({ data }) => {
  return (
    <div className="relative w-full h-full bg-white flex flex-col font-sans overflow-hidden select-none">
      <StatusBar theme="light" batteryLevel={data.batteryLevel} />
      
      <div className="flex items-center justify-between h-11 px-3 border-b border-gray-50">
        <div className="flex items-center text-[#1677FF]">
            <ChevronLeftIcon color="#1677FF" />
            <span className="text-[17px] ml-[-2px]">账单详情</span>
        </div>
        <div className="w-6"></div>
      </div>

      <div className="flex flex-col px-6 pt-8">
        <div className="flex items-center gap-3 mb-2">
             <div className="w-9 h-9 rounded-full bg-[#1677FF] flex items-center justify-center overflow-hidden">
                {/* Generic avatar or user initial */}
                 <span className="text-white text-xs font-bold">{data.receiver[0]}</span>
             </div>
             <span className="text-[15px] text-gray-800">{data.receiver}</span>
        </div>

        <div className="flex flex-col items-start mt-2 mb-8">
            <span className="text-[36px] font-bold text-[#191919] -tracking-[0.03em] font-roboto">
                -{formatMoney(data.amount)}
            </span>
            <span className="text-[#1677FF] text-[13px] mt-1">交易成功</span>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-100 mb-6"></div>

        <div className="space-y-5">
            <div className="flex justify-between">
                <span className="text-gray-500 text-[14px]">付款方式</span>
                <span className="text-[#191919] text-[14px]">余额宝</span>
            </div>
            {data.note && (
                <div className="flex justify-between">
                    <span className="text-gray-500 text-[14px]">转账备注</span>
                    <span className="text-[#191919] text-[14px]">{data.note}</span>
                </div>
            )}
            <div className="flex justify-between">
                <span className="text-gray-500 text-[14px]">创建时间</span>
                <span className="text-[#191919] text-[14px]">{data.timestamp}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-gray-500 text-[14px]">订单号</span>
                <div className="flex items-center gap-1">
                    <span className="text-[#191919] text-[14px]">{data.transactionId}</span>
                    <span className="text-[10px] border border-gray-300 rounded px-1 text-gray-500">复制</span>
                </div>
            </div>
             <div className="flex justify-between">
                <span className="text-gray-500 text-[14px]">对方账户</span>
                <span className="text-[#191919] text-[14px]">138****8888</span>
            </div>
        </div>

        {/* Footer Links */}
        <div className="mt-auto pt-12 pb-8 flex flex-col gap-3">
            <div className="flex justify-between items-center py-2 border-t border-gray-100 pt-4">
                <span className="text-[#191919] text-[15px]">标签和备注</span>
                <span className="text-gray-400 text-[18px]">&gt;</span>
            </div>
             <div className="flex justify-between items-center py-2 border-t border-gray-100 pt-4">
                <span className="text-[#191919] text-[15px]">申请电子回单</span>
                <span className="text-gray-400 text-[18px]">&gt;</span>
            </div>
             <div className="flex justify-between items-center py-2 border-t border-gray-100 pt-4">
                <span className="text-[#191919] text-[15px]">对此订单有疑问</span>
                <span className="text-gray-400 text-[18px]">&gt;</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AlipayTransfer;