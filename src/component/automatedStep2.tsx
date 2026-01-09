import React, { useState } from 'react';
import Button from './button';
import { useRouter } from 'next/navigation';

const AutomatedStep2: React.FC = () => {
    const [formData, setFormData] = useState({
        jobName: '',
        newExperimentName: '',
        experimentMode: 'existing',
        description: '',
        tags: '',
    });
    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-h-screen bg-[#1B2028] flex justify-center rounded-3xl">
            <div className="w-full max-w-3xl bg-[#1B2028] p-10 shadow-xl rounded-3xl">

                <div className="mb-10">
                    <h1 className="text-[32px] font-bold text-white mb-2">Basic Settings</h1>
                    <p className="text-white text-[23px] font-medium">
                        Let's start with some basic settings for training your job
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                    <div className="space-y-8">
                        <div className="flex flex-col gap-2">
                            <label className="text-white font-semibold">Job Name*</label>
                            <input
                                type="text"
                                name="jobName"
                                className="bg-[#7c7c7c] border-3 border-[#B4D4E4] h-12 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            <label className="text-white font-semibold">Experiment Name*</label>

                            <div className="flex items-center gap-6">
                                <label className="flex items-center gap-2 text-white cursor-pointer">
                                    <input
                                        type="radio"
                                        name="experimentMode"
                                        value="existing"
                                        checked={formData.experimentMode === "existing"}
                                        onChange={() =>
                                            setFormData({ ...formData, experimentMode: "existing" })
                                        }
                                        className="hidden peer"
                                    />

                                    <span className="w-5 h-5 rounded-full bg-white peer-checked:bg-[#06D6A0] border-2 border-[#D4DCE4] transition" />
                                    Select Existing
                                </label>
                                <label className="flex items-center gap-2 text-white cursor-pointer">
                                    <input
                                        type="radio"
                                        name="experimentMode"
                                        value="new"
                                        checked={formData.experimentMode === "new"}
                                        onChange={() =>
                                            setFormData({ ...formData, experimentMode: "new" })
                                        }
                                        className="hidden peer"
                                    />

                                    <span className="w-5 h-5 rounded-full bg-white peer-checked:bg-[#06D6A0] border-2 border-[#D4DCE4] transition" />
                                    Create New
                                </label>
                            </div>
                        </div>

                    </div>

                    <div className="space-y-8">
                        <div className="flex flex-col gap-2">
                            <label className="text-white font-semibold">New Experiment Name*</label>
                            <input
                                type="text"
                                name="newExperimentName"
                                className="bg-[#7c7c7c] border-3 border-[#B4D4E4] h-12 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-white font-semibold">Description</label>
                            <input
                                type="text"
                                name="description"
                                className="bg-[#7c7c7c] border-3 border-[#B4D4E4] h-12 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-white font-semibold">Tags</label>
                            <input
                                type="text"
                                name="tags"
                                className="bg-[#7c7c7c] border-3 border-[#B4D4E4] h-12 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex gap-3 mt-10">
                    <Button text={"Cancel"} className="w-34.25 text-sm bg-[#858585] text-white py-2.5"/>
                    <Button text={"Next"} onClick={() => router.push(`/view/model/3`)} className="w-34.25 text-sm py-2.5"/>
                </div>
            </div>
        </div>
    );
};

export default AutomatedStep2;