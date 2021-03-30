import React, { useState, useEffect } from 'react'

export default function Popup() {
    const [popupState, setPopupState] = useState('none');

    useEffect(() => {
        let popupItem = localStorage.getItem('popup_item');

        if(!popupItem) {
            setPopupState('flex');
            localStorage.setItem('popup_item', 1)
        }
    }, [])

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
           <button onClick={closeHandler} id='popupButton'>Close</button>
        </div>
    )
}
