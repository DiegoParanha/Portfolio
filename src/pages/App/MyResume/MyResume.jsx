import { PDFDownloadLink } from '@react-pdf/renderer'
import Footer from '../../../components/Footer/Footer'
import PDFFile from '../../../components/PDFFile/PDFFile'
import './MyResume.css'
export default function MyResume() {
    return (
        <>
        <div className="">
            <h1 className="page-title">My Resume</h1>
        </div>
        {/* <img className="resume" src="ResumePic.png" alt="" /> */}
        <PDFFile />
        <PDFDownloadLink document={<PDFFile />} fileName="Diegos-resume">
            {({loading}) => (loading ? <button className="resumeBtn">loading document...</button> : <button className="resumeBtn">➔Download CV</button>)}
        </PDFDownloadLink>
        <div className='resume-foot'><Footer /></div>
        </>
    )
}