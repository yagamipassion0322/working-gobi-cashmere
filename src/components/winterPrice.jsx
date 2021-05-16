import React from 'react'
import {css} from '../style/winterPrice.css';
import big from '../images/collection/1.png';
import small1 from '../images/collection/2.png';
import small2 from '../images/collection/3.png';

function winterPrice() {
    return (
        <div>
            <div className="clearfix"></div>
                <div className="winterPriceContainer">
                    <div className="DescriptionContainer">
                        <div>
                            <h1>Winter price 2020</h1>
                            <p>
                                infusion of summer pieces and cashmere silk blends.
                            </p>
                            <button className="ShoNowButton">Shop Now</button>
                        </div>
                    </div>
                    <div className="ImageCollection">
                        <div className="ImageCollectionContainer">
                            <div className="BigImage">
                                <img src={big} />
                            </div>
                            <div className="SmallImage">
                                <img src={small1} />
                                <img src={small2} />
                            </div>
                        </div>
                        <p>
                            Infusion of summer pieces and cashmere silk blends.
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default winterPrice
