import React, { Component } from 'react';
import {css} from '../style/navbar.css';
import { HiMenuAlt1  } from 'react-icons/hi';
import { BsSearch  } from 'react-icons/bs';
import { AiOutlineCloseCircle  } from 'react-icons/ai';
import { AiOutlineArrowDown  } from 'react-icons/ai';
import { AiOutlineArrowUp  } from 'react-icons/ai';
import { AiOutlineArrowRight  } from 'react-icons/ai';
import { BsHeartHalf  } from 'react-icons/bs';
import { AiOutlineDatabase  } from 'react-icons/ai';
import item from '../images/item.jpg'; // with import

class navbar extends Component {

    constructor() {
        super();
        
        this.state = {
            showMenu: false,
            showSearchResult: false,
            showSearchBar: false,
          };
        this.showMenu = this.showMenu.bind(this);
        this.showSearchResult = this.showSearchResult.bind(this);
        this.closeSearchResult = this.showSearchResult.bind(this);
        this.showSearchBar = this.showSearchBar.bind(this);
      }
      showMenu(event) {
        event.preventDefault();
        
        if(this.state.showMenu === true)
        {
            this.setState({
                showMenu: false,
              });
        }else{
            this.setState({
                showMenu: true,
              });
        }
        
    };

    showSearchResult(event) {
        event.preventDefault();
        
        if(this.state.showSearchResult === true)
        {
            this.setState({
                showSearchResult: false,
              });
        }else{
            this.setState({
                showSearchResult: true,
              });
        }
        
    };
    showSearchBar(event){
        event.preventDefault();
        if(this.state.showSearchBar === true)
        {
            this.setState({
                showSearchBar: false,
              });
        }else{
            this.setState({
                showSearchBar: true,
              });
        }
    }   
    closeSearchResult(event)
    {
        if(this.state.showSearchResult === true)
        {
            this.setState({
                showSearchResult: false,
              });
        }
    }

