import Lottie from "lottie-react";
import animationData from "@/assets/crypto-animation.json";

export default function DataAnalysisLottie() {
    return (
        <div className="w-full h-full min-h-[300px] flex items-center justify-center pointer-events-none opacity-80 mix-blend-screen">
            <div className="w-full h-full max-w-md drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                />
            </div>
        </div>
    );
}
