import React from 'react';
import {
  FaAngleDown,
  FaArrowRotateRight,
  FaEllipsisVertical,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa6';

export default function Inbox() {
  return (
    <div className="bg-red-200 w-[calc(100vw-75.5px)] h-full flex flex-col ml-[76px]">
      <div className="w-full h-[48px] bg-gray-300 flex items-center justify-between">
        <div className="h-full w-[150px] bg-red-100 flex items-center gap-1 ml-2.5">
          <div className="h-[36px] w-[calc(100%-90px)] bg-cyan-400 flex items-center ">
            <div className="w-[26px] h-[26px] flex items-center pl-2">
              <input type="checkbox" className="w-[20px] h-[20px]" />
            </div>
            <div className="pl-2">
              <FaAngleDown size={14} />
            </div>
          </div>
          <div className="h-[40px] w-[40px] bg-cyan-100 flex justify-center items-center cursor-pointer rounded-full hover:bg-gray-200">
            <FaArrowRotateRight size={16} />{' '}
          </div>
          <div className="h-[40px] w-[40px] bg-cyan-100 flex justify-center items-center cursor-pointer rounded-full hover:bg-gray-200">
            <FaEllipsisVertical size={16} />{' '}
          </div>
        </div>
        <div className="h-full w-[190px] bg-red-100 flex items-center gap-1">
          <div className="h-full w-[calc(100%-90px)] bg-cyan-400 flex items-center gap-1 justify-center">
            <div>{`1`}</div>
            <div>to</div>
            <div>{`50`}</div>
          </div>
          <div className="h-[40px] w-[40px] bg-cyan-100 flex justify-center items-center cursor-pointer rounded-full hover:bg-gray-200">
            <FaChevronLeft />
          </div>
          <div className="h-[40px] w-[40px] bg-cyan-100 flex justify-center items-center cursor-pointer rounded-full hover:bg-gray-200">
            <FaChevronRight />
          </div>
        </div>
      </div>
      <div className="w-full h-[56px] flex bg-green-100">
        <div className="h-full w-[256px] flex items-center bg-gray-100">
          <div className='w-[56px] h-full bg-cyan-100'></div>
        </div>
        <div className="h-full w-[256px] flex items-center bg-blue-100">
          <div className='w-[56px] h-full bg-cyan-100'></div>
        </div>
        <div className="h-full w-[256px] flex items-center bg-red-100">
          <div className='w-[56px] h-full bg-cyan-100'></div>
        </div>
        <div className="h-full w-[256px] flex items-center bg-pink-100">
          <div className='w-[56px] h-full bg-cyan-100'></div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
