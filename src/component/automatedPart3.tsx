"use client"
import { twMerge } from "tailwind-merge";
import CustomSelect from "./selectComponent";
import { useState } from "react";
import Button from "./button";
import TableComponent from "./tableComponent";
import { useRouter } from "next/navigation";


interface automatedStep3 {
    className?: string;
    onClick?: () => void;
}

const AutomatedPart3: React.FC<automatedStep3> = ({ className, onClick }) => {

    const router = useRouter();
    const [taskType, setTaskType] = useState('default');

    const taskOptions = [
        { label: 'Azure Blob Storage', value: 'Azure Blob Storage' },];


    return (
        <div className={twMerge('min-h-screen', className)}>
            <div className="bg-[#1B2028] rounded-lg px-10 py-7 flex flex-col gap-8">
                <div className="text-white flex flex-col gap-2">
                    <h3 className="text-[32px] font-bold">Choose a file or folder</h3>
                </div>
                <CustomSelect
                    label="Datastore Type"
                    required={true}
                    options={taskOptions}
                    value={taskType}
                    onChange={(val) => setTaskType(val)}
                />
                <div className="flex items-center justify-between">
                    <p className="text-white font-bold text-xl leading-7">
                        Select Data Set
                    </p>

                    <div className="relative w-41.5">
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-12 pr-4 h-8 w-full text-sm font-semibold text-[#9E9E9E] rounded-md focus:outline-none"
                        />
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <img src="/search_symbol.svg" alt="search_icon" />
                        </span>
                    </div>


                </div>
                <TableComponent
                    data={[
                        {
                            name: "olive_nut_rb0dgls7vv",
                            storage:"davidtestcase2254285057",
                            created: "Dec 5, 2023",
                        },
                        {
                            name: "olive_nut_rb0dgls7vv",
                            storage:"davidtestcase2254285057",
                            created: "Dec 3, 2023",
                        },
                        {
                            name: "olive_nut_rb0bgdtv",
                            storage:"davidtestcase2254285057",
                            created: "Dec 2, 2023",
                            
                        },
                    ]}
                />
                <div className="flex gap-3">
                    <Button text={"Cancel"} className="w-34.25 text-sm bg-[#858585] text-white py-2.5" />
                    <Button text={"Next"} onClick={() => router.push(`/step/3`)} className="w-34.25 text-sm py-2.5" />
                </div>
            </div>

        </div>
    )
}

export default AutomatedPart3;