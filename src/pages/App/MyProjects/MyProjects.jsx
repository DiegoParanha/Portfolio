import './MyProjects.css'
import Footer from '../../../components/Footer/Footer'

export default function MyProjects() {
    return (
        <>
        <div className="">
            <h1 className='page-title'>My Projects</h1>
        </div>
        <div className='all-projects'>
        <div className='project-section'>
            <h1 className='project-title'>Movielo</h1>
            <div className='project-container'>
                <div className='img-border'><img className="project-img-main" src="movielo-homepage.png" alt="" /></div>
                <div className='project-info'>
                    <div className='project-under'>MongoDB - Express - React - Node - JavaScript - CSS - HTML</div>
                    <div className='project-desc'>Movielo is a movie storage platform that was created out of frustration. I was tired of not having a designated place to store all of my favorite movies/series in one convenient location. As a movie lover, I wanted a way to easily access and organize my collection without the hassle of searching through multiple platforms or physical copies. Thus, Movielo was born. Now, users can create their own personal movie library and keep track of their favorite films. With a user-friendly interface and a wide range of features, Movielo can become a popular choice for movie enthusiasts everywhere.</div>
                    <div className='project-btns'>
                        <a href="https://github.com/DiegoParanha/Movielo"><img className="project-inner-btns" src="white-github.png" alt="" /></a>
                        <a href="https://movielo.herokuapp.com/"><img className="project-inner-btns" src="whitearrow.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className='project-section'>
            <h1 className='project-title'>Arcbnb</h1>
            <div className='project-container'>
                <div className='img-border'><img className="project-img-main" src="arc-bnb.png" alt="" /></div>
                <div className='project-info'>
                    <div className='project-under'>Django - Python - HTML - CSS</div>
                    <div className='project-desc'>ARCBNB is an Airbnb clone but with a fun twist. Using Python my collaboration partners and I created a website using the Django framework and added luxury homes to rent. The site allows for users to log in and filter the search by any ameninties. The site also has many modern features similarly to how Airbnb's site operates.</div>
                    <div className='project-btns'>
                        <a href="https://github.com/DiegoParanha/arcbnb"><img className="project-inner-btns" src="white-github.png" alt="" /></a>
                        <a href="https://arcbnb.herokuapp.com/"><img className="project-inner-btns" src="whitearrow.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className='project-section'>
            <h1 className='project-title'>Travel-Express</h1>
            <div className='project-container'>
                <div className='img-border'><img className="project-img-main" src="Travel-express4.png" alt="" /></div>
                <div className='project-info'>
                    <div className='project-under'>MongoDB - Express - React - Node - JavaScript - CSS - HTML</div>
                    <div className='project-desc'>Travel - Express is an web app that allows users to create and share their travel experiences with others. The website provides users with the option to log in using Google OAuth services, which makes the registration process quick and easy. Once logged in, users can create posts about their travels, including photos, videos, and detailed descriptions. These posts can be shared with others on the website, providing a forum for discussing travel experiences and recommendations. The Travel - Express website also allows users to browse through other users' posts, providing a source of inspiration for future travel plans. Overall, if you are looking for a fun place to share your teavel experiance or looking for some inspiration on where to go next then this is the website for you.</div>
                    <div className='project-btns'>
                        <a href="https://github.com/DiegoParanha/travel-express"><img className="project-inner-btns" src="white-github.png" alt="" /></a>
                        <a href="https://travel-express1.herokuapp.com/"><img className="project-inner-btns" src="whitearrow.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className='project-section'>
            <h1 className='project-title'>Spaceman</h1>
            <div className='project-container'>
                <div className='img-border'><img className="project-img-main" src="spaceman.png" alt="" /></div>
                <div className='project-info'>
                    <div className='project-under'>JavaScript - CSS - HTML</div>
                    <div className='project-desc'>Spaceman is a web based game that was developed using Vanilla JavaScript, HTML and CSS. It is a fun and exciting guessing game that involves all things space. In this game, the player has to guess the letters of a word, with each incorrect guess leading to the Spaceman doom. The aim of the game is to guess the word correctly before the spaceman is fully gone. Spaceman is a great game for all space enthusiasts and lovers of word games alike.</div>
                    <div className='project-btns'>
                        <a href="https://github.com/DiegoParanha/Spaceman"><img className="project-inner-btns" src="white-github.png" alt="" /></a>
                        <a href="https://diegoparanha.github.io/Spaceman/"><img className="project-inner-btns" src="whitearrow.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className='project-section'>
            <h1 className='project-title'>Pokemon Collector</h1>
            <div className='project-container'>
                <div className='img-border'><img className="project-img-main" src="Pokemon-collector.png" alt="" /></div>
                <div className='project-info'>
                    <div className='project-under'>Python - AWS - CSS - HTML</div>
                    <div className='project-desc'>Pokemon Collector was a fun project made so I could keep track of all my favorite pokemon. It gives you the option to upload a picture of them using AWS as well as feed them.</div>
                    <div className='project-btns'>
                        <a href="https://github.com/DiegoParanha/Pokemon-collector"><img className="project-inner-btns" src="white-github.png" alt="" /></a>
                        <a href="https://pokemoncollector-1.herokuapp.com/"><img className="project-inner-btns" src="whitearrow.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="fixed-foot">super secret text<Footer /></div>
        </>
    )
}