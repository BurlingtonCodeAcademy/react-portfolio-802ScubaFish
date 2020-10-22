import React from 'react'
import { Link } from 'react-router-dom';
import myAquarium from '../Images/my aquarium lp screenshot.png';
import cmsDevPracticum from '../Images/cool cat practicum screenshot.png';
import beeswaxSS from '../Images/Beeswax Screenshot.png';

export default function HubSpot() {
    return (
        <div id='projFlexContainerHS'>

            {/* Main Page Title */}
            <h1>HubSpot <span id='hubSpotOrng'> Projects</span></h1>

            {/* Main Page Sub-Title */}
            <h5>*Links Will Lead To HubSpot Project Pages</h5>

            {/* Projects Page Button */}
            <Link className='projectButton' to='/projects'><h3 className='center'>Development Projects</h3></Link>

            {/* The Top Row */}
            <div className='rows'>
                {/* My Personal Aquarium Project Here */}
                <div className='halfWidth pushImg'>
                    <img className='projectImg' src={beeswaxSS} alt="Project Screen Shot" />
                    <Link className='projectLinks' to='/beeswax'><h3 className='center'>Beeswax HubSpot Migration</h3><h5 className='center'>Full Site Migration to HubSpot's CMS</h5><h5 className='center' id='hubspotOrange'>Including Landing Pages, Emails, Thank You Pages, Navigation, Custom Templates, Modules and Emails, Workflows, Call to Actions, Banners & Images, File Transfer and On</h5></Link>
                </div>

                {/* Second Project Placeholder Here */}
            </div>

            {/* The Middle Rows */}
            <div className='rows'>
                {/* My Personal Aquarium Project Here */}
                <div className='halfWidth pushImg'>
                    <img className='projectImg' src={myAquarium} alt="Project Screen Shot" />
                    <a className='projectLinks' href='http://hubspot-developers-16tv3r8-8374954.hs-sites.com/en/christians-aquarium-lp' target="_blank" rel="noopener noreferrer"><h3 className='center'>My Personal Aquarium Site</h3><h5 className='center'>A quick fun website built to show some of the power of HubSpot's CMS, Custom Editable Modules and Drag & Drop Templates</h5><h5 className='center'  id='hubspotOrange'>Including HubSpot Markup Language or HubL, Javascript, CSS, HTMl and on</h5></a>
                </div>
                {/* HubSpot CMS DEV Practicum Here */}
                <div className='halfWidth pushImg'>
                    <img className='projectImg' src={cmsDevPracticum} alt="Project Screen Shot" />
                    <a className='projectLinks' href='http://hubspot-developers-16tv3r8-8374954.hs-sites.com/my-cool-practicum' target="_blank" rel="noopener noreferrer"><h3 className='center'>My HubSpot CMS Developer Practicum Submission</h3><h5 className='center'>A Site Built Following Hubspot's CMS Practicum Standards to Prove My Knowledge of Their CMS Platform</h5><h5 className='center'  id='hubspotOrange'>Graded by Hubspot and Passed after first submission September 2020. See the Certification on my LinkedIn!</h5></a>
                </div>

            </div>
        </div>
    )
}
