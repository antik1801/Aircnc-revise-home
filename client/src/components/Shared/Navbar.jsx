import React from 'react'
import Container from './Container'
import Logo from './Logo'
import Search from './Search'
import MenuDropdown from './MenuDropDown'

const Navbar = () => {
  return (
    <div className='fixed w-full  bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row justify-between items-center '>
              <Logo />
            <Search /> 
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
