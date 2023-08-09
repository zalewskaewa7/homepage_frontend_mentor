import React from 'react'
import "./style_scss/Main.scss"
import MainInformation from './MainInformation'
import RightInfo from './RightInfo'
import BottomInf from './BottomInf'

function Main() {
  return (
    <main>
        <MainInformation />
        <RightInfo />
        <BottomInf />
    </main>
  )
}

export default Main