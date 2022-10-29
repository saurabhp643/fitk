import React from 'react'
import './Hero.css'
import { Header } from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'


const Hero = () => {
    return (
        <div className='hero'>
            <div className='left-h'>
                <Header />
                {/* the best ad */}
                <div className="the-best-ad">
                    <div></div>
                    <span>the best fitness club in the town</span>
                </div>
                {/* Hero Heading */}
                <div className="hero-text">
                    <div ><span className='stroke-text'>Shape </span>
                        <span>Your</span></div>
                    <div><span>Ideal Body</span>
                    </div>
                    <div ><span>
                        IDEAL BODY IN HERE WE WILL HELP YOU TO SHARP AND BUILD YOUR IDEAL BODY AND LIVE UP YOUR LIFE TO THE FULLEST
                    </span></div>
                </div>
                {/* figures */}
                <div className="figures">
                    <div>
                        <span>140+</span>
                        <span>members joined</span></div>
                    <div>
                        <span>+978</span>
                        <span>members joined</span></div>
                    <div>
                        <span>+50</span>
                        <span>fitness progress
                        </span></div>

                </div>

                {/* hero button */}
                <div className="hero-buttons">
                    <button className='btn'>GET STARTED</button>
                    <button className='btn'>LEARN MORE</button>
                </div></div>
            <div className='right-h'>
                <button className='btn'>Join Now</button>
                <div className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>

{/* hero images */}
<img src={hero_image} alt="" className='hero-image' />
<img src={hero_image_back} alt=""  className='hero-image-back'/>
{/* calories */}
<div className="calories">
    <img src={Calories} alt="" />
    <span>Calories Burned</span>
    <span>220 kcal</span>
</div>

            </div>
        </div>
    )
}
export default Hero
