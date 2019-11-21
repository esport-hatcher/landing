import React from 'react';
import Logo from '../../assets/logo-eh-dark.png';
import Categories from './Categories'

class Menu extends React.Component {
    state = {
        categories: [
            "Solution",
            "Événements",
            "À propos",
            "Connexion client",
            "Essai gratuit"
        ]
    }

    render () {
        return (
            <div className="menu">
                <div className="content container">
                    <div>
                        <img className="logo" src={Logo} alt="Esport Hatcher Logo"/>
                    </div>
                    <Categories categories={this.state.categories} />
                </div>
            </div>
        );
    }
}

export default Menu;