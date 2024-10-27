import { Route, Routes } from 'react-router';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import NavBarr from './Components/NavBarr';
import SecondNav from './Components/SecondNav';
import Footer from './Components/Footer';
import AllProducts from './pages/AllProducts';
import Details from './pages/Details';
import { useDispatch, useSelector } from 'react-redux';
import SmartPhones from './pages/SmartPhones';
import HomeDecoration from './pages/HomeDecoration';
import Groceries from './pages/Groceries';
import Skincare from './pages/Skincare';
import Fragrances from './pages/Fragrances';
import Laptops from './pages/Laptops';
import Furniture from './pages/Futniture';
import WomensDresses from './pages/WomensDresses';
import Tops from './pages/Tops';
import WomensShoes from './pages/WomensShoes';
import MensShirts from './pages/MensShirts';
import MensShoes from './pages/MensShoes';
import MensWatches from './pages/MensWatches';
import WomensWatches from './pages/WomensWatches';
import WomensBags from './pages/WomensBags';
import WomensJewellery from './pages/WomensJewellery';
import Sunglasses from './pages/Sunglasses';
import Automotive from './pages/Automotive';
import Motorcycle from './pages/Motorcycle';
import Lighting from './pages/Lighting';
import { useEffect, useState } from 'react';
import { fetchProducts } from './store/productSlice';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import MyProfile from './pages/MyProfile';
import WishList from './pages/WishList';
import CartBasket from './pages/CartBasket';
import { ToastContainer } from 'react-toastify';

<>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;700&family=Inter:wght@500&display=swap"
    rel="stylesheet"
  />
</>;
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const newQuery = e;
    setQuery(newQuery.toString().toLowerCase());
  };

  const { isLoading, products } = useSelector((state) => state.product);
  const product = products?.products;
  const routes = [
    {
      path: '/',
      element: (
        <AllProducts product={product} isLoading={isLoading} query={query} />
      ),
    },
    { path: '/products/:id', element: <Details /> },
    {
      path: '/categories/smartphones',
      element: (
        <SmartPhones product={product} isLoading={isLoading} query={query} />
      ),
    },
    {
      path: '/categories/laptops',
      element: (
        <Laptops product={product} isLoading={isLoading} query={query} />
      ),
    },
    {
      path: '/categories/fragrances',
      element: (
        <Fragrances product={product} isLoading={isLoading} query={query} />
      ),
    },
    {
      path: '/categories/skincare',
      element: (
        <Skincare product={product} isLoading={isLoading} query={query} />
      ),
    },
    {
      path: '/categories/groceries',
      element: (
        <Groceries product={product} isLoading={isLoading} query={query} />
      ),
    },
    {
      path: '/categories/homeDecoration',
      element: (
        <HomeDecoration product={product} isLoading={isLoading} query={query} />
      ),
    },
    {
      path: '/categories/furniture',
      element: (
        <Furniture product={product} isLoading={isLoading} query={query} />
      ),
    },
    {
      path: '/categories/tops',
      element: <Tops product={product} isLoading={isLoading} query={query} />,
    },
    {
      path: '/categories/womensdresses',
      element: (
        <WomensDresses product={product} isLoading={isLoading} query={query} />
      ),
    },
    {
      path: '/categories/womensshoes',
      element: (
        <WomensShoes product={product} isLoading={isLoading} query={query} />
      ),
    },
    {
      path: '/categories/mensshirts',
      element: (
        <MensShirts product={product} isLoading={isLoading} query={query} />
      ),
    },
    {
      path: '/categories/mensshoes',
      element: (
        <MensShoes product={product} isLoading={isLoading} query={query} />
      ),
    },
    {
      path: '/categories/menswatches',
      element: (
        <MensWatches product={product} isLoading={isLoading} query={query} />
      ),
    },
    {
      path: '/categories/womenswatches',
      element: (
        <WomensWatches product={product} isLoading={isLoading} query={query} />
      ),
    },
    {
      path: '/categories/womensbags',
      element: (
        <WomensBags product={product} isLoading={isLoading} query={query} />
      ),
    },
    {
      path: '/categories/womensjewellery',
      element: (
        <WomensJewellery
          product={product}
          isLoading={isLoading}
          query={query}
        />
      ),
    },
    {
      path: '/categories/sunglasses',
      element: (
        <Sunglasses product={product} isLoading={isLoading} query={query} />
      ),
    },
    {
      path: '/categories/automotive',
      element: (
        <Automotive product={product} isLoading={isLoading} query={query} />
      ),
    },
    {
      path: '/categories/motorcycle',
      element: (
        <Motorcycle product={product} isLoading={isLoading} query={query} />
      ),
    },
    {
      path: '/categories/lighting',
      element: (
        <Lighting product={product} isLoading={isLoading} query={query} />
      ),
    },
    { path: '/login', element: <LogIn /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/myprofile', element: <MyProfile /> },
    {
      path: '/wishlist',
      element: <WishList isLoading={isLoading} query={query} />,
    },
    { path: '/CartBasket', element: <CartBasket isLoading={isLoading} /> },
  ];

  return (
    <>
      <NavBarr handleSearch={handleSearch} />
      <SecondNav />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
