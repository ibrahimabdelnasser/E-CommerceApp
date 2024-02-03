import Home from "./componants/Home";
import Navbar from "./componants/Navbar";
import ProductList from "./componants/ProductList";
import { Route, Routes } from "react-router-dom";

import ProductDetails from "./componants/ProductDetails";
import Cart from "./componants/Cart";
import About from "./componants/About";
import Contact from "./componants/Contact";
function App() {
  return (

    <div className="App-header">

      <Navbar />
      <Routes>
        <Route path="product/:productId" element={
          <ProductDetails />
        } />

        <Route path="/about" element={
          <About />
        } />

        <Route path="/contact" element={
          <Contact />
        } />

        <Route path="/cart" element={<Cart />} />

        <Route path="/" element={
          <>
            <Home />
            <ProductList />
          </>
        } />

      </Routes>




    </div>

  );
}

export default App;
