"use client"
import { useRouter } from "next/navigation";
import Button from "./button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface automatedStep1Text {
    id: string;
    title: string;
    description: string;
    icon: string;
}

const Automated_Methods: automatedStep1Text[] = [
    {
        id: "auto",
        title: "From Local Files",
        description: "Create a data asset by uploading files from your local drive",
        icon: "/SVGRepo_iconCarrier.svg", 
    }
];


const AutomatedPart2: React.FC = () => {

    const [selectedId, setSelectedId] = useState<string>("auto");
    const router = useRouter();

    return (
        <div className='min-h-screen'>
            <div className="bg-[#1B2028] rounded-lg px-10 py-7 flex flex-col gap-20">
                <div className="text-white flex flex-col gap-2">
                    <h3 className="text-[32px] font-bold">Set the name and type for your data asset</h3>
                </div>
                <div className="flex flex-col gap-6 px-16">
                    {Automated_Methods.map((method) => {
                        const isActive = selectedId === method.id;
                        return (
                            <button
                                key={method.id}
                                onClick={() => setSelectedId(method.id)}
                                className={twMerge(
                                    "relative flex items-center gap-6 px-9 py-15 border-3 text-left",
                                    isActive 
                                        ? " border-[#06D6A0]" 
                                        : "border-white"
                                )}
                            >
                                {isActive && (
                                    <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#06D6A0] rounded-full flex items-center justify-center">
                                        <img src="/correct_icon.svg" alt="tick_icon" />
                                    </div>
                                )}
                                <div className={twMerge(
                                    "flex items-center justify-center rounded-full shrink-0"
                                )}>
                                    <img src={method.icon} alt={method.title}/>
                                </div>
                                <div className="flex flex-col gap-4 ml-12">
                                    <p className={twMerge(
                                        "text-[22px] font-bold transition-colors",
                                        isActive ? "text-[#4ade80]" : "text-white"
                                    )}>
                                        {method.title}
                                    </p>
                                    <p className={twMerge("text-md mt-1", isActive ? "text-[#4ade80]" : "text-white")}>
                                        {method.description}
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                </div>
                <div className="flex gap-3 mt-10">
                    <Button text={"Cancel"} className="w-34.25 text-sm bg-[#858585] text-white py-2.5"/>
                    <Button text={"Next"} onClick={() => router.push(`/step/4`)} className="w-34.25 text-sm py-2.5"/>
                </div>
            </div>
        </div>
    )
}

export default AutomatedPart2;