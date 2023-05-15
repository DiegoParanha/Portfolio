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
                <h1 className='name-2'>Diego Paranhos 🇺🇸  🇧🇷</h1>
                <div className='intro-desc'>From graduating as a Film, Media and Television major I made a transition into the software development world and it has sparked an intrest in me like never before, 
                I realized that my true passion lay in technology and software development.While the transition was challenging, I found that my creativity and attention to detail from my previous studies translated well into my new career.</div>
                <div className='intro-desc2'>Coming from a non-technical background, I choose to pursue Software Engineering because it is rewarding, challenging, and always evolving. </div>
                <div className='intro-desc3'>I'm eager to enter a field that is ever-changing, where my self-starter skills and curiosity bring value.</div>
                </div>
            </div>
        <div className='skills'>
            <div className='languages'>
                <h1 className='skills-language'>Languages</h1>
                <div className='languages-div'>
                    <p className='skill'><img className="logo" src="Js-logo.png" alt="" /></p>
                    <p className='skill'><img className="logo" src="CSS-logo.png" alt="" /></p>
                    <p className='skill'><img className="logo" src="HTML-logo.png" alt="" /></p>
                    <p className='skill'><img className="logo" src="Python-logo.png" alt="" /></p>
                    <p className='skill'><img className="logo" src="ejs.svg" alt="" /></p>
                </div>
            </div>
            <div className='frameWorks'>
                <h1 className='skills-frameWorks'>Libraries/FrameWorks</h1>
                <div className='frameWorks-div'>
                    <p className='skill'><img className="logo" src="React-logo.png" alt="" /></p>
                    <p className='skill'><img className="logo" src="Nodejs-logo.png" alt="" /></p>
                    <p className='skill'><img className="logo" src="Express-logo.png" alt="" /></p>
                    <p className='skill'><img className="logo" src="MongoDB-logo.png" alt="" /></p>
                    <p className='skill'><img className="logo" src="Django-logo.png" alt="" /></p>
                    {/* <p className='skill'><img className="logo" src="Jquery-logo.png" alt="" />Jquery</p> */}
                </div>
            </div>
            <div className='tools'>
                <h1 className='skills-tools'>Tools</h1>
                <div className='tools-div'>
                    <p className='skill'><img className="logo" src="Git-logo.png" alt="" /></p>
                    <p className='skill'><img className="logo" src="black-github.png" alt="" /></p>
                    <p className='skill'><img className="logo" src="Heroku-logo.png" alt="" /></p>
                    <p className='skill'><img className="logo" src="Netlify-logo.png" alt="" /></p>
                    <p className='skill'><img className="logo" src="VScode-logo.png" alt="" /></p>
                    <p className='skill'><img className="logo" src="Canva-logo.png" alt="" /></p>
                    <p className='skill'><img className="logo" src="Zoom-logo.png" alt="" /></p>
                    <p className='skill'><img className="logo" src="Figma-logo.png" alt="" /></p>
                    <p className='skill'><img className="logo" src="Trello-logo.png" alt="" /></p>
                    <p className='skill'><img className="logo" src="Slack-logo.png" alt="" /></p>
                    {/* <p className='skill'><img className="logo" src="Discord-logo.png" alt="" />Discord</p> */}
                </div>
            </div>
        </div>

        <div className="invis-foot"><Footer /></div>
        </>
    )
}