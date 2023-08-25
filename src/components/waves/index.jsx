import React from "react";
import "./index.css";

export default function Waves() {
    return (
        <div className="waveWrapper waveAnimation">
            <div className="waveWrapperInner bgTop">
                <div className="wave waveTop" />
            </div>
            <div className="waveWrapperInner bgMiddle">
                <div className="wave waveMiddle" />
            </div>
            <div className="waveWrapperInner bgBottom">
                <div className="wave waveBottom" />
            </div>
        </div>
    );
}
