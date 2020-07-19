import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
            <nav id='navBar'>
                <div id='alignLeft'>
                    <Link to="/" className='navBarText'> Christian <span id='lastName'>Dow</span></Link>
                </div>

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