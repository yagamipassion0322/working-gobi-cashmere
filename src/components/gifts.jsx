import { Component, useState, useEffect } from 'react'
import GiftList from './gift_list'
import {css} from '../style/gifts.css'
import src1 from '../images/items/1.jpg'
import src2 from '../images/items/2.jpg'
import src3 from '../images/items/3.jpg'
import src4 from '../images/items/4.jpg'
import src5 from '../images/items/5.jpg'
import src6 from '../images/items/6.jpg'
import src7 from '../images/items/7.jpg'
import src8 from '../images/items/8.jpg'

function gifts() {
    return (
        <div>
            <div className="titleBack">
                <h1 className="GiftBigTitle">To Get And To Gift</h1>
            </div>
            <div className="giftContainer">
                <GiftList newstatus={true} src={src1} title="Zweiseitiger Wendemantel Mit Schmetterlingsxzds" />
                <GiftList favstatus={true} colors={true} src={src2} title="Escarpe tisee avec bords contrastants et franges" />
                <GiftList src={src3} title="Трикотажный Супер Мягкий Плед Контрастного Оттенка" />
                <GiftList src={src4} title="Кардиган в Стиле Колор-Блок ё V-Образным Воротником" />
            </div>
            <div className="giftContainer">
                <GiftList src={src5} title="Zweiseitiger Wendemantel Mit Schmetterlingsxzds" />
                <GiftList favstatus={true} colors={true} src={src6} title="Escarpe tisee avec bords contrastants et franges" />
                <GiftList src={src7} title="Трикотажный Супер Мягкий Плед Контрастного Оттенка" />
                <GiftList src={src8} title="Кардиган в Стиле Колор-Блок ё V-Образным Воротником" />
            </div>
        </div>
    )
}

export default gifts
