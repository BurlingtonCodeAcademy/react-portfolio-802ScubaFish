import React from 'react';
import { Link } from 'react-router-dom';

export default function Erema() {
    return (
        <div>

        <div className="buttonsContainer">
            
            {/* Projects Page Button */}
            <Link className='projectButton projectBttnPadd' to='/projects'><h3 className='buttonText'>Development Projects</h3></Link>

            {/* HubSpot Page Button */}
            <Link className='hubSpotButton' to='/hubspot'><h3 className='buttonText'>HubSpot Projects</h3></Link>

        </div>

        <div className='CENTER'>

        {/* Main Page Title */}
        <h1>Erema <span id='hubSpotOrng'> Blog</span></h1>

        {/* Main Page Sub-Title */}
        <h5>An Overview of My Work To Date With Erema</h5>

        </div>

        <div id='beeswaxMastersContainer'> 

        {/* Template Section Title */}
        <h1 className="center">Teknologize Blog Sidebar</h1>

        {/* Template Section Sub-Title */}
        <h5 className="center">Changing Blog Page Layout To Include a Right Side Bar On Post Pages To Increase Conversion!</h5>

        <div className='beeRows'>

            {/* eBooks and Whitepapers Landing Page */}
            <div className='halfWidthBW pushImg'>
                {/* <img className='projectImg' src={} alt="Project Screen Shot" /> */}
                <a className='projectLinks' href='https://blog.teknologize.com/top-4-cybersecurity-basics' target="_blank" rel="noopener noreferrer"><h5 className='center'>Combined Teknologize's Two Blog Templates Into One Document While Keeping Styling Consistent</h5><h5 className='center'  id='hubspotOrange'>New Sidebar Implemented While Also Keeping UX Consistent</h5></a>
            </div>

        </div>

    </div>

    <div id='beeswaxMastersContainer'>

        <h1 className="center">Teknologize Blog NavBar</h1>
        
        <div className='halfWidthBW pushImg'>
            {/* <img className='projectImg' src={} alt="Project Screen Shot" /> */}
            <a className='projectLinks' href='https://blog.teknologize.com/' target="_blank" rel="noopener noreferrer"><h5 className='center'>Maintained Site Navigation During Blog Migration to HubSpot</h5><h5 className='center'  id='hubspotOrange'>Audited & Updated Both Current and Future Navigation Assets</h5></a>
        </div>
        
    </div>

    </div>
    )
}
