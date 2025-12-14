import React from "react";
import Logo from "./assets/images/bazaar-logo.svg";
const Header = () => {
  return (
    <>
    <header className="flex items-center justify-around px-4 py-2 bg-white">
      <img src={Logo} alt={Logo} className="h-10 cursor-pointer" />
      <div className="flex space-x-2">
        {/*دکمه برنامه */}
        <button className="px-4 py-1 font-yekan text-[#464646] hover:text-[#2e2e2e] text-base/1.5 font-normal text-right cursor-pointer transition">
          برنامه
        </button>
        {/*دکمه بازی */}
        <button className="px-4 py-1 font-yekan text-[#464646] hover:text-[#2e2e2e] text-base/1.5 font-normal text-right cursor-pointer transitionr">
          بازی
        </button>
        {/*دکمه فیلم و سریال */}
        <button className="px-4 py-1 font-yekan text-[#464646] hover:text-[#2e2e2e] text-base/1.5 font-normal text-right cursor-pointer transition">
          فیلم و سریال
        </button>
        {/*دکمه پشتیبانی */}
        <button className="px-4 py-1 font-yekan text-[#464646] hover:text-[#2e2e2e] text-base/1.5 font-normal text-right cursor-pointer transition">
          پشتیبانی
        </button>
        {/*دکمه توسعه دهندگان بازار */}
        <button className="px-4 py-1 font-yekan text-[#464646] hover:text-[#2e2e2e] text-base/1.5 font-normal text-right cursor-pointer transition">
          توسعه دهندگان بازار
        </button>
        {/*دکمه تبلیغات در بازار */}
        <button className="px-4 py-1 font-yekan text-[#464646] hover:text-[#2e2e2e] text-base/1.5 font-normal text-right cursor-pointer transition">
          تبلیغات در بازار
        </button>
        {/*دکمه مجله */}
        <button className="px-4 py-1 font-yekan text-[#464646] hover:text-[#2e2e2e] text-base/1.5 font-normal text-right cursor-pointer transition">
          مجله
        </button>
      </div>
      {/*دکمه دانلود بازار */}
      <button className="px-[16px] text white text-right bg-[#0ea960] cursor-pointer border-[#0ea960] mr-[8px] text-gray-600 hover:text-gray-900">
        دانلود بازار
      </button>
      {/*نوار جست و جو*/}
      <div className=" flex-none mx-4">
        <input
          type="text"
          placeholder="جست و جو در بازار ..."
          className="w-[160px] h-[34px] pr-[32px] pl-[16px] border rounded-full focus:outline-none border-gray-300 "
        />
      </div>

      {/*آیکون کاربر */}
      <button className="p-2 text-gray-600 hover:text-gray-900">👤</button>
    </header>
    </>
  );
};

export default Header;
