import React from 'react';

export const WifiIcon = () => (
  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M17.6343 3.31263C17.5868 3.25438 13.9552 -1.08328 8.99998 -1.08328C4.04479 -1.08328 0.413131 3.25438 0.365646 3.31263C0.228573 3.48073 0.253583 3.72826 0.421688 3.86533C0.589793 4.00241 0.837326 3.9774 0.974399 3.80929C0.985933 3.79515 4.36892 -0.299946 8.99998 -0.299946C13.631 -0.299946 17.014 3.79515 17.0256 3.80929C17.1626 3.9774 17.4102 4.00241 17.5783 3.86533C17.7464 3.72826 17.7714 3.48073 17.6343 3.31263Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M15.0844 6.44059C15.0369 6.38234 12.3133 3.12909 8.99998 3.12909C5.68662 3.12909 2.96305 6.38234 2.91556 6.44059C2.77849 6.60869 2.8035 6.85622 2.9716 6.9933C3.13971 7.13037 3.38724 7.10536 3.52431 6.93726C3.53585 6.92312 6.07312 3.91242 8.99998 3.91242C11.9268 3.91242 14.4641 6.92312 14.4756 6.93726C14.6127 7.10536 14.8602 7.13037 15.0283 6.9933C15.1965 6.85622 15.2215 6.60869 15.0844 6.44059Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.5343 9.5685C12.4868 9.51026 10.6715 7.34142 8.99998 7.34142C7.32846 7.34142 5.51309 9.51026 5.46561 9.5685C5.32853 9.73661 5.35354 9.98414 5.52165 10.1212C5.68975 10.2583 5.93728 10.2333 6.07436 10.0652C6.08589 10.051 7.77733 8.12476 8.99998 8.12476C10.2226 8.12476 11.9141 10.051 11.9256 10.0652C12.0627 10.2333 12.3102 10.2583 12.4783 10.1212C12.6464 9.98414 12.6714 9.73661 12.5343 9.5685Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M10.0744 12.5864C9.94309 12.4253 9.5354 11.9238 8.99998 11.9238C8.46456 11.9238 8.05686 12.4253 7.92561 12.5864C7.78853 12.7545 7.81354 13.002 7.98165 13.1391C8.14975 13.2762 8.39728 13.2512 8.53436 13.0831C8.57299 13.0357 8.76142 12.7071 8.99998 12.7071C9.23853 12.7071 9.42697 13.0357 9.4656 13.0831C9.60267 13.2512 9.8502 13.2762 10.0183 13.1391C10.1864 13.002 10.2114 12.7545 10.0744 12.5864Z" fill="black"/>
  </svg>
);

export const SignalIcon = () => (
  <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.5" y="8" width="3" height="4" rx="1" fill="black"/>
    <rect x="6" y="5.5" width="3" height="6.5" rx="1" fill="black"/>
    <rect x="10.5" y="3" width="3" height="9" rx="1" fill="black"/>
    <rect x="15" width="3" height="12" rx="1" fill="black"/>
  </svg>
);

export const BatteryIcon = ({ level }: { level: number }) => (
  <div className="flex items-center gap-0.5">
    <div className="relative w-6 h-3 border border-black/40 rounded-sm p-0.5">
      <div 
        className={`h-full rounded-[1px] ${level < 20 ? 'bg-red-500' : 'bg-black'}`} 
        style={{ width: `${Math.max(5, Math.min(100, level))}%` }}
      />
    </div>
    <div className="w-0.5 h-1.5 bg-black/40 rounded-r-sm" />
  </div>
);

export const CheckIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export const ChevronLeftIcon = ({ color = "black" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MoreDotsIcon = ({ color = "black" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="2" fill={color}/>
    <circle cx="19" cy="12" r="2" fill={color}/>
    <circle cx="5" cy="12" r="2" fill={color}/>
  </svg>
);