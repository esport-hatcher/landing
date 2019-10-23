import React from 'react';
import tools from '../../assets/tools.png';
import Caption from './Caption'

class Tools extends React.Component {
    render () {
        // var tool1 = "- Un dashboard spécifique pour chaque équipe et chaque jeu";
        // var tool3 = "- Calendrier, lives, événements, joueurs sur une seule page";
        // var tool4 = "- Résultats et autres données pour améliorer votre productivité";
        return (
            <div className="content tools">
                <img src={tools} className="toolsLogo"/>
                <div className="toolsTexts">
                    <p className="cardText">- Un dashboard spécifique pour chaque équipe et chaque jeu</p>
                    <p className="cardText">- Calendrier, lives, événements, joueurs sur une seule page</p>
                    <p className="cardText">- Résultats et autres données pour améliorer votre productivité</p>
                    <span>> </span><a href="#" className="underlineLink">Essayer maintenant</a>
                </div>
                {/* <Caption tool={tool1}/> */}
            </div>
        );
    }
}

export default Tools;