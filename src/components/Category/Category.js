import React from 'react';

class Category extends React.Component {

    sendCategory = () => {
        this.props.onCategorySelect(this.props.category);
    }

    render() {
        let buttonRender;

        if(this.props.selectedCategory && this.props.selectedCategory === this.props.category) {
            buttonRender = <div className="category-filled" onClick={this.sendCategory} disabled={true}>{this.props.category}</div>
        } else {
            buttonRender = <div className="category" onClick={this.sendCategory}>{this.props.category}</div>
        }
        return (
            <>
                {buttonRender}
            </>
        )
    }
}

export default Category;