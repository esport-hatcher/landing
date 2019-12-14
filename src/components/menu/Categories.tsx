import React from 'react';

class Categories extends React.Component<{categories: string[]}> {

    state = { toggle: false }

    onToggle = () => this.setState({ toggle: !this.state.toggle})

    render () {
        return (
            <div className="categories">
                <a href="#" className={`${this.state.toggle && "on"}`} id='toggle' onClick={this.onToggle}><span></span></a>
                <div className="toggle-menu">
                    <ul>
                        {
                            this.props.categories.map((element, i) => {
                                if (i === this.props.categories.length - 1) {
                                    return (
                                        <li key={element}>
                                            <a href="#">
                                                <button className="buttons menu_button">
                                                    {element}
                                                </button>
                                            </a>
                                        </li>
                                    )
                                }
                                else
                                {
                                    return (
                                        <li key={element}>
                                            <a href="#">
                                                {element}
                                            </a>
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
                </div>
                {/* <ul>
                    {
                        this.props.categories.map((element, i) => {
                            if (i === this.props.categories.length - 1) {
                                return (
                                    <li key={element}>
                                        <a href="#">
                                            <button className="buttons menu_button">
                                                {element}
                                            </button>
                                        </a>
                                    </li>
                                )
                            }
                            else
                            {
                                return (
                                    <li key={element}>
                                        <a href="#">
                                            {element}
                                        </a>
                                    </li>
                                )
                            }
                        })
                    }
                </ul> */}
            </div>
        );
    }
}

export default Categories;