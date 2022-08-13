import React from 'react';
import Navbar from './Navbar';
import { ImHome3 } from 'react-icons/im';
import { BsPeopleFill, BsPlusSquareFill } from 'react-icons/bs';
import { MdHomeRepairService, MdNotifications } from 'react-icons/md';
import {} from 'react-icons';
import {} from 'react-icons';
function Mobile() {
	return (
		<div className="flex items-center space-x-3 sm:hidden fixed pt-[6px] px-3
      bg-[#FFFFFF] text-[#00000099] h-16 z-40 w-[628px]  bottom-0">
			<div className="flex items-center space-x-10 ml-11">
				<p className="">
					<p className="flex">
						{' '}
						<ImHome3 className="h-6 w-6 ml-2" />
						<span className="bg-red-600 h-4 w-4 rounded-full text-white text-[9px] 
            pl-1 pt-1 absolute ml-4 ">
							<span className="h-2 w-2 bg-white  rounded-full absolute" />
						</span>
					</p>
					<span>Home</span>
				</p>
				<p className="">
					{' '}
					<BsPeopleFill className="h-6  w-6 ml-6" />
					<span>My Network</span>
				</p>
			</div>
			<div className="pl-8">
				<BsPlusSquareFill className="h-6 w-6 ml-1" />
				<p>Post</p>
			</div>
			<div className="flex items-center space-x-10 pl-12">
				<p className="">
					<p className="flex">
						{' '}
						<MdNotifications className="h-7 w-7 ml-7" />
						<span className="bg-red-700 h-4 w-4  rounded-full pl-[2px] text-center 
        absolute ml-10 text-white text-[11px]">
							2
						</span>
					</p>
					<span>Notifications</span>
				</p>
				<p className="">
					{' '}
					<MdHomeRepairService className="h-6  w-6 ml-1" />
					<span>Jobs</span>
				</p>
			</div>
		</div>
	);
}

export default Mobile;
