import React from 'react'
import { Image } from './Image'

import mikbottlesImgMobile from '../assets/mobile/image-gallery-milkbottles.jpg'
import mikbottlesImgDesktop from '../assets/desktop/image-gallery-milkbottles.jpg'
import coneImgMobile from '../assets/mobile/image-gallery-cone.jpg'
import coneImgDesktop from '../assets/desktop/image-gallery-cone.jpg'
import orangeImgMobile from '../assets/mobile/image-gallery-orange.jpg'
import orangeImgDesktop from '../assets/desktop/image-gallery-orange.jpg'
import sugarCubesImgMobile from '../assets/mobile/image-gallery-sugar-cubes.jpg'
import sugarCubesImgDesktop from '../assets/desktop/image-gallery-sugarcubes.jpg'


export const Gallery = () => {
  return (
    <div className='grid grid-cols-2 sm:flex'>
        <Image 
            imageMobile={mikbottlesImgMobile}
            imageDesktop={mikbottlesImgDesktop}
        />
        <Image 
            imageMobile={coneImgMobile}
            imageDesktop={coneImgDesktop}
        />
        <Image 
            imageMobile={orangeImgMobile}
            imageDesktop={orangeImgDesktop}
        />
        <Image 
            imageMobile={sugarCubesImgMobile}
            imageDesktop={sugarCubesImgDesktop}
        />
    </div>
  )
}
