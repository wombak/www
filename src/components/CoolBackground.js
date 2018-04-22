import 'aframe'
import 'aframe-animation-component'
import React from 'react'
import styled from 'styled-components'
import sky from '../images/allsky.jpg'

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: linear-gradient(0, #141927, #2c364f);
`

const CoolBackground = () =>
  typeof window !== 'undefined' && (
    <Background>
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
    </Background>
  )

export default CoolBackground
