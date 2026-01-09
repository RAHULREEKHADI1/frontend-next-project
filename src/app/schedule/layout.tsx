"use client"
import Header from "@/component/Header";
import Sidebar from "@/component/sidebar";
import ThreeProps from "@/component/threeProps";
import { usePathname } from "next/navigation";


export default function AutomatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isScheduleList = pathname.endsWith('/schedule');
  return (
    <div className={`grid h-screen grid-cols-[20%_80%]`}>

      <aside className="h-full">
        <Sidebar activeId="jobs" />
      </aside>

      <main className={`bg-[#31353F] grid grid-rows-[auto_1fr] h-full px-2 py-8`}>
       {isScheduleList && (
          <>
            <Header
              text={"Jobs"}
              subText="Let Automated ML train and find the best model based on your data without writing a single line of code"
              className="text-white"
              subTextClassName="text-white"
            />
            <ThreeProps 
              title1="All Experiments" 
              title2="All Jobs" 
              title3="All Schedules" 
              href2="/jobs" 
              className="px-7.5"
            />
          </>
        )}
        <div className="px-6 py-6 h-full">
          {children}
        </div>
      </main>
    </div>
  );
}
