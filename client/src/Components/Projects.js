import React from 'react'
import remockSS from '../Images/Remock_Screenshot.png';
import ticTacToeSS from '../Images/Tic Tac Toe_Screenshot.png';
import yelpSS from '../Images/Yelpington_Screenshot.png';
import zorkingtonSS from '../Images/Zorkington_ScreenShot (2).png';
import findYourFun from '../Images/FindYourFun.png';
import foxGame from '../Images/TheFoxGame.png';

// This Handles The Projects Page Component
function Projects() {
    return (
        <div id='projFlexContainer'>

            {/* Main Page Title */}
            <h1>Current <span id='turqColor'> Projects</span></h1>

            {/* Main Page Sub-Title */}
            <h5>*If Not Currently Deployed Links Will Lead To Github Repositories</h5>

            {/* The Top Row */}
            {/* Find Your Fun! Project Here */}
            <div className='rows'>
                <div className='halfWidth pushImg'>
                    <img className='projectImg' src={findYourFun} alt="Project Screen Shot" />
                    <a className='projectLinks' href='https://whispering-beach-64323.herokuapp.com/'><h3 class='center'>Find Your Fun!</h3><h5 class='center' id='green'>An App Created in Partnership with Vermont Parks and Recreation Association</h5><h5 class='center'>A Mobile Friendly Source of Events and Facilities in Vermont!</h5></a>
                </div>
            {/* The Fox Game Project Here */}
                <div className='halfWidth'>
                    <img className='projectImg' src={foxGame} alt="Project Screen Shot" />
                    <a className='projectLinks' href='https://enigmatic-savannah-53571.herokuapp.com/'><h3 class='center'>The Fox Game!</h3><h5 class='center'>Similar to The Classic 'Tamagotchi' Game</h5><h5 class='center'>Created through Frontend Master Classes</h5></a>
                </div>
            </div>

            {/* The Middle Row */}
            {/* Zorkington Project Here */}
            <div className='rows'>
                <div className='halfWidth pushImg'>
                    <img className='projectImg' src={zorkingtonSS} alt="Project Screen Shot" />
                    <a className='projectLinks' href='https://github.com/802ScubaFish/zorkington-gabe-christian'><h3 class='center'>Zorkington Pokemon Edition</h3><h5 class='center'>A Pokemon Themed Choose Your Own Adventure!</h5></a>
                </div>
            {/* Yelpington Project Here */}
                <div className='halfWidth'>
                    <img className='projectImg' src={yelpSS} alt="Project Screen Shot" />
                    <a className='projectLinks' href='https://github.com/802ScubaFish/yelpington-802ScubaFish'><h3 class='center'>Yelpington</h3><h5 class='center'>An Interactive Map of Burlington Restaurants</h5></a>
                </div>
            </div>

              {/* The Bottom Row */}
            {/* Remock Website Here */}
            <div className='rows'>
                <div className='halfWidth pushImg'>
                <img className='projectImg' src={remockSS} alt="Project Screen Shot" />
                <a className='projectLinks' href= 'https://github.com/802ScubaFish/remock-802ScubaFish'><h3 class='center'>Remok Website</h3><h5 class='center'>A Recreation of Website Layout Photos</h5></a>
                </div>
            {/* Tic Tac Toe Project Here */}
                <div className='halfWidth'>
                <img className='projectImg' src={ticTacToeSS} alt="Project Screen Shot" />
                <a className='projectLinks' href='https://github.com/BurlingtonCodeAcademy/tic-tac-toe-sean-christian'><h3 class='center'>Tic Tac Toe</h3><h5 class='center'>Play Tic-Tac-Toe Against a Friend or Beat The Computer!</h5></a>
                </div>
            </div>
        </div>
    )
}

export default Projects