import React from 'react';
import ProfileDateSummary from '../../components/ProfileDateSummary/ProfileDateSummary';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import DRContext from '../../context/DRContext';
import ProfileDateItem from '../../components/ProfileDateItem/ProfileDateItem';
import { Redirect } from 'react-router-dom';
import DateRushApiService from '../../services/dr-api-service';
import { Transition } from 'react-spring/renderprops';

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
                    {/* {profileDates} */}

                    <Transition
                        items={profileDates} keys={item => item.key}
                        from={{ opacity: 0, transform: 'translate3d(0, 300%, 0)' }}
                        enter={{ opacity: 1, transform: 'translate3d(0, 0px, 0)' }}
                        leave={{ opacity: 0, transform: 'translate3d(0, 100%, 0)' }}
                        trail={150}
                    >
                        {item => props => <div style={props}>{item}</div>}
                    </Transition>

                </section>

            </main>
        )
    }
}

export default ProfilePage;