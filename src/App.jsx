import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import FeaturesCard from "./components/FeaturesCard.jsx";
import Icon1 from "./assets/images/icon1.webp";
import Icon2 from "./assets/images/icon2.webp";
import Icon3 from "./assets/images/icon3.webp";
import Icon4 from "./assets/images/icon4.webp";
import Icon5 from "./assets/images/icon5.webp";
import Icon6 from "./assets/images/icon6.webp";
import Icon7 from "./assets/images/icon7.webp";
import Icon8 from "./assets/images/icon8.webp";

import "./index.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* محتوای صفحه یا هدر */}
      <main className="font-display flex-1 shadow-md">
        {/*App Grid */}
        <div className=""></div>
        {/* Home Header*/}
        <div className="flex flex-col items-center text-center">
          <img
            src="./src/assets/images/logobozorg.png"
            alt="CaffeBazar"
            className="max-w-[124px] max-h-[124px] rounded-4xl bg-[#ffffff] shadow-2xl px-1 py-1 mt-2 mb-8"
          />
          <h1 className="text-3xl/[34px] font-medium mb-1">
            بازار،بزرگترین استور فارسی زبان
          </h1>
          <p className="text-[#6c757d] mb-2">
            کامل ترین مرجع بازی‌ها و برنامه‌های اندروید در ایران
          </p>
          <div className="mt-8">
            <a
              className="bg-[#0ea960] hover:bg-[#0e9757] text-white text-base/[56px] w-64 px-4 flex flex-row justify-center rounded-sm cursor-pointer"
              href="https://cafebazaar.ir/install?manual=1&autostart"
              download
            >
              <img
                src="./src/assets/images/android-icon.svg"
                alt="CaffeBazar"
                className="pl-2"
              />
              دانلود نسخه اندروید
            </a>
            <a
              className="flex flex-row justify-center text-[#0ea960] bg-white text-base/[56px] w-64 px-4 rounded-sm hover:bg-gray-50 cursor-pointer"
              href="https://cafebazaar.ir/download/bazaar-tv.apk"
              download
            >
              <img
                src="./src/assets/images/tv-icon.svg"
                alt="CaffeBazar"
                className="pl-2"
              />
              نسخه اندروید TV
            </a>
          </div>
        </div>
        {/*bazar features */}
        <div>
          <FeaturesCard
            image={Icon1}
            title={"دانلود برنامه‌ها و بازی‌های ایرانی و خارجی"}
            content={
              "انواع بازی‌ها و برنامه‌های ایرانی و خارجی را در بازار جستجو، نصب و به‌روز‌رسانی کنید"
            }
          />
        </div>
      </main>

      {/* فوتر */}

      <Footer />
    </div>
  );
}

export default App;
