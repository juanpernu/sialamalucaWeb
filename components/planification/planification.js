import React from 'react'
import Button from '../button/button'
import './planification.scss'

const Planification = () => (
  <div id='planification' className='planification'>
    <div className='planification-text'>
      <h3>Programaciones</h3>
      <p>
        Nuestras 12 programaciones están pensadas para que logres tus objetivos.
        Los entrenamientos cambian constantemente para ir adaptándose a las necesidades
        de todos. ¡Descubrí la mejor programación para vos!
      </p>
      <Button>
        Mirá nuestros programas
      </Button>
    </div>
    <img src='https://bigg.fit/wp-content/themes/bigg/assets/img/method.jpg' />
  </div>
)

export default Planification
