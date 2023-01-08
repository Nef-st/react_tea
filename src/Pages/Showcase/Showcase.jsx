import React from 'react';
import Footer from '../../componets/Footer/Footer';
import Header from '../../componets/Header/Header';
import Item from '../../componets/Item/Item';
import Navigation from '../../componets/Navigation/Navigation';
import Slider from '../../componets/Slider/Slider';

function Showcase() {
    return (
        <div className="ShowCase">
            <Header />
            <Slider />
            <Navigation />

            <div className="main">
                <div className="main__container">
                    <div className="main__items">
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Showcase;
