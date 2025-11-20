import React, { useState, useRef, useCallback } from 'react';
import html2canvas from 'html2canvas';
import { TemplateType, TransactionData } from './types';
import { generateTransactionId, formatDateTime } from './services/utils';
import TemplateSelector from './components/TemplateSelector';
import GeneratorForm from './components/GeneratorForm';
import WeChatTransfer, { WeChatRedPacket } from './components/templates/WeChatTransfer';
import AlipayTransfer from './components/templates/AlipayTransfer';
import BankTransfer from './components/templates/BankTransfer';

// Default data
const INITIAL_DATA: TransactionData = {
  amount: '520.00',
  receiver: '张晓丽',
  senderTail: '8888',
  note: '爱你一生一世',
  timestamp: formatDateTime(),
  transactionId: generateTransactionId(),
  batteryLevel: 95,
  signalStrength: 4,
};

const App: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>(TemplateType.WECHAT_SUCCESS);
  const [data, setData] = useState<TransactionData>(INITIAL_DATA);
  const previewRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = useCallback(async () => {
    if (!previewRef.current) return;
    setIsGenerating(true);
    
    try {
      // Wait for any font loading or rendering
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const canvas = await html2canvas(previewRef.current, {
        scale: 2, // Retina quality
        useCORS: true,
        backgroundColor: null, // Allow transparent if needed, though usually full bg
        logging: false,
      });

      const link = document.createElement('a');
      link.download = `transfer_${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error("Generation failed", err);
      alert("生成图片失败，请重试");
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case TemplateType.WECHAT_SUCCESS:
        return <WeChatTransfer data={data} />;
      case TemplateType.WECHAT_RED_PACKET:
        return <WeChatRedPacket data={data} />;
      case TemplateType.ALIPAY_SUCCESS:
        return <AlipayTransfer data={data} />;
      case TemplateType.BANK_ICBC:
      case TemplateType.BANK_BOC:
      case TemplateType.BANK_CMB:
      case TemplateType.BANK_CCB:
      case TemplateType.BANK_ABC:
        return <BankTransfer data={data} type={selectedTemplate} />;
      default:
        return <div className="flex items-center justify-center h-full">模板开发中...</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              ¥
            </div>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">MoneyMeme <span className="text-indigo-600">Generator</span></h1>
          </div>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer"
            className="text-sm text-gray-500 hover:text-gray-900 font-medium"
          >
            GitHub
          </a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          
          {/* Left Column: Controls */}
          <div className="w-full lg:w-[400px] flex flex-col gap-6 order-2 lg:order-1">
            <TemplateSelector selected={selectedTemplate} onSelect={setSelectedTemplate} />
            <GeneratorForm data={data} onChange={setData} />
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 text-yellow-800 text-sm">
              <strong>免责声明：</strong> 本工具仅供娱乐、整蛊朋友、拍摄短视频道具使用。严禁用于制造虚假转账记录进行诈骗、逃避债务等违法行为。开发者不承担任何因不当使用产生的法律责任。
            </div>

            <button
              onClick={handleDownload}
              disabled={isGenerating}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all transform active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2 text-lg"
            >
              {isGenerating ? (
                <>
                   <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                   生成中...
                </>
              ) : (
                <>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  生成高清截图
                </>
              )}
            </button>
          </div>

          {/* Right Column: Preview */}
          <div className="w-full lg:w-auto flex justify-center order-1 lg:order-2 lg:sticky lg:top-24">
            <div className="relative">
                {/* Phone Bezel */}
                <div className="relative w-[375px] h-[812px] bg-black rounded-[50px] p-3 shadow-2xl ring-8 ring-gray-900">
                    {/* Screen Container */}
                    <div className="w-full h-full bg-white rounded-[40px] overflow-hidden relative">
                        {/* Capture Area */}
                        <div ref={previewRef} className="w-full h-full">
                            {renderTemplate()}
                        </div>
                    </div>
                    
                    {/* Hardware Buttons (Decor) */}
                    <div className="absolute top-28 -left-2 w-1 h-8 bg-gray-800 rounded-l"></div>
                    <div className="absolute top-40 -left-2 w-1 h-12 bg-gray-800 rounded-l"></div>
                    <div className="absolute top-28 -right-2 w-1 h-20 bg-gray-800 rounded-r"></div>
                </div>
                <p className="text-center text-gray-400 text-xs mt-4">预览图仅供参考，下载后无边框</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;