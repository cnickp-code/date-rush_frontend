import React from 'react';

class QuickBuildTracker extends React.Component {
    render() {
        return (
            <div className="bottom-container">
                <div className="prev-step text-center">
                    {"<<"}
                </div>
                <div className="step">
                    <img src="https://via.placeholder.com/400" />
                    <i className="fas fa-check step-icon"></i>
                </div>
                <div className="step">
                    <img src="https://via.placeholder.com/400" />
                    <i className="fas fa-question step-icon"></i>
                </div>
                <div className="step">
                    <img src="https://via.placeholder.com/400" />
                    <i className="fas fa-question step-icon"></i>
                </div>
                <div className="step">
                    <img src="https://via.placeholder.com/400" />
                    <i className="fas fa-question step-icon"></i>
                </div>
                <div className="next-step text-center">
                    {">>"}
                </div>
            </div>
        )
    }
}

export default QuickBuildTracker;