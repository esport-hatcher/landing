import React from 'react';

class CardContent extends React.Component<{logo: string; title: string; description: string}> {
    render () {
        if (this.props.logo == "" || this.props.title == "" || this.props.description == "") {
            return (null);
        }
        return (
            <div className="card">
                <img className="cardImg" src={this.props.logo} alt="illustration" />
                <div className="cardText">
                    <h3 className="cardTitle" >{this.props.title}</h3>
                    <p className="cardDescription">{this.props.description}</p>
                </div>            
            </div>
        )
    }
}

export default CardContent;