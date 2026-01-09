"use client"
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";

interface ThreeNameProps {
    title1?: string;
    title2?: string;
    title3?: string;
    href?: string;
    className?: string;
    href2?: string;
}

const ThreeProps: React.FC<ThreeNameProps> = ({
    title1 = "In Progress",
    title2 = "New assigned",
    title3 = "Completed",
    href,
    className,
    href2
}) => {

    const router = useRouter();
    const pathName = usePathname();
    const segment = pathName.split("/").pop();

    const [active, setActive] = useState(0);
    const [style, setStyle] = useState({ left: 0, width: 0 });

    const refs = useRef<(HTMLParagraphElement | null)[]>([]);

    const titles = [title1, title2, title3];
    const isJobsRoute = segment === "jobs";
    useEffect(() => {
        const current = refs.current[active];
        if (current) {
            setStyle({
                left: current.offsetLeft,
                width: current.offsetWidth
            });
        }
    }, [active]);

    const handleClick = (index: number, title: string) => {
        setActive(index);
        if (title === "All Schedules" && href) {
            router.push(href);
        }
        if ((title === "All Experiments" || title === "All Jobs") && href2) {
            router.push(href2)
        }
    };

    useEffect(() => {
        if (segment === "jobs") {
            setActive(1);
        } else if (segment === "schedule") {
            setActive(2);
        } else {
            setActive(0);
        }
    }, [segment]);

    return (
        <div className={twMerge("w-full", className)}>
            <div className={"relative flex gap-8 cursor-pointer "}>
                {titles.map((title, index) => (
                    <p
                        key={index}
                        ref={(el) => { refs.current[index] = el; }}
                        onClick={() => handleClick(index, title)}
                        className={`whitespace-nowrap ${isJobsRoute && active === index
                                ? "text-[#06D6A0]"
                                : "text-white"
                            }`}
                    >
                        {title}
                    </p>
                ))}
            </div>

            <div className="relative mt-2 h-px w-full bg-[#D9D9D9]">
                <div
                    className="absolute top-0 h-px bg-[#06D6A0] transition-all duration-300"
                    style={{
                        left: style.left,
                        width: style.width
                    }}
                />
            </div>
        </div>
    );
};

export default ThreeProps;
