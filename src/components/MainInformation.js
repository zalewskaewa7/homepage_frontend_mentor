import React from 'react'
import "./style_scss/MainInformation.scss"
import MainPhoto from "../assets/images/image-web-3-desktop.jpg"
import MainPhotoMobile from "../assets/images/image-web-3-mobile.jpg"

function MainInformation() {
  return (
    <div className="MainInformation_component">
        <img className="MainInformation_img" src={MainPhoto} alt="main"></img>
        <img className="MainInformation_imgMobile" src={MainPhotoMobile} alt="main"></img>

        <div className="MainInformation_content">  
           <h1>The Bright Future of Web 3.0?</h1>
        <div className="MainInformation_content_text">
            <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                But is it really fulfilling its promise?
            </p>
            <button>READ MORE</button>
        </div> 
        </div>
        
    </div>
  )
}

export default MainInformation