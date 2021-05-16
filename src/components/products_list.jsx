import React, { Component } from 'react'
import { css } from '../style/product_list.css'
import { BsArrowRight  } from 'react-icons/bs'


function products_list({title, img, product, mobile}) {
    let classname = "";
    if(mobile)
    {
        classname = "notMobile";
    }
    return (
        <div className="productListContainer">
            <div className={classname}>
                {
                    title
                    ?
                    (
                        <h1 className="productListHead">{title}</h1>
                    ):(null)
                }
                <div className="image">
                    <img src={img} />
                    <div className="descriptTionBoxContainer">
                        <div>
                            <a href="#">{product}</a>
                        </div>
                        <div>
                            <a href="#" className="arrowIcon"><BsArrowRight /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default products_list
