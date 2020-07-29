import React from 'react';

class MovieItem extends React.Component {
    render() {
        return (
            <div className="main-container">
                <h3 className="text-center mb-10">Name</h3>
                <p className="text-center">
                    <img src="https://via.placeholder.com/400" class="preview-image mb-10" />
                </p>

                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nisi tenetur, hic maiores consequatur dolorum optio nostrum mollitia vitae quibusdam. Minus mollitia eveniet voluptate repudiandae nobis illum iusto velit harum.</p>

            </div>
        )
    }
}

export default MovieItem;