import React from 'react';
import CardContent from './CardContent';
import stick from '../../assets/joystick.png';
import teams from '../../assets/teams.png';

class Card extends React.Component {
    render (){
        var stickTitle = "Qu’est-ce que Esport-Hatcher";
        var stickDescription = "Esport-Hatcher est une boite a outil complète pour vous \
        permettre de gérer les différents aspects de votre equipe ou \
        organisation d’esport";

        var teamsTitle = "Une équipe amateur ou un grand groupe";
        var teamsDescription = "Découvrez nos différentes offres adaptées a vos besoins. Que \
        vous soyez une petite structure ou une organisation de plus \
        grande taille active sur plusieurs jeux";

           return (
            <div className="content">
                <CardContent logo={stick} title={stickTitle} description={stickDescription}/>
                <CardContent logo={teams} title={teamsTitle} description={teamsDescription}/>
            </div>
        );
    };
}

export default Card;