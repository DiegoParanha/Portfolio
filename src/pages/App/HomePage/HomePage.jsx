import './HomePage.css'
import { useState, useEffect } from "react";

const terms = [
    'Software Engineer',
    'Gamer',
    'Coffee Enjoyer',
    'Dog Lover', 
    'Film Enthusiest',
    'Passionate about tech'
]

export default function HomePage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === terms.length - 1) {
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
        <div className="container">
            <h1 className="name">DIEGO PARANHOS</h1>
            <p className="job">----{terms[currentIndex]}----</p>
        </div>
        <div className='under-job'>
            <a className="git-hub-btn" href="https://github.com/DiegoParanha"><img className='img-links-btn' src="white-github.png" alt=""/></a>
            <a className="linked-in-btn" href="https://www.linkedin.com/in/diegoparanhos/"><img className='img-links-btn' src="white-linkedin.png" alt="" /></a>
        </div>
        <footer className='home-footer'>&copy; 2023 Diego's Portfolio &nbsp;</footer>
        </>
    )
}