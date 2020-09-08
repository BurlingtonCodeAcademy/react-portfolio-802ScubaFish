import React, { useState } from 'react';
// Material UI Dependancies Imports
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from "@material-ui/core/IconButton";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// 
// Image Import List
import imageOne from '../Images/DSC_0075.jpg';
import imageTwo from '../Images/DSC_0283.jpg';
import imageThree from '../Images/DSC_0032.jpg';
import imageFour from '../Images/DSC_0103.jpg';
import imageFive from '../Images/DSC_0113.jpg';
import imageSix from '../Images/DSC_0169.jpg';
import imageSeven from '../Images/DSC_0208.jpg';
import imageEight from '../Images/DSC_0247.jpg';
import imageNine from '../Images/DSC_0309.jpg';
import imageTen from '../Images/DSC_0313.jpg';
import imageEleven from '../Images/DSC_0315.jpg';
import imageTwelve from '../Images/DSC_0301.jpg';
import imageThirteen from '../Images/DSC_0341-Edit.jpg';
import imageFourteen from '../Images/DSC_0641.jpg';
// 
// The Array of Images
const imgArray = [
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive,
    imageSix,
    imageSeven,
    imageEight,
    imageNine,
    imageTen,
    imageEleven,
    imageTwelve,
    imageThirteen,
    imageFourteen
]
// Sets Up MuiTheme Color Styling for the 2 Gallery Buttons
const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#00CED1'
        }
    }
});

// This Handles The Gallery Component or 'Image Carousel'
function Gallery() {

    // Sets up an index of images to itterate over - starts at the first index
    const [index, setIndex] = useState(0);

    // Handles Which Way the Gallery 'Rotates' - Iterates over the index depending on which directional button is clicked to simulate rotating
    const handleNav = (direction) => {
        let newIndex;
        // Handles Right Side Movement Logic - If we're at the end of the index then we will set the index back to the begining
        // Otherwise, move up one step in the index..
        if (direction === "right") {
            index === imgArray.length - 1 ? (newIndex = 0) : (newIndex = index + 1);
        } 
        // Handles Left Side Movement Logic - If we're at the begining of the index then we will subtract one from the index to move backwards a step
        // Otherwise, move down one step in the index..
        else {
            index === 0 ? (newIndex = imgArray.length - 1) : (newIndex = index - 1);
        }
        // Then update the current index with the new index
        setIndex(newIndex);
    };


    return (
        <div className="App">
            
            {/* Page Desc */}
            <h3 id='galleryHead'>A simple Gallery built using <span id='turqColor'>React</span> including some of my Personal Images that have been distrubuted by companies such as Subaru of America*</h3>
            <div id="rotating-img-carousel">

                {/* Smallest Left Side Image */}
                <div id="img-carousel">
                    
                    <img
                        className="xs-img-left"
                        // If we are at image array length -2 then we display the image currently at array index 0(start of the array),
                        // Otherwise, if we are at the image array -1 (end of the array) we set the index to the second image in the array (imgArray[1]).
                        // Otherwise, we just increment the image array index +2. This last check prevents an issue where there is an intermitant
                        // broken image that will appear during image rotation.
                        src={index === imgArray.length - 2 ? imgArray[0] : index === imgArray.length - 1 ? imgArray[1] : imgArray[index + 2]}
                        alt="xs-img"
                    />

                    {/* The Medium Sized Middle-Left Image */}
                    <img
                        className="sm-img-left"
                        // If we are at image array length -1 (end of the array) then we display the image at array 0 (the image at the start of the array),
                        // Otherwise, display the image at current image array index +1.
                        src={index === imgArray.length - 1 ? imgArray[0] : imgArray[index + 1]}
                        alt="sm-img"
                    />

                    {/* The Largest or Featured Center Image On The Page */}
                    <img className="lg-img" src={imgArray[index]} alt="lg-img" />

                    {/* The Medium Sized Middle-Right Image */}
                    <img
                        className="sm-img-right"
                        // If we are at index 0 (the start of the array) then we display the image at index array -1,
                        // Otherwise, we -1 one from the current index position and display that image.
                        src={index === 0 ? imgArray[imgArray.length - 1] : imgArray[index - 1]}
                        alt="sm-img"
                    />

                    {/* Smallest Right Side Image */}
                    <img
                        className="xs-img-right"
                        // If we are at the image array index 1 (second image in the array), then we display the image at the end of the index,
                        // Otherwise, if we are the start of the array(index 0), then we display the second to last image in the index,
                        // Otherwise, we just increment the image arrag index -2. This last check prevents an issue where there is an intermitant
                        // broken image that will appear during image rotation.
                        src={index === 1 ? imgArray[imgArray.length - 1] : index === 0 ? imgArray[imgArray.length - 2] : imgArray[index - 2]}
                        alt="xs-img"
                    />
                </div>

            </div>
            {/* The Two Navagation Buttons Are Set Up Here*/}
            <div id='nav-buttons'>
                
                {/* Wrapped in MuiThemeProvider to Set Color Styling */}
                <MuiThemeProvider theme={theme}>

                    {/* The Left Icon Button */}
                    <IconButton
                        onClick={() => { handleNav("left"); }} >
                        <ArrowBackIcon color='secondary' fontSize="large" />
                    </IconButton>
                    
                    {/* The Right Icon Button */}
                    <IconButton theme={theme}
                        onClick={() => { handleNav("right"); }} >
                        <ArrowForwardIcon color='secondary' fontSize="large" />
                    </IconButton>
                    </MuiThemeProvider>
            </div>
        </div>
    );
};

export default Gallery;