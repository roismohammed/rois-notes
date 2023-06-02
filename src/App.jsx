import { Route, Routes } from "react-router-dom"
import Index from "./Index"
import TambahData from "./pages/bagian-data/TambahData"
import Data from "./pages/bagian-data/Data"
import Detail1 from "./pages/bagian-tampilan/Detail1"


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/detail1/:id" element={<Detail1/>}/>
        <Route path="/tambah-data" element={<TambahData/>}/>
        <Route path="/data" element={<Data/>}/>
      </Routes>
    </div>
  )
}

export default App
