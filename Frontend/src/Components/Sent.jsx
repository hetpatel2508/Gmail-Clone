import React from 'react';

export default function Sent({ showCompose, setShowCompose }) {
  return (
    <div
      className={`bg-gray-500 w-[calc(100vw-75.5px)] h-full flex items-center text-2xl 
    font-bold text-white ml-[76px] ${showCompose ? 'block' : 'hidden'}`}
    >
      Sent
      <button onClick={() => setShowCompose(false)}>hide</button>
    </div>
  );
}
