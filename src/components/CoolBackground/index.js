import 'aframe'
import 'aframe-animation-component'
import React from 'react'
import sky from './allsky.jpg'
import './index.css'

const CoolBackground = () =>
  typeof window !== 'undefined' && (
    <div className="background">
      <a-scene vr-mode-ui="enabled: false">
        <a-assets>
          <img id="sky" src={sky} />
        </a-assets>
        <a-sky src="#sky" opacity="0.4" radius="500">
          <a-animation
            attribute="rotation"
            dur="500000"
            fill="forwards"
            easing="linear"
            to="0 360 360"
            repeat="indefinite"
          />
        </a-sky>
      </a-scene>
    </div>
  )

export default CoolBackground
