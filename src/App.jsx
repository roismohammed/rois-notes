import { Route, Routes } from "react-router-dom"
import Index from "./Index"
import TambahData from "./pages/bagian-data/TambahData"
import Detail from "./pages/bagian-tampilan/Detail1"
import Data from "./pages/bagian-data/Data"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/tambah-data" element={<TambahData/>}/>
        <Route path="/data" element={<Data/>}/>
      </Routes>
    </div>
  )
}

export default App
