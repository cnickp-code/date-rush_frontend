import React from 'react';

class LoadingOverlay extends React.Component {

    render() {
        return (
            <div className="loader-overlay">
                <div className="loader"></div>
            </div>
        )
    }

}

export default LoadingOverlay;