import React from 'react';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import Signup from '../../components/Signup/Signup';

class SignupPage extends React.Component {
    render() {
        return (
            <main>
                <Header />
                <Nav />
                <section>
                    <Signup />
                </section>
            </main>
        )
    }
}

export default SignupPage;