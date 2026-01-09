import { useRouter } from "next/navigation";
import Button from "./button";
import Logo from "./logo";

interface SidebarProps {
    activeId?: "automated-ml" | "data" | "jobs" | "profile";
}

const Sidebar: React.FC<SidebarProps> = ({ activeId = "automated-ml" }) => {
    const router = useRouter();
    return (
        <div className="min-h-screen top-0 overflow-y-auto sticky">
            <div className="bg-[#1B2028] py-8 px-6.25 flex flex-col justify-between min-h-screen shrink-0 ">
                <div>
                    <div>
                        <Logo />
                    </div>
                    <div className="relative flex items-center w-full py-14">
                        <div className="absolute left-4 pointer-events-none">
                            <img src="/search_symbol.svg" alt="search_icon" />
                        </div>

                        <input type="text" placeholder="Search (Ctrl +/)" className="placeholder:text-[#9E9E9E] text-[#9E9E9E] border border-[#9E9E9E] placeholder:font-semibold rounded-lg placeholder:text-sm py-3 w-full text-center" />
                    </div>
                    <div className="relative flex items-center cursor-pointer w-full" onClick={()=> router.push('/view/model/1')}>
                        <div className="absolute left-4 pointer-events-none ">
                            <img src={`${activeId === "automated-ml" ? "/menu_icon.svg" : "/menu_icon_white.svg"}`} alt="menu_icon" />
                        </div>
                        {activeId === "automated-ml" ? <Button text={"Automated ML"} divClass="w-full cursor-pointer" className="py-3.5" /> :
                            <Button text={"Automated ML"} divClass="w-full" className={`py-3.5 bg-transparent text-sm cursor-pointer`} />
                        }
                    </div>
                    <div className={`flex flex-col gap-8 mt-8 cursor-pointer ${activeId === "automated-ml" && "px-4"}`}>
                        {activeId !== "data" ? <div className="text-[#9E9E9E] flex gap-4 px-4 items-center"  onClick={()=> router.push('/data')}>
                            <img src="/graph.svg" alt="data_icon" />
                            <p className="text-sm">Data</p>
                        </div> :

                            <div className="text-white flex gap-4 items-center bg-[#06D6A0] rounded-lg font-semibold py-3.5 px-4"  onClick={()=> router.push('/data')}>
                                <img src="/graph_white.svg" alt="data_icon" />
                                <p className="text-sm">Data</p>
                            </div>
                        }
                        {activeId !== "jobs" ? <div className="text-[#9E9E9E] flex gap-4 items-center px-4 cursor-pointer" onClick={()=> router.push('/jobs')}>
                            <img src="/wallet-minus.svg" alt="jobs" />
                            <p className="text-sm">Jobs</p>
                        </div>:
                        <div className="text-white flex gap-4 items-center bg-[#06D6A0] rounded-lg font-semibold py-3.5 px-4" onClick={()=> router.push('/jobs')}>
                            <img src="/wallet-minus_white.svg" alt="jobs_icon" />
                            <p className="text-sm">Jobs</p>
                        </div>}
                        <div className="text-[#9E9E9E] flex gap-4 items-center px-4">
                            <img src="/gg_profile.svg" alt="data_icon" />
                            <p className="text-sm">Profile</p>
                        </div>
                    </div>
                </div>
                <div className="px-4">
                    <div className="text-[#9E9E9E] flex gap-4 items-center ">
                        <img src="/logout.svg" alt="logout_icon" />
                        <p className="font-normal text-[#9E9E9E] text-sm">Logout</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;