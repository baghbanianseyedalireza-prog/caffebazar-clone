import React from "react";
const Footer = () => {
  return (
    <>
        {/*Top Container */}
        <div className=" px-4 py-[3.5rem] mx-28 font-display flex flex-row-reverse justify-around bg-white text-right items-center box-border w-[1120px] h-[257px]">
          <div className="flex flex-col pl-[5rem] grow w-[670px] h-[145px]">
            <div className="mb-[0.8rem] font-normal text-[#212529] text-lg/[1.5]">
              بازار، نخستین و پرمخاطب‌ترین فروشگاه ایرانی برنامه‌ها و بازی‌های
              موبایلی دنیای اندروید
            </div>
            <p className="text-[#464646] mb-[1rem] text-sm/[1.5] ">
              صد‌ها هزار بازی ایرانی و خارجی دیتادار یا بدون دیتا را به سادگی
              خرید درون‌ برنامه‌ای انجام دهید. بازار مجهز به سپر امنیت است که
              برنامه‌ها را توسط آنتی ویروس‌ها بررسی کرده و به محض شناسایی
              برنامه‌ی مخرب، به کاربر اعلام می‌کند که آن برنامه را از دستگاه خود
              پاک کند.
            </p>
          </div>
          <div className="p-[1rem] text-nowrap border border-[#e5e7f0] rounded-lg items-center font-normal w-[420px] h-[140px] flex flex-row-reverse justify-between">
            <img
              src="./src/assets/images/footer-download.png"
              alt="CaffeBazar"
              className="w-[100px] h-[100px] align-middle "
            />
            <div>
              <p className="text-base text-[#212529]">دانلود اپلیکیشن بازار</p>
              <p className="text-[#464646] text-xs mb-[1rem]">
                پرمخاطب‌ترین اپ‌استور (اندروید) فارسی‌زبانان
              </p>
              <div className="flex flex-row-reverse">
                <a
                  href="https://cafebazaar.ir/install?manual=1&autostart"
                  download
                  className="text-sm text-[#0ea960] cursor-pointer px-[1rem] border-[1px] border-gray-400 ml-[0.6rem]"
                >
                  دانلود نسخه اندروید
                </a>
                <a
                  href="https://cafebazaar.ir/download/bazaar-tv.apk"
                  download
                  className="text-sm text-[#0ea960] cursor-pointer px-[1rem] border-[1px] border-gray-400"
                >
                  نسخه اندروید TV
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* link container */}
        <div className="bg-white font-yekan text-right px-[1rem] py-[3.5rem] mx-[7rem] flex flex-row-reverse flex-wrap justify-between">
          <div className="text-sm/[2.8] text-[#37474f] font-normal block flex flex-col">
            <a title="نصب بازار" href="" className="cursor-pointer text-[#37474f] hover:text-[#0ea960]">
              نصب بازار
            </a>
            <a title="بازی اندروید" href="" className="cursor-pointer hover:text-[#0ea960]">
              بازی اندروید
            </a>
            <a title="برنامه اندروید" href="" className="cursor-pointer hover:text-[#0ea960]">
              برنامه اندروید
            </a>
          </div>
          <div className="text-sm/[2.8] text-[#37474f] font-normal block flex flex-col">
            <a title="توسعه‌دهندگان بازار" href="" className="cursor-pointer hover:text-[#0ea960]">
              توسعه‌دهندگان بازار
            </a>
            <a title="فرصت‌های شغلی" href="" className="cursor-pointer hover:text-[#0ea960]">
              فرصت‌های شغلی
            </a>
            <a title="نشان دریافت از بازار" href="" className="cursor-pointer hover:text-[#0ea960]">
              نشان دریافت از بازار
            </a>
          </div>
          <div className="text-sm/[2.8] text-[#37474f] font-normal block flex flex-col">
            <a title="شرایط استفاده" href="" className="cursor-pointer hover:text-[#0ea960]">
              شرایط استفاده
            </a>
            <a title="حریم خصوصی" href="" className="cursor-pointer hover:text-[#0ea960]">
              حریم خصوصی
            </a>
            <a title="پشتیبانی" href="" className="cursor-pointer hover:text-[#0ea960]">
              پشتیبانی
            </a>
          </div>
          <div className="text-sm/[2.8] text-[#37474f] font-normal block flex flex-col">
            <a title="مجله" href="" className="cursor-pointer hover:text-[#0ea960]">
              مجله
            </a>
            <a title="خبرها و بیانیه‌های بازار" href="" className="cursor-pointer hover:text-[#0ea960]">
              خبرها و بیانیه‌های بازار
            </a>
            <a title="بلاگ فنی بازار" href="" className="cursor-pointer hover:text-[#0ea960]">
              بلاگ فنی بازار
            </a>
          </div>
          <div className="text-sm/[2.8] text-[#37474f] font-normal block flex flex-col">
            <a title="تبلیغات در بازار" href="" className="cursor-pointer hover:text-[#0ea960]">
              تبلیغات در بازار
            </a>
            <a title="درباره ما" href="" className="cursor-pointer hover:text-[#0ea960]">
              درباره ما
            </a>
            <a title="تماس با ما" href="" className="cursor-pointer hover:text-[#0ea960]">
              تماس با ما
            </a>
          </div>
          <div className="flex flex-row-reverse my-[8px] mx-[2px]">
            <img
              src="./src/assets/images/logo.png"
              alt="Enamad"
              className="w-[100px] h-[110px] align-middle cursor-pointer border border-gray-200 my-[8px] mx-[2px]"
            />
            <img
              src="./src/assets/images/samandehi.webp"
              alt="CaffeBazar"
              className="w-[100px] h-[110px] align-middle cursor-pointer border border-gray-200 my-[8px] mx-[2px]"
            />
          </div>
        </div>
        {/* Copyright Container */}
        <div className="px-[15px] py-[16px] flex flex-row-reverse mx-[68px]">
          <div className="text-xs">
            تمامی حقوق این سایت متعلق به شرکت آوای همراه هوشمند هزاردستان (فروشگاه برنامه‌های موبایلی اندروید بازار) است.
          </div>
        </div>
    </>
  );
};

export default Footer;
