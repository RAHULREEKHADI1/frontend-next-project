"use client"
import Button from "@/component/button";
import Logo from "@/component/logo";
import { useRouter } from "next/navigation";


const LoginPage: React.FC = () => {
    const router = useRouter();

    const handleSignin = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push("/view");
    };
    const handleSignup = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push("/signup");
    };
    return (
        <div className="grid grid-cols-[25%_75%] min-h-screen">
            <div className="bg-[#1B2028] p-8.5 flex flex-col justify-center items-center">
                <div className="min-w-full">
                    <div>
                        <Logo />
                        <p className="text-white font-bold text-xl text-center my-10">Login into your account</p>
                    </div>
                    <div>
                        <form action="">
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-2">
                                    <label className="font-normal text-md text-[#555555]">Email Address</label>
                                    <div className="relative flex items-center">
                                        <input type="email" placeholder="alex@email.com" className="w-full leading-12.5 pl-5 placeholder:text-[#555555] placeholder:font-normal bg-[#F1F3F6] rounded-lg" />
                                        <div className="absolute right-0 cursor-pointer bg-[#06D6A0] rounded-lg">
                                            <img src="Email_Frame.svg" alt="email_icon" className="p-3.25" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-normal text-md text-[#555555]">Password</label>
                                    <div className="relative flex items-center">
                                        <input type="password" placeholder="Enter your password" className="w-full leading-12.5 pl-5 placeholder:text-[#555555] placeholder:font-normal bg-[#F1F3F6] rounded-lg" />
                                        <div className="absolute right-0 cursor-pointer bg-[#06D6A0] rounded-lg">
                                            <img src="Lock_Frame.svg" alt="pass_icon" className="p-3.25" />
                                        </div>
                                    </div>
                                    <a href="#" className="text-[#1E2772] text-sm underline text-right ">Forgot Password</a>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        onClick={handleSignin}
                                        className="w-full rounded-lg py-3.25 text-md bg-[#06D6A0] text-white font-semibold"
                                    >
                                        Signin Now
                                    </button>
                                </div>
                                <div className="relative flex items-center py-5">
                                    <div className="grow border-t border-[#C2C2C2]"></div>
                                    <span className="shrink mx-4 text-sm font-normal text-[#C2C2C2]">
                                        OR
                                    </span>
                                    <div className="grow border-t border-[#C2C2C2]"></div>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        onClick={handleSignup}
                                        className="w-full rounded-lg py-3.25 text-md border border-[#06D6A0] bg-transparent text-[#06D6A0] font-semibold"
                                    >
                                        Signup Now
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-[#31353F] min-h-screen flex items-center justify-center">
                <img src="login-illustrator.svg" alt="login_illustrator_image" />
            </div>

        </div>
    )
}

export default LoginPage;