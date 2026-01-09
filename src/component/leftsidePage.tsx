import Logo from "./logo"



const LeftSidePage: React.FC = () => {
    return (
        <div className="relative flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: "url('/bg.svg')" }}>
            <Logo />
            <div className="absolute top-1/2 mt-20">
                <h3 className="text-white text-[2rem] font-bold leading-9.5">
                    Sign up Now
                </h3>
                <p className="text-white text-sm font-semibold text-center mt-15">
                    Lorem ipsum
                </p>
            </div>

        </div>
    )
}
export default LeftSidePage;