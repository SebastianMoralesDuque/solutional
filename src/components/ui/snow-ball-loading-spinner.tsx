import React from 'react';

export default function SnowBallLoadingSpinner() {
    return (
        <div className="pl relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
            <div className="pl__outer-ring absolute inset-0 border-4 border-white/20 rounded-full border-t-white animate-spin" style={{ animationDuration: '2s' }}></div>
            <div className="pl__inner-ring absolute inset-4 border-4 border-white/10 rounded-full border-b-blue-400 animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
            <div className="pl__track-cover"></div>
            <div className="pl__ball absolute w-full h-full animate-[trackCover_3s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full shadow-[0_0_10px_#fff] animate-[ball_3s_linear_infinite]">
                    <div className="pl__ball-texture"></div>
                    <div className="pl__ball-outer-shadow animate-[ballOuterShadow_3s_linear_infinite]"></div>
                    <div className="pl__ball-inner-shadow animate-[ballInnerShadow_3s_linear_infinite]"></div>
                    <div className="pl__ball-side-shadows"></div>
                </div>
            </div>
        </div>
    );
}
