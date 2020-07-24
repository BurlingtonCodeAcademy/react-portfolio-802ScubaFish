import React from 'react';
import { Link } from 'react-router-dom';

// This is the Navigation Bar Component That exists on all of the pages
function NavBar() {
    return (
            <nav id='navBar'>
                {/* This is the Left Side which links back to the main page from any location if clicked */}
                <div id='alignLeft'>
                    <Link to="/" className='navBarText'> Christian <span id='lastName'>Dow</span></Link>
                </div>

                {/* This is the Right Side which is responsible for linking to each of the alternate 'sub-pages' */}
                <div id='alignRight'>
                    <Link className='navBarHomeText' to='/'>Home</Link>
                    {/* Placeholder Links below.. */}
                    <Link className='navBarText' to='/about'>About</Link>
                    <Link className='navBarText' to='/projects'>Projects</Link>
                    <Link className='navBarText' to='/experience'>Experience</Link>
                    <Link className='navBarText' to='/gallery'>Gallery</Link>
                </div>
            </nav>
    )
}

export default NavBar;