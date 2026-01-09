"use client";

import React from "react";

export interface Step {
  id: number;
  label: string;
}

export const DEFAULT_STEPS: Step[] = [
  { id: 1, label: "Training Method" },
  { id: 2, label: "Basic Settings" },
  { id: 3, label: "Task type & Data" },
  { id: 4, label: "Task Settings" },
  { id: 5, label: "Compute" },
  { id: 6, label: "Review" },
];

interface SidebarStepperProps {
  id: number;           
  steps?: Step[]; 
}

const SidebarStepper: React.FC<SidebarStepperProps> = ({ id, steps }) => {
  const activeIndex = id - 1;

  const stepsToUse = DEFAULT_STEPS.map(defaultStep => {
    const override = steps?.find(s => s.id === defaultStep.id);
    return override ? { ...defaultStep, label: override.label } : defaultStep;
  });

  const progressPercent = Math.round((id / stepsToUse.length) * 100);

  return (
    <aside
      className="flex flex-col min-h-full w-full py-12 px-7.5 text-white font-sans bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/background_stepper.svg')" }}
    >
      <div className="flex flex-col px-7.5">
        {stepsToUse.map((step, index) => {
          const isCompleted = index < activeIndex;
          const isActive = index === activeIndex;
          const isLast = index === stepsToUse.length - 1;

          return (
            <div key={step.id} className="flex">
              <div className="flex flex-col">
                <div
                  className={`flex justify-center w-11 h-11 rounded-full border-2 transition-all duration-500
                    ${isActive || isCompleted ? "border-[#4ade80]" : "border-white/80"}
                  `}
                >
                  {isActive || isCompleted ? (
                    <img src="/user_profile_active.svg" alt="active_user" />
                  ) : (
                    <img src="/user_profile.svg" alt="active_user" />
                  )}
                </div>

                <p
                  className={`mt-1 text-xl font-semibold text-center transition-colors duration-500
                    ${isActive || isCompleted ? "text-[#4ade80]" : "text-white"}
                  `}
                >
                  {step.label}
                </p>

                {!isLast && (
                  <div className="flex px-3 py-2">
                    <div
                      className={`w-0.5 h-8 ${isActive || isCompleted ? "bg-[#4ade80]" : "bg-white"}`}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <p className="text-sm text-blue-100/60 font-medium mb-1">
          {activeIndex + 1} to {stepsToUse.length} step
        </p>
        <h3 className="text-[23px] font-bold mb-4">{progressPercent}% to complete</h3>

        <div className="relative w-full h-3 bg-gray-500/40 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#4ade80] transition-all duration-700 ease-in-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </aside>
  );
};

export default SidebarStepper;
