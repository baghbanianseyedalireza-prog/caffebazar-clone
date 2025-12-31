import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* محتوای صفحه یا هدر */}
      <main className="font-display flex-1 shadow-md">
        <div className="flex flex-col">
          <img
            src="./src/assets/images/logobozorg.png"
            alt="CaffeBazar"
            className="w-[120px] h-[120px]"
          />
          <h1>بازار،بزرگترین استور فارسی زبان</h1>
          <p>کامل ترین مرجع بازی‌ها و برنامه‌های اندروید در ایران</p>
          <a
            className="bg-[#0ea960] hover:bg-[#0e9757] text-white flex flex-row-reverse justify-center px-4  cursor-pointer"
            href="https://cafebazaar.ir/install?manual=1&autostart"
            download
          >
            <img src="./src/assets/images/android-icon.svg" alt="CaffeBazar" />
            دانلود نسخه اندروید
          </a>
          <a
            className="flex flex-row-reverse justify-center text-[#0ea960] bg-white hover:bg-gray-50 cursor-pointer"
            href="https://cafebazaar.ir/download/bazaar-tv.apk"
            download
          >
            <img src="./src/assets/images/tv-icon.svg" alt="CaffeBazar" />
            نسخه اندروید TV
          </a>
        </div>
      </main>

      {/* فوتر */}

      <Footer />
    </div>
  );
}

export default App;
