import React from 'react';
import DRContext from '../../context/DRContext';
import DateRushApiService from '../../services/dr-api-service';

class ProfileDateItem extends React.Component {
    static contextType = DRContext;

    handleSetSummary = () => {
        this.context.handleSetSummaryDate(this.props.date);
        this.props.handleRedirect();
    }

    handleDeleteItem = () => {
        DateRushApiService.deleteDateItem(this.props.date.id, this.context.handleDeleteItem);
    }

    render() {

        let date = this.props.date
        return (
            <div className="profile-main-wrapper center">
                <div className="profile-item-container2">
                    <div className="prof-title-container" onClick={this.handleSetSummary}>
                        <h3 className="text-center">{date.name}</h3>
                    </div>
                    <div className="prof-button-container">
                        <div className="trash-button" onClick={this.handleDeleteItem}>
                            <i className="fs-xl fas fa-trash-alt"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileDateItem;
