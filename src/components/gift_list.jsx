import React, { Component } from 'react'
import { css } from '../style/gift_list.css'
import { AiFillHeart  } from 'react-icons/ai'


function gift_list({src, title, colors, newstatus, favstatus}) {
    return (
        <div className="getGiftContainer">
            <div className="giftBox">
                <img src={src}/>
                {
                    favstatus ? (<div className="favStatusContainer"><p className="favIcon"><AiFillHeart /></p></div>) : (null)
                }
                <p className="giftTitle">{title}</p>
                {
                    colors ? (
                        <ul className="colorLists">
                            <li className="color1"></li>
                            <li className="color2"></li>
                            <li className="color3"></li>
                            <li className="color4"></li>
                            <li className="color5"></li>
                            <li className="color6"></li>
                            <li className="color7"></li>
                            <li>+17</li>
                        </ul>
                    ) :
                    (
                        <div>
                            <p className="giftColors">+6 colors</p><p className="giftPrice"><p className="giftOldPrice">$ 299.00</p><p className="giftNewPrice"> $79.00</p></p>
                        </div>
                    )
                }
                {
                    newstatus ? (<div className="newStatusContainer">NEW</div>) : (null)
                }
            </div>
        </div>
    )
}

export default gift_list
