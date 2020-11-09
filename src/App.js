import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components';
import GlobalStyle from './globalStyles';


function App(props) {
    return (
        <div className="App">

            <BrowserRouter>
                <GlobalStyle />
                <Navbar />
            </BrowserRouter>

        </div>
    );
}

export default App;

