import React from 'react';
import facebook from '../../assets/facebook_icon.png';
import youtube from '../../assets/youtube.png';
import twitter from '../../assets/twitter.png';

class Footer extends React.Component {
    render () {
        return (
            <div className="footer content footerGrid">
                <div className="footerSeparator"></div>
                <div className="footerIcons">
                    <img src={facebook} className="media_icon"/>
                    <img src={twitter} className="media_icon"/>
                    <img src={youtube} className="media_icon"/>
                </div>
                <div className="footerLink">
                    <a href="#" className="leftLink">A propos</a>
                    <a href="#">Nous contacter</a>
                </div>
                <p>Copyright © Esport Hatcher All rights Reserved</p>
                {/* <svg>
                    <use href={`${facebook}`}></use>
                </svg>*/}
            </div>
        )
    }
}

export default Footer;