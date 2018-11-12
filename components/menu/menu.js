import React from 'react'
import Router from 'next/router'
import './menu.scss'

const Menu = () => (
  <div className='menu-container'>
    <div className='menu'>
      <p onClick={() => Router.push('/')}>Inicio</p>
      <p onClick={() => Router.push('/')}>Sialamaluca</p>
      <p onClick={() => Router.push('/#planification')}>Nuestros entrenamientos</p>
      <p onClick={() => Router.push('/')}>Donde estamos</p>
    </div>
  </div>
)

export default Menu
