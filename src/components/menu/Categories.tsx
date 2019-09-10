import React from 'react';

class Categories extends React.Component<{categories: string[]}> {
    render () {
        return (
            <div className="categories">
                <ul>
                    {
                        this.props.categories.map(element => {
                            return (
                                <li key={element}>
                                    <a href="#">
                                        {element}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Categories;