import React, { useState } from 'react';
// Material ui Imports
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from "@material-ui/core/IconButton";
// 

// The Array of Images
const imgArray = [
    'https://giecdn.azureedge.net/storage/fileuploads/image/2019/09/25/rainwater_draining_off_roof-adobe_stock-credit-igor_batenev-resized.jpg?w=736&h=414&mode=crop',
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTysQtavhuwbdAnxm1iUC_KRGFJXgai7ZlTuw&usqp=CAU",
    "https://cdn.videvo.net/videvo_files/images/preview_Raindrops_Videvo.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDtClqMeLUk8Os1l79htYIBVHxE-cGV563CQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzLRbGuRadXmx4qeApX-3Zdu9mcNL7wVla3w&usqp=CAU",
]


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
            <div id="rotating-img-carousel">

                <div id="img-carousel">
                    <img
                        className="xs-img-left"
                        src={index === 1 ? imgArray[imgArray.length - 1] : index === 0 ? imgArray[imgArray.length - 2] : imgArray[index - 2]}
                        alt="sm-img"
                    />

                    <img
                        className="sm-img-left"
                        src={index === 0 ? imgArray[imgArray.length - 1] : imgArray[index - 1]}
                        alt="sm-img"
                    />

                    <img className="lg-img" src={imgArray[index]} alt="card" />

                    <img
                        className="sm-img-right"
                        src={index === imgArray.length - 1 ? imgArray[0] : imgArray[index + 1]}
                        alt="sm-img"
                    />

                    <img
                        className="xs-img-right"
                        src={index === imgArray.length - 2 ? imgArray[0] : index === imgArray.length - 1 ? imgArray[1] : imgArray[index + 2]}
                        alt="sm-img"
                    />
                </div>

            </div>
            <div id='nav-buttons'>
                <IconButton
                    onClick={() => { handleNav("left"); }} >
                    <ArrowBackIosIcon fontSize="large" />
                </IconButton>

                <IconButton
                    onClick={() => { handleNav("right"); }} >
                    <ArrowForwardIosIcon fontSize="large" />
                </IconButton>
            </div>
        </div>
    );
};

export default Gallery;