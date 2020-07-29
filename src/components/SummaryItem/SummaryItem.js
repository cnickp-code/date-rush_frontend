import React from 'react';
import { NavLink } from 'react-router-dom';

class SummaryItem extends React.Component {
    render() {
        return (
            <div className="summary-container">
                <div className=" edit-container">
                    <i className="fas fa-edit"></i>
                </div>
                <h3 className="text-center mb-10">Name of Place/Activity</h3>
                <p className=" text-center">
                    <img src="https://via.placeholder.com/400" className="preview-image mb-10" />
                </p>

                {/* <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nisi tenetur, hic maiores consequatur dolorum optio nostrum mollitia vitae quibusdam. Minus mollitia eveniet voluptate repudiandae nobis illum iusto velit harum.</p> */}
                <div className="add-button-container mt-20 mb-20">
                    <button className="add-button pad-5 center">See Details</button>
                </div>
            </div>
        )
    }
}

export default SummaryItem;