import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { MdOutlineBookmarkAdded , MdOutlineArrowBackIosNew} from 'react-icons/md'
import { } from 'react-icons'
import Open from './Open'
import Logo from './Logo'
function Bottom() {
  return (
    <div className='hidden fixed lg:flex 2xl:hidden bg-[#FFFFFF] border-2 rounded-md h-14 w-80 
     bottom-0 right:16 xl:right-0 justify-between '>
      <div className='flex items-center pl-2 pt-1'> 
      <div className='h-9 w-9'>
        <Logo/>
        </div>
          {/* <img
          className='h-9 w-9 rounded-full '
          src='https://media-exp1.licdn.com/dms/image/C4D03AQH5cUIbTiY90g/profile-displayphoto-shrink_100_100/0/1654170901849?e=1659571200&v=beta&t=HkNzOgMngB4Sa756FZJPqV0aZSWvWgGdqothWDnK980'
          alt=''

/>          */}
<p className='absolute z-20 bg-green-900 h-[14px] w-[14px] border-2 bottom-0 left-7 
rounded-full border-white'></p>
<p className='pl-3 font-semibold'>Messaging</p>
 </div>
<div className='flex'>
<p className='
     '>
     
       {/* <Open/> */}
       </p> 

 <div  className='flex items-center space-x-2 cursor-pointer' >
     <p className='h-8 w-8 rounded-full hover:bg-gray-200 pl-[7px] pt-[6px]'>
      <BiDotsHorizontalRounded className='h-5 w-5 '/></p>
  <p className='h-8 w-8 rounded-full hover:bg-gray-200 pl-[7px] pt-[6px]'>  
   <MdOutlineBookmarkAdded className='h-5 w-5'/></p>
    <p className='h-8 w-8 rounded-full hover:bg-gray-200 pl-[7px] pt-[6px]'> 
    <MdOutlineArrowBackIosNew className='rotate-90 h-5 w-5'/></p>
     </div>
</div>
    </div>
  )
}

export default Bottom