import './AboutMe.css'
import Footer from '../../../components/Footer/Footer'
import { useState, useEffect } from "react";

const terms2 = [
    'Coachable',
    'Cooperative',
    'Organized',
    'Outgoing',
    'Curious',
    'Passionate',
    'Driven'
]

export default function AboutMe() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === terms2.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                setCurrentIndex(currentIndex + 1);
            }
        }, 1500)
        
        return () => clearInterval(intervalId);
    })
    return (
        <>
        <div className="">
            <h1 className='page-title'>About Me</h1>
        </div>
        <div className="intro">
            <img className="img-me"src="me.jpeg" alt="" />
            <div className='intro-2'>
                <h1 className='name-2'>Diego Paranhos 🇧🇷</h1>
                <div className='intro-desc'>As a Software Engineer specializing in organization and management, I prioritize project collaborations to bring the best out of my teammates. As a motivated, self-driven learner with a background in media and tech, I have a keen eye for combining specific details/design. My aim is to provide a clear vision for improvement and lead to consumer satisfaction.</div>
            </div>
            <h2 className='words'>{terms2[currentIndex]}</h2>
        </div>
        <div className='skills'>
            <div className='languages'>
                <h1>Languages</h1>
                <div className='languages-div'>
                    <p>JavaScript</p>
                    <p>CSS</p>
                    <p>HTML</p>
                    <p>Python</p>
                </div>
            </div>
            <div className='frameWorks'>
                <h1>Libraries/FrameWorks</h1>
                <div className='frameWorks-div'>
                    <p>React</p>
                    <p>Node.js</p>
                    <p>Express</p>
                    <p>Mongoose</p>
                </div>
            </div>
            <div className='tools'>
                <h1>Tools</h1>
                <div className='tools-div'>
                    <p>Git</p>
                    <p>GitHub</p>
                    <p>MongoDB</p>
                    <p>Heroku</p>
                    <p>Netlify</p>
                    <p>VS Code</p>
                    <p>Canva</p>
                    <p>Zoom</p>
                </div>
            </div>
        </div>

        <Footer />
        </>
    )
}