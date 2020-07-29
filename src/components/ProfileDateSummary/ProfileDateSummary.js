import React from 'react';

class ProfileDateSummary extends React.Component {
    render() {
        return (
            <div className="profile-item-container">
                <div className="profile-date-title">
                    <h3 className="text-center">Date Title</h3>
                </div>
                <div className="profile-date-container">
                    <div className="profile-buttons">
                        <button className="pad-5 p-btn">
                            <i className="fs-xl fas fa-edit"></i>
                        </button>
                        <button className="pad-5 p-btn">
                            <i className="fs-xl fas fa-trash-alt"></i>
                        </button>
                    </div>
                    <div className="profile-step">
                        <img className="z-bot" src="https://via.placeholder.com/400" />
                    </div>
                    <div className="profile-step">
                        <img className="z-bot" src="https://via.placeholder.com/400" />
                    </div>
                    <div className="profile-step">
                        <img className="z-bot" src="https://via.placeholder.com/400" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileDateSummary;