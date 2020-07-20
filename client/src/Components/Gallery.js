import React, { useState } from 'react';
// Material ui Imports
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

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#00CED1'
        }
    }
});


function Gallery() {

    const [index, setIndex] = useState(0);

    const handleNav = (direction) => {
        let newIndex;
        if (direction === "right") {
            index === imgArray.length - 1 ? (newIndex = 0) : (newIndex = index + 1);
        } else {
            index === 0 ? (newIndex = imgArray.length - 1) : (newIndex = index - 1);
        }
        setIndex(newIndex);
    };

    console.log(index);

    return (
        <div className="App">
            <h3 id='galleryHead'>A simple Gallery built using <span id='turqColor'>React</span> including some of my Personal Images that have been distrubuted by companies such as Subaru of America*</h3>
            <div id="rotating-img-carousel">

                <div id="img-carousel">
                    <img
                        className="xs-img-left"
                        src={index === imgArray.length - 2 ? imgArray[0] : index === imgArray.length - 1 ? imgArray[1] : imgArray[index + 2]}
                        alt="xs-img"
                    />

                    <img
                        className="sm-img-left"
                        src={index === imgArray.length - 1 ? imgArray[0] : imgArray[index + 1]}
                        alt="sm-img"
                    />

                    <img className="lg-img" src={imgArray[index]} alt="card" />

                    <img
                        className="sm-img-right"
                        src={index === 0 ? imgArray[imgArray.length - 1] : imgArray[index - 1]}
                        alt="sm-img"
                    />

                    <img
                        className="xs-img-right"
                        src={index === 1 ? imgArray[imgArray.length - 1] : index === 0 ? imgArray[imgArray.length - 2] : imgArray[index - 2]}
                        alt="xs-img"
                    />
                </div>

            </div>
            <div id='nav-buttons'>
                <MuiThemeProvider theme={theme}>
                    <IconButton
                        onClick={() => { handleNav("left"); }} >
                        <ArrowBackIcon color='secondary' fontSize="large" />
                    </IconButton>
                    
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