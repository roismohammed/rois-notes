import { Route, Routes } from "react-router-dom"
import Index from "./Index"
import TambahData from "./pages/bagian-data/TambahData"
import Data from "./pages/bagian-data/Data"
import Detail1 from "./pages/bagian-tampilan/Detail1"
import Contact from "./pages/bagian-tampilan/Contact"



function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/detail1/:id" element={<Detail1/>}/>
        <Route path="/tambah-data" element={<TambahData/>}/>
        <Route path="/data" element={<Data/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
