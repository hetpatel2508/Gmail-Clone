import React from 'react';
import { GoUnread } from 'react-icons/go';
import { MdCropSquare, MdOutlineArchive, MdOutlineStarBorder } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import { IoTimeOutline } from 'react-icons/io5';
import { PiDotsSixVertical } from 'react-icons/pi';
import { Link } from 'react-router';

export default function Email() {
  return (
    <Link
      to={`/email/${Math.random()}`}
      className="bg-gray-50 w-full min-h-[40px] flex items-center border border-y-1 border-x-0 hover:bg-gray-100 group"
    >
      <div className="w-full min-h-[20px] flex items-center">
        <div className="min-w-[220px] flex items-center ">
          <div className="w-[14px] h-[14px] opacity-0 flex justify-center items-center group-hover:opacity-100">
            <PiDotsSixVertical size={17} fill="#5f6368" />
          </div>
          <div className="text-gray-400 mr-2">
            <MdCropSquare />
          </div>
          <div className="text-gray-400 mr-2">
            <MdOutlineStarBorder />
          </div>
          <div>
            <h1 className="font-semibold max-w-[170px] overflow-hidden whitespace-nowrap text-ellipsis">
              Het Patel
            </h1>
          </div>
        </div>
        <div className="max-w-[calc(100%-350px)] group-hover:max-w-[calc(100%-420px)] flex-1 ml-4 items-center">
          <p className="w-[95%] h-[20px] overflow-hidden text-ellipsis whitespace-nowrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sequi error officia et
            accusantium tenetur natus dolorem nihil unde eaque laborum, x nonfddjk provident
            voluptates corporis! Itaque, at?
          </p>
        </div>
        <div className="min-w-[100px] inline flex-none text-gray text-sm group-hover:hidden">
          <p>12 days ago</p>
        </div>
        <div className="min-w-[170px] h-[40px] absolute right-2  items-center gap-1 hidden group-hover:flex">
          <div className="w-[40px] h-[40px] hover:bg-gray-200 rounded-full flex items-center justify-center">
            <MdOutlineArchive size={17} />
          </div>
          <div className="w-[40px] h-[40px] hover:bg-gray-200 rounded-full flex items-center justify-center">
            <RiDeleteBinLine size={17} />
          </div>
          <div className="w-[40px] h-[40px] hover:bg-gray-200 rounded-full flex items-center justify-center">
            <GoUnread size={17} />
          </div>
          <div className="w-[40px] h-[40px] hover:bg-gray-200 rounded-full flex items-center justify-center">
            <IoTimeOutline size={17} />
          </div>
        </div>
      </div>
    </Link>
  );
}
