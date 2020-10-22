import React from 'react'
import { Link } from 'react-router-dom';
import myAquarium from '../Images/my aquarium lp screenshot.png';
import cmsDevPracticum from '../Images/cool cat practicum screenshot.png';
import beeswaxSS from '../Images/Beeswax Screenshot.png';
import Accu360 from '../Images/ACCU360SS.png';
import victoryHemp from '../Images/VictoryHempSS.png';
import teknologizeSS from '../Images/TeknologizeSS.png';
import eremaSS from '../Images/EremaSS.png';
import packageAwareSS from '../Images/PackageAwareSS.png';


export default function HubSpot() {
    return (
        <div id='projFlexContainerHS'>

            {/* Main Page Title */}
            <h1>HubSpot <span id='hubSpotOrng'> Projects</span></h1>

            {/* Main Page Sub-Title */}
            <h5>*Links Will Lead To HubSpot Project Pages or Site Examples</h5>

            {/* Projects Page Button */}
            <Link className='projectButton' to='/projects'><h3 className='center'>Development Projects</h3></Link>

            {/* The Top Row */}
            <div className='rows'>
                {/* Beeswax Migration Project Here */}
                <div className='halfWidth pushImg'>
                    <img className='projectImg' src={beeswaxSS} alt="Project Screen Shot" />
                    <Link className='projectLinks' to='/beeswax'><h3 className='center'>Beeswax HubSpot Migration</h3><h5 className='center'>Migrating from Pardot/Wordpress to HubSpots CMS</h5><h5 className='center' id='hubspotOrange'>Including Landing Pages, Emails, Thank You Pages, Navigation, Custom Templates, Modules and Emails, Workflows, Call to Actions, Banners & Images, File Transfer, No-Code Solutions for Clients and on</h5></Link>
                </div>

                {/* Teknologize Project Here */}
                <div className='halfWidth pushImg'>
                    <img className='projectImg' src={teknologizeSS} alt="Project Screen Shot" />
                    <Link className='projectLinks' to='/teknologize'><h3 className='center'>Teknologize Blog</h3><h5 className='center'>Client Requested Adjustments to Existing HubSpot Blog Pages</h5><h5 className='center' id='hubspotOrange'>Right Side Bar to Increase Conversion + Working Navigation Bar, 100% No-Code Solutions for Client</h5></Link>
                </div>

                {/* Erema Project Here */}
                <div className='halfWidth pushImg'>
                    <img className='projectImg' src={eremaSS} alt="Project Screen Shot" />
                    <Link className='projectLinks' to='/erema'><h3 className='center'>Erema Blog & Workflows</h3><h5 className='center'>Setting Up Pillar Page, Landing Page, Thank You Page, Supporting Emails & Workflows</h5><h5 className='center' id='hubspotOrange'>Including Landing Pages, Emails, Thank You Pages, Emails, Workflows, Call to Actions</h5></Link>
                </div>

                {/* Accu360 Project Here */}
                <div className='halfWidth pushImg'>
                    <img className='projectImg' src={Accu360} alt="Project Screen Shot" />
                    <a className='projectLinks' href='https://resources.accu360.com/-temporary-slug-c0ef17a5-ddf1-4939-9ad7-92bf1664de5d?hs_preview=xThFRJfv-35535862329' target="_blank" rel="noopener noreferrer"><h3 className='center'>Accu360 Landing Page</h3><h5 className='center'>A No Code Solution to a "Stylish Landing Page" for Global-Z (Accu360)</h5><h5 className='center'  id='hubspotOrange'>Including HubSpot Markup Language or HubL, Javascript, CSS, HTMl and on</h5></a>
                </div>

                {/* PackageAware Project Here */}
                <div className='halfWidth pushImg'>
                    <img className='projectImg' src={packageAwareSS} alt="Project Screen Shot" />
                    <a className='projectLinks' href='https://www.packageaware.io/' target="_blank" rel="noopener noreferrer"><h3 className='center'>PackageAware Landing Page</h3><h5 className='center'>Styling & Functionality Adjustments to Main Pages</h5><h5 className='center'  id='hubspotOrange'>Page Template & Module Fixes per Client Request</h5></a>
                </div>

            </div>

            {/* The Middle Rows */}
            <div className='rows'>
                {/* Victory Hemp Project Here */}
                <div className='halfWidth pushImg'>
                    <img className='projectImg' src={victoryHemp} alt="Project Screen Shot" />
                    <a className='projectLinks' href='https://resources.victoryhempfoods.com/ppc-landing-page' target="_blank" rel="noopener noreferrer"><h3 className='center'>Victory Hemp Region Blocker</h3><h5 className='center'>Block Specified Countries and Regions From Accessing Content Portions of Pages</h5><h5 className='center'  id='hubspotOrange'>Including HubSpot Markup Language or HubL, Javascript, CSS, HTMl and on</h5></a>
                </div>

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
