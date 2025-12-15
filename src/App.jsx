import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {


  return (

    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path="/" element={<ItemListContainer text={"Bienvenidos a Zona Game"} />} />
        <Route path="/2" element={<ItemListContainer text={"Test Route"} />} />

      </Routes>

    </BrowserRouter>


  )
}

export default App
