"use strict";
import React from 'react';
import { FaComments } from 'react-icons/fa';

function FloatingChatIcon() {
  const handleChatClick = () => {
    // Handle chat button click logic here
    console.log('Chat button clicked');
    // You can open a chat window or perform any other action
  };

  return (
    <div className="fixed bottom-10 right-10 z-[999] bg-blue-500 text-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-blue-600 transform hover:scale-105 transition-transform">
  <FaComments className="text-xl" />
  <FaComments className="text-2xl" />
</div>
  );
}

export default FloatingChatIcon;