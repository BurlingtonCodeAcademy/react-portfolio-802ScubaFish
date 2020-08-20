import React from 'react'

// Sets Up The Experience Page Component
function Experience() {
    return (
       <>
       {/* Main Page Title */}
       <h3 id='center'>Feel free to Print off a copy! Mobile Friendly Version on the Way!</h3>

       {/* Sets up an iFrame or 'Window' To My Personal Resume Google Document */}
        <iframe id='iFrame'
        title='Christian Dow Resume'
        src="https://docs.google.com/document/d/1NekugzOhVjjUVbbHl1Cio41FwBkXqGeTHlX78Tg4-Vs/edit"
        />
       </>
    )
}
// Exports The Entire Component To Be Imported in App.js
export default Experience;
