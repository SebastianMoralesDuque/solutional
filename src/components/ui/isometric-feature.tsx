import Lottie from "lottie-react";

interface IsometricFeatureProps {
    animationData: unknown;
    title: string;
    description: string;
}

export default function IsometricFeature({ animationData, title, description }: IsometricFeatureProps) {
    return (
        <div className="flex flex-col items-center text-center group w-full">
            <div className="w-full max-w-sm h-[320px] bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 rounded-2xl md:rounded-3xl flex items-center justify-center p-4 transition-all duration-500 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] group-hover:-translate-y-2 mb-8">
                <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    className="w-full h-full object-contain"
                />
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-black dark:text-white mb-4 tracking-tight transition-colors duration-500">
                {title}
            </h3>
            <p className="text-black/60 dark:text-white/60 text-sm md:text-base leading-relaxed max-w-xs transition-colors duration-500">
                {description}
            </p>
        </div>
    );
}
