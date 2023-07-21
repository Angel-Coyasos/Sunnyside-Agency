import { Navbar } from './Navbar'

import logo from '../assets/logo.svg'

export const Header = () => {
  return (
    <header className='absolute w-full px-6 pt-8 font-Barlow'>
      <div className='flex place-content-between relative'>
        <img src={logo} alt="Logo" />
        <Navbar />
      </div>
    </header>
  )
}