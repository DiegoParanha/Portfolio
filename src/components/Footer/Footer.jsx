import './Footer.css'
export default function Footer() {

    return (
        <>
        <footer className='footer'>
        <div className='underFoot'>
            <p className="footer2">➡️ Get in touch with me via phone, email, or by the form!</p>
            <p className="footer2">📩 Diegoparanhos14@gmail.com</p>
            <p className="footer2">📞 (310)-701-5367</p>
        </div>
        <div className='group-2'>
            <a href="https://github.com/DiegoParanha"><img className="img-links-btn"src="white-github.png" alt="" /></a>
            <a href="https://www.linkedin.com/in/diegoparanhos/"><img className="img-links-btn"src="white-linkedin.png" alt="" /></a>
        </div>
        </footer>
        </>
    )
}