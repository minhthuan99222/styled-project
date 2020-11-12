import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar } from './components';
import Footer from './components/Footer/Footer';
import GlobalStyle from './globalStyles';
import HomePage from './pages/HomePage/HomePage';


function App(props) {
    return (
        <div className="App">

            <BrowserRouter>
                <GlobalStyle />
                <Navbar />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
                <Footer />
            </BrowserRouter>

        </div>
    );
}

export default App;

