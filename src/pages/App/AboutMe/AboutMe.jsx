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
                <div className='intro-desc'>As a software engineer specializing in organization and management, my top priority is to ensure that projects are executed collaboratively. I firmly believe that collaboration is essential for the success of any project, especially in the software engineering industry. Effective collaboration involves a shared understanding of project objectives, open and honest communication, and a willingness to work together towards a common goal. To achieve this, I use a variety of tools and techniques to keep my team organized and focused, including project management software, agile methodologies, and regular check-ins. By prioritizing project collaboration, I believe that my team and I can deliver high-quality software solutions that meet the needs of our clients and help drive their businesses forward.</div>
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