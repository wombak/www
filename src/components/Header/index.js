import React from 'react'
import Title from '../Title'

import imageSrc from './comming-soon.svg'

import './index.css'

const Header = ({ ...props }) => (
  <div className="header" {...props}>
    <Title>We are Wombak</Title>
    <img className="subtitle" src={imageSrc} alt="comming soon text image" />
  </div>
)

export default Header
