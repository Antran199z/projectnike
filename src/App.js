import "./App.css";
import Homepage from "./pages/Home/Home";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import DetailProductPage from "./pages/DetailProduct/DetailProductPage";
import CartPage from "./pages/Cart/cartPage";
import NavSub from "./component/Navbar/NavSub";
function App() {

  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/productDetail/:id" element={<DetailProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      {/* <Homepage/> */}
    </div>
  );
}

export default App;
