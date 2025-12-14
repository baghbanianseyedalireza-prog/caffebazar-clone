import './App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import './index.css'

function App() {

  return (
    <div className="App">
      <Header/>
      {/* محتوای صفحه یا هدر */}
      <main className="font-display">
        <h1 className="text-2xl font-display text-center font-bold my-10">صفحه اصلی</h1>
      </main>

      {/* فوتر */}
      <Footer/>
    </div>
  )
}

export default App
