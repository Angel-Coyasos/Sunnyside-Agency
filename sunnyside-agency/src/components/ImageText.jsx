import React from 'react'

export const ImageText = ( {order, imageMobile, imageDesktop, title, text} ) => {
  return (
    <div className={`${order} relative pt-[398px] sm:pt-[350px] tablet:pt-[150px] lg:pt-[250px] desktop:pt-[398px]`}>
      <picture className='absolute top-0  z-[-1]'>
          <source media="(max-width: 639px)" srcset={imageMobile} />
          <source media="(min-width: 640px)" srcset={imageDesktop} />
          <img src={imageDesktop} alt="Image Service" />
      </picture>
      <h2 className='text-center font-Fraunces text-[28px] text-Dark-desaturated-cyan mb-[28px]'>{title}</h2>
      <p className='text-center font-Barlow text-Dark-desaturated-cyan mx-3 mb-[60px] tablet:text-sm     lg:w-[350px] lg:mx-auto'>{text}</p>
    </div>
  )
}