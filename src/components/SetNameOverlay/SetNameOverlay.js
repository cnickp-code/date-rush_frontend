import React from 'react';
import DRContext from '../../context/DRContext';
import DateRushApiService from '../../services/dr-api-service';
import { Spring } from 'react-spring/renderprops';

class SetNameOverlay extends React.Component {
    static contextType = DRContext;

    handleNameSubmit = (e) => {
        e.preventDefault();

        const { name } = e.target;

        const dateItem = {
            name: name.value,
            location: this.context.location,
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

    handleHideOverlay = () => {
        this.context.handleShowNameOverlay(false);
    }

    render() {
        return (
            <div className="loader-overlay" >
                <Spring
                    from={{ opacity: 0, transform: 'translate3d(0, 300%, 0)'  }}
                    to={{ opacity: 1, transform: 'translate3d(0, -10%, 0)' }}
                    config={{ duration: 1000 }}
                >
                    {props => (

                        <div style={props} className="name-form-container">
                            <div className="overlay-exit" onClick={this.handleHideOverlay}>
                                <i class="far fa-times-circle"></i>
                            </div>
                            <form id="name-submit" onSubmit={this.handleNameSubmit}>
                                <h1>Name of Date</h1>
                                <input id="name" type="text" className="search center" placeholder="Enter name here." />
                                <div className="button-container">
                                    <button type="submit" className="item-btn">Save</button>
                                </div>
                            </form>
                        </div>

                    )}
                </Spring>
            </div>
        )
    }
}

export default SetNameOverlay;