import React from 'react'
import {css} from '../style/mobileGiftsList.css'
import { AiFillHeart  } from 'react-icons/ai'


function mobileGiftsList({src, favstatus, title, colors, newstatus}) {
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
                        null
                    )
                }
                {
                    newstatus ? (<div className="newStatusContainer">NEW</div>) : (null)
                }
            </div>
        </div>
    )
}

export default mobileGiftsList
