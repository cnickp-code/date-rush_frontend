import React from 'react';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';

class NotFoundPage extends React.Component {
    render() {
        return (
            <main>
                <Header />
                <Nav />
                <section>
                    <h2 className="text-center mb-10 mt-10">Page Not Found</h2>
                </section>
            </main>
        )
    }
}

export default NotFoundPage;