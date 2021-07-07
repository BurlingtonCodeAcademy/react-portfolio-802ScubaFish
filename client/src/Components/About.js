import React from 'react';
import profileImg from '../Images/AboutProfileImageTwo.jpg';

// This Handles The About Page Component
function About() {

    return (

        <div id='flexContainer'>
            <div id='profImageContainer'>

                {/* The Main Image On this Page Taking Up the Left Side of the Screen */}
                <img id='profileImgTwo' src={profileImg} alt='profile' />
            </div>

            {/* My Bio and Personal Info/Interests Section */}
            <div id='profileContainer'>
                <h1>Full Stack <span id='turqColor'>Web Developer</span></h1>
                <h3>I'm Christian Dow. I was born in Lebanon, Tennessee. I am a simple, creative, enthusiastic and fun-loving person. If I'm not outside exploring with my dog or taking photos then you can probaby find me working on Subaru's with friends. I enjoy finding creative stylish solutions to problems, and helping others solve theirs.</h3>
                <h3>I have extensive experience with HTML5, CSS3, Javascript, React, Node js, Heroku, Firebase, Google Maps, Hubspot CMS, Express and on. I also am adept at handling various DSLRs to take and create high quality photos accompanied by Photoshop and Lightroom CC   </h3>
                
                {/* Sets up the Flex Styling needed to Split These Two Sections Into a Column */}
                <div id='subContainer'>
                    <div id='leftColumn'>
                        <h4><span className='subContainerTitles'>Name : </span> Christian Dow</h4>
                        <h4><span className='subContainerTitles'>Age : </span> {(new Date().getFullYear() - 1994)} Years</h4>
                        <h4><span className='subContainerTitles'>Email : </span> ChristianRDow@Gmail.com</h4>
                    </div>
                    <div id='rightColumn'>
                        <h4><span className='subContainerTitles'>Phone : </span> (802) 735-3393</h4>
                        <h4><span className='subContainerTitles'>Address : </span> Milton, Vermont 05468</h4>
                        <h4><span className='subContainerTitles'>Hobby : </span> Photography, Auto-X,<br />Hiking, and Videogaming</h4>
                    </div>
                </div>

                {/* The Lowest Row Re-Centered on it's Own Line To Keep The Other Two Columns Above Even */}
                <div id='bottomRow'>
                    <h4>Favorite Color : <span className='subContainerTitles'>Turquoise</span>.</h4>
                </div>
            </div>
        </div>

    )
}

export default About;