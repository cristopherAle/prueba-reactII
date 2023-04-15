import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Carrito from '../Page/Carrito'
import HomePage from '../Page/HomePage'
import DetalleProductos from '../Page/DetalleProductos'

const AppRouter = () => {

  const[allProducts, setAllProducts] = useState([]);
  const[total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0)

  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='carrito' element={<Carrito/>}/>
            <Route path='detalle/:id' element={<DetalleProductos 
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
            />}
            
            />
        </Routes>
    </div>
  )
}

export default AppRouter
