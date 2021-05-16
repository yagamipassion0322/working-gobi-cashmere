import { Component, useState, useEffect } from 'react';
import {css} from '../style/product.css';
import Product_list from './products_list';
import src2 from '../images/collection/2.jpg'
import src3 from '../images/collection/3.jpg'
import src4 from '../images/collection/4.jpg'
import src5 from '../images/collection/5.jpg'
import { useMediaQuery } from 'react-responsive'

function Product() {

    const isMobile = useMediaQuery({ query: `(max-width: 600px)` });
    return (
        <div>
            {isMobile ? (<h1 className="PTitle">Woman</h1>) : (null)}

            <div className="productContainer">
                <Product_list product="Cardigans" img={src2} />
                <Product_list product="Cardigans" img={src3} title="Woman"/>
                {
                    !isMobile ? (<Product_list className="getMobile" mobile="notMobile" product="Cardigans" img={src2} />) : (null)
                }
                
            </div>

            {isMobile ? (<h1 className="PTitle">Men</h1>) : (null)}

            <div className="productContainer">
                <Product_list product="Cardigans" img={src4} />
                <Product_list product="Cardigans" img={src5} title="Men"/>
                {
                    !isMobile ? (<Product_list className="getMobile" mobile="notMobile" product="Cardigans" img={src2} />) : (null)
                }
                
            </div>
        </div>
    )
}

export default Product
