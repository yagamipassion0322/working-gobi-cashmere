import React from 'react'
import css from '../style/footer.css'
import amex from '../images/assets/amex.svg'
import apple from '../images/assets/apple-pay.svg'
import paypal from '../images/assets/paypal.svg'
import symbol from '../images/assets/symbol (1).svg'
import symbol2 from '../images/assets/symbol.svg'
import visa from '../images/assets/visa.svg'
import { FaFacebookF  } from 'react-icons/fa'
import { AiOutlineInstagram  } from 'react-icons/ai'
import { AiOutlineTwitter  } from 'react-icons/ai'
import { AiFillYoutube  } from 'react-icons/ai'
import { AiOutlineGlobal  } from 'react-icons/ai'
import { IoIosArrowDown  } from 'react-icons/io'
import assets1 from '../images/assets/1.jpg'



function footer() {
    return (
        <>
            <div className="footerTopSocialListMobile">
                <ul className="SocialLinksForMobile">
                    <li>
                        <a href="#"><FaFacebookF /></a>
                    </li>
                    <li>
                        <a href="#"><AiOutlineInstagram /></a>
                    </li>
                    <li>
                        <a href="#"><AiOutlineTwitter /></a>
                    </li>
                    <li>
                        <a href="#"><AiFillYoutube /></a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={amex} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={apple} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={paypal} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={visa} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footerTopSection"></div>
            <div className="footerContainer">
                <div className="footMenuContainer">
                    <div className="footmenuSection">
                        <ul>
                            <li className="menuHeadTitle">About us <p className="arrowIconDown"><IoIosArrowDown /></p></li>
                            <li><a href="#">Our history</a></li>
                            <li><a href="#">Product care</a></li>
                            <li><a href="#">Store location</a></li>
                            <li><a href="#">Sustainability</a></li>
                        </ul>
                    </div>
                    <div className="footmenuSection">
                        <ul>
                            <li className="menuHeadTitle">Policy <p className="arrowIconDown"><IoIosArrowDown /></p></li>
                            <li><a href="#">Shipping & Return policy</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Impressum</a></li>
                            <li><a href="#">Return portal</a></li>
                        </ul>
                    </div>
                    <div className="footmenuSection">
                        <ul>
                            <li className="menuHeadTitle">Customer Service <p className="arrowIconDown"><IoIosArrowDown /></p></li>
                            <li><a href="#">General terms and conditions</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Fuq</a></li>
                        </ul>
                    </div>
                    <div className="footmenuSection">
                        <ul>
                            <li className="menuHeadTitle">Customer Service <p className="arrowIconDown"><IoIosArrowDown /></p></li>
                            <li><a href="#">General terms and conditions</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Fuq</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footSocialContainer">
                    <ul className="SocialLinks">
                        <li className="menuHeadTitle">Follow us</li>
                        <li>
                            <a href="#"><FaFacebookF /></a>
                        </li>
                        <li>
                            <a href="#"><AiOutlineInstagram /></a>
                        </li>
                        <li>
                            <a href="#"><AiOutlineTwitter /></a>
                        </li>
                        <li>
                            <a href="#"><AiFillYoutube /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footerContainer mt-0">
                <div className="footMenuContainer">
                    <div className="footPaymethodMenuSection">
                        <ul className="footLogoList">
                            <li>
                                <a href="#">
                                    <img src={amex} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={apple} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={paypal} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={symbol} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={symbol2} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={visa} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footSocialContainer">
                    <ul className="SocialLinks bottLangBox">
                        <li>
                            <a href="#" className="menuHeadTitle">Global - English</a>
                        </li>
                        <li>
                            <a href="#"><AiOutlineGlobal /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footerBottomSocialListMobile">
                <ul className="SocialLinksForMobile">
                    <li>
                        <a href="#"><FaFacebookF /></a>
                    </li>
                    <li>
                        <a href="#"><AiOutlineInstagram /></a>
                    </li>
                    <li>
                        <a href="#"><AiOutlineTwitter /></a>
                    </li>
                    <li>
                        <a href="#"><AiFillYoutube /></a>
                    </li>
                </ul>
            </div>
            <div className="footerBottomSocialListMobile mb50">
                <ul className="SocialLinksForMobile">
                    <li>
                        <a href="#">
                            <img src={amex} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={apple} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={paypal} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={visa} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footerBottomSocialListMobile mb50">
                <img className="footAnyPic" src={assets1} />
            </div>
        </>
    )
}

export default footer
