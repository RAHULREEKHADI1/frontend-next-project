"use client"
import DataTypeStepper from "@/component/dataTypeStepper";
import Header from "@/component/Header";
import Sidebar from "@/component/sidebar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function AutomatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeStep, setActiveStep] = useState(1);
  const pathName = usePathname();
  const [step, setStep] = useState<number | undefined>();
  useEffect(() => {
    const segments = pathName.split("/");
    const id = segments[segments.length - 1];
    const stepNumber = parseInt(id);
    setStep(stepNumber);
    if (Number.isNaN(stepNumber)) {
      setStep(undefined);
      setActiveStep(1);
    } 
    if (!isNaN(stepNumber)) {
      setActiveStep(stepNumber);
    } else {
      setActiveStep(1);
    }
  }, [pathName])
  return (
    <div className={`grid h-screen ${!step ? "grid-cols-[20%_80%]":"grid-cols-[20%_55%_25%]"}`}>

      <aside className="h-full">
        <Sidebar />
      </aside>

      <main className={`bg-[#31353F] grid grid-rows-[auto_1fr] h-full  ${step ? "":"px-2 py-10"}`}>
        <Header
          text={"Create a datastore"}
          className="text-white"
          subTextClassName="text-white"
        />
        <div className="px-6 py-6 h-full">
          {children}
        </div>
      </main>

      {step && <aside className="h-full flex justify-center">
        <DataTypeStepper id={activeStep}/>
      </aside>}

    </div>
  );
}
