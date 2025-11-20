import React, { useEffect, useState } from 'react';
import { WifiIcon, SignalIcon, BatteryIcon } from './Icons';
import { getCurrentTime } from '../services/utils';

interface StatusBarProps {
  theme: 'light' | 'dark';
  batteryLevel?: number;
}

const StatusBar: React.FC<StatusBarProps> = ({ theme, batteryLevel = 100 }) => {
  const [time, setTime] = useState(getCurrentTime());
  
  // Update time every minute to keep it synced in preview if user doesn't override
  useEffect(() => {
    const interval = setInterval(() => setTime(getCurrentTime()), 60000);
    return () => clearInterval(interval);
  }, []);

  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const fillClass = theme === 'dark' ? 'fill-white' : 'fill-black';

  return (
    <div className={`w-full h-12 flex justify-between items-center px-6 pb-1 pt-3 text-[15px] font-semibold tracking-wide z-20 ${textColor}`}>
      <div className="w-1/3 flex items-center justify-start pl-2">
        <span>{time}</span>
      </div>
      <div className="w-1/3 flex justify-center">
        {/* Dynamic Island area - invisible but takes space */}
        <div className="w-28 h-7 bg-black rounded-3xl opacity-0"></div>
      </div>
      <div className="w-1/3 flex items-center justify-end gap-2 pr-2">
        <div className={`scale-90 ${theme === 'dark' ? '[&_path]:fill-white [&_rect]:fill-white' : ''}`}>
          <SignalIcon />
        </div>
        <div className={`scale-90 ${theme === 'dark' ? '[&_path]:fill-white' : ''}`}>
          <WifiIcon />
        </div>
        <div className={`scale-90 ${theme === 'dark' ? '[&_div]:border-white [&_div_div]:bg-white' : ''}`}>
          <BatteryIcon level={batteryLevel} />
        </div>
      </div>
    </div>
  );
};

export default StatusBar;