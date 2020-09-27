import React from 'react'

const Slider: React.FC = () => {
    return (
        <div className="slider">
            <div className="content slider-text">
                <h3 className="sliderTitle">Managez votre structure esport grâce à notre plateforme <br/> de gestion complète</h3>
                <div className="sliderLinks">
                <a className="subscription" href="http://esport-hatcher.northeurope.cloudapp.azure.com"><button className="buttons">S'inscrire</button></a>
                    <a className="information" href="#">Plus D'informations</a>
                </div>
            </div>
        </div>
    );
}

export default Slider;