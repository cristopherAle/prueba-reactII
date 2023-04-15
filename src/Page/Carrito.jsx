import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';

const Carrito = () => {
  const {dataPizza} = useContext(MyContext);


  console.log()
  return (
    <div>
        <h3>Carrito de Compras - Mamma Mia!</h3>
        <hr />
  
    </div>
  )
}

export default Carrito
