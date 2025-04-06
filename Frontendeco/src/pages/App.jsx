import { LoginPage, SignUpPage, GildedGalleryHomepage, ProductForm, CartPage ,ProductInfoPage} from "./Routes"
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<GildedGalleryHomepage />} />
          <Route path="/add-product" element={<ProductForm />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductInfoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App