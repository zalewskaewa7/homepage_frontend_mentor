import React from 'react'
import "./style_scss/RightInfo.scss"

function RightInfo() {
  return (
    <div className="RightInfo_component">
      <h2>New</h2>
      <div className="RightInfo_content">
        <div className="RightInfo_content-element">
        <h3>  Hydrogen VS Electric Cars</h3>
        <p>  Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <div  className="RightInfo_content-element">
        <h3>    The Downsides of AI Artistry</h3>
        <p>    
          What are the possible adverse effects of on-demand AI image generation?
        </p>
      </div>
      <div  className="RightInfo_content-element_last">
        <h3> Is VC Funding Drying Up?</h3>
        <p>    
          Private funding by VC firms is down 50% YOY. We take a look at what that means.
        </p>
      </div>
      </div>
      
    </div>
  )
}

export default RightInfo