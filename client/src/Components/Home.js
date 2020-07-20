import React from 'react';
import profile from '../Images/MyPortfolioPic.jpg';
import emailButton from '../Images/footerlink-email(1).png';
import facebookButton from '../Images/footerlink-facebook(1).png';
import instaButton from '../Images/footerlink-instagram(1).png';
import phoneButton from '../Images/footerlink-phone(1).png';


class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            modalDisplayed: false,
        }
    }
    clickHandler = evt => {
        evt.preventDefault();
        this.setState({
            modalDisplayed: true
        });
    }
    cancelHandler = (evt) => {
        evt.preventDefault();

        if (evt.target.textContent === 'Close') {
            this.setState({
                modalDisplayed: false,
            })
        }
    }

    render() {

        return (

            <div id='background'>
                <div id='mainContainer'>
                    <img id='profileImg' src={profile} alt="My Profile Pic" />
                    <h1 className='profTextColor'>I'm Christian</h1>
                    <h2 id='profileTitle' className='profTextColor'>Full Stack Web Developer</h2>
                    <div id='socialMediaImgs'>
                        {this.state.modalDisplayed === true ? <EmailModal handleCancel={this.cancelHandler} /> : null}
                        <a onClick={this.clickHandler} href=''><img className='socialButtons' src={emailButton} alt='Email Button' /></a>
                        <a href='https://www.facebook.com/ChristianRDow' target="_blank"><img className='socialButtons' src={facebookButton} alt='Facebook Button' /></a>
                        <a href='https://www.instagram.com/802blueeyes/?hl=en' target="_blank"><img className='socialButtons' src={instaButton} alt='Instagram Button' /></a>
                        <a href='https://www.linkedin.com/in/christian-dow' target="_blank"><img className='socialButtons' src={phoneButton} alt='Phone Button' /></a>
                    </div>
                </div>
            </div>
        )
    }
}

function EmailModal(props) {
    return (
        <div id='emailDisplay'>

            <h1>My Personal Email Adress is : CHRISTIANRDOW@GMAIL.COM </h1>
            <h2>Feel free to contact me at any time.</h2>
            <h3>I look forward to speaking with you!</h3>
            <h3>I can also be reached at :</h3>
            <h3>(802) 735 3393</h3>
            <h5>Best,</h5>
            <h5>Christian</h5>
            <button id='modalButton' onClick={props.handleCancel}>Close</button>

        </div>
    );
}

export default Home;