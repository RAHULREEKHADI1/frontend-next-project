import { twMerge } from "tailwind-merge";

interface LogoProps{
    className?:string;
}

const Logo: React.FC<LogoProps> = ({className}) => {
    return (
        <div className={twMerge("flex items-center justify-center gap-2 py-2" ,className)}>
            <img src='/Logo.svg' className="h-5" alt="logo" />
            <h2 className="text-white text-[21px] font-bold leading-6.25">Logoipsm</h2>
        </div>
    )
}

export default Logo;