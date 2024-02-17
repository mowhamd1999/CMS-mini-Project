import React from 'react'
import './Features.css'
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";
export default function Features() {
    return (
        <div className='features'>
            <div className='featureItem'>
                <span className='featuresTitle'>Revanue</span>
                <div className="featureContainer">
                    <span className="featureMoney">$1500</span>
                    <span className="featureRate">-11.4<FaLongArrowAltDown className='featureIcon negative' /></span>
                </div>
                <span className="featureSub">compared to last mouth</span>
            </div>
            <div className='featureItem'>
                <span className='featuresTitle'>Sale</span>
                <div className="featureContainer">
                    <span className="featureMoney">$535</span>
                    <span className="featureRate">-1.4<FaLongArrowAltDown className='featureIcon negative' /></span>
                </div>
                <span className="featureSub">compared to last mouth</span>
            </div>
            <div className='featureItem'>
                <span className='featuresTitle'>Cost</span>
                <div className="featureContainer">
                    <span className="featureMoney">$6,535</span>
                    <span className="featureRate">+2.5<FaLongArrowAltUp className='featureIcon' /></span>
                </div>
                <span className="featureSub">compared to last mouth</span>
            </div>
        </div>
    )
}
