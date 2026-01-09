import { twMerge } from "tailwind-merge";

interface ButtonProps{
    text : string;
    onClick?: ()=> void;
    className?:string;
    divClass?:string;
}

const Button:React.FC<ButtonProps> = ({text,onClick,className,divClass})=>{
    return(
        <div className={twMerge(divClass)}>
            <button onClick={onClick} className={twMerge("w-full rounded-lg bg-[#06D6A0] text-white font-semibold",className)}>{text}</button>
        </div>
    )
}
export default Button;