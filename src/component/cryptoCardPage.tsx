'use client';

import React from 'react';

interface ModelCardProps {
  icon: React.ReactNode;
  title: string;
  symbol: string;
  time: string;
  percentage: number;
  graphImage: string; 
}

const ModelCard: React.FC<ModelCardProps> = ({
  icon,
  title,
  symbol,
  time,
  percentage,
  graphImage,
}) => {
  const isPositive = percentage >= 0;

  return (
    <div
      className="rounded-2xl bg-[#1b1f27] p-5 text-white"
      style={{ width: 258 }}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#2a2f3a]">
              {icon}
            </div>

            <div>
              <p className="text-md font-semibold">{title}</p>
              <p className="text-xs text-white">{symbol}</p>
            </div>
          </div>

          <p className="text-[21px] font-semibold">{time}</p>

          <p
            className={`text-sm font-semibold ${
              isPositive ? 'text-[#06D6A0]' : 'text-[#F46D22]'
            }`}
          >
            {isPositive ? '+' : ''}
            {percentage}%
          </p>
        </div>

        <div className="flex flex-col items-end justify-between gap-2">
          <div>
            {isPositive ? (
              <img src="/arrow-up.svg" alt="arrow-up" className='mt-2' />
            ) : (
              <img src="/arrow-down.svg" alt="arrow-down" className='mt-2' />
            )}
          </div>

          <div className="w-20 h-10">
            <img
              src={graphImage}
              alt="graph"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
