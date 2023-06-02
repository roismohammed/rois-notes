import { Route, Routes } from "react-router-dom"
import Index from "./Index"
import TambahData from "./pages/bagian-data/TambahData"
import Detail from "./pages/bagian-tampilan/Detail1"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/tambah-data" element={<TambahData/>}/>
        <Route path="/detail" element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App
