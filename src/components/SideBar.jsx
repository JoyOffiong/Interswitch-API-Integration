import React from 'react';
import image from './images/student.jpg'

function SideBar() {
  return (
    <div className='w-[50%] h-full hidden md:block'>

        <img src={image} width='100%' height='100%'  alt="" />
    </div>
  )
}

export default SideBar