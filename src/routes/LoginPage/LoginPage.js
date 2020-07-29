import React from 'react';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import Login from '../../components/Login/Login';

class LoginPage extends React.Component {
    render() {
        return (
            <main>
                <Header />
                <Nav />
                <section>
                    <Login />
                </section>
            </main>
        )
    }
}

export default LoginPage;