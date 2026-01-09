'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ModelCard from '@/component/cryptoCardPage';

const BestPerformingModels = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState('All time');

  const timeOptions = ['All time', '60d', '45d', '30d', '15d', '7d', '1d'];

  return (
    <section className="text-white max-w-350">
      <div className="mb-12 mt-4 flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Best performing models</h2>

        <div className="flex items-center gap-6">
          <span className="text-sm font-medium text-[#E4E4E4] cursor-pointer">
            View All
          </span>

          <div className="relative ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between bg-[#06D6A0] gap-3 min-w-27.5 rounded-lg px-3 py-2.5 text-sm font-bold text-[#E4E4E4]"
            >
              {selectedTime}
              <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
              <div className="absolute  mt-2 w-full overflow-hidden rounded-lg bg-[#D9D9D9] ">
                {timeOptions.map((option) => (
                  <button
                    key={option}
                    className={`w-full px-4 py-2 text-center text-sm ${
                      selectedTime === option ? 'text-white bg-[#06D6A0]  font-bold' : 'hover:bg-[#06D6A0] hover:text-white hover:font-normal text-[#676767]'
                    }`}
                    onClick={() => {
                      setSelectedTime(option);
                      setIsOpen(false);
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ModelCard
          icon={<img src="/bitcoin-(btc).svg" alt="bitcoin" />}
          title="ZTI-07867"
          symbol="BTC"
          time="1h"
          percentage={0.25}
          graphImage="/bluegraph.svg"
        />

        <ModelCard
          icon={<img src="/litecoin(ltc).svg" alt="litecoin" />}
          title="ZTI-07867"
          symbol="ITC"
          time="6h"
          percentage={0.25}
          graphImage="/lightblue.svg"
        />

        <ModelCard
          icon={<img src="/ethereum-(eth).svg" alt="ethereum" />}
          title="ZTI-07867"
          symbol="ETH"
          time="12h"
          percentage={0.25}
          graphImage="/bluegraph.svg"
        />

        <ModelCard
          icon={<img src="/litecoin(ltc).svg" alt="litecoin" />}
          title="ZTI-07867"
          symbol="ITC"
          time="1h"
          percentage={0.25}
          graphImage="/lightblue.svg"
        />

        <ModelCard
          icon={<img src="/solana-(sol).svg" alt="solana" />}
          title="ZTI-07867"
          symbol="SOL"
          time="1h"
          percentage={-0.25}
          graphImage="/greengraph.svg"
        />

        <ModelCard
          icon={<img src="/bitcoin-(btc).svg" alt="bitcoin" />}
          title="ZTI-07867"
          symbol="BTC"
          time="5h"
          percentage={0.25}
          graphImage="/bluegraph.svg"
        />

        <ModelCard
          icon={<img src="/bitcoin-(btc).svg" alt="bitcoin" />}
          title="ZTI-07867"
          symbol="BTC"
          time="9h"
          percentage={0.25}
          graphImage="/bluegraph.svg"
        />

        <ModelCard
          icon={<img src="/litecoin(ltc).svg" alt="litecoin" />}
          title="ZTI-07867"
          symbol="ITC"
          time="8h"
          percentage={0.25}
          graphImage="/lightblue.svg"
        />
      </div>
    </section>
  );
};

export default BestPerformingModels;