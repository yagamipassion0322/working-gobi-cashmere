import React from 'react'
import css from '../style/about.css'
import aboutimage from '../images/about/1.jpg'
import aboutimage1 from '../images/about/2.jpg'

function about() {
    return (
        <>
            <div className="AboutContainer">
                <div className="AboutImageContainer">
                    <img src={aboutimage} />
                </div>
                <div className="AboutUsContainer">
                    <div>
                        <h1>About us</h1>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                        <button>Read more</button>
                    </div>
                    <div className="aboutImagesContainer">
                        <img src={aboutimage1} />
                        <img src={aboutimage1} />
                    </div>
                </div>
                <div className="AboutImagessContainer">
                    <img src={aboutimage1} />
                    <img src={aboutimage1} />
                </div>
            </div>
            <div className="AboutUsMobileContainer">
                <h1>About us</h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                <button>Read more</button>
            </div>
        </>
    )
}

export default about
