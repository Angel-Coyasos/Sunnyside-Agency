import React from 'react'

export const Image = ( {order="", imageMobile, imageDesktop} ) => {
  return (
    <picture className={order}>
        <source media="(max-width: 639px)" srcset={imageMobile} />
        <source media="(min-width: 640px)" srcset={imageDesktop} />
        <img src={imageDesktop} alt="Image Service" />
    </picture>
  )
}