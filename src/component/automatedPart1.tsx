"use client"
import { useRouter } from "next/navigation";
import Button from "./button";
import CustomSelect from "./selectComponent";
import { useState } from "react";


const AutomatedPart1: React.FC = () => {

    const router = useRouter();
    const [taskType, setTaskType] = useState('Tabular');
    const taskOptions = [
        { label: 'Tabular', value: 'Tabular' },];


    return (
        <div className='min-h-screen'>
            <div className="bg-[#1B2028] rounded-lg px-10 py-7 flex flex-col gap-8">
                <div className="text-white flex flex-col gap-2">
                    <h3 className="text-[32px] font-bold">Set the name and type for your data asset</h3>
                </div>
                <div className="flex flex-col mt-6 gap-6">
                    <div className="flex flex-col gap-2 w-full max-w-3xl">
                        <label className="text-white font-semibold text-md">
                            Name*
                        </label>

                        <input
                            type="text"
                            className="w-full bg-[#858585] text-white px-6 h-16 border-3 border-[#B4D4E4] focus:outline-none font-semibold"
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-full max-w-3xl">
                        <label className="text-white font-semibold text-md">
                            Description*
                        </label>

                        <input
                            type="text"
                            className="w-full bg-[#858585] text-white px-6 h-16 border-3 border-[#B4D4E4] focus:outline-none font-semibold"
                        />
                    </div>
                    <CustomSelect
                        label="Type"
                        required={true}
                        options={taskOptions}
                        value={taskType}
                        onChange={(val) => setTaskType(val)}
                    />
                </div>
                <div className="flex gap-3 mt-10">
                    <Button text={"Cancel"} className="w-34.25 text-sm bg-[#858585] text-white py-2.5"/>
                    <Button text={"Next"} onClick={() => router.push(`/part/2`)} className="w-34.25 text-sm py-2.5"/>
                </div>
            </div>
        </div>
    )
}

export default AutomatedPart1;