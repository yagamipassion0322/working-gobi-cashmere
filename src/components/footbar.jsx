import React from 'react'
import {css} from '../style/footbar.css'
import { FaRegCopyright  } from 'react-icons/fa'
import { ImLocation  } from 'react-icons/im'
import assets1 from '../images/assets/1.jpg'


function footbar() {
    return (
        <div className="footbarContainer">
            <div className="assetFoot">
                <p><ImLocation /> United Kingdom</p>
            </div>
            <div>
                <p>All content Copyright <FaRegCopyright /> 2020 GOBI Cashmere</p>
            </div>
            <div className="assetFoot">
                <img src={assets1} />
            </div>
        </div>
    )
}

export default footbar
