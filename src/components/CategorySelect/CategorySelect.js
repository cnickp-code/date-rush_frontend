import React from 'react';
import Category from '../Category/Category';

class CategorySelect extends React.Component {
    constructor(props) {
        super(props);
        this.category = React.createRef();
    }

    sendCategory = (val) => {
        console.log(this.category.current.value);
    }

    render() {
        let categoryDisplay = this.props.categories.map((cat, i) => {
            return <Category key={i} category={cat} onCategorySelect={this.props.onCategorySelect}/>
        })

        return (
            <div className="category-container center">
                {categoryDisplay}
            </div>
        )
    }
}

export default CategorySelect;