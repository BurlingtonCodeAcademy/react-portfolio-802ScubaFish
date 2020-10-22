import React from 'react';
import { Link } from 'react-router-dom'
import BWeBooksWhitePapers from '../Images/BeeswaxEbooksWhitePapers.png';
import BWcaseStudies from '../Images/BeeswaxCaseStudies.png';
import BWEmails from '../Images/BeeswaxEmails.png';
import BWwebinars from '../Images/BeeswaxWebinars.png';
import BWdirectory from '../Images/BeeswaxDirectory.png';


// This is the Navigation Bar Component That exists on all of the pages
function Beeswax() {
    return (
        <div>

        <div className="buttonsContainer">

            {/* Projects Page Button */}
            <Link className='projectButton' to='/projects'><h3 className='buttonText'>Development Projects</h3></Link>

            {/* HubSpot Page Button */}
            <Link className='hubSpotButton' to='/hubspot'><h3 className='buttonText'>HubSpot Projects</h3></Link>

        </div>

        <div className='CENTER'>

        {/* Main Page Title */}
        <h1>Beeswax <span id='turqColor'> Migration</span></h1>

        {/* Main Page Sub-Title */}
        <h5>An Overview of Beeswax's HubSpot Migration from Pardot and Wordpress</h5>

        </div>

        <div id='beeswaxMastersContainer'> 

        {/* Template Section Title */}
        <h1 className="center">Beeswax Master Templates</h1>

        {/* Template Section Sub-Title */}
        <h5 className="center">Landing Pages, Thank You Pages, and Emails</h5>

        {/* The Top Template Section Row */}
        <div className='beeRows'>

            {/* eBooks and Whitepapers Landing Page */}
            <div className='halfWidth pushImg'>
                {/* <img className='projectImg' src={} alt="Project Screen Shot" /> */}
                <a className='projectLinks' href='' target="_blank" rel="noopener noreferrer"><h3 className='center'>Beeswax eBooks & White Papers</h3><h5 className='center'>Place Holder Text Here</h5><h5 className='center'  id='hubspotOrange'>Place Holder Features Here and Here and Here</h5></a>
            </div>

            {/* Case Studies Master Landing Page*/}
            <div className='halfWidth pushImg'>
                {/* <img className='projectImg' src={} alt="Project Screen Shot" /> */}
                <a className='projectLinks' href='' target="_blank" rel="noopener noreferrer"><h3 className='center'>Beeswax Case Studies</h3><h5 className='center'>Place Holder Text Here</h5><h5 className='center'  id='hubspotOrange'>Place Holder Features Here and Here and Here</h5></a>
            </div>

        </div>

        {/* The Bottom Template Section Row */}
        <div className='beeRows'>
            {/* Webinars Master Landing Page*/}
            <div className='halfWidth pushImg'>
                {/* <img className='projectImg' src={} alt="Project Screen Shot" /> */}
                <a className='projectLinks' href='' target="_blank" rel="noopener noreferrer"><h3 className='center'>Beeswax Webinars</h3><h5 className='center'>Place Holder Text Here</h5><h5 className='center'  id='hubspotOrange'>Place Holder Features Here and Here and Here</h5></a>
            </div>

            {/* Emails */}
            <div className='halfWidth pushImg'>
                {/* <img className='projectImg' src={} alt="Project Screen Shot" /> */}
                <a className='projectLinks' href='' target="_blank" rel="noopener noreferrer"><h3 className='center'>Beeswax Email Template</h3><h5 className='center'>Place Holder Text Here</h5><h5 className='center'  id='hubspotOrange'>Place Holder Features Here and Here and Here</h5></a>
            </div>

        </div>

    </div>

    <div id='beeswaxMastersContainer'> 

        {/* Template Section Title */}
        <h1 className="center">Beeswax Migration Directory</h1>

        {/* Template Section Sub-Title */}
        <h5 className="center">Beeswax Migration Guide</h5>

        {/* The Top Template Section Row */}
        <div className='beeRows'>

            {/* eBooks and Whitepapers Landing Page */}
            <div className='halfWidth pushImg'>
                {/* <img className='projectImg' src={} alt="Project Screen Shot" /> */}
                <a className='projectLinks' href='' target="_blank" rel="noopener noreferrer"><h5 className='center'>Place Holder Text Here</h5><h5 className='center'  id='hubspotOrange'>Place Holder Features Here and Here and Here</h5></a>
            </div>

        </div>

    </div>


    </div>
    )
}

export default Beeswax;

