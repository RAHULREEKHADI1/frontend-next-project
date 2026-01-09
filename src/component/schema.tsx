"use client"
import { twMerge } from "tailwind-merge";
import Button from "./button";
import TableComponent from "./tableComponent";
import { useRouter } from "next/navigation";


interface SchemaProps {
    className?: string;
    onClick?: () => void;
}

const Schema: React.FC<SchemaProps> = ({ className, onClick }) => {

    const router = useRouter();


    return (
        <div className={twMerge('min-h-screen', className)}>
            <div className="bg-[#1B2028] rounded-lg px-10 py-7 flex flex-col gap-8">
                <div className="text-white flex flex-col gap-2">
                    <h3 className="text-[32px] font-bold">Schema</h3>
                </div>
                <div className="relative flex items-center w-full">
                    <div className="absolute left-2 pointer-events-none">
                        <img src="/search_symbol.svg" alt="search_icon" />
                    </div>

                    <input type="text" placeholder="Search (Ctrl +/)" className="placeholder:text-[#9E9E9E] px-15 text-[#9E9E9E] text-left focus:outline-none border border-transparent focus:border-[#9E9E9E] placeholder:font-semibold rounded-lg placeholder:text-sm py-3 w-full" />
                </div>
                <hr className="text-[#D9D9D9] my-10 h-0.5" />
                <div className="flex flex-col gap-4">
                    <h4 className="text-xl font-semibold text-white">Information</h4>
                    <TableComponent
                        data={[
                            {
                                columnName: "Path",
                                type :"String",
                                exampleValue: "5.1",
                            },
                            {
                                columnName: "sepal.length",
                                type: "Decimal",
                                exampleValue: "2.1",
                            },
                            {
                                columnName: "sepal.width",
                                type: "Decimal",
                                exampleValue: "6.1",

                            },
                        ]}
                    />
                </div>
                <div className="flex gap-3 mt-15">
                    <Button text={"Cancel"} className="w-34.25 text-sm bg-[#858585] text-white py-2.5" />
                    <Button text={"Next"} onClick={() => router.push("")} className="w-34.25 text-sm py-2.5" />
                </div>
            </div>

        </div>
    )
}

export default Schema;