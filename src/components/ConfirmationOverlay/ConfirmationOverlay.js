import React from 'react';

class ConfirmationOverlay extends React.Component {

    render() {
        return (
            <div className="loader-overlay">
                <div className="load-container">
                    <img src='https://media1.tenor.com/images/22919ad969d4fcf8280c47f4c4d6a643/tenor.gif?itemid=15903843' className="checkmark"></img>
                </div>

                {/* <div className="checkmark"></div> */}
            </div>
        )
    }

}

export default ConfirmationOverlay;