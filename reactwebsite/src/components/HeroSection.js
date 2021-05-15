import React from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';
import video from '../videos/video-2.mp4';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={video} autoPlay loop muted />
            <h1>THINK! IMAGINE! IMPLEMENT!</h1>
            <p>Habbit of Wining!!!</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    WINNING JOURNEY <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}
 
export default HeroSection;
