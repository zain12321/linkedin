import React from 'react';
import { BsBookmarkFill } from 'react-icons/bs';

import Logo from './Logo';
import Recent from './Recent';
function Sidebar() {
	return (
		<div className="mb-32">
			<div className="sticky top-[66px] space-y-1">
				<sidebar className="hidden lg:flex w-[305px] cursor-pointer">
					<div className="h-[390px] mt-[20px] w-[270px]  bg-[#FFFFFF] ml-14 rounded-xl border-2 shadow-sm">
						<div className="static">

							<img
								className="h-[65px] w-[270px] rounded-tr-xl rounded-tl-xl  "
								src="https://media-exp2.licdn.com/dms/image/C4E16AQHUBp05ZXFksQ/profile-displaybackgroundimage-shrink_350_1400/0/1647765312244?e=1663804800&v=beta&t=ODBuhjHk8gLhjQXe5eojycP54z8V4IeVi74sVeYJiqY"
								alt=""
							/>
						</div>
						<div className="absolute top-[47px] left-36">
							<div className='h-[80px] 
								w-[80px] rounded-full border-2 border-white  mb-11'>
								<Logo/>

							</div>
							{/* <img
								className="h-[80px] 
								w-[80px] rounded-full border-2 border-white  mb-11"
								src="https://media-exp1.licdn.com/dms/image/C4D03AQH5cUIbTiY90g/profile-displayphoto-shrink_100_100/0/1654170901849?e=1659571200&v=beta&t=HkNzOgMngB4Sa756FZJPqV0aZSWvWgGdqothWDnK980"
								alt=""
							/> */}
						</div>
						<div className="flex flex-col items-center justify-center pt-16">
							<h1 className="text-[#000000E6] font-medium hover:underline text-[17px] ">Zain Fiaz</h1>
							<p className=" text-[13px] text-[#00000099] text-center">REACT JS / NEXT JS / HTML / CSS / JAVASCRIPT / TAILWIND</p>
						</div>
						<div className="border-y py-3 mt-5 text-[14px]">
							<p className="h-7 hover:bg-gray-200 flex items-center justify-between px-2">
								<span className="text-[#00000099]">Who viewed your profile</span>
								<span className="text-[#0A66C2]">
								143
								</span>
							</p>
							<p className="h-7 hover:bg-gray-200 flex items-center justify-between px-2">
								<span className="text-[#00000099]">Impression of your post</span>
								<span className="text-[#0A66C2]">745</span>
							</p>
						</div>
						<div className=" pl-3 pt-2 hover:bg-gray-200 pb-3">
							<h1 className="text-[14px] text-[#00000099]">Access exclusive tools & insights</h1>
							<div className="flex  items-center">
								<p className="h-4 w-4 bg-[#cfbb4b] flex items-center " />
								<span className="
                  text-[13px]
                  text-[#000000E6] font-medium pl-3">
									Try Premium for free
								</span>
							</div>
						</div>

						<div className="flex items-center hover:bg-gray-200 h-[53px] rounded-br-xl rounded-bl-xl border-t pl-3 space-x-2">
							<BsBookmarkFill className="text-[#00000099] " />
							<p className="text-[13px]
                  text-[#000000E6] font-medium ">My items</p>
						</div>
					</div>
				</sidebar>

				<div className="hidden lg:flex">
					<Recent />
				</div>
			
			</div>
		</div>
	);
}

export default Sidebar;
