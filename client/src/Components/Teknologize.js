import React from 'react';
import { Link } from 'react-router-dom';

export default function Teknologize() {
    return (
        <div>
            <div className="buttonsContainer">

                {/* Projects Page Button */}
                <Link className='projectButton' to='/projects'><h3 className='buttonText'>Development Projects</h3></Link>

                {/* HubSpot Page Button */}
                <Link className='hubSpotButton' to='/hubspot'><h3 className='buttonText'>HubSpot Projects</h3></Link>

            </div>
            
        </div>
    )
}


