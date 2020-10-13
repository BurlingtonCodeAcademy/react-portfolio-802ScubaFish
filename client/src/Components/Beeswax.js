import React from 'react';

// This is the Navigation Bar Component That exists on all of the pages
function Beeswax() {
    return (
        <div>
            
        {/* Main Page Title */}
        <h1 class="center">Beeswax <span id='turqColor'> Migration</span></h1>

        {/* Main Page Sub-Title */}
        <h5 class="center">An Overview of Beeswax's HubSpot Migration</h5>
        <div id='beeswaxLPMasterContainer'> 

        {/* Main Page Title */}
        <h1 class="center">Beeswax Master Templates</h1>

        {/* Main Page Sub-Title */}
        <h5 class="center">All of the Main Pages</h5>

        {/* The Top Row */}
        <div className='beeRows'>

            {/* eBooks and Whitepapers Landing Page */}
            <div className='halfWidth pushImg'>
                {/* <img className='projectImg' src={} alt="Project Screen Shot" /> */}
                <a className='projectLinks' href='LinkHere.com' target="_blank" rel="noopener noreferrer"><h3 class='center'>Beeswax eBooks & White Papers Master</h3><h5 class='center'>Place Holder Text Here</h5><h5 class='center'  id='hubspotOrange'>Place Holder Features Here and Here and Here</h5></a>
            </div>

            {/* Case Studies Master Landing Page*/}
            <div className='halfWidth pushImg'>
                {/* <img className='projectImg' src={} alt="Project Screen Shot" /> */}
                <a className='projectLinks' href='LinkHere.com' target="_blank" rel="noopener noreferrer"><h3 class='center'>Beeswax Case Studies Master</h3><h5 class='center'>Place Holder Text Here</h5><h5 class='center'  id='hubspotOrange'>Place Holder Features Here and Here and Here</h5></a>
            </div>

        </div>

        {/* The Middle Row */}
        <div className='beeRows'>
            {/* Webinars Master Landing Page*/}
            <div className='halfWidth pushImg'>
                {/* <img className='projectImg' src={} alt="Project Screen Shot" /> */}
                <a className='projectLinks' href='LinkHere.com' target="_blank" rel="noopener noreferrer"><h3 class='center'>Beeswax Webinars Master</h3><h5 class='center'>Place Holder Text Here</h5><h5 class='center'  id='hubspotOrange'>Place Holder Features Here and Here and Here</h5></a>
            </div>

            {/* eBooks and Whitepapers Landing Page */}
            <div className='halfWidth pushImg'>
                {/* <img className='projectImg' src={} alt="Project Screen Shot" /> */}
                <a className='projectLinks' href='LinkHere.com' target="_blank" rel="noopener noreferrer"><h3 class='center'>Beeswax eBooks & Webinars Master</h3><h5 class='center'>Place Holder Text Here</h5><h5 class='center'  id='hubspotOrange'>Place Holder Features Here and Here and Here</h5></a>
            </div>

        </div>

    </div>
    </div>
    )
}

export default Beeswax;

