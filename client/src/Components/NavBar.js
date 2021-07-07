import React, { useState, useEffect }from 'react';
import { Link, useLocation } from 'react-router-dom';

// This is the Navigation Bar Component That exists on all of the pages
function NavBar() {

    const [modalState, setModalState] = useState('none');

    const [xState, setXState] = useState('');

    const location = useLocation();

    useEffect(() =>{
        setXState('')
        setModalState('none')
    }, [location])

    function xHandler() {

        if (xState === '') {
            setXState('open')
            setModalState('flex')
        } else {
            setXState('')
            setModalState('none')
        }
    }

    return (
        <>
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
            <div id='hamNavSection'>
            {/* Hamburger menu / "Bar icon" from FontAwesome to toggle the navigation links */}
                
                <div id='alignLeft'>
                    <Link to="/" className='navBarText'> Christian <span id='lastName'>Dow</span></Link>
                </div>
                
                <div onClick={xHandler} id="nav-icon2" className={xState}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="hamModal" style={{display: modalState}}>
                <Link className='navBarHomeText' to='/'>Home</Link>
                <Link className='navBarText' to='/about'>About</Link>
                <Link className='navBarText' to='/projects'>Projects</Link>
                <Link className='navBarText' to='/experience'>Experience</Link>
                <Link className='navBarText' to='/gallery'>Gallery</Link>
            </div>
        </>
    )
}

export default NavBar;

