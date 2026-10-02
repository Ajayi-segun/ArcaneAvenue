import './App.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Page from './routing'

function App() {
  return (
    <>
      <Header />
      <main className="main-content bg-paper">
        <Page/>
      </main>
      <Footer />
    </>
  )
}

export default App
