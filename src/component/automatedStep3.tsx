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

const AutomatedStep3: React.FC<automatedStep3> = ({ className, onClick }) => {

    const router = useRouter();
    const [taskType, setTaskType] = useState('default');

    const taskOptions = [
        { label: 'Default', value: 'default' },];


    return (
        <div className={twMerge('min-h-screen', className)}>
            <div className="bg-[#1B2028] rounded-lg px-10 py-7 flex flex-col gap-8">
                <div className="text-white flex flex-col gap-2">
                    <h3 className="text-[32px] font-bold">Task type & Data</h3>
                    <h5 className="text-[23px] font-medium">Choose the type of task that you would like your model to perform and the dataset to use for training.</h5>
                </div>
                <CustomSelect
                    label="Select Task Type"
                    required={true}
                    options={taskOptions}
                    value={taskType}
                    onChange={(val) => setTaskType(val)}
                />
                <div className="flex items-center justify-between">
                    <p className="text-white font-bold text-xl leading-7">
                        Select Data Set
                    </p>

                    <div className="relative w-33.5">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <img src="/ic_round-plus.svg" alt="plus_icon" />
                        </span>

                        <Button
                            text="Create"
                            className="pl-4 text-md font-semibold h-8"
                        />
                    </div>
                </div>
                <TableComponent
                    data={[
                        {
                            name: "olive_nut_rb0dgls7vv",
                            experiment: "Default",
                            created: "Dec 5, 2023",
                            duration: "45 min 20 sec",
                        },
                        {
                            name: "olive_nut_rb0dgls7vv",
                            experiment: "Default",
                            created: "Dec 3, 2023",
                            duration: "30 min 20 sec",
                        },
                        {
                            name: "olive_nut_rb0bgdtv",
                            experiment: "Default",
                            created: "Dec 2, 2023",
                            duration: "45 min 20 sec",
                        },
                    ]}
                />
                <div className="flex gap-3">
                    <Button text={"Cancel"} className="w-34.25 text-sm bg-[#858585] text-white py-2.5"/>
                    <Button text={"Next"} onClick={() => router.push(`/part/1`)} className="w-34.25 text-sm py-2.5"/>
                </div>
            </div>
            
        </div>
    )
}

export default AutomatedStep3;