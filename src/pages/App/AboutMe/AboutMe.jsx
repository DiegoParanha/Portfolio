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
        <h2 className='words'><img className="img-me"src="me.jpeg" alt="" />{terms2[currentIndex]}</h2>
            <div className='intro-2'>
                <h1 className='name-2'>Diego Paranhos 🇧🇷</h1>
                <div className='intro-desc'>As a Software Engineer specializing in organization and management, I prioritize project collaborations to bring the best out of my teammates. As a motivated, self-driven learner with a background in media and tech, I have a keen eye for combining specific details/design. My aim is to provide a clear vision for improvement and lead to consumer satisfaction.</div>
            </div>
        </div>
        <div className='skills'>
            <div className='languages'>
                <h1 className='skills-language'>Languages</h1>
                <div className='languages-div'>
                    <p className='skill'><img className="logo" src="Js-logo.png" alt="" />JavaScript</p>
                    <p className='skill'><img className="logo" src="CSS-logo.png" alt="" />CSS</p>
                    <p className='skill'><img className="logo" src="HTML-logo.png" alt="" />HTML</p>
                    <p className='skill'><img className="logo" src="Python-logo.png" alt="" />Python</p>
                    <p className='skill'><img className="logo" src="ejs.svg" alt="" />EJS</p>
                </div>
            </div>
            <div className='frameWorks'>
                <h1 className='skills-frameWorks'>Libraries/FrameWorks</h1>
                <div className='frameWorks-div'>
                    <p className='skill'><img className="logo" src="React-logo.png" alt="" />React</p>
                    <p className='skill'><img className="logo" src="Nodejs-logo.png" alt="" />Node.js</p>
                    <p className='skill'><img className="logo" src="Express-logo.png" alt="" />Express</p>
                    <p className='skill'><img className="logo" src="MongoDB-logo.png" alt="" />MongoDB</p>
                    <p className='skill'><img className="logo" src="Django-logo.png" alt="" />Django</p>
                    {/* <p className='skill'><img className="logo" src="Jquery-logo.png" alt="" />Jquery</p> */}
                </div>
            </div>
            <div className='tools'>
                <h1 className='skills-tools'>Tools</h1>
                <div className='tools-div'>
                    <p className='skill'><img className="logo" src="Git-logo.png" alt="" />Git</p>
                    <p className='skill'><img className="logo" src="black-github.png" alt="" />GitHub</p>
                    <p className='skill'><img className="logo" src="Heroku-logo.png" alt="" />Heroku</p>
                    <p className='skill'><img className="logo" src="Netlify-logo.png" alt="" />Netlify</p>
                    <p className='skill'><img className="logo" src="VScode-logo.png" alt="" />VS Code</p>
                    <p className='skill'><img className="logo" src="Canva-logo.png" alt="" />Canva</p>
                    <p className='skill'><img className="logo" src="Zoom-logo.png" alt="" />Zoom</p>
                    <p className='skill'><img className="logo" src="Figma-logo.png" alt="" />Figma</p>
                    <p className='skill'><img className="logo" src="Trello-logo.png" alt="" />Trello</p>
                    <p className='skill'><img className="logo" src="Slack-logo.png" alt="" />Slack</p>
                    {/* <p className='skill'><img className="logo" src="Discord-logo.png" alt="" />Discord</p> */}
                </div>
            </div>
        </div>

        <div className="invis-foot"><Footer /></div>
        </>
    )
}