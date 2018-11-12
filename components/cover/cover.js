import React from 'react'
import './cover.scss'

const hasBackgroundImage = (Background) => (
  Background ?
  { backgroundImage: `url(${Background})`} :
  {
    height: '60vh',
    backgroundImage: 'radial-gradient(circle, #CCC, #CCC 1px, #FFF 1px, #FFF)',
    backgroundSize: '28px 28px'
  }
)

const Cover = ({ children, Background }) => (
  <div
    style={hasBackgroundImage(Background)}
    className='cover'
    >
    { children }
  </div>
)

export default Cover
