import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nyka from './component/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './component/Contact'
import Nav from './component/Nav'
import Libas from './component/Libas'
import Admin from './component/Admin'


function App() {


  // const [products, setProducts] = useState([]);

  // const handleUpload = async (size, price, image) => {
  //   const formData = new FormData();
  //   formData.append('image', image);
  //   formData.append('price', price);
  //   formData.append('size', size);

  //   await fetch('http://localhost:5000/api/products', {
  //     method: 'POST',
  //     body: formData,
  //     // body:JSON.stringify({name,price,image}),
  //     // headers:{"content-type":"application/json"}
  //   });

  //   // setName('');
  //   // setPrice('');
  //   // setImage(null);
  //   fetchProducts();
  // };

  // const fetchProducts = async () => {
  //   const res = await fetch('http://localhost:5000/api/products');
  //   const data = await res.json();
  //   setProducts(data);
  // };
  // useEffect(() => {
  //   fetchProducts();
  // }, []);
  
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path='/' element={<Libas />}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/ad' element={<Admin/>}/>

    
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
