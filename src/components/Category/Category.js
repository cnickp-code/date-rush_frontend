import React from 'react';

class Category extends React.Component {

    sendCategory = () => {
        this.props.onCategorySelect(this.props.category);
    }

    render() {
        return (
            <>
                <div className="category" onClick={this.sendCategory}>{this.props.category}</div>
            </>
        )
    }
}

export default Category;