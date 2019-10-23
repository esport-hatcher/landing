import React from 'react';


class Caption extends React.Component<{tool: String}> {
    render () {
        return (
            <div>
                <p className="cardText">{this.props.tool}</p>
            </div>
        );
    }
}

export default Caption;