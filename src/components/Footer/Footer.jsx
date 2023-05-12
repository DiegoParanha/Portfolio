import './Footer.css'
export default function Footer() {

    return (
        <>
        <footer className='footer'>
        <div className='underFoot'>
            <div className="footer2">📩 Diegoparanhos14@gmail.com &nbsp; | </div>
            <div className="footer2">📞 (310)-701-5367 &nbsp; | </div>
            <div className="footer2">Los Angeles, CA</div>
        </div>
        <div className='group-2'>
            <a href="https://github.com/DiegoParanha"><img className="img-links-btn"src="white-github.png" alt="" /></a>
            <a href="https://www.linkedin.com/in/diegoparanhos/"><img className="img-links-btn"src="white-linkedin.png" alt="" /></a>
        </div>
        </footer>
        </>
    )
}