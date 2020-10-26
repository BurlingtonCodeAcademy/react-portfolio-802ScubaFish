import React from 'react';
import { Link } from 'react-router-dom';
import eremaEmail from '../Images/EremaEmail.png';
import eremaLP from '../Images/EremaLP.png';
import eremaTYP from '../Images/EremaTYP.png';
import eremaPillar from '../Images/EremaPillar.png';

export default function Erema() {
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
        <h1>Erema <span id='hubSpotOrng'> Blog</span></h1>

        {/* Main Page Sub-Title */}
        <h5>An Overview of My Work To Date With Erema</h5>

        </div>

        <div id='beeswaxMastersContainer'> 

        {/* Section Title */}
        <h2 className="center">Pillar Page + Supporting Pages</h2>

        <div className='beeRows'>

            {/* Pillar Page */}
            <div className='halfWidthBW pushImg'>
                <img className='projectImg' src={eremaPillar} alt="Project Screen Shot" />
                <a className='projectLinks' href='https://blog.erema.com/en/pillar-erema-post-consumer-plastic-recycling-technology' target="_blank" rel="noopener noreferrer"><h5 className='center'>Pillar Page</h5><h5 className='center'  id='hubspotOrange'>Per HubSpot SEO Best Practices, Set Up Pillar Page Which Supporting Content Links Back To</h5></a>
            </div>

            <div className='halfWidthBW pushImg'>
                <img className='projectImg' src={eremaLP} alt="Project Screen Shot" />
                <a className='projectLinks' href='https://blog.erema.com/en/lp-case-study-belgotex-processes-excess-polypropylene-fiber' target="_blank" rel="noopener noreferrer"><h5 className='center'>Landing Pages</h5><h5 className='center'  id='hubspotOrange'>Landing Pages Created For Each CTA On The Pillar Page</h5></a>
            </div>

        </div>

        <div className='beeRows'>

            {/* Thank You Page */}
            <div className='halfWidthBW pushImg'>
                <img className='projectImg' src={eremaTYP} alt="Project Screen Shot" />
                <a className='projectLinks' href='https://blog.erema.com/en/typ-case-study-belgotex-processes-excess-polypropylene-fiber' target="_blank" rel="noopener noreferrer"><h5 className='center'>Thank You Pages</h5><h5 className='center'  id='hubspotOrange'>Thank You Page Created For Each Landing Page Form</h5></a>
            </div>

            <div className='halfWidthBW pushImg'>
                <img className='projectImg' src={eremaEmail} alt="Project Screen Shot" />
                <div className='projectLinks'><h5 className='center'>Fulfillment Emails</h5><h5 className='center'  id='hubspotOrange'>Fulfillment Email Created For Each Landing Page Form. Emails Are Triggered on Landing Page Form Submissions by Workflows Events - No Link For Privacy Purposes</h5></div>
            </div>

        </div>

    </div>

    </div>
    )
}