    render() {
        return (
            <nav className="headContainer">
                <div className="menuContainer">
                    <div className="listMenu">
                        <ul className="listMenuUl">
                            <li className="dropDownMenuIcon">
                                <a href="#" onClick={this.showMenu}><HiMenuAlt1 /></a>
                            </li>
                            <li className="dropDownSearchIcon">
                                <a href="#" onClick={this.showSearchBar}><BsSearch /></a>
                            </li>
                            <li className="custom_menu">
                                <a href="#">Women</a>
                            </li>
                            <li className="custom_menu">
                                <a href="#">Men</a>
                            </li>
                            <li className="custom_menu">
                                <a href="#">Home</a>
                            </li>
                            <li className="custom_menu">
                                <a href="#">Accessories</a>
                            </li>
                            <li className="custom_menu">
                                <a href="#">Organic</a>
                            </li>
                        </ul>
                    </div>
                    <div className="logoContainer">
                        <a href="/"><h1>Gobi</h1><small className="logoDesc">cashmere for all</small></a>
                    </div>
                    <div className="descriptionBox">
                        <h1 className="descHead">Summer</h1>
                        <h3 className="descSale">Sale</h3>
                        <ul className="listOfSales">
                            <li>upto</li>
                            <li className="percent">60%</li>
                            <li className="justBot">off</li>
                        </ul>
                        <button className="shopNow">Shop now</button>
                    </div>
                    {
                        this.state.showSearchBar
                        ?
                        (
                            <div className="searchContainer resSearchBar">
                                <div className="searchBox">
                                    <input className="searchValue" placeholder="Search"  onClick={this.showSearchResult} />
                                    { this.state.showSearchResult ? (
                                        <label className="searchExitIcon"><a href="#"  onClick={this.closeSearchResult}><AiOutlineCloseCircle /></a></label>
                                    ) : (null) }
                                </div>
                                {
                                    this.state.showSearchResult
                                    ?
                                    (
                                        <div className="searchResults">
                                            <div className="header">
                                                <p>Press <b>enter</b> to select <AiOutlineArrowUp /> <AiOutlineArrowDown/> to navigate, <b>esc</b> to dismiss</p>
                                            </div>
                                            <div className="body">
                                                <div className="data">
                                                    <div className="searchItem">
                                                        <img src={item} />
                                                        <div className="desc">
                                                            <h4>Chill summer Essential Set</h4>
                                                            <h4 className="redColor"><small>$899</small><b>$620.32</b></h4>
                                                        </div>
                                                    </div>
                                                    <div className="searchItem">
                                                        <img src={item} />
                                                        <div className="desc">
                                                            <h4>Chill summer Essential Set</h4>
                                                            <h4 className="redColor"><small>$899</small><b>$620.32</b></h4>
                                                        </div>
                                                    </div>
                                                    <div className="searchItem">
                                                        <img src={item} />
                                                        <div className="desc">
                                                            <h4>Chill summer Essential Set</h4>
                                                            <h4 className="redColor"><small>$899</small><b>$620.32</b></h4>
                                                        </div>
                                                    </div>
                                                    <div className="searchItem">
                                                        <img src={item} />
                                                        <div className="desc">
                                                            <h4>Chill summer Essential Set</h4>
                                                            <h4 className="redColor"><small>$899</small><b>$620.32</b></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="categories">
                                                    <ul>
                                                        <li>
                                                            <a href="#">Sweather</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Basic</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Cardigans</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Hoodies</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Crew Necks</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Turtle Necks</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">V Necks</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Vests & Tops</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <ul className="viewallStyle">
                                                    <li className="underline">View all</li>
                                                    <li>(234)</li>
                                                    <li>
                                                        <a href="#"><AiOutlineArrowRight /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                    :
                                    (
                                        null
                                    )
                                }
                            </div>
                        )
                        :
                        (null)
                    }
                    <div className="searchContainer">
                        <div className="searchBox">
                            <input className="searchValue" placeholder="Search"  onClick={this.showSearchResult} />
                            { this.state.showSearchResult ? (
                                <label className="searchExitIcon"><a href="#"  onClick={this.closeSearchResult}><AiOutlineCloseCircle /></a></label>
                            ) : (null) }
                        </div>
                        {
                            this.state.showSearchResult
                            ?
                            (
                                <div className="searchResults">
                                    <div className="header">
                                        <p>Press <b>enter</b> to select <AiOutlineArrowUp /> <AiOutlineArrowDown/> to navigate, <b>esc</b> to dismiss</p>
                                    </div>
                                    <div className="body">
                                        <div className="data">
                                            <div className="searchItem">
                                                <img src={item} />
                                                <div className="desc">
                                                    <h4>Chill summer Essential Set</h4>
                                                    <h4 className="redColor"><small>$899</small><b>$620.32</b></h4>
                                                </div>
                                            </div>
                                            <div className="searchItem">
                                                <img src={item} />
                                                <div className="desc">
                                                    <h4>Chill summer Essential Set</h4>
                                                    <h4 className="redColor"><small>$899</small><b>$620.32</b></h4>
                                                </div>
                                            </div>
                                            <div className="searchItem">
                                                <img src={item} />
                                                <div className="desc">
                                                    <h4>Chill summer Essential Set</h4>
                                                    <h4 className="redColor"><small>$899</small><b>$620.32</b></h4>
                                                </div>
                                            </div>
                                            <div className="searchItem">
                                                <img src={item} />
                                                <div className="desc">
                                                    <h4>Chill summer Essential Set</h4>
                                                    <h4 className="redColor"><small>$899</small><b>$620.32</b></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="categories">
                                            <ul>
                                                <li>
                                                    <a href="#">Sweather</a>
                                                </li>
                                                <li>
                                                    <a href="#">Basic</a>
                                                </li>
                                                <li>
                                                    <a href="#">Cardigans</a>
                                                </li>
                                                <li>
                                                    <a href="#">Hoodies</a>
                                                </li>
                                                <li>
                                                    <a href="#">Crew Necks</a>
                                                </li>
                                                <li>
                                                    <a href="#">Turtle Necks</a>
                                                </li>
                                                <li>
                                                    <a href="#">V Necks</a>
                                                </li>
                                                <li>
                                                    <a href="#">Vests & Tops</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="footer">
                                        <ul className="viewallStyle">
                                            <li className="underline">View all</li>
                                            <li>(234)</li>
                                            <li>
                                                <a href="#"><AiOutlineArrowRight /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )
                            :
                            (
                                null
                            )
                        }
                    </div>
                    <div className="iconContainer">
                        <ul className="listMenuUl">
                            <li>
                                <a href="#" className="customIcon"><BsHeartHalf/></a>
                            </li>
                            <li>
                                <a href="#" className="customIcon"><AiOutlineDatabase/></a>
                            </li>
                        </ul>
                    </div>
                </div>
                {
                    this.state.showMenu
                      ? (
                        <ul className="mobilemenu">
                            <li>
                                <a href="#">Women</a>
                            </li>
                            <li>
                                <a href="#">Men</a>
                            </li>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Accessories</a>
                            </li>
                            <li>
                                <a href="#">Organic</a>
                            </li>
                        </ul>
                      )
                      : (
                        null
                      )
                }
            </nav>
        )
    }
}

export default navbar
