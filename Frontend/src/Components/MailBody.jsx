import React from 'react'
import { useParams } from 'react-router';

export default function MailBody() {
    const {id} = useParams();
  return (
    <div
      className="bg-gray-500 w-[calc(100vw-75.5px)] h-full flex items-center text-2xl 
    font-bold text-white ml-[76px]"
    >
      Id = {id}
    </div>
  );
}
