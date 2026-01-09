"use client"
import Button from "@/component/button";
import LeftSidePage from "@/component/leftsidePage";
import Logo from "@/component/logo";
import { useRouter } from "next/navigation";
import { useState } from "react";


const SignupPage: React.FC = () => {

    const [signup, setSignup] = useState(true);
    const router = useRouter();

    return (
        <div className="grid grid-cols-2 min-h-screen">
            <LeftSidePage/>
            <div className="bg-[#31353F] flex flex-col items-center justify-center">
                <div className="w-90 flex flex-col justify-between">
                    <div className={`flex flex-col ${signup ? "gap-8":"gap-6"}`}>
                        {signup && <Logo/>}
                        <p className="text-center leading-8 text-white font-bold text-[27px]">
                            {signup ? "Create an account" : "Create Personal"} {signup ? <span className="block">Today</span> : <span className="block">Account</span>}
                        </p>
                        {signup && (<><div className="flex gap-2 items-center mt-4">
                            <img src="f_logo.svg" alt="facebook_logo" />
                            <p className="text-sm leading-5 text-white">Continue with facebook</p>
                        </div>
                            <div className="flex gap-2 items-center">
                                <img src="a_logo.svg" alt="facebook_logo" />
                                <p className="text-sm leading-5 text-white">Continue with Apple</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src="g_logo.svg" alt="facebook_logo" />
                                <p className="text-sm leading-5 text-white">Continue with Google</p>
                            </div></>)}

                        {!signup && (<>
                            <div className="flex flex-col gap-8 mt-4">
                                <div className="flex flex-col gap-1">
                                    <label className="text-[#B8B8B8] leading-4 text-[10px] px-2" >EMAIL OR PHONE NUMBER</label>
                                    <input type="gmail" placeholder="incrypro-app@email.com" className="placeholder:text-white py-3.5 px-2" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-[#B8B8B8] leading-4 text-[10px] px-2" >PASSWORD</label>
                                    <input type="password" placeholder="*********" className="placeholder:text-white py-3.5 px-2" />
                                </div>
                                <p className="text-[#B8B8B8] text-[10px] leading-4 text-center mt-2 translate-y-2">By continuing you accept our Privacy Policy</p>
                            </div>
                        </>)}
                        <Button onClick={() => {if (!signup) router.push("/verification");}} text={signup ? "Sign up with phone or email" : "Create Personal Account"} className={`text-sm p-3.5 ${signup ? "" : "text-[#171717]"}`} />
                    </div>
                    <div className={`flex flex-col gap-4 ${signup ? " mt-30":"mt-20"}`}>
                        <p className="text-[#848484] text-center text-sm ">{signup ? "Already have an account?" : "Not looking for an account?"}</p>
                        <Button onClick={() => setSignup(!signup)} text={signup ? "Sign in" : "Sign Up"} className="text-sm p-3.5 bg-[#202020] text-white" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupPage;