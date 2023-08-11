import { Route, Routes } from "react-router";
import NavBarr from "./Components/NavBarr";
import SecondNav from "./Components/SecondNav";
import AllProducts from "./Components/AllProducts";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBarr />
      <SecondNav />
      <Routes>
        <Route path="/" element={<AllProducts />} />

      </Routes>
      <Footer />

    </>
  );
}

export default App;
