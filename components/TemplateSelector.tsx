import React from 'react';
import { TemplateType } from '../types';

interface Props {
  selected: TemplateType;
  onSelect: (t: TemplateType) => void;
}

const templates = [
  { id: TemplateType.WECHAT_SUCCESS, name: '微信转账', color: 'bg-green-500' },
  { id: TemplateType.WECHAT_RED_PACKET, name: '微信红包', color: 'bg-red-500' },
  { id: TemplateType.ALIPAY_SUCCESS, name: '支付宝', color: 'bg-blue-500' },
  { id: TemplateType.BANK_BOC, name: '中国银行', color: 'bg-red-700' },
  { id: TemplateType.BANK_ICBC, name: '工商银行', color: 'bg-red-600' },
  { id: TemplateType.BANK_CMB, name: '招商银行', color: 'bg-red-500' },
  { id: TemplateType.BANK_CCB, name: '建设银行', color: 'bg-blue-800' },
  { id: TemplateType.BANK_ABC, name: '农业银行', color: 'bg-emerald-600' },
];

const TemplateSelector: React.FC<Props> = ({ selected, onSelect }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">选择模板</h3>
      <div className="grid grid-cols-4 gap-2">
        {templates.map((t) => (
          <button
            key={t.id}
            onClick={() => onSelect(t.id)}
            className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all ${
              selected === t.id 
                ? 'ring-2 ring-offset-1 ring-indigo-600 bg-gray-50' 
                : 'hover:bg-gray-50'
            }`}
          >
            <div className={`w-8 h-8 rounded-full ${t.color} text-white flex items-center justify-center text-xs font-bold mb-1 shadow-sm`}>
              {t.name[0]}
            </div>
            <span className="text-[10px] text-gray-600 font-medium truncate w-full text-center">{t.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;