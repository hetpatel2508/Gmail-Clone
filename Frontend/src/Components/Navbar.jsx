import React from 'react';
import { Link } from 'react-router';

export default function Navbar({ showLogin, setShowLogin }) {
  return (
    <div className="w-full h-[61px] flex items-center justify-center bg-[#fff]">
      <div className="w-[98.5%] h-[47px] flex">
        <div className="h-full w-[15.5%] flex items-center">
          <div className="w-[47px] h-[47px] flex justify-center items-center rounded-full hover:bg-gray-200  ">
            <svg width={24} height={24} focusable="false" viewBox="0 0 24 24" fill="#5f6368">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
          </div>
          <Link to="/" className="w-[108px] h-[39px] ml-2">
            <img
              src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
        <div className="h-full w-[72%] ">
          <div className="w-[67%] h-[47px] bg-[#eaf1fb] rounded-[24px] flex items-center justify-between active:bg-[#fff]">
            <div className="h-[40px] w-[90%]  flex items-center rounded-full ml-1 ">
              <div className="h-[40px] w-[40px]  flex justify-center items-center rounded-full hover:bg-gray-200">
                <svg
                  focusable="false"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#5f6368"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-[0.5px] ml-[0.5px]"
                >
                  <path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path>
                  <path d="M0,0h24v24H0V0z" fill="none"></path>
                </svg>
              </div>
              <div className="h-[40px] w-[93%] flex items-center rounded-full ">
                <input
                  type="text"
                  placeholder="Seach mail"
                  color="#5f6368"
                  className="outline-none w-full h-[30px] bg-transparent pl-1 pr-4"
                />
              </div>
            </div>

            <div className="h-[40px] w-[40px] flex justify-center items-center rounded-full mr-1 hover:bg-gray-200">
              <svg
                fill="#5f6368"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="h-full w-[12.5%]  flex items-center">
          <div className="w-[44px] h-[44px] flex items-center justify-center  hover:bg-gray-200  rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="#000000"
              focusable="false"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
            </svg>
          </div>
          <div className="w-[44px] h-[44px] flex items-center justify-center  hover:bg-gray-200  rounded-full ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path>
              <circle cx="12" cy="12" r="3.5"></circle>
            </svg>
          </div>
          <div className="w-[48px] h-[48px] flex items-center justify-center  hover:bg-gray-200  rounded-full ">
            <svg width={24} height={24} focusable="false" viewBox="0 0 24 24">
              <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
            </svg>
          </div>
          <div className="w-[48px] h-[48px] flex items-center justify-center ">
            <div className="w-[34px] h-[34px] flex items-center justify-center bg-blue-200 hover:bg-gray-200  rounded-full " onClick={()=>setShowLogin(true)}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
