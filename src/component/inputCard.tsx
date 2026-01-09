"use client";
import { Calendar } from "lucide-react";
import React from "react";

interface InputCardProps {
  label: string;
  value: string | number;
  type?: "text" | "number";
  onChange?: (value: string) => void;
}

const InputCard: React.FC<InputCardProps> = ({ label, value, type = "text", onChange }) => {
  return (
    <div className="flex flex-col bg-[#1B2028] p-4 rounded-lg w-45 ">
      <span className="text-[#9197A4] text-xs">{label}</span>
      <div className="flex items-center gap-0.5 mt-1">
        <img src="/wallet.svg" alt="wallet_icon" />
        <input
          type={type}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className=" text-white text-sm rounded px-2 py-1 w-full focus:outline-none"
        />
      </div>
    </div>
  );
};

export default InputCard;
