import './MyProjects.css'
import Footer from '../../../components/Footer/Footer'

export default function MyProjects() {
    return (
        <>
        <div className="">
            <h1 className='page-title'>My Projects</h1>
        </div>
        <div className='project-section'>
            <h1 className='project-title'>Movielo</h1>
            <div className='project-container'>
                <div className='img-border'><img className="project-img-main" src="movielo-homepage.png" alt="" /></div>
                <div className='project-info'>
                    <div className='project-under'>MongoDB - Express - React - Node - JavaScript - CSS - HTML</div>
                    <div className='project-desc'>Movielo was created because I was tried of not having a place to store my favorite movies in my watch list or watched list so I took it upon myself to make it. The website was created using React, JavaScript and  with a movie Api to search for anything in their database so users can search freely.</div>
                    <div className='project-btns'>
                        <a href="https://github.com/DiegoParanha/Movielo"><img className="project-inner-btns" src="black-github.png" alt="" /></a>
                        <a href="https://movielo.herokuapp.com/"><img className="project-inner-btns" src="right-arrow.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className='project-section'>
            <h1 className='project-title'>Arcbnb</h1>
            <div className='project-container'>
                <div className='img-border'><img className="project-img-main" src="arc-bnb.png" alt="" /></div>
                <div className='project-info'>
                    <div className='project-under'>Django - Python - HTML - CSS - JavaScript</div>
                    <div className='project-desc'>ARCBNB blah blah blah</div>
                    <div className='project-btns'>
                        <a href="https://github.com/DiegoParanha/arcbnb"><img className="project-inner-btns" src="black-github.png" alt="" /></a>
                        <a href="https://arcbnb.herokuapp.com/"><img className="project-inner-btns" src="right-arrow.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className='project-section'>
            <h1 className='project-title'>Travel-Express</h1>
            <div className='project-container'>
                <div className='img-border'><img className="project-img-main" src="Travel-express.png" alt="" /></div>
                <div className='project-info'>
                    <div className='project-under'>MongoDB - Express - React - Node - JavaScript - CSS - HTML</div>
                    <div className='project-desc'>Movielo was created because I was tried of not having a place to store my favorite movies in my watch list or watched list so I took it upon myself to make it. The website was created using React, JavaScript and  with a movie Api to search for anything in their database so users can search freely.</div>
                    <div className='project-btns'>
                        <a href="https://github.com/DiegoParanha/travel-express"><img className="project-inner-btns" src="black-github.png" alt="" /></a>
                        <a href="https://travel-express1.herokuapp.com/"><img className="project-inner-btns" src="right-arrow.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className='project-section'>
            <h1 className='project-title'>Spaceman</h1>
            <div className='project-container'>
                <div className='img-border'><img className="project-img-main" src="Travel-express.png" alt="" /></div>
                <div className='project-info'>
                    <div className='project-under'>MongoDB - Express - React - Node - JavaScript - CSS - HTML</div>
                    <div className='project-desc'>Movielo was created because I was tried of not having a place to store my favorite movies in my watch list or watched list so I took it upon myself to make it. The website was created using React, JavaScript and  with a movie Api to search for anything in their database so users can search freely.</div>
                    <div className='project-btns'>
                        <a href="https://github.com/DiegoParanha/travel-express"><img className="project-inner-btns" src="black-github.png" alt="" /></a>
                        <a href="https://travel-express1.herokuapp.com/"><img className="project-inner-btns" src="right-arrow.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className='project-section'>
            <h1 className='project-title'>Pokemon Collector</h1>
            <div className='project-container'>
                <div className='img-border'><img className="project-img-main" src="Travel-express.png" alt="" /></div>
                <div className='project-info'>
                    <div className='project-under'>MongoDB - Express - React - Node - JavaScript - CSS - HTML</div>
                    <div className='project-desc'>Movielo was created because I was tried of not having a place to store my favorite movies in my watch list or watched list so I took it upon myself to make it. The website was created using React, JavaScript and  with a movie Api to search for anything in their database so users can search freely.</div>
                    <div className='project-btns'>
                        <a href="https://github.com/DiegoParanha/travel-express"><img className="project-inner-btns" src="black-github.png" alt="" /></a>
                        <a href="https://travel-express1.herokuapp.com/"><img className="project-inner-btns" src="right-arrow.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="invis-foot"><Footer /></div>
        </>
    )
}