'use client';

import React, { useState } from 'react';
import { ChevronDown } from "lucide-react";
import Header from '@/component/Header';

const METRICS = [
    { label: "Currency", isSoon: true },
    { label: "Start Date", isSoon: true },
    { label: "Forecast" },
    { label: "Forecast Time" },
    { label: "Next Forecast" },
    { label: "1d PNL" },
    { label: "7d PNL" },
    { label: "30d PNL" },
    { label: "60d PNL" },
    { label: "Max Drawdown" },
    { label: "Max Drawdown Days" },
    { label: "Average Drawdown" },
    { label: "Current Drawdown" },
    { label: "Current Drawdown Days" },
    { label: "Total Wins" },
    { label: "Total Losses" },
    { label: "Consecutive Wins" },
    { label: "Consecutive Losses" },
    { label: "Win/Loss Ratio" },
    { label: "Aggregate Loss" },
    { label: "R2 Score" },
    { label: "Sharpe" },
];

const FILTERS = ["ALL", "24H", "12H", "8H", "6H", "4H", "3H", "2H", "1H"];
const MODEL_LABELS = ["Members", "Time Horizon", "Time Horizon", "Time Horizon"];
const MODELS = ["ZT1-0MJHA", "ZT1-0MJHB", "ZT1-0MJHC"];

// Demo data per model
const MODEL_DATA: Record<string, Record<string, string>> = {
  "ZT1-0MJHA": {
    "Currency": "USD",
    "Start Date": "2025-01-01",
    "Forecast": "100",
    "Forecast Time": "12:00",
    "Next Forecast": "14:00",
    "1d PNL": "5%",
    "7d PNL": "12%",
    "30d PNL": "25%",
    "60d PNL": "40%",
    "Max Drawdown": "10%",
    "Max Drawdown Days": "3",
    "Average Drawdown": "5%",
    "Current Drawdown": "2%",
    "Current Drawdown Days": "1",
    "Total Wins": "15",
    "Total Losses": "5",
    "Consecutive Wins": "4",
    "Consecutive Losses": "2",
    "Win/Loss Ratio": "3",
    "Aggregate Loss": "5%",
    "R2 Score": "0.85",
    "Sharpe": "1.2",
  },
  "ZT1-0MJHB": {
    "Currency": "EUR",
    "Start Date": "2025-01-02",
    "Forecast": "200",
    "Forecast Time": "13:00",
    "Next Forecast": "15:00",
    "1d PNL": "6%",
    "7d PNL": "14%",
    "30d PNL": "28%",
    "60d PNL": "42%",
    "Max Drawdown": "12%",
    "Max Drawdown Days": "4",
    "Average Drawdown": "6%",
    "Current Drawdown": "3%",
    "Current Drawdown Days": "1",
    "Total Wins": "18",
    "Total Losses": "6",
    "Consecutive Wins": "5",
    "Consecutive Losses": "1",
    "Win/Loss Ratio": "3",
    "Aggregate Loss": "6%",
    "R2 Score": "0.88",
    "Sharpe": "1.3",
  },
  "ZT1-0MJHC": {
    "Currency": "JPY",
    "Start Date": "2025-01-03",
    "Forecast": "150",
    "Forecast Time": "11:00",
    "Next Forecast": "13:30",
    "1d PNL": "4%",
    "7d PNL": "10%",
    "30d PNL": "22%",
    "60d PNL": "38%",
    "Max Drawdown": "9%",
    "Max Drawdown Days": "2",
    "Average Drawdown": "4%",
    "Current Drawdown": "1%",
    "Current Drawdown Days": "1",
    "Total Wins": "12",
    "Total Losses": "4",
    "Consecutive Wins": "3",
    "Consecutive Losses": "1",
    "Win/Loss Ratio": "3",
    "Aggregate Loss": "4%",
    "R2 Score": "0.82",
    "Sharpe": "1.1",
  },
};

