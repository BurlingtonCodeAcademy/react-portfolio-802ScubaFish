import React from 'react'
import remockSS from '../Images/Remock_Screenshot.png';
import ticTacToeSS from '../Images/Tic Tac Toe_Screenshot.png';
import yelpSS from '../Images/Yelpington_Screenshot.png';
import zorkingtonSS from '../Images/Zorkington_ScreenShot (2).png';

// This Handles The Projects Page Component
function Projects() {
    return (
        <div id='projFlexContainer'>

            {/* Main Page Title */}
            <h1>Current <span id='turqColor'> Projects</span></h1>

            {/* Main Page Sub-Title */}
            <h4>Linked to Github Repositories</h4>

            {/* The Top Row */}
            {/* Zorkington Project Here */}
            <div id='rowOne'>
                <div className='halfWidth pushImg'>
                    <img className='projectImg' src={zorkingtonSS} alt="Project Screen Shot" />
                    <a className='projectLinks' href='https://github.com/802ScubaFish/zorkington-gabe-christian' target="_blank"><h3 class='center'>Zorkington - Pokemon Edition</h3></a>
                </div>
            {/* Yelpington Project Here */}
                <div className='halfWidth'>
                    <img className='projectImg' src={yelpSS} alt="Project Screen Shot" />
                    <a className='projectLinks' href='https://github.com/802ScubaFish/yelpington-802ScubaFish' target="_blank"><h3 class='center'>Yelpington</h3></a>
                </div>
            </div>

            {/* The Bottom Row */}
            {/* Remock Website Here */}
            <div id='rowTwo'>
                <div className='halfWidth pushImg'>
                <img className='projectImg' src={remockSS} alt="Project Screen Shot" />
                <a className='projectLinks' href= 'https://github.com/802ScubaFish/remock-802ScubaFish' target="_blank"><h3 class='center'>Remok Website</h3></a>
                </div>
            {/* Tic Tac Toe Project Here */}
                <div className='halfWidth'>
                <img className='projectImg' src={ticTacToeSS} alt="Project Screen Shot" />
                <a className='projectLinks' href='https://github.com/BurlingtonCodeAcademy/tic-tac-toe-sean-christian' target="_blank"><h3 class='center'>Tic Tac Toe</h3></a>
                </div>
            </div>
        </div>
    )
}

export default Projects