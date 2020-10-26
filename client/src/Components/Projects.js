import React from 'react';
import { Link } from 'react-router-dom';
import remockSS from '../Images/Remock_Screenshot.png';
import ticTacToeSS from '../Images/Tic Tac Toe_Screenshot.png';
import yelpSS from '../Images/Yelpington_Screenshot.png';
import PokedexSS from '../Images/PokedexProjectSS.png';
import zorkingtonSS from '../Images/Zorkington_ScreenShot (2).png';
import findYourFun from '../Images/FindYourFun.png';
import foxGame from '../Images/TheFoxGame.png';


// This Handles The Projects Page Component
function Projects() {
    return (
        <div id='projFlexContainer'>

            {/* Main Page Title */}
            <h1>Development <span id='turqColor'> Projects</span></h1>

            {/* Main Page Sub-Title */}
            <h5>*Links Will Lead To Github Repositories If Not Currently Deployed</h5>

            {/* HubSpot Page Button */}
            <Link className='hubSpotButton' to='/hubspot'><h3 className='center'>Switch To</h3><h3 className='center'>HubSpot Projects</h3></Link>

            {/* The Middle Rows */}
            {/* Find Your Fun! Project Here */}
            <div className='rows'>
                <div className='halfWidth pushImg'>
                    <img className='projectImg' src={findYourFun} alt="Project Screen Shot" />
                    <a className='projectLinks' href='https://whispering-beach-64323.herokuapp.com/' target="_blank" rel="noopener noreferrer"><h3 className='center'>Find Your Fun!</h3><h5 className='center'>An App Created in Partnership with Vermont Parks and Recreation Association</h5><h5 className='center' id='green'>A Mobile Friendly Source of Events and Facilities in Vermont!</h5></a>
                </div>
            {/* The Fox Game Project Here */}
                <div className='halfWidth'>
                    <img className='projectImg' src={foxGame} alt="Project Screen Shot" />
                    <a className='projectLinks' href='https://enigmatic-savannah-53571.herokuapp.com/' target="_blank" rel="noopener noreferrer"><h3 className='center'>The Fox Game!</h3><h5 className='center'>An Animated Game Similar to The Classic 'Tamagotchi'</h5><h5 className='center'>Created through Frontend Master Classes. (Not Mobile Friendly)</h5></a>
                </div>
            </div>

            {/* The Middle Rows */}
            {/* Zorkington Project Here */}
            <div className='rows'>
                <div className='halfWidth pushImg'>
                    <img className='projectImg' src={zorkingtonSS} alt="Project Screen Shot" />
                    <a className='projectLinks' href='https://github.com/802ScubaFish/zorkington-gabe-christian' target="_blank" rel="noopener noreferrer"><h3 className='center'>Zorkington Pokemon Edition</h3><h5 className='center'>A Pokemon Themed Choose Your Own Adventure!</h5></a>
                </div>

            {/* Pokedex Project Here */}
                <div className='halfWidth'>
                    <img className='projectImg' src={PokedexSS} alt="Project Screen Shot" />
                    <a className='projectLinks' href='https://github.com/802ScubaFish/Pokedex' target="_blank" rel="noopener noreferrer"><h3 className='center'>React Pokedex</h3><h5 className='center'>A Complete Pokemon Pokedex using the Pokemon API</h5></a>
                </div>

            {/* Yelpington Project Here */}
                <div className='halfWidth'>
                    <img className='projectImg' src={yelpSS} alt="Project Screen Shot" />
                    <a className='projectLinks' href='https://github.com/802ScubaFish/yelpington-802ScubaFish' target="_blank" rel="noopener noreferrer"><h3 className='center'>Yelpington</h3><h5 className='center'>An Interactive Map of Burlington Restaurants</h5></a>
                </div>
            </div>

              {/* The Bottom Row */}
            {/* Remock Website Here */}
            <div className='rows'>
                <div className='halfWidth pushImg'>
                <img className='projectImg' src={remockSS} alt="Project Screen Shot" />
                <a className='projectLinks' href= 'https://github.com/802ScubaFish/remock-802ScubaFish' target="_blank" rel="noopener noreferrer"><h3 className='center'>Remok Website</h3><h5 className='center'>A Recreation of Website Layout Photos</h5></a>
                </div>
            {/* Tic Tac Toe Project Here */}
                <div className='halfWidth'>
                <img className='projectImg' src={ticTacToeSS} alt="Project Screen Shot" />
                <a className='projectLinks' href='https://github.com/BurlingtonCodeAcademy/tic-tac-toe-sean-christian' target="_blank" rel="noopener noreferrer"><h3 className='center'>Tic Tac Toe</h3><h5 className='center'>Play Tic-Tac-Toe Against a Friend or Beat The Computer!</h5></a>
                </div>
            </div>
        </div>
    )
}

export default Projects