const BackTestDashboard = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [openDropdowns, setOpenDropdowns] = useState<Record<number, boolean>>({});
  const [selectedModelByColumn, setSelectedModelByColumn] = useState<Record<number, string | null>>({});
  const [hoveredModelByColumn, setHoveredModelByColumn] = useState<Record<number, string | null>>({});

  return (
    <main className="min-h-screen text-white font-sans">

      <section className="mb-10">
        <Header
          text="Compare"
          subText="To conduct a personalized backtest, begin by choosing a strategy either the time horizon and currencies filter or selecting Strategies dropdown."
          className="text-white"
          subTextClassName="text-white"
        />
      </section>

      <div className="grid grid-cols-4 mb-4 items-center">
        {MODEL_LABELS.map((label, idx) => (
          <div
            key={idx}
            className={`text-[18px] flex items-center
              ${idx === 0 ? "justify-start px-6" : "justify-center"}`}
          >
            {label}
            {idx === 0 && (
              <img src="/question_icon.svg" alt="info" className="ml-2" />
            )}
          </div>
        ))}
      </div>

      <section className="bg-[#24272E] rounded-t-xl border-b border-gray-800 shadow-xl">
        <div className="grid grid-cols-4 gap-6 p-6">

          <div className="flex items-start pt-2 gap-3">
            <span className="text-[#06D6A0] text-[18px]">Time Horizon</span>
            <span className="border border-[#818B98] text-[13px] px-1.5 rounded-xl text-[#818B98]">
              soon
            </span>
            <img src="/question_icon.svg" alt="info" />
          </div>

          {[1, 2, 3].map((groupIndex) => {
            const imageModel = hoveredModelByColumn[groupIndex] ?? selectedModelByColumn[groupIndex];

            return (
              <div key={groupIndex} className="flex flex-col items-center">

                <div className="flex flex-wrap gap-1.5 justify-center max-w-55 mb-4">
                  {FILTERS.map((time) => (
                    <button
                      key={time}
                      onClick={() => setActiveFilter(time)}
                      className={`text-[10px] font-bold h-5.5 w-10.25 rounded-xl
                        ${activeFilter === time
                          ? "bg-[#06D6A0]"
                          : "text-[#9E9E9E] border border-[#31353F]"}`}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                <div className="w-32.5">
                  <div
                    onClick={() =>
                      setOpenDropdowns((prev) => ({
                        ...prev,
                        [groupIndex]: !prev[groupIndex],
                      }))
                    }
                    className="h-11 px-3 flex items-center justify-between
                      border border-[#06D6A0] rounded-md
                      text-[#06D6A0] cursor-pointer"
                  >
                    <span className="text-sm truncate">
                      {selectedModelByColumn[groupIndex] ?? "Models"}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${openDropdowns[groupIndex] ? "rotate-180" : ""}`}
                    />
                  </div>

                  {openDropdowns[groupIndex] && (
                    <div className="mt-2 rounded-lg bg-white shadow-lg">

                      <div className="px-2 py-1 border-b border-gray-200">
                        <input
                          placeholder=""
                          className="w-full text-sm outline-none text-black"
                        />
                      </div>

                      {MODELS.map((model) => (
                        <div
                          key={model}
                          onMouseEnter={() =>
                            setHoveredModelByColumn((prev) => ({
                              ...prev,
                              [groupIndex]: model,
                            }))
                          }
                          onMouseLeave={() =>
                            setHoveredModelByColumn((prev) => ({
                              ...prev,
                              [groupIndex]: null,
                            }))
                          }
                          onClick={() =>
                            setSelectedModelByColumn((prev) => ({
                              ...prev,
                              [groupIndex]: model,
                            }))
                          }
                          className={`px-3 py-2 text-sm cursor-pointer
                            ${selectedModelByColumn[groupIndex] === model
                              ? "bg-[#06D6A0] text-white"
                              : "text-gray-800 hover:bg-gray-100"
                            }`}
                        >
                          {model}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {imageModel && (
                  <div className="mt-6 mb-20">
                    <img
                      src="/graph1.svg"
                      alt="graph"
                      className="w-44"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <div className="flex flex-col gap-2 mt-2">
        {METRICS.map((metric, index) => (
          <div
            key={metric.label}
            className={`grid grid-cols-4 items-center px-6 py-3.5 rounded-lg
              ${index % 2 ? "bg-[#1B2028]" : "bg-[#70747E]"}`}
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{metric.label}</span>
              {metric.isSoon && (
                <span className="border border-[#818B98] text-[13px] px-1.5 rounded-xl text-[#818B98]">
                  soon
                </span>
              )}
              <img src="/question_icon.svg" alt="info" />
            </div>

            {[1, 2, 3].map((col) => {
              const model = selectedModelByColumn[col];
              return (
                <div key={col} className="flex justify-center">
                  {model ? (
                    <span className="text-white">{MODEL_DATA[model][metric.label]}</span>
                  ) : (
                    <span className="text-gray-500"></span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </main>
  );
};

export default BackTestDashboard;
