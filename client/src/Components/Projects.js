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
            <h4>Linked to Github Repositories</h4>

            {/* The Top Row */}
            {/* Find Your Fun! Project Here */}
            <div className='rows'>
                <div className='halfWidth pushImg'>
                    <img className='projectImg' src={findYourFun} alt="Project Screen Shot" />
                    <a className='projectLinks' href='https://whispering-beach-64323.herokuapp.com/'><h3 class='center'>Find Your Fun - An App Created for -<span id="green">Vermont Parks and Recreation</span></h3><h5 class='center'>A Mobile Friendly Source of Events and Facilities in Vermont!</h5></a>
                </div>
            {/* The Fox Game Project Here */}
                <div className='halfWidth'>
                    <img className='projectImg' src={foxGame} alt="Project Screen Shot" />
                    <a className='projectLinks' href='https://github.com/802ScubaFish/Fox-Game'><h3 class='center'>The Fox Game!</h3><h5 class='center'>Similar to The Classic 'Tamagotchi'</h5></a>
                </div>
            </div>

            {/* The Middle Row */}
            {/* Zorkington Project Here */}
            <div className='rows'>
                <div className='halfWidth pushImg'>
                    <img className='projectImg' src={zorkingtonSS} alt="Project Screen Shot" />
                    <a className='projectLinks' href='https://github.com/802ScubaFish/zorkington-gabe-christian'><h3 class='center'>Zorkington - Pokemon Edition</h3><h5 class='center'>Pokemon Themed Zorkington!</h5></a>
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
                <a className='projectLinks' href= 'https://github.com/802ScubaFish/remock-802ScubaFish'><h3 class='center'>Remok Website</h3><h5 class='center'>A Recreation of a Website</h5></a>
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