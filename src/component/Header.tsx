import { twMerge } from "tailwind-merge";

interface HeaderProps{
    text:string;
    className?:string;
    subText?:string;
    subTextClassName?:string;
}

const Header:React.FC<HeaderProps> = ({text,className,subText,subTextClassName})=>{
    return (
        <div className="w-full">
            <header>
                {!subText ? <div className={twMerge("px-7.5 py-8 font-semibold text-[31px]",className)}>
                    <p>{text}</p>
                </div>:
                <div className="px-7.5 py-8 flex flex-col gap-2">
                    <p className={twMerge("font-semibold text-[31px]",className)}>{text}</p>
                    <p className={twMerge("text-md font-light ",subTextClassName)}>{subText}</p>
                </div>}
            </header>
        </div>
    )
}

export default Header;