import React from 'react';
import { TransactionData } from '../types';
import { generateTransactionId, getCurrentTime, formatDateTime } from '../services/utils';

interface Props {
  data: TransactionData;
  onChange: (data: TransactionData) => void;
}

const PRESET_NOTES = [
  "分手费", "精神损失费", "奶茶钱", "房租", 
  "江湖救急", "封口费", "买包包", "工资",
  "辛苦费", "还钱", "中奖分红"
];

const PRESET_NAMES = ["张晓丽", "李强", "王阿姨", "房东", "宝贝", "老公"];

const GeneratorForm: React.FC<Props> = ({ data, onChange }) => {
  
  const handleChange = (field: keyof TransactionData, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const refreshTransactionId = () => {
    handleChange('transactionId', generateTransactionId());
  };

  const setNow = () => {
    handleChange('timestamp', formatDateTime());
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-5">
      <h3 className="text-lg font-bold text-gray-800">交易详情</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">收款金额 (元)</label>
          <input
            type="number"
            value={data.amount}
            onChange={(e) => handleChange('amount', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
            placeholder="9999.00"
          />
          <div className="flex gap-1 mt-1">
            {[520, 1314, 8888].map(amt => (
              <button key={amt} onClick={() => handleChange('amount', amt.toString())} className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-600 hover:bg-gray-200">
                {amt}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">收款人姓名</label>
          <div className="relative">
             <input
                type="text"
                value={data.receiver}
                onChange={(e) => handleChange('receiver', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
             />
             <select 
                onChange={(e) => handleChange('receiver', e.target.value)}
                className="absolute right-0 top-0 h-full w-6 opacity-0 cursor-pointer"
             >
                 {PRESET_NAMES.map(n => <option key={n} value={n}>{n}</option>)}
             </select>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1">转账备注 (选填)</label>
        <div className="flex gap-2 mb-2 overflow-x-auto pb-1 no-scrollbar">
            {PRESET_NOTES.map(note => (
                <button 
                    key={note}
                    onClick={() => handleChange('note', note)}
                    className="whitespace-nowrap text-xs px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100 hover:bg-indigo-100"
                >
                    {note}
                </button>
            ))}
        </div>
        <input
          type="text"
          value={data.note}
          onChange={(e) => handleChange('note', e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md text-sm"
          placeholder="自定义备注..."
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
         <div>
             <label className="block text-xs font-medium text-gray-500 mb-1">交易时间</label>
             <div className="flex gap-1">
                <input 
                    type="text" 
                    value={data.timestamp} 
                    onChange={(e) => handleChange('timestamp', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md text-xs"
                />
                <button onClick={setNow} className="px-2 bg-gray-100 rounded border border-gray-200 text-xs">现</button>
             </div>
         </div>
         <div>
             <label className="block text-xs font-medium text-gray-500 mb-1">付款卡尾号 (4位)</label>
             <input 
                type="text" 
                maxLength={4}
                value={data.senderTail}
                onChange={(e) => handleChange('senderTail', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
             />
         </div>
      </div>

      <div>
         <label className="block text-xs font-medium text-gray-500 mb-1">交易单号 (自动生成)</label>
         <div className="flex gap-2">
             <input 
                type="text" 
                value={data.transactionId}
                readOnly
                className="w-full p-2 bg-gray-50 border border-gray-200 rounded-md text-xs text-gray-500"
             />
             <button onClick={refreshTransactionId} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-xs font-medium text-gray-600">刷新</button>
         </div>
      </div>
      
      <div className="pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-gray-500">电量 ({data.batteryLevel}%)</label>
            <input 
                type="range" 
                min="1" max="100" 
                value={data.batteryLevel} 
                onChange={(e) => handleChange('batteryLevel', parseInt(e.target.value))}
                className="w-32"
            />
        </div>
      </div>
    </div>
  );
};

export default GeneratorForm;