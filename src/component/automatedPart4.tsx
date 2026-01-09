"use client"
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import Button from "./button";
import { useRouter } from "next/navigation";


interface automatedStep4 {
    className?: string;
    onClick?: () => void;
}

const AutomatedPart4: React.FC<automatedStep4> = ({ className, onClick }) => {

    const router = useRouter();
    const [taskType, setTaskType] = useState('default');

    const taskOptions = [
        { label: 'Azure Blob Storage', value: 'Azure Blob Storage' },];


    return (
        <div className={twMerge('min-h-screen', className)}>
            <div className="bg-[#1B2028] rounded-lg px-10 py-7 flex flex-col gap-8">
                <div className="text-white flex flex-col gap-2">
                    <h3 className="text-[32px] font-bold">Select a datastore</h3>
                </div>
                <div className="flex flex-col gap-4 w-full max-w-3xl mb-4">
                    <label className="text-white font-semibold text-md">
                        Upload a path*
                    </label>

                    <input
                        type="text"
                        placeholder="azureml://subscriptions/e71210a3-89de-498f-a2d4-257cdf439271//UI/2023-12"
                        className="w-175 bg-[#858585] text-white px-2 h-12 border-3 border-[#B4D4E4] focus:outline-none font-semibold placeholder:text-white"
                    />
                </div>
                <div className="flex flex-col gap-8 w-full max-w-3xl">
                    <label className="text-[#858585] font-semibold text-md">
                        Upload the documents
                    </label>

                    <div className="grid grid-cols-[75%_25%]">
                        <input
                            type="text"
                            placeholder="jpg or .pdf should  be more than 500KB or 300PI"
                            className="w-full bg-[#858585] text-white px-6 h-18.5 border-3 placeholder:text-white placeholder:text-sm placeholder:font-normal border-[#B4D4E4] focus:outline-none font-semibold"
                        />
                        <div className="relative flex items-center w-full">
                            <div className="absolute left-4 pointer-events-none ">
                                <img src="/upload_icon.svg" alt="upload_icon" />
                            </div>
                            <Button text={"Automated ML"} divClass="w-full" className="rounded-none h-18.5" />
                        </div>
                    </div>
                </div>
                <hr className="text-[#D9D9D9] my-10 h-0.5" />
                <div className="flex flex-col gap-4">
                    <h4 className="text-xl font-semibold text-white">Information</h4>
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold text-white text-lg">What file types can I use?</p>
                        <p className="text-white text-lg font-light">Supported file types include: delimited (such as csv or tsv), Parquet, JSON Lines, and plain text.</p>
                    </div>
                </div>
                <div className="flex gap-3 mt-15">
                    <Button text={"Cancel"} className="w-34.25 text-sm bg-[#858585] text-white py-2.5" />
                    <Button text={"Next"} onClick={() => router.push("/step/settings/4")} className="w-34.25 text-sm py-2.5" />
                </div>
            </div>

        </div>
    )
}

export default AutomatedPart4;