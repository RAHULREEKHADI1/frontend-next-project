import Button from "@/component/button";
import LeftSidePage from "@/component/leftsidePage"



const VerificationPage : React.FC=()=>{
    return (
        <div className="grid grid-cols-2 min-h-screen">
            <LeftSidePage/>
            <div className="flex flex-col items-center justify-center bg-[#31353F]">
                <div className="w-90 flex flex-col gap-6">
                    <h3 className="text-[27px] font-bold leading-8 text-white text-center">Verification</h3>
                    <p className="text-center text-[#B8B8B8] text-sm leading-5 font-medium px-5">Enter the 8-digit Crypex security code and your phone number will be verified</p>
                    <div className="flex flex-col gap-1">
                        <label className="text-[10px] leading-4 font-medium text-[#B8B8B8] py-1 px-2">VERIFICATION CODE</label>
                        <input type="number" placeholder="Enter code" className="placeholder:text-white text-white py-3 px-2 text-xs placeholder:text-xs" />
                    </div>
                    <div className="flex gap-3 text-[10px] leading-4 font-medium">
                        <div className="text-[#B8B8B8]">Don't receive your code? </div>
                        <a href="#" className="text-white">Resend</a>
                    </div>
                    
                    <Button text={"Submit"} className="text-[#171717] text-xs py-4 mt-6"/>
                </div>
                
            </div>
        </div>
    )
}
export default VerificationPage;