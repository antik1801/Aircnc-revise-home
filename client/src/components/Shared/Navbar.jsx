import React from 'react'
import Container from './Container'

const Navbar = () => {
  return (
    <div className='fixed w-full  bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row justify-between items-center '>
            <div>logo</div>
            <div>search</div>
            <div>menu</div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
