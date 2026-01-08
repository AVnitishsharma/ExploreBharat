import Nav from "./Component/Nav"
import Home from "./pages/Home"
import Footer from "./component/Footer"
import { Routes, Route} from "react-router-dom"
import Tajmahal from "./pages/historicalPlace/Tajmahal"
import ScrollToTop from "./component/ScrollToTop"
import Bihar from "./pages/states/Bihar"
import Notfound from "./pages/Notfound"

const App = () => {
  return (
    <>
      <Nav/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tajmahal" element={<Tajmahal />} />
        <Route path="/bihar" element={<Bihar />} />
        <Route path="*" element={<Notfound />} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App