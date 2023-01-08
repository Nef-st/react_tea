import React from 'react';
import './App.scss';
import Showcase from './Pages/Showcase/Showcase';

function App() {
    return (
        <div className="App">
            <div className="intro">
                <div className="intro__container">
                    <Showcase />
                </div>
            </div>
        </div>
    );
}

export default App;
