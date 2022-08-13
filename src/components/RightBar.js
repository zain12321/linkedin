import React from 'react'
import Sidebar from './Sidebar'
import { MdFeedback}  from 'react-icons/md'
import Follow from './Follow'
import  { HiArrowNarrowRight} from 'react-icons/hi'
import Bottom from './Bottom'
import Links from './Links'
const foolowitem = [
    {
        id:1,
        logo:'https://media-exp2.licdn.com/dms/image/C4D03AQEUlbrPCSb_ug/profile-displayphoto-shrink_100_100/0/1631816086406?e=1663804800&v=beta&t=y6RhsgkiTuoUmtWXQ4HFV7-ffgVh_ra4eS51qg3CGzs',
        title:'Samara Shaikh',
        desc1:'HR Executive- ACT Polyols- A group  ',
        desc2:'company of Akhtar Group, Candyland '

    },
    {
        id:2,
        logo:'https://media-exp1.licdn.com/dms/image/C4D0BAQHUcu98SZ2TVw/company-logo_100_100/0/1607665771371?e=1660780800&v=beta&t=z68H9lksdSX6mXtskFShjEcsp6l4JZFpxYvzZxR8Oeo',
        title:'Tesla',
        desc1:'Company Automative',
        desc2:''

    },
    {
        id:3,
        logo:'https://media-exp1.licdn.com/dms/image/C5603AQHucQi7DAJGuA/profile-displayphoto-shrink_100_100/0/1613651400817?e=1665014400&v=beta&t=xdpD3Bc7EFTOSHhcJAxMHve34tSJFLDO4idGZzm8ZRI',
        title:'عثمان آصف',
        desc1:'Founder and CEO at Devsinc, Angel',
        desc2:'Investor'

    },


]
const RightBar = () => {
  return (
  <div className='
  lg:mb-20  xl:mb-24
  '>
      <div className='sticky top-[51px]'>
      <div className='hidden lg:flex flex-col'>
      <div className='mt-[38px] left-0 lg:ml-[1px] xl:ml-5 space-y-2 '>
       <div className=' xl:w-[350px] h-[420px] bg-[#FFFFFF] border-2 rounded-lg '>
           <div className='pl-3 pt-1 flex items-center justify-between w-[320px] '>
               <h1 className='font-semibold text-[18px] text-[#000000E6]'>Add to your feed</h1>
           <MdFeedback className='text-[#00000099] mt-1'/>
           </div>
           <div className='pl-3 pt-2'>
    {foolowitem?.map((item) => (
            <Follow {...item}/>
    ))}
        </div>
        <div className='ml-6 mt-3 text-[#00000099] font-semibold'>
            <h1 className='flex items-center space-x-1'><span>View All recomandation</span>
            <HiArrowNarrowRight className='
         h-5 w-5   mt-1'/></h1>
        </div>
       </div>
       <div className='h-[200px] w-[350px] bg-[#FFFFFF] border-2 rounded-lg'>
     <img 
     className='h-[280px] w-[350px] px-2 '
     src='https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png'
     alt=''
     />

</div>
    </div>
 <div>
 <Bottom/>
 </div>
 <div className='mt-24 '>
       <Links/>
 </div>
    </div>
   
      </div>
     
      </div>

  )
}

export default RightBar