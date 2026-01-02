import React from "react";
import Logo from "../assets/images/bazaar-logo.svg";
const Header = () => {
  return (
    <header className="">
      <div className="px-80 py-4 flex flex-row shadow-lg justify-between">
        <img
          src={Logo}
          alt="Bazaar Logo"
          className="h-10 cursor-pointer pl-3"
        />
        <div className="flex space-x-2">
          {/*دکمه برنامه */}
          <button className="px-4 py-1 text-[#464646] hover:text-[#2e2e2e] text-base/1.5 font-normal text-right cursor-pointer transition">
            برنامه
          </button>
          {/*دکمه بازی */}
          <button className="px-4 py-1 text-[#464646] hover:text-[#2e2e2e] text-base/1.5 font-normal text-right cursor-pointer transition">
            بازی
          </button>
          {/*دکمه فیلم و سریال */}
          <button className="px-4 py-1 text-[#464646] hover:text-[#2e2e2e] text-base/1.5 font-normal text-right cursor-pointer transition">
            فیلم و سریال
          </button>
          {/*دکمه پشتیبانی */}
          <button className="px-4 py-1 text-[#464646] hover:text-[#2e2e2e] text-base/1.5 font-normal text-right cursor-pointer transition">
            پشتیبانی
          </button>
          {/*دکمه توسعه دهندگان بازار */}
          <button className="px-4 py-1 text-[#464646] hover:text-[#2e2e2e] text-base/1.5 font-normal text-right cursor-pointer transition">
            توسعه دهندگان بازار
          </button>
          {/*دکمه تبلیغات در بازار */}
          <button className="px-4 py-1 text-[#464646] hover:text-[#2e2e2e] text-base/1.5 font-normal text-right cursor-pointer transition">
            تبلیغات در بازار
          </button>
          {/*دکمه مجله */}
          <button className="px-4 py-1 text-[#464646] hover:text-[#2e2e2e] text-base/1.5 font-normal text-right cursor-pointer transition">
            مجله
          </button>
        </div>
        <div className="flex flex-row">
          {/*نوار جست و جو*/}
          <div className="mx-4 pt-2">
            <input
              type="text"
              placeholder="جست و جو در بازار ..."
              className="w-[190px] h-[28px] pr-[32px] pl-[16px] border rounded-full focus:outline-none border-gray-300 outline-none "
            />
          </div>
          {/*آیکون کاربر */}
          <button className="p-2 text-gray-600 hover:text-gray-900">👤</button>
          {/*دکمه دانلود بازار */}
          <button className="px-[16px] rounded-sm text-right bg-[#0ea960] cursor-pointer border-[#0ea960] mr-[8px] text-white hover:bg-[#0e9657]">
            دانلود بازار
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
