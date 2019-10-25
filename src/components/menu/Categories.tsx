import React from 'react';

class Categories extends React.Component<{categories: string[]}> {
    render () {
        return (
            <div className="categories">
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
        );
    }
}

export default Categories;