import React from 'react';
import ProfileDateSummary from '../../components/ProfileDateSummary/ProfileDateSummary';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import DRContext from '../../context/DRContext';
import ProfileDateItem from '../../components/ProfileDateItem/ProfileDateItem';
import { Redirect } from 'react-router-dom';
import DateRushApiService from '../../services/dr-api-service';

class ProfilePage extends React.Component {
    static contextType = DRContext;

    constructor(props) {
        super(props);
        this.state = {
            redirectSummary: false
        }
    }

    static contextType = DRContext;

    handleRedirectSummary = () => {
        this.setState({
            redirectSummary: !this.state.redirectSummary
        })
    }

    componentDidMount() {
        this.context.handleShowNameOverlay(false);

        DateRushApiService.getDates()
        .then(results => {
          console.log('my dates ', results)
          this.context.handleSetDates(results);
        })
    }

    render() {
        if(this.state.redirectSummary) {
            return <Redirect to="/date-summary"></Redirect>
        }

        const profileDates = this.context.myDates.map(date => {
            return <ProfileDateItem key={date.id} date={date} handleRedirect={this.handleRedirectSummary} />
        })

        return (
            <main>
                <Header />
                {/* <Nav /> */}
                <section>
                    <h2 className="text-center mb-10 mt-10 prof-page-title">My Dates</h2>
                    {profileDates}

                </section>

            </main>
        )
    }
}

export default ProfilePage;