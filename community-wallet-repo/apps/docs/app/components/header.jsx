import React from 'react';

const Header = () => {
  return (
    <div className="text-green-500 w-96 h-11 p-1.5 bg-black/50 rounded-full shadow-[0px_10px_10px_0px_rgba(0,0,0,0.10)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.05)] border border-white backdrop-blur-lg justify-between items-center inline-flex">
      <div className="justify-start items-center gap-5 flex">
        <div className="px-3 py-1 justify-start items-center gap-2 flex">
          <div className="w-6 h-6 relative  overflow-hidden" />
          <div className="text-white text-lg font-bold font-['Inter']">Company</div>
        </div>
        <div className="justify-start items-start gap-2.5 flex">
          <div className="px-4 py-1.5 rounded-full shadow-[0px_10px_10px_0px_rgba(0,0,0,0.10)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.05)] backdrop-blur-lg justify-center items-center gap-2 flex overflow-hidden">
            <div className="text-white text-sm font-medium font-['Inter'] leading-tight">Product</div>
          </div>
          <div className="px-4 py-1.5 rounded-full shadow-[0px_10px_10px_0px_rgba(0,0,0,0.10)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.05)] backdrop-blur-lg justify-center items-center gap-2 flex overflow-hidden">
            <div className="text-white text-sm font-medium font-['Inter'] leading-tight">Pricing</div>
          </div>
          <div className="px-4 py-1.5 rounded-full shadow-[0px_10px_10px_0px_rgba(0,0,0,0.10)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.05)] backdrop-blur-lg justify-center items-center gap-2 flex overflow-hidden">
            <div className="text-white text-sm font-medium font-['Inter'] leading-tight">Changelog</div>
          </div>
        </div>
      </div>
      <div className="justify-start items-center gap-2.5 flex">
        <div className="px-4 py-1.5 rounded-full shadow-[0px_10px_10px_0px_rgba(0,0,0,0.10)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.05)] backdrop-blur-lg justify-center items-center gap-2 flex overflow-hidden">
          <div className="text-white text-sm font-medium font-['Inter'] leading-tight">Log in</div>
        </div>
        <div className="px-4 py-1.5 bg-black/50 rounded-full shadow-[0px_10px_10px_0px_rgba(0,0,0,0.10)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.05)] border border-white backdrop-blur-lg justify-center items-center gap-2 flex overflow-hidden">
          <div className="text-white text-sm font-medium font-['Inter'] leading-tight">Sign up</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
