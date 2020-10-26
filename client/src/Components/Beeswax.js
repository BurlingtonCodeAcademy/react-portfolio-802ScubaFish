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
            <Link className='projectButton projectBttnPadd' to='/projects'><h3 className='buttonText'>Development Projects</h3></Link>

            {/* HubSpot Page Button */}
            <Link className='hubSpotButtonAlt' to='/hubspot'><h3 className='buttonText'>HubSpot Projects</h3></Link>

        </div>

        <div className='CENTER'>

        {/* Main Page Title */}
        <h1>Beeswax <span id='hubSpotOrng'> Migration</span></h1>

        {/* Main Page Sub-Title */}
        <h5>An Overview of Beeswax's HubSpot Migration from Pardot and Wordpress</h5>

        </div>

        <div id='beeswaxMastersContainer'> 

        {/* Template Section Title */}
        <h2 className="center">Beeswax Main Templates</h2>

        {/* Template Section Sub-Title */}
        <h5 className="center">Landing Pages, Thank You Pages, and Emails</h5>

        {/* The Top Template Section Row */}
        <div className='beeRows'>

            {/* eBooks and Whitepapers Landing Page */}
            <div className='halfWidthBW pushImg'>
                <img className='projectImg' src={BWeBooksWhitePapers} alt="Project Screen Shot" />
                <a className='projectLinks' href='https://resources.beeswax.com/lp-resources-ebooks-and-white-papers' target="_blank" rel="noopener noreferrer"><h3 className='center'>Beeswax eBooks & White Papers</h3><h5 className='center'>eBooks & White Papers Page Based Off of a No-Code (by client) Main Template</h5><h5 className='center'  id='hubspotOrange'>Custom Modules, Repeating Resources, Hero, Header & Footer. Usage of HTMl, CSS, JS and HubL</h5></a>
            </div>

            {/* Case Studies Master Landing Page*/}
            <div className='halfWidthBW pushImg'>
                <img className='projectImg' src={BWcaseStudies} alt="Project Screen Shot" />
                <a className='projectLinks' href='https://resources.beeswax.com/resources-master-case-studies' target="_blank" rel="noopener noreferrer"><h3 className='center'>Beeswax Case Studies</h3><h5 className='center'>Case Studies Page Created From a Clone of The Main Template</h5><h5 className='center'  id='hubspotOrange'>Styling Consistent With Previous Pages on Wordpress</h5></a>
            </div>

        </div>

        {/* The Bottom Template Section Row */}
        <div className='beeRows'>
            {/* Webinars Master Landing Page*/}
            <div className='halfWidthBW pushImg'>
                <img className='projectImg' src={BWwebinars} alt="Project Screen Shot" />
                <a className='projectLinks' href='https://resources.beeswax.com/lp-resources-webinars' target="_blank" rel="noopener noreferrer"><h3 className='center'>Beeswax Webinars</h3><h5 className='center'>Webinars Page Created From a Clone of the Main Template</h5><h5 className='center'  id='hubspotOrange'>Created or Styled All Images, Links & Buttons</h5></a>
            </div>

            {/* Emails */}
            <div className='halfWidthBW pushImg'>
                <img className='projectImg' src={BWEmails} alt="Project Screen Shot" />
                <a className='projectLinks' href='https://preview.hs-sites.com/_hcms/preview/content/35496554039?portalId=7968946&_preview=true&cacheBust=0&preview_key=DrZrYXJk&from_buffer=false' target="_blank" rel="noopener noreferrer"><h3 className='center'>Beeswax Email Template</h3><h5 className='center'>Fully Customizable Outbound & Fulfillment Email Templates </h5><h5 className='center'  id='hubspotOrange'>Including Three Different Hero Options, Styling Consistent With Brand Style Guide</h5></a>
            </div>

        </div>

        <div className='halfWidthBW pushImg'>
        {/* Mid Page Sub-Title */}
        <h5 className='center'>I've Also Set-Up All The Associated Workflows, Supporting LPs, and Organized File & Naming Conventions</h5>
        </div>

    </div>

    <div id='beeswaxMastersContainer'> 

        {/* Template Section Title */}
        <h2 className="center">Beeswax Migration Directory</h2>

        {/* The Top Template Section Row */}
        <div className='beeRows'>

            {/* eBooks and Whitepapers Landing Page */}
            <div className='halfWidthBW pushImg'>
                <img className='projectImg' src={BWdirectory} alt="Project Screen Shot" />
                <a className='projectLinks' href='https://docs.google.com/document/d/1w9stsObLwvlLgZ4A4gmifme-J27JqrbJukdcXgLNV_M/edit?usp=sharing' target="_blank" rel="noopener noreferrer"><h5 className='center'>Full Directory to Assist Beeswax Staff With Their New HubSpot CMS Components</h5><h5 className='center'  id='hubspotOrange'>*Link is To Basic Outline Of Guide For Viewing Purposes*</h5></a>
            </div>

        </div>

    </div>


    </div>
    )
}

export default Beeswax;

