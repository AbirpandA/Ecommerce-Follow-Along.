import { LoginPage, SignUpPage,GildedGalleryHomepage,ProductForm } from "./Routes"
import { BrowserRouter, Routes, Route } from "react-router-dom"



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/Home" element={<GildedGalleryHomepage />} />
          <Route path="/Add-product" element={<ProductForm />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App