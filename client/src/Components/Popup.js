import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Popup() {
    // State to track popup display value
    const [popupState, setPopupState] = useState('none');

    // If site has not been visited before, display modal & set item to local storage for future
    useEffect(() => {
        let popupItem = localStorage.getItem('popup_item');

        if(!popupItem) {
            setPopupState('flex');
            localStorage.setItem('popup_item', 1)
        }
    }, [])

    // Function to Close "First Visit Popup"
    function closeHandler() {
        if (popupState === 'flex') {
            setPopupState('none')
        }
    }

    return (
        <div className='popup' style={{display: popupState}}>
        <h2>Welcome!</h2>
           <h3>It looks like this is your <span id='turqColor'>1st</span> Visit to my Site!</h3>
           <h4>This website is written entirely with <span id='turqColor'>React</span> (including HTML, Javascript, CSS & More!)</h4>
           <h4>I hope you enjoy you visit! <span role='img' aria-label='celebrate'>🎉</span></h4>
           <h5>If you want to skip right to contacting me directly</h5>
           <Link className='contactMeLinkPopup' id='center' to='/contact-me'>Fill out this form!</Link>
           <button onClick={closeHandler} id='popupButton'>Close</button>
        </div>
    )
}
