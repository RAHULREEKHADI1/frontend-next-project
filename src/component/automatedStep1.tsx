"use client"
import { twMerge } from "tailwind-merge";
import Button from "./button";
import { useState } from "react";
import { useRouter } from 'next/navigation'

interface automatedStep1{
    className?:string;
    onClick?:()=>void;
}
interface automatedStep1Text {
    id: string;
    title: string;
    description: string;
    icon: string;
}

const Automated_Methods: automatedStep1Text[] = [
    {
        id: "auto",
        title: "Train Automatically",
        description: "Submit an Automated ML job to train a model without writing a single line of code.",
        icon: "/train_auto.svg", 
    },
    {
        id: "custom",
        title: "Train Custom",
        description: "Submit a command to train your own code",
        icon: "/train_custom.svg",
    },
];

const AutomatedStep1: React.FC<automatedStep1> = ({className,onClick}) => {

    const [selectedId, setSelectedId] = useState<string>("auto");
    const router = useRouter();

    return (
        <div className={twMerge('min-h-screen',className)}>
            <div className="bg-[#1B2028] rounded-lg px-10 py-7 flex flex-col gap-12">
                <div className="text-white flex flex-col gap-2">
                    <h3 className="text-[32px] font-bold">How do you want to train your model?</h3>
                    <h5 className="text-[23px] font-medium">Choose the method of training you would like to use.</h5>
                </div>

                <div className="flex flex-col gap-6 px-16">
                    {Automated_Methods.map((method) => {
                        const isActive = selectedId === method.id;
                        return (
                            <button
                                key={method.id}
                                onClick={() => setSelectedId(method.id)}
                                className={twMerge(
                                    "relative flex items-center gap-6 px-9 py-10 border-3 text-left",
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
                     <div className="flex gap-3 mt-10">
                    <Button text={"Cancel"} className="w-34.25 text-sm bg-[#858585] text-white py-2.5"/>
                    <Button text={"Start Configuration"} onClick={() => router.push(`/view/model/2`)} className="w-57.25 text-sm py-2.5"/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AutomatedStep1;