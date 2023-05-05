import './ContactMe.css'
import Footer from '../../../components/Footer/Footer'


export default function ContactMe() {
    return (
        <>
        <h1 className='page-title'>Contact Me</h1>
        <h2 className='underTitle'>I look forward to hearing from you!</h2>
        <div className='contact-background'>
            <div className='contact-form'>
                <input name="name" placeholder="Enter Your Full name" id="name-input"></input>
                <input name="email" placeholder="Enter Your email" id="email-input"></input>
                <textarea name="description" placeholder="Message"id="" cols="30" rows="10"></textarea>
                <button className='contact-submit'>Submit</button>
            </div>
        </div>
        <Footer />
        </>
    )
}