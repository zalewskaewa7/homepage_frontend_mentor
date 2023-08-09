import React from 'react'
import "./style_scss/BottomInf.scss"
import Photo_01 from "../assets/images/image-retro-pcs.jpg"
import Photo_02 from "../assets/images/image-top-laptops.jpg"
import Photo_03 from "../assets/images/image-gaming-growth.jpg"



function BottomInf() {
  return (

    <div className="bottomInf">
      
      <div className="botomInf_element">
      <img className="botomInf_element_img" src={Photo_01} alt="Reviving Retro PCs"></img>
      <div className="bototmInf_element_text">
        <h2>01</h2>
      <h3>Reviving Retro PCs</h3>
      <p>What happens when old PCs are given modern upgrades?</p>
      </div>
      
    </div>
    <div className="botomInf_element">
      <img className="botomInf_element_img" src={Photo_02} alt="Top 10 Laptops of 2022"></img>
      <div className="bototmInf_element_text">
        <h2>02</h2>
      <h3>Top 10 Laptops of 2022</h3>
      <p>  Our best picks for various needs and budgets.</p>
      </div>
      
    </div>
    <div className="botomInf_element">
      <img className="botomInf_element_img" src={Photo_03} alt="The Growth of Gaming"></img>
      <div className="bototmInf_element_text"> 
        <h2>03</h2>
      <h3>The Growth of Gaming</h3>
      <p>  How the pandemic has sparked fresh opportunities.</p>
      </div>
      
    </div>
    </div>
  )
}

export default BottomInf



  

  

  
