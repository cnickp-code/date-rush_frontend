import React from 'react';
import DRContext from '../../context/DRContext';
import DateRushApiService from '../../services/dr-api-service';

class SetNameOverlay extends React.Component {
    static contextType = DRContext;

    handleNameSubmit = (e) => {
        e.preventDefault();

        const { name } = e.target;

        const dateItem = {
            name: name.value,
            place_id: this.context.dateActivity,
            meal_id: this.context.dateMeal.id,
            meal_type: this.context.dateMeal.type,
            drink_id: this.context.dateDrink,
            show_id: this.context.dateShow.id,
            show_type: this.context.dateShow.type,
        }

        DateRushApiService.postDate(dateItem)
            .then(date => {
                this.context.handleAddProfileDate(date);
                this.props.handleForward();
            })
    }

    render() {
        return (
            <div className="loader-overlay">
                <div className="name-form-container">
                    <form id="name-submit" onSubmit={this.handleNameSubmit}>
                        <h1>Name of Date</h1>
                        <input id="name" type="text" className="text-input center" placeholder="Enter name here." />
                        <div className="button-container">
                            <button type="submit" className="item-btn2">Save</button>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

export default SetNameOverlay;