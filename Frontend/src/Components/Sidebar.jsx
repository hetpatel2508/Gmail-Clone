import React from 'react';
import { FaClock, FaFile, FaInbox, FaPaperPlane, FaPencil, FaStar } from 'react-icons/fa6';
import { Link } from 'react-router';

export default function Sidebar() {
  const data = [
    { name: 'Inbox', icon: <FaInbox size={14} />, number: 1674 },
    { name: 'Starred', icon: <FaStar size={14} />, number: 0 },
    { name: 'Snnozed', icon: <FaClock size={14} />, number: 0 },
    { name: 'Sent', icon: <FaPaperPlane size={14} />, number: 0 },
    { name: 'Draft', icon: <FaFile size={14} />, number: 0 },
  ];

  const [currentPage, setCurrentPage] = React.useState(0);

  const ref1 = React.useRef();
  const refArray = React.useRef([]);

  const handleEnter = () => {
    ref1.current.style.maxWidth = '133px';

    refArray.current.forEach((element, index) => {
      if (index === currentPage) {
        element.classList.add('bg-cyan-200');
      }
      element.classList.remove('max-w-[53px]');
      element.classList.add('max-w-[240px]');
    });
  };

  const handleLeave = () => {
    ref1.current.style.maxWidth = '56px';

    refArray.current.forEach((element, index) => {
      element.classList.remove('bg-cyan-200');
      element.classList.remove('max-w-[240px]');
      element.classList.add('max-w-[53px]');
    });
  };

  return (
    <div
      className="bg-red-100  w-[75.5px] h-[calc(100vh-61px)] flex flex-col gap-1 absolute left-0 transition-all duration-200 delay-200 hover:w-[240px]"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div
        className="max-w-[56px] h-[56px] ml-[10px] rounded-[16px] bg-cyan-200 flex overflow-hidden transition-all duration-200 delay-200"
        ref={ref1}
      >
        <div className="min-w-[56px] h-[56px]  rounded-[16px] flex items-center justify-center">
          <FaPencil size={18} />
        </div>
        <div className="min-w-[calc(133px-56px)] h-[56px] flex items-center text-sm">Compose</div>
      </div>
      <div className="w-full h-[calc(100vh-61px-54px)] mt-1.5 bg-gray-200 flex flex-col overflow-hidden">
        {data.map((item, index) => {
          return (
            <Link
              to={`/${item.name}`}
              key={index}
              onClick={() => {
                refArray.current[currentPage].classList.remove('bg-cyan-200');
                setCurrentPage((prev) => (prev = index));
                refArray.current[index].classList.add('bg-cyan-200');
              }}
              ref={(el) => (refArray.current[index] = el)}
              className={`max-w-[53px] overflow-hidden h-[32px]  rounded-r-full flex transition-all duration-200 delay-200`}
            >
              <div
                className={`max-w-[32px] h-[32px] ml-5 rounded-full  flex ${
                  index === currentPage ? 'bg-cyan-200' : ''
                }`}
              >
                <div className=" min-w-[32px] min-h-[32px] flex justify-center items-center">
                  {item.icon}
                </div>
                <div className="pl-3 flex items-center justify-center">{item.name}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
