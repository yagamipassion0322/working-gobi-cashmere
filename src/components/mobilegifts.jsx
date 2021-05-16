import React from 'react'
import {css} from '../style/mobileGifts.css'
import src1 from '../images/items/1.jpg'
import src2 from '../images/items/2.jpg'
import src3 from '../images/items/3.jpg'
import src4 from '../images/items/4.jpg'
import src5 from '../images/items/5.jpg'
import src6 from '../images/items/6.jpg'
import src7 from '../images/items/7.jpg'
import src8 from '../images/items/8.jpg'
import src9 from '../images/items/9.jpg'
import src10 from '../images/items/10.jpg'
import MobileGiftList from './mobileGiftsList'

function mobilegifts() {

    return (
        <div>
            <div className="giftContainer">
                <MobileGiftList  newstatus={true} src={src9} title="1 Zweiseitiger Wendemantel Mit Schmetterlingsxzds" />
                <MobileGiftList  favstatus={true} src={src10} title="2 Escarpe tisee avec bords contrastants et franges" />
                <MobileGiftList  src={src9} title="3 Escarpe tisee avec bords contrastants et franges" />
                <MobileGiftList colors={false}  newstatus={true}  src={src10} title="4 Escarpe tisee avec bords contrastants et franges" />
                <MobileGiftList  src={src9} title="5 Escarpe tisee avec bords contrastants et franges" />
                <MobileGiftList  src={src10} title="6 Escarpe tisee avec bords contrastants et franges" />
                <MobileGiftList  src={src9} title="7 Escarpe tisee avec bords contrastants et franges" />
                <MobileGiftList  src={src10} title="8 Escarpe tisee avec bords contrastants et franges" />
            </div>
        </div>
    )
}

export default mobilegifts
