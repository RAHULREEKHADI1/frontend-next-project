"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import TableComponent from "@/component/tableComponent";
import ThreeProps from "@/component/threeProps";

const JobScheduleModels: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = ["ALL", "24H", "12H", "8H", "6H", "4H", "3H", "2H", "1H"];

  return (
    <section className="p-6 text-white max-w-360 mx-auto">
      <ThreeProps title1="Jobs" title2="All Models" title3="" />

      <h2 className="text-[32px] font-semibold tracking-tight mt-10 mb-8">
        All Models
      </h2>

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

        <div className="relative w-full md:w-100">
          <input
            type="text"
            placeholder="Search models"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1A1D23] border border-gray-800/50 rounded-xl py-2.5 pl-5 pr-12 text-sm text-[#9E9E9E] placeholder:text-[#9E9E9E] focus:outline-none focus:border-gray-700 transition-all"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
            <img src="/search-normal.svg" alt="search_img" />
          </div>
        </div>
      </div>

      <TableComponent
        data={[
          {
            index: 0,
            model: "ZTI-OMNHGTRD",
            startDate: "Dec 5, 2023",
            forecast: "long",
            nextForecast: "00:00:00",
            pnl7d: "2.09",
            totalPnl: "21.84",
            pnlGraph: "/graph1.svg",
          },
          {
            index: 1,
            model: "ZTI-OMNHGTRD",
            startDate: "Dec 2, 2023",
            forecast: "short",
            nextForecast: "00:00:00",
            pnl7d: "2.09",
            totalPnl: "21.84",
            pnlGraph: "/graph2.svg",
          },
          {
            index: 2,
            model: "ZTI-OMNHGTRD",
            startDate: "Dec 8, 2023",
            forecast: "long",
            nextForecast: "00:00:00",
            pnl7d: "3.09",
            totalPnl: "21.84",
            pnlGraph: "/graph3.svg",
          },
          {
            index: 3,
            model: "ZTI-OMNHGTRD",
            startDate: "Dec 7, 2023",
            forecast: "long",
            nextForecast: "00:00:00",
            pnl7d: "2.09",
            totalPnl: "21.84",
            pnlGraph: "/graph4.svg",
          },
          {
            index: 4,
            model: "ZTI-OMNHGTRD",
            startDate: "Dec 4, 2023",
            forecast: "short",
            nextForecast: "00:00:00",
            pnl7d: "1.09",
            totalPnl: "21.84",
            pnlGraph: "/graph5.svg",
          },
          {
            index: 5,
            model: "ZTI-OMNHGTRD",
            startDate: "Dec 2, 2023",
            forecast: "long",
            nextForecast: "00:00:00",
            pnl7d: "5.02",
            totalPnl: "21.84",
            pnlGraph: "/graph6.svg",
          },
          {
            index: 6,
            model: "ZTI-OMNHGTRD",
            startDate: "Dec 1, 2023",
            forecast: "long",
            nextForecast: "00:00:00",
            pnl7d: "2.30",
            totalPnl: "21.84",
            pnlGraph: "/graph7.svg",
          },
        ]}
        className="bg-[#1B2028] mt-10 pt-5 px-4 rounded-xl"
      />
    </section>
  );
};

export default JobScheduleModels;
