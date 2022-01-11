import React from 'react';
import { Link } from 'react-router-dom';
import ResumePage1 from '../Images/Resume-Page1 - no address.png';
import ResumePage2 from '../Images/Resume-Page2.png';

// Sets Up The Experience Page Component
function Experience() {
    return (
       <>
        {/* Main Page Title */}
        <h3 id='center'>Check Out This Resume!</h3>

        {/* Sets up an iFrame or 'Window' To My Personal Resume Google Document */}
            {/* <iframe id='iFrame'
            title='Christian Dow Resume'
            src="https://docs.google.com/document/d/1NekugzOhVjjUVbbHl1Cio41FwBkXqGeTHlX78Tg4-Vs/edit"
            /> */}

            {/* Replaced iFrame with images from PDF for higher quality document styling overall */}
            <div className='resumeContainer'>
                <a href='https://www.linkedin.com/in/christian-dow/' target="_blank" rel="noopener noreferrer"><img className='resumeImage1' src={ResumePage1} alt="Resume Page 1"></img></a>
                <p className='pageText1'>(Page 1)</p>
                <a href='https://www.linkedin.com/in/christian-dow/' target="_blank" rel="noopener noreferrer"><img className='resumeImage2' src={ResumePage2} alt="Resume Page 2"></img></a>
                <p className='pageText2'>(Page 2)</p>

                <h3 id='center'>Like what you see?</h3>
                <Link className='contactMeLink' id='center' to='/contact-me'>Fill out this form!</Link>
            </div>
            
       </>
    )
}
// Exports The Entire Component To Be Imported in App.js
export default Experience;

