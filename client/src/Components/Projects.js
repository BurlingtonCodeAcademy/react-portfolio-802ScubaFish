import React from 'react';
import { Link } from 'react-router-dom';
import remockSS from '../Images/Remock_Screenshot.png';
import ticTacToeSS from '../Images/Tic Tac Toe_Screenshot.png';
import yelpSS from '../Images/Yelpington_Screenshot.png';
import zorkingtonSS from '../Images/Zorkington_ScreenShot (2).png';
import findYourFun from '../Images/FindYourFun.png';
import foxGame from '../Images/TheFoxGame.png';
import myAquarium from '../Images/my aquarium lp screenshot.png';
import cmsDevPracticum from '../Images/cool cat practicum screenshot.png';
import beeswaxSS from '../Images/Beeswax Screenshot.png';

// This Handles The Projects Page Component
function Projects() {
    return (
        <div id='projFlexContainer'>

            {/* Main Page Title */}
            <h1>Current <span id='turqColor'> Projects</span></h1>

            {/* Main Page Sub-Title */}
            <h5>*If Not Currently Deployed Links Will Lead To Github Repositories</h5>

            {/* The Top Row */}
            <div className='rows'>
                {/* My Personal Aquarium Project Here */}
                <div className='halfWidth pushImg'>
                    <img className='projectImg' src={beeswaxSS} alt="Project Screen Shot" />
                    <Link className='projectLinks' to='/beeswax'><h3 class='center'>Beeswax HubSpot Migration</h3><h5 class='center'>A Layout On How I Navigated Beeswax's Migration to HubSpot</h5><h5 class='center'  id='hubspotOrange'>Full Migration to HubSpot CMS Including Landing Pages, Emails, Thank You Pages, Navigation, Custom Templates, Modules and Emails, Workflows, Call to Actions, Banners & Images, File Transfer and On</h5></Link>
                </div>

                {/* Second Project Placeholder Here */}
            </div>

            {/* The Middle Rows */}
            <div className='rows'>
                {/* My Personal Aquarium Project Here */}
                <div className='halfWidth pushImg'>
                    <img className='projectImg' src={myAquarium} alt="Project Screen Shot" />
                    <a className='projectLinks' href='http://hubspot-developers-16tv3r8-8374954.hs-sites.com/en/christians-aquarium-lp' target="_blank" rel="noopener noreferrer"><h3 class='center'>My Personal Aquarium Site</h3><h5 class='center'>A quick fun website built to show some of the power of HubSpot's CMS, Custom Editable Modules and Drag & Drop Templates</h5><h5 class='center'  id='hubspotOrange'>Including HubSpot Markup Language or HubL, Javascript, CSS, HTMl and on</h5></a>
                </div>
                {/* HubSpot CMS DEV Practicum Here */}
                <div className='halfWidth pushImg'>
                    <img className='projectImg' src={cmsDevPracticum} alt="Project Screen Shot" />
                    <a className='projectLinks' href='http://hubspot-developers-16tv3r8-8374954.hs-sites.com/my-cool-practicum' target="_blank" rel="noopener noreferrer"><h3 class='center'>My HubSpot CMS Developer Practicum Submission</h3><h5 class='center'>A Site Built Following Hubspot's CMS Practicum Standards to Prove My Knowledge of Their CMS Platform</h5><h5 class='center'  id='hubspotOrange'>Graded by Hubspot and Passed after first submission September 2020. See the Certification on my LinkedIn!</h5></a>
                </div>

            </div>

            {/* The Middle Rows */}
            {/* Find Your Fun! Project Here */}
            <div className='rows'>
                <div className='halfWidth pushImg'>
                    <img className='projectImg' src={findYourFun} alt="Project Screen Shot" />
                    <a className='projectLinks' href='https://whispering-beach-64323.herokuapp.com/' target="_blank" rel="noopener noreferrer"><h3 class='center'>Find Your Fun!</h3><h5 class='center'>An App Created in Partnership with Vermont Parks and Recreation Association</h5><h5 class='center' id='green'>A Mobile Friendly Source of Events and Facilities in Vermont!</h5></a>
                </div>
            {/* The Fox Game Project Here */}
                <div className='halfWidth'>
                    <img className='projectImg' src={foxGame} alt="Project Screen Shot" />
                    <a className='projectLinks' href='https://enigmatic-savannah-53571.herokuapp.com/' target="_blank" rel="noopener noreferrer"><h3 class='center'>The Fox Game!</h3><h5 class='center'>Similar to The Classic 'Tamagotchi' Game</h5><h5 class='center'>Created through Frontend Master Classes</h5></a>
                </div>
            </div>

            {/* The Middle Rows */}
            {/* Zorkington Project Here */}
            <div className='rows'>
                <div className='halfWidth pushImg'>
                    <img className='projectImg' src={zorkingtonSS} alt="Project Screen Shot" />
                    <a className='projectLinks' href='https://github.com/802ScubaFish/zorkington-gabe-christian' target="_blank" rel="noopener noreferrer"><h3 class='center'>Zorkington Pokemon Edition</h3><h5 class='center'>A Pokemon Themed Choose Your Own Adventure!</h5></a>
                </div>
            {/* Yelpington Project Here */}
                <div className='halfWidth'>
                    <img className='projectImg' src={yelpSS} alt="Project Screen Shot" />
                    <a className='projectLinks' href='https://github.com/802ScubaFish/yelpington-802ScubaFish' target="_blank" rel="noopener noreferrer"><h3 class='center'>Yelpington</h3><h5 class='center'>An Interactive Map of Burlington Restaurants</h5></a>
                </div>
            </div>

              {/* The Bottom Row */}
            {/* Remock Website Here */}
            <div className='rows'>
                <div className='halfWidth pushImg'>
                <img className='projectImg' src={remockSS} alt="Project Screen Shot" />
                <a className='projectLinks' href= 'https://github.com/802ScubaFish/remock-802ScubaFish' target="_blank" rel="noopener noreferrer"><h3 class='center'>Remok Website</h3><h5 class='center'>A Recreation of Website Layout Photos</h5></a>
                </div>
            {/* Tic Tac Toe Project Here */}
                <div className='halfWidth'>
                <img className='projectImg' src={ticTacToeSS} alt="Project Screen Shot" />
                <a className='projectLinks' href='https://github.com/BurlingtonCodeAcademy/tic-tac-toe-sean-christian' target="_blank" rel="noopener noreferrer"><h3 class='center'>Tic Tac Toe</h3><h5 class='center'>Play Tic-Tac-Toe Against a Friend or Beat The Computer!</h5></a>
                </div>
            </div>
        </div>
    )
}

export default Projects

