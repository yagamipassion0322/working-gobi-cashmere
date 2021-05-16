import React, {Component , useEffect, useState} from 'react';
import './App.css';
import Navbar from './components/navbar'
import Topbar from './components/topbar'
import WinterPrice from './components/winterPrice'
import Products from './components/Product'
import Gifts from './components/gifts'
import Item from './components/mobilegifts'
import About from './components/about'
import Subscribe from './components/subscribe'
import Footer from './components/footer'
import Footbar from './components/footbar'
import {css} from '@emotion/core'
import BeatLoader from 'react-spinners/BeatLoader'
import { useMediaQuery } from 'react-responsive'
import Carousel from 'react-elastic-carousel'

const breakPoints = [
  { width: 200, itemsToShow: 1},
];


function App() {

  const [loading, setLoading] = useState(false);
  const override = css`
    display: block;
    border-color: red;
    margin-top: 20%;
    `;

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, []);
  const isMobile = useMediaQuery({ query: `(max-width: 600px)` });

  
  return (
    <div className="App">
      {
        loading ? <BeatLoader color={"#1B98F5"} loading={loading} css={override} size={40} />
        :
        <>
          <Topbar />
          <Navbar />
          <WinterPrice />
          <Products />
          {
            !isMobile ? (<Gifts />) : (
              <>
                <h1 className="mobileHeaderTitle">To get and to gift</h1>
                <Carousel showArrows={false} >
                  <Item>1</Item>
                  <Item>2</Item>
                  <Item>3</Item>
                  <Item>4</Item>
                  <Item>5</Item>
                  <Item>6</Item>
                </Carousel>
                <Carousel showArrows={false} >
                  <Item>1</Item>
                  <Item>2</Item>
                  <Item>3</Item>
                  <Item>4</Item>
                  <Item>5</Item>
                  <Item>6</Item>
                </Carousel>
              </>
            )
          }
          <About />
          <Subscribe />
          <Footer />
          <Footbar />
        </>
      }
    </div>
  );
}

export default App;
