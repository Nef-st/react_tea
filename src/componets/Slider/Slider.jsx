import React from 'react';
import btnPrev from '../../assets/btnPrev.svg';
import btnNext from '../../assets/btnNext.svg';

function Slider() {
    return (
        <div className="slider">
            <div className="slider__container">
                <div className="slider__wrapper">
                    <div className="slider__items">
                        <div className="slider__item"></div>
                    </div>
                </div>
                <button className="slider__btn btn_prev">
                    <img src={btnPrev} alt="prev" />
                </button>
                <button className="slider__btn btn_next">
                    <img src={btnNext} alt="next" />
                </button>
            </div>
        </div>
    );
}

export default Slider;
