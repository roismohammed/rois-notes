import { Route, Routes } from "react-router-dom"
import Index from "./Index"
import TambahData from "./pages/bagian-data/TambahData"
import Data from "./pages/bagian-data/Data"
import Contact from "./pages/bagian-tampilan/Contact"
import Detail from "./pages/bagian-tampilan/Detail"
import EditData from "./pages/bagian-data/EditData"



function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/tambah-data" element={<TambahData/>}/>
        <Route path="/data" element={<Data/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/edit/:id" element={<EditData/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App
