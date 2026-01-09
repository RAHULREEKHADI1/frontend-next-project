'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ModelCard from '@/component/cryptoCardPage';
import Header from '@/component/Header';
import Button from '@/component/button';
import { useRouter } from 'next/navigation';
import InputCard from '@/component/inputCard';

const BackTestModel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState('All time');
  const [activeFilter, setActiveFilter] = useState("ALL");
  const filters = ["ALL", "24H", "12H", "8H", "6H", "4H", "3H", "2H", "1H"];
  const timeOptions = ['All time', '60d', '45d', '30d', '15d', '7d', '1d'];

  const [startDate, setStartDate] = useState("10 /12 /2023");
  const [takeProfit, setTakeProfit] = useState(100);
  const [stopLoss, setStopLoss] = useState(100);
  const [fee, setFee] = useState(0);
  const [stopTime, setStopTime] = useState(0);

  const router = useRouter();

  return (
    <section className="text-white max-w-350">
      <Header
        text={"Back Test"}
        subText="To conduct a personlized backtest, begin by choosing a strategy either the time horizon and currencies filter or selecting Strategies dropdown."
        className="text-white"
        subTextClassName="text-white"
      />
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 bg-[#1B2028] p-2 rounded-xl">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-0.5 rounded-2xl text-[11px] font-bold transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-[#06D6A0] text-white text-[10px] leading-5 font-medium"
                  : "text-[#9E9E9E] font-medium border border-[#31353F]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <Button text="Run Backtest" className='w-76 text-sm font-medium h-11' onClick={()=> router.push('/schedule/details')}/>

      </div>
<div className="flex gap-6 flex-wrap mt-10">
        <InputCard
          label="Start Date"
          type="text"
          value={startDate}
          onChange={setStartDate}
        />
        <InputCard
          label="Take Profit"
          type="number"
          value={takeProfit}
          onChange={(v) => setTakeProfit(Number(v))}
        />
        <InputCard
          label="Stop Loss"
          type="number"
          value={stopLoss}
          onChange={(v) => setStopLoss(Number(v))}
        />
        <InputCard
          label="Fee"
          type="number"
          value={fee}
          onChange={(v) => setFee(Number(v))}
        />
        <InputCard
          label="Stop Time"
          type="number"
          value={stopTime}
          onChange={(v) => setStopTime(Number(v))}
        />
      </div>
      <div className=" my-20 flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Popular Models</h2>

        <div className="flex items-center gap-6">
          <span className="text-sm font-medium text-[#E4E4E4] cursor-pointer">
            View All
          </span>

          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between bg-[#06D6A0] gap-3 min-w-27.5 rounded-lg px-3 py-2.5 text-sm font-bold text-[#E4E4E4]"
            >
              {selectedTime}
              <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
              <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-lg bg-[#D9D9D9]">
                {timeOptions.map((option) => (
                  <button
                    key={option}
                    className={`w-full px-4 py-2 text-center text-sm ${
                      selectedTime === option 
                        ? 'text-white bg-[#06D6A0] font-bold' 
                        : 'hover:bg-[#06D6A0] hover:text-white hover:font-normal text-[#676767]'
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

export default BackTestModel;