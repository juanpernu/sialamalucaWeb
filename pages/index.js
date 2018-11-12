import React from 'react'
import Head from 'next/head'
import Menu from '../components/menu/menu'
import Cover from '../components/cover/cover'
import CoverDescription from '../components/cover-description/cover-description'
import Planification from '../components/planification/planification'
import "./commons.scss"

const Page = () => (
  <div>
    <Head>
      <title>Sialamaluca | Centro de entrenamiento</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Sialamaluca es un centro de entrenamiento funcional derivado del Crossfit" />
    </Head>
    <Menu />
    <Cover Background='https://bigg.fit/wp-content/themes/bigg/assets/img/home.jpg'>
      <CoverDescription />
    </Cover>
    <Cover>
      <Planification />
    </Cover>
  </div>
  
)

export default Page
