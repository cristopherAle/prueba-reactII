import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Carrito from '../Page/Carrito'
import HomePage from '../Page/HomePage'
import DetalleProductos from '../Page/DetalleProductos'

const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='carrito' element={<Carrito/>}/>
            <Route path='detalle/:id' element={<DetalleProductos />}/>
        </Routes>
    </div>
  )
}

export default AppRouter
