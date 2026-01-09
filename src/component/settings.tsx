"use client"
import { twMerge } from "tailwind-merge";
import CustomSelect from "./selectComponent";
import { useState } from "react";
import Button from "./button";
import TableComponent from "./tableComponent";
import { useRouter } from "next/navigation";


interface SettingsProps {
    className?: string;
    onClick?: () => void;
}

const Settings: React.FC<SettingsProps> = ({ className, onClick }) => {

    const router = useRouter();
    const [taskType, setTaskType] = useState('default');

    const taskOptions1 = [
        { label: 'Delimited', value: 'Delimited' },];

    const taskOptions2 = [
        { label: 'Comma', value: 'Comma' },];

    const taskOptions3 = [
        { label: 'All files have same headers', value: 'All files have same headers' },];

    const taskOptions4 = [
        { label: 'None', value: 'None' },];


    return (
        <div className={twMerge('min-h-screen', className)}>
            <div className="bg-[#1B2028] rounded-lg px-10 py-7 flex flex-col gap-8">
                <div className="text-white flex flex-col gap-2">
                    <h3 className="text-[32px] font-bold">Settings</h3>
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    <CustomSelect
                        label="File Format"
                        required={true}
                        options={taskOptions1}
                        value={taskType}
                        onChange={(val) => setTaskType(val)}
                        className="w-81.25"
                    />
                    <CustomSelect
                        label="Delimiter"
                        required={true}
                        options={taskOptions2}
                        value={taskType}
                        onChange={(val) => setTaskType(val)}
                        className="w-81.25"
                    />
                    <CustomSelect
                        label="Column Headers"
                        required={true}
                        options={taskOptions3}
                        value={taskType}
                        onChange={(val) => setTaskType(val)}
                        className="w-81.25"
                    />
                    <CustomSelect
                        label="Skip Rows"
                        required={true}
                        options={taskOptions4}
                        value={taskType}
                        onChange={(val) => setTaskType(val)}
                        className="w-81.25"
                    />
                </div>

                <hr className="text-[#D9D9D9] my-10 h-0.5" />
                <div className="flex flex-col gap-4">
                    <h4 className="text-xl font-semibold text-white">Information</h4>
                    <TableComponent
                        data={[
                            {
                                length: "5.1",
                                width: "3.5",
                                variety: "setosa",
                            },
                            {
                                length: "4.9",
                                width: "3",
                                variety: "setosa",
                            },
                            {
                                length: "4.7",
                                width: "3.2",
                                variety: "setosa",

                            },
                        ]}
                    />
                </div>
                <div className="flex gap-3 mt-15">
                    <Button text={"Cancel"} className="w-34.25 text-sm bg-[#858585] text-white py-2.5" />
                    <Button text={"Next"} onClick={() => router.push("/step/settings/5")} className="w-34.25 text-sm py-2.5" />
                </div>
            </div>

        </div>
    )
}

export default Settings;