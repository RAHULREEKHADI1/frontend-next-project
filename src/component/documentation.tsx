import { twMerge } from "tailwind-merge";

interface DocumentationProps {
    title:string[];
    design?:string;
    date?:string;
    icon?:string;
    className?:string;
}

const Documentation : React.FC<DocumentationProps> = ({title,design="Website",date="02 - 20 Sep, 2022",icon="/iconoir_design-nib.svg",className})=>{
    return (
        <div className={twMerge("bg-[#1B2028] px-6 py-8 flex flex-col gap-8 rounded-lg w-92",className)}>
            <div className="h-10 flex justify-between">
                <h4 className="text-white text-xl leading-7 font-bold">Documentation</h4>
                <img src="/heart_icon.svg" alt="fav_icon" />
            </div>
            <div>
                <div className="flex flex-col gap-16">
                    {title.map((t, idx) => (
                    <div key={idx} className="flex gap-3 items-center">
                        <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-white">
                            <img src={icon} alt="pen_icon" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-white text-sm font-medium">{t}</h4>
                            <div className="text-[#939393] flex gap-2 text-xs">
                                <p>{design}</p>
                                <p>|</p>
                                <p>{date}</p>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Documentation;