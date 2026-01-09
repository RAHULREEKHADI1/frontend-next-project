"use client"
import Header from "@/component/Header";
import Sidebar from "@/component/sidebar";
import SidebarStepper from "@/component/stepper";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export default function AutomatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeStep, setActiveStep] = useState(1);
  const pathName = usePathname();
  const [text, setText] = useState("Submit an Automated ML job");
  const [step, setStep] = useState<number | undefined>();
  useEffect(() => {
    const segments = pathName.split("/");
    const id = segments[segments.length - 1];
    const secondLastSegment = segments[segments.length - 2];
    const stepNumber = parseInt(id);
    setStep(stepNumber);
    if (Number.isNaN(stepNumber)) {
      setStep(undefined);
      setActiveStep(1);
      setText("Automated Machine Learning");
    }
    if (!isNaN(stepNumber)) {
      setActiveStep(stepNumber);
    } else {
      setActiveStep(1);
    }
  }, [pathName])

  const isSettingsStep4 = pathName.endsWith("step/4");

  return (
    <div className={`grid h-screen ${!step ? "grid-cols-[20%_80%]" : "grid-cols-[20%_55%_25%]"}`}>

      <aside className="h-full">
        <Sidebar/>
      </aside>

      <main className={`bg-[#31353F] grid grid-rows-[auto_1fr] h-full  ${step ? "" : "px-2 py-10"}`}>
        <Header
          text={text}
          subText="Let Automated ML train and find the best model based on your data without writing a single line of code"
          className="text-white"
          subTextClassName="text-white"
        />
        <div className="px-6 py-6 h-full">
          {children}
        </div>
      </main>

      {step && <aside className="h-full">
        {!isSettingsStep4 ? <SidebarStepper steps={[
          { id: 1, label: "Data Type" },
          { id: 2, label: "Data Source" },
          { id: 3, label: "Destination Storage Type" },
          { id: 4, label: "Settings" },
          { id: 5, label: "Schema" },
          { id: 6, label: "Review" },
        ]} id={activeStep} /> :
          <SidebarStepper steps={[
            { id: 1, label: "Data Type" },
            { id: 2, label: "Data Source" },
            { id: 3, label: "Destination Storage Type" },
            { id: 4, label: "File or Folder Selection" },
            { id: 5, label: "Schema" },
            { id: 6, label: "Review" },
          ]} id={activeStep} />}
      </aside>}

    </div>
  );
}
